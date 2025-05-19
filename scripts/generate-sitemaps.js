// scripts/generate-sitemaps.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');
const { Readable } = require('stream');
const glob = require('glob');
const fs = require('fs');

// Base URL for your site
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jmkcoder.github.io/uplink-protocol-docs/';
// Remove trailing slash if present to avoid double slash
const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

async function generateSitemaps() {
  try {
    console.log('Starting sitemap generation...');
    
    // Primary sitemap generation
    const links = [];
    
    // Add static pages
    const staticPages = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/getting-started', changefreq: 'weekly', priority: 0.9 },
      { url: '/analytics', changefreq: 'weekly', priority: 0.8 },
      { url: '/contact-us', changefreq: 'monthly', priority: 0.7 },
      { url: '/privacy-policy', changefreq: 'monthly', priority: 0.5 },
      { url: '/logic/form-controller', changefreq: 'weekly', priority: 0.9 },
    ];
    
    links.push(...staticPages);
    
    // Find all page.tsx files in the src/app directory
    const pageFiles = glob.sync('src/app/**/page.tsx');
    
    // Extract routes from page files
    for (const file of pageFiles) {
      const route = file
        .replace('src/app', '')
        .replace('/page.tsx', '')
        .replace(/\/\(.+\)/, '') // Remove route groups
        .replace(/\[(.+)\]/g, ':$1'); // Convert [param] to :param
      
      // Skip already added static pages and special pages
      if (
        route === '' || // root page
        staticPages.some(page => page.url === route) ||
        route.includes('api/') ||
        route.includes('_') // Skip pages with underscore (internal pages)
      ) {
        continue;
      }
      
      links.push({
        url: route || '/',
        changefreq: 'weekly',
        priority: 0.7,
      });
    }
      // Create a sitemap stream
    const stream = new SitemapStream({ hostname: normalizedBaseUrl });
    
    // Create a readable stream from our links
    const sitemapOutput = await streamToPromise(
      Readable.from(links).pipe(stream)
    );
    
    // Write the sitemap to the public directory
    fs.writeFileSync(
      resolve(__dirname, '../public/sitemap.xml'),
      sitemapOutput.toString()
    );
    
    console.log('Sitemap generated successfully!');
      // Create a robots.txt file
    const robotsTxt = `
# robots.txt for ${baseUrl}
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${normalizedBaseUrl}/sitemap.xml

# Disallow patterns
Disallow: /api/
Disallow: /_next/
`;
    
    fs.writeFileSync(
      resolve(__dirname, '../public/robots.txt'),
      robotsTxt.trim()
    );
    
    console.log('robots.txt generated successfully!');
    
  } catch (error) {
    console.error('Error generating sitemaps:', error);
  }
}

generateSitemaps();
