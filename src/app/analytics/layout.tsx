import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics Guide - Uplink Protocol Documentation',
  description: 'Comprehensive guide for implementing and verifying Google Analytics in Uplink Protocol projects.',
};

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto py-10 max-w-5xl">
      <div className="px-4 md:px-6">
        <div className="mb-10">
          <div className="inline-block bg-primary/10 px-3 py-1 rounded-md text-primary font-medium text-sm mb-2">
            Documentation
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Analytics Implementation</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            A comprehensive guide to Google Analytics integration in Uplink Protocol
          </p>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}
