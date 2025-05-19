import { MetadataRoute } from 'next';

// Add the required export for static site generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jmkcoder.github.io/uplink-protocol-docs/';
  // Remove trailing slash if present to avoid double slash
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/_next/*'],
    },
    sitemap: `${normalizedBaseUrl}/sitemap.xml`,
  };
}
