#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const matter = require('gray-matter');
const livereload = require('livereload');
const mime = require('mime');
const { unified } = require('unified');
const remarkParse = require('remark-parse');
const remarkRehype = require('remark-rehype');
const rehypeRaw = require('rehype-raw');
const rehypeStringify = require('rehype-stringify');

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    file: 'index.md',
    port: 3000,
    livereloadPort: 35729,
    css: [],
    root: process.cwd(),
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--file' && args[i + 1]) {
      options.file = args[++i];
    } else if ((arg === '--port' || arg === '-p') && args[i + 1]) {
      options.port = Number(args[++i]);
    } else if (arg === '--lr-port' && args[i + 1]) {
      options.livereloadPort = Number(args[++i]);
    } else if (arg === '--css' && args[i + 1]) {
      options.css = args[++i]
        .split(',')
        .map((c) => c.trim())
        .filter(Boolean);
    } else if (arg === '--root' && args[i + 1]) {
      options.root = path.resolve(args[++i]);
    }
  }

  return options;
}

async function renderMarkdownToHtml(markdown) {
  const processed = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(markdown);
  return processed.toString();
}

function resolveSafe(root, targetPath) {
  const resolved = path.resolve(root, targetPath);
  if (!resolved.startsWith(root)) {
    return null;
  }
  return resolved;
}

function htmlTemplate({ body, livereloadPort, cssLinks }) {
  const tailwindCdn = '<script src="https://cdn.tailwindcss.com"></script>';
  const cssTags = cssLinks
    .map((href) => `<link rel="stylesheet" href="${href}">`)
    .join('\n    ');
  const livereloadScript = livereloadPort
    ? `<script src="http://localhost:${livereloadPort}/livereload.js?snipver=1"></script>`
    : '';

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  ${tailwindCdn}
  ${cssTags}
</head>
<body class="min-h-screen">
  <main class="max-w-5xl mx-auto p-6 prose prose-lg">${body}</main>
  ${livereloadScript}
</body>
</html>`;
}

function startLivereload({ root, watchPaths, livereloadPort }) {
  const lrServer = livereload.createServer({ port: livereloadPort, exts: ['md', 'html', 'css', 'js'] });
  lrServer.watch(watchPaths.map((p) => path.join(root, p)));
  return lrServer;
}

async function createServer(options) {
  const root = options.root;
  const targetFile = resolveSafe(root, options.file);
  if (!targetFile) {
    throw new Error('Target file resolves outside root.');
  }

  const cssList = options.css.length ? options.css : ['custom.css'];
  const cssLinks = cssList
    .map((href) => ({ href, abs: resolveSafe(root, href) }))
    .filter((item) => item.abs && fs.existsSync(item.abs))
    .map((item) => `/${path.relative(root, item.abs).replace(/\\/g, '/')}`);

  const watchPaths = [options.file, ...cssList];
  const lrServer = startLivereload({ root, watchPaths, livereloadPort: options.livereloadPort });

  const server = http.createServer(async (req, res) => {
    try {
      const parsedUrl = url.parse(req.url);
      if (!parsedUrl.pathname || parsedUrl.pathname === '/') {
        if (!fs.existsSync(targetFile)) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end(`File not found: ${options.file}`);
          return;
        }
        const rawContent = fs.readFileSync(targetFile, 'utf8');
        const { content } = matter(rawContent);
        const body = await renderMarkdownToHtml(content);
        const html = htmlTemplate({ body, livereloadPort: options.livereloadPort, cssLinks });
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
        return;
      }

      const safePath = resolveSafe(root, parsedUrl.pathname.replace(/^\//, ''));
      if (!safePath || !fs.existsSync(safePath)) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
        return;
      }

      const stat = fs.statSync(safePath);
      if (stat.isDirectory()) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Directory listing disabled');
        return;
      }

      const type = mime.getType(safePath) || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type });
      fs.createReadStream(safePath).pipe(res);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`Server error: ${err.message}`);
    }
  });

  server.listen(options.port, () => {
    console.log(`flowerstall running at http://localhost:${options.port}`);
    console.log(`Serving ${options.file} from ${root}`);
    console.log(`Live reload on port ${options.livereloadPort}`);
  });
}

(async () => {
  try {
    const options = parseArgs();
    await createServer(options);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
})();
