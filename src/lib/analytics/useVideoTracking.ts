/**
 * Video engagement tracking
 * 
 * This module provides hooks and utilities for tracking user engagement
 * with video content, which is crucial for understanding content effectiveness.
 */

'use client';

import { useEffect, useRef } from 'react';
import { event } from './gtag';
import { shouldEnableAnalytics } from './config';

// Default progress milestones to track (percentage)
const DEFAULT_MILESTONES = [10, 25, 50, 75, 90, 100];

export type VideoEventType = 
  | 'play'
  | 'pause'
  | 'ended'
  | 'progress'
  | 'seeking'
  | 'rate_change'
  | 'fullscreen'
  | 'error';

interface VideoTrackingOptions {
  /**
   * Video title or identifier
   */
  videoTitle: string;
  
  /**
   * Optional video source URL
   */
  videoSrc?: string;
  
  /**
   * Progress percentage milestones to track (defaults to [10, 25, 50, 75, 90, 100])
   */
  progressMilestones?: number[];
  
  /**
   * Which events to track (defaults to all)
   */
  trackEvents?: VideoEventType[];
  
  /**
   * Category for the event (defaults to 'Video')
   */
  category?: string;
}

/**
 * Hook to track video engagement metrics
 * 
 * @param videoRef React ref to the video element
 * @param options Configuration options
 */
export const useVideoTracking = (
  videoRef: React.RefObject<HTMLVideoElement>,
  options: VideoTrackingOptions
) => {
  // Extract options with defaults
  const {
    videoTitle,
    videoSrc,
    progressMilestones = DEFAULT_MILESTONES,
    trackEvents = ['play', 'pause', 'ended', 'progress', 'seeking', 'rate_change', 'fullscreen', 'error'],
    category = 'Video'
  } = options;
  
  // Store tracked milestones to avoid duplicate events
  const trackedMilestones = useRef<Set<number>>(new Set());
  
  useEffect(() => {
    if (!shouldEnableAnalytics() || !videoRef.current) return;
    
    const video = videoRef.current;
    const videoSource = videoSrc || video.currentSrc || 'unknown';
    
    // Reset tracked milestones if video changes
    trackedMilestones.current.clear();
    
    /**
     * Send an analytics event for video interaction
     */
    const trackVideoEvent = (action: VideoEventType, additionalParams = {}) => {
      event({
        action: `video_${action}`,
        category,
        label: videoTitle,
        video_url: videoSource,
        video_duration: Math.round(video.duration),
        ...additionalParams
      });
    };
    
    // Track play events
    const handlePlay = () => {
      if (!trackEvents.includes('play')) return;
      trackVideoEvent('play', {
        current_position: Math.round(video.currentTime),
        current_position_percent: Math.round((video.currentTime / video.duration) * 100)
      });
    };
    
    // Track pause events
    const handlePause = () => {
      if (!trackEvents.includes('pause')) return;
      // Don't track pause if video ended
      if (video.ended) return;
      trackVideoEvent('pause', {
        current_position: Math.round(video.currentTime),
        current_position_percent: Math.round((video.currentTime / video.duration) * 100)
      });
    };
    
    // Track video completion
    const handleEnded = () => {
      if (!trackEvents.includes('ended')) return;
      trackVideoEvent('ended');
    };
    
    // Track seeking within the video
    const handleSeeking = () => {
      if (!trackEvents.includes('seeking')) return;
      trackVideoEvent('seeking', {
        current_position: Math.round(video.currentTime),
        current_position_percent: Math.round((video.currentTime / video.duration) * 100)
      });
    };
    
    // Track playback rate changes
    const handleRateChange = () => {
      if (!trackEvents.includes('rate_change')) return;
      trackVideoEvent('rate_change', {
        playback_rate: video.playbackRate
      });
    };
    
    // Track progress through milestones
    const handleTimeUpdate = () => {
      if (!trackEvents.includes('progress')) return;
      if (video.duration <= 0) return;
      
      const currentPercent = Math.round((video.currentTime / video.duration) * 100);
      
      // Check each milestone
      for (const milestone of progressMilestones) {
        if (currentPercent >= milestone && !trackedMilestones.current.has(milestone)) {
          trackedMilestones.current.add(milestone);
          trackVideoEvent('progress', {
            progress_percent: milestone,
            current_position: Math.round(video.currentTime)
          });
        }
      }
    };
    
    // Track errors
    const handleError = () => {
      if (!trackEvents.includes('error')) return;
      trackVideoEvent('error', {
        error_code: video.error?.code,
        error_message: video.error?.message
      });
    };
    
    // Add all event listeners
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('seeking', handleSeeking);
    video.addEventListener('ratechange', handleRateChange);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('error', handleError);
    
    // Clean up
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('seeking', handleSeeking);
      video.removeEventListener('ratechange', handleRateChange);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('error', handleError);
    };
  }, [videoRef, videoTitle, videoSrc, progressMilestones, trackEvents, category]);
};

export default useVideoTracking;
