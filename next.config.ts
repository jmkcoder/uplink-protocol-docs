import type { NextConfig } from "next";
import fs from 'fs';
import path from 'path';

const nextConfig: NextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  output: 'export',
  // Use the environment variable for basePath
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,
  // Disable image optimization for static exports
  images: {
    unoptimized: true,
  },
  // Configure asset prefix to match basePath
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',  // Note: Redirects don't work with output: 'export'
  // These are kept for documentation purposes and will need to be
  // implemented at the hosting level (e.g., GitHub Pages _redirects file)
  // redirects: async () => {
  //   return [
  //     {
  //       source: '/docs',
  //       destination: '/getting-started',
  //       permanent: true,
  //     },
  //     {
  //       source: '/form',
  //       destination: '/logic/form-controller',
  //       permanent: true,
  //     },
  //     {
  //       source: '/uplink',
  //       destination: '/logic/uplink-protocol',
  //       permanent: true,
  //     },
  //   ];
  // },
    // Custom hook for next.config.js
  webpack: (config, { isServer }) => {
    // Generate sitemap only on server build completion
    if (isServer) {
      config.plugins.push({
        apply: (compiler: any) => {
          compiler.hooks.afterEmit.tapPromise('GenerateSitemap', async () => {
            try {
              // Make sure the script exists
              const sitemapScript = path.join(process.cwd(), 'scripts', 'generate-sitemaps.js');
              if (fs.existsSync(sitemapScript)) {
                const { execSync } = require('child_process');
                console.log('Generating sitemap.xml...');
                execSync(`node ${sitemapScript}`);
                console.log('Sitemap generation complete!');
              }
            } catch (error) {
              console.error('Error generating sitemap:', error);
            }
            return Promise.resolve();
          });
        },
      });
    }
    return config;
  },
};

export default nextConfig;
