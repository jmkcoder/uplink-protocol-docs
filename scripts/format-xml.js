// scripts/format-xml.js
// This script ensures XML files are properly formatted for Google's sitemap requirements
const fs = require('fs');
const path = require('path');

// Get sitemap path from command line arguments or use default
const sitemap = process.argv[2] || './out/sitemap.xml';
const sitemapPath = path.resolve(process.cwd(), sitemap);

console.log(`Formatting XML file: ${sitemapPath}`);

// Read the sitemap content
if (!fs.existsSync(sitemapPath)) {
  console.error(`File not found: ${sitemapPath}`);
  process.exit(1);
}

let content = fs.readFileSync(sitemapPath, 'utf8');
const originalContent = content;

// Add XML Schema if not present
if (!content.includes('xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"')) {
  content = content.replace(
    /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/,
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n  http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"'
  );
}

// Add line breaks and indentation for proper formatting
content = content.replace(/<url>/g, '\n<url>');
content = content.replace(/<\/url>/g, '</url>');
content = content.replace(/<loc>/g, '\n  <loc>');
content = content.replace(/<lastmod>/g, '\n  <lastmod>');
content = content.replace(/<changefreq>/g, '\n  <changefreq>');
content = content.replace(/<priority>/g, '\n  <priority>');
content = content.replace(/<\/urlset>/g, '\n</urlset>');

// Ensure valid XML syntax
content = content.replace(/>\s*</g, '>\n<');

// Remove any double line breaks
content = content.replace(/\n\s*\n/g, '\n');

// Write back to file if changes were made
if (content !== originalContent) {  
  fs.writeFileSync(sitemapPath, content);
  console.log('✅ XML file has been properly formatted with schema references');
} else {
  console.log('ℹ️ No changes needed, file already properly formatted');
}
