'use client';

/**
 * Analytics Provider Component
 * 
 * This component initializes Google Analytics and tracks page views.
 * It should be used in the root layout to ensure analytics is available throughout the app.
 */

import Script from 'next/script';
import { useEffect } from 'react';
import { GA_MEASUREMENT_ID, isAnalyticsEnabled } from './config';
import { useAnalytics } from './useAnalytics';
import { setupErrorTracking } from './errorTracking';

type AnalyticsProviderProps = {
  children: React.ReactNode;
};

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  // Always call hooks, regardless of whether analytics is enabled
  // This ensures hooks are called consistently in the same order
  useAnalytics();
  
  // Initialize error tracking only if required
  useEffect(() => {
    if (typeof window !== 'undefined' && isAnalyticsEnabled) {
      setupErrorTracking();
    }
  }, []);

  // Don't include analytics scripts if analytics is not enabled
  if (!isAnalyticsEnabled) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {children}
    </>
  );
};

export default AnalyticsProvider;
