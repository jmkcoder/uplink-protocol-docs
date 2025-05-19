'use client';

import { usePathname } from 'next/navigation';
import { BreadcrumbJsonLd } from '@/components/json-ld';

export function BreadcrumbGenerator() {
  const pathname = usePathname();
  
  // Skip rendering breadcrumbs on the homepage
  if (pathname === '/') {
    return null;
  }
    // Split the pathname into segments
  const segments = pathname.split('/').filter(Boolean);
  
  // Generate breadcrumb items
  const breadcrumbItems = [
    {
      position: 1,
      name: 'Home',
      item: process.env.NEXT_PUBLIC_BASE_URL || 'https://jmkcoder.github.io/uplink-protocol-docs/',
    },
    ...segments.map((segment, index) => {
      // Create a readable name from the segment
      const name = segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Create the URL path for this breadcrumb
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      
      return {        position: index + 2, // +2 because we start with the Home item at position 1
        name,
        item: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://jmkcoder.github.io/uplink-protocol-docs/'}${path}`,
      };
    }),
  ];
  
  return <BreadcrumbJsonLd items={breadcrumbItems} />;
}
