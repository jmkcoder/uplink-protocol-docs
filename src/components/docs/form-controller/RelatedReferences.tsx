'use client'

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function RelatedReferences() {
  return (
    <div className="space-y-6">
      <h2 id="related-references" className="text-3xl font-bold tracking-tight">Related References</h2>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Explore detailed API documentation and practical examples to deepen your understanding of Form Controller.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <Card className="overflow-hidden hover:shadow-md transition-all border-indigo-200 dark:border-indigo-800/40">
          <CardContent className="p-0">
            <div className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border-b border-indigo-200/40 dark:border-indigo-800/30">
              <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-1">API Documentation</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive reference for all Form Controller APIs
              </p>
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-3">
                <li>
                  <Link href="/logic/form-controller/api#form-controller" className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    FormController
                  </Link>
                </li>
                <li>
                  <Link href="/logic/form-controller/api#configurations" className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Configuration Interfaces
                  </Link>
                </li>
                <li>
                  <Link href="/logic/form-controller/api#validation-api" className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Validation API
                  </Link>
                </li>
                <li>
                  <Link href="/logic/form-controller/api#services" className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Internal Services
                  </Link>
                </li>
              </ul>
              <div className="pt-2">
                <Link href="/logic/form-controller/api" className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                  Explore complete API documentation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden hover:shadow-md transition-all border-emerald-200 dark:border-emerald-800/40">
          <CardContent className="p-0">
            <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-b border-emerald-200/40 dark:border-emerald-800/30">
              <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300 mb-1">Examples</h3>
              <p className="text-muted-foreground text-sm">
                Practical implementations and usage patterns
              </p>
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-3">
                <li>
                  <Link href="/logic/form-controller/examples#single-step" className="text-teal-600 dark:text-teal-400 hover:underline font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Single-Step Form Example
                  </Link>
                </li>
                <li>
                  <Link href="/logic/form-controller/examples#multi-step" className="text-teal-600 dark:text-teal-400 hover:underline font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Multi-Step Wizard Example
                  </Link>
                </li>
                <li>
                  <Link href="/logic/form-controller/examples#advanced-validation" className="text-teal-600 dark:text-teal-400 hover:underline font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Advanced Validation Example
                  </Link>
                </li>
                <li>
                  <Link href="/logic/form-controller/examples#typescript" className="text-teal-600 dark:text-teal-400 hover:underline font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    TypeScript Integration Example
                  </Link>
                </li>
              </ul>
              <div className="pt-2">
                <Link href="/logic/form-controller/examples" className="inline-flex items-center text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                  Explore all examples
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
