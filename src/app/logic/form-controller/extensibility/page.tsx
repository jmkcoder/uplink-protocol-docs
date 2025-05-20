'use client'

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import "../../../syntax-highlight.css"
import { DocsSidebar } from "@/components/docs/sidebar"
import { Extensibility } from "@/components/docs/form-controller/Extensibility"
import { SEO } from "@/components/seo"
import { SocialShareContainer } from "@/components/social-share-container"
import { useEffect, useState } from "react"
import { event as trackEvent } from "@/lib/analytics"

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
    <main className="min-h-screen flex flex-col lg:flex-row bg-background text-foreground">
      {/* Add enhanced SEO components */}
      <SEO
        type="documentation"
        title="Form Controller Extensibility - Uplink Protocol"
        description="Learn how to extend Form Controller to create custom form controllers with specialized behavior and functionality."
        keywords={[
          'form controller',
          'extensibility', 
          'custom form controllers',
          'extending forms',
          'form controller subclassing',
          'form controller hooks',
          'uplink protocol'
        ]}        content={docContent}
        datePublished="2023-01-01T00:00:00+00:00"
        dateModified={new Date().toISOString()}
      />
      
      {/* Sidebar */}
      <DocsSidebar />
        {/* Main Content */}
      <div className="flex-1 px-4 sm:px-6 py-8 sm:py-12 lg:max-w-4xl">
        {/* Header & Navigation */}
        <div className="space-y-2 mb-6 sm:mb-8">
          <Badge variant="outline">Logic</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Form Controller</h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            A flexible, reactive form management system for both multi-step and single-step forms with advanced validation capabilities.
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
      </div>
    </main>
  )
}
