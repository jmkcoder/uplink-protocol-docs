# Google Analytics Implementation - Uplink Docs

This guide provides a comprehensive overview of the Google Analytics implementation for the Uplink Documentation site.

## Implementation Overview

The Google Analytics integration for Uplink Docs follows these key principles:

1. **Separation of concerns**: Analytics logic is isolated from application logic
2. **Comprehensive tracking**: Multiple user engagement metrics are tracked
3. **Privacy-first**: Analytics only runs in production and respects user preferences
4. **Performance optimized**: Minimal impact on page load and runtime performance

## Implementation Structure

The analytics implementation is organized into the following structure:

```
/src/lib/analytics/
  ├── AnalyticsProvider.tsx    # Provider component that initializes tracking
  ├── config.ts                # Configuration constants
  ├── DownloadTracking.tsx     # Download link tracking components/hooks
  ├── errorTracking.ts         # JavaScript error tracking
  ├── gtag.ts                  # Core GA4 utility functions
  ├── index.ts                 # Exports all analytics tools
  ├── OutboundLink.tsx         # External link tracking component
  ├── README.md                # This documentation
  ├── useAnalytics.ts          # Core analytics hook for page views & events
  ├── useScrollDepthTracking.ts # Scroll depth tracking hook
  ├── useSearchTracking.ts     # Search behavior tracking
  ├── useTimeOnPage.ts         # Time on page tracking hook
  ├── useVideoTracking.ts      # Video engagement tracking
  └── VERIFICATION.md          # Guide for verifying analytics after deployment
```

## Tracked Metrics

This implementation provides comprehensive tracking of:

1. **Page Views**: Every page navigation with path and query parameters
2. **Button/Link Clicks**: Navigation and key action tracking
3. **Scroll Depth**: How far users scroll on content pages
4. **Time on Page**: Duration of page visits
5. **Form Interactions**: Form submissions, errors, and field usage
6. **Search Behavior**: Search queries and result engagement
7. **Video Engagement**: Play, pause, progress, completion rates
8. **Outbound Links**: Clicks to external websites
9. **Downloads**: File downloads with metadata
10. **JavaScript Errors**: Runtime errors for debugging

## Usage Guide

### Basic Event Tracking

```tsx
import { useAnalytics } from '@/lib/analytics';

function MyComponent() {
  const { trackEvent } = useAnalytics();
  
  const handleClick = () => {
    trackEvent({
      action: 'button_click',
      category: 'Navigation',
      label: 'Get Started'
    });
  };
  
  return <button onClick={handleClick}>Get Started</button>;
}
```

### Page Engagement Tracking

```tsx
import { useScrollDepthTracking, useTimeOnPage } from '@/lib/analytics';

function ContentPage() {
  // Track scroll depth with custom thresholds
  useScrollDepthTracking({
    thresholds: [25, 50, 75, 100],
    trackPagePath: true
  });
  
  // Track time on page
  useTimeOnPage({
    minTimeMs: 5000,
    sendInterval: 30000
  });
  
  return <div>Page content...</div>;
}
```

### Search Tracking

```tsx
import { useSearchTracking } from '@/lib/analytics';

function SearchComponent() {
  const trackSearch = useSearchTracking({
    debounceMs: 800,
    minQueryLength: 3
  });
  
  const handleSearch = (query) => {
    const results = performSearch(query);
    trackSearch(query, results.length);
  };
}
```

### Video Tracking

```tsx
import { useRef } from 'react';
import { useVideoTracking } from '@/lib/analytics';

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useVideoTracking(videoRef, {
    videoTitle: 'Getting Started Tutorial',
    progressMilestones: [10, 25, 50, 75, 90, 100]
  });
  
  return <video ref={videoRef} src="/videos/tutorial.mp4" controls />;
}
```

### Special Link Components

```tsx
import { OutboundLink, DownloadLink } from '@/lib/analytics';

function LinksSection() {
  return (
    <>
      <OutboundLink href="https://github.com/..." category="External Resources">
        GitHub Repository
      </OutboundLink>
      
      <DownloadLink 
        href="/files/docs.pdf" 
        fileName="Documentation" 
        fileType="pdf"
      >
        Download Documentation
      </DownloadLink>
    </>
  );
}
```

## Best Practices

1. Use the `useAnalytics` hook for basic event tracking
2. Add `useScrollDepthTracking` to content-heavy pages
3. Add `useTimeOnPage` to important documentation pages
4. Use `OutboundLink` for external links
5. Use `DownloadLink` for downloadable resources
6. Use `useSearchTracking` for search interfaces
7. Use `useVideoTracking` for video content

## Verification

After deployment, verify your analytics implementation is working by:

1. Using Google Analytics Real-Time reports
2. Testing key user flows like search, navigation, and forms
3. Monitoring for any errors in the browser console

For detailed verification steps, see the [VERIFICATION.md](./VERIFICATION.md) guide.

## Technical Details

- **Measurement ID**: G-F2YGT22T1L
- **Environment Detection**: Analytics are disabled in development
- **Event Batching**: Events are batched where appropriate
- **Client-Side Only**: All tracking runs on the client side

## Additional Resources

- [Analytics Documentation Page](/analytics)
- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [GA4 Event Parameters Reference](https://support.google.com/analytics/answer/9216061)
