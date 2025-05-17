'use client'

import { Card, CardContent } from "@/components/ui/card"

export function Introduction() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Form Controller: The Complete Solution for Form Management</h2>
        <p className="text-lg mb-4">
          Form Controller is a powerful, reactive form management system designed to handle all aspects of form interaction in modern web applications. From simple contact forms to complex multi-page wizards with conditional logic, Form Controller provides a comprehensive solution with minimal boilerplate code.
        </p>
        <p className="text-muted-foreground">
          It handles state management, validation, data collection, error handling, and UI interactions through a well-structured, predictable system that integrates with all major frontend frameworks.
        </p>
      </div>
      
      <p className="text-lg leading-relaxed">
        Form Controller takes a declarative approach to form management, allowing developers to define form structure and behavior through configuration rather than imperative code. This results in cleaner codebases, improved maintainability, and faster development cycles.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Flexible Form Structure</h3>
            </div>
            <p className="text-muted-foreground">Unified API for both single-step and multi-step forms with progressive form building capabilities.</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Advanced Validation</h3>
            </div>
            <p className="text-muted-foreground">Comprehensive validation rules including pattern matching, dynamic validators, and cross-field validation.</p>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>              </div>
              <h3 className="text-xl font-medium">Reactive Architecture</h3>
            </div>
            <p className="text-muted-foreground">Real-time state updates with reactive state properties that automatically sync UI with form state.</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Framework Agnostic</h3>
            </div>
            <p className="text-muted-foreground">Integrates with React, Vue, and Svelte through dedicated binding packages.</p>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Type Safety</h3>
            </div>
            <p className="text-muted-foreground">Full TypeScript support with strong typing for form configurations and state management.</p>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Progressive Disclosure</h3>
            </div>
            <p className="text-muted-foreground">Step-by-step form progression with conditional logic and dependency tracking.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
