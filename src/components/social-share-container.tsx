'use client';

import { SocialShare } from './social-share';
import { usePathname } from 'next/navigation';

interface SocialShareContainerProps {
  title?: string;
  description?: string;
}

export function SocialShareContainer({ title, description }: SocialShareContainerProps) {
  const pathname = usePathname();
  
  // Only show on content pages
  if (pathname === '/' || pathname === '/404') {
    return null;
  }
    return (
    <div className="mt-10 pt-6 border-t border-border">
      <SocialShare title={title} summary={description} />
    </div>
  );
}
