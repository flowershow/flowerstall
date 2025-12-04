I want to have a way to preview HTML and Markdown files locally, especially Markdown files that contain HTML. I want this to work with what I’m going to publish, which is a flower show. Most importantly, my HTML and Markdown files include Tailwind. I want a simple preview setup with live reload—like a local development server—that takes a Markdown file (currently index.md) which has a Markdown front matter at the top and essentially HTML and Markdown content. I want to process that and inject Tailwind (a style setup), then be able to view the live results so I can work on the file and see the output in real time.

## Design (project codename: flowerstall)

- Purpose: minimal reusable local preview tool to serve Markdown/HTML with Tailwind CDN injection, optional local CSS, and live reload.
- Inputs: target file path (default `index.md`); files can include front matter and inline HTML. Future: broader Markdown features.
- Processing: strip front matter via `gray-matter`; parse Markdown with unified/remark (remark-parse -> remark-rehype -> rehype-raw -> rehype-stringify) so Markdown and embedded HTML render.
- Wrapping template: HTML shell with Tailwind CDN script, optional `<link rel="stylesheet" href="/custom.css">` (and other local CSS from a configurable list), livereload client script, rendered body inside `<main>`.
- Serving: bare Node http server; route `/` renders chosen file in-memory (no build artifacts); static serving for CSS/asset files as needed.
- Live reload: `livereload` watcher on target content file(s) and CSS/asset glob; `connect-livereload`-style snippet injected into the template to auto-refresh.
- Config surface: CLI args or env for `--file` (default `index.md`), `--css` (comma list, default `custom.css` if present), port (default 3000), livereload port (default 35729). Keep defaults sane for reuse across projects.
- Future ideas: add markdown-it/remark plugins (anchors, syntax highlighting), toggle Tailwind CDN config, support directories, CLI packaging.

## Implementation plan (short)

- Create `preview/flowerstall` minimal Node project with dependencies: `unified`, `remark-parse`, `remark-rehype`, `rehype-raw`, `rehype-stringify`, `gray-matter`, `livereload`, `mime`.
- Implement `server.js`:
  - Parse CLI args/env for ports, target file, css list.
  - Start livereload server and file watchers (target md/html + CSS assets).
  - HTTP server: serve `/` by reading target file, stripping front matter, rendering Markdown->HTML, embedding into template with Tailwind CDN + CSS links + livereload script; serve static files (CSS/assets) with correct mime types.
  - Handle errors with simple readable responses.
- Add `package.json` with start script; document usage in `preview/README.md`.
