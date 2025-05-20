'use client'

import { Card, CardContent } from "@/components/ui/card"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Basics() {
  return (
    <div className="space-y-6">
      <h2 id="basics" className="text-3xl font-bold tracking-tight">Form Controller Basics</h2>
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
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Form Configuration Overview</h3>
        <Card>
          <CardContent className="p-0 rounded-xl overflow-hidden">
            <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
              <div className="flex items-center space-x-2">
                <span className="bg-blue-500 w-3 h-3 rounded-full"></span>
                <span className="text-zinc-400">basic-form-config.ts</span>
              </div>
            </div>
            <SyntaxHighlighter
              code={`import { FormController, FormConfig } from '@uplink-protocol/form-controller';

// Create a form configuration
const formConfig: FormConfig = {
  steps: [
    {
      id: 'personal',         // Unique step identifier
      title: 'Personal Info', // Display title for the step
      fields: {
        name: {
          id: 'name',        // Unique field identifier
          type: 'text',      // Input field type
          label: 'Full Name',// Display label
          required: true,    // Field is required
          value: ''          // Initial value
        },
        email: {
          id: 'email',
          type: 'email',
          label: 'Email Address',
          required: true,
          validation: {
            pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
            errorMessage: 'Please enter a valid email address'
          }
        }
      }
    },
    // Additional steps as needed
  ]
};

// Initialize the form controller
const form = FormController(formConfig);`}
              language="ts"
            />
          </CardContent>
        </Card>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4 mt-8">
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
        <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800/50 mt-8">
        <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Framework Integrations</h3>
        <p className="text-muted-foreground mb-4">
          Form Controller is designed to be framework-agnostic, with dedicated binding packages for popular frameworks:
        </p>
        
        <Tabs defaultValue="react" className="mt-4">
          <TabsList className="w-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 rounded-lg p-1 mb-4">
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

          <TabsContent value="react" className="space-y-4">
            <Card>
              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                  <span className="text-zinc-400">react</span>
                </div>                
                <SyntaxHighlighter
                  code={`import { useUplink } from "@uplink-protocol/react";
import { FormController } from "@uplink-protocol/form-controller";

function MyForm() {
  const { state, methods } = useUplink(
    () => FormController({
      steps: [
        {
          id: 'personal',
          fields: {
            name: { id: 'name', type: 'text', required: true },
            email: { id: 'email', type: 'email', required: true }
          }
        }
      ]
    }),
    { trackBindings: "all" }
  );
  
  return (
    <form onSubmit={(e) => { e.preventDefault(); methods.submitForm(); }}>
      <input 
        type="text" 
        value={state.formData.personal?.name || ""} 
        onChange={(e) => methods.updateField("personal", "name", e.target.value)}
      />
      <input 
        type="email" 
        value={state.formData.personal?.email || ""} 
        onChange={(e) => methods.updateField("personal", "email", e.target.value)}
      />
      />
      <button type="submit">Submit</button>
    </form>
  );`}
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
                </div>                <SyntaxHighlighter
                  code={`<script setup>
import { useUplinkController } from "@uplink-protocol/vue";
import { FormController } from "@uplink-protocol/form-controller";

const { state, methods } = useUplinkController(
  FormController({
    // Form configuration
    steps: [
      {
        id: 'personal',
        fields: {
          name: { id: 'name', type: 'text', required: true },
          email: { id: 'email', type: 'email', required: true }
        }
      }
    ]
  }),
  { trackBindings: "all" }
);

function handleSubmit() {
  methods.submit();
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input 
      type="text" 
      v-model="state.values.name" 
    />
    <input 
      type="email" 
      v-model="state.values.email"
    />
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
                </div>                <SyntaxHighlighter
                  code={`<script>
  import { useUplinkController } from "@uplink-protocol/svelte";
  import { FormController } from "@uplink-protocol/form-controller";

  const { state, methods } = useUplinkController(
    FormController({
      // Form configuration
      steps: [
        {
          id: 'personal',
          fields: {
            name: { id: 'name', type: 'text', required: true },
            email: { id: 'email', type: 'email', required: true }
          }
        }
      ]
    }),
    { trackBindings: "all" }
  );

  function handleSubmit() {
    methods.submit();
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input 
    type="text" 
    bind:value={$state.values.name}
  />
  <input 
    type="email" 
    bind:value={$state.values.email}
  />
  <button type="submit">Submit</button>
</form>`}
                  language="svelte"
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vanilla" className="space-y-4">
            <Card>
              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                  <span className="text-zinc-400">javascript</span>
                </div>
                <SyntaxHighlighter
                  code={`import { FormController } from "@uplink-protocol/form-controller";

// Define form configuration
const formConfig = {
  steps: [
    {
      id: 'personal',
      fields: {
        name: { id: 'name', type: 'text', required: true },
        email: { id: 'email', type: 'email', required: true }
      }
    }
  ]
};

// Initialize the form controller
const form = FormController(formConfig);

// Subscribe to form data changes
form.bindings.formData.subscribe((data) => {
  document.querySelector('#name-input').value = data.personal?.name || '';
  document.querySelector('#email-input').value = data.personal?.email || '';
});

// Subscribe to validation errors
form.bindings.fieldErrors.subscribe((errors) => {
  const nameError = document.querySelector('#name-error');
  if (nameError) {
    nameError.textContent = errors.personal?.name || '';
  }
  
  const emailError = document.querySelector('#email-error');
  if (emailError) {
    emailError.textContent = errors.personal?.email || '';
  }
});

// Setup UI interactions
document.querySelector('#submit-btn').addEventListener('click', (e) => {
  e.preventDefault();
  if (form.methods.validateForm(true)) {
    const formData = form.methods.getFlatData();
    console.log('Form data:', formData);
  }
});

document.querySelector('#name-input').addEventListener('input', (e) => {
  form.methods.updateField('personal', 'name', e.target.value);
});

document.querySelector('#email-input').addEventListener('input', (e) => {
  form.methods.updateField('personal', 'email', e.target.value);
});`}
                  language="js"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
