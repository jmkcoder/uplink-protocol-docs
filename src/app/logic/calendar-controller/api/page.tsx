'use client'

import React, { useEffect, useState } from 'react'
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { SEO } from '@/components/seo'
import { SocialShareContainer } from "@/components/social-share-container"
import { DocsPageLayout } from "@/components/docs/docs-page-layout"
import { event as trackEvent } from "@/lib/analytics"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, Code, Settings, Calendar, Wrench, Navigation2, MousePointer, Bell, Coffee } from "lucide-react"

export default function CalendarControllerApiPage() {
  // Track page view for analytics
  useEffect(() => {
    trackEvent({
      action: 'page_view',
      category: 'Documentation',
      label: 'Calendar Controller API'
    });
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeSection, setActiveSection] = useState('constructor');

  // Handle intersection observer for scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-100px 0px -80% 0px" }
    );

    const sections = document.querySelectorAll('div[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <SEO
        title="Calendar Controller API | Uplink Protocol"
        description="Complete API reference for the Calendar Controller component, including all methods, properties, and configurations."
      />      <DocsPageLayout>        {/* Header & Navigation */}
        <header className="mb-4 sm:mb-6 md:mb-8">
          <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5 max-w-full">
            <Badge variant="outline" className="mb-0.5 sm:mb-1">Logic</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight break-words">Calendar Controller API</h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              Complete API reference for the Calendar Controller component.
            </p>
          </div>

          <nav className="mt-3 sm:mt-4 md:mt-5 border-b border-border overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 sm:gap-3 md:gap-4 pb-1 min-w-max">
              <Link href="/logic/calendar-controller/overview" className="text-muted-foreground hover:text-foreground pb-2 text-xs sm:text-sm md:text-base whitespace-nowrap">
                Overview
              </Link>
              <Link href="/logic/calendar-controller/api" className="font-medium text-primary border-b-2 border-primary pb-2 text-xs sm:text-sm md:text-base whitespace-nowrap">
                API
              </Link>
              <Link href="/logic/calendar-controller/examples" className="text-muted-foreground hover:text-foreground pb-2 text-xs sm:text-sm md:text-base whitespace-nowrap">
                Examples
              </Link>
            </div>
          </nav>
        </header>        {/* Main Content */}
        <section className="space-y-8 sm:space-y-12 overflow-hidden">
          {/* API Quick Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            <a href="#constructor" className="no-underline">
              <Card className="h-full hover:border-primary/50 transition-colors">
                <CardHeader className="flex flex-row items-center gap-1.5 sm:gap-2 p-2 sm:p-3 md:p-4">
                  <Code className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary shrink-0" />
                  <CardTitle className="text-xs sm:text-sm md:text-base">Constructor</CardTitle>
                </CardHeader>
                <div className="px-2 sm:px-3 md:px-4 pb-2 sm:pb-3 md:pb-4">
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">Initialize a Calendar Controller instance</p>
                </div>
              </Card>
            </a>            <a href="#configuration-options" className="no-underline">
              <Card className="h-full hover:border-primary/50 transition-colors">
                <CardHeader className="flex flex-row items-center gap-1.5 sm:gap-2 p-2 sm:p-3 md:p-4">
                  <Settings className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary shrink-0" />
                  <CardTitle className="text-xs sm:text-sm md:text-base">Configuration</CardTitle>
                </CardHeader>
                <div className="px-2 sm:px-3 md:px-4 pb-2 sm:pb-3 md:pb-4">
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">Configure controller behavior</p>
                </div>
              </Card>
            </a>

            <a href="#state-properties" className="no-underline">
              <Card className="h-full hover:border-primary/50 transition-colors">
                <CardHeader className="flex flex-row items-center gap-1.5 sm:gap-2 p-2 sm:p-3 md:p-4">
                  <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary shrink-0" />                  <CardTitle className="text-xs sm:text-sm md:text-base">State Properties</CardTitle>
                </CardHeader>
                <div className="px-2 sm:px-3 md:px-4 pb-2 sm:pb-3 md:pb-4">
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">Access controller state values</p>
                </div>
              </Card>
            </a>
            <a href="#methods" className="no-underline">
              <Card className="h-full hover:border-primary/50 transition-colors">
                <CardHeader className="flex flex-row items-center gap-1.5 sm:gap-2 p-2 sm:p-3 md:p-4">
                  <Wrench className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary shrink-0" />
                  <CardTitle className="text-xs sm:text-sm md:text-base">Methods</CardTitle>
                </CardHeader>
                <div className="px-2 sm:px-3 md:px-4 pb-2 sm:pb-3 md:pb-4">
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">API methods for controlling calendar</p>
                </div>
              </Card>
            </a>
          </div>
          <div id="constructor" className="scroll-mt-16 pt-6">
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Code className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight break-words">Constructor</h2>
            </div>
            <Card className="overflow-hidden mb-3 sm:mb-4">
              <div className="p-0 overflow-x-auto scrollbar-thin">
                <SyntaxHighlighter
                  code="new CalendarController(config?: CalendarControllerConfig)"
                  language="ts"
                />
              </div>
            </Card>
            <p className="text-muted-foreground text-xs sm:text-sm">Creates a new instance of the Calendar Controller with optional configuration.</p>
            <div className="mt-3 sm:mt-4 md:mt-6">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-2 sm:p-3 md:p-4 lg:p-6 overflow-hidden">
                  <h3 className="font-semibold text-xs sm:text-sm md:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                    <Book className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" /> Example Usage
                  </h3>
                  <div className="overflow-hidden rounded-md">
                    <div className="overflow-x-auto scrollbar-thin">
                      <SyntaxHighlighter
                        code={`// Create with default configuration
const calendar = CalendarController();

// Create with custom configuration
const calendar = new CalendarController({
  firstDayOfWeek: 1, // Monday
  locale: 'fr-FR',
  minDate: new Date(2025, 0, 1)
});`}
                        language="ts"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div id="configuration-options" className="pt-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Configuration Options</h2>
            </div>
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-3 text-left font-medium text-sm">Option</th>
                    <th className="p-3 text-left font-medium text-sm">Type</th>
                    <th className="p-3 text-left font-medium text-sm">Default</th>
                    <th className="p-3 text-left font-medium text-sm">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-3"><code className="text-sm">firstDayOfWeek</code></td>
                    <td className="p-3"><code className="text-sm">number</code></td>
                    <td className="p-3 text-sm">0 (Sunday)</td>
                    <td className="p-3 text-sm">The first day of the week (0 = Sunday, 1 = Monday, etc.)</td>
                  </tr>
                  <tr>
                    <td className="p-3"><code className="text-sm">hideOtherMonthDays</code></td>
                    <td className="p-3"><code className="text-sm">boolean</code></td>
                    <td className="p-3 text-sm">false</td>
                    <td className="p-3 text-sm">Whether to hide days from previous/next months</td>
                  </tr>
                  <tr>
                    <td className="p-3"><code className="text-sm">minDate</code></td>
                    <td className="p-3"><code className="text-sm">Date | null</code></td>
                    <td className="p-3 text-sm">null</td>
                    <td className="p-3 text-sm">Minimum selectable date</td>
                  </tr>
                  <tr>
                    <td className="p-3"><code className="text-sm">maxDate</code></td>
                    <td className="p-3"><code className="text-sm">Date | null</code></td>
                    <td className="p-3 text-sm">null</td>
                    <td className="p-3 text-sm">Maximum selectable date</td>
                  </tr>
                  <tr>
                    <td className="p-3"><code className="text-sm">locale</code></td>
                    <td className="p-3"><code className="text-sm">string</code></td>
                    <td className="p-3 text-sm">'en-US'</td>
                    <td className="p-3 text-sm">Locale for date formatting and internationalization</td>
                  </tr>
                  <tr>
                    <td className="p-3"><code className="text-sm">yearRangeSize</code></td>
                    <td className="p-3"><code className="text-sm">number</code></td>
                    <td className="p-3 text-sm">12</td>
                    <td className="p-3 text-sm">Number of years to display in year view</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Mobile/Tablet Scrollable Table */}
            <div className="block lg:hidden overflow-x-auto pb-2 w-full">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-2 sm:p-3 text-left font-medium text-xs sm:text-sm">Option</th>
                    <th className="p-2 sm:p-3 text-left font-medium text-xs sm:text-sm">Type</th>
                    <th className="p-2 sm:p-3 text-left font-medium text-xs sm:text-sm">Default</th>
                    <th className="p-2 sm:p-3 text-left font-medium text-xs sm:text-sm">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">firstDayOfWeek</code></td>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">number</code></td>
                    <td className="p-2 sm:p-3 text-xs sm:text-sm">0 (Sunday)</td>
                    <td className="p-2 sm:p-3 text-xs sm:text-sm">The first day of the week (0 = Sunday, 1 = Monday, etc.)</td>
                  </tr>
                  <tr>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">hideOtherMonthDays</code></td>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">boolean</code></td>
                    <td className="p-2 sm:p-3 text-xs sm:text-sm">false</td>
                    <td className="p-2 sm:p-3 text-xs sm:text-sm">Whether to hide days from previous/next months</td>
                  </tr>
                  <tr>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">minDate</code></td>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">Date | null</code></td>
                    <td className="p-2 sm:p-3 text-xs sm:text-sm">null</td>
                    <td className="p-2 sm:p-3 text-xs sm:text-sm">Minimum selectable date</td>
                  </tr>
                  <tr>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">maxDate</code></td>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">Date | null</code></td>
                    <td className="p-2 sm:p-3 text-xs sm:text-sm">null</td>
                    <td className="p-2 sm:p-3 text-xs sm:text-sm">Maximum selectable date</td>
                  </tr>
                  <tr>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">locale</code></td>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">string</code></td>
                    <td className="p-2 sm:p-3 text-xs sm:text-sm">'en-US'</td>
                    <td className="p-2 sm:p-3 text-xs sm:text-sm">Locale for date formatting and internationalization</td>
                  </tr>
                  <tr>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">yearRangeSize</code></td>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">number</code></td>
                    <td className="p-2 sm:p-3 text-xs sm:text-sm">12</td>
                    <td className="p-2 sm:p-3 text-xs sm:text-sm">Number of years to display in year view</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="state-properties" className="pt-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">State Properties</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-2 sm:p-3 text-left font-medium text-sm">Property</th>
                    <th className="p-2 sm:p-3 text-left font-medium text-sm">Type</th>
                    <th className="p-2 sm:p-3 text-left font-medium text-sm">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">currentMonth</code></td>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">number</code></td>
                    <td className="p-2 sm:p-3 text-sm">Current month (0-11)</td>
                  </tr>
                  <tr>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">currentYear</code></td>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">number</code></td>
                    <td className="p-2 sm:p-3 text-sm">Current year</td>
                  </tr>
                  <tr>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">currentMonthName</code></td>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">string</code></td>
                    <td className="p-2 sm:p-3 text-sm">Name of the current month in the selected locale</td>
                  </tr>
                  <tr>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">selectedDate</code></td>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">Date | null</code></td>
                    <td className="p-2 sm:p-3 text-sm">Currently selected date</td>
                  </tr>
                  <tr>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">weekdayNames</code></td>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">string[]</code></td>
                    <td className="p-2 sm:p-3 text-sm">Array of weekday names in the selected locale</td>
                  </tr>
                  <tr>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">daysInMonth</code></td>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">CalendarDay[]</code></td>
                    <td className="p-2 sm:p-3 text-sm">Array of day objects for the current month view</td>
                  </tr>
                  <tr>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">viewMode</code></td>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">'day' | 'month' | 'year'</code></td>
                    <td className="p-2 sm:p-3 text-sm">Current view mode of the calendar</td>
                  </tr>
                  <tr>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">isRangeMode</code></td>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">boolean</code></td>
                    <td className="p-2 sm:p-3 text-sm">Whether range selection mode is active</td>
                  </tr>
                  <tr>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">selectedRange</code></td>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">{`{ start: Date | null, end: Date | null }`}</code></td>
                    <td className="p-2 sm:p-3 text-sm">Currently selected date range</td>
                  </tr>
                  <tr>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">locale</code></td>
                    <td className="p-2 sm:p-3"><code className="text-xs sm:text-sm">string</code></td>
                    <td className="p-2 sm:p-3 text-sm">Current locale for internationalization</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Card className="border-primary/20 bg-primary/5 mt-2">
              <div className="p-3 sm:p-4 md:p-6">                <h3 className="font-semibold text-sm sm:text-base mb-2 flex items-center gap-2">
                <Book className="h-3 w-3 sm:h-4 sm:w-4" /> Accessing State Example
              </h3>
                <div className="overflow-hidden rounded-md">
                  <div className="overflow-x-auto px-2">
                    <SyntaxHighlighter
                      code={`// Get current state values
const month = calendar.currentMonth;  // 0-11
const year = calendar.currentYear;
const monthName = calendar.currentMonthName;

// Check selected dates
if (calendar.selectedDate) {
  console.log(\`Selected date: \${calendar.selectedDate.toLocaleDateString()}\`);
}

// Work with calendar days
const days = calendar.daysInMonth;
const today = days.find(day => day.isToday);`}
                      language="ts"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div id="methods" className="pt-4 sm:pt-6">
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Wrench className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">Methods</h2>
            </div>
            <Tabs defaultValue="navigation" className="w-full">
              <div className="overflow-x-auto pb-1">
                <TabsList className="mb-4 sm:mb-6 w-max min-w-full md:w-auto flex justify-start">
                  <TabsTrigger value="navigation" className="flex items-center gap-1 text-xs sm:text-sm">
                    <Navigation2 className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Navigation</span>
                    <span className="sm:hidden">Nav</span>
                  </TabsTrigger>
                  <TabsTrigger value="selection" className="flex items-center gap-1 text-xs sm:text-sm">
                    <MousePointer className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Selection</span>
                    <span className="sm:hidden">Select</span>
                  </TabsTrigger>
                  <TabsTrigger value="configuration" className="flex items-center gap-1 text-xs sm:text-sm">
                    <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Configuration</span>
                    <span className="sm:hidden">Config</span>
                  </TabsTrigger>
                  <TabsTrigger value="utilities" className="flex items-center gap-1 text-xs sm:text-sm">
                    <Wrench className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Utilities</span>
                    <span className="sm:hidden">Utils</span>
                  </TabsTrigger>
                </TabsList>
              </div>                  <TabsContent value="navigation" className="space-y-3 sm:space-y-4">
                <Card>
                  <CardHeader className="p-3 sm:p-4 md:p-6">
                    <CardTitle className="text-sm sm:text-base md:text-lg lg:text-xl text-primary">Navigation Methods</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">Control the calendar's navigation between months, years, and view modes</CardDescription>
                  </CardHeader>
                  <div className="p-3 sm:p-4 md:p-6 pt-0">
                    <div className="space-y-2 sm:space-y-3 md:space-y-4">                        <div className="bg-muted/60 p-2 sm:p-3 md:p-4 rounded-md">
                      <Card className="overflow-hidden">
                        <div className="overflow-x-auto">
                          <SyntaxHighlighter
                            code="nextMonth(): void"
                            language="ts"
                          />
                        </div>
                      </Card>
                      <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs md:text-sm text-muted-foreground">Navigates to the next month</p>
                    </div>
                      <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="previousMonth(): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Navigates to the previous month</p>
                      </div>
                      <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="goToMonth(month: number, year: number): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Navigates to a specific month and year</p>
                      </div>
                      <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="nextYear(): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Navigates to the next year</p>
                      </div>
                      <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="previousYear(): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Navigates to the previous year</p>
                      </div>
                      <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="goToToday(): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Navigates to the current date</p>
                      </div>
                      <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="setViewMode(mode: 'day' | 'month' | 'year'): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Sets the view mode of the calendar</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="selection" className="space-y-4">
                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-base sm:text-lg md:text-xl text-primary">Selection Methods</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">Methods for managing date and range selection</CardDescription>
                  </CardHeader>
                  <div className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="selectDate(date: Date): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Selects a specific date</p>
                      </div>
                      <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="clearSelection(): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Clears the current date selection</p>
                      </div>                        <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="selectRange(start: Date, end: Date): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Selects a date range with start and end dates</p>
                      </div>
                      <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="enableRangeSelection(): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Enables range selection mode</p>
                      </div>
                      <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="disableRangeSelection(): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Disables range selection mode</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="configuration" className="space-y-4">
                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-base sm:text-lg md:text-xl text-primary">Configuration Methods</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">Configure calendar settings after initialization</CardDescription>
                  </CardHeader>
                  <div className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="setLocale(locale: string): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Sets the locale for internationalization</p>
                      </div>                        <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="setFirstDayOfWeek(day: number): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Sets the first day of the week (0 = Sunday, 1 = Monday, etc.)</p>
                      </div>
                      <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="setMinDate(date: Date | null): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Sets the minimum selectable date</p>
                      </div>
                      <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="setMaxDate(date: Date | null): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Sets the maximum selectable date</p>
                      </div>
                      <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="setYearRangeSize(size: number): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Sets the number of years to display in year view</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>                  <TabsContent value="utilities" className="space-y-4">
                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-base sm:text-lg md:text-xl text-primary">Utility Methods</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">Helper methods for calendar operations</CardDescription>
                  </CardHeader>
                  <div className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="generateCalendarDays(): CalendarDay[]"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Generates the calendar days for the current month</p>
                      </div>
                      <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="isDateDisabled(date: Date): boolean"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Checks if a date is disabled based on min/max dates and validators</p>
                      </div>
                      <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="addDisabledDate(date: Date): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Adds a specific date to the disabled dates list</p>
                      </div>                        <div className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                        <Card className="overflow-hidden">
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter
                              code="addDateValidator(validator: (date: Date) => boolean): void"
                              language="ts"
                            />
                          </div>
                        </Card>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Adds a custom date validator function</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div id="events" className="pt-4 sm:pt-6">
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Bell className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">Events</h2>
            </div>

            <Card className="mb-4 sm:mb-6">
              <CardHeader className="p-3 sm:p-4 md:p-6">
                <CardTitle className="text-sm sm:text-base md:text-lg lg:text-xl text-primary">Event Subscription</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Subscribe to calendar events with callback functions</CardDescription>
              </CardHeader>
              <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6 pt-0"><ul className="space-y-2 sm:space-y-3 md:space-y-4">
                <li className="bg-muted/60 p-2 sm:p-3 md:p-4 rounded-md">
                  <Card className="overflow-hidden">
                    <div className="overflow-x-auto">
                      <SyntaxHighlighter
                        code="onDateSelected(callback: (date: Date) => void): () => void"
                        language="ts"
                      />
                    </div>
                  </Card>
                  <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs md:text-sm text-muted-foreground">Triggered when a date is selected</p>
                </li>

                <li className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                  <Card className="overflow-hidden">
                    <div className="overflow-x-auto">
                      <SyntaxHighlighter
                        code={`onRangeSelected(callback: (range: {start: Date, end: Date}) => void): () => void`}
                        language="ts"
                      />
                    </div>
                  </Card>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Triggered when a date range is selected</p>
                </li>

                <li className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                  <Card className="overflow-hidden">
                    <div className="overflow-x-auto">
                      <SyntaxHighlighter
                        code="onMonthChanged(callback: (month: number, year: number) => void): () => void"
                        language="ts"
                      />
                    </div>
                  </Card>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Triggered when the month changes</p>
                </li>

                <li className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                  <Card className="overflow-hidden">
                    <div className="overflow-x-auto">
                      <SyntaxHighlighter
                        code="onYearChanged(callback: (year: number) => void): () => void"
                        language="ts"
                      />
                    </div>
                  </Card>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Triggered when the year changes</p>
                </li>

                <li className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                  <Card className="overflow-hidden">
                    <div className="overflow-x-auto">
                      <SyntaxHighlighter
                        code="onViewModeChanged(callback: (mode: 'day' | 'month' | 'year') => void): () => void"
                        language="ts"
                      />
                    </div>
                  </Card>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Triggered when the view mode changes</p>
                </li>
              </ul>
              </div>
            </Card>
            <Card className="border-primary/20 bg-primary/5">
              <div className="p-2 sm:p-3 md:p-6">
                <h3 className="font-semibold text-xs sm:text-sm md:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                  <Book className="h-3 w-3 sm:h-4 sm:w-4" /> Event Handling Example
                </h3>
                <div className="overflow-hidden rounded-md">
                  <div className="overflow-x-auto">
                    <SyntaxHighlighter
                      code={`// Subscribe to date selection events
const unsubscribe = calendar.onDateSelected(date => {
  console.log("Selected date:", date);
  updateUI(date);
});

// Subscribe to month change events
calendar.onMonthChanged((month, year) => {
  console.log(\`Month changed: \${month + 1}/\${year}\`);
});

// Later, unsubscribe when needed
unsubscribe();`}
                      language="ts"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div id="services" className="pt-4 sm:pt-6">
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Coffee className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">Services</h2>
            </div>
            <Card className="mb-4 sm:mb-6">
              <CardHeader className="p-3 sm:p-4 md:p-6">
                <CardTitle className="text-sm sm:text-base md:text-lg lg:text-xl text-primary">Internal Services</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Access specialized services for advanced calendar operations</CardDescription>
              </CardHeader>
              <div>
                <ul className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0 sm:pt-0">
                  <li className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                    <Card className="overflow-hidden">
                      <div className="overflow-x-auto">
                        <SyntaxHighlighter
                          code="getDateSelectionService(): DateSelectionService"
                          language="ts"
                        />
                      </div>
                    </Card>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Gets the date selection service</p>
                  </li>
                  <li className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                    <Card className="overflow-hidden">
                      <div className="overflow-x-auto">
                        <SyntaxHighlighter
                          code="getNavigationService(): NavigationService"
                          language="ts"
                        />
                      </div>
                    </Card>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Gets the navigation service</p>
                  </li>
                  <li className="bg-muted p-2 sm:p-3 md:p-4 rounded-md">
                    <Card className="overflow-hidden">
                      <div className="overflow-x-auto">
                        <SyntaxHighlighter
                          code="getDateValidationService(): DateValidationService"
                          language="ts"
                        />
                      </div>
                    </Card>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Gets the date validation service</p>
                  </li>
                </ul>
              </div>
            </Card>
            <Card className="border-primary/20 bg-primary/5">
              <div className="p-2 sm:p-3 md:p-6">
                <h3 className="font-semibold text-xs sm:text-sm md:text-base mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                  <Book className="h-3 w-3 sm:h-4 sm:w-4" /> Service Usage Example
                </h3>
                <div className="overflow-hidden rounded-md">
                  <div className="overflow-x-auto">
                    <SyntaxHighlighter
                      code={`// Get the date validation service for advanced validation
const validationService = calendar.getDateValidationService();

// Add custom validation rules
validationService.addValidator(date => {
  // Disable weekends
  const day = date.getDay();
  return day !== 0 && day !== 6;
});

// Get navigation service for advanced navigation
const navService = calendar.getNavigationService();
navService.setViewMode('month');`}
                      language="ts"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Social Share */}
          <SocialShareContainer
            title="Calendar Controller API Reference - Uplink Protocol"
            description="Complete API reference for the Calendar Controller component, including methods, properties, and configurations."
          />
        </section>
      </DocsPageLayout>
    </>
  )
}
