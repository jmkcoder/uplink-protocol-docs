'use client';

import { usePathname } from 'next/navigation';
import { SchemaGenerator } from './schema-generator';
import { CanonicalURL } from './canonical-url';
import { useEffect } from 'react';

interface SEOMetatagsProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article' | 'product';
  published?: string;
  modified?: string;
  author?: string;
  noindex?: boolean;
}

export function SEOMetatags({
  title,
  description,
  keywords = [],
  image,
  type = 'website',
  published,
  modified,
  author,
  noindex = false,
}: SEOMetatagsProps) {
  const pathname = usePathname();
  
  useEffect(() => {
    // Map component props to corresponding meta tags
    const metaTags: Record<string, string> = {
      'title': title || 'Uplink Protocol | Logic as a Service',
      'description': description || 'Decouple logic from UI. Write once, use anywhere across React, Vue, Web Components, and beyond.',
    };
    
    // Add meta tags to document head
    Object.entries(metaTags).forEach(([name, content]) => {
      // Check if meta tag already exists
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      
      // If not, create a new one
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
      
      // Set the content
      metaTag.setAttribute('content', content);
    });
      // Set Open Graph tags
    const ogTags: Record<string, string> = {
      'og:title': title || 'Uplink Protocol',
      'og:description': description || 'Decouple logic from UI. Write once, use anywhere across React, Vue, Web Components, and beyond.',
      'og:type': type,
      'og:url': `${process.env.NEXT_PUBLIC_BASE_URL || 'https://jmkcoder.github.io/uplink-protocol-docs/'}${pathname}`,
    };
    
    if (image) {
      ogTags['og:image'] = image.startsWith('http') 
        ? image 
        : `${process.env.NEXT_PUBLIC_BASE_URL || 'https://jmkcoder.github.io/uplink-protocol-docs/'}${image}`;
    }
    
    // Add Open Graph tags to document head
    Object.entries(ogTags).forEach(([property, content]) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      
      ogTag.setAttribute('content', content);
    });
    
    // Add Twitter Card tags
    const twitterTags: Record<string, string> = {
      'twitter:card': 'summary_large_image',
      'twitter:title': title || 'Uplink Protocol',
      'twitter:description': description || 'Decouple logic from UI. Write once, use anywhere across React, Vue, Web Components, and beyond.',
    };
      if (image) {
      twitterTags['twitter:image'] = image.startsWith('http') 
        ? image 
        : `${process.env.NEXT_PUBLIC_BASE_URL || 'https://jmkcoder.github.io/uplink-protocol-docs/'}${image}`;
    }
    
    // Add Twitter Card tags to document head
    Object.entries(twitterTags).forEach(([name, content]) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      
      twitterTag.setAttribute('content', content);
    });
    
    // Handle robots meta tag
    let robotsTag = document.querySelector('meta[name="robots"]');
    
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsTag);
    }
    
    robotsTag.setAttribute(
      'content', 
      noindex ? 'noindex, nofollow' : 'index, follow'
    );
    
    // Add keywords meta tag if provided
    if (keywords.length > 0) {
      let keywordsTag = document.querySelector('meta[name="keywords"]');
      
      if (!keywordsTag) {
        keywordsTag = document.createElement('meta');
        keywordsTag.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsTag);
      }
      
      keywordsTag.setAttribute('content', keywords.join(', '));
    }
    
  }, [title, description, keywords, image, type, noindex, pathname]);
  
  // Determine schema type based on content type
  let schemaType: 'WebPage' | 'Article' | 'Product' | 'SoftwareApplication' = 'WebPage';
  
  if (type === 'article') {
    schemaType = 'Article';
  } else if (type === 'product') {
    schemaType = 'SoftwareApplication';
  }
  
  return (
    <>
      <CanonicalURL />
      <SchemaGenerator
        title={title || 'Uplink Protocol | Logic as a Service'}
        description={description || 'Decouple logic from UI. Write once, use anywhere across React, Vue, Web Components, and beyond.'}
        type={schemaType}        imageUrl={image}        datePublished={published}
        dateModified={modified || new Date().toISOString()}
        keywords={keywords}
        author={author || 'JmkCoder'}
      />
    </>
  );
}
