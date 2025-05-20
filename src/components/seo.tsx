'use client';

import { BreadcrumbGenerator } from './breadcrumb-generator';
import { SoftwareJsonLd } from './json-ld';
import { usePathname } from 'next/navigation';
import { SEOMetatags } from './seo-metatags';
import { DocMetadata } from './doc-metadata';

interface SEOProps {
  type?: 'software' | 'documentation' | 'general';
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;  content?: string;
  noindex?: boolean;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

export function SEO({
  type = 'general',
  title,
  description,
  keywords = [],
  image,  content,
  noindex = false,
  datePublished,
  dateModified,
  author,
}: SEOProps) {
  const pathname = usePathname();
  
  // Determine schema type based on content type
  let ogType = 'website';
  
  if (type === 'documentation') {
    ogType = 'article';
  } else if (type === 'software') {
    ogType = 'product';
  }
  
  return (
    <>
      {/* Core SEO meta tags */}
      <SEOMetatags
        title={title}
        description={description}
        keywords={keywords}
        image={image || '/api/og'}
        type={ogType as 'website' | 'article' | 'product'}
        published={datePublished}
        modified={dateModified}
        author={author}
        noindex={noindex}
      />
      
      {/* Add breadcrumbs for all pages except homepage */}
      {pathname !== '/' && <BreadcrumbGenerator />}
      
      {/* Add software application schema for appropriate pages */}
      {(type === 'software' || pathname.includes('/getting-started')) && <SoftwareJsonLd />}
      
      {/* Add documentation schema for documentation pages */}
      {type === 'documentation' && content && (
        <DocMetadata content={content} title={title} />
      )}
        {/* Social share buttons are rendered separately */}
    </>
  );
}
