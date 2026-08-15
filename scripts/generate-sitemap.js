import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://finance.truyon.com';

// ============================================
// CONFIGURATION
// ============================================
const BLOG_DIR = path.join(__dirname, '..', 'src', 'blog');
const COMPONENTS_DIR = path.join(__dirname, '..', 'src', 'components');
const APP_JSX_PATH = path.join(__dirname, '..', 'src', 'App.jsx');

const EXCLUDE_COMPONENTS = [
  'AdUnits.jsx',
  'AdUnits.js',
  'PageLayout.jsx',
  'PageLayout.js',
  'index.js',
  'index.jsx',
];

// ============================================
// EXTRACT TOOLS FROM APP.JSX
// ============================================
function extractToolsFromAppJsx() {
  console.log('📖 Extracting tools from App.jsx...');
  
  if (!fs.existsSync(APP_JSX_PATH)) {
    console.error(`❌ App.jsx not found at: ${APP_JSX_PATH}`);
    return [];
  }
  
  const appContent = fs.readFileSync(APP_JSX_PATH, 'utf-8');
  
  // Find the TOOLS array and extract IDs
  const toolsMatch = appContent.match(/const\s+TOOLS\s*=\s*\[([\s\S]*?)\];/);
  if (!toolsMatch) {
    console.log('⚠️ TOOLS array not found in App.jsx');
    return [];
  }
  
  const toolsContent = toolsMatch[1];
  const idRegex = /id:\s*['"]([^'"]+)['"]/g;
  const ids = [];
  let match;
  while ((match = idRegex.exec(toolsContent)) !== null) {
    ids.push(match[1]);
  }
  
  console.log(`✅ Found ${ids.length} tools: ${ids.join(', ')}`);
  return ids;
}

// ============================================
// EXTRACT ROUTES FROM APP.JSX - MANUAL + TOOLS
// ============================================
function extractRoutesFromAppJsx() {
  console.log('📖 Building route list...');
  
  // 1. Get tools from App.jsx
  const toolIds = extractToolsFromAppJsx();
  
  // 2. Start with manual routes
  const routes = [
    '/',
    '/tools',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ];
  
  // 3. Add tool routes
  toolIds.forEach(id => {
    if (!routes.includes(`/${id}`)) {
      routes.push(`/${id}`);
    }
  });
  
  console.log(`✅ Total routes: ${routes.length}`);
  return routes;
}

// ============================================
// SCAN BLOG DIRECTORY
// ============================================
function scanBlogDirectory() {
  console.log('📁 Scanning blog directory...');
  const blogPages = [];
  
  if (!fs.existsSync(BLOG_DIR)) {
    console.warn(`⚠️ Blog directory not found: ${BLOG_DIR}`);
    return blogPages;
  }
  
  const files = fs.readdirSync(BLOG_DIR);
  
  for (const file of files) {
    if (!file.endsWith('.jsx') && !file.endsWith('.js')) continue;
    if (file === 'index.js' || file === 'index.jsx') continue;
    if (file === 'Blog.jsx' || file === 'Blog.js') continue;
    
    let slug = file
      .replace(/\.(jsx|js)$/, '')
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();
    
    blogPages.push({
      url: `/blog/${slug}`,
      priority: '0.8',
      changefreq: 'weekly',
    });
  }
  
  console.log(`✅ Found ${blogPages.length} blog posts`);
  return blogPages;
}

// ============================================
// SCAN COMPONENTS DIRECTORY
// ============================================
function scanComponentsDirectory() {
  console.log('📁 Scanning components directory...');
  const componentPages = [];
  
  if (!fs.existsSync(COMPONENTS_DIR)) {
    console.warn(`⚠️ Components directory not found: ${COMPONENTS_DIR}`);
    return componentPages;
  }
  
  const files = fs.readdirSync(COMPONENTS_DIR);
  
  for (const file of files) {
    if (EXCLUDE_COMPONENTS.includes(file)) continue;
    if (!file.endsWith('.jsx') && !file.endsWith('.js')) continue;
    if (file === 'index.js' || file === 'index.jsx') continue;
    
    let slug = file
      .replace(/\.(jsx|js)$/, '')
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();
    
    let priority = '0.7';
    if (slug.includes('calculator') || slug.includes('planner') || slug.includes('compare')) {
      priority = '0.8';
    }
    
    componentPages.push({
      url: `/${slug}`,
      priority: priority,
      changefreq: 'weekly',
    });
  }
  
  console.log(`✅ Found ${componentPages.length} component pages`);
  return componentPages;
}

// ============================================
// GENERATE SITEMAP XML
// ============================================
function generateSitemapXml(allPages) {
  const today = new Date().toISOString().split('T')[0];
  
  const urls = allPages.map(page => {
    if (!page.url) return null;
    return `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>${page.changefreq || 'weekly'}</changefreq>
      <priority>${page.priority || '0.7'}</priority>
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

Crawl-delay: 1

Host: ${baseUrl.replace('https://', '')}`;
}

// ============================================
// MAIN EXECUTION
// ============================================
function main() {
  console.log('🚀 Generating sitemap...\n');
  
  const appRoutes = extractRoutesFromAppJsx();
  const blogPages = scanBlogDirectory();
  const componentPages = scanComponentsDirectory();
  
  const allPages = [];
  
  // Add App.jsx routes
  appRoutes.forEach(route => {
    if (route === '/blog') return;
    if (route.startsWith('/blog/')) return;
    
    let priority = '0.7';
    let changefreq = 'weekly';
    
    if (route === '/') {
      priority = '1.0';
      changefreq = 'daily';
    } else if (route === '/tools') {
      priority = '0.9';
      changefreq = 'daily';
    } else if (route === '/contact' || route === '/privacy' || route === '/terms') {
      priority = '0.5';
      changefreq = 'monthly';
    }
    
    allPages.push({
      url: route,
      priority: priority,
      changefreq: changefreq,
    });
  });
  
  // Add blog pages
  blogPages.forEach(page => {
    if (!allPages.some(p => p.url === page.url)) {
      allPages.push(page);
    }
  });
  
  // Add component pages
  componentPages.forEach(page => {
    if (!allPages.some(p => p.url === page.url)) {
      allPages.push(page);
    }
  });
  
  // Sort: home first, then by priority
  allPages.sort((a, b) => {
    if (a.url === '/') return -1;
    if (b.url === '/') return 1;
    return parseFloat(b.priority) - parseFloat(a.priority);
  });
  
  console.log(`\n📋 Total pages: ${allPages.length}`);
  allPages.forEach(page => {
    console.log(`  ${page.url} (priority: ${page.priority})`);
  });
  
  console.log('\n📝 Generating sitemap.xml...');
  const sitemapXml = generateSitemapXml(allPages);
  const publicDir = path.join(__dirname, '..', 'public');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml);
  console.log(`✅ Sitemap saved to: ${sitemapPath}`);
  
  console.log('📝 Generating robots.txt...');
  const robotsTxt = generateRobotsTxt();
  const robotsPath = path.join(publicDir, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt);
  console.log(`✅ Robots.txt saved to: ${robotsPath}`);
  
  console.log('\n🎉 Sitemap generation complete!');
  console.log(`📄 Sitemap URL: ${baseUrl}/sitemap.xml`);
  console.log(`📄 Robots.txt URL: ${baseUrl}/robots.txt`);
  console.log(`\n📊 Total routes: ${allPages.length}`);
}

main();