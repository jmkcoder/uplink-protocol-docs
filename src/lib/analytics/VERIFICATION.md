# Google Analytics Verification Guide

This guide helps you verify that your Google Analytics tracking is properly configured and recording events in development mode.

## Prerequisites

- You are running the application in development mode (NODE_ENV = 'development')
- You have set up the Google Analytics Measurement ID in .env.local
- You have access to the Google Analytics 4 property (G-F2YGT22T1L) for viewing results
- You have the appropriate permissions to view reports

## Step 1: Verify Basic Tracking

1. Log in to Google Analytics at [analytics.google.com](https://analytics.google.com/)
2. Select the correct account and property (Uplink Docs)
3. Navigate to **Reports > Realtime**
4. Visit your deployed site in another tab/window
5. You should see your visit appear in the Realtime report

## Step 2: Verify Custom Event Tracking

After interacting with the site, check that custom events are being recorded:

1. In Google Analytics, go to **Reports > Engagement > Events**
2. You should see the following custom events:
   - `page_view`
   - `button_click`
   - `time_on_page`
   - `scroll_depth`
   - `search`
   - `video_play`, `video_pause`, `video_progress`, etc.
   - `outbound_link`
   - `download`
   - `error`

## Step 3: Test Core Functionalities

Perform these actions on your site to test tracking:

1. **Page Navigation**: Visit multiple pages to ensure `page_view` events are tracked
2. **Button Clicks**: Click on various buttons to verify `button_click` events
3. **Scroll Behavior**: Scroll down pages to test `scroll_depth` tracking
4. **Search**: Use the search functionality to test `search` events
5. **Video Engagement**: Play, pause, and watch videos to test video tracking events
6. **Form Submission**: Fill out and submit the contact form
7. **Download**: Try downloading any available resources
8. **External Links**: Click on outbound links to GitHub or other external sites

## Step 4: Configure Custom Reports

Create custom reports to better visualize your analytics data:

1. Go to **Explore > Create New Exploration**
2. Create reports for:
   - Most viewed pages
   - Search terms with no results
   - Video completion rates
   - Form submission rates
   - Page depth engagement

## Step 5: Debug Issues

If events aren't appearing:

1. Check browser console for JavaScript errors
2. Verify that the Google Analytics measurement ID is correct (G-F2YGT22T1L)
3. Ensure Analytics code is loading in the production environment
4. Check for ad-blockers or privacy extensions that might be blocking analytics
5. Verify that `isProduction` variable is correctly detecting the production environment

## Step 6: Set Up Conversions

Define key conversions for your site:

1. Go to **Admin > Events > Create Event**
2. Create conversion events for:
   - Tutorial video completion
   - Getting started guide view
   - GitHub repository visits
   - Contact form submissions

## Next Steps

- Set up regular analytics reports to be emailed to stakeholders
- Configure alerts for significant changes in traffic or behavior
- Consider implementing A/B testing for key user flows
