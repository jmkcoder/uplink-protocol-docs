'use client';

import { useEffect, useRef, useState } from 'react';

export function NextJSDatePicker(props: Record<string, unknown>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isComponentReady, setIsComponentReady] = useState(false);

  useEffect(() => {
    const registerAndCreateComponent = async () => {
      if (typeof window === 'undefined') return;

      try {
        // Check if component is already registered
        if (!customElements.get('uplink-date-picker')) {
          console.log('Registering uplink-date-picker for Next.js...');
          
          // Import the component
          await import('@/app/controllers/calendar-controller/sample/date-picker/date-picker');
          
          // Wait for registration to complete
          await new Promise(resolve => setTimeout(resolve, 100));
        }

        // Patch the global click handler to be Next.js friendly
        patchGlobalClickHandler();
        
        setIsComponentReady(true);
        console.log('uplink-date-picker ready for Next.js');
      } catch (error) {
        console.error('Failed to register web component:', error);
      }
    };

    registerAndCreateComponent();
  }, []);

  // Function to patch the global click handler
  const patchGlobalClickHandler = () => {
    // Override addEventListener for document.body specifically
    if (document.body && !document.body.hasAttribute('data-patched')) {
      const body = document.body;
      const originalBodyAddEventListener = body.addEventListener.bind(body);
      
      body.addEventListener = function(
        type: string, 
        listener: EventListenerOrEventListenerObject, 
        options?: boolean | AddEventListenerOptions
      ) {
        if (type === 'click' && typeof listener === 'function') {
          // Wrap the click handler to be more selective
          const wrappedListener = (event: Event) => {
            const target = event.target as HTMLElement;
            
            // Only handle clicks within the date picker component or its children
            if (target.closest('uplink-date-picker') || 
                target.closest('.date-picker-container') ||
                target.classList.contains('date-picker-cell') ||
                target.closest('.nextjs-date-picker-container')) {
              listener(event);
            }
            // Let all other clicks (like Next.js links) work normally
          };
          
          return originalBodyAddEventListener(type, wrappedListener, options);
        }
        
        return originalBodyAddEventListener(type, listener, options);
      };
      
      // Mark as patched to avoid multiple patches
      body.setAttribute('data-patched', 'true');
    }
  };

  useEffect(() => {
    // Create the web component element after registration
    const container = containerRef.current;
    if (isComponentReady && container) {
      // Clear any existing content
      container.innerHTML = '';
      
      // Create the web component
      const element = document.createElement('uplink-date-picker');
      
      // Apply props to the element
      Object.entries(props).forEach(([key, value]) => {
        if (typeof value === 'string') {
          element.setAttribute(key, value);
        } else if (typeof value === 'boolean') {
          if (value) {
            element.setAttribute(key, '');
          }
        }
      });
      
      container.appendChild(element);
      
      return () => {
        if (container && element.parentNode) {
          container.removeChild(element);
        }
      };
    }
  }, [isComponentReady, props]);

  return (
    <div ref={containerRef} className="nextjs-date-picker-container">
      {!isComponentReady && (
        <div className="flex items-center justify-center p-4 text-sm text-muted-foreground">
          Loading calendar component...
        </div>
      )}
    </div>
  );
}
