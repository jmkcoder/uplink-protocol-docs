# Cookie Consent Implementation

This document outlines how cookie consent is implemented in the Uplink Documentation site to comply with privacy regulations.

## Overview

Users are presented with a cookie consent banner that allows them to accept or decline the use of analytics cookies. This choice is stored in localStorage and respected throughout the user's visit.

## Key Components

### 1. Cookie Consent Banner

The banner is implemented in `src/components/ui/cookie-consent.tsx` and:

- Appears after a short delay when a user first visits the site
- Provides clear accept/decline options
- Stores the user's choice in localStorage
- Links to the privacy policy for more information

### 2. Analytics Integration

The analytics system checks if user consent has been provided before tracking any events:

- `shouldEnableAnalytics()` in `src/lib/analytics/config.ts` checks both:
  - If analytics is enabled in the current environment (development mode)
  - If the user has explicitly accepted analytics cookies

### 3. Privacy Policy

A comprehensive privacy policy is available at `/privacy-policy` that explains:

- What data is collected
- How it's used
- User options for controlling their privacy

## Implementation Details

### Cookie Storage

User preferences are stored in localStorage under the key `analytics-consent` with possible values:

- `accepted`: User has explicitly agreed to analytics
- `declined`: User has declined analytics

### Conditional Loading

Google Analytics scripts are only loaded when:

1. The application is running in development mode
2. The user has explicitly accepted analytics tracking

This approach ensures that no tracking occurs without explicit consent.

### Testing

Unit tests in `src/components/ui/__tests__/cookie-consent.test.tsx` verify that:

- The banner appears correctly for new users
- User choices are properly saved
- User preferences are respected

## Best Practices

1. **Transparency**: Clearly explain what data is collected and why
2. **User Control**: Make it easy for users to change preferences
3. **Minimal Collection**: Only collect necessary data
4. **Consent First**: Never track before obtaining consent

## Related Files

- `src/components/ui/cookie-consent.tsx`: The consent banner UI
- `src/lib/analytics/config.ts`: Configuration and consent checking
- `src/lib/analytics/gtag.ts`: GA4 implementation that respects consent
- `src/lib/analytics/AnalyticsProvider.tsx`: Provider that conditionally loads GA
- `src/app/privacy-policy/page.tsx`: Privacy policy details
