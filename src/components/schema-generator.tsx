'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface SchemaGeneratorProps {
  title: string;
  description: string;
  type?: 'Article' | 'TechArticle' | 'WebPage' | 'Product' | 'SoftwareApplication';
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  keywords?: string[];
  author?: string;
}

export function SchemaGenerator({
  title,
  description,
  type = 'WebPage',  imageUrl,  datePublished = '2023-01-01T00:00:00+00:00',
  dateModified = new Date().toISOString(),
  keywords = [],
  author = 'JmkCoder',
}: SchemaGeneratorProps) {
  const pathname = usePathname();  const [schema, setSchema] = useState<Record<string, any>>({});
    useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jmkcoder.github.io/uplink-protocol-docs/';
    const fullUrl = `${baseUrl}${pathname}`;
    
    // Create base schema structure with proper typing
    const baseSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': type,
      headline: title,
      name: title,
      description,
      url: fullUrl,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': fullUrl,
      },
    };
    
    // Add image if provided
    if (imageUrl) {
      baseSchema['image'] = {
        '@type': 'ImageObject',
        url: imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`,
      };
    }
    
    // Add organization info
    baseSchema['publisher'] = {
      '@type': 'Organization',
      name: 'Uplink Protocol',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    };      // Add author info
    baseSchema['author'] = {
      '@type': 'Person',
      name: author,
    };
    
    // Add dates for time-based content
    if (['Article', 'TechArticle', 'BlogPosting'].includes(type)) {
      baseSchema['datePublished'] = datePublished;
      baseSchema['dateModified'] = dateModified;
    }
    
    // Add special properties for software
    if (type === 'SoftwareApplication') {
      baseSchema['applicationCategory'] = 'DeveloperApplication';
      baseSchema['offers'] = {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      };
      baseSchema['operatingSystem'] = 'Cross-platform';
    }
    
    // Add keywords for search optimization
    if (keywords.length > 0) {
      baseSchema['keywords'] = keywords.join(', ');
    }
    
    setSchema(baseSchema);
  }, [title, description, type, imageUrl, datePublished, dateModified, keywords, author, pathname]);
  
  if (!schema || Object.keys(schema).length === 0) {
    return null;
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
