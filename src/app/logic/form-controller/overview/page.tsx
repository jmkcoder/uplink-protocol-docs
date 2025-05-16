'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import "../../../syntax-highlight.css"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"
import { DocsSidebar } from "@/components/docs/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FormControllerOverview() {  
  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-background text-foreground">
      {/* Sidebar */}
      <DocsSidebar />
      
      {/* Main Content */}
      <div className="flex-1 px-6 py-12 lg:max-w-4xl">
        {/* Header & Navigation */}
        <div className="space-y-2 mb-8">
          <Badge variant="outline">Logic</Badge>
          <h1 className="text-4xl font-bold tracking-tight">Form Controller</h1>
          <p className="text-muted-foreground text-lg">
            A flexible, reactive form management system for both multi-step and single-step forms with advanced validation capabilities.
          </p>
          
          <div className="flex gap-4 pt-4 border-b border-border">
            <Link href="/logic/form-controller/overview" className="font-medium text-primary border-b-2 border-primary pb-2">Overview</Link>
            <Link href="/logic/form-controller/api" className="text-muted-foreground hover:text-foreground pb-2">API</Link>
            <Link href="/logic/form-controller/examples" className="text-muted-foreground hover:text-foreground pb-2">Examples</Link>
          </div>
        </div>

        {/* Overview Content */}
        <section className="space-y-12">
          {/* Comprehensive Introduction */}
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
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium">Reactive Architecture</h3>
                  </div>
                  <p className="text-muted-foreground">Real-time state updates with reactive bindings that automatically sync UI with form state.</p>
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

          {/* Installation */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Installation</h2>
            <p className="text-muted-foreground text-lg">
              Install the form controller package:
            </p>
            <Card>
              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                  <span className="text-zinc-400">npm</span>
                </div>
                <SyntaxHighlighter code="npm install @uplink-protocol/form-controller" language="shell" />
              </CardContent>
            </Card>

            <p className="text-muted-foreground pt-2">
              Then install the integration package for your framework:
            </p>
            <Card>
              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                  <span className="text-zinc-400">npm</span>
                </div>
                <SyntaxHighlighter
                  code={`# React
npm install @uplink/react

# Vue
npm install @uplink/vue

# Svelte
npm install @uplink/svelte`}
                  language="shell"
                />
              </CardContent>
            </Card>
          </div>          {/* Form Controller Basics */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Form Controller Basics</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At its core, Form Controller is built on a reactive architecture that provides real-time state management, field validation, step navigation, and comprehensive event handling. It follows the principle of &quot;configuration over code&quot; while offering powerful extension capabilities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Core Concepts</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-semibold text-sm">1</span>
                    </div>
                    <span><strong className="text-foreground">Step-Based Architecture</strong> - Forms are organized into one or more steps, each containing fields with their own configuration and validation rules.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-semibold text-sm">2</span>
                    </div>
                    <span><strong className="text-foreground">Declarative Configuration</strong> - Define your entire form structure, field properties, and validation rules in a single configuration object.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-semibold text-sm">3</span>
                    </div>
                    <span><strong className="text-foreground">Reactive State Management</strong> - All form state is reactive, automatically updating the UI when data or validation status changes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-semibold text-sm">4</span>
                    </div>
                    <span><strong className="text-foreground">Progressive Validation</strong> - Fields can be validated on change, blur, step transition, or only on form submission.</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <h3 className="text-xl font-semibold mb-4">Key State Properties</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 border-b border-zinc-200 dark:border-zinc-700">
                    <code className="text-primary bg-primary/10 px-2 py-1 rounded text-sm">formData</code>
                    <span className="text-sm text-muted-foreground">All current field values</span>
                  </div>
                  <div className="flex justify-between items-center p-2 border-b border-zinc-200 dark:border-zinc-700">
                    <code className="text-primary bg-primary/10 px-2 py-1 rounded text-sm">fieldErrors</code>
                    <span className="text-sm text-muted-foreground">Validation error messages</span>
                  </div>
                  <div className="flex justify-between items-center p-2 border-b border-zinc-200 dark:border-zinc-700">
                    <code className="text-primary bg-primary/10 px-2 py-1 rounded text-sm">currentStep</code>
                    <span className="text-sm text-muted-foreground">Current active step</span>
                  </div>
                  <div className="flex justify-between items-center p-2 border-b border-zinc-200 dark:border-zinc-700">
                    <code className="text-primary bg-primary/10 px-2 py-1 rounded text-sm">isFormValid</code>
                    <span className="text-sm text-muted-foreground">Overall form validity status</span>
                  </div>
                  <div className="flex justify-between items-center p-2">
                    <code className="text-primary bg-primary/10 px-2 py-1 rounded text-sm">stepsValidity</code>
                    <span className="text-sm text-muted-foreground">Per-step validation status</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <Card className="p-5 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-lg mb-2">Reactive State Architecture</h3>
                <p className="text-sm text-muted-foreground">Form Controller uses a reactive subscriber pattern to automatically update UI components when form state changes. This includes field values, errors, validation status, and step navigation state.</p>
              </Card>
              <Card className="p-5 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-lg mb-2">Comprehensive Validation</h3>
                <p className="text-sm text-muted-foreground">From simple required fields to complex pattern matching, cross-field validation, and custom asynchronous validators, Form Controller provides a complete validation system with granular control.</p>
              </Card>
              <Card className="p-5 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-lg mb-2">Multi-Step Capabilities</h3>
                <p className="text-sm text-muted-foreground">Built from the ground up for both simple and multi-step forms, with step navigation, conditional progression, step validation, and persistent state between steps.</p>
              </Card>
            </div>
          </div>

          {/* Advanced Capabilities */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Advanced Capabilities</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Form Controller goes beyond basic form management, offering sophisticated capabilities to handle complex real-world scenarios. These advanced features enable you to build enterprise-grade forms with dynamic behavior, complex validation logic, and seamless integration with your data pipeline.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Advanced Features</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span><strong className="text-foreground">Conditional Logic</strong> - Show, hide, or validate fields based on other field values, creating dynamic form experiences.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span><strong className="text-foreground">Cross-Field Validation</strong> - Compare values between fields to ensure data integrity and consistency.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span><strong className="text-foreground">State Persistence</strong> - Save and restore form state across sessions, enabling draft functionality and resumable forms.</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl border border-purple-200 dark:border-purple-800/60">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-900 dark:text-purple-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  When to Use Advanced Features
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Consider implementing these advanced capabilities when your form:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-200 dark:bg-purple-800 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-purple-800 dark:text-purple-200">✓</span>
                    </div>
                    <span>Has complex dependencies between fields</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-200 dark:bg-purple-800 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-purple-800 dark:text-purple-200">✓</span>
                    </div>
                    <span>Needs to collect structured data like nested objects or arrays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-200 dark:bg-purple-800 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-purple-800 dark:text-purple-200">✓</span>
                    </div>
                    <span>Supports saving drafts or recovering form state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-200 dark:bg-purple-800 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-purple-800 dark:text-purple-200">✓</span>
                    </div>
                    <span>Requires complex business rules for validation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Conditional Logic & Dynamic Fields */}
            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-bold">Conditional Logic & Dynamic Fields</h3>
              <p className="text-muted-foreground">
                Form Controller offers a powerful system for creating forms that adapt to user input. You can show or hide fields, make them required, or apply specific validation rules based on the values of other fields. This enables you to build intuitive, responsive forms that guide users through complex processes.
              </p>
              <Card>
                <CardContent className="p-0 rounded-xl overflow-hidden">
                  <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                    <div className="flex items-center space-x-2">
                      <span className="bg-blue-500 w-3 h-3 rounded-full"></span>
                      <span className="text-zinc-400">dynamic-conditional-fields.js</span>
                    </div>
                  </div>
                  <SyntaxHighlighter
                    code={`// Field that's only required if another field has a specific value
const phoneNumberField = {
  id: 'phoneNumber',
  value: '',
  label: 'Phone Number',
  type: 'tel',
  validation: {
    dynamicValidator: 'requiredIf',
    dynamicValidatorParams: {
      dependsOn: 'subscribe',
      dependsOnValue: true,
      errorMessage: 'Phone number is required when subscribing'
    }
  }
};

// Register the conditional validator
methods.registerValidator('requiredIf', (value, context) => {
  const { dependsOn, dependsOnValue, errorMessage } = 
    context.field.validation.dynamicValidatorParams || {};
  
  if (!dependsOn) return true;
  
  const stepId = context.field.stepId;
  const dependentValue = context.formData[stepId][dependsOn];
  
  // If the condition is met and field is empty, return error message
  if (dependentValue === dependsOnValue && (!value || value.trim() === '')) {
    return errorMessage || 'This field is conditionally required';
  }
  
  return true;
});

// Use the state to conditionally render fields in the UI
return (
  <div>
    <input type="checkbox" {...bindCheckbox('subscribe')} />
    
    {state.formData.contact.subscribe && (
      <input type="tel" {...bindInput('phoneNumber')} />
    )}
  </div>
);`}
                    language="js"
                  />
                </CardContent>
              </Card>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-lg mt-4">
                <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Implementation Tips</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-blue-700 dark:text-blue-400">•</span>
                    <span>Always handle both UI rendering <strong>and</strong> validation logic for conditional fields</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-blue-700 dark:text-blue-400">•</span>
                    <span>Consider creating reusable dynamic validators for common conditional patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-blue-700 dark:text-blue-400">•</span>
                    <span>For complex conditions, you can use custom functions that take multiple dependencies into account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-blue-700 dark:text-blue-400">•</span>
                    <span>Store conditional state in the form data to maintain consistency across component re-renders</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Cross-Field Validation */}
            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-bold">Cross-Field Validation</h3>
              <p className="text-muted-foreground">
                Validating fields by comparing their values to other fields is essential for ensuring data integrity in many forms. Form Controller provides comprehensive tools for implementing cross-field validation, from simple equality checks to complex data relationship validations.
              </p>
              <Card>
                <CardContent className="p-0 rounded-xl overflow-hidden">
                  <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                    <div className="flex items-center space-x-2">
                      <span className="bg-green-500 w-3 h-3 rounded-full"></span>
                      <span className="text-zinc-400">cross-field-validation.js</span>
                    </div>
                  </div>
                  <SyntaxHighlighter
                    code={`const confirmPasswordField = {
  id: 'confirmPassword',
  value: '',
  label: 'Confirm Password',
  type: 'password',
  required: true,
  validation: {
    dynamicValidator: 'equals',
    dynamicValidatorParams: {
      matchField: 'password',
      errorMessage: 'Passwords must match'
    }
  }
};

// Register a custom dynamic validator
methods.registerValidator('equals', (value, context) => {
  const { matchField } = context.field.validation.dynamicValidatorParams || {};
  const stepId = context.field.stepId;
  
  if (!matchField) return true;
  
  const targetValue = context.formData[stepId][matchField];
  return value === targetValue || 'Fields must match';
});

// Example of a more complex cross-field validation
methods.registerValidator('dateRange', (value, context) => {
  const { startDateField, endDateField } = context.field.validation.dynamicValidatorParams || {};
  const stepId = context.field.stepId;
  
  // If this is the end date field
  if (context.field.id === endDateField) {
    const startDate = new Date(context.formData[stepId][startDateField]);
    const endDate = new Date(value);
    
    if (startDate > endDate) {
      return 'End date cannot be before start date';
    }
  }
  
  // If this is the start date field
  if (context.field.id === startDateField) {
    const endDateValue = context.formData[stepId][endDateField];
    
    // Only validate if end date is already set
    if (endDateValue) {
      const startDate = new Date(value);
      const endDate = new Date(endDateValue);
      
      if (startDate > endDate) {
        // Return error and update the end date field's validation status
        methods.validateField(stepId, endDateField);
        return 'Start date cannot be after end date';
      }
    }
  }
  
  return true;
});`}
                    language="js"
                  />
                </CardContent>
              </Card>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">Common Cross-Field Validations</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Password confirmation matching</li>
                    <li>• Start date before end date validation</li>
                    <li>• Minimum/maximum related values (min order must be less than max order)</li>
                    <li>• Address verification (city matches postal code)</li>
                    <li>• Dependent numerical values (discount must be less than total price)</li>
                    <li>• Unique values across multiple fields</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">Validation Pitfalls to Avoid</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Forgetting to validate both fields involved in a relationship</li>
                    <li>• Circular validation dependencies causing infinite loops</li>
                    <li>• Not handling empty or undefined values properly</li>
                    <li>• Inconsistent error messages across related fields</li>
                    <li>• Excessive cross-field validation that makes the form difficult to complete</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Form State Persistence */}
            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-bold">Form State Persistence</h3>
              <p className="text-muted-foreground">
                Form Controller provides a robust foundation for implementing state persistence across sessions, page refreshes, and navigation. This is crucial for complex forms where users might need to save their progress and return later, or for recovering form data in case of unexpected errors.
              </p>
              <Card>
                <CardContent className="p-0 rounded-xl overflow-hidden">
                  <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                    <span className="text-zinc-400">persistence-management.js</span>
                  </div>
                  <SyntaxHighlighter
                    code={`// Save form state to local storage
function saveFormState() {
  const formData = methods.getFlatData();
  localStorage.setItem('savedFormData', JSON.stringify({
    data: formData,
    lastModified: new Date().toISOString(),
    currentStepId: state.currentStepId
  }));
}

// Restore form state
function restoreFormState() {
  const savedData = localStorage.getItem('savedFormData');
  
  if (savedData) {
    const { data, lastModified, currentStepId } = JSON.parse(savedData);
    
    // Check if data is still valid (e.g., not expired)
    const expirationTime = 1000 * 60 * 60 * 24; // 24 hours
    const isDataValid = new Date() - new Date(lastModified) < expirationTime;
    
    if (isDataValid) {
      // Update each field with saved data
      Object.entries(data).forEach(([fieldId, value]) => {
        const [stepId, id] = fieldId.split('.');
        methods.updateField(stepId, id, value);
      });
      
      // Navigate to the last active step
      const stepIndex = state.steps.findIndex(step => step.id === currentStepId);
      if (stepIndex !== -1) {
        methods.goToStep(stepIndex);
      }
      
      // Optionally validate the restored form
      methods.validateForm();
      
      return true;
    }
  }
  
  return false;
}

// Auto-save on field changes
useEffect(() => {
  const debouncedSave = debounce(saveFormState, 500);
  debouncedSave();
  
  return () => debouncedSave.cancel();
}, [state.formData]);

// Create a debounce utility
function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Implement draft management UI
function DraftControls() {
  const [hasSavedDraft, setHasSavedDraft] = useState(false);
  
  useEffect(() => {
    const saved = localStorage.getItem('savedFormData');
    setHasSavedDraft(!!saved);
  }, []);
  
  const saveDraft = () => {
    saveFormState();
    setHasSavedDraft(true);
    showNotification('Draft saved successfully');
  };
  
  const loadDraft = () => {
    if (restoreFormState()) {
      showNotification('Draft loaded successfully');
    } else {
      showNotification('Draft could not be loaded', 'error');
    }
  };
  
  const discardDraft = () => {
    localStorage.removeItem('savedFormData');
    setHasSavedDraft(false);
    methods.resetForm();
    showNotification('Draft discarded');
  };
  
  return (
    <div className="draft-controls">
      <button onClick={saveDraft}>Save Draft</button>
      {hasSavedDraft && (
        <>
          <button onClick={loadDraft}>Load Draft</button>
          <button onClick={discardDraft}>Discard Draft</button>
        </>
      )}
    </div>
  );
}`}
                    language="js"
                  />
                </CardContent>
              </Card>
              
              <div className="mt-4 p-5 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg border border-amber-200 dark:border-amber-800/50">
                <h4 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-3">Advanced Persistence Strategies</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-amber-700 dark:text-amber-400">Server-Side Persistence</h5>
                    <p className="text-sm text-muted-foreground mt-1">For more reliable storage, especially for authenticated users, consider saving drafts to your backend:</p>
                    <div className="bg-white dark:bg-zinc-800 rounded-md p-3 mt-2 text-sm">
                      <SyntaxHighlighter
                        code={`async function saveDraftToServer() {
  const formData = methods.getFlatData();
  
  try {
    const response = await fetch('/api/drafts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formData,
        formId: 'registration',
        userId: currentUser.id
      })
    });
    
    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Failed to save draft:', error);
    return false;
  }
}`}
                        language="js"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-amber-700 dark:text-amber-400">Sync Across Devices</h5>
                    <p className="text-sm text-muted-foreground mt-1">To enable users to continue a form across different devices, consider these approaches:</p>
                    <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground">
                      <li>Generate unique draft IDs that can be bookmarked or shared</li>
                      <li>Implement user authentication to associate drafts with user accounts</li>
                      <li>Use IndexedDB for larger form data that exceeds localStorage limits</li>
                      <li>Add draft expiration and automatic cleanup functionality</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Programmatic Form Control */}
            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-bold">Programmatic Form Control</h3>
              <p className="text-muted-foreground">
                Form Controller provides a comprehensive API for programmatically controlling forms, enabling sophisticated integration with your application logic. This allows you to manipulate form state, trigger validations, and handle submission in response to external events or complex business rules.
              </p>
              <Card>
                <CardContent className="p-0 rounded-xl overflow-hidden">
                  <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                    <span className="text-zinc-400">programmatic-control.js</span>
                  </div>
                  <SyntaxHighlighter
                    code={`// Reset the entire form or specific steps
function handleClearForm() {
  // Reset entire form to initial values
  methods.resetForm();
  
  // Or reset specific steps
  methods.resetStep('personal');
  
  // Optionally clear only certain fields
  methods.updateField('contact', 'email', '');
  methods.updateField('contact', 'phone', '');
}

// Programmatically set field values (e.g., from API data)
async function populateFromAPI() {
  try {
    const response = await fetch('/api/user/profile');
    const userData = await response.json();
    
    // Individual field updates
    methods.updateField('personal', 'firstName', userData.firstName);
    methods.updateField('personal', 'lastName', userData.lastName);
    methods.updateField('personal', 'email', userData.email);
    
    // Batch update multiple fields for better performance
    methods.batchUpdate([
      { stepId: 'address', fieldId: 'street', value: userData.address.street },
      { stepId: 'address', fieldId: 'city', value: userData.address.city },
      { stepId: 'address', fieldId: 'state', value: userData.address.state },
      { stepId: 'address', fieldId: 'zipCode', value: userData.address.zipCode }
    ]);
    
    // Validate after population
    methods.validateForm();
  } catch (error) {
    console.error('Failed to load user data:', error);
  }
}

// Validate specific fields or steps
function validateContactInfo() {
  // Validate individual fields
  const isEmailValid = methods.validateField('contact', 'email');
  const isPhoneValid = methods.validateField('contact', 'phone');
  
  // Validate an entire step
  const isContactStepValid = methods.validateStep('contact');
  
  // Update UI based on validation results
  if (!isEmailValid) {
    highlightField('email');
  }
  
  return isContactStepValid;
}

// Submit the form and process the result
async function handleSubmit() {
  // Validate entire form before submission
  const validationResult = methods.validateForm(true); // true = show errors
  
  if (validationResult.success) {
    // Get flat data for submission
    const formData = methods.getFlatData();
    
    // Process the data before submission (e.g., format dates)
    const processedData = transformData(formData);
    
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(processedData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Clear form or redirect
        methods.resetForm();
        navigateTo('/success');
      } else {
        // Handle server validation errors
        handleServerErrors(result.errors);
      }
    } catch (error) {
      console.error('Submission failed:', error);
    }
  } else {
    scrollToFirstError();
  }
}

// Helper to apply server-side validation errors to the form
function handleServerErrors(errors) {
  Object.entries(errors).forEach(([fieldPath, errorMessage]) => {
    const [stepId, fieldId] = fieldPath.split('.');
    methods.setFieldError(stepId, fieldId, errorMessage);
  });
}`}
                    language="js"
                  />
                </CardContent>
              </Card>
              
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Data Operations
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">getFlatData()</code></li>
                    <li>• <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">updateField()</code></li>
                    <li>• <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">batchUpdate()</code></li>
                    <li>• <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">resetForm()</code></li>
                    <li>• <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">resetStep()</code></li>
                  </ul>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Validation Control
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">validateField()</code></li>
                    <li>• <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">validateStep()</code></li>
                    <li>• <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">validateForm()</code></li>
                    <li>• <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">setFieldError()</code></li>
                    <li>• <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">clearValidationErrors()</code></li>
                  </ul>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    Navigation Methods
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">nextStep()</code></li>
                    <li>• <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">prevStep()</code></li>
                    <li>• <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">goToStep()</code></li>
                    <li>• <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">isLastStep()</code></li>
                    <li>• <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">isFirstStep()</code></li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Nested Field Structures */}
            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-bold">Nested Field Structures</h3>
              <p className="text-muted-foreground">
                Form Controller provides robust support for complex, nested data structures with compound validation rules. This allows you to model sophisticated data relationships while maintaining clean, manageable form code and validation logic.
              </p>
              <Card>
                <CardContent className="p-0 rounded-xl overflow-hidden">
                  <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                    <span className="text-zinc-400">nested-structures.js</span>
                  </div>
                  <SyntaxHighlighter
                    code={`// Define a form with nested data structures
const addressConfig = {
  steps: [{
    id: 'address',
    fields: {
      // Simple fields
      country: {
        id: 'country',
        value: '',
        required: true
      },
      
      // Complex nested structure for multiple addresses
      addresses: {
        id: 'addresses',
        value: [
          {
            street: '',
            city: '',
            zipCode: '',
            isPrimary: true
          }
        ],
        validation: {
          custom: (value) => {
            // Ensure at least one address
            if (!value.length) {
              return 'At least one address is required';
            }
            
            // Ensure exactly one primary address
            const primaryCount = value.filter(addr => addr.isPrimary).length;
            if (primaryCount !== 1) {
              return 'Exactly one address must be marked as primary';
            }
            
            // Validate each address
            for (const address of value) {
              if (!address.street || address.street.trim() === '') {
                return 'Street is required for all addresses';
              }
              if (!address.city || address.city.trim() === '') {
                return 'City is required for all addresses';
              }
              if (!address.zipCode || address.zipCode.trim() === '') {
                return 'ZIP code is required for all addresses';
              }
            }
            
            return true;
          }
        }
      }
    }
  }]
};

// Working with nested data
const addAddress = () => {
  const currentAddresses = [...state.formData.address.addresses];
  currentAddresses.push({ street: '', city: '', zipCode: '', isPrimary: false });
  methods.updateField('address', 'addresses', currentAddresses);
};

const updateNestedField = (index, field, value) => {
  const currentAddresses = [...state.formData.address.addresses];
  currentAddresses[index][field] = value;
  methods.updateField('address', 'addresses', currentAddresses);
};

const togglePrimary = (index) => {
  const currentAddresses = [...state.formData.address.addresses];
  
  // Set all addresses to non-primary
  currentAddresses.forEach((addr, i) => {
    addr.isPrimary = i === index;
  });
  
  methods.updateField('address', 'addresses', currentAddresses);
};

const removeAddress = (index) => {
  const currentAddresses = [...state.formData.address.addresses];
  const removedAddress = currentAddresses[index];
  
  // If removing primary address, make another one primary
  if (removedAddress.isPrimary && currentAddresses.length > 1) {
    const newPrimaryIndex = index === 0 ? 1 : 0;
    currentAddresses[newPrimaryIndex].isPrimary = true;
  }
  
  currentAddresses.splice(index, 1);
  methods.updateField('address', 'addresses', currentAddresses);
};

// Component for rendering and managing addresses
function AddressesEditor() {
  const { state, methods } = useFormController();
  const addresses = state.formData.address.addresses || [];
  const error = state.fieldErrors.address?.addresses;
  
  return (
    <div className="addresses-container">
      <h3>Your Addresses</h3>
      
      {addresses.map((address, index) => (
        <div key={index} className="address-card">
          <div className="form-row">
            <input
              type="text"
              value={address.street}
              onChange={(e) => updateNestedField(index, 'street', e.target.value)}
              placeholder="Street Address"
            />
          </div>
          
          <div className="form-row">
            <input
              type="text"
              value={address.city}
              onChange={(e) => updateNestedField(index, 'city', e.target.value)}
              placeholder="City"
            />
            
            <input
              type="text"
              value={address.zipCode}
              onChange={(e) => updateNestedField(index, 'zipCode', e.target.value)}
              placeholder="ZIP Code"
            />
          </div>
          
          <div className="form-row actions">
            <label>
              <input
                type="checkbox"
                checked={address.isPrimary}
                onChange={() => togglePrimary(index)}
              />
              Primary Address
            </label>
            
            {addresses.length > 1 && (
              <button type="button" onClick={() => removeAddress(index)}>
                Remove
              </button>
            )}
          </div>
        </div>
      ))}
      
      <button type="button" onClick={addAddress}>
        Add Another Address
      </button>
      
      {error && <div className="error">{error}</div>}
    </div>
  );
}`}
                    language="js"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Performance Optimizations and Best Practices */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Performance Optimizations and Best Practices</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Form Controller is engineered for optimal performance, but as forms grow in complexity, they can impact the user experience through increased render times and input lag. The following strategies and techniques will help you maintain responsive, efficient forms even at enterprise scale, with dozens of fields and complex validation rules.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Performance Considerations</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span><strong className="text-foreground">Reactive Updates</strong> - Each form change triggers a reactive update cascade that can impact performance in large forms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span><strong className="text-foreground">Validation Timing</strong> - Immediate validation on every keystroke can lead to poor performance and confusing UX.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span><strong className="text-foreground">Component Architecture</strong> - How you structure your form components significantly impacts render efficiency.</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl border border-cyan-200 dark:border-cyan-800/60">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-cyan-900 dark:text-cyan-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  When to Optimize
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Not all forms need extensive optimizations. Focus on these scenarios:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-cyan-200 dark:bg-cyan-800 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-cyan-800 dark:text-cyan-200">✓</span>
                    </div>
                    <span>Forms with 20+ fields or multiple complex steps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-cyan-200 dark:bg-cyan-800 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-cyan-800 dark:text-cyan-200">✓</span>
                    </div>
                    <span>When users report input lag or sluggish responses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-cyan-200 dark:bg-cyan-800 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-cyan-800 dark:text-cyan-200">✓</span>
                    </div>
                    <span>Forms that include complex dynamic validations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-cyan-200 dark:bg-cyan-800 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-cyan-800 dark:text-cyan-200">✓</span>
                    </div>
                    <span>When working with dynamic array fields and nested structures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

            {/* Creating a Form */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Creating a Form</h2>
            
            {/* Single-Step Form */}
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl font-bold">Single-Step Form</h3>
              <p className="text-muted-foreground">
                Even though the controller is designed for multi-step forms, you can easily use it for a single form:
              </p>
              <Card>
                <CardContent className="p-0 rounded-xl overflow-hidden">
                  <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                    <span className="text-zinc-400">javascript</span>
                  </div>
                  <SyntaxHighlighter
                    code={`// Create a form configuration with a single step
const formConfig = {
  steps: [
    {
      id: 'contact-info',
      title: 'Contact Information',
      fields: {
        name: {
          id: 'name',
          type: 'text',
          label: 'Full Name',
          required: true
        },
        email: {
          id: 'email',
          type: 'email',
          validation: {
            pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
          }
        }
      }
    }
  ]
};

// Initialize the form controller
const form = FormController(formConfig);`}
                    language="js"
                  />
                </CardContent>
              </Card>
            </div>
            
            {/* Multi-Step Form */}
            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-bold">Multi-Step Form</h3>
              <p className="text-muted-foreground">
                For multi-step forms, define multiple steps in the configuration:
              </p>
              <Card>
                <CardContent className="p-0 rounded-xl overflow-hidden">
                  <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                    <span className="text-zinc-400">javascript</span>
                  </div>
                  <SyntaxHighlighter
                    code={`const formConfig = {
  steps: [
    {
      id: 'personal',
      title: 'Personal Information',
      fields: {
        firstName: { id: 'firstName', required: true },
        lastName: { id: 'lastName', required: true }
      }
    },
    {
      id: 'contact',
      title: 'Contact Information',
      fields: {
        email: { 
          id: 'email',
          validation: { pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/ } 
        }
      }
    }
  ]
};

// Navigation methods
form.methods.nextStep();
form.methods.prevStep();
form.methods.goToStep(1);`}
                    language="js"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Field Validation */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Field Validation</h2>
            <p className="text-muted-foreground text-lg">
              The form controller provides several validation approaches:
            </p>
            
            {/* Built-in Validators */}
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl font-bold">Built-in Validators</h3>              <p className="text-muted-foreground">
                Built-in validators are based on the field&apos;s properties:
              </p>
              <Card>
                <CardContent className="p-0 rounded-xl overflow-hidden">
                  <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                    <span className="text-zinc-400">javascript</span>
                  </div>
                  <SyntaxHighlighter
                    code={`const emailField = {
  id: 'email',
  type: 'email',
  required: true,
  validation: {
    pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
    minLength: 5,
    maxLength: 100
  }
};

const ageField = {
  id: 'age',
  type: 'number',
  validation: {
    min: 18,
    max: 120
  }
};`}
                    language="js"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Custom Validators */}
            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-bold">Custom Validators</h3>
              <p className="text-muted-foreground">
                For complex validation, you can use custom validator functions:
              </p>
              <Card>
                <CardContent className="p-0 rounded-xl overflow-hidden">
                  <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                    <span className="text-zinc-400">javascript</span>
                  </div>
                  <SyntaxHighlighter
                    code={`const passwordField = {
  id: 'password',
  type: 'password',
  required: true,
  validation: {
    custom: (value) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/;
      
      if (!regex.test(value)) {
        return 'Password must have 8+ chars with uppercase, lowercase, and a number';
      }
      
      return true; // Valid
    }
  }
};`}
                    language="js"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Dynamic Validators */}
            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-bold">Dynamic Validators</h3>
              <p className="text-muted-foreground">
                Dynamic validators can access the entire form context for validation:
              </p>
              <Card>
                <CardContent className="p-0 rounded-xl overflow-hidden">
                  <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                    <span className="text-zinc-400">javascript</span>
                  </div>
                  <SyntaxHighlighter
                    code={`// Register a dynamic validator
form.methods.registerValidator('equals', (value, context) => {
  const { matchField } = context.field.validation.dynamicValidatorParams || {};
  
  if (!matchField) return true;
  
  if (value !== context.formData[matchField]) {
    return \`Must match \${matchField}\`;
  }
  
  return true;
});

// Using the dynamic validator
const confirmPasswordField = {
  id: 'confirmPassword',
  validation: {
    dynamicValidator: 'equals',
    dynamicValidatorParams: {
      matchField: 'password',
      errorMessage: 'Passwords must match'
    }
  }
};`}
                    language="js"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Reactive Bindings */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Reactive Bindings</h2>
            <p className="text-muted-foreground text-lg">
              The form controller uses a reactive binding system to update the UI whenever form state changes:
            </p>
            <Card>
              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                  <span className="text-zinc-400">javascript</span>
                </div>
                <SyntaxHighlighter
                  code={`// Subscribe to form state changes
form.bindings.formData.subscribe(formData => {
  console.log('Form data updated:', formData);
});

// Track step validity
form.bindings.stepsValidity.subscribe(validityMap => {
  const isCurrentStepValid = validityMap[currentStepId];
  nextButton.disabled = !isCurrentStepValid;
});

// Show/hide navigation buttons
form.bindings.isFirstStep.subscribe(isFirst => {
  prevButton.style.display = isFirst ? 'none' : 'block';
});`}
                  language="js"
                />
              </CardContent>
            </Card>
          </div>

          {/* Framework Integration */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Framework Integration</h2>
            <p className="text-muted-foreground text-lg">
              The form controller integrates seamlessly with all major frameworks:
            </p>

            <Tabs defaultValue="react">
              <TabsList className="w-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 rounded-lg p-1 mb-6">
                <TabsTrigger value="react" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  React
                </TabsTrigger>
                <TabsTrigger value="vue" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  Vue
                </TabsTrigger>
                <TabsTrigger value="svelte" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  Svelte
                </TabsTrigger>
              </TabsList>

              <TabsContent value="react" className="space-y-4">
                <Card>
                  <CardContent className="p-0 rounded-xl overflow-hidden">
                    <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                      <span className="text-zinc-400">react</span>
                    </div>
                    <SyntaxHighlighter
                      code={`import { useUplinkController } from "@uplink/react"
import { FormController } from "@uplink-protocol/form-controller"

function MyForm() {
  const formConfig = {
    steps: [{ 
      id: 'personal',
      fields: { name: { id: 'name', required: true } }
    }]
  }
  
  const { bindings, methods } = useUplinkController(FormController, formConfig)
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if (methods.validateForm(true)) {
        console.log(methods.getFlatData())
      }
    }}>
      <input 
        value={bindings.fields.personal.name.value} 
        onChange={(e) => methods.updateField('personal', 'name', e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}`}
                      language="jsx"
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="vue" className="space-y-4">
                <Card>
                  <CardContent className="p-0 rounded-xl overflow-hidden">
                    <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                      <span className="text-zinc-400">vue</span>
                    </div>
                    <SyntaxHighlighter
                      code={`<script setup>
  import { useUplinkController } from "@uplink/vue"
  import { FormController } from "@uplink-protocol/form-controller"

  const formConfig = {
    steps: [{ 
      id: 'personal',
      fields: { name: { id: 'name', required: true } }
    }]
  }

  const { bindings, methods } = useUplinkController(FormController, formConfig)
</script>

<template>
  <form @submit.prevent="methods.validateForm(true) && console.log(methods.getFlatData())">
    <input v-model="bindings.fields.personal.name.value" />
    <button type="submit">Submit</button>
  </form>
</template>`}
                      language="vue"
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="svelte" className="space-y-4">
                <Card>
                  <CardContent className="p-0 rounded-xl overflow-hidden">
                    <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                      <span className="text-zinc-400">svelte</span>
                    </div>
                    <SyntaxHighlighter
                      code={`<script>
  import { useUplinkController } from "@uplink/svelte"
  import { FormController } from "@uplink-protocol/form-controller"

  const formConfig = {
    steps: [{ 
      id: 'personal',
      fields: { name: { id: 'name', required: true } }
    }]
  }

  const { bindings, methods } = useUplinkController(FormController, formConfig)
  
  function handleSubmit() {
    if (methods.validateForm(true)) {
      console.log(methods.getFlatData())
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input bind:value={$bindings.fields.personal.name.value} />
  <button type="submit">Submit</button>
</form>`}
                      language="svelte"
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* API Quick Reference */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">API Quick Reference</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-5">
                <h3 className="font-bold mb-3">Navigation Methods</h3>
                <ul className="space-y-2 text-sm">
                  <li><code className="bg-muted px-1 rounded">nextStep()</code> - Go to next step</li>
                  <li><code className="bg-muted px-1 rounded">prevStep()</code> - Go to previous step</li>
                  <li><code className="bg-muted px-1 rounded">goToStep(stepIndex)</code> - Go to specific step</li>
                </ul>
              </Card>
              <Card className="p-5">
                <h3 className="font-bold mb-3">Form Data Methods</h3>
                <ul className="space-y-2 text-sm">
                  <li><code className="bg-muted px-1 rounded">updateField(stepId, fieldId, value)</code> - Update field value</li>
                  <li><code className="bg-muted px-1 rounded">getStepData(stepId)</code> - Get data for a step</li>
                  <li><code className="bg-muted px-1 rounded">getFlatData()</code> - Get merged form data</li>
                </ul>
              </Card>
              <Card className="p-5">
                <h3 className="font-bold mb-3">Validation Methods</h3>
                <ul className="space-y-2 text-sm">
                  <li><code className="bg-muted px-1 rounded">validateField(stepId, fieldId, value)</code> - Validate field</li>
                  <li><code className="bg-muted px-1 rounded">validateStep(stepId)</code> - Validate step</li>
                  <li><code className="bg-muted px-1 rounded">validateForm(showErrors)</code> - Validate form</li>
                </ul>
              </Card>
              <Card className="p-5">
                <h3 className="font-bold mb-3">Reactive Bindings</h3>
                <ul className="space-y-2 text-sm">
                  <li><code className="bg-muted px-1 rounded">currentStep</code> - Current step object</li>
                  <li><code className="bg-muted px-1 rounded">formData</code> - All form data</li>
                  <li><code className="bg-muted px-1 rounded">fieldErrors</code> - Validation errors</li>
                  <li><code className="bg-muted px-1 rounded">isFormValid</code> - Overall form validity</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Related References */}
          <div className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold tracking-tight">Related References</h2>
            <div className="grid gap-4 md:grid-cols-2">
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
                    <p className="text-muted-foreground mt-4">Explore the complete API documentation for Form Controller, including methods, bindings, and configuration options.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/logic/form-controller/examples">
                <Card className="overflow-hidden transition-all hover:shadow-lg hover:bg-primary/5 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium">Examples</h3>
                    </div>
                    <p className="text-muted-foreground mt-4">See practical examples of the Form Controller in action, with multi-step forms, validation, and responsive designs.</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
