'use client';

import { useRef } from 'react';
import { useVideoTracking } from '@/lib/analytics';
import { Card } from './card';

interface VideoPlayerProps {
  src: string;
  title: string;
  poster?: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  objectFit?: 'cover' | 'contain';
}

export function VideoPlayer({
  src,
  title,
  poster,
  className = '',
  aspectRatio = '16:9',
  objectFit = 'cover',
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null!);
  
  // Setup video tracking
  useVideoTracking(videoRef, {
    videoTitle: title,
    videoSrc: src,
    // Track standard milestones for engagement
    progressMilestones: [10, 25, 50, 75, 90, 100],
    // Track all video events
    trackEvents: ['play', 'pause', 'ended', 'progress', 'seeking', 'rate_change', 'fullscreen', 'error'],
    category: 'Tutorial Videos'
  });
  
  // Calculate aspect ratio class
  const aspectRatioClass = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
  }[aspectRatio];
  
  // Prefix src and poster with basePath if they're relative URLs
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const fullSrc = src.startsWith('http') ? src : `${basePath}${src}`;
  const fullPoster = poster && !poster.startsWith('http') ? `${basePath}${poster}` : poster;
  
  return (
    <Card className={`overflow-hidden ${className}`}>
      <div className={`${aspectRatioClass} relative bg-gray-100`}>
        <video
          ref={videoRef}
          src={fullSrc}
          poster={fullPoster}
          controls
          preload="metadata"
          className={`absolute inset-0 w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`}
          title={title}
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg">{title}</h3>
      </div>
    </Card>
  );
}

export default VideoPlayer;
