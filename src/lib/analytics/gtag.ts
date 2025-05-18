/**
 * Google Analytics utility functions
 * 
 * This file contains utility functions for interacting with Google Analytics.
 * It provides a clean API for page views and custom events.
 */

import { GA_MEASUREMENT_ID, isAnalyticsEnabled } from './config';

// Type definitions for better type safety
type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
};

/**
 * Initialize the Google Analytics pageview tracking
 */
export const pageview = (url: string) => {
  if (!isAnalyticsEnabled || typeof window === 'undefined' || !window.gtag) return;
  
  try {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  } catch (error) {
    console.error('Analytics pageview error:', error);
  }
};

/**
 * Track custom events with Google Analytics
 */
export const event = ({ action, category, label, value, ...rest }: GTagEvent) => {
  if (!isAnalyticsEnabled || typeof window === 'undefined' || !window.gtag) return;

  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
      ...rest,
    });
  } catch (error) {
    console.error('Analytics event error:', error);
  }
};

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

/**
 * Setup error tracking with Google Analytics
 */
export const setupErrorTracking = () => {
  if (!isAnalyticsEnabled) return;
  
  // Implementation for error tracking setup
};
