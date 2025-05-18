# Cookie Consent Implementation Guide for Uplink Docs

## Overview

This document provides guidance on how the cookie consent system works in the Uplink Documentation site.

## Key Components

1. **CookieConsent**: A banner that appears to new users asking for consent to use analytics cookies
2. **ConsentManager**: A component that allows users to manage their consent preferences after initial choice
3. **Privacy Policy**: Clearly explains what data is collected and how it's used
4. **Analytics Integration**: System that respects user consent before tracking

## How the System Works

### Initial Visit

When a user first visits the site, after a short delay, they are presented with a cookie consent banner. The user has two options:

1. **Accept**: Consents to analytics cookies. This choice is saved in `localStorage` as `'analytics-consent': 'accepted'`.
2. **Decline**: Rejects analytics cookies. This choice is saved in `localStorage` as `'analytics-consent': 'declined'`.

### Consent Verification

Before any analytics tracking occurs, the system checks:

1. If the application is in development mode (through `process.env.NODE_ENV`)
2. If the user has explicitly accepted cookies (`localStorage.getItem('analytics-consent') === 'accepted'`)

Only if both conditions are true will the analytics scripts load and tracking occur.

### Changing Preferences

Users can change their consent preferences at any time through:

1. The "Cookie Settings" button in the bottom-right corner of the page
2. The consent manager on the Privacy Policy page

## Integration with Google Analytics

The `shouldEnableAnalytics()` function checks both the environment and user consent:

```typescript
export const shouldEnableAnalytics = () => {
  return isAnalyticsEnabled && hasUserConsented();
};
```

This function is used throughout the analytics system as a gatekeeper before any tracking occurs.

## Testing Consent Flow

1. Clear localStorage or use incognito mode to simulate a first-time visit
2. Observe the cookie consent banner appearing
3. Accept or decline cookies and verify the choice is saved
4. Verify analytics events only fire if consent was given

## Best Practices

1. Always check user consent before loading analytics scripts
2. Provide clear information about what data is collected
3. Make it easy for users to change their preferences
4. Document the consent status in event logs for compliance
