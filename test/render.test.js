const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { renderMarkdownToHtml } = require('../server');

test('renders markdown to html', async () => {
  const html = await renderMarkdownToHtml('# Hello');
  assert.match(html, /<h1[^>]*>Hello<\/h1>/);
});

test('preserves inline html', async () => {
  const html = await renderMarkdownToHtml('Paragraph <div class="x">hi</div>');
  assert.match(html, /<div class="x">hi<\/div>/);
});

test('processes sample content', async () => {
  const samplePath = path.join(__dirname, '..', 'sample', 'metacrisis.md');
  const raw = fs.readFileSync(samplePath, 'utf8');
  const { content } = matter(raw);
  const html = await renderMarkdownToHtml(content);
  assert.match(html, /Metacrisis/);
});
