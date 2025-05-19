import { Metadata } from 'next';

// Base URL for the site
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jmkcoder.github.io/uplink-protocol-docs/';

// Default metadata configuration
export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Uplink Protocol | Logic as a Service',
    template: '%s | Uplink Protocol',
  },  description: 'Decouple logic from UI. Write once, use anywhere across React, Vue, Web Components, and beyond.',  keywords: ['uplink', 'protocol', 'logic as a service', 'form controller', 'react', 'vue', 'web components'],
  authors: [{ name: 'JmkCoder' }],
  creator: 'JmkCoder',
  publisher: 'JmkCoder',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Uplink Protocol',
    title: 'Uplink Protocol | Logic as a Service',
    description: 'Decouple logic from UI. Write once, use anywhere across React, Vue, Web Components, and beyond.',
    images: [
      {
        url: `${baseUrl}/api/og`,
        width: 1200,
        height: 630,
        alt: 'Uplink Protocol',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uplink Protocol | Logic as a Service',
    description: 'Decouple logic from UI. Write once, use anywhere across React, Vue, Web Components, and beyond.',
    images: [`${baseUrl}/api/og`],
    creator: '@UplinkProtocol',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${baseUrl}/site.webmanifest`,
  alternates: {
    canonical: baseUrl,
  },
};

// Function to generate metadata for specific pages
export function generateMetadata(
  title: string,
  description?: string,
  path?: string,
  additionalMetadata: Partial<Metadata> = {}
): Metadata {
  const pageUrl = path ? `${baseUrl}${path}` : baseUrl;
  const ogImageUrl = new URL('/api/og', baseUrl);
  
  // Add title and description as query parameters to the OG image URL
  ogImageUrl.searchParams.set('title', title);
  if (description) {
    ogImageUrl.searchParams.set('description', description);
  }
  
  return {
    ...defaultMetadata,
    title,
    description: description || defaultMetadata.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description: description || defaultMetadata.description as string,
      url: pageUrl,
      images: [
        {
          url: ogImageUrl.toString(),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description: description || defaultMetadata.description as string,
      images: [ogImageUrl.toString()],
    },
    ...additionalMetadata,
  };
}
