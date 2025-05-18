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
  // Use the environment variable for basePath
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,
  // Disable image optimization for static exports
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
