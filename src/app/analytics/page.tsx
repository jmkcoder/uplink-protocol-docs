'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useAnalytics, useScrollDepthTracking, useTimeOnPage } from '@/lib/analytics';
import { Button } from '@/components/ui/button';

export default function AnalyticsPage() {
  const { trackEvent } = useAnalytics();  const [events, setEvents] = useState<Array<{
    timestamp: string;
    action: string;
    category: string;
    label?: string;
    extra?: Record<string, unknown>;
  }>>([]);
  const demoVideoRef = useRef<HTMLVideoElement>(null);
    // Track scroll depth and time on page for this documentation
  useScrollDepthTracking();
  useTimeOnPage();
  
  // Function to log events to our demo console and send to analytics
  const logEvent = (action: string, category: string, label?: string, extra?: Record<string, unknown>) => {
    const now = new Date();
    const timestamp = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    
    setEvents(prev => [{
      timestamp,
      action,
      category,
      label,
      extra
    }, ...prev].slice(0, 10)); // Keep only the 10 most recent events
    
    // Actually track the event
    trackEvent({
      action,
      category,
      label,
      ...(extra || {})
    });
  };
  // Setup video tracking
  useEffect(() => {
    if (!demoVideoRef.current) return;
    
    const video = demoVideoRef.current;
    
    // Custom implementation to show events in our demo console
    const handlePlay = () => {
      logEvent('video_play', 'Demo', 'Tutorial Video', {
        current_position: Math.round(video.currentTime),
        current_position_percent: Math.round((video.currentTime / video.duration) * 100)
      });
    };
    
    const handlePause = () => {
      if (video.ended) return;
      logEvent('video_pause', 'Demo', 'Tutorial Video', {
        current_position: Math.round(video.currentTime),
        current_position_percent: Math.round((video.currentTime / video.duration) * 100)
      });
    };
    
    const handleEnded = () => {
      logEvent('video_ended', 'Demo', 'Tutorial Video');
    };
      // Add event listeners
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    
    // Clean up
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [logEvent]);
  useEffect(() => {
    // Track page view when component mounts
    logEvent('page_view', 'Documentation', 'Analytics Guide');
  }, [logEvent]);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Side Navigation */}
      <div className="lg:w-64 flex-shrink-0">
        <div className="sticky top-24 bg-card border rounded-lg overflow-hidden shadow-sm">
          <div className="px-4 py-3 bg-primary/10 border-b">
            <h3 className="font-semibold">On This Page</h3>
          </div>
          <nav className="p-2">
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#overview" className="block px-3 py-2 rounded-md hover:bg-primary/5">Overview</a>
              </li>
              <li>
                <a href="#implementation" className="block px-3 py-2 rounded-md hover:bg-primary/5">Implementation Principles</a>
              </li>
              <li>
                <a href="#capabilities" className="block px-3 py-2 rounded-md hover:bg-primary/5">Tracking Capabilities</a>
              </li>
              <li>
                <a href="#verification" className="block px-3 py-2 rounded-md hover:bg-primary/5">Verification</a>
              </li>
              <li>
                <a href="#patterns" className="block px-3 py-2 rounded-md hover:bg-primary/5">Implementation Patterns</a>
              </li>
              <li>
                <a href="#demo" className="block px-3 py-2 rounded-md hover:bg-primary/5">Live Demo</a>
              </li>
              <li>
                <a href="#troubleshooting" className="block px-3 py-2 rounded-md hover:bg-primary/5">Troubleshooting</a>
              </li>
              <li>
                <a href="#resources" className="block px-3 py-2 rounded-md hover:bg-primary/5">Resources</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow">
        <h1 id="overview" className="text-4xl font-bold mb-6">Google Analytics Integration Best Practices</h1>

        <p className="mb-6">
          This guide outlines best practices for making the most of your Google Analytics integration with the Uplink Documentation site.
        </p>

        <h2 id="implementation" className="text-2xl font-bold mt-10 mb-4">Tracking Implementation</h2>

        <p className="mb-4">
          The analytics implementation for this site follows these key principles:
        </p>

        <ol className="list-decimal pl-6 mb-6 space-y-2">
          <li><strong>Separation of concerns</strong>: Analytics logic is isolated from application logic</li>
          <li><strong>Comprehensive tracking</strong>: Multiple user engagement metrics are tracked</li>
          <li><strong>Privacy-first</strong>: Analytics only runs in production and respects user preferences</li>
          <li><strong>Performance optimized</strong>: Minimal impact on page load and runtime performance</li>
        </ol>

        <h2 id="capabilities" className="text-2xl font-bold mt-10 mb-4">Available Tracking Capabilities</h2>

        <p className="mb-4">
          This implementation provides tracking for:
        </p>

        <ol className="list-decimal pl-6 mb-6 space-y-2">
          <li><strong>Page Views</strong>: Automatically tracked with path and query parameters</li>
          <li><strong>Time on Page</strong>: Measures how long users spend on each page</li>
          <li><strong>Scroll Depth</strong>: Tracks how far users scroll down pages</li>
          <li><strong>Button/Link Clicks</strong>: Records interactions with navigation elements</li>
          <li><strong>Form Interactions</strong>: Monitors form field usage and submissions</li>
          <li><strong>Search Behavior</strong>: Captures search queries and result engagement</li>
          <li><strong>Download Tracking</strong>: Monitors resource downloads</li>
          <li><strong>Outbound Links</strong>: Tracks clicks to external sites</li>
          <li><strong>Video Engagement</strong>: Measures video play, pause, and completion rates</li>
          <li><strong>Error Tracking</strong>: Captures JavaScript errors</li>
        </ol>

        <h2 id="verification" className="text-2xl font-bold mt-10 mb-4">Verifying Your Implementation</h2>

        <p className="mb-4">
          To ensure your analytics is working correctly after deployment:
        </p>

        <ol className="list-decimal pl-6 mb-6 space-y-2">
          <li>Use Google Analytics Real-Time reports to verify tracking</li>
          <li>Check the browser console for any tracking-related errors</li>
          <li>Use the GA Debug Chrome extension for detailed event inspection</li>
          <li>Validate that all custom events are being received</li>
        </ol>

        <p className="mb-6">
          For more detailed verification steps, see the verification guide in our GitHub repository.
        </p>

        <h2 id="patterns" className="text-2xl font-bold mt-10 mb-4">Common Implementation Patterns</h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Adding Event Tracking to a Component</h3>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto my-4">
          <code>{`import { useAnalytics } from '@/lib/analytics';

export function MyComponent() {
  const { trackEvent } = useAnalytics();
  
  const handleAction = () => {
    // Your component logic
    
    // Track the action
    trackEvent({
      action: 'button_click',
      category: 'Navigation',
      label: 'Get Started'
    });
  };
  
  return <button onClick={handleAction}>Get Started</button>;
}`}</code>
        </pre>

        <h3 className="text-xl font-bold mt-6 mb-3">Adding Time on Page Tracking</h3>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto my-4">
          <code>{`import { useTimeOnPage } from '@/lib/analytics';

export function DocumentationPage() {
  // Track time spent on this page
  useTimeOnPage({
    minTimeMs: 5000, // Only track if user spends at least 5 seconds
    sendInterval: 30000 // Send updates every 30 seconds
  });
  
  return <div>Page content...</div>;
}`}</code>
        </pre>

        <h3 className="text-xl font-bold mt-6 mb-3">Video Engagement Tracking</h3>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto my-4">
          <code>{`import { useRef } from 'react';
import { useVideoTracking } from '@/lib/analytics';

export function TutorialVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useVideoTracking(videoRef, {
    videoTitle: 'Getting Started Tutorial',
    progressMilestones: [10, 25, 50, 75, 90, 100]
  });
  
  return <video ref={videoRef} src="/videos/tutorial.mp4" controls />;
}`}</code>
        </pre>

        {/* Live Demo Section */}
        <h2 id="demo" className="text-2xl font-bold mt-10 mb-4">Live Analytics Demo</h2>
        
        <p className="mb-6">
          This interactive demo shows how analytics events are captured in real-time. Try interacting with the elements below to see events appear in the console.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Interaction Demo</h3>
            <div className="space-y-4">
              <Button 
                onClick={() => logEvent('button_click', 'Demo', 'Primary Button')}
                className="w-full"
              >
                Track Button Click
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => logEvent('button_click', 'Demo', 'Secondary Button')}
                className="w-full"
              >
                Track Secondary Button
              </Button>
                <a 
                href="https://github.com/jmkcoder/odyssey-uplink-protocol" 
                target="_blank"
                rel="noopener"
                className="block text-center text-primary underline"
                onClick={(e) => {
                  e.preventDefault();
                  logEvent('outbound_link', 'Demo', 'GitHub Link');
                }}
              >
                Track Outbound Link
              </a>
                <div className="border rounded p-4 mt-4">
                <label htmlFor="demo-search" className="block text-sm font-medium mb-1">Search (type at least 3 chars)</label>
                <div className="flex gap-2">
                  <input 
                    id="demo-search" 
                    type="text" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    onChange={(e) => {
                      if (e.target.value.length === 3) {
                        logEvent('search', 'Demo', e.target.value);
                      }
                    }}
                  />
                  <Button onClick={() => logEvent('search_submit', 'Demo', 'Demo Search')}>
                    Search
                  </Button>
                </div>
              </div>
              
              {/* Add video player demo */}
              <div className="border rounded p-4 mt-4">
                <h4 className="text-md font-medium mb-2">Video Tracking Demo</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Play, pause, or complete this video to see tracking events
                </p>
                <video 
                  ref={demoVideoRef}
                  src="/videos/tutorial-intro.mp4"
                  className="w-full rounded"
                  poster="/images/tutorial-placeholder.jpg"
                  controls
                  preload="metadata"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Events Console</h3>              <div className="bg-black text-green-400 font-mono text-sm p-4 rounded-md h-[420px] overflow-y-auto">
              {events.length === 0 ? (
                <div className="text-gray-500">No events tracked yet. Interact with the demo elements to see events appear here.</div>
              ) : (
                events.map((event, i) => (
                  <div key={i} className="mb-2">
                    <span className="text-gray-500">[{event.timestamp}]</span>{' '}
                    {event.action} | {event.category}{event.label ? ` | ${event.label}` : ''}
                    {event.extra && Object.keys(event.extra).length > 0 && (
                      <div className="text-xs text-gray-400 ml-6 mt-1">
                        {Object.entries(event.extra).map(([key, value]) => (
                          <div key={key}>{key}: {JSON.stringify(value)}</div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              )}            </div>
            <div className="mt-2 text-xs text-gray-500">
              Note: In development mode, events are logged but not sent to Google Analytics.
            </div>
          </div>
        </div>

        <h2 id="troubleshooting" className="text-2xl font-bold mt-10 mb-4">Troubleshooting</h2>

        <p className="mb-4">
          If you encounter issues with analytics tracking:
        </p>

        <ol className="list-decimal pl-6 mb-6 space-y-2">
          <li>Ensure the Google Analytics Measurement ID is correctly set (<code>G-F2YGT22T1L</code>)</li>
          <li>Verify that the analytics scripts are loading in the browser</li>
          <li>Check that the <code>isAnalyticsEnabled</code> variable is correctly detecting production environment</li>
          <li>Ensure events are properly formatted according to GA4 requirements</li>
        </ol>

        <h2 id="resources" className="text-2xl font-bold mt-10 mb-4">Resources</h2>        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><a href="https://developers.google.com/analytics/devguides/collection/ga4" className="text-primary hover:underline" target="_blank" rel="noopener">Google Analytics 4 Documentation</a></li>
          <li><a href="https://support.google.com/analytics/answer/9216061?hl=en" className="text-primary hover:underline" target="_blank" rel="noopener">GA4 Event Parameters Reference</a></li>
          <li><a href="https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna" className="text-primary hover:underline" target="_blank" rel="noopener">GA4 Debugger Chrome Extension</a></li>
        </ul>        <div className="border-t pt-8 mt-16">
          <p className="text-center text-muted-foreground">
            Was this documentation helpful? <Link href="/contact-us" className="text-primary hover:underline">Provide feedback</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
