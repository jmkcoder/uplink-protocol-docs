'use client'

import React, { useEffect } from 'react'
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { SEO } from '@/components/seo'
import { SocialShareContainer } from "@/components/social-share-container"
import { DocsPageLayout } from "@/components/docs/docs-page-layout"
import { event as trackEvent } from "@/lib/analytics"
import { Card, CardContent } from "@/components/ui/card"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CalendarControllerApiPage() {
  // Track page view for analytics
  useEffect(() => {
    trackEvent({
      action: 'page_view',
      category: 'Documentation',
      label: 'Calendar Controller API'
    });
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
        
        <section className="space-y-12">
          <div id="constructor" className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Constructor</h2>
            <div className="mt-4 mb-6">
              <Card>
                <CardContent className="p-0 rounded-xl overflow-hidden">
                  <SyntaxHighlighter
                    code="new CalendarController(config?: CalendarControllerConfig)"
                    language="typescript"
                  />
                </CardContent>
              </Card>
            </div>
            <p className="text-muted-foreground">Creates a new instance of the Calendar Controller with optional configuration.</p>
          </div>

          <div id="configuration-options" className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Configuration Options</h2>
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
          </div>

          <div id="state-properties" className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-6">State Properties</h2>
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
          </div>

          <div id="methods" className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Methods</h2>
            
            <Tabs defaultValue="navigation" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="navigation">Navigation</TabsTrigger>
                <TabsTrigger value="selection">Selection</TabsTrigger>
                <TabsTrigger value="configuration">Configuration</TabsTrigger>
                <TabsTrigger value="utilities">Utilities</TabsTrigger>
              </TabsList>
              
              <TabsContent value="navigation" className="space-y-4">
                <h3 className="text-xl font-semibold">Navigation Methods</h3>
                <ul className="space-y-4">
                  <li className="bg-muted p-4 rounded-md">
                    <Card>
                      <CardContent className="p-0 rounded-xl overflow-hidden">
                        <SyntaxHighlighter
                          code="nextMonth(): void"
                          language="typescript"
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
                          language="typescript"
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
                          language="typescript"
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
                          language="typescript"
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
                          language="typescript"
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
                          language="typescript"
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
                          language="typescript"
                        />
                      </CardContent>
                    </Card>
                    <p className="mt-2 text-muted-foreground">Sets the view mode of the calendar</p>
                  </li>
                </ul>
              </TabsContent>
              
              <TabsContent value="selection" className="space-y-4">
                <h3 className="text-xl font-semibold">Selection Methods</h3>
                <ul className="space-y-4">
                  <li className="bg-muted p-4 rounded-md">
                    <Card>
                      <CardContent className="p-0 rounded-xl overflow-hidden">
                        <SyntaxHighlighter
                          code="selectDate(date: Date): void"
                          language="typescript"
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
                          language="typescript"
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
                          language="typescript"
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
                          language="typescript"
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
                          language="typescript"
                        />
                      </CardContent>
                    </Card>
                    <p className="mt-2 text-muted-foreground">Disables range selection mode</p>
                  </li>
                </ul>
              </TabsContent>
              
              <TabsContent value="configuration" className="space-y-4">
                <h3 className="text-xl font-semibold">Configuration Methods</h3>
                <ul className="space-y-4">
                  <li className="bg-muted p-4 rounded-md">
                    <Card>
                      <CardContent className="p-0 rounded-xl overflow-hidden">
                        <SyntaxHighlighter
                          code="setLocale(locale: string): void"
                          language="typescript"
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
                          language="typescript"
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
                          language="typescript"
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
                          language="typescript"
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
                          language="typescript"
                        />
                      </CardContent>
                    </Card>
                    <p className="mt-2 text-muted-foreground">Sets the number of years to display in year view</p>
                  </li>
                </ul>
              </TabsContent>
              
              <TabsContent value="utilities" className="space-y-4">
                <h3 className="text-xl font-semibold">Utility Methods</h3>
                <ul className="space-y-4">
                  <li className="bg-muted p-4 rounded-md">
                    <Card>
                      <CardContent className="p-0 rounded-xl overflow-hidden">
                        <SyntaxHighlighter
                          code="generateCalendarDays(): CalendarDay[]"
                          language="typescript"
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
                          language="typescript"
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
                          language="typescript"
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
                          language="typescript"
                        />
                      </CardContent>
                    </Card>
                    <p className="mt-2 text-muted-foreground">Adds a custom date validator function</p>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>

          <div id="events" className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Events</h2>
            
            <ul className="space-y-4">
              <li className="bg-muted p-4 rounded-md">
                <Card>
                  <CardContent className="p-0 rounded-xl overflow-hidden">
                    <SyntaxHighlighter
                      code="onDateSelected(callback: (date: Date) => void): () => void"
                      language="typescript"
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
                      language="typescript"
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
                      language="typescript"
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
                      language="typescript"
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
                      language="typescript"
                    />
                  </CardContent>
                </Card>
                <p className="mt-2 text-muted-foreground">Triggered when the view mode changes</p>
              </li>
            </ul>
          </div>

          <div id="services" className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Services</h2>
            <p className="text-muted-foreground mb-4">Calendar Controller provides access to internal services for advanced usage:</p>
            
            <ul className="space-y-4">
              <li className="bg-muted p-4 rounded-md">
                <Card>
                  <CardContent className="p-0 rounded-xl overflow-hidden">
                    <SyntaxHighlighter
                      code="getDateSelectionService(): DateSelectionService"
                      language="typescript"
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
                      language="typescript"
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
                      language="typescript"
                    />
                  </CardContent>
                </Card>
                <p className="mt-2 text-muted-foreground">Gets the date validation service</p>
              </li>
            </ul>
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
