'use client'

/**
 * Custom hook for Google Analytics tracking
 * 
 * This hook provides a simple interface for tracking page views and events.
 * It uses the Next.js router to automatically track page views.
 */

import { useEffect, useState } from 'react';
import { pageview, event } from './gtag';
import { shouldEnableAnalytics } from './config';

export const useAnalytics = () => {
  const [hasTracked, setHasTracked] = useState(false);

  useEffect(() => {
    // Defer import to avoid Suspense requirement
    import('next/navigation').then(({ usePathname, useSearchParams }) => {
      try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const pathname = usePathname();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const searchParams = useSearchParams();
        const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

        if (!hasTracked && shouldEnableAnalytics()) {
          pageview(url);
          setHasTracked(true);
        }
      } catch (err) {
        console.warn('Analytics hook failed:', err);
      }
    });
  }, [hasTracked]);

  return {
    trackEvent: event,
  };
};

export default useAnalytics;
