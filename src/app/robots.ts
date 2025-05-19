import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/_next/*'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://jmkcoder.github.io/uplink-protocol-docs/'}/sitemap.xml`,
  };
}
