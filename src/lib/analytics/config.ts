/**
 * Analytics configuration file
 * 
 * This file contains the configuration for Google Analytics.
 * Analytics are enabled in all environments (development and production)
 * when user consent is given, and the API key is hidden using environment variables.
 */

// Google Analytics measurement ID
// Using environment variable to avoid exposing the key in client code
// Store this in .env.local with NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR_ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Enable analytics in all environments (development and production)
export const isAnalyticsEnabled = true;

// Check if user has consented to analytics
export const hasUserConsented = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('analytics-consent') === 'accepted';
};

// Function to check if analytics should be enabled based on consent only
export const shouldEnableAnalytics = () => {
  return isAnalyticsEnabled && hasUserConsented();
};
