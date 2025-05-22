'use client'

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import "../../../syntax-highlight.css"
import { Introduction } from "@/components/docs/date-picker/Introduction"
import { Installation } from "@/components/docs/date-picker/Installation"
import { Basics } from "@/components/docs/date-picker/Basics"
import { AdvancedCapabilities } from "@/components/docs/date-picker/AdvancedCapabilities"
import { Internationalization } from "@/components/docs/date-picker/Internationalization"
import { TypeScriptSupport } from "@/components/docs/date-picker/TypeScriptSupport"
import { Architecture } from "@/components/docs/date-picker/Architecture"
import { RelatedReferences } from "@/components/docs/date-picker/RelatedReferences"
import { SEO } from "@/components/seo"
import { SocialShareContainer } from "@/components/social-share-container"
import { useEffect, useState } from "react"
import { event as trackEvent } from "@/lib/analytics"
import { DocsPageLayout } from "@/components/docs/docs-page-layout"

export default function DatePickerOverview() {
  // Track page view for analytics
  useEffect(() => {
    trackEvent({
      action: 'page_view',
      category: 'Documentation',
      label: 'Date Picker Overview'
    });
  }, []);
  
  // Store documentation content for structured data generation
  const [docContent, setDocContent] = useState<string>('');

  // Capture rendered content for SEO
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const content = document.getElementById('date-picker-content')?.textContent || '';
      setDocContent(content);
    }
  }, []);

  return (
    <>
      <SEO
        title="Calendar Controller Documentation | Uplink Protocol"
        description="Comprehensive documentation for the Calendar Controller component, a powerful date selection and management system for web applications."
        schemaType="TechArticle"
        articleBody={docContent}
      />

      <DocsPageLayout
        title="Calendar Controller"
        subtitle="A powerful date selection and calendar management system"
        github="https://github.com/uplinkprotocol/uplink"
        packageName="@uplink-protocol/date-picker"
      >
        <div id="date-picker-content" className="space-y-10 pb-20">
          <div>
            <div className="flex gap-2 items-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Calendar Controller</h1>
              <Badge variant="outline" className="font-mono text-xs py-1">v0.1.0</Badge>
            </div>
            <p className="text-xl text-muted-foreground mb-4">
              A powerful, reactive calendar controller for date selection and range management in web applications
            </p>
            <SocialShareContainer />
          </div>

          <div className="space-y-8">
            <Introduction />
            <Installation />
            <Basics />
            <AdvancedCapabilities />
            <Internationalization />
            <TypeScriptSupport />
            <Architecture />
            <RelatedReferences />
          </div>
        </div>
      </DocsPageLayout>
    </>
  )
}
