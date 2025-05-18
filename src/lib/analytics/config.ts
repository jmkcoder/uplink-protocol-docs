/**
 * Analytics configuration file
 * 
 * This file contains the configuration for Google Analytics.
 * In this setup, analytics only run in development mode and
 * the API key is hidden from the client code.
 */

// Google Analytics measurement ID
// Using environment variable to avoid exposing the key in client code
// Store this in .env.local with NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR_ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Environment check to enable analytics ONLY during development
export const isAnalyticsEnabled = process.env.NODE_ENV === 'development';
