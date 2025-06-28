'use client'

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import "../syntax-highlight.css"
import { SEO } from '@/components/seo'
import { SocialShareContainer } from "@/components/social-share-container"
import { event as trackEvent } from "@/lib/analytics"

export default function ControllersOverviewPage() {
  // Track page view for analytics
  useEffect(() => {
    trackEvent({
      action: 'page_view',
      category: 'Documentation',
      label: 'Controllers Overview'
    });
  }, []);

  // Store documentation content for structured data generation
  const [docContent, setDocContent] = useState<string>('');
  
  // Extract content from documentation components for SEO purposes
  useEffect(() => {
    const content = `
# Controllers Overview - Uplink Protocol
Discover powerful, framework-agnostic controllers for building modern web applications with reactive state management and service-oriented architecture.

## Available Controllers
### Calendar Controller
A comprehensive date management system with specialized services for calendar operations, date selection, validation, formatting, navigation, and state management. Features include single date, date range, and multi-date selection modes, multiple view modes, internationalization support, disabled weekdays, and reactive binding system.

## Features
- Framework-agnostic design for React, Vue, Angular, and vanilla JavaScript
- Service-oriented architecture with clean separation of concerns
- Reactive binding system for UI synchronization
- TypeScript support with comprehensive type definitions
- Comprehensive internationalization and localization
- Extensible and maintainable codebase
    `;
    setDocContent(content);
  }, []);

  return (
    <>
      {/* Add enhanced SEO components */}
      <SEO
        type="documentation"
        title="Controllers Overview - Uplink Protocol"
        description="Discover powerful, framework-agnostic controllers for building modern web applications with reactive state management and service-oriented architecture."
        keywords={[
          'controllers',
          'calendar controller',
          'form controller', 
          'reactive state management',
          'service-oriented architecture',
          'framework-agnostic',
          'uplink protocol'
        ]}
        content={docContent}
        datePublished="2023-01-01T00:00:00+00:00"
        dateModified={new Date().toISOString()}
      />

      <div className="min-h-screen">
        {/* Header & Navigation */}
        <div className="space-y-2 mb-8">
          <Badge variant="outline">Controllers</Badge>
          <h1 className="text-4xl font-bold tracking-tight">Controllers Overview</h1>
          <p className="text-muted-foreground text-lg">
            Discover powerful, framework-agnostic controllers for building modern web applications with reactive state management and service-oriented architecture.
          </p>
        </div>

        {/* Overview Content */}
        <section className="space-y-12">
          {/* Introduction */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">What are Controllers?</h2>
            <p className="text-lg mb-4">
              Controllers in the Uplink Protocol ecosystem are specialized classes that manage complex application logic and state through service-oriented architecture. They provide framework-agnostic solutions for common web development challenges while maintaining clean separation of concerns.
            </p>
            <p className="text-base text-muted-foreground">
              Each controller is designed to work seamlessly across React, Vue, Angular, and vanilla JavaScript applications, offering reactive binding systems and comprehensive TypeScript support for modern development workflows.
            </p>
          </div>

          {/* Available Controllers */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Available Controllers</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Calendar Controller Card */}
              <Link href="/controllers/calendar-controller/overview" className="block group">
                <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-lg hover:border-primary/20 group-hover:scale-[1.02] h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">Calendar Controller</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">v0.2.3</Badge>
                          <Badge variant="outline" className="text-xs">Latest</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      A comprehensive date management system with specialized services for calendar operations, date selection, validation, and formatting. Features multiple view modes, internationalization, disabled weekdays, and reactive binding system.
                    </p>
                    
                    {/* Key Features */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Date Selection</Badge>
                        <Badge variant="outline" className="text-xs">Range Picking</Badge>
                        <Badge variant="outline" className="text-xs">Multi-view</Badge>
                        <Badge variant="outline" className="text-xs">i18n Support</Badge>
                        <Badge variant="outline" className="text-xs">Disabled Weekdays</Badge>
                      </div>
                    </div>

                    {/* Architecture Highlights */}
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-muted-foreground">Service Architecture</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-muted-foreground">Reactive Bindings</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <span className="text-muted-foreground">TypeScript Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        <span className="text-muted-foreground">Framework Agnostic</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Form Controller Card - Coming Soon */}
              <Card className="overflow-hidden border-dashed border-muted-foreground/20 h-full">
                <CardContent className="p-6 space-y-4 opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Form Controller</h3>
                      <Badge variant="secondary" className="text-xs mt-1">Coming Soon</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    A powerful form management system with validation, state management, and reactive binding capabilities. Perfect for complex forms, multi-step workflows, and dynamic field generation.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Planned Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs opacity-50">Form Validation</Badge>
                      <Badge variant="outline" className="text-xs opacity-50">State Management</Badge>
                      <Badge variant="outline" className="text-xs opacity-50">Dynamic Fields</Badge>
                      <Badge variant="outline" className="text-xs opacity-50">Multi-step Forms</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Architecture Benefits */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Architecture Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium">Service-Oriented</h3>
                  </div>
                  <p className="text-muted-foreground">Clean separation of concerns with specialized services handling specific functionality for maintainable and extensible code architecture.</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium">Reactive Bindings</h3>
                  </div>
                  <p className="text-muted-foreground">Subscribe to state changes through reactive bindings for real-time UI synchronization and seamless user experience.</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium">Framework Agnostic</h3>
                  </div>
                  <p className="text-muted-foreground">Works seamlessly with React, Vue, Angular, and vanilla JavaScript without framework-specific dependencies or limitations.</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium">TypeScript Ready</h3>
                  </div>
                  <p className="text-muted-foreground">Comprehensive TypeScript support with detailed type definitions, interfaces, and generics for enhanced developer experience.</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium">Internationalization</h3>
                  </div>
                  <p className="text-muted-foreground">Built-in support for multiple languages, locales, and cultural preferences with comprehensive internationalization capabilities.</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium">High Performance</h3>
                  </div>
                  <p className="text-muted-foreground">Optimized for performance with efficient state management, minimal re-renders, and lightweight bundle size for fast applications.</p>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Getting Started */}
          <div className="bg-gradient-to-r from-primary/5 to-blue-50 dark:from-primary/5 dark:to-blue-900/20 border border-primary/10 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Getting Started with Controllers</h2>
            <p className="text-lg mb-4">
              Ready to enhance your application with powerful, reactive controllers? Start with the Calendar Controller to see how service-oriented architecture can simplify complex functionality.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/controllers/calendar-controller/overview" 
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Explore Calendar Controller →
              </Link>
              <Link 
                href="/getting-started" 
                className="inline-flex items-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors"
              >
                Installation Guide
              </Link>
            </div>
          </div>

          {/* Social Share */}
          <SocialShareContainer 
            title="Controllers Overview - Uplink Protocol"
            description="Discover powerful, framework-agnostic controllers for building modern web applications with reactive state management and service-oriented architecture."
          />
        </section>
      </div>
    </>
  )
}
