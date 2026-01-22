  # FlowerStall

<img src="flowerstall-logo.png" width="120" alt="logo" />

Minimal local preview server for Markdown/HTML with Tailwind CDN injection, optional local CSS, and live reload.

## Features
- Strips front matter via gray-matter.
- Renders Markdown (including inline HTML) using unified + remark + rehype.
- Injects Tailwind CDN and optional local CSS files (defaults to `custom.css` if it exists).
- Live reload via livereload watcher on the content file and CSS assets.
- Serves static files from the chosen root for CSS/assets.

## Usage
```
cd flowerstall
npm install
npm start -- --file ../index.md --css custom.css --port 3000 --lr-port 35729 --root ..
# or use the CLI wrapper (no npm script needed):
./flowerstall ../index.md --css custom.css --port 3000 --lr-port 35729
```
- `--file` (default `index.md`): path to the Markdown/HTML file to render.
- `--css`: comma-separated list of CSS files to link (resolved relative to root). Defaults to `custom.css` if present.
- `--port`/`--lr-port`: HTTP and livereload ports. Use `--no-lr` to disable livereload (helpful if ports are blocked).
- `--root` (default file directory if not provided): content root for resolving files and serving static assets. If the file is outside the provided root, the file's directory is used automatically.

Open `http://localhost:3000` to view. Edits to the target file or watched CSS will auto-refresh.

## Notes
- Uses Tailwind via CDN for simplicity; no build step required.
- For additional assets, place them under the root and they will be served with correct mime types.
