'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Import your web component
// Note: This import will only execute on the client side
const registerWebComponents = async () => {
  if (typeof window !== 'undefined') {
    try {
      // Check if component is already registered to prevent conflicts
      if (!customElements.get('uplink-date-picker')) {
        console.log('Registering uplink-date-picker component...');
        // Dynamically import the web component to avoid SSR issues
        await import('@/app/controllers/calendar-controller/sample/date-picker/date-picker');
        console.log('uplink-date-picker component registered successfully');
        // The component auto-registers itself via customElements.define at the end of the file
      }
    } catch (error) {
      console.error('Failed to register web components:', error);
      // Don't throw the error to prevent breaking the app
    }
  }
};

export function WebComponentRegistry() {
  const pathname = usePathname();
  
  useEffect(() => {
    let isRegistered = false;
    
    // Function to register component when needed
    const registerOnDemand = () => {
      if (!isRegistered) {
        console.log('Date picker interaction detected, registering component...');
        registerWebComponents();
        isRegistered = true;
      }
    };

    // Only set up listeners on calendar controller pages
    if (pathname && pathname.includes('/calendar-controller')) {
      // Wait for the DOM to be ready
      const setupListeners = () => {
        const datePickerElement = document.querySelector('uplink-date-picker');
        if (datePickerElement) {
          console.log('Date picker element found, setting up interaction listeners');
          
          // Register on first interaction with the date picker area
          const handleInteraction = () => {
            registerOnDemand();
            // Remove listeners after first registration
            datePickerElement.removeEventListener('mouseenter', handleInteraction);
            datePickerElement.removeEventListener('focus', handleInteraction);
            datePickerElement.removeEventListener('click', handleInteraction);
          };
          
          datePickerElement.addEventListener('mouseenter', handleInteraction);
          datePickerElement.addEventListener('focus', handleInteraction);
          datePickerElement.addEventListener('click', handleInteraction);
          
          return () => {
            datePickerElement.removeEventListener('mouseenter', handleInteraction);
            datePickerElement.removeEventListener('focus', handleInteraction);
            datePickerElement.removeEventListener('click', handleInteraction);
          };
        }
        return undefined;
      };

      // Check immediately
      const cleanup = setupListeners();
      
      // Also check after a delay in case element is added dynamically
      const timeoutId = setTimeout(() => {
        if (!isRegistered) {
          setupListeners();
        }
      }, 100);
      
      return () => {
        clearTimeout(timeoutId);
        cleanup?.();
      };
    }
  }, [pathname]);

  return null; // This component doesn't render anything
}
