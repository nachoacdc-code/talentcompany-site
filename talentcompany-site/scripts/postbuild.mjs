import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve(process.cwd(), 'dist');
const publicDir = path.resolve(process.cwd(), 'public');

function exists(p) {
  try {
    fs.accessSync(p, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

const sitemapXml = path.join(distDir, 'sitemap.xml');
const sitemapIndexXml = path.join(distDir, 'sitemap-index.xml');

if (!exists(distDir)) {
  console.error(`[postbuild] dist/ not found at: ${distDir}`);
  process.exit(1);
}

// Ensure dist/sitemap.xml exists for crawlers/Search Console, and also copy it into public/
// so it can be committed and referenced by robots.txt.
let source = null;

if (exists(sitemapXml)) {
  source = sitemapXml;
} else if (exists(sitemapIndexXml)) {
  fs.copyFileSync(sitemapIndexXml, sitemapXml);
  console.log('[postbuild] created dist/sitemap.xml from dist/sitemap-index.xml');
  source = sitemapXml;
}

if (!source) {
  console.error('[postbuild] No sitemap-index.xml found to copy. Is @astrojs/sitemap enabled?');
  process.exit(1);
}

if (!exists(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Copy sitemap files into public/ so they can be committed.
// This keeps /public/sitemap.xml aligned with the generated sitemap output.
const files = fs.readdirSync(distDir).filter((f) => /^sitemap(-\d+)?\.xml$/.test(f) || f === 'sitemap-index.xml');
for (const f of files) {
  fs.copyFileSync(path.join(distDir, f), path.join(publicDir, f));
}
console.log(`[postbuild] updated public/ sitemap files (${files.length}) from dist/`);

