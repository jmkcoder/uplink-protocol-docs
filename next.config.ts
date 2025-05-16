import type { NextConfig } from "next";

// Get the base path from environment variable or use default
// This is set by GitHub Actions during deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  /* config options here */
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
  // Remove trailing slash for GitHub Pages compatibility
  trailingSlash: false,
  // Base path for GitHub Pages deployment
  basePath: basePath,
  // Add asset prefix for GitHub Pages
  assetPrefix: basePath,
};

export default nextConfig;
