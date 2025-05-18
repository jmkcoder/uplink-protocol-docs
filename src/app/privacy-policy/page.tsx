import { Metadata } from 'next';
import Link from 'next/link';
import ConsentManager from '@/components/ui/consent-manager';

export const metadata: Metadata = {
  title: 'Privacy Policy - Uplink Protocol Documentation',
  description: 'Privacy policy for Uplink Protocol Documentation site',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <div className="px-4 md:px-6">        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Privacy Policy</h1>
        
        <p className="mb-8 text-muted-foreground">
          Last updated: May 18, 2025
        </p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="mb-4">
            This Privacy Policy describes how Uplink Protocol Documentation ("we", "our", or "us") 
            collects, uses, and shares information when you use our documentation site.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="mb-4">
            We collect usage and analytics data to help us improve our documentation. This data includes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Pages you visit</li>
            <li>Time spent on pages</li>
            <li>Scroll depth on documentation pages</li>
            <li>Interactions with documentation elements (buttons, links, videos)</li>
            <li>Search terms used within the documentation</li>
            <li>JavaScript errors encountered</li>
          </ul>
          <p>
            This information is collected only in development mode for testing purposes and is not 
            shared with third parties except as required by Google Analytics service.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Cookies</h2>
          <p className="mb-4">
            We use cookies to store your preferences and consent choices. Google Analytics 
            may also use cookies to collect usage information.
          </p>
        </section>
          <section className="mb-8">          <h2 className="text-2xl font-bold mb-4">Your Choices</h2>
          <p className="mb-4">
            You can opt out of analytics tracking by declining cookies when prompted.
            You can also clear your cookies at any time through your browser settings.
          </p>
          <div id="cookie-settings" className="p-4 bg-muted rounded-lg mb-4">
            <h3 className="font-semibold mb-2">Manage Cookie Preferences</h3>
            <p className="text-sm mb-3">
              You can update your cookie preferences at any time using the control below.
            </p>
            <ConsentManager />
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <Link href="/contact-us" className="text-primary hover:underline">
              Contact Page
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
