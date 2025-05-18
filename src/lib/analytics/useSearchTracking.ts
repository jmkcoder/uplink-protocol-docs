/**
 * Search tracking utilities
 * 
 * This module provides tools for tracking search behavior,
 * which is important for understanding user intent and 
 * identifying content gaps.
 */

'use client';

import { useEffect, useRef } from 'react';
import { event } from './gtag';
import { isAnalyticsEnabled } from './config';

type SearchTrackingOptions = {
  /**
   * Debounce time in milliseconds
   */
  debounceMs?: number;
  
  /**
   * Minimum query length to track
   */
  minQueryLength?: number;
  
  /**
   * Whether to include the number of results in tracking
   */
  trackResultCount?: boolean;
  
  /**
   * Callback function to get the number of results
   */
  getResultCount?: () => number;
  
  /**
   * Custom category for the search event
   */
  category?: string;
};

/**
 * Tracks search queries with debouncing to avoid excessive events
 */
export const useSearchTracking = (options?: SearchTrackingOptions) => {
  const {
    debounceMs = 1000,
    minQueryLength = 3,
    trackResultCount = false,
    getResultCount = () => 0,
    category = 'Search'
  } = options || {};
  
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastSearchRef = useRef<string>('');
  
  const trackSearch = (query: string, resultCount?: number) => {
    if (!isAnalyticsEnabled) return;
    
    // Don't track if query is too short
    if (query.length < minQueryLength) return;
    
    // Don't track if it's the same as the last search
    if (query === lastSearchRef.current) return;
    
    // Save this search to prevent duplicate tracking
    lastSearchRef.current = query;
    
    // Clear any existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
    
    // Set a new timer
    debounceTimerRef.current = setTimeout(() => {
      event({
        action: 'search',
        category,
        label: query,
        ...(trackResultCount ? { result_count: resultCount ?? getResultCount() } : {})
      });
    }, debounceMs);
  };
  
  // Clean up any lingering timers
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);
  
  return trackSearch;
};

/**
 * A hook to track search events when used with an input element
 */
export const useSearchInputTracking = (options?: SearchTrackingOptions & {
  /**
   * Input element ID to attach tracking to
   */
  inputId?: string
}) => {
  const { inputId, ...rest } = options || {};
  const trackSearch = useSearchTracking(rest);
  
  useEffect(() => {
    if (!isAnalyticsEnabled || !inputId) return;
    
    const inputElement = document.getElementById(inputId) as HTMLInputElement;
    if (!inputElement) return;
    
    const handleChange = () => {
      trackSearch(inputElement.value);
    };
    
    inputElement.addEventListener('input', handleChange);
    
    return () => {
      inputElement.removeEventListener('input', handleChange);
    };
  }, [inputId, trackSearch]);
  
  return trackSearch;
};

export default useSearchTracking;
