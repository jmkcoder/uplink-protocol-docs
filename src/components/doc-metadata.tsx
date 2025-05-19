'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { generateFaqItems } from '@/lib/content-utils';

interface DocMetadataProps {
  content?: string;
  title?: string;
}

export function DocMetadata({ content, title }: DocMetadataProps) {
  const pathname = usePathname();
  const [faqItems, setFaqItems] = useState<Array<{question: string, answer: string}>>([]);
  
  useEffect(() => {
    if (content) {
      generateFaqItems(content)
        .then(items => {
          // Limit to 10 FAQ items for better performance
          setFaqItems(items.slice(0, 10));
        })
        .catch(err => {
          console.error('Error generating FAQ items:', err);
        });
    }
  }, [content]);
  
  // Don't render anything if no FAQs were generated
  if (faqItems.length === 0) {
    return null;
  }
  
  // Create structured data for FAQs
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
  
  // Create article structured data
  const articleStructuredData = {
    '@context': 'https://schema.org',    '@type': 'TechArticle',
    headline: title,    description: faqItems[0]?.answer.substring(0, 150) + '...',
    author: {
      '@type': 'Person',
      name: 'JmkCoder',
      url: process.env.NEXT_PUBLIC_BASE_URL || 'https://jmkcoder.github.io/uplink-protocol-docs/',
    },
    publisher: {
      '@type': 'Person',
      name: 'JmkCoder',
    },
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://jmkcoder.github.io/uplink-protocol-docs/'}${pathname}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_BASE_URL || 'https://jmkcoder.github.io/uplink-protocol-docs/'}${pathname}`,
    },
    datePublished: '2023-01-01T00:00:00+00:00',
    dateModified: new Date().toISOString(),
    articleSection: pathname.includes('form-controller') ? 'Form Controller' : 'Uplink Protocol',
    keywords: ['typescript', 'javascript', 'form validation', 'uplink protocol', 'web development'],
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
    </>
  );
}
