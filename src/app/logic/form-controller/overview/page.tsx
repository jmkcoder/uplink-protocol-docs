'use client'

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import "../../../syntax-highlight.css"
import { DocsSidebar } from "@/components/docs/sidebar"
import { Introduction } from "@/components/docs/form-controller/Introduction"
import { Installation } from "@/components/docs/form-controller/Installation"
import { Basics } from "@/components/docs/form-controller/Basics"
import { AdvancedCapabilities } from "@/components/docs/form-controller/AdvancedCapabilities"
import { Validation } from "@/components/docs/form-controller/Validation"
import { TypeScriptSupport } from "@/components/docs/form-controller/TypeScriptSupport"
import { Architecture } from "@/components/docs/form-controller/Architecture"
import { RelatedReferences } from "@/components/docs/form-controller/RelatedReferences"
import { SEO } from "@/components/seo"
import { useEffect, useState } from "react"
import { event as trackEvent } from "@/lib/analytics"

export default function FormControllerOverview() {
  // Track page view for analytics
  useEffect(() => {
    trackEvent({
      action: 'page_view',
      category: 'Documentation',
      label: 'Form Controller Overview'
    });
  }, []);
  
  // Store documentation content for structured data generation
  const [docContent, setDocContent] = useState<string>('');
  
  // Extract content from documentation components for SEO purposes
  useEffect(() => {
    // This is a simplified approach - in a real implementation you might
    // extract actual content from markdown or from the component prop values
    const content = `
# Form Controller
A flexible, reactive form management system for both multi-step and single-step forms with advanced validation capabilities.

## What is Form Controller?
Form Controller is a framework-agnostic library designed to handle complex form state management with built-in validation.

## How does Form Controller work?
Form Controller separates logic from UI, allowing you to implement forms with any frontend framework.

## When should I use Form Controller?
Use Form Controller when you need advanced form validation, multi-step forms, or want to decouple form logic from UI components.

## How do I install Form Controller?
You can install Form Controller using npm, yarn, or pnpm with the package name @uplink-protocol/form-controller.

## Does Form Controller support TypeScript?
Yes, Form Controller has full TypeScript support with type inference for form values and validation.

## Can Form Controller handle nested form data?
Yes, Form Controller fully supports nested form data structures with dot notation for field paths.

## How does validation work in Form Controller?
Form Controller uses a validation schema approach where you define rules and constraints for each field.

## Does Form Controller work with React?
Yes, Form Controller works with React, Vue, Angular, Web Components or any other UI library.

## Can I use Form Controller with vanilla JavaScript?
Yes, Form Controller works perfectly with vanilla JavaScript without any framework dependencies.
    `;
    
    setDocContent(content);
  }, []);
    
  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-background text-foreground">
      {/* Add enhanced SEO components */}
      <SEO
        type="documentation"
        title="Form Controller Overview - Uplink Protocol"
        description="A flexible, reactive form management system for both multi-step and single-step forms with advanced validation capabilities."
        keywords={[
          'form controller',
          'form validation', 
          'form management',
          'multi-step forms',
          'TypeScript forms',
          'JavaScript forms',
          'uplink protocol'
        ]}
        content={docContent}
        showSocialShare={true}
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
            <Link href="/logic/form-controller/overview" className="font-medium text-primary border-b-2 border-primary pb-2 text-sm sm:text-base">Overview</Link>
            <Link href="/logic/form-controller/api" className="text-muted-foreground hover:text-foreground pb-2 text-sm sm:text-base">API</Link>
            <Link href="/logic/form-controller/examples" className="text-muted-foreground hover:text-foreground pb-2 text-sm sm:text-base">Examples</Link>
          </div>
        </div>        {/* Overview Content */}
        <section className="space-y-8 sm:space-y-12">
          {/* Introduction Component */}
          <Introduction />
          
          {/* Installation Component */}
          <Installation />
          
          {/* Form Controller Basics Component */}
          <Basics />

          {/* Advanced Capabilities Component */}
          <AdvancedCapabilities />
            {/* Validation System Component */}
          <Validation />
          
          {/* TypeScript Support Component */}
          <TypeScriptSupport />
          
          {/* Architecture Component */}
          <Architecture />
          
          {/* Related References Component */}
          <RelatedReferences />
        </section>
      </div>
    </main>
  )
}
