'use client'

/**
 * Hook for tracking scroll depth on a page
 * 
 * This hook monitors how far down a page a user scrolls and sends analytics events
 * at specified thresholds to track engagement.
 */

import { useEffect, useState } from 'react';
import { event as trackEvent } from './gtag';
import { shouldEnableAnalytics } from './config';

type ScrollDepthOptions = {
  thresholds?: number[]; // Percentage thresholds to trigger events at (0-100)
  throttleMs?: number; // Throttle in milliseconds
  trackPagePath?: boolean; // Whether to include the current path in tracking
};

/**
 * Hook that tracks scroll depth and triggers analytics events at specified thresholds
 */
export const useScrollDepthTracking = (options?: ScrollDepthOptions) => {
  const {
    thresholds = [25, 50, 75, 90, 100],
    throttleMs = 500,
    trackPagePath = true,
  } = options || {};

  const [trackedThresholds, setTrackedThresholds] = useState<number[]>([]);
  const [isThrottled, setIsThrottled] = useState(false);
  useEffect(() => {
    if (!shouldEnableAnalytics()) return;

    const handleScroll = () => {
      if (isThrottled) return;

      setIsThrottled(true);
      setTimeout(() => setIsThrottled(false), throttleMs);

      // Calculate scroll depth as a percentage
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      const windowHeight = window.innerHeight;
      const scrollPercent = Math.round((scrollTop / (docHeight - windowHeight)) * 100);

      // Check if we've hit any new thresholds
      thresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedThresholds.includes(threshold)) {
          setTrackedThresholds(prev => [...prev, threshold]);
          
          trackEvent({
            action: 'scroll_depth',
            category: 'User Engagement',
            label: `Scrolled ${threshold}%`,
            value: threshold,
            ...(trackPagePath ? { page_path: window.location.pathname } : {})
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [thresholds, throttleMs, trackedThresholds, isThrottled, trackPagePath]);

  // Reset tracked thresholds when the component/page is remounted
  useEffect(() => {
    return () => setTrackedThresholds([]);
  }, []);
};

export default useScrollDepthTracking;
