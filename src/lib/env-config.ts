/**
 * This file handles environment-specific configurations
 * It automatically adjusts paths when deployed to GitHub Pages
 */

export const getBaseUrl = () => {
  // Get base path from environment variable (set in GitHub Actions)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // In browser context
  if (typeof window !== 'undefined') {
    return window.location.origin + basePath;
  }
  
  // In server context (build time)
  return basePath;
};

export const getApiUrl = (path: string) => {
  const baseUrl = getBaseUrl();
  return `${baseUrl}/api${path}`;
};

export const getAssetUrl = (path: string) => {
  const baseUrl = getBaseUrl();
  return `${baseUrl}${path}`;
};
