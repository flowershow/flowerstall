#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const matter = require('gray-matter');
const livereload = require('livereload');
const mime = require('mime');
const { unified } = require('unified');
const remarkParse = require('remark-parse').default;
const remarkRehype = require('remark-rehype').default;
const rehypeRaw = require('rehype-raw').default;
const rehypeStringify = require('rehype-stringify').default;

function showHelp() {
  console.log(`Usage: flowerstall [directory] [options]

Starts the flowerstall preview server. Serves all markdown files from a directory.

URL routing:
  /           → index.md
  /about      → about.md
  /foo/bar    → foo/bar.md (or foo/bar/index.md)

Options:
  --css <list>       Comma-separated CSS files to include (auto-detects custom.css)
  --port, -p <N>     Server port (default: 3000)
  --lr-port <N>      Live reload port (default: 35729)
  --no-lr            Disable live reload
  -h, --help         Show this help message

Examples:
  flowerstall
  flowerstall ./my-site
  flowerstall --port 8080
  flowerstall ./docs --css styles.css,theme.css`);
}

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    port: 3000,
    livereloadPort: 35729,
    livereload: true,
    css: [],
    root: process.cwd(),
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '-h' || arg === '--help') {
      showHelp();
      process.exit(0);
    } else if ((arg === '--port' || arg === '-p') && args[i + 1]) {
      options.port = Number(args[++i]);
    } else if (arg === '--lr-port' && args[i + 1]) {
      options.livereloadPort = Number(args[++i]);
    } else if (arg === '--no-lr' || arg === '--no-livereload') {
      options.livereload = false;
    } else if (arg === '--css' && args[i + 1]) {
      options.css = args[++i]
        .split(',')
        .map((c) => c.trim())
        .filter(Boolean);
    } else if (!arg.startsWith('-')) {
      // Positional argument is the root directory
      options.root = path.resolve(arg);
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
  return resolved.startsWith(root) ? resolved : null;
}

function htmlTemplate({ body, livereloadPort, cssLinks }) {
  const tailwindCdn = '<script src="https://cdn.tailwindcss.com"></script>';
  const cssTags = cssLinks
    .map((href) => `<link rel="stylesheet" href="${href}">`)
    .join('\n    ');
  const livereloadScript =
    livereloadPort && Number.isInteger(livereloadPort) && livereloadPort > 0
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
  try {
    const lrServer = livereload.createServer({ port: livereloadPort, exts: ['md', 'html', 'css', 'js'] });
    lrServer.watch(watchPaths);
    const actualPort = lrServer?.server?.address()?.port || livereloadPort;
    return { server: lrServer, port: actualPort };
  } catch (err) {
    console.warn(`Livereload disabled (${err.code || 'error'}: ${err.message})`);
    return { server: null, port: null };
  }
}

function findMarkdownFile(root, urlPath) {
  // For root path, look for index.md
  if (!urlPath || urlPath === '/') {
    const indexFile = path.join(root, 'index.md');
    return fs.existsSync(indexFile) ? indexFile : null;
  }

  // Remove leading slash and try different patterns
  const cleanPath = urlPath.replace(/^\//, '').replace(/\/$/, '');

  // Try: /about → about.md
  const directFile = path.join(root, cleanPath + '.md');
  if (fs.existsSync(directFile)) {
    return directFile;
  }

  // Try: /about → about/index.md
  const indexInDir = path.join(root, cleanPath, 'index.md');
  if (fs.existsSync(indexInDir)) {
    return indexInDir;
  }

  return null;
}

async function createServer(options) {
  const root = path.resolve(options.root);

  // Auto-detect custom.css if no CSS specified
  const cssList = options.css.length ? options.css : [];
  const customCssPath = path.join(root, 'custom.css');
  if (!options.css.length && fs.existsSync(customCssPath)) {
    cssList.push('custom.css');
  }

  const cssFiles = cssList
    .map((href) => {
      const abs = path.isAbsolute(href) ? href : path.join(root, href);
      return { href, abs };
    })
    .filter((item) => fs.existsSync(item.abs));
  const cssLinks = cssFiles.map((item) => `/${path.relative(root, item.abs).replace(/\\/g, '/')}`);

  const lrInfo = options.livereload
    ? startLivereload({ root, watchPaths: [root], livereloadPort: options.livereloadPort })
    : { server: null, port: null };

  const server = http.createServer(async (req, res) => {
    try {
      const parsedUrl = url.parse(req.url);
      const urlPath = parsedUrl.pathname || '/';

      // First, check if it's a request for a markdown page (no extension or /)
      const hasExtension = path.extname(urlPath) !== '';

      if (!hasExtension) {
        const mdFile = findMarkdownFile(root, urlPath);
        if (mdFile) {
          const safePath = resolveSafe(root, path.relative(root, mdFile));
          if (!safePath) {
            res.writeHead(403, { 'Content-Type': 'text/plain' });
            res.end('Forbidden');
            return;
          }
          const rawContent = fs.readFileSync(mdFile, 'utf8');
          const { content } = matter(rawContent);
          const body = await renderMarkdownToHtml(content);
          const html = htmlTemplate({ body, livereloadPort: lrInfo.port, cssLinks });
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(html);
          return;
        }
      }

      // Otherwise, try to serve as static file
      const safePath = resolveSafe(root, urlPath.replace(/^\//, ''));
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
    console.log(`Serving markdown from ${root}`);
    if (cssLinks.length) {
      console.log(`CSS: ${cssLinks.join(', ')}`);
    }
    if (lrInfo.port) {
      console.log(`Live reload on port ${lrInfo.port}`);
    }
  });
}

if (require.main === module) {
  (async () => {
    try {
      const options = parseArgs();
      await createServer(options);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  })();
}

module.exports = {
  renderMarkdownToHtml,
};
