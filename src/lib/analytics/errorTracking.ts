/**
 * Error tracking utility to send JavaScript errors to Google Analytics
 * 
 * This module sets up global error catching to track runtime errors in the application.
 * It helps identify and fix bugs by providing data on what errors users are encountering.
 */

import { event } from './gtag';
import { isAnalyticsEnabled } from './config';

/**
 * Set up global error tracking
 * 
 * This function sets up window.onerror and unhandledrejection event handlers
 * to capture and report errors to Google Analytics
 */
export const setupErrorTracking = () => {
  if (!isAnalyticsEnabled) return;

  // Track unhandled promise rejections
  window.addEventListener('unhandledrejection', (e) => {
    const error = e.reason;
    const errorMessage = error instanceof Error 
      ? `${error.name}: ${error.message}` 
      : String(error);

    event({
      action: 'javascript_error',
      category: 'Error',
      label: `Unhandled Rejection: ${errorMessage}`,
      value: 1, // Count of errors
      error_type: 'unhandled_rejection',
      page_path: window.location.pathname,
    });
  });

  // Track regular JS errors
  window.onerror = (message, source, lineno, colno, error) => {
    const errorDetail = error ? `${error.name}: ${error.message}` : String(message);
    const location = source ? `${source}:${lineno}:${colno}` : 'Unknown location';

    event({
      action: 'javascript_error',
      category: 'Error',
      label: `${errorDetail} (${location})`,
      value: 1, // Count of errors
      error_type: 'window_onerror',
      page_path: window.location.pathname,
    });

    // Return false to allow the default error handling
    return false;
  };
};

export default setupErrorTracking;
