import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://finance.truyon.com';

// List all your pages - UPDATE THIS AS YOU ADD MORE PAGES
const pages = [
  '/',
  '/blog',
  '/upi-charges-bill',
  '/rbi-repo-rate-august-2026',
  '/home-loan-tips',
  '/sebi-mf-pms-proposal',
  '/sip-vs-fd',
  '/goldman-sachs-gdp-upgrade',
  '/budget-2026',
  '/moodys-forecast',
  '/income-tax-rules-2026',
  '/health-insurance-guide',
  '/terms',
  '/privacy',
  '/contact',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '/' || page === '/blog' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '/' ? '1.0' : page === '/blog' ? '0.9' : '0.8'}</priority>
  </url>
`).join('')}
</urlset>`;

// Write to public folder
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated with ' + pages.length + ' pages!');
console.log('📝 Pages: ' + pages.join(', '));
