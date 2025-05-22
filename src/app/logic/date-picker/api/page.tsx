'use client'

import { SEO } from "@/components/seo"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SocialShareContainer } from "@/components/social-share-container"
import { useEffect, useState } from "react"
import { event as trackEvent } from "@/lib/analytics"
import "../../../syntax-highlight.css"
import { DocsPageLayout } from "@/components/docs/docs-page-layout"
import { ConfigurationApi } from "@/components/docs/date-picker/api/ConfigurationApi"
import { MethodsApi } from "@/components/docs/date-picker/api/MethodsApi"
import { StateApi } from "@/components/docs/date-picker/api/StateApi"
import { ValidationApi } from "@/components/docs/date-picker/api/ValidationApi"

export default function DatePickerAPI() {
  // Track page view for analytics
  useEffect(() => {
    trackEvent({
      action: 'page_view',
      category: 'Documentation',
      label: 'Date Picker API'
    });
  }, []);
  
  const [docContent, setDocContent] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('configuration');
  
  // Capture rendered content for SEO
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const content = document.getElementById('date-picker-api-content')?.textContent || '';
      setDocContent(content);
    }
  }, [activeTab]);
  
  return (
    <>
      <SEO
        title="Calendar Controller API Reference | Uplink Protocol"
        description="Complete API documentation for the Calendar Controller component, including configuration options, methods, state management, and validation features."
        schemaType="TechArticle"
        articleBody={docContent}
      />

      <DocsPageLayout
        title="Calendar Controller API"
        subtitle="Complete API documentation for the Calendar Controller"
        github="https://github.com/uplinkprotocol/uplink"
        packageName="@uplink-protocol/date-picker"
      >
        <div id="date-picker-api-content" className="space-y-10 pb-20">
          <div>
            <div className="flex gap-2 items-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Calendar Controller API</h1>
              <Badge variant="outline" className="font-mono text-xs py-1">v0.1.0</Badge>
            </div>
            <p className="text-xl text-muted-foreground mb-4">
              Complete API reference for the Calendar Controller component
            </p>
            <SocialShareContainer />
          </div>

          <Tabs defaultValue="configuration" className="space-y-4" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="configuration">Configuration</TabsTrigger>
              <TabsTrigger value="methods">Methods</TabsTrigger>
              <TabsTrigger value="state">State</TabsTrigger>
              <TabsTrigger value="validation">Validation</TabsTrigger>
            </TabsList>
            <TabsContent value="configuration" className="space-y-4">
              <ConfigurationApi />
            </TabsContent>
            <TabsContent value="methods" className="space-y-4">
              <MethodsApi />
            </TabsContent>
            <TabsContent value="state" className="space-y-4">
              <StateApi />
            </TabsContent>
            <TabsContent value="validation" className="space-y-4">
              <ValidationApi />
            </TabsContent>
          </Tabs>
        </div>
      </DocsPageLayout>
    </>
  )
}
