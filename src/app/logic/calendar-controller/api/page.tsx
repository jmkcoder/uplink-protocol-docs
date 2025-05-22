'use client'

import React, { useEffect, useState } from 'react'
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { SEO } from '@/components/seo'
import { SocialShareContainer } from "@/components/social-share-container"
import { DocsPageLayout } from "@/components/docs/docs-page-layout"
import { event as trackEvent } from "@/lib/analytics"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
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
      />
      
      <DocsPageLayout>
        {/* Header & Navigation */}
        <div className="space-y-2 mb-6 sm:mb-8">
          <Badge variant="outline">Logic</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Calendar Controller API</h1>          
          <p className="text-muted-foreground text-base sm:text-lg">
            Complete API reference for the Calendar Controller component.
          </p>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 border-b border-border">
            <Link href="/logic/calendar-controller/overview" className="text-muted-foreground hover:text-foreground pb-2 text-sm sm:text-base">Overview</Link>
            <Link href="/logic/calendar-controller/api" className="font-medium text-primary border-b-2 border-primary pb-2 text-sm sm:text-base">API</Link>
            <Link href="/logic/calendar-controller/examples" className="text-muted-foreground hover:text-foreground pb-2 text-sm sm:text-base">Examples</Link>
          </div>
        </div>
          
          {/* Main Content */}
          <section className="space-y-12">
            {/* API Quick Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <a href="#constructor" className="no-underline">
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardHeader className="flex flex-row items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base">Constructor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Initialize a Calendar Controller instance</p>
                  </CardContent>
                </Card>
              </a>
              
              <a href="#configuration-options" className="no-underline">
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardHeader className="flex flex-row items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base">Configuration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Configure controller behavior</p>
                  </CardContent>
                </Card>
              </a>
              
              <a href="#state-properties" className="no-underline">
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardHeader className="flex flex-row items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base">State Properties</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Access controller state values</p>
                  </CardContent>
                </Card>
              </a>
              
              <a href="#methods" className="no-underline">
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardHeader className="flex flex-row items-center gap-2">
                    <Wrench className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base">Methods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">API methods for controlling calendar</p>
                  </CardContent>
                </Card>
              </a>
            </div>

            <div id="constructor" className="pt-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Constructor</h2>
              </div>
              <Card className="overflow-hidden mb-4">
                <CardContent className="p-0">
                  <SyntaxHighlighter
                    code="new CalendarController(config?: CalendarControllerConfig)"
                    language="ts"
                  />
                </CardContent>
              </Card>
              <p className="text-muted-foreground">Creates a new instance of the Calendar Controller with optional configuration.</p>
              
              <div className="mt-6">
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-base mb-2 flex items-center gap-2">
                      <Book className="h-4 w-4" /> Example Usage
                    </h3>
                    <SyntaxHighlighter
                      code={`// Create with default configuration
const calendar = new CalendarController();

// Create with custom configuration
const calendar = new CalendarController({
  firstDayOfWeek: 1, // Monday
  locale: 'fr-FR',
  minDate: new Date(2025, 0, 1)
});`}
                      language="ts"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>

            <div id="configuration-options" className="pt-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Configuration Options</h2>
              </div>
              
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="p-3 text-left font-medium">Option</th>
                          <th className="p-3 text-left font-medium">Type</th>
                          <th className="p-3 text-left font-medium">Default</th>
                          <th className="p-3 text-left font-medium">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="p-3"><code>firstDayOfWeek</code></td>
                          <td className="p-3"><code>number</code></td>
                          <td className="p-3">0 (Sunday)</td>
                          <td className="p-3">The first day of the week (0 = Sunday, 1 = Monday, etc.)</td>
                        </tr>
                        <tr>
                          <td className="p-3"><code>hideOtherMonthDays</code></td>
                          <td className="p-3"><code>boolean</code></td>
                          <td className="p-3">false</td>
                          <td className="p-3">Whether to hide days from previous/next months</td>
                        </tr>
                        <tr>
                          <td className="p-3"><code>minDate</code></td>
                          <td className="p-3"><code>Date | null</code></td>
                          <td className="p-3">null</td>
                          <td className="p-3">Minimum selectable date</td>
                        </tr>
                        <tr>
                          <td className="p-3"><code>maxDate</code></td>
                          <td className="p-3"><code>Date | null</code></td>
                          <td className="p-3">null</td>
                          <td className="p-3">Maximum selectable date</td>
                        </tr>
                        <tr>
                          <td className="p-3"><code>locale</code></td>
                          <td className="p-3"><code>string</code></td>
                          <td className="p-3">'en-US'</td>
                          <td className="p-3">Locale for date formatting and internationalization</td>
                        </tr>
                        <tr>
                          <td className="p-3"><code>yearRangeSize</code></td>
                          <td className="p-3"><code>number</code></td>
                          <td className="p-3">12</td>
                          <td className="p-3">Number of years to display in year view</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div id="state-properties" className="pt-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">State Properties</h2>
              </div>
              
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="p-3 text-left font-medium">Property</th>
                          <th className="p-3 text-left font-medium">Type</th>
                          <th className="p-3 text-left font-medium">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="p-3"><code>currentMonth</code></td>
                          <td className="p-3"><code>number</code></td>
                          <td className="p-3">Current month (0-11)</td>
                        </tr>
                        <tr>
                          <td className="p-3"><code>currentYear</code></td>
                          <td className="p-3"><code>number</code></td>
                          <td className="p-3">Current year</td>
                        </tr>
                        <tr>
                          <td className="p-3"><code>currentMonthName</code></td>
                          <td className="p-3"><code>string</code></td>
                          <td className="p-3">Name of the current month in the selected locale</td>
                        </tr>
                        <tr>
                          <td className="p-3"><code>selectedDate</code></td>
                          <td className="p-3"><code>Date | null</code></td>
                          <td className="p-3">Currently selected date</td>
                        </tr>
                        <tr>
                          <td className="p-3"><code>weekdayNames</code></td>
                          <td className="p-3"><code>string[]</code></td>
                          <td className="p-3">Array of weekday names in the selected locale</td>
                        </tr>
                        <tr>
                          <td className="p-3"><code>daysInMonth</code></td>
                          <td className="p-3"><code>CalendarDay[]</code></td>
                          <td className="p-3">Array of day objects for the current month view</td>
                        </tr>
                        <tr>
                          <td className="p-3"><code>viewMode</code></td>
                          <td className="p-3"><code>'day' | 'month' | 'year'</code></td>
                          <td className="p-3">Current view mode of the calendar</td>
                        </tr>
                        <tr>
                          <td className="p-3"><code>isRangeMode</code></td>
                          <td className="p-3"><code>boolean</code></td>
                          <td className="p-3">Whether range selection mode is active</td>
                        </tr>
                        <tr>
                          <td className="p-3"><code>selectedRange</code></td>
                          <td className="p-3"><code>{`{ start: Date | null, end: Date | null }`}</code></td>
                          <td className="p-3">Currently selected date range</td>
                        </tr>
                        <tr>
                          <td className="p-3"><code>locale</code></td>
                          <td className="p-3"><code>string</code></td>
                          <td className="p-3">Current locale for internationalization</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-base mb-2 flex items-center gap-2">
                    <Book className="h-4 w-4" /> Accessing State Example
                  </h3>
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
                </CardContent>
              </Card>
            </div>

            <div id="methods" className="pt-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Methods</h2>
              </div>
              
              <Tabs defaultValue="navigation" className="w-full">
                <TabsList className="mb-6 w-full md:w-auto flex flex-wrap justify-start">
                  <TabsTrigger value="navigation" className="flex items-center gap-1">
                    <Navigation2 className="h-4 w-4" /> Navigation
                  </TabsTrigger>
                  <TabsTrigger value="selection" className="flex items-center gap-1">
                    <MousePointer className="h-4 w-4" /> Selection
                  </TabsTrigger>
                  <TabsTrigger value="configuration" className="flex items-center gap-1">
                    <Settings className="h-4 w-4" /> Configuration
                  </TabsTrigger>
                  <TabsTrigger value="utilities" className="flex items-center gap-1">
                    <Wrench className="h-4 w-4" /> Utilities
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="navigation" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">Navigation Methods</CardTitle>
                      <CardDescription>Control the calendar's navigation between months, years, and view modes</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-4">
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="nextMonth(): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Navigates to the next month</p>
                        </li>
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="previousMonth(): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Navigates to the previous month</p>
                        </li>
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="goToMonth(month: number, year: number): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Navigates to a specific month and year</p>
                        </li>
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="nextYear(): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Navigates to the next year</p>
                        </li>
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="previousYear(): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Navigates to the previous year</p>
                        </li>
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="goToToday(): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Navigates to the current date</p>
                        </li>
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="setViewMode(mode: 'day' | 'month' | 'year'): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Sets the view mode of the calendar</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="selection" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">Selection Methods</CardTitle>
                      <CardDescription>Methods for managing date and range selection</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-4">
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="selectDate(date: Date): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Selects a specific date</p>
                        </li>
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="clearSelection(): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Clears the current date selection</p>
                        </li>
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="selectRange(start: Date, end: Date): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Selects a date range with start and end dates</p>
                        </li>
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="enableRangeSelection(): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Enables range selection mode</p>
                        </li>
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="disableRangeSelection(): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Disables range selection mode</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="configuration" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">Configuration Methods</CardTitle>
                      <CardDescription>Configure calendar settings after initialization</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-4">
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="setLocale(locale: string): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Sets the locale for internationalization</p>
                        </li>
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="setFirstDayOfWeek(day: number): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Sets the first day of the week (0 = Sunday, 1 = Monday, etc.)</p>
                        </li>
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="setMinDate(date: Date | null): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Sets the minimum selectable date</p>
                        </li>
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="setMaxDate(date: Date | null): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Sets the maximum selectable date</p>
                        </li>
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="setYearRangeSize(size: number): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Sets the number of years to display in year view</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="utilities" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">Utility Methods</CardTitle>
                      <CardDescription>Helper methods for calendar operations</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-4">
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="generateCalendarDays(): CalendarDay[]"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Generates the calendar days for the current month</p>
                        </li>
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="isDateDisabled(date: Date): boolean"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Checks if a date is disabled based on min/max dates and validators</p>
                        </li>
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="addDisabledDate(date: Date): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Adds a specific date to the disabled dates list</p>
                        </li>
                        <li className="bg-muted p-4 rounded-md">
                          <Card>
                            <CardContent className="p-0 rounded-xl overflow-hidden">
                              <SyntaxHighlighter
                                code="addDateValidator(validator: (date: Date) => boolean): void"
                                language="ts"
                              />
                            </CardContent>
                          </Card>
                          <p className="mt-2 text-muted-foreground">Adds a custom date validator function</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div id="events" className="pt-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Events</h2>
              </div>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-primary">Event Subscription</CardTitle>
                  <CardDescription>Subscribe to calendar events with callback functions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-4">
                    <li className="bg-muted p-4 rounded-md">
                      <Card>
                        <CardContent className="p-0 rounded-xl overflow-hidden">
                          <SyntaxHighlighter
                            code="onDateSelected(callback: (date: Date) => void): () => void"
                            language="ts"
                          />
                        </CardContent>
                      </Card>
                      <p className="mt-2 text-muted-foreground">Triggered when a date is selected</p>
                    </li>
                    
                    <li className="bg-muted p-4 rounded-md">
                      <Card>
                        <CardContent className="p-0 rounded-xl overflow-hidden">
                          <SyntaxHighlighter
                            code={`onRangeSelected(callback: (range: {start: Date, end: Date}) => void): () => void`}
                            language="ts"
                          />
                        </CardContent>
                      </Card>
                      <p className="mt-2 text-muted-foreground">Triggered when a date range is selected</p>
                    </li>
                    
                    <li className="bg-muted p-4 rounded-md">
                      <Card>
                        <CardContent className="p-0 rounded-xl overflow-hidden">
                          <SyntaxHighlighter
                            code="onMonthChanged(callback: (month: number, year: number) => void): () => void"
                            language="ts"
                          />
                        </CardContent>
                      </Card>
                      <p className="mt-2 text-muted-foreground">Triggered when the month changes</p>
                    </li>
                    
                    <li className="bg-muted p-4 rounded-md">
                      <Card>
                        <CardContent className="p-0 rounded-xl overflow-hidden">
                          <SyntaxHighlighter
                            code="onYearChanged(callback: (year: number) => void): () => void"
                            language="ts"
                          />
                        </CardContent>
                      </Card>
                      <p className="mt-2 text-muted-foreground">Triggered when the year changes</p>
                    </li>
                    
                    <li className="bg-muted p-4 rounded-md">
                      <Card>
                        <CardContent className="p-0 rounded-xl overflow-hidden">
                          <SyntaxHighlighter
                            code="onViewModeChanged(callback: (mode: 'day' | 'month' | 'year') => void): () => void"
                            language="ts"
                          />
                        </CardContent>
                      </Card>
                      <p className="mt-2 text-muted-foreground">Triggered when the view mode changes</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-base mb-2 flex items-center gap-2">
                    <Book className="h-4 w-4" /> Event Handling Example
                  </h3>
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
                </CardContent>
              </Card>
            </div>

            <div id="services" className="pt-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Coffee className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Services</h2>
              </div>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-primary">Internal Services</CardTitle>
                  <CardDescription>Access specialized services for advanced calendar operations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-4">
                    <li className="bg-muted p-4 rounded-md">
                      <Card>
                        <CardContent className="p-0 rounded-xl overflow-hidden">
                          <SyntaxHighlighter
                            code="getDateSelectionService(): DateSelectionService"
                            language="ts"
                          />
                        </CardContent>
                      </Card>
                      <p className="mt-2 text-muted-foreground">Gets the date selection service</p>
                    </li>
                    <li className="bg-muted p-4 rounded-md">
                      <Card>
                        <CardContent className="p-0 rounded-xl overflow-hidden">
                          <SyntaxHighlighter
                            code="getNavigationService(): NavigationService"
                            language="ts"
                          />
                        </CardContent>
                      </Card>
                      <p className="mt-2 text-muted-foreground">Gets the navigation service</p>
                    </li>
                    <li className="bg-muted p-4 rounded-md">
                      <Card>
                        <CardContent className="p-0 rounded-xl overflow-hidden">
                          <SyntaxHighlighter
                            code="getDateValidationService(): DateValidationService"
                            language="ts"
                          />
                        </CardContent>
                      </Card>
                      <p className="mt-2 text-muted-foreground">Gets the date validation service</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-base mb-2 flex items-center gap-2">
                    <Book className="h-4 w-4" /> Service Usage Example
                  </h3>
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
                </CardContent>
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
