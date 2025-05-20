'use client'

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import "../../../syntax-highlight.css"
import { Extensibility } from "@/components/docs/form-controller/Extensibility"
import { SEO } from "@/components/seo"
import { SocialShareContainer } from "@/components/social-share-container"
import { useEffect, useState } from "react"
import { event as trackEvent } from "@/lib/analytics"
import { DocsPageLayout } from "@/components/docs/docs-page-layout"

export default function FormControllerExtensibility() {
  // Track page view for analytics
  useEffect(() => {
    trackEvent({
      action: 'page_view',
      category: 'Documentation',
      label: 'Form Controller Extensibility'
    });
  }, []);
  
  // Store documentation content for structured data generation
  const [docContent, setDocContent] = useState<string>('');
  
  // Extract content from documentation components for SEO purposes
  useEffect(() => {
    const content = `
# Form Controller Extensibility
A guide on how to extend Form Controller to create custom form controllers with specialized behavior.

## What is Form Controller Extensibility?
Form Controller's class-based architecture is designed to be highly extensible, allowing you to create custom form controllers by extending the base class.

## How can I extend Form Controller?
You can extend Form Controller by subclassing FormControllerClass and overriding specific methods to customize behavior.

## What are the main extension points?
The main extension points include protected properties, lifecycle hooks, and a modular service architecture.

## When should I create a custom form controller?
Create a custom form controller when you need specialized validation, custom analytics integration, or industry-specific form behaviors.

## How do I override initialization hooks?
You can override methods like setupInitialFormData, initializeServices, and initializeMethods to customize the initialization process.
    `;
    
    setDocContent(content);
  }, []);
    
  return (
    <>
      {/* Add enhanced SEO components */}
      <SEO
        type="documentation"
        title="Form Controller Extensibility - Uplink Protocol"
        description="Learn how to extend Form Controller to create custom form controllers with specialized behavior for your specific needs."
        keywords={[
          'form controller',
          'extensibility', 
          'custom forms',
          'form subclassing',
          'form inheritance',
          'uplink protocol'
        ]}
        content={docContent}
        datePublished="2023-01-05T00:00:00+00:00"
        dateModified={new Date().toISOString()}
      />
      
      <DocsPageLayout>
        {/* Header & Navigation */}
        <div className="space-y-2 mb-6 sm:mb-8">
          <Badge variant="outline">Logic</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Form Controller Extensibility</h1>          
          <p className="text-muted-foreground text-base sm:text-lg">
            Learn how to extend and customize Form Controller for your specific needs
          </p>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 border-b border-border">
            <Link href="/logic/form-controller/overview" className="text-muted-foreground hover:text-foreground pb-2 text-sm sm:text-base">Overview</Link>
            <Link href="/logic/form-controller/api" className="text-muted-foreground hover:text-foreground pb-2 text-sm sm:text-base">API</Link>
            <Link href="/logic/form-controller/examples" className="text-muted-foreground hover:text-foreground pb-2 text-sm sm:text-base">Examples</Link>
            <Link href="/logic/form-controller/extensibility" className="font-medium text-primary border-b-2 border-primary pb-2 text-sm sm:text-base">Extensibility</Link>
          </div>
        </div>
          {/* Extensibility Content */}
        <section className="space-y-8 sm:space-y-12">
          {/* Extensibility Component */}
          <Extensibility />
          
          {/* Social Share */}
          <SocialShareContainer 
            title="Form Controller Extensibility - Uplink Protocol"
            description="Learn how to extend Form Controller to create custom form controllers with specialized behavior and functionality."
          />
        </section>
      </DocsPageLayout>
    </>
  )
}
