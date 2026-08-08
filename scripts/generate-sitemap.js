import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://finance.truyon.com';

// Get all files from pages directory
const pagesDir = path.join(__dirname, '..', 'src', 'pages');
const pageFiles = fs.readdirSync(pagesDir);

// Filter out non-component files and generate slugs
const generatedPages = pageFiles
  .filter(file => {
    // Only include .jsx and .js files
    return (file.endsWith('.jsx') || file.endsWith('.js')) && 
           // Exclude files that don't start with capital letter (helpers, etc.)
           file[0] === file[0].toUpperCase() &&
           // Exclude specific files if needed
           !file.includes('index') &&
           !file.includes('Layout');
  })
  .map(file => {
    // Convert filename to URL slug
    // HomeLoanTips.jsx -> /home-loan-tips
    const slug = '/' + file
      .replace(/\.(jsx|js)$/, '')
      .replace(/([A-Z])/g, (match, letter, index) => {
        return index === 0 ? letter.toLowerCase() : '-' + letter.toLowerCase();
      });
    return slug;
  });

// Manual pages that might not be in the pages directory
const manualPages = [
  '/',
  '/blog',
];

// Combine all pages
const allPages = [...new Set([...manualPages, ...generatedPages])];

// Define special frequencies for specific pages
const getChangefreq = (page) => {
  if (page === '/' || page === '/blog') return 'daily';
  return 'weekly';
};

const getPriority = (page) => {
  if (page === '/') return '1.0';
  if (page === '/blog') return '0.9';
  return '0.8';
};

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${getChangefreq(page)}</changefreq>
    <priority>${getPriority(page)}</priority>
  </url>
`).join('')}
</urlset>`;

// Write to public folder
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated with ' + allPages.length + ' pages!');
console.log('📝 Pages: ' + allPages.join(', '));