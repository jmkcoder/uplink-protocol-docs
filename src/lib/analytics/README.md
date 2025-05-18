# Analytics Implementation Guide

This document outlines how Google Analytics is implemented in the Uplink Documentation site. The implementation follows a separation of concerns approach for maintainability and consistency.

## Configuration and Setup

Analytics only runs in development mode for testing purposes. The Google Analytics Measurement ID is stored securely as an environment variable.

```
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-F2YGT22T1L
```

The analytics implementation is organized in the following structure:

```
/src/lib/analytics/
  ├── AnalyticsProvider.tsx    # Provider component that initializes tracking
  ├── config.ts                # Configuration constants
  ├── DownloadTracking.tsx     # Download link tracking components/hooks
  ├── errorTracking.ts         # JavaScript error tracking
  ├── gtag.ts                  # Core GA4 utility functions
  ├── index.ts                 # Exports all analytics tools
  ├── OutboundLink.tsx         # External link tracking component  ├── README.md                # This documentation
  ├── useAnalytics.ts          # Core analytics hook for page views & events
  ├── useScrollDepthTracking.ts # Scroll depth tracking hook
  ├── useSearchTracking.ts     # Search behavior tracking
  ├── useTimeOnPage.ts         # Time on page tracking hook
  ├── useVideoTracking.ts      # Video engagement tracking
  └── VERIFICATION.md          # Guide for verifying analytics after deployment
```

## UI Components

The implementation also includes UI components that demonstrate the analytics tracking:

```
/src/components/ui/
  ├── search.tsx               # Search component with integrated analytics
  └── video-player.tsx         # Video player with comprehensive tracking
```

### AnalyticsProvider

The `AnalyticsProvider` is a React component that:
- Initializes Google Analytics scripts
- Sets up automatic error tracking
- Is added to the root layout to enable analytics across the entire site

```tsx
// /src/app/layout.tsx (snippet)
<html lang="en">
  <body>
    <AnalyticsProvider>
      <SidebarProvider>
        {/* site content */}
      </SidebarProvider>
    </AnalyticsProvider>
  </body>
</html>
```

### useAnalytics Hook

`useAnalytics` is the primary hook that provides:
- Automatic page view tracking when routes change
- A `trackEvent` function for custom event tracking

```tsx
const { trackEvent } = useAnalytics();

// Example usage
trackEvent({
  action: 'button_click',
  category: 'Navigation',
  label: 'Get Started Button'
});
```

### Enhanced Engagement Tracking

#### Scroll Depth Tracking

The `useScrollDepthTracking` hook monitors how far down a page a user scrolls and sends events at configured thresholds (25%, 50%, 75%, 90%, 100% by default).

```tsx
// Example with custom thresholds
useScrollDepthTracking({
  thresholds: [25, 50, 75, 100],
  trackPagePath: true
});
```

#### Time on Page Tracking

The `useTimeOnPage` hook measures how long users spend on each page, sending periodic updates and a final measurement when the user leaves.

```tsx
useTimeOnPage({
  minTimeMs: 3000,      // Min time to track (3s)
  sendInterval: 60000   // Send update every minute
});
```

#### Search Tracking

The `useSearchTracking` and `useSearchInputTracking` hooks monitor user search behavior with debouncing to prevent excessive events.

```tsx
// Manual tracking
const trackSearch = useSearchTracking();
const handleSearch = (query) => {
  // Track after search is performed
  trackSearch(query, results.length);
};

// Automatic input tracking
useSearchInputTracking({
  inputId: 'search-input',
  minQueryLength: 3,
  debounceMs: 1000
});
```

#### Video Engagement Tracking

The `useVideoTracking` hook monitors comprehensive video engagement metrics:

```tsx
const videoRef = useRef<HTMLVideoElement>(null);

useVideoTracking(videoRef, {
  videoTitle: 'Getting Started Tutorial',
  progressMilestones: [10, 25, 50, 75, 90, 100],
  trackEvents: ['play', 'pause', 'ended', 'progress']
});

return <video ref={videoRef} src="/videos/tutorial.mp4" controls />;
```

### UI Components for Tracking

#### OutboundLink

A component that automatically tracks clicks on external links:

```tsx
<OutboundLink 
  href="https://github.com/jmkcoder/odyssey-uplink-protocol"
  category="External Link"
  label="GitHub Repository"
>
  View on GitHub
</OutboundLink>
```

#### DownloadLink

A component for tracking file downloads with additional metadata:

```tsx
<DownloadLink 
  href="/files/documentation.pdf"
  fileName="Uplink Documentation"
  fileType="pdf"
  fileSize={1048576} // 1MB
>
  Download PDF
</DownloadLink>
```

### Error Tracking

The error tracking functionality automatically captures JavaScript errors and unhandled promise rejections, sending them to Google Analytics with detailed information to help debug issues in production.

## Event Structure

Events sent to Google Analytics follow this general structure:

```js
{
  action: String,        // What happened (e.g., 'click', 'submit', 'download')
  category: String,      // Grouping (e.g., 'Navigation', 'Form', 'Content')
  label: String,         // Additional context (which button, form, etc.)
  value: Number,         // Optional numeric value if applicable
  ...customParameters    // Additional custom event parameters as needed
}
```

## Tracked Interactions

The following user interactions are automatically tracked:

1. **Page Views**: Every page navigation
2. **Scroll Depth**: How far users scroll down content
3. **Time on Page**: How long users spend on each page
4. **Form Interactions**: Submissions, validation errors
5. **Link Clicks**: External links, GitHub, community discussions
6. **Downloads**: File downloads with type and size info
7. **JavaScript Errors**: Runtime errors for debugging
8. **Button Clicks**: Primary navigation and action buttons
9. **Search Behavior**: Search queries and result counts
10. **Video Engagement**: Play, pause, progress, completion rates

## Usage Guidelines

1. Use the `useAnalytics` hook for basic page tracking and simple events
2. Add `useScrollDepthTracking` to content-heavy pages
3. Add `useTimeOnPage` to important pages where engagement time matters
4. Use `OutboundLink` instead of regular `<a>` tags for external links
5. Use `DownloadLink` for all downloadable resources
6. Use `useSearchTracking` for search interfaces
7. Use `useVideoTracking` for video content
8. The `event` function is available for custom tracking needs

## Environment Handling

Analytics are only active in production builds (`process.env.NODE_ENV === 'production'`). No tracking data is sent during development to avoid polluting analytics with test data.

## Implementation Patterns

### Form Submit Tracking (Contact Us page example)

```tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  if (validateForm()) {
    // Track form submission attempt
    trackEvent({
      action: 'contact_form_submit',
      category: 'Contact',
      label: formState.subject
    });
    
    // After successful submission
    trackEvent({
      action: 'contact_form_success',
      category: 'Contact'
    });
  } else {
    // Track validation errors
    trackEvent({
      action: 'contact_form_error',
      category: 'Contact',
      label: Object.keys(formErrors).join(',')
    });
  }
};
```
src/lib/analytics/
  ├── AnalyticsProvider.tsx  # Provider component for GA script loading
  ├── config.ts              # Configuration values and environment settings
  ├── gtag.ts                # Core tracking utilities
  ├── index.ts               # Exports for all analytics components/hooks 
  ├── useAnalytics.ts        # Hook for automatic page view tracking
  └── useScrollDepthTracking.ts # Hook for tracking scroll depth
```

## Components and Hooks

### AnalyticsProvider

The `AnalyticsProvider` component is responsible for initializing Google Analytics and is placed in the root layout to ensure it's loaded on all pages.

```tsx
// Example usage in layout.tsx
<html>
  <body>
    <AnalyticsProvider>
      <App />
    </AnalyticsProvider>
  </body>
</html>
```

### useAnalytics

The `useAnalytics` hook automatically tracks page views when the route changes and provides a `trackEvent` function for custom event tracking.

```tsx
// Example usage in a component
const { trackEvent } = useAnalytics();

// Track a custom event
trackEvent({
  action: 'button_click',
  category: 'User Interaction',
  label: 'Submit Button'
});
```

### useScrollDepthTracking

This hook tracks how far users scroll down a page, sending events at specified thresholds.

```tsx
// Example usage
useScrollDepthTracking({
  thresholds: [25, 50, 75, 100],
  throttleMs: 500,
  trackPagePath: true
});
```

## Types of Tracking Implemented

1. **Automatic Page Views**: Tracked on every route change
2. **Button & Link Clicks**: Tracked on important navigation elements
3. **Form Interactions**: Tracks form submissions, validation errors, and successes
4. **Scroll Depth**: Measures engagement by tracking how far users scroll on key pages
5. **JavaScript Errors**: Automatically tracks runtime errors and unhandled promise rejections

## Adding New Tracking

To add tracking to a new component:

1. Import the hooks:
   ```tsx
   import { useAnalytics, useScrollDepthTracking } from "@/lib/analytics";
   ```

2. Initialize the hooks:
   ```tsx
   const { trackEvent } = useAnalytics();
   useScrollDepthTracking(); // Optional for longer pages
   ```

3. Add event tracking to UI elements:
   ```tsx
   <Button 
     onClick={() => {
       // Your existing logic
       trackEvent({
         action: 'button_click',
         category: 'Category',
         label: 'Description'
       });
     }}
   >
     Click Me
   </Button>
   ```

## Event Naming Conventions

For consistency, use these naming conventions:

- **Actions**: Use verb_noun format (e.g., `button_click`, `form_submit`, `page_view`)
- **Categories**: Use general groupings (e.g., `Navigation`, `Form`, `Content`, `Engagement`)
- **Labels**: Use specific descriptions (e.g., `Homepage Hero Button`, `Contact Form Error`)

## Development vs. Production

Analytics are only active in production to avoid skewing data during development:

```tsx
// From config.ts
export const isProduction = process.env.NODE_ENV === 'production';
```

All tracking functions check this flag before sending data to Google Analytics.
