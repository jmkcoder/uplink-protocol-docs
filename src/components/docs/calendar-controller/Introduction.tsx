'use client'

import { Card, CardContent } from "@/components/ui/card"

export function Introduction() {
  return (
    <div className="space-y-6">      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg">
        <h2 id="introduction" className="text-xl sm:text-2xl font-bold text-blue-700 dark:text-blue-300 mb-3 sm:mb-4">Calendar Controller: Full-Featured Date Management</h2>
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
            v0.2.1 Latest
          </span>
          <span className="text-xs text-muted-foreground">Enhanced stability & new features</span>
        </div>
        <p className="text-base sm:text-lg mb-3 sm:mb-4">
          CalendarControllerClass is a comprehensive date picker controller that provides functionality for date picking and calendar display. Built with a service-oriented architecture, it delegates core functionality to specialized services for maintainable, extensible date management.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground">
          The controller offers multiple view modes (day, month, year), comprehensive date selection options (single, range, multi-date), disabled weekdays support, and full internationalization through a reactive binding system that integrates seamlessly with any frontend framework.
        </p>
      </div>
      
      <p className="text-base sm:text-lg leading-relaxed">
        Calendar Controller separates calendar logic from UI implementation, providing methods for date selection, navigation, and view management while exposing reactive bindings for real-time UI synchronization. This architecture enables developers to implement custom calendar interfaces with minimal boilerplate code.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Service Architecture</h3>
            </div>
            <p className="text-muted-foreground">Specialized services handle calendar operations, date selection, validation, formatting, navigation, and state management for clean separation of concerns.</p>
          </CardContent>
        </Card>        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Disabled Weekdays</h3>
            </div>
            <p className="text-muted-foreground">Disable specific days of the week across all calendar views. Perfect for business applications, appointment scheduling, and custom date restrictions.</p>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Reactive Bindings</h3>
            </div>
            <p className="text-muted-foreground">Subscribe to calendar state changes through reactive bindings for selectedDate, calendarDays, currentMonth, selectedDateRange, and more.</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">When to Use Calendar Controller</h3>
        <p className="mb-4">
          Calendar Controller is ideal for applications requiring:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Date pickers with single or range selection capabilities</li>
          <li>Booking and reservation systems with date constraints</li>
          <li>Event calendars with multi-view navigation</li>
          <li>Applications requiring internationalization and localization</li>
          <li>Complex date validation and constraint management</li>
          <li>Framework-agnostic calendar implementations</li>
          <li>Custom UI calendars with reactive state management</li>
        </ul>
      </div>
    </div>
  )
}
