import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://finance.truyon.com';
const APP_JSX_PATH = path.join(__dirname, '..', 'src', 'App.jsx');

// ============================================
// EXTRACT ROUTES FROM APP.JSX
// ============================================

function extractRoutesFromAppJsx() {
  console.log('📖 Reading routes from App.jsx...');
  
  const appContent = fs.readFileSync(APP_JSX_PATH, 'utf-8');
  
  // Match all route patterns in your App.jsx
  // Pattern 1: if (path === '/some-route') { return <Component />; }
  const routeRegex = /if\s*\(\s*path\s*===\s*['"]([^'"]+)['"]\s*\)/g;
  
  // Pattern 2: <Route path="/some-route" ... /> (if you use React Router)
  const routeRegex2 = /<Route\s+path=['"]([^'"]+)['"]/g;
  
  const routes = [];
  let match;
  
  // Match if statements (your current App.jsx structure)
  while ((match = routeRegex.exec(appContent)) !== null) {
    const path = match[1];
    if (path && !routes.includes(path)) {
      routes.push(path);
    }
  }
  
  // Also match React Router routes (if you switch in future)
  while ((match = routeRegex2.exec(appContent)) !== null) {
    const path = match[1];
    if (path && !routes.includes(path) && !path.includes('*') && !path.includes(':')) {
      routes.push(path);
    }
  }
  
  console.log(`✅ Found ${routes.length} routes in App.jsx`);
  return routes;
}

// ============================================
// GENERATE SITEMAP XML FROM ROUTES
// ============================================

function generateSitemapXml(routes) {
  const today = new Date().toISOString().split('T')[0];
  
  const getPriority = (path) => {
    if (path === '/') return '1.0';
    if (path === '/blog') return '0.9';
    if (path.startsWith('/blog/')) return '0.8';
    if (path === '/contact' || path === '/privacy' || path === '/terms') return '0.5';
    return '0.8';
  };
  
  const getChangefreq = (path) => {
    if (path === '/' || path === '/blog') return 'daily';
    if (path.startsWith('/blog/')) return 'weekly';
    return 'weekly';
  };
  
  const urls = routes.map(route => {
    // Skip invalid routes
    if (!route || route.includes('*') || route.includes(':')) return null;
    
    return `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>${getChangefreq(route)}</changefreq>
      <priority>${getPriority(route)}</priority>
    </url>
  `;
  }).filter(Boolean).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

// ============================================
// GENERATE ROBOTS.TXT
// ============================================

function generateRobotsTxt() {
  return `# robots.txt for finance.truyon.com
User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin or private paths
Disallow: /admin/
Disallow: /api/
Disallow: /private/

# Crawl-delay for aggressive bots
Crawl-delay: 1

Host: ${baseUrl.replace('https://', '')}`;
}

// ============================================
// MAIN EXECUTION
// ============================================

function main() {
  console.log('🚀 Generating sitemap from App.jsx routes...\n');
  
  // Extract routes from App.jsx
  const routes = extractRoutesFromAppJsx();
  
  if (routes.length === 0) {
    console.error('❌ No routes found in App.jsx!');
    process.exit(1);
  }
  
  // Print routes for debugging
  console.log('\n📋 Routes found:');
  routes.forEach(route => {
    console.log(`  ${route}`);
  });
  
  // Generate sitemap.xml
  console.log('\n📝 Generating sitemap.xml...');
  const sitemapXml = generateSitemapXml(routes);
  const publicDir = path.join(__dirname, '..', 'public');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml);
  console.log(`✅ Sitemap saved to: ${sitemapPath}`);
  
  // Generate robots.txt
  console.log('📝 Generating robots.txt...');
  const robotsTxt = generateRobotsTxt();
  const robotsPath = path.join(publicDir, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt);
  console.log(`✅ Robots.txt saved to: ${robotsPath}`);
  
  console.log('\n🎉 Sitemap generation complete!');
  console.log(`📄 Sitemap URL: ${baseUrl}/sitemap.xml`);
  console.log(`📄 Robots.txt URL: ${baseUrl}/robots.txt`);
  console.log(`\n📊 Total routes: ${routes.length}`);
}

main();