// Remove 404 page from sitemap
const fs = require('fs');
const path = require('path');

// Read the sitemap file
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Check if 404 page is in the sitemap
if (sitemapContent.includes('/404/page.tsx')) {
  console.log('Found 404 page entry in sitemap, removing it...');
  
  // Remove the 404 page entry
  const pattern = /<url><loc>https:\/\/jmkcoder\.github\.io\/src\/app\/404\/page\.tsx<\/loc><changefreq>weekly<\/changefreq><priority>0\.7<\/priority><\/url>/g;
  sitemapContent = sitemapContent.replace(pattern, '');
  
  // Write the updated content back to the file
  fs.writeFileSync(sitemapPath, sitemapContent);
  
  console.log('404 page removed from sitemap.xml');
} else {
  console.log('No 404 page entry found in sitemap.');
}
