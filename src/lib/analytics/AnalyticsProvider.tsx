'use client';

/**
 * Analytics Provider Component
 * 
 * This component initializes Google Analytics and tracks page views.
 * It should be used in the root layout to ensure analytics is available throughout the app.
 */

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { GA_MEASUREMENT_ID, isAnalyticsEnabled, shouldEnableAnalytics } from './config';
import { useAnalytics } from './useAnalytics';
import { setupErrorTracking } from './errorTracking';
import CookieConsent from '@/components/ui/cookie-consent';

type AnalyticsProviderProps = {
  children: React.ReactNode;
};

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const [consentGiven, setConsentGiven] = useState(false);
  
  // Always call hooks, regardless of whether analytics is enabled
  // This ensures hooks are called consistently in the same order
  useAnalytics();
  
  // Check for existing consent on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const existingConsent = localStorage.getItem('analytics-consent');
      if (existingConsent === 'accepted') {
        setConsentGiven(true);
      }
    }
  }, []);
  
  // Initialize error tracking only if required
  useEffect(() => {
    if (typeof window !== 'undefined' && shouldEnableAnalytics()) {
      setupErrorTracking();
    }
  }, [consentGiven]);
  
  const handleAcceptCookies = () => {
    setConsentGiven(true);
  };
  
  const handleDeclineCookies = () => {
    setConsentGiven(false);
  };

  // Don't include analytics scripts if analytics is not enabled
  if (!isAnalyticsEnabled) {
    return <>{children}</>;
  }
  return (
    <>
      {/* Only include Google Analytics scripts if consent is given */}
      {consentGiven && (
        <>
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
          />        </>
      )}
      
      {/* Show cookie consent banner in all environments */}
      {isAnalyticsEnabled && (
        <CookieConsent 
          onAccept={handleAcceptCookies} 
          onDecline={handleDeclineCookies} 
        />
      )}
      
      {children}
    </>
  );
};

export default AnalyticsProvider;
