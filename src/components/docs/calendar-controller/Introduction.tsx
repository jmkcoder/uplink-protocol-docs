'use client'

import { Card, CardContent } from "@/components/ui/card"

export function Introduction() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg">
        <h2 id="introduction" className="text-xl sm:text-2xl font-bold text-blue-700 dark:text-blue-300 mb-3 sm:mb-4">Calendar Controller: The Complete Solution for Date Management</h2>
        <p className="text-base sm:text-lg mb-3 sm:mb-4">
          Calendar Controller is a powerful, reactive date management system designed to handle all aspects of calendar interaction in modern web applications. From simple date pickers to complex booking systems with date ranges, Calendar Controller provides a comprehensive solution with minimal boilerplate code.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground">
          It handles state management, navigation, date selection, internationalization, and UI interactions through a well-structured, predictable system that integrates with all major frontend frameworks.
        </p>
      </div>
      
      <p className="text-base sm:text-lg leading-relaxed">
        Calendar Controller takes a declarative approach to date management, allowing developers to define calendar structure and behavior through configuration rather than imperative code. This results in cleaner codebases, improved maintainability, and faster development cycles.
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
              <h3 className="text-xl font-medium">Flexible Date Selection</h3>
            </div>
            <p className="text-muted-foreground">Unified API for single dates, date ranges, and multi-date selection with intuitive navigation.</p>
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
              <h3 className="text-xl font-medium">Full Internationalization</h3>
            </div>
            <p className="text-muted-foreground">Comprehensive internationalization with support for multiple languages, date formats, and regional calendar preferences.</p>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Framework Agnostic</h3>
            </div>
            <p className="text-muted-foreground">Compatible with any UI framework including React, Vue, Angular, or vanilla JavaScript.</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">When to Use Calendar Controller</h3>
        <p className="mb-4">
          The Calendar Controller is ideal for:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Date pickers in forms and applications</li>
          <li>Booking and reservation systems</li>
          <li>Event schedulers and calendars</li>
          <li>Date range selectors</li>
          <li>Applications requiring complex date manipulation</li>
          <li>Multi-language applications with internationalization requirements</li>
        </ul>
      </div>
    </div>
  )
}
