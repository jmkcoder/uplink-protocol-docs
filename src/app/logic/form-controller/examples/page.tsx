'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import "../../../syntax-highlight.css"
import DynamicFormStepper from "@/components/examples/single-step"
import MultiStepForm from "@/components/examples/multi-step"
import AdvancedValidationForm from "@/components/examples/advanced-validation"
import AsyncValidatorExample from "@/components/docs/form-controller/api/examples/AsyncValidatorExample"
import SingleStepFormExample from "@/components/docs/form-controller/api/examples/SingleStepFormExample"
import MultiStepFormExample from "@/components/docs/form-controller/api/examples/MultiStepFormExample"
import AdvancedValidationFormExample from "@/components/docs/form-controller/api/examples/AdvancedValidationFormExample"
import { DocsPageLayout } from "@/components/docs/docs-page-layout"

export default function FormControllerExamples() {
  return (
    <DocsPageLayout>
      {/* Header & Navigation */}
      <div className="space-y-2 mb-6 sm:mb-8">
        <Badge variant="outline">Logic</Badge>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Form Controller</h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          A lightweight yet powerful form management system for building dynamic, multi-step forms with advanced validation capabilities.
        </p>          
        <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 border-b border-border">
          <Link href="/logic/form-controller/overview" className="text-muted-foreground hover:text-foreground pb-2 text-sm sm:text-base">Overview</Link>
          <Link href="/logic/form-controller/api" className="text-muted-foreground hover:text-foreground pb-2 text-sm sm:text-base">API</Link>
          <Link href="/logic/form-controller/examples" className="font-medium text-primary border-b-2 border-primary pb-2 text-sm sm:text-base">Examples</Link>
          <Link href="/logic/form-controller/extensibility" className="text-muted-foreground hover:text-foreground pb-2 text-sm sm:text-base">Extensibility</Link>
        </div>
      </div>      
      {/* Examples Content */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Examples</h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6">
          Explore interactive examples of Form Controller in action.
        </p>

        {/* Examples Tabs */}         
        <div className="mb-6 sm:mb-8">
          <Tabs defaultValue="single-step" className="w-full">            <TabsList className="mb-6 sm:mb-4 w-full grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-start gap-2 sm:gap-3">
              <TabsTrigger value="single-step" onClick={() => {
                document.querySelectorAll('[role="tabpanel"][data-example-tab="true"]').forEach(panel => {
                  panel.classList.add('hidden');
                  panel.setAttribute('data-state', 'inactive');
                });
                document.getElementById('single-step')?.classList.remove('hidden');
                document.getElementById('single-step')?.setAttribute('data-state', 'active');
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:inline-block mr-1">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M8 12h8" />
                  <path d="M12 16V8" />
                </svg>
                <span>Single-Step</span>
              </TabsTrigger>                <TabsTrigger value="multi-step" onClick={() => {
                document.querySelectorAll('[role="tabpanel"][data-example-tab="true"]').forEach(panel => {
                  panel.classList.add('hidden');
                  panel.setAttribute('data-state', 'inactive');
                });                document.getElementById('multi-step')?.classList.remove('hidden');
                document.getElementById('multi-step')?.setAttribute('data-state', 'active');
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:inline-block mr-1">
                  <line x1="8" x2="21" y1="6" y2="6" />
                  <line x1="8" x2="21" y1="12" y2="12" />
                  <line x1="8" x2="21" y1="18" y2="18" />
                  <line x1="3" x2="3.01" y1="6" y2="6" />
                  <line x1="3" x2="3.01" y1="12" y2="12" />
                  <line x1="3" x2="3.01" y1="18" y2="18" />
                </svg>
                <span>Multi-Step</span>
              </TabsTrigger>
              <TabsTrigger value="advanced-validation" onClick={() => {
                document.querySelectorAll('[role="tabpanel"][data-example-tab="true"]').forEach(panel => {
                  panel.classList.add('hidden');
                  panel.setAttribute('data-state', 'inactive');
                });                document.getElementById('advanced-validation')?.classList.remove('hidden');
                document.getElementById('advanced-validation')?.setAttribute('data-state', 'active');
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:inline-block mr-1">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>Advanced</span>
              </TabsTrigger>                <TabsTrigger value="async-validation" onClick={() => {
                document.querySelectorAll('[role="tabpanel"][data-example-tab="true"]').forEach(panel => {
                  panel.classList.add('hidden');
                  panel.setAttribute('data-state', 'inactive');
                });                document.getElementById('async-validation')?.classList.remove('hidden');
                document.getElementById('async-validation')?.setAttribute('data-state', 'active');
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:inline-block mr-1">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Async</span>
              </TabsTrigger>
            </TabsList>

            {/* Single-Step Form Tab */}
            <div className="space-y-6" id="single-step" data-state="active" data-example-tab="true" role="tabpanel">
              <Card className="overflow-hidden border-primary/10">
                <CardContent className="p-6">                    <h3 className="text-2xl font-bold tracking-tight mb-4">Single-Step Form Example</h3>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6">
                    <h4 className="text-base font-medium text-blue-700 dark:text-blue-300 mb-1">Beginner-friendly example</h4>
                    <p className="text-muted-foreground">
                      A basic form with field validation and submission handling. Perfect starting point for learning Form Controller basics.
                    </p>
                  </div>

                  <DynamicFormStepper />
                  
                  {/* Add the SingleStepFormExample component */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <SingleStepFormExample />
                  </div>
                    <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                    <h3 className="text-lg font-semibold">About this Example</h3>
                    <p className="text-muted-foreground">
                      This simple form example demonstrates:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Basic form configuration and setup</li>
                      <li>Field validation with pattern matching</li>
                      <li>Form submission and data handling</li>
                      <li>Error reporting and validation feedback</li>
                      <li>Debug panel to view current form state</li>
                    </ul>
                    <p className="text-muted-foreground">
                      The form uses the actual <code className="bg-primary/10 text-primary px-1 py-0.5 rounded mx-1"> @uplink-protocol/react</code> and
                      <code className="bg-primary/10 text-primary px-1 py-0.5 rounded mx-1">@uplink-protocol/form-controller</code>
                      packages for form state management and validation. This is the simplest form type - for more complex examples like multi-step forms,
                      dynamic field generation, and advanced validation, see the documentation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Multi-Step Form Tab */}
            <div className="space-y-6 hidden" id="multi-step" data-state="inactive" data-example-tab="true" role="tabpanel">
              <Card className="overflow-hidden border-primary/10">
                <CardContent className="p-6">                    <h3 className="text-2xl font-bold tracking-tight mb-4">Multi-Step Form Example</h3>
                  <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-6">
                    <h4 className="text-base font-medium text-amber-700 dark:text-amber-300 mb-1">Intermediate example</h4>
                    <p className="text-muted-foreground">
                      A more advanced form with multiple steps and navigation controls. Shows how to implement wizard-like forms with progressive data collection.
                    </p>
                  </div>                    <MultiStepForm />
                  
                  {/* Add the MultiStepFormExample component */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <MultiStepFormExample />
                  </div>
                    <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                    <h3 className="text-lg font-semibold">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Step-based navigation with progress indicator</li>
                      <li>State persistence between steps</li>
                      <li>Validation before progressing to next step</li>
                      <li>Step completion tracking and navigation controls</li>
                      <li>Comprehensive form submission with aggregated data</li>
                    </ul>

                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Implementation Highlights:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Uses <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">currentStep</code>, <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">prevStep</code>, and <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">nextStep</code> methods for navigation</li>
                        <li>Validates each step with <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">validateStep</code> method</li>
                        <li>Tracks validation with <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">isCurrentStepValid</code> state</li>
                        <li>Collects all form data with <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">getFlatData</code> on final submission</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Advanced Validation Tab */}
            <div className="space-y-6 hidden" id="advanced-validation" data-state="inactive" data-example-tab="true" role="tabpanel">
              <Card className="overflow-hidden border-primary/10">
                <CardContent className="p-6">                    <h3 className="text-2xl font-bold tracking-tight mb-4">Advanced Validation Example</h3>
                  <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 mb-6">
                    <h4 className="text-base font-medium text-purple-700 dark:text-purple-300 mb-1">Advanced example</h4>
                    <p className="text-muted-foreground">
                      A form showcasing custom validators and dynamic field validation rules. Demonstrates complex validation patterns like conditional requirements and field matching.
                    </p>
                  </div>                    <AdvancedValidationForm />
                  
                  {/* Add the AdvancedValidationFormExample component */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <AdvancedValidationFormExample />
                  </div>
                    <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                    <h3 className="text-lg font-semibold">Custom Validation Features</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Conditional field requirements based on other field values</li>
                      <li>Field matching validation (password confirmation)</li>
                      <li>Custom validator registration using Form Controller API</li>
                      <li>Dynamic error messages based on validation context</li>
                      <li>Real-time validation feedback</li>
                    </ul>

                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Implementation Highlights:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Uses <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">registerValidator</code> to define custom validation rules</li>
                        <li>Implements <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">requiredIf</code> validator for conditional field requirements</li>
                        <li>Implements <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">equals</code> validator for field matching validation</li>
                        <li>Uses <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">dynamicValidatorParams</code> to configure validation behavior</li>
                        <li>Demonstrates accessing validation context to create interdependent field validation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Async Validation Tab */}
            <TabsContent value="async-validation">
              <div className="space-y-6">
                <Card className="overflow-hidden border-primary/10">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold tracking-tight mb-4">Asynchronous Validation Example</h3>
                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6">
                      <h4 className="text-base font-medium text-blue-700 dark:text-blue-300 mb-1">Advanced example</h4>
                      <p className="text-muted-foreground">
                        Learn advanced techniques for implementing asynchronous validation with the FormController.
                        Essential for validations that require server-side processing or external API calls.
                      </p>
                    </div>

                    <AsyncValidatorExample />
                    
                    <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                      <h3 className="text-lg font-semibold">Best Practices</h3>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>
                          <strong>Provide visual feedback</strong> during validation with loading indicators
                        </li>
                        <li>
                          <strong>Debounce validation calls</strong> for fields that validate on change to prevent API overload
                        </li>
                        <li>
                          <strong>Cache validation results</strong> when appropriate to improve performance
                        </li>
                        <li>
                          <strong>Handle errors gracefully</strong> to prevent disrupting the user experience if validation fails
                        </li>
                        <li>
                          <strong>Consider rate limiting</strong> for server-side validation endpoints to prevent abuse
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Links */}
        <div className="space-y-4 pt-6">
          <h2 className="text-2xl font-bold tracking-tight">Related References</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/logic/form-controller/overview">
              <Card className="overflow-hidden transition-all hover:shadow-lg hover:bg-primary/5 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium">Overview</h3>
                  </div>
                  <p className="text-muted-foreground mt-4">Return to the Form Controller overview for a high-level introduction.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/logic/form-controller/api">
              <Card className="overflow-hidden transition-all hover:shadow-lg hover:bg-primary/5 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium">API Reference</h3>
                  </div>
                  <p className="text-muted-foreground mt-4">Explore the complete API documentation for Form Controller.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </DocsPageLayout>
  )
}
