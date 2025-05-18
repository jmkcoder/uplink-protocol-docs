'use client'

/**
 * Time on page tracking hook
 * 
 * This hook tracks how long users spend on a page and sends the data
 * to Google Analytics when they navigate away or close the page.
 */

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { event } from './gtag';
import { isAnalyticsEnabled } from './config';

type TimeOnPageOptions = {
  minTimeMs?: number; // Minimum time in ms to track (to filter out bounces)
  sendInterval?: number; // Time interval to send time-on-page updates while user is still on page
  includeSeconds?: boolean; // Whether to include seconds in the reported time
};

/**
 * Hook that tracks the time spent on the current page
 * 
 * @param options Configuration options for time tracking
 */
export const useTimeOnPage = (options?: TimeOnPageOptions) => {
  const {
    minTimeMs = 5000, // Only track if user spends at least 5 seconds on page
    sendInterval = 30000, // Send time-on-page every 30 seconds
    includeSeconds = true, // Include seconds in the time string
  } = options || {};
  
  const pathname = usePathname();
  const [startTime] = useState<number>(Date.now());
  
  useEffect(() => {
    if (!isAnalyticsEnabled) return;
    
    let intervalId: NodeJS.Timeout | null = null;
    
    // Function to calculate and track time on page
    const trackTimeOnPage = () => {
      const timeSpentMs = Date.now() - startTime;
      if (timeSpentMs < minTimeMs) return; // Don't track short visits
      
      // Format time for better readability in GA
      const seconds = Math.floor((timeSpentMs / 1000) % 60);
      const minutes = Math.floor((timeSpentMs / (1000 * 60)) % 60);
      const hours = Math.floor(timeSpentMs / (1000 * 60 * 60));
      
      // Create readable string like "2h 5m 30s" or "5m 30s"
      let timeString = '';
      if (hours > 0) timeString += `${hours}h `;
      if (minutes > 0 || hours > 0) timeString += `${minutes}m `;
      if (includeSeconds && (seconds > 0 || (!hours && !minutes))) timeString += `${seconds}s`;
      
      // Remove trailing space
      timeString = timeString.trim();
      
      // Send to GA
      event({
        action: 'time_on_page',
        category: 'Engagement',
        label: pathname,
        value: Math.floor(timeSpentMs / 1000), // Time in seconds
        time_value: timeString, // Human-readable time
      });
    };
    
    // Track when page is about to unload or when user switches to another page
    const handleUnload = () => {
      trackTimeOnPage();
    };
    
    // Set interval to track time while the user is on the page
    if (sendInterval > 0) {
      intervalId = setInterval(trackTimeOnPage, sendInterval);
    }
    
    // Add event listeners for page unload
    window.addEventListener('beforeunload', handleUnload);
    
    // Cleanup function
    return () => {
      if (intervalId) clearInterval(intervalId);
      window.removeEventListener('beforeunload', handleUnload);
      trackTimeOnPage(); // Track the time when component unmounts (route change)
    };
  }, [pathname, startTime, minTimeMs, sendInterval, includeSeconds]);
};

export default useTimeOnPage;
