'use client'

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { SEO } from '@/components/seo'
import { SocialShareContainer } from "@/components/social-share-container"
import { event as trackEvent } from "@/lib/analytics"
import React from "react"
import { NextJSDatePicker } from "@/components/web-components/nextjs-date-picker";

export default function CalendarControllerOverviewPage() {
  // Track page view for analytics
  useEffect(() => {
    trackEvent({
      action: 'page_view',
      category: 'Controllers',
      label: 'Calendar Controller Overview'
    });
  }, []);

  // Store documentation content for structured data generation
  const [docContent, setDocContent] = useState<string>('');

  // Extract content from documentation components for SEO purposes
  useEffect(() => {
    const content = `
# Calendar Controller - Enterprise JavaScript Library
Calendar Controller is a production-ready JavaScript library that provides enterprise-grade calendar functionality for modern web applications. Built with vanilla JavaScript and featuring sophisticated service-oriented architecture, comprehensive internationalization support, and multiple calendar view modes with full accessibility compliance.

## What is Calendar Controller?
Calendar Controller is a comprehensive JavaScript library designed for building sophisticated calendar interfaces in web applications. The library implements modern JavaScript patterns through a service-oriented architecture with eleven specialized services, providing developers with a powerful, reusable calendar component that integrates seamlessly into any web application without framework dependencies.

## Service-Oriented Architecture
The library features a robust service-oriented architecture with dependency injection patterns that separate concerns into specialized services. The component utilizes eleven core services including CalendarService for basic calendar operations, DateSelectionService for single and range date selection, NavigationService for intuitive calendar navigation, LocalizationService for internationalization with BCP 47 language tags, and CalendarGeneratorService for generating calendar data structures across multiple view modes.

## Enterprise Calendar Services
Calendar Controller implements eleven specialized services through dependency injection: CalendarService handles core calendar operations and month/weekday name retrieval, DateSelectionService manages single date and date range selection logic with state management, DateValidationService validates dates against constraints and business rules, NavigationService provides month/year/decade navigation capabilities, CalendarGeneratorService generates calendar data structures for day/month/year views, ViewStateService manages UI state and reactive binding coordination, EventManagerService handles event emission and observer patterns, LocalizationService provides internationalization with BCP 47 language tags and Intl API integration, ConfigurationService processes and validates calendar configuration options, ConstraintsService enforces date constraint rules, and DateFormattingService ensures consistent date formatting across components.

## Multiple Calendar View Modes
The controller provides three integrated view modes for efficient date navigation and selection: Day View displays traditional calendar grid with individual day selection and navigation between months, Month View provides a 12-month grid for quick month selection within a year, and Year View offers year ranges for decade navigation and efficient year selection. All view modes work seamlessly together with automatic state synchronization and reactive binding updates.

## Reactive Binding System and State Management
Calendar Controller implements a sophisticated reactive binding system through the Uplink Protocol that automatically synchronizes UI state across multiple calendar views and components. Observable data streams including calendarDays, calendarMonths, and calendarYears provide real-time updates with automatic subscription management, memory leak prevention, and event-driven architecture enabling loose coupling between components.

## Advanced Features and Enterprise Capabilities
- Service-oriented architecture with eleven specialized services and dependency injection patterns
- Reactive binding system with automatic UI synchronization across multiple calendar views
- Multiple view modes (day, month, year) with seamless navigation and state management
- Comprehensive internationalization support with BCP 47 language tags and Intl API integration
- Advanced date validation and constraint system (min/max dates, disabled dates, business rules)
- Date range selection with start/end date handling and validation
- Enterprise configuration system with validation and default value processing
- Framework-agnostic design compatible with React, Vue, Angular, and vanilla JavaScript
- WCAG accessibility compliance with keyboard navigation and screen reader support
- Performance optimization through efficient calendar generation and state management
- Cross-browser compatibility with modern JavaScript standards compliance

## Enterprise Integration and Framework Support
- Production-ready JavaScript library with service-oriented architecture and dependency injection
- Framework-agnostic design enabling integration with React, Vue, Angular, Svelte, and vanilla JavaScript
- Comprehensive API with reactive bindings, public methods, and event emission system
- TypeScript definitions for enhanced developer experience and type safety
- Performance optimization through efficient service architecture and calendar data generation
- Cross-browser compatibility and modern web standards compliance
- No build tool dependencies required for integration and deployment
- CDN distribution available for rapid prototyping and implementation
    `;
    setDocContent(content);
  }, []);

  return (
    <>
      {/* Add enhanced SEO components */}
      <SEO
        type="documentation"
        title="Calendar Controller - Vanilla JavaScript Guide | Uplink Protocol"
        description="Calendar Controller - Production-ready JavaScript library for enterprise calendar functionality. Web component architecture, SCSS styling, accessibility-compliant, framework-agnostic."
        keywords={[
          'calendar controller',
          'vanilla javascript',
          'date picker',
          'date selection',
          'web components',
          'enterprise calendar',
          'internationalization',
          'accessibility',
          'scss styling',
          'mobile responsive',
          'service architecture',
          'reactive bindings',
          'business rules',
          'framework agnostic',
          'no framework',
          'browser calendar',
          'CDN calendar',
          'pure javascript',
          'html calendar',
          'uplink protocol'
        ]}
        content={docContent}
        datePublished="2023-01-01T00:00:00+00:00"
        dateModified={new Date().toISOString()}
      />

      <div className="min-h-screen">
        {/* Header & Navigation */}
        <div className="space-y-2 mb-6 sm:mb-8">
          <Badge variant="outline">Vanilla JavaScript</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Calendar Controller</h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Calendar Controller is a production-ready JavaScript library that provides comprehensive calendar functionality for modern web applications. Built with vanilla JavaScript and web standards, it offers enterprise-grade features including internationalization, accessibility compliance, and advanced date management capabilities.
          </p>


        </div>

        {/* Vanilla JS Content */}
        <section className="space-y-8 sm:space-y-12">

          {/* Quick Start Section */}
          <div id="quick-start" className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-700 dark:text-blue-300 mb-3 sm:mb-4">
                🚀 Quick Start - Production Ready
              </h2>
              <p className="text-base sm:text-lg mb-3 sm:mb-4">
                Calendar Controller is a production-ready library that provides enterprise-grade calendar functionality in under 30KB. No framework dependencies, no build tools required, just import and use.
              </p>
              <p className="text-sm sm:text-base text-blue-700 dark:text-blue-400">
                Perfect for modern web applications, legacy projects, or any scenario where you need robust calendar functionality without the overhead of large frameworks.
              </p>
            </div>
          </div>

          {/* Comprehensive Feature Introduction */}
          <div id="feature-introduction" className="space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200 dark:border-blue-800">
                <span className="text-2xl">🚀</span>
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Enterprise-Grade Calendar Solution</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Complete Calendar Functionality
              </h2>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Calendar Controller delivers a comprehensive suite of enterprise-grade calendar features designed for modern web applications. From advanced date selection and multi-view navigation to internationalization and accessibility compliance, every aspect has been crafted for production-ready deployment.
              </p>
            </div>

            {/* Core Features Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Date Selection & Management */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 group-hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Advanced Date Selection</h3>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Sophisticated date selection capabilities with full validation, constraints, and business rule enforcement for enterprise applications.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Single Date Selection</h4>
                        <p className="text-xs text-muted-foreground">Individual date selection with full constraint validation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Date Range Selection</h4>
                        <p className="text-xs text-muted-foreground">Start/end date ranges with validation and business rules</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Smart Date Clearing</h4>
                        <p className="text-xs text-muted-foreground">Remove selections with single method call</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation & View Modes */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 group-hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">🧭</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Multi-View Navigation</h3>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Seamless navigation across multiple calendar view modes with intuitive transitions and intelligent state management.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Day View</h4>
                        <p className="text-xs text-muted-foreground">Traditional calendar grid with month navigation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mt-2"></span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Month View</h4>
                        <p className="text-xs text-muted-foreground">12-month grid for quick month selection</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-rose-500 rounded-full mt-2"></span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Year View</h4>
                        <p className="text-xs text-muted-foreground">Decade ranges for efficient year navigation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Internationalization */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 group-hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">🌍</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Global Localization</h3>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Comprehensive internationalization support with BCP 47 language tags and dynamic locale switching for global applications.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Localized Names</h4>
                        <p className="text-xs text-muted-foreground">Month and weekday names in user's language</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Regional Formatting</h4>
                        <p className="text-xs text-muted-foreground">Date formatting according to locale conventions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Date Validation & Constraints */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 group-hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">✅</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Business Rule Validation</h3>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Powerful validation engine with customizable constraints for enforcing business rules and date restrictions.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Min/Max Ranges</h4>
                        <p className="text-xs text-muted-foreground">Set minimum and maximum selectable dates</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Disabled Dates</h4>
                        <p className="text-xs text-muted-foreground">Block specific dates and weekdays</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Framework Integration */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 group-hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">🔧</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Universal Integration</h3>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Framework-agnostic architecture enabling seamless integration with any modern framework or vanilla JavaScript.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-violet-500 rounded-full mt-2"></span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Framework Agnostic</h4>
                        <p className="text-xs text-muted-foreground">React, Vue, Angular, Svelte compatibility</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Zero Dependencies</h4>
                        <p className="text-xs text-muted-foreground">No framework or build tool requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">TypeScript Ready</h4>
                        <p className="text-xs text-muted-foreground">Full type definitions and IntelliSense</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accessibility & Performance */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 group-hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">♿</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Accessibility & Performance</h3>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    WCAG 2.1 compliant implementation with optimized performance and comprehensive accessibility features.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2"></span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Keyboard Navigation</h4>
                        <p className="text-xs text-muted-foreground">Complete keyboard control and shortcuts</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Screen Reader Support</h4>
                        <p className="text-xs text-muted-foreground">ARIA attributes and optimized announcements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Optimized Performance</h4>
                        <p className="text-xs text-muted-foreground">Efficient rendering and memory management</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Features Showcase */}
            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 mb-4">
                  <span className="text-lg">⚡</span>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Advanced Capabilities</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Enterprise-Grade Features</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Calendar Controller provides sophisticated functionality designed for mission-critical applications with enterprise requirements.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {/* Left Column - Technical Features */}
                <div className="space-y-6">
                  <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs">⚙️</span>
                      </span>
                      Service-Oriented Architecture
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Eleven specialized services handle distinct calendar functionality through dependency injection patterns, ensuring modularity, testability, and maintainability.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">CalendarService</div>
                      <div className="bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded">DateSelectionService</div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded">ValidationService</div>
                      <div className="bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">NavigationService</div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs">🔄</span>
                      </span>
                      Reactive Binding System
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Sophisticated reactive system through Uplink Protocol with automatic UI synchronization, memory leak prevention, and event-driven architecture.
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>Observable data streams (calendarDays, calendarMonths, calendarYears)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Automatic subscription cleanup and memory management</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Integration Features */}
                <div className="space-y-6">
                  <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs">🌐</span>
                      </span>
                      Production-Ready Integration
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Framework-agnostic design with TypeScript definitions, CDN distribution, and zero build dependencies for rapid deployment.
                    </p>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>React, Vue, Angular, Svelte compatibility</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span>TypeScript definitions with full IntelliSense</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs">📊</span>
                      </span>
                      Enterprise Event System
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Comprehensive event emission system with observer patterns enabling loose coupling and reactive user interfaces.
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>Date Selected Events with validation context</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span>Navigation Events for state synchronization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                        <span>Range Selection Events with start/end data</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Demo Section */}
          <div id="live-demo" className="space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full border border-emerald-200 dark:border-emerald-800">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Live Interactive Demo</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Experience Calendar Controller
              </h2>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Interact with our production-ready DatePicker component showcasing enterprise features including internationalization, date constraints, and accessibility compliance.
              </p>
            </div>

            {/* Live Demo Container */}
            <div className="bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 dark:from-slate-900 dark:via-emerald-900/20 dark:to-teal-900/20 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-2 items-start">
                {/* Demo Component */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 group-hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                        <span className="text-white text-xl">📅</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Production DatePicker</h3>
                        <p className="text-sm text-muted-foreground">French-Canadian Localization</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <label htmlFor="demo-date-picker" className="block text-sm font-semibold text-slate-900 dark:text-slate-100">
                          Select a date (June-July 2025, weekdays only):
                        </label>
                        <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                          <NextJSDatePicker />
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Demo Configuration</h4>
                        <div className="grid grid-cols-1 gap-2 text-xs text-emerald-700 dark:text-emerald-400">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                            <span>Locale: French-Canadian (fr-CA)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                            <span>Disabled: Weekends (Saturday & Sunday)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                            <span>Date Range: June 1, 2025 - July 31, 2025</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Highlights */}
                <div className="space-y-6">
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs">🌍</span>
                      </span>
                      Internationalization Features
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      This demo showcases French-Canadian localization with proper month names, date formatting, and cultural conventions.
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>BCP 47 language tag support (fr-CA)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Localized month and weekday names</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>Regional date formatting conventions</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs">🚫</span>
                      </span>
                      Business Rule Validation
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Demonstrates advanced constraint system with weekend blocking and date range restrictions.
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>Weekend exclusion (Saturdays & Sundays)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span>Min/Max date range enforcement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                        <span>Real-time validation feedback</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs">♿</span>
                      </span>
                      Accessibility Compliance
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      WCAG 2.1 AA compliant with comprehensive keyboard navigation and screen reader support.
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Full keyboard navigation support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span>ARIA attributes and announcements</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                        <span>High contrast and focus indicators</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Try It Yourself Section */}
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="text-center space-y-4">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    🚀 Try the Interactive Features
                  </h4>
                  <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                    Click on the calendar to experience smooth animations, try keyboard navigation with Tab/Arrow keys, 
                    and notice how weekend dates are automatically disabled. The component responds to your system's 
                    accessibility preferences and provides full screen reader support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Share */}
          <SocialShareContainer
            title="Calendar Controller - Production JavaScript Library"
            description="Calendar Controller - Enterprise-grade JavaScript library for calendar functionality. Web component architecture, accessibility-compliant, framework-agnostic."
          />
        </section>
      </div>
    </>
  )
}
