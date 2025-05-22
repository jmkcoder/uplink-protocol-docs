'use client'

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import "../../../syntax-highlight.css"
import { Introduction } from "@/components/docs/calendar-controller/Introduction"
import { Installation } from "@/components/docs/calendar-controller/Installation"
import { KeyFeatures } from "@/components/docs/calendar-controller/KeyFeatures"
import { Basics } from "@/components/docs/calendar-controller/Basics"
import { TypeScriptSupport } from "@/components/docs/calendar-controller/TypeScriptSupport"
import { Architecture } from "@/components/docs/calendar-controller/Architecture"
import { RelatedReferences } from "@/components/docs/calendar-controller/RelatedReferences"
import { SEO } from '@/components/seo'
import { SocialShareContainer } from "@/components/social-share-container"
import { DocsPageLayout } from "@/components/docs/docs-page-layout"
import { event as trackEvent } from "@/lib/analytics"

export default function CalendarControllerOverviewPage() {
  // Track page view for analytics
  useEffect(() => {
    trackEvent({
      action: 'page_view',
      category: 'Documentation',
      label: 'Calendar Controller Overview'
    });
  }, []);

  // Store documentation content for structured data generation
  const [docContent, setDocContent] = useState<string>('');
  
  // Extract content from documentation components for SEO purposes
  useEffect(() => {
    // This is a simplified approach - in a real implementation you might
    // extract actual content from markdown or from the component prop values
    const content = `
# Calendar Controller
A flexible, reactive calendar component for date selection, navigation, and internationalization.

## What is Calendar Controller?
Calendar Controller is a framework-agnostic library designed to handle complex calendar state management with built-in internationalization.

## How does Calendar Controller work?
Calendar Controller separates logic from UI, allowing you to implement calendars with any frontend framework.

## When should I use Calendar Controller?
Use Calendar Controller when you need date selection, date ranges, or want to decouple calendar logic from UI components.

## How do I install Calendar Controller?
You can install Calendar Controller using npm, yarn, or pnpm with the package name @uplink/calendar-controller.
    `;
    setDocContent(content);
  }, []);

  return (
    <>
      {/* Add enhanced SEO components */}
      <SEO
        type="documentation"
        title="Calendar Controller Overview - Uplink Protocol"
        description="A flexible, reactive calendar component for date selection, navigation, and internationalization."
        keywords={[
          'calendar controller',
          'date picker', 
          'date selection',
          'date range selection',
          'calendar management',
          'internationalization',
          'uplink protocol'
        ]}
        content={docContent}
        datePublished="2023-01-01T00:00:00+00:00"
        dateModified={new Date().toISOString()}
      />

      <DocsPageLayout>
        {/* Header & Navigation */}
        <div className="space-y-2 mb-6 sm:mb-8">
          <Badge variant="outline">Logic</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Calendar Controller</h1>          
          <p className="text-muted-foreground text-base sm:text-lg">
            A flexible, reactive calendar component for date selection, navigation, and internationalization.
          </p>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 border-b border-border">
            <Link href="/logic/calendar-controller/overview" className="font-medium text-primary border-b-2 border-primary pb-2 text-sm sm:text-base">Overview</Link>
            <Link href="/logic/calendar-controller/api" className="text-muted-foreground hover:text-foreground pb-2 text-sm sm:text-base">API</Link>
            <Link href="/logic/calendar-controller/examples" className="text-muted-foreground hover:text-foreground pb-2 text-sm sm:text-base">Examples</Link>
          </div>
        </div>
        
        {/* Overview Content */}
        <section className="space-y-8 sm:space-y-12">
          {/* Introduction Component */}
          <div id="introduction">
            <Introduction />
          </div>
          
          {/* Installation Component */}
          <div id="installation">
            <Installation />
          </div>
          
          {/* Key Features Component */}
          <div id="key-features">
            <KeyFeatures />
          </div>
          
          {/* Calendar Controller Basics Component */}
          <div id="basics">
            <Basics />
          </div>
          
          {/* TypeScript Support Component */}
          <div id="typescript-support">
            <TypeScriptSupport />
          </div>
          
          {/* Architecture Component */}
          <div id="architecture">
            <Architecture />
          </div>
          
          {/* Related References Component */}
          <div id="related-references">
            <RelatedReferences />
          </div>
          
          {/* Social Share */}
          <SocialShareContainer 
            title="Calendar Controller Overview - Uplink Protocol"
            description="A flexible, reactive calendar component for date selection, navigation, and internationalization."
          />
        </section>
      </DocsPageLayout>
    </>
  )
}
