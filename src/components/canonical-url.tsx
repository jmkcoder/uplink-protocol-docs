'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface CanonicalURLProps {
  path?: string; // Optional override path
}

export function CanonicalURL({ path }: CanonicalURLProps) {
  const pathname = usePathname();
    useEffect(() => {
    // Get base URL from environment or use default
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jmkcoder.github.io/uplink-protocol-docs/';
    
    // Determine the final URL path
    const urlPath = path || pathname;
    
    // Create the full canonical URL
    const canonicalUrl = `${baseUrl}${urlPath}`;
    
    // Check if there's already a canonical link
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    
    // If no canonical link exists, create one
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    
    // Set the href attribute to our canonical URL
    canonicalElement.setAttribute('href', canonicalUrl);
    
  }, [pathname, path]);
  
  // This component doesn't render anything visible
  return null;
}
