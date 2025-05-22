'use client'

import { Card, CardContent } from "@/components/ui/card"

export function Introduction() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg">
        <h2 id="introduction" className="text-xl sm:text-2xl font-bold text-blue-700 dark:text-blue-300 mb-3 sm:mb-4">Calendar Controller: The Complete Solution for Date Selection</h2>
        <p className="text-base sm:text-lg mb-3 sm:mb-4">
          Calendar Controller is a powerful, reactive date management system designed to handle all aspects of date and date range selection in modern web applications. From simple date pickers to complex date range selections with validation rules, Calendar Controller provides a comprehensive solution with minimal boilerplate code.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground">
          It handles state management, validation, date navigation, internationalization, and UI interactions through a well-structured, predictable system that integrates with all major frontend frameworks.
        </p>
      </div>
      
      <p className="text-base sm:text-lg leading-relaxed">
        Calendar Controller takes a declarative approach to date management, allowing developers to define calendar behavior through configuration rather than imperative code. This results in cleaner codebases, improved maintainability, and faster development cycles.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-2">Versatile Date Selection</h3>
            <p className="text-sm text-muted-foreground">
              Support for single date selection, date range selection, and multiple date selection with comprehensive validation capabilities.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-2">Multiple View Modes</h3>
            <p className="text-sm text-muted-foreground">
              Seamlessly switch between day, month, and year views with intuitive navigation controls for efficient date selection.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-2">Complete Internationalization</h3>
            <p className="text-sm text-muted-foreground">
              Full support for different languages, locales, and date formats, ensuring a consistent experience for users worldwide.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-2">Comprehensive Validation</h3>
            <p className="text-sm text-muted-foreground">
              Define constraints such as min/max dates, disabled date ranges, and custom validation rules to enforce business logic.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-2">Framework Agnostic</h3>
            <p className="text-sm text-muted-foreground">
              Works with any UI framework or vanilla JavaScript, giving you complete flexibility in your technology choices.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-2">Accessibility Built-In</h3>
            <p className="text-sm text-muted-foreground">
              Designed with accessibility in mind, ensuring keyboard navigation and screen reader support for all users.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <p className="text-base leading-relaxed">
        Calendar Controller is part of the Uplink Protocol ecosystem, designed to integrate seamlessly with other Uplink components while maintaining its independence.
      </p>
    </div>
  )
}
