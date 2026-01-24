import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve(process.cwd(), 'dist');

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

// Ensure /sitemap.xml exists for crawlers/Search Console.
if (exists(sitemapXml)) {
  console.log('[postbuild] sitemap.xml already exists');
  process.exit(0);
}

if (exists(sitemapIndexXml)) {
  fs.copyFileSync(sitemapIndexXml, sitemapXml);
  console.log('[postbuild] created dist/sitemap.xml from dist/sitemap-index.xml');
  process.exit(0);
}

console.error('[postbuild] No sitemap-index.xml found to copy. Is @astrojs/sitemap enabled?');
process.exit(1);

