'use client'

import { SEO } from "@/components/seo"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SocialShareContainer } from "@/components/social-share-container"
import { useEffect, useState } from "react"
import { event as trackEvent } from "@/lib/analytics"
import "../../../syntax-highlight.css"
import { DocsPageLayout } from "@/components/docs/docs-page-layout"
import { BasicDatePickerExample } from "@/components/docs/date-picker/api/examples/BasicDatePickerExample"
import { DateRangeExample } from "@/components/docs/date-picker/api/examples/DateRangeExample"
import { YearMonthNavigationExample } from "@/components/docs/date-picker/api/examples/YearMonthNavigationExample"
import { LocalizationExample } from "@/components/docs/date-picker/api/examples/LocalizationExample"
import { CustomValidationExample } from "@/components/docs/date-picker/api/examples/CustomValidationExample"

export default function DatePickerExamples() {
  // Track page view for analytics
  useEffect(() => {
    trackEvent({
      action: 'page_view',
      category: 'Documentation',
      label: 'Date Picker Examples'
    });
  }, []);
  
  const [docContent, setDocContent] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('basic');
  
  // Capture rendered content for SEO
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const content = document.getElementById('date-picker-examples-content')?.textContent || '';
      setDocContent(content);
    }
  }, [activeTab]);
  
  return (
    <>
      <SEO
        title="Calendar Controller Examples | Uplink Protocol"
        description="Practical examples of how to use the Calendar Controller component in various scenarios, from basic date picking to advanced date range selection with custom validation."
        schemaType="TechArticle"
        articleBody={docContent}
      />

      <DocsPageLayout
        title="Calendar Controller Examples"
        subtitle="Practical implementation examples for various use cases"
        github="https://github.com/uplinkprotocol/uplink"
        packageName="@uplink-protocol/date-picker"
      >
        <div id="date-picker-examples-content" className="space-y-10 pb-20">
          <div>
            <div className="flex gap-2 items-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Calendar Controller Examples</h1>
              <Badge variant="outline" className="font-mono text-xs py-1">v0.1.0</Badge>
            </div>
            <p className="text-xl text-muted-foreground mb-4">
              Interactive examples demonstrating key features of the Calendar Controller
            </p>
            <SocialShareContainer />
          </div>

          <Tabs defaultValue="basic" className="space-y-4" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 lg:grid-cols-5 w-full">
              <TabsTrigger value="basic">Basic Usage</TabsTrigger>
              <TabsTrigger value="range">Date Range</TabsTrigger>
              <TabsTrigger value="navigation">Navigation</TabsTrigger>
              <TabsTrigger value="localization">Localization</TabsTrigger>
              <TabsTrigger value="validation">Validation</TabsTrigger>
            </TabsList>
            <TabsContent value="basic" className="space-y-4">
              <BasicDatePickerExample />
            </TabsContent>
            <TabsContent value="range" className="space-y-4">
              <DateRangeExample />
            </TabsContent>
            <TabsContent value="navigation" className="space-y-4">
              <YearMonthNavigationExample />
            </TabsContent>
            <TabsContent value="localization" className="space-y-4">
              <LocalizationExample />
            </TabsContent>
            <TabsContent value="validation" className="space-y-4">
              <CustomValidationExample />
            </TabsContent>
          </Tabs>
        </div>
      </DocsPageLayout>
    </>
  )
}
