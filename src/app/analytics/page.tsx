'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useAnalytics, useScrollDepthTracking, useTimeOnPage } from '@/lib/analytics';
import { Button } from '@/components/ui/button';
import { DocsPageLayout } from '@/components/docs/docs-page-layout';
import { Badge } from '@/components/ui/badge';

export default function AnalyticsPage() {
  const { trackEvent } = useAnalytics();
  const [events, setEvents] = useState<Array<{
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
  const logEvent = useCallback((action: string, category: string, label?: string, extra?: Record<string, unknown>) => {
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
  }, [trackEvent]);
  
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
  
  // Track page view when component mounts - only run once
  useEffect(() => {
    logEvent('page_view', 'Documentation', 'Analytics Guide');
  }, [logEvent]);
  
  return (
    <DocsPageLayout>
      <div className="space-y-2">
        <Badge variant="outline">Docs</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Analytics Integration</h1>
        <p className="text-muted-foreground text-lg">
          Learn how to use Uplink&apos;s built-in analytics hooks to track user interactions.
        </p>
      </div>
      
      <div className="space-y-6 mt-8">
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8 pb-8">
          <div>
            <h2 id="overview" className="text-2xl font-bold mb-4">Overview</h2>
            <p className="mb-4">
              Uplink provides a simple yet powerful analytics system to help you track user interactions with your applications. The analytics module works seamlessly with Google Analytics 4 (GA4) and can be extended to work with other analytics providers.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Key Features</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Simple event tracking with category, action, and label</li>
              <li>Automatic scroll depth tracking</li>
              <li>Time on page measurements</li>
              <li>User consent management</li>
              <li>Video playback tracking</li>
              <li>Extensible to any analytics provider</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">How it Works</h3>
            <p>
              The analytics system uses React hooks to track user behavior. When an event occurs, it is sent to the configured analytics provider only if the user has given consent. All events are format-agnostic and can be adapted to work with any analytics service.
            </p>
          </div>
          
          <div className="bg-muted rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-4">Live Demo Console</h3>
            <p className="text-sm text-muted-foreground mb-4">Try interacting with the elements below to see analytics events in real-time:</p>
            
            <div className="flex flex-col gap-4 mb-6">
              <Button 
                onClick={() => logEvent('button_click', 'Demo', 'Primary Button')}
                className="w-full"
              >
                Track Button Click
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => logEvent('button_click', 'Demo', 'Secondary Button', { custom_prop: 'test_value' })}
                className="w-full"
              >
                Track with Custom Props
              </Button>
              
              <div className="mt-2">
                <video
                  ref={demoVideoRef}
                  controls
                  className="w-full h-40 object-cover rounded-md"
                  poster="/video-poster.jpg"
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Play, pause or seek the video to generate events
                </p>
              </div>
            </div>
            
            <div className="border rounded-md overflow-hidden bg-background">
              <div className="bg-primary/10 px-4 py-2 border-b">
                <p className="text-sm font-medium">Event Log</p>
              </div>
              <div className="p-4 h-48 overflow-y-auto font-mono text-xs">
                {events.length === 0 ? (
                  <p className="text-muted-foreground">Interact with the demo elements to see events here...</p>
                ) : (
                  events.map((event, index) => (
                    <div key={index} className="mb-2 pb-2 border-b last:border-0">
                      <span className="text-muted-foreground">{event.timestamp}</span>{' '}
                      <span className="font-semibold text-primary">{event.category}</span> /{' '}
                      <span className="font-semibold">{event.action}</span>
                      {event.label && <span> / {event.label}</span>}
                      {event.extra && (
                        <pre className="mt-1 p-1 rounded bg-muted text-muted-foreground overflow-x-auto">
                          {JSON.stringify(event.extra, null, 2)}
                        </pre>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        
        <h2 id="installation" className="text-2xl font-bold mt-10 mb-4">Installation</h2>
        <p className="mb-4">
          The analytics module is included in the Uplink core package, so there&apos;s no need for additional installation.
          Simply import the hooks you need from <code>@uplink-protocol/analytics</code>.
        </p>
        
        <h2 id="basic-usage" className="text-2xl font-bold mt-10 mb-4">Basic Usage</h2>
        <div className="bg-muted p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
          <pre>{`
import { useAnalytics } from '@uplink-protocol/analytics';

function MyComponent() {
  const { trackEvent } = useAnalytics();
  
  const handleButtonClick = () => {
    trackEvent({
      category: 'User Interaction',
      action: 'button_click',
      label: 'Submit Form',
      value: 1,
      // Optional: any additional properties for your analytics provider
      nonInteraction: false,
    });
  };
  
  return (
    <button onClick={handleButtonClick}>
      Submit Form
    </button>
  );
}
          `}</pre>
        </div>
        
        <h2 id="available-hooks" className="text-2xl font-bold mt-10 mb-4">Available Hooks</h2>
        
        <h3 id="use-analytics" className="text-xl font-semibold mt-6 mb-2">useAnalytics()</h3>
        <p className="mb-2">The core hook for tracking events.</p>
        <p className="mb-4">Returns: <code>{`{ trackEvent, isEnabled }`}</code> - Functions to track events and check if analytics is enabled</p>
        
        <h3 id="use-scroll-depth" className="text-xl font-semibold mt-6 mb-2">useScrollDepthTracking()</h3>
        <p className="mb-2">Automatically tracks how far users scroll down a page.</p>
        <p className="mb-4">Options:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><code>thresholds</code>: Array of percentages at which to trigger events (default: <code>[25, 50, 75, 100]</code>)</li>
          <li><code>throttleMs</code>: Throttle time in milliseconds (default: <code>500</code>)</li>
          <li><code>trackPagePath</code>: Whether to include the page path in events (default: <code>true</code>)</li>
        </ul>
        
        <h3 id="use-time-on-page" className="text-xl font-semibold mt-6 mb-2">useTimeOnPage()</h3>
        <p className="mb-2">Tracks how much time users spend on a page.</p>
        <p className="mb-4">Options:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><code>intervalMs</code>: How often to send time update events (default: <code>60000</code> - every minute)</li>
          <li><code>startImmediately</code>: Whether to start tracking immediately (default: <code>true</code>)</li>
        </ul>
        
        <h2 id="configuration" className="text-2xl font-bold mt-10 mb-4">Configuration</h2>
        <p className="mb-4">
          To configure analytics for your application, you&apos;ll need to set up a provider.
          Uplink ships with a Google Analytics 4 provider, but you can easily create your own.
        </p>
        
        <div className="bg-muted p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
          <pre>{`
// In your app initialization code
import { configureAnalytics, GA4Provider } from '@uplink-protocol/analytics';

configureAnalytics({
  provider: new GA4Provider({
    measurementId: 'G-XXXXXXXXXX',
  }),
  
  // Optional: function to determine if analytics should be enabled
  shouldEnableAnalytics: () => {
    // Check user consent, development environment, etc.
    return localStorage.getItem('analytics-consent') === 'true';
  }
});
          `}</pre>
        </div>
        
        <h2 id="creating-custom-providers" className="text-2xl font-bold mt-10 mb-4">Creating Custom Providers</h2>
        <p className="mb-4">
          You can create your own analytics provider by implementing the <code>AnalyticsProvider</code> interface:
        </p>
        
        <div className="bg-muted p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
          <pre>{`
import { AnalyticsProvider, AnalyticsEventData } from '@uplink-protocol/analytics';

class MyCustomProvider implements AnalyticsProvider {
  initialize(): Promise<void> {
    // Set up your analytics service
    return Promise.resolve();
  }
  
  trackEvent(eventData: AnalyticsEventData): void {
    // Send event to your analytics service
    console.log('Tracking event:', eventData);
    
    // Example: Send to a custom endpoint
    fetch('https://api.example.com/analytics', {
      method: 'POST',
      body: JSON.stringify(eventData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

// Then use it in your configuration
configureAnalytics({
  provider: new MyCustomProvider(),
  // other options
});
          `}</pre>
        </div>
        
        <h2 id="troubleshooting" className="text-2xl font-bold mt-10 mb-4">Troubleshooting</h2>
        <p className="mb-4">If analytics events are not being tracked, check the following:</p>
        <ol className="list-decimal pl-6 mb-6 space-y-2">
          <li>Check that the <code>shouldEnableAnalytics()</code> function is working correctly</li>
          <li>Make sure users have accepted cookie consent</li>
          <li>Ensure events are properly formatted according to GA4 requirements</li>
        </ol>

        <h2 id="resources" className="text-2xl font-bold mt-10 mb-4">Resources</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><a href="https://developers.google.com/analytics/devguides/collection/ga4" className="text-primary hover:underline" target="_blank" rel="noopener">Google Analytics 4 Documentation</a></li>
          <li><a href="https://support.google.com/analytics/answer/9216061?hl=en" className="text-primary hover:underline" target="_blank" rel="noopener">GA4 Event Parameters Reference</a></li>
          <li><a href="https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna" className="text-primary hover:underline" target="_blank" rel="noopener">GA4 Debugger Chrome Extension</a></li>
        </ul>
        <div className="border-t pt-8 mt-16">
          <p className="text-center text-muted-foreground">
            Was this documentation helpful? <Link href="/contact-us" className="text-primary hover:underline">Provide feedback</Link>
          </p>
        </div>
      </div>
    </DocsPageLayout>
  );
}
