// scripts/generate-sitemaps.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');
const { Readable } = require('stream');
const glob = require('glob');
const fs = require('fs');

// Base URL for your site
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jmkcoder.github.io/uplink-protocol-docs/';
// For normalize operations only - when generating URLs we'll ensure the trailing slash
const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

// Ensure all URLs are under uplink-protocol-docs
const ensureCorrectDomain = (url) => {
  if (url.includes('jmkcoder.github.io') && !url.includes('uplink-protocol-docs')) {
    return url.replace('jmkcoder.github.io', 'jmkcoder.github.io/uplink-protocol-docs');
  }
  return url;
};

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
      // Find all page.tsx files in the src/app directory, exclude 404 page
    const pageFiles = glob.sync('src/app/**/page.tsx').filter(file => {
      // Explicitly exclude 404 pages
      return !file.includes('/404/') && !file.includes('\\404\\');
    });
    
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
    }    // Create a sitemap stream
    const stream = new SitemapStream({ hostname: ensureCorrectDomain(normalizedBaseUrl) });
    
    // Create a readable stream from our links
    const sitemapOutput = await streamToPromise(
      Readable.from(links).pipe(stream)
    );
    
    // Fix: Ensure all URLs in the sitemap have trailing slashes
    let sitemapContent = sitemapOutput.toString();
    
    // Add XML Schema declaration to help Google parse the sitemap
    sitemapContent = sitemapContent.replace(
      '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n  http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">'
    );
    
    // Format the XML with line breaks for better readability
    sitemapContent = sitemapContent.replace(/<url>/g, '\n<url>');
    sitemapContent = sitemapContent.replace(/<\/url>/g, '</url>');
    sitemapContent = sitemapContent.replace(/<loc>/g, '\n<loc>');
    sitemapContent = sitemapContent.replace(/<lastmod>/g, '\n<lastmod>');
    sitemapContent = sitemapContent.replace(/<changefreq>/g, '\n<changefreq>');
    sitemapContent = sitemapContent.replace(/<priority>/g, '\n<priority>');
    sitemapContent = sitemapContent.replace(/<\/urlset>/g, '\n</urlset>');
    
    // Regular expression to add trailing slash to all <loc> URLs that don't have one and don't end with a file extension
    sitemapContent = sitemapContent.replace(/<loc>(https:\/\/[^<]+?)(?!\/|\.xml|\.html|\.jpg|\.png|\.pdf)(<\/loc>)/g, '<loc>$1/$2');
    
    // Ensure all URLs use uplink-protocol-docs
    sitemapContent = sitemapContent.replace(/<loc>https:\/\/jmkcoder\.github\.io\/(?!uplink-protocol-docs)(.*?)<\/loc>/g, '<loc>https://jmkcoder.github.io/uplink-protocol-docs/$1</loc>');
    
    // Write the sitemap to the public directory
    fs.writeFileSync(
      resolve(__dirname, '../public/sitemap.xml'),
      sitemapContent
    );
    
    console.log('Sitemap generated successfully!');
      // Create a robots.txt file
    const robotsTxt = `
# robots.txt for ${ensureCorrectDomain(baseUrl)}
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${ensureCorrectDomain(normalizedBaseUrl)}/sitemap.xml

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
