/**
 * Generates public/sitemap.xml and public/robots.txt from the content data.
 * Runs automatically before `npm run build` (see package.json "prebuild").
 */
import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// Load VITE_SITE_URL from .env if present (Vite isn't running here).
let siteUrl = process.env.VITE_SITE_URL;
const envFile = resolve(root, '.env');
if (!siteUrl && existsSync(envFile)) {
  const match = readFileSync(envFile, 'utf8').match(/^VITE_SITE_URL=(.*)$/m);
  if (match) siteUrl = match[1].trim();
}
siteUrl = (siteUrl || 'https://www.ajumogobiaokeke.com').replace(/\/$/, '');

const { pages } = await import('../src/data/pages.js');
const { practices } = await import('../src/data/practices.js');
const { people } = await import('../src/data/people.js');
const { publications } = await import('../src/data/publications.js');

const today = new Date().toISOString().slice(0, 10);
const entries = [
  ...pages.map((p) => ({ loc: p.to, priority: p.to === '/' ? '1.0' : '0.8', lastmod: today })),
  ...practices.map((p) => ({ loc: `/practices/${p.slug}`, priority: '0.8', lastmod: today })),
  ...people.map((p) => ({ loc: `/people/${p.slug}`, priority: '0.7', lastmod: today })),
  ...publications.map((p) => ({ loc: `/publications/${p.slug}`, priority: '0.6', lastmod: p.date })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map((e) => `  <url><loc>${siteUrl}${e.loc}</loc><lastmod>${e.lastmod}</lastmod><priority>${e.priority}</priority></url>`).join('\n')}
</urlset>
`;
writeFileSync(resolve(root, 'public/sitemap.xml'), xml);
writeFileSync(resolve(root, 'public/robots.txt'), `User-agent: *\nAllow: /\nDisallow: /search\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`sitemap.xml: ${entries.length} URLs → ${siteUrl}`);
