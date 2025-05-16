'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import "../../../syntax-highlight.css"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"
import { DocsSidebar } from "@/components/docs/sidebar"
import DynamicFormStepper from "@/components/examples/single-step"
import MultiStepForm from "@/components/examples/multi-step"
import AdvancedValidationForm from "@/components/examples/advanced-validation"

export default function FormControllerExamples() {
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
            A lightweight yet powerful form management system for building dynamic, multi-step forms with advanced validation capabilities.
          </p>

          <div className="flex gap-4 pt-4 border-b border-border">
            <Link href="/logic/form-controller/overview" className="text-muted-foreground hover:text-foreground pb-2">Overview</Link>
            <Link href="/logic/form-controller/api" className="text-muted-foreground hover:text-foreground pb-2">API</Link>
            <Link href="/logic/form-controller/examples" className="font-medium text-primary border-b-2 border-primary pb-2">Examples</Link>
          </div>
        </div>        {/* Examples Content */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Examples</h2>
          <p className="text-muted-foreground text-lg mb-6">
            Explore interactive examples of Form Controller in action.
          </p>

          {/* Examples Tabs */}
          <div className="mb-8">
            <Tabs defaultValue="single-step" className="w-full">
              <TabsList className="mb-4 w-full justify-start gap-2">
                <TabsTrigger value="single-step" className="py-2 px-4 flex items-center gap-1.5" onClick={() => {
                  document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
                    panel.classList.add('hidden');
                    panel.setAttribute('data-state', 'inactive');
                  });
                  document.getElementById('single-step')?.classList.remove('hidden');
                  document.getElementById('single-step')?.setAttribute('data-state', 'active');
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M8 12h8" />
                    <path d="M12 16V8" />
                  </svg>
                  Single-Step Form
                </TabsTrigger>
                <TabsTrigger value="multi-step" className="py-2 px-4 flex items-center gap-1.5" onClick={() => {
                  document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
                    panel.classList.add('hidden');
                    panel.setAttribute('data-state', 'inactive');
                  });
                  document.getElementById('multi-step')?.classList.remove('hidden');
                  document.getElementById('multi-step')?.setAttribute('data-state', 'active');
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <line x1="8" x2="21" y1="6" y2="6" />
                    <line x1="8" x2="21" y1="12" y2="12" />
                    <line x1="8" x2="21" y1="18" y2="18" />
                    <line x1="3" x2="3.01" y1="6" y2="6" />
                    <line x1="3" x2="3.01" y1="12" y2="12" />
                    <line x1="3" x2="3.01" y1="18" y2="18" />
                  </svg>
                  Multi-Step Form
                </TabsTrigger>
                <TabsTrigger value="advanced-validation" className="py-2 px-4 flex items-center gap-1.5" onClick={() => {
                  document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
                    panel.classList.add('hidden');
                    panel.setAttribute('data-state', 'inactive');
                  });
                  document.getElementById('advanced-validation')?.classList.remove('hidden');
                  document.getElementById('advanced-validation')?.setAttribute('data-state', 'active');
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Advanced Validation
                </TabsTrigger>
              </TabsList>

              {/* Single-Step Form Tab */}
              <div className="space-y-6" id="single-step" data-state="active" role="tabpanel">
                <Card className="overflow-hidden border-primary/10">
                  <CardContent className="p-6">                    <h3 className="text-2xl font-bold tracking-tight mb-4">Single-Step Form Example</h3>
                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6">
                      <h4 className="text-base font-medium text-blue-700 dark:text-blue-300 mb-1">Beginner-friendly example</h4>
                      <p className="text-muted-foreground">
                        A basic form with field validation and submission handling. Perfect starting point for learning Form Controller basics.
                      </p>
                    </div>

                    <DynamicFormStepper />                    <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
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
                      <div className="mt-6">
                        <Tabs defaultValue="react" className="gap-0">
                          <TabsList className="w-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 rounded-lg p-1 mb-0">
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
                            <TabsTrigger value="vanilla" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm gap-2">
                              <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                              Vanilla JS
                            </TabsTrigger>
                          </TabsList>
                          <div className="flex items-center justify-between bg-primary/10 rounded-t-lg px-4 py-2 mt-2">
                            <h4 className="text-lg font-semibold">Code Snippet</h4>
                            <div className="text-xs text-muted-foreground">Single-Step Form Example</div>
                          </div>



                          <TabsContent value="react" className="space-y-4">
                            <SyntaxHighlighter
                              code={`import React from "react";
import { useUplink } from " @uplink-protocol/react";
import { FormController } from "@uplink-protocol/form-controller";

function DynamicFormStepper() {
  // Define your form configuration
  const formConfig = {
    steps: [
      {
        id: 'contact',
        title: 'Contact Information',
        fields: {
          name: {
            id: 'name',
            value: '',
            label: 'Full Name',
            type: 'text',
            required: true,
          },
          email: {
            id: 'email',
            value: '',
            label: 'Email Address',
            type: 'email',
            required: true,
            validation: {
              pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
            }
          }
        }
      }
    ]
  };

  // Initialize the form controller with useUplink
  const { state, methods } = useUplink(
    () => FormController(formConfig),
    { trackBindings: "all" }
  );

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = methods.submitForm();

    if (result.success) {
      console.log('Form data:', result.data);
      alert("Form submitted successfully!");
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Full Name <span style={{ color: "red" }}>*</span>
        </label>
        <input 
          type="text"
          value={state.formData.contact?.name || ""}
          onChange={(e) => methods.updateField('contact', 'name', e.target.value)}
        />
        {state.fieldErrors.contact?.name && (
          <div className="error">
            {state.fieldErrors.contact.name}
          </div>
        )}
      </div>

      <div>
        <label>
          Email Address <span style={{ color: "red" }}>*</span>
        </label>
        <input 
          type="email"
          value={state.formData.contact?.email || ""}
          onChange={(e) => methods.updateField('contact', 'email', e.target.value)}
        />
        {state.fieldErrors.contact?.email && (
          <div className="error">
            {state.fieldErrors.contact.email}
          </div>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}`}
                              language="tsx"
                            />
                          </TabsContent>

                          <TabsContent value="vue" className="space-y-4">
                            <SyntaxHighlighter
                              code={`<script setup>
import { useUplink } from " @uplink-protocol/vue";
import { FormController } from "@uplink-protocol/form-controller";

// Define your form configuration
const formConfig = {
  steps: [
    {
      id: 'contact',
      title: 'Contact Information',
      fields: {
        name: {
          id: 'name',
          value: '',
          label: 'Full Name',
          type: 'text',
          required: true,
        },
        email: {
          id: 'email',
          value: '',
          label: 'Email Address',
          type: 'email',
          required: true,
          validation: {
            pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
          }
        }
      }
    }
  ]
};

// Initialize the form controller with useUplink
const { state, methods } = useUplink(
  () => FormController(formConfig),
  { trackBindings: "all" }
);

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  const result = methods.submitForm();

  if (result.success) {
    console.log('Form data:', result.data);
    alert("Form submitted successfully!");
  } else {
    alert("Please fix the errors before submitting.");
  }
};
</script>

<template>
  <form @submit="handleSubmit">
    <div>
      <label>
        Full Name <span style="color: red">*</span>
      </label>
      <input 
        type="text"
        v-model="state.formData.contact?.name" 
        @input="(e) => methods.updateField('contact', 'name', e.target.value)"
      />
      <div class="error" v-if="state.fieldErrors.contact?.name">
        {{ state.fieldErrors.contact.name }}
      </div>
    </div>

    <div>
      <label>
        Email Address <span style="color: red">*</span>
      </label>
      <input 
        type="email"
        v-model="state.formData.contact?.email" 
        @input="(e) => methods.updateField('contact', 'email', e.target.value)"
      />
      <div class="error" v-if="state.fieldErrors.contact?.email">
        {{ state.fieldErrors.contact.email }}
      </div>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>`}
                              language="vue"
                            />
                          </TabsContent>

                          <TabsContent value="svelte" className="space-y-4">
                            <SyntaxHighlighter
                              code={`<script>
  import { useUplink } from " @uplink-protocol/svelte";
  import { FormController } from "@uplink-protocol/form-controller";

  // Define your form configuration
  const formConfig = {
    steps: [
      {
        id: 'contact',
        title: 'Contact Information',
        fields: {
          name: {
            id: 'name',
            value: '',
            label: 'Full Name',
            type: 'text',
            required: true,
          },
          email: {
            id: 'email',
            value: '',
            label: 'Email Address',
            type: 'email',
            required: true,
            validation: {
              pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
            }
          }
        }
      }
    ]
  };

  // Initialize the form controller with useUplink
  const { state, methods } = useUplink(
    () => FormController(formConfig),
    { trackBindings: "all" }
  );

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = methods.submitForm();

    if (result.success) {
      console.log('Form data:', result.data);
      alert("Form submitted successfully!");
    } else {
      alert("Please fix the errors before submitting.");
    }
  };
</script>

<form on:submit={handleSubmit}>
  <div>
    <label>
      Full Name <span style="color: red">*</span>
    </label>
    <input 
      type="text"
      value={$state.formData.contact?.name || ""}
      on:input={(e) => methods.updateField('contact', 'name', e.target.value)}
    />
    {#if $state.fieldErrors.contact?.name}
      <div class="error">
        {$state.fieldErrors.contact.name}
      </div>
    {/if}
  </div>

  <div>
    <label>
      Email Address <span style="color: red">*</span>
    </label>
    <input 
      type="email"
      value={$state.formData.contact?.email || ""}
      on:input={(e) => methods.updateField('contact', 'email', e.target.value)}
    />
    {#if $state.fieldErrors.contact?.email}
      <div class="error">
        {$state.fieldErrors.contact.email}
      </div>
    {/if}
  </div>

  <button type="submit">Submit</button>
</form>`}
                              language="svelte"
                            />
                          </TabsContent>

                          <TabsContent value="vanilla" className="space-y-4">
                            <SyntaxHighlighter
                              code={`import { connectController } from " @uplink-protocol/core";
import { FormController } from "@uplink-protocol/form-controller";

// Define your form configuration
const formConfig = {
  steps: [
    {
      id: 'contact',
      title: 'Contact Information',
      fields: {
        name: {
          id: 'name',
          value: '',
          label: 'Full Name',
          type: 'text',
          required: true,
        },
        email: {
          id: 'email',
          value: '',
          label: 'Email Address',
          type: 'email',
          required: true,
          validation: {
            pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
          }
        }
      }
    }
  ]
};

// Create a controller instance
const controller = connectController(() => FormController(formConfig));

// Get DOM elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submit");
const form = document.getElementById("contact-form");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");

// Listen for state changes
controller.subscribe((state) => {
  // Update inputs with current values
  nameInput.value = state.formData.contact?.name || "";
  emailInput.value = state.formData.contact?.email || "";
  
  // Update error messages
  nameError.textContent = state.fieldErrors.contact?.name || "";
  nameError.style.display = state.fieldErrors.contact?.name ? "block" : "none";
  
  emailError.textContent = state.fieldErrors.contact?.email || "";
  emailError.style.display = state.fieldErrors.contact?.email ? "block" : "none";
});

// Setup input change handlers
nameInput.addEventListener("input", (e) => {
  controller.methods.updateField('contact', 'name', e.target.value);
});

emailInput.addEventListener("input", (e) => {
  controller.methods.updateField('contact', 'email', e.target.value);
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const result = controller.methods.submitForm();

  if (result.success) {
    console.log('Form data:', result.data);
    alert("Form submitted successfully!");
  } else {
    alert("Please fix the errors before submitting.");
  }
});`}
                              language="js"
                            />
                          </TabsContent>
                        </Tabs>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Multi-Step Form Tab */}
              <div className="space-y-6 hidden" id="multi-step" data-state="inactive" role="tabpanel">
                <Card className="overflow-hidden border-primary/10">
                  <CardContent className="p-6">                    <h3 className="text-2xl font-bold tracking-tight mb-4">Multi-Step Form Example</h3>
                    <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-6">
                      <h4 className="text-base font-medium text-amber-700 dark:text-amber-300 mb-1">Intermediate example</h4>
                      <p className="text-muted-foreground">
                        A more advanced form with multiple steps and navigation controls. Shows how to implement wizard-like forms with progressive data collection.
                      </p>
                    </div>

                    <MultiStepForm />
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
                      <div className="mt-6">
                        <Tabs defaultValue="react" className="gap-0">
                          <TabsList className="w-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 rounded-lg p-1 mb-0">
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
                            <TabsTrigger value="vanilla" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm gap-2">
                              <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                              Vanilla JS
                            </TabsTrigger>
                          </TabsList>
                          <div className="flex items-center justify-between bg-primary/10 rounded-t-lg px-4 py-2 mt-2">
                            <h4 className="text-lg font-semibold">Code Snippet</h4>
                            <div className="text-xs text-muted-foreground">Multi-Step Form Example</div>
                          </div>


                          <TabsContent value="react" className="space-y-4">
                            <SyntaxHighlighter
                              code={`import React from "react";
import { useUplink } from " @uplink-protocol/react";
import { FormController } from "@uplink-protocol/form-controller";

function MultiStepForm() {
  // Define your form configuration with multiple steps
  const formConfig = {
    steps: [
      {
        id: 'personal',
        title: 'Personal Info',
        fields: {
          firstName: {
            id: 'firstName',
            value: '',
            label: 'First Name',
            type: 'text',
            required: true,
          },
          lastName: {
            id: 'lastName',
            value: '',
            label: 'Last Name',
            type: 'text',
            required: true,
          },
          email: {
            id: 'email',
            value: '',
            label: 'Email Address',
            type: 'email',
            required: true,
            validation: {
              pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
            }
          },
        }
      },
      {
        id: 'address',
        title: 'Address',
        fields: {
          street: {
            id: 'street',
            value: '',
            label: 'Street Address',
            type: 'text',
            required: true,
          },
          city: {
            id: 'city',
            value: '',
            label: 'City',
            type: 'text',
            required: true,
          },
          zipCode: {
            id: 'zipCode',
            value: '',
            label: 'ZIP / Postal Code',
            type: 'text',
            required: true,
          }
        }
      },
      {
        id: 'review',
        title: 'Review',
        fields: {}
      }
    ]
  };

  // Initialize the form controller with useUplink
  const { state, methods } = useUplink(
    () => FormController(formConfig),
    { trackBindings: "all" }
  );

  // Move to next step after validating current step
  const handleNext = () => {
    const currentStepId = state.currentStep.id;
    const isValid = methods.validateStep(currentStepId);
    
    if (isValid) {
      methods.nextStep();
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = methods.submitForm();

    if (result.success) {
      console.log('Form data:', result.data);
      alert("Form submitted successfully!");
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  // Render current step fields
  const renderCurrentStep = () => {
    const { currentStep } = state;
    
    // On the review step, show a summary
    if (currentStep.id === 'review') {
      return (
        <div className="review-summary">
          <h3>Review Your Information</h3>
          <pre>{JSON.stringify(methods.getFlatData(), null, 2)}</pre>
        </div>
      );
    }

    return Object.entries(currentStep.fields).map(([fieldId, field]) => (
      <div key={fieldId} className="form-field">
        <label>
          {field.label} {field.required && <span className="required">*</span>}
        </label>
        <input
          type={field.type}
          value={state.formData[currentStep.id]?.[fieldId] || ''}
          onChange={(e) => methods.updateField(currentStep.id, fieldId, e.target.value)}
        />
        {state.fieldErrors[currentStep.id]?.[fieldId] && (
          <div className="error">{state.fieldErrors[currentStep.id][fieldId]}</div>
        )}
      </div>
    ));
  };

  return (
    <div className="multi-step-form">
      {/* Progress indicator */}
      <div className="progress-bar">
        {formConfig.steps.map((step, index) => (
          <div 
            key={step.id} 
            className={\`step \${index <= state.currentStepIndex ? 'active' : ''}\`}
            onClick={() => index < state.currentStepIndex && methods.goToStep(index)}
          >
            {step.title}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="step-content">
          <h2>{state.currentStep.title}</h2>
          {renderCurrentStep()}
        </div>
        
        <div className="form-navigation">
          {!state.isFirstStep && (
            <button 
              type="button" 
              onClick={methods.prevStep}
              className="back-button"
            >
              Back
            </button>
          )}
          
          {state.isLastStep ? (
            <button 
              type="submit"
              className="submit-button"
              disabled={!state.isFormValid}
            >
              Submit
            </button>
          ) : (
            <button 
              type="button"
              onClick={handleNext}
              className="next-button"
              disabled={!state.isCurrentStepValid}
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}`}
                              language="tsx"
                            />
                          </TabsContent>

                          <TabsContent value="vue" className="space-y-4">
                            <SyntaxHighlighter
                              code={`<script setup>
import { useUplink } from " @uplink-protocol/vue";
import { FormController } from "@uplink-protocol/form-controller";

// Define your form configuration with multiple steps
const formConfig = {
  steps: [
    {
      id: 'personal',
      title: 'Personal Info',
      fields: {
        firstName: {
          id: 'firstName',
          value: '',
          label: 'First Name',
          type: 'text',
          required: true,
        },
        lastName: {
          id: 'lastName',
          value: '',
          label: 'Last Name',
          type: 'text',
          required: true,
        },
        email: {
          id: 'email',
          value: '',
          label: 'Email Address',
          type: 'email',
          required: true,
          validation: {
            pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
          }
        },
      }
    },
    {
      id: 'address',
      title: 'Address',
      fields: {
        street: {
          id: 'street',
          value: '',
          label: 'Street Address',
          type: 'text',
          required: true,
        },
        city: {
          id: 'city',
          value: '',
          label: 'City',
          type: 'text',
          required: true,
        },
        zipCode: {
          id: 'zipCode',
          value: '',
          label: 'ZIP / Postal Code',
          type: 'text',
          required: true,
        }
      }
    },
    {
      id: 'review',
      title: 'Review',
      fields: {}
    }
  ]
};

// Initialize the form controller with useUplink
const { state, methods } = useUplink(
  () => FormController(formConfig),
  { trackBindings: "all" }
);

// Move to next step after validating current step
const handleNext = () => {
  const currentStepId = state.currentStep.id;
  const isValid = methods.validateStep(currentStepId);
  
  if (isValid) {
    methods.nextStep();
  }
};

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  const result = methods.submitForm();

  if (result.success) {
    console.log('Form data:', result.data);
    alert("Form submitted successfully!");
  } else {
    alert("Please fix the errors before submitting.");
  }
};

// Render current step fields
const renderReviewStep = () => {
  return JSON.stringify(methods.getFlatData(), null, 2);
};
</script>

<template>
  <div class="multi-step-form">
    <!-- Progress indicator -->
    <div class="progress-bar">
      <div 
        v-for="(step, index) in formConfig.steps"
        :key="step.id" 
        class="step"
        :class="{ active: index <= state.currentStepIndex }"
        @click="index < state.currentStepIndex && methods.goToStep(index)"
      >
        {{ step.title }}
      </div>
    </div>
    
    <form @submit="handleSubmit">
      <div class="step-content">
        <h2>{{ state.currentStep.title }}</h2>
        
        <!-- Review step -->
        <div v-if="state.currentStep.id === 'review'" class="review-summary">
          <h3>Review Your Information</h3>
          <pre>{{ renderReviewStep() }}</pre>
        </div>
        
        <!-- Field rendering for other steps -->
        <template v-else>
          <div 
            v-for="[fieldId, field] in Object.entries(state.currentStep.fields)" 
            :key="fieldId" 
            class="form-field"
          >
            <label>
              {{ field.label }} 
              <span v-if="field.required" class="required">*</span>
            </label>
            <input
              :type="field.type"
              :value="state.formData[state.currentStep.id]?.[fieldId] || ''"
              @input="(e) => methods.updateField(state.currentStep.id, fieldId, e.target.value)"
            />
            <div v-if="state.fieldErrors[state.currentStep.id]?.[fieldId]" class="error">
              {{ state.fieldErrors[state.currentStep.id][fieldId] }}
            </div>
          </div>
        </template>
      </div>
      
      <div class="form-navigation">
        <button 
          v-if="!state.isFirstStep"
          type="button" 
          @click="methods.prevStep"
          class="back-button"
        >
          Back
        </button>
        
        <button 
          v-if="state.isLastStep"
          type="submit"
          class="submit-button"
          :disabled="!state.isFormValid"
        >
          Submit
        </button>
        <button 
          v-else
          type="button"
          @click="handleNext"
          class="next-button"
          :disabled="!state.isCurrentStepValid"
        >
          Next
        </button>
      </div>
    </form>
  </div>
</template>`}
                              language="vue"
                            />
                          </TabsContent>

                          <TabsContent value="svelte" className="space-y-4">
                            <SyntaxHighlighter
                              code={`<script>
  import { useUplink } from " @uplink-protocol/svelte";
  import { FormController } from "@uplink-protocol/form-controller";

  // Define your form configuration with multiple steps
  const formConfig = {
    steps: [
      {
        id: 'personal',
        title: 'Personal Info',
        fields: {
          firstName: {
            id: 'firstName',
            value: '',
            label: 'First Name',
            type: 'text',
            required: true,
          },
          lastName: {
            id: 'lastName',
            value: '',
            label: 'Last Name',
            type: 'text',
            required: true,
          },
          email: {
            id: 'email',
            value: '',
            label: 'Email Address',
            type: 'email',
            required: true,
            validation: {
              pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
            }
          },
        }
      },
      {
        id: 'address',
        title: 'Address',
        fields: {
          street: {
            id: 'street',
            value: '',
            label: 'Street Address',
            type: 'text',
            required: true,
          },
          city: {
            id: 'city',
            value: '',
            label: 'City',
            type: 'text',
            required: true,
          },
          zipCode: {
            id: 'zipCode',
            value: '',
            label: 'ZIP / Postal Code',
            type: 'text',
            required: true,
          }
        }
      },
      {
        id: 'review',
        title: 'Review',
        fields: {}
      }
    ]
  };

  // Initialize the form controller with useUplink
  const { state, methods } = useUplink(
    () => FormController(formConfig),
    { trackBindings: "all" }
  );

  // Move to next step after validating current step
  const handleNext = () => {
    const currentStepId = $state.currentStep.id;
    const isValid = methods.validateStep(currentStepId);
    
    if (isValid) {
      methods.nextStep();
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = methods.submitForm();

    if (result.success) {
      console.log('Form data:', result.data);
      alert("Form submitted successfully!");
    } else {
      alert("Please fix the errors before submitting.");
    }
  };
</script>

<div class="multi-step-form">
  <!-- Progress indicator -->
  <div class="progress-bar">
    {#each formConfig.steps as step, index}
      <div 
        key={step.id} 
        class="step {index <= $state.currentStepIndex ? 'active' : ''}"
        on:click={() => index < $state.currentStepIndex && methods.goToStep(index)}
      >
        {step.title}
      </div>
    {/each}
  </div>
  
  <form on:submit={handleSubmit}>
    <div class="step-content">
      <h2>{$state.currentStep.title}</h2>
      
      <!-- Review step -->
      {#if $state.currentStep.id === 'review'}
        <div class="review-summary">
          <h3>Review Your Information</h3>
          <pre>{JSON.stringify(methods.getFlatData(), null, 2)}</pre>
        </div>
      
      <!-- Regular fields -->
      {:else}
        {#each Object.entries($state.currentStep.fields) as [fieldId, field]}
          <div class="form-field">
            <label>
              {field.label} {field.required && <span class="required">*</span>}
            </label>
            <input
              type={field.type}
              value={$state.formData[$state.currentStep.id]?.[fieldId] || ''}
              on:input={(e) => methods.updateField($state.currentStep.id, fieldId, e.target.value)}
            />
            {#if $state.fieldErrors[$state.currentStep.id]?.[fieldId]}
              <div class="error">
                {$state.fieldErrors[$state.currentStep.id][fieldId]}
              </div>
            {/if}
          </div>
        {/each}
      {/if}
    </div>
    
    <div class="form-navigation">
      {#if !$state.isFirstStep}
        <button 
          type="button" 
          on:click={methods.prevStep}
          class="back-button"
        >
          Back
        </button>
      {/if}
      
      {#if $state.isLastStep}
        <button 
          type="submit"
          class="submit-button"
          disabled={!$state.isFormValid}
        >
          Submit
        </button>
      {:else}
        <button 
          type="button"
          on:click={handleNext}
          class="next-button"
          disabled={!$state.isCurrentStepValid}
        >
          Next
        </button>
      {/if}
    </div>
  </form>
</div>`}
                              language="svelte"
                            />
                          </TabsContent>

                          <TabsContent value="vanilla" className="space-y-4">
                            <SyntaxHighlighter
                              code={`import { connectController } from " @uplink-protocol/core";
import { FormController } from "@uplink-protocol/form-controller";

// Define your form configuration with multiple steps
const formConfig = {
  steps: [
    {
      id: 'personal',
      title: 'Personal Info',
      fields: {
        firstName: {
          id: 'firstName',
          value: '',
          label: 'First Name',
          type: 'text',
          required: true,
        },
        lastName: {
          id: 'lastName',
          value: '',
          label: 'Last Name',
          type: 'text',
          required: true,
        },
        email: {
          id: 'email',
          value: '',
          label: 'Email Address',
          type: 'email',
          required: true,
          validation: {
            pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
          }
        },
      }
    },
    {
      id: 'address',
      title: 'Address',
      fields: {
        street: {
          id: 'street',
          value: '',
          label: 'Street Address',
          type: 'text',
          required: true,
        },
        city: {
          id: 'city',
          value: '',
          label: 'City',
          type: 'text',
          required: true,
        },
        zipCode: {
          id: 'zipCode',
          value: '',
          label: 'ZIP / Postal Code',
          type: 'text',
          required: true,
        }
      }
    },
    {
      id: 'review',
      title: 'Review',
      fields: {}
    }
  ]
};

// Create a controller instance
const controller = connectController(() => FormController(formConfig));

// DOM element references
const form = document.getElementById('multi-step-form');
const stepContent = document.getElementById('step-content');
const progressBar = document.getElementById('progress-bar');
const backButton = document.getElementById('back-button');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const stepTitle = document.getElementById('step-title');

// Move to next step after validating current step
const handleNext = () => {
  const state = controller.getState();
  const currentStepId = state.currentStep.id;
  const isValid = controller.methods.validateStep(currentStepId);
  
  if (isValid) {
    controller.methods.nextStep();
  }
};

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  const result = controller.methods.submitForm();

  if (result.success) {
    console.log('Form data:', result.data);
    alert("Form submitted successfully!");
  } else {
    alert("Please fix the errors before submitting.");
  }
};

// Render progress bar
function renderProgressBar(state) {
  progressBar.innerHTML = '';
  formConfig.steps.forEach((step, index) => {
    const stepEl = document.createElement('div');
    stepEl.className = \`step \${index <= state.currentStepIndex ? 'active' : ''}\`;
    stepEl.textContent = step.title;
    
    if (index < state.currentStepIndex) {
      stepEl.addEventListener('click', () => {
        controller.methods.goToStep(index);
      });
    }
    
    progressBar.appendChild(stepEl);
  });
}

// Render fields for current step
function renderFields(state) {
  const { currentStep } = state;
  stepContent.innerHTML = '';
  
  // Set the step title
  stepTitle.textContent = currentStep.title;
  
  // Show navigation buttons
  backButton.style.display = state.isFirstStep ? 'none' : 'inline-block';
  nextButton.style.display = state.isLastStep ? 'none' : 'inline-block';
  submitButton.style.display = state.isLastStep ? 'inline-block' : 'none';
  submitButton.disabled = !state.isFormValid;
  
  // On the review step, show a summary
  if (currentStep.id === 'review') {
    const summary = document.createElement('div');
    summary.className = 'review-summary';
    
    const heading = document.createElement('h3');
    heading.textContent = 'Review Your Information';
    
    const data = document.createElement('pre');
    data.textContent = JSON.stringify(controller.methods.getFlatData(), null, 2);
    
    summary.appendChild(heading);
    summary.appendChild(data);
    stepContent.appendChild(summary);
    
    return;
  }
  
  // For other steps, render the fields
  Object.entries(currentStep.fields).forEach(([fieldId, field]) => {
    const fieldWrapper = document.createElement('div');
    fieldWrapper.className = 'form-field';
    
    // Create label
    const label = document.createElement('label');
    label.textContent = field.label;
    
    if (field.required) {
      const requiredMark = document.createElement('span');
      requiredMark.className = 'required';
      requiredMark.textContent = '*';
      label.appendChild(requiredMark);
    }
    
    // Create input
    const input = document.createElement('input');
    input.type = field.type;
    input.value = state.formData[currentStep.id]?.[fieldId] || '';
    input.addEventListener('input', (e) => {
      controller.methods.updateField(currentStep.id, fieldId, e.target.value);
    });
    
    // Create error container
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.style.display = 'none';
    
    fieldWrapper.appendChild(label);
    fieldWrapper.appendChild(input);
    fieldWrapper.appendChild(errorDiv);
    stepContent.appendChild(fieldWrapper);
    
    // Update error display if there's an error
    if (state.fieldErrors[currentStep.id]?.[fieldId]) {
      errorDiv.textContent = state.fieldErrors[currentStep.id][fieldId];
      errorDiv.style.display = 'block';
    }
  });
}

// Listen for state changes
controller.subscribe((state) => {
  renderProgressBar(state);
  renderFields(state);
  
  // Update button states
  nextButton.disabled = !state.isCurrentStepValid;
  submitButton.disabled = !state.isFormValid;
});

// Setup event listeners
backButton.addEventListener('click', controller.methods.prevStep);
nextButton.addEventListener('click', handleNext);
form.addEventListener('submit', handleSubmit);

// Initial render
renderProgressBar(controller.getState());
renderFields(controller.getState());`}
                              language="js"
                            />
                          </TabsContent>
                        </Tabs>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Advanced Validation Tab */}
              <div className="space-y-6 hidden" id="advanced-validation" data-state="inactive" role="tabpanel">
                <Card className="overflow-hidden border-primary/10">
                  <CardContent className="p-6">                    <h3 className="text-2xl font-bold tracking-tight mb-4">Advanced Validation Example</h3>
                    <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 mb-6">
                      <h4 className="text-base font-medium text-purple-700 dark:text-purple-300 mb-1">Advanced example</h4>
                      <p className="text-muted-foreground">
                        A form showcasing custom validators and dynamic field validation rules. Demonstrates complex validation patterns like conditional requirements and field matching.
                      </p>
                    </div>

                    <AdvancedValidationForm />
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
                      <div className="mt-6">
                        <Tabs defaultValue="react" className="gap-0">
                          <TabsList className="w-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 rounded-lg p-1 mb-0">
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
                            <TabsTrigger value="vanilla" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm gap-2">
                              <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                              Vanilla JS
                            </TabsTrigger>
                          </TabsList>
                          <div className="flex items-center justify-between bg-primary/10 rounded-t-lg px-4 py-2 mt-2">
                            <h4 className="text-lg font-semibold">Code Snippet</h4>
                            <div className="text-xs text-muted-foreground">Advanced Validation Example</div>
                          </div>


                          <TabsContent value="react" className="space-y-4">
                            <SyntaxHighlighter
                              code={`import React, { useEffect } from "react";
import { useUplink } from " @uplink-protocol/react";
import { FormController } from "@uplink-protocol/form-controller";

// Typescript interfaces for the validator context
interface ValidationContext {
  field: {
    id: string;
    label: string;
    stepId: string;
    validation: {
      dynamicValidatorParams?: {
        dependsOn?: string;
        dependsOnValue?: unknown;
        matchField?: string;
        errorMessage?: string;
      };
    };
  };
  formData: {
    [stepId: string]: {
      [fieldId: string]: unknown;
    };
  };
}

function AdvancedValidationForm() {
  // Define your form configuration
  const formConfig = {
    steps: [
      {
        id: 'contact',
        title: 'Contact Information',
        fields: {
          name: {
            id: 'name',
            value: '',
            label: 'Full Name',
            type: 'text',
            required: true,
          },
          email: {
            id: 'email',
            value: '',
            label: 'Email Address',
            type: 'email',
            required: true,
            validation: {
              pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
            }
          },
          subscribe: {
            id: 'subscribe',
            value: false,
            label: 'Subscribe to newsletter',
            type: 'checkbox',
          },
          phoneNumber: {
            id: 'phoneNumber',
            value: '',
            label: 'Phone Number',
            type: 'tel',
            validation: {
              dynamicValidator: 'requiredIf',
              dynamicValidatorParams: {
                dependsOn: 'subscribe',
                dependsOnValue: true
              }
            }
          },
          password: {
            id: 'password',
            value: '',
            label: 'Password',
            type: 'password',
            required: true,
          },
          confirmPassword: {
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
          }
        }
      }
    ]
  };

  // Initialize the form controller with useUplink
  const { state, methods } = useUplink(
    () => FormController(formConfig),
    { trackBindings: "all" }
  );

  // Register custom validators
  useEffect(() => {
    // Register requiredIf validator
    methods.registerValidator('requiredIf', (value, context: ValidationContext) => {
      const { dynamicValidatorParams } = context.field.validation;
      const { dependsOn, dependsOnValue } = dynamicValidatorParams || {};
      
      if (dependsOn) {
        // Get the value of the field this field depends on
        const dependentValue = context.formData.contact[dependsOn];
        
        // Check if the condition is met
        if (dependentValue === dependsOnValue) {
          // Field is required
          if (!value) {
            return \`\${context.field.label} is required when subscribed\`;
          }
        }
      }
      
      return true; // validation passes
    });
    
    // Register equals validator
    methods.registerValidator('equals', (value, context: ValidationContext) => {
      const { dynamicValidatorParams } = context.field.validation;
      const { matchField, errorMessage } = dynamicValidatorParams || {};
      
      if (matchField) {
        const fieldToMatch = context.formData.contact[matchField];
        
        if (value !== fieldToMatch) {
          return errorMessage || \`\${context.field.label} must match \${matchField}\`;
        }
      }
      
      return true; // validation passes
    });
    
    // Cleanup validators when component unmounts
    return () => {
      methods.unregisterValidator('requiredIf');
      methods.unregisterValidator('equals');
    };
  }, [methods]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = methods.submitForm();

    if (result.success) {
      console.log('Form data:', result.data);
      alert("Form submitted successfully!");
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label>
          Full Name <span className="required">*</span>
        </label>
        <input
          type="text"
          value={state.formData.contact?.name || ''}
          onChange={(e) => methods.updateField('contact', 'name', e.target.value)}
        />
        {state.fieldErrors.contact?.name && (
          <div className="error">{state.fieldErrors.contact.name}</div>
        )}
      </div>

      <div className="form-field">
        <label>
          Email <span className="required">*</span>
        </label>
        <input
          type="email"
          value={state.formData.contact?.email || ''}
          onChange={(e) => methods.updateField('contact', 'email', e.target.value)}
        />
        {state.fieldErrors.contact?.email && (
          <div className="error">{state.fieldErrors.contact.email}</div>
        )}
      </div>

      <div className="form-field checkbox">
        <input
          type="checkbox"
          id="subscribe"
          checked={!!state.formData.contact?.subscribe}
          onChange={(e) => methods.updateField('contact', 'subscribe', e.target.checked)}
        />
        <label htmlFor="subscribe">Subscribe to newsletter</label>
      </div>

      {/* Phone number - conditionally required based on subscription */}
      <div className="form-field">
        <label>
          Phone Number {state.formData.contact?.subscribe && <span className="required">*</span>}
        </label>
        <input
          type="tel"
          value={state.formData.contact?.phoneNumber || ''}
          onChange={(e) => methods.updateField('contact', 'phoneNumber', e.target.value)}
        />
        {state.fieldErrors.contact?.phoneNumber && (
          <div className="error">{state.fieldErrors.contact.phoneNumber}</div>
        )}
      </div>

      <div className="form-field">
        <label>
          Password <span className="required">*</span>
        </label>
        <input
          type="password"
          value={state.formData.contact?.password || ''}
          onChange={(e) => methods.updateField('contact', 'password', e.target.value)}
        />
        {state.fieldErrors.contact?.password && (
          <div className="error">{state.fieldErrors.contact.password}</div>
        )}
      </div>

      <div className="form-field">
        <label>
          Confirm Password <span className="required">*</span>
        </label>
        <input
          type="password"
          value={state.formData.contact?.confirmPassword || ''}
          onChange={(e) => methods.updateField('contact', 'confirmPassword', e.target.value)}
        />
        {state.fieldErrors.contact?.confirmPassword && (
          <div className="error">{state.fieldErrors.contact.confirmPassword}</div>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}`}
                              language="tsx"
                            />
                          </TabsContent>

                          <TabsContent value="vue" className="space-y-4">
                            <SyntaxHighlighter
                              code={`<script setup>
import { useUplink } from " @uplink-protocol/vue";
import { FormController } from "@uplink-protocol/form-controller";
import { onMounted, onUnmounted } from 'vue';

// Define your form configuration
const formConfig = {
  steps: [
    {
      id: 'contact',
      title: 'Contact Information',
      fields: {
        name: {
          id: 'name',
          value: '',
          label: 'Full Name',
          type: 'text',
          required: true,
        },
        email: {
          id: 'email',
          value: '',
          label: 'Email Address',
          type: 'email',
          required: true,
          validation: {
            pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
          }
        },
        subscribe: {
          id: 'subscribe',
          value: false,
          label: 'Subscribe to newsletter',
          type: 'checkbox',
        },
        phoneNumber: {
          id: 'phoneNumber',
          value: '',
          label: 'Phone Number',
          type: 'tel',
          validation: {
            dynamicValidator: 'requiredIf',
            dynamicValidatorParams: {
              dependsOn: 'subscribe',
              dependsOnValue: true
            }
          }
        },
        password: {
          id: 'password',
          value: '',
          label: 'Password',
          type: 'password',
          required: true,
        },
        confirmPassword: {
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
        }
      }
    }
  ]
};

// Initialize the form controller with useUplink
const { state, methods } = useUplink(
  () => FormController(formConfig),
  { trackBindings: "all" }
);

// Register custom validators
onMounted(() => {
  // Register requiredIf validator
  methods.registerValidator('requiredIf', (value, context) => {
    const { dynamicValidatorParams } = context.field.validation;
    const { dependsOn, dependsOnValue } = dynamicValidatorParams || {};
    
    if (dependsOn) {
      // Get the value of the field this field depends on
      const dependentValue = context.formData.contact[dependsOn];
      
      // Check if the condition is met
      if (dependentValue === dependsOnValue) {
        // Field is required
        if (!value) {
          return \`\${context.field.label} is required when subscribed\`;
        }
      }
    }
    
    return true; // validation passes
  });
  
  // Register equals validator
  methods.registerValidator('equals', (value, context) => {
    const { dynamicValidatorParams } = context.field.validation;
    const { matchField, errorMessage } = dynamicValidatorParams || {};
    
    if (matchField) {
      const fieldToMatch = context.formData.contact[matchField];
      
      if (value !== fieldToMatch) {
        return errorMessage || \`\${context.field.label} must match \${matchField}\`;
      }
    }
    
    return true; // validation passes
  });
});

// Cleanup validators when component unmounts
onUnmounted(() => {
  methods.unregisterValidator('requiredIf');
  methods.unregisterValidator('equals');
});

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  const result = methods.submitForm();

  if (result.success) {
    console.log('Form data:', result.data);
    alert("Form submitted successfully!");
  } else {
    alert("Please fix the errors before submitting.");
  }
};
</script>

<template>
  <form @submit="handleSubmit">
    <div class="form-field">
      <label>
        Full Name <span class="required">*</span>
      </label>
      <input
        type="text"
        v-model="state.formData.contact?.name"
        @input="(e) => methods.updateField('contact', 'name', e.target.value)"
      />
      <div v-if="state.fieldErrors.contact?.name" class="error">
        {{ state.fieldErrors.contact.name }}
      </div>
    </div>

    <div class="form-field">
      <label>
        Email <span class="required">*</span>
      </label>
      <input
        type="email"
        v-model="state.formData.contact?.email"
        @input="(e) => methods.updateField('contact', 'email', e.target.value)"
      />
      <div v-if="state.fieldErrors.contact?.email" class="error">
        {{ state.fieldErrors.contact.email }}
      </div>
    </div>

    <div class="form-field checkbox">
      <input
        type="checkbox"
        id="subscribe"
        v-model="state.formData.contact?.subscribe"
        @change="(e) => methods.updateField('contact', 'subscribe', e.target.checked)"
      />
      <label for="subscribe">Subscribe to newsletter</label>
    </div>

    <!-- Phone number - conditionally required based on subscription -->
    <div class="form-field">
      <label>
        Phone Number <span v-if="state.formData.contact?.subscribe" class="required">*</span>
      </label>
      <input
        type="tel"
        v-model="state.formData.contact?.phoneNumber"
        @input="(e) => methods.updateField('contact', 'phoneNumber', e.target.value)"
      />
      <div v-if="state.fieldErrors.contact?.phoneNumber" class="error">
        {{ state.fieldErrors.contact.phoneNumber }}
      </div>
    </div>

    <div class="form-field">
      <label>
        Password <span class="required">*</span>
      </label>
      <input
        type="password"
        v-model="state.formData.contact?.password"
        @input="(e) => methods.updateField('contact', 'password', e.target.value)"
      />
      <div v-if="state.fieldErrors.contact?.password" class="error">
        {{ state.fieldErrors.contact.password }}
      </div>
    </div>

    <div class="form-field">
      <label>
        Confirm Password <span class="required">*</span>
      </label>
      <input
        type="password"
        v-model="state.formData.contact?.confirmPassword"
        @input="(e) => methods.updateField('contact', 'confirmPassword', e.target.value)"
      />
      <div v-if="state.fieldErrors.contact?.confirmPassword" class="error">
        {{ state.fieldErrors.contact.confirmPassword }}
      </div>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>`}
                              language="vue"
                            />
                          </TabsContent>

                          <TabsContent value="svelte" className="space-y-4">
                            <SyntaxHighlighter
                              code={`<script>
  import { useUplink } from " @uplink-protocol/svelte";
  import { FormController } from "@uplink-protocol/form-controller";
  import { onMount, onDestroy } from 'svelte';

  // Define your form configuration
  const formConfig = {
    steps: [
      {
        id: 'contact',
        title: 'Contact Information',
        fields: {
          name: {
            id: 'name',
            value: '',
            label: 'Full Name',
            type: 'text',
            required: true,
          },
          email: {
            id: 'email',
            value: '',
            label: 'Email Address',
            type: 'email',
            required: true,
            validation: {
              pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
            }
          },
          subscribe: {
            id: 'subscribe',
            value: false,
            label: 'Subscribe to newsletter',
            type: 'checkbox',
          },
          phoneNumber: {
            id: 'phoneNumber',
            value: '',
            label: 'Phone Number',
            type: 'tel',
            validation: {
              dynamicValidator: 'requiredIf',
              dynamicValidatorParams: {
                dependsOn: 'subscribe',
                dependsOnValue: true
              }
            }
          },
          password: {
            id: 'password',
            value: '',
            label: 'Password',
            type: 'password',
            required: true,
          },
          confirmPassword: {
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
          }
        }
      }
    ]
  };

  // Initialize the form controller with useUplink
  const { state, methods } = useUplink(
    () => FormController(formConfig),
    { trackBindings: "all" }
  );

  // Register custom validators
  onMount(() => {
    // Register requiredIf validator
    methods.registerValidator('requiredIf', (value, context) => {
      const { dynamicValidatorParams } = context.field.validation;
      const { dependsOn, dependsOnValue } = dynamicValidatorParams || {};
      
      if (dependsOn) {
        // Get the value of the field this field depends on
        const dependentValue = context.formData.contact[dependsOn];
        
        // Check if the condition is met
        if (dependentValue === dependsOnValue) {
          // Field is required
          if (!value) {
            return \`\${context.field.label} is required when subscribed\`;
          }
        }
      }
      
      return true; // validation passes
    });
    
    // Register equals validator
    methods.registerValidator('equals', (value, context) => {
      const { dynamicValidatorParams } = context.field.validation;
      const { matchField, errorMessage } = dynamicValidatorParams || {};
      
      if (matchField) {
        const fieldToMatch = context.formData.contact[matchField];
        
        if (value !== fieldToMatch) {
          return errorMessage || \`\${context.field.label} must match \${matchField}\`;
        }
      }
      
      return true; // validation passes
    });
  });

  // Cleanup validators when component unmounts
  onDestroy(() => {
    methods.unregisterValidator('requiredIf');
    methods.unregisterValidator('equals');
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = methods.submitForm();

    if (result.success) {
      console.log('Form data:', result.data);
      alert("Form submitted successfully!");
    } else {
      alert("Please fix the errors before submitting.");
    }
  };
</script>

<form on:submit={handleSubmit}>
  <div class="form-field">
    <label>
      Full Name <span class="required">*</span>
    </label>
    <input
      type="text"
      value={$state.formData.contact?.name || ''}
      on:input={(e) => methods.updateField('contact', 'name', e.target.value)}
    />
    {#if $state.fieldErrors.contact?.name}
      <div class="error">{$state.fieldErrors.contact.name}</div>
    {/if}
  </div>

  <div class="form-field">
    <label>
      Email <span class="required">*</span>
    </label>
    <input
      type="email"
      value={$state.formData.contact?.email || ''}
      on:input={(e) => methods.updateField('contact', 'email', e.target.value)}
    />
    {#if $state.fieldErrors.contact?.email}
      <div class="error">{$state.fieldErrors.contact.email}</div>
    {/if}
  </div>

  <div class="form-field checkbox">
    <input
      type="checkbox"
      id="subscribe"
      checked={!!$state.formData.contact?.subscribe}
      on:change={(e) => methods.updateField('contact', 'subscribe', e.target.checked)}
    />
    <label for="subscribe">Subscribe to newsletter</label>
  </div>

  <!-- Phone number - conditionally required based on subscription -->
  <div class="form-field">
    <label>
      Phone Number {#if $state.formData.contact?.subscribe}<span class="required">*</span>{/if}
    </label>
    <input
      type="tel"
      value={$state.formData.contact?.phoneNumber || ''}
      on:input={(e) => methods.updateField('contact', 'phoneNumber', e.target.value)}
    />
    {#if $state.fieldErrors.contact?.phoneNumber}
      <div class="error">{$state.fieldErrors.contact.phoneNumber}</div>
    {/if}
  </div>

  <div class="form-field">
    <label>
      Password <span class="required">*</span>
    </label>
    <input
      type="password"
      value={$state.formData.contact?.password || ''}
      on:input={(e) => methods.updateField('contact', 'password', e.target.value)}
    />
    {#if $state.fieldErrors.contact?.password}
      <div class="error">{$state.fieldErrors.contact.password}</div>
    {/if}
  </div>

  <div class="form-field">
    <label>
      Confirm Password <span class="required">*</span>
    </label>
    <input
      type="password"
      value={$state.formData.contact?.confirmPassword || ''}
      on:input={(e) => methods.updateField('contact', 'confirmPassword', e.target.value)}
    />
    {#if $state.fieldErrors.contact?.confirmPassword}
      <div class="error">{$state.fieldErrors.contact.confirmPassword}</div>
    {/if}
  </div>

  <button type="submit">Submit</button>
</form>`}
                              language="svelte"
                            />
                          </TabsContent>

                          <TabsContent value="vanilla" className="space-y-4">
                            <SyntaxHighlighter
                              code={`import { connectController } from " @uplink-protocol/core";
import { FormController } from "@uplink-protocol/form-controller";

// Define your form configuration
const formConfig = {
  steps: [
    {
      id: 'contact',
      title: 'Contact Information',
      fields: {
        name: {
          id: 'name',
          value: '',
          label: 'Full Name',
          type: 'text',
          required: true,
        },
        email: {
          id: 'email',
          value: '',
          label: 'Email Address',
          type: 'email',
          required: true,
          validation: {
            pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
          }
        },
        subscribe: {
          id: 'subscribe',
          value: false,
          label: 'Subscribe to newsletter',
          type: 'checkbox',
        },
        phoneNumber: {
          id: 'phoneNumber',
          value: '',
          label: 'Phone Number',
          type: 'tel',
          validation: {
            dynamicValidator: 'requiredIf',
            dynamicValidatorParams: {
              dependsOn: 'subscribe',
              dependsOnValue: true
            }
          }
        },
        password: {
          id: 'password',
          value: '',
          label: 'Password',
          type: 'password',
          required: true,
        },
        confirmPassword: {
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
        }
      }
    }
  ]
};

// Create a controller instance
const controller = connectController(() => FormController(formConfig));

// Get DOM elements
const form = document.getElementById('validation-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subscribeCheckbox = document.getElementById('subscribe');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit');

// Error elements
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

// Register custom validators
// Register requiredIf validator
controller.methods.registerValidator('requiredIf', (value, context) => {
  const { dynamicValidatorParams } = context.field.validation;
  const { dependsOn, dependsOnValue } = dynamicValidatorParams || {};
  
  if (dependsOn) {
    // Get the value of the field this field depends on
    const dependentValue = context.formData.contact[dependsOn];
    
    // Check if the condition is met
    if (dependentValue === dependsOnValue) {
      // Field is required
      if (!value) {
        return \`\${context.field.label} is required when subscribed\`;
      }
    }
  }
  
  return true; // validation passes
});

// Register equals validator
controller.methods.registerValidator('equals', (value, context) => {
  const { dynamicValidatorParams } = context.field.validation;
  const { matchField, errorMessage } = dynamicValidatorParams || {};
  
  if (matchField) {
    const fieldToMatch = context.formData.contact[matchField];
    
    if (value !== fieldToMatch) {
      return errorMessage || \`\${context.field.label} must match \${matchField}\`;
    }
  }
  
  return true; // validation passes
});

// Listen for state changes
controller.subscribe((state) => {
  // Update inputs with current values
  nameInput.value = state.formData.contact?.name || '';
  emailInput.value = state.formData.contact?.email || '';
  subscribeCheckbox.checked = !!state.formData.contact?.subscribe;
  phoneInput.value = state.formData.contact?.phoneNumber || '';
  passwordInput.value = state.formData.contact?.password || '';
  confirmPasswordInput.value = state.formData.contact?.confirmPassword || '';
  
  // Update phone required indicator
  document.getElementById('phone-required').style.display = 
    state.formData.contact?.subscribe ? 'inline' : 'none';
  
  // Update error messages
  nameError.textContent = state.fieldErrors.contact?.name || '';
  nameError.style.display = state.fieldErrors.contact?.name ? 'block' : 'none';
  
  emailError.textContent = state.fieldErrors.contact?.email || '';
  emailError.style.display = state.fieldErrors.contact?.email ? 'block' : 'none';
  
  phoneError.textContent = state.fieldErrors.contact?.phoneNumber || '';
  phoneError.style.display = state.fieldErrors.contact?.phoneNumber ? 'block' : 'none';
  
  passwordError.textContent = state.fieldErrors.contact?.password || '';
  passwordError.style.display = state.fieldErrors.contact?.password ? 'block' : 'none';
  
  confirmPasswordError.textContent = state.fieldErrors.contact?.confirmPassword || '';
  confirmPasswordError.style.display = state.fieldErrors.contact?.confirmPassword ? 'block' : 'none';
});

// Setup input change handlers
nameInput.addEventListener('input', (e) => {
  controller.methods.updateField('contact', 'name', e.target.value);
});

emailInput.addEventListener('input', (e) => {
  controller.methods.updateField('contact', 'email', e.target.value);
});

subscribeCheckbox.addEventListener('change', (e) => {
  controller.methods.updateField('contact', 'subscribe', e.target.checked);
});

phoneInput.addEventListener('input', (e) => {
  controller.methods.updateField('contact', 'phoneNumber', e.target.value);
});

passwordInput.addEventListener('input', (e) => {
  controller.methods.updateField('contact', 'password', e.target.value);
});

confirmPasswordInput.addEventListener('input', (e) => {
  controller.methods.updateField('contact', 'confirmPassword', e.target.value);
});

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const result = controller.methods.submitForm();

  if (result.success) {
    console.log('Form data:', result.data);
    alert("Form submitted successfully!");
  } else {
    alert("Please fix the errors before submitting.");
  }
});

// Cleanup when page is unloaded
window.addEventListener('unload', () => {
  controller.methods.unregisterValidator('requiredIf');
  controller.methods.unregisterValidator('equals');
});`}
                              language="js"
                            />
                          </TabsContent>
                        </Tabs>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
      </div >
    </main >
  )
}
