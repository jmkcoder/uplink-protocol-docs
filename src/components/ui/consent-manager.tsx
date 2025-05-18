'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function ConsentManager() {
  const [consentStatus, setConsentStatus] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedConsent = localStorage.getItem('analytics-consent');
      setConsentStatus(savedConsent);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('analytics-consent', 'accepted');
    setConsentStatus('accepted');
    // Force page reload to apply new consent settings
    window.location.reload();
  };

  const handleDecline = () => {
    localStorage.setItem('analytics-consent', 'declined');
    setConsentStatus('declined');
    // Force page reload to apply new consent settings
    window.location.reload();
  };

  if (!isVisible) {
    return (
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 text-xs px-3 py-1 h-auto"
      >
        Cookie Settings
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-background rounded-lg shadow-lg max-w-md w-full p-6">
        <h3 className="text-xl font-bold mb-4">Cookie Consent Preferences</h3>
        
        <p className="mb-4 text-sm text-muted-foreground">
          This site uses cookies to analyze traffic and improve your experience.
          You can choose whether to accept or decline these cookies.
        </p>
        
        <div className="mb-6">
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <h4 className="font-medium">Analytics Cookies</h4>
              <p className="text-xs text-muted-foreground">Help us understand how visitors interact with our site</p>
            </div>
            <div className="flex items-center">
              <div className={`px-3 py-1 rounded text-xs font-medium ${
                consentStatus === 'accepted' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
                consentStatus === 'declined' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' : 
                'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
              }`}>
                {consentStatus === 'accepted' ? 'Accepted' : 
                 consentStatus === 'declined' ? 'Declined' : 'Not set'}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => setIsVisible(false)}>
            Cancel
          </Button>
          <Button variant="outline" onClick={handleDecline}>
            Decline All
          </Button>
          <Button onClick={handleAccept}>
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
}
