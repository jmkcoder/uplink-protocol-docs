/**
 * Analytics module exports
 * 
 * This file exports all analytics-related components and functions.
 */

export { default as AnalyticsProvider } from './AnalyticsProvider';
export { default as useAnalytics } from './useAnalytics';
export { default as useScrollDepthTracking } from './useScrollDepthTracking';
export { default as useTimeOnPage } from './useTimeOnPage';
export { default as useSearchTracking, useSearchInputTracking } from './useSearchTracking';
export { default as useVideoTracking } from './useVideoTracking';
export { default as OutboundLink } from './OutboundLink';
export { default as DownloadLink, useDownloadTracking } from './DownloadTracking';
export { default as setupErrorTracking } from './errorTracking';
export { pageview, event } from './gtag';
export { GA_MEASUREMENT_ID, isAnalyticsEnabled, shouldEnableAnalytics, hasUserConsented } from './config';
