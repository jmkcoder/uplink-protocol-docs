// fix-sitemap-final.js
// Comprehensive script to fix sitemap URLs with proper base domains and paths

const fs = require('fs');
const path = require('path');
const util = require('util');

// Add colorful logging
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m'
};

const log = {
  info: (message) => console.log(`${colors.blue}${colors.bright}[INFO]${colors.reset} ${message}`),
  success: (message) => console.log(`${colors.green}${colors.bright}[SUCCESS]${colors.reset} ${message}`),
  warning: (message) => console.log(`${colors.yellow}${colors.bright}[WARNING]${colors.reset} ${message}`),
  error: (message) => console.log(`${colors.red}${colors.bright}[ERROR]${colors.reset} ${message}`)
};

// Configuration
const config = {
  // The base URL that all URLs should use
  baseUrl: 'https://jmkcoder.github.io/uplink-protocol-docs/',
  // File paths relative to project root
  sitemapPath: './public/sitemap.xml',
  robotsPath: './public/robots.txt',
  // Create backups before modifications
  createBackups: true
};

// Main function
async function fixSitemap() {
  log.info('Starting comprehensive sitemap URL fix process...');
  
  // Get absolute paths
  const sitemapPath = path.resolve(process.cwd(), config.sitemapPath);
  const robotsPath = path.resolve(process.cwd(), config.robotsPath);
  
  log.info(`Working with sitemap at: ${sitemapPath}`);
  
  // Check if files exist
  if (!fs.existsSync(sitemapPath)) {
    log.error(`Sitemap file not found at ${sitemapPath}`);
    process.exit(1);
  }
  
  // Create backups if enabled
  if (config.createBackups) {
    const backupPath = `${sitemapPath}.bak`;
    fs.copyFileSync(sitemapPath, backupPath);
    log.info(`Created backup at ${backupPath}`);
    
    if (fs.existsSync(robotsPath)) {
      const robotsBackupPath = `${robotsPath}.bak`;
      fs.copyFileSync(robotsPath, robotsBackupPath);
      log.info(`Created robots.txt backup at ${robotsBackupPath}`);
    }
  }
  
  // Read sitemap content
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  // Store original content for comparison
  const originalContent = sitemapContent;
  
  // Apply fixes
  
  // 1. Remove any source file paths
  sitemapContent = sitemapContent.replace(/<url>\s*<loc>https:\/\/[^<]*?\/src\/.*?<\/loc>.*?<\/url>/g, '');
  
  // 2. Ensure all URLs use the correct base domain with uplink-protocol-docs
  sitemapContent = sitemapContent.replace(
    /<loc>https:\/\/jmkcoder\.github\.io\/(?!uplink-protocol-docs)(.*?)<\/loc>/g, 
    '<loc>https://jmkcoder.github.io/uplink-protocol-docs/$1</loc>'
  );
  
  // 3. Fix the root URL to avoid double slash
  sitemapContent = sitemapContent.replace(
    /<loc>https:\/\/jmkcoder\.github\.io\/uplink-protocol-docs\/\/<\/loc>/g, 
    '<loc>https://jmkcoder.github.io/uplink-protocol-docs/</loc>'
  );
  
  // 4. Add trailing slashes to all URLs (except those with file extensions)
  sitemapContent = sitemapContent.replace(
    /<loc>(https:\/\/jmkcoder\.github\.io\/[^<]*?)(?<!\/)(?!\.html|\.xml|\.jpg|\.png|\.pdf)<\/loc>/g, 
    '<loc>$1/</loc>'
  );
  
  // 5. Remove duplicate uplink-protocol-docs entries
  const rootEntry = '<url><loc>https://jmkcoder.github.io/uplink-protocol-docs/</loc>';
  let firstIndex = sitemapContent.indexOf(rootEntry);
  
  if (firstIndex !== -1) {
    let secondIndex = sitemapContent.indexOf(rootEntry, firstIndex + 1);
    
    while (secondIndex !== -1) {
      // Find the closing </url> tag for this duplicate entry
      const closeTagIndex = sitemapContent.indexOf('</url>', secondIndex);
      if (closeTagIndex !== -1) {
        const endIndex = closeTagIndex + 6; // length of </url>
        // Remove the duplicate entry
        sitemapContent = sitemapContent.substring(0, secondIndex) + 
                         sitemapContent.substring(endIndex);
      }
      
      // Check if there are more duplicates
      secondIndex = sitemapContent.indexOf(rootEntry, firstIndex + 1);
    }
  }
  
  // 6. Clean up the XML (remove empty lines)
  sitemapContent = sitemapContent.replace(/(\r?\n)\s*\r?\n/g, '$1');
  
  // Write the fixed content back to the file
  if (sitemapContent !== originalContent) {
    fs.writeFileSync(sitemapPath, sitemapContent);
    log.success('Fixed sitemap.xml to ensure all URLs use the correct base and have trailing slashes.');
  } else {
    log.info('No changes needed to sitemap.xml.');
  }
  
  // Fix robots.txt if it exists
  if (fs.existsSync(robotsPath)) {
    let robotsContent = fs.readFileSync(robotsPath, 'utf8');
    const originalRobotsContent = robotsContent;
    
    // Ensure robots.txt references the correct sitemap URL
    robotsContent = robotsContent.replace(
      /Sitemap: https:\/\/jmkcoder\.github\.io\/(?!uplink-protocol-docs)(.*?)sitemap\.xml/g,
      'Sitemap: https://jmkcoder.github.io/uplink-protocol-docs/sitemap.xml'
    );
    
    // Ensure the base URL is correct in the robots.txt comment
    robotsContent = robotsContent.replace(
      /# robots\.txt for https:\/\/jmkcoder\.github\.io\/(?!uplink-protocol-docs)(.*?)$/gm,
      '# robots.txt for https://jmkcoder.github.io/uplink-protocol-docs/'
    );
    
    if (robotsContent !== originalRobotsContent) {
      fs.writeFileSync(robotsPath, robotsContent);
      log.success('Fixed robots.txt to use the correct base URL.');
    } else {
      log.info('No changes needed to robots.txt.');
    }
  }
  
  log.success('Sitemap URL fix process completed successfully.');
}

// Run the function
fixSitemap().catch(error => {
  log.error(`An error occurred: ${error.message}`);
  process.exit(1);
});
