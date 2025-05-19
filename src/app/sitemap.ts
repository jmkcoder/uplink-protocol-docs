import { MetadataRoute } from 'next';
import * as fs from 'fs';
import * as path from 'path';

// Add the required export for static site generation
export const dynamic = 'force-static';
export const revalidate = false;

// Get the base URL from environment variables
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jmkcoder.github.io/uplink-protocol-docs/';

// Core pages to be included in the sitemap
const corePages = [
  '/',
  '/getting-started',
  '/analytics',
  '/contact-us',
  '/privacy-policy',
  '/logic/form-controller',
];

// Scan the app directory to find all page.tsx files which represent routes
function getRoutes(directory = path.join(process.cwd(), 'src/app'), basePath = '') {
  const routes: string[] = [];
  
  // Skip API routes and other special directories
  const skipDirs = ['api', '_media', '__docs__', '__tests__'];
  
  try {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
      const filePath = path.join(directory, file);
      const relativePath = path.join(basePath, file);
      const isDirectory = fs.statSync(filePath).isDirectory();
      
      // Skip special directories
      if (isDirectory && skipDirs.includes(file)) {
        continue;
      }
      
      if (isDirectory) {
        // Recursively scan subdirectories
        routes.push(...getRoutes(filePath, relativePath));
      } else if (file === 'page.tsx') {
        // Found a page, add its route
        // For the root page, use '/' instead of an empty string
        const routePath = basePath ? `/${basePath.replace(/\\/g, '/')}` : '/';
        routes.push(routePath);
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${directory}:`, error);
  }
  
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  try {
    // Get all routes from the app directory
    const dynamicRoutes = getRoutes();
    
    // Create a set of unique routes (avoid duplicates)
    const uniqueRoutes = new Set([...corePages, ...dynamicRoutes]);
    
    // Map routes to sitemap entries
    const routes = Array.from(uniqueRoutes).map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '/' ? 'daily' : 'weekly' as const,
      priority: route === '/' 
        ? 1.0 
        : route.split('/').length === 2 
          ? 0.8 
          : 0.6,
    }));
    
    return routes;  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Fallback to core pages if there's an error
    return corePages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === '/' ? 'daily' : 'weekly') as 'daily' | 'weekly',
      priority: route === '/' ? 1.0 : 0.8,
    }));
  }
}
