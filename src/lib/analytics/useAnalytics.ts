'use client'

/**
 * Custom hook for Google Analytics tracking
 * 
 * This hook provides a simple interface for tracking page views and events.
 * It uses the Next.js router to automatically track page views.
 */

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview, event } from './gtag';
import { isAnalyticsEnabled } from './config';

export const useAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // Track page views when the route changes
  useEffect(() => {
    // Always run the effect but only perform tracking if enabled
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    if (isAnalyticsEnabled) {
      pageview(url);
    }
  }, [pathname, searchParams]);

  // Return the event tracking function for custom events
  return {
    trackEvent: event,
  };
};

export default useAnalytics;
