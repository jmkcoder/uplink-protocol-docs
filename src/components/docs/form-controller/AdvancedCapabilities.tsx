'use client'

import { Card, CardContent } from "@/components/ui/card"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AdvancedCapabilities() {
  return (
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
      <div className="space-y-4 pt-6">        <h3 className="text-2xl font-bold">Conditional Logic & Dynamic Fields</h3>
        <p className="text-muted-foreground">
          Form Controller offers a powerful system for creating forms that adapt to user input. You can show or hide fields, make them required, or apply specific validation rules based on the values of other fields. This enables you to build intuitive, responsive forms that guide users through complex processes.
        </p>
        
        <Tabs defaultValue="react" className="mt-6">
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
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                  <span className="text-zinc-400">react-conditional-fields.tsx</span>
                </div>
                <SyntaxHighlighter
                  code={`import React, { useEffect } from 'react';
import { useUplinkController } from "@uplink-protocol/react";
import { FormController } from "@uplink-protocol/form-controller";

function ConditionalForm() {
  const { state, methods } = useUplinkController(FormController({
    steps: [
      {
        id: 'contact',
        fields: {
          subscribe: {
            id: 'subscribe',
            type: 'checkbox',
            label: 'Subscribe to newsletter',
            value: false
          },
          phoneNumber: {
            id: 'phoneNumber',
            type: 'tel',
            label: 'Phone Number',
            value: ''
          }
        }
      }
    ]
  }), { trackBindings: "all" });

  // Register conditional validator
  useEffect(() => {
    methods.registerValidator('requiredIf', (value, context) => {
      const { dependsOn, dependsOnValue, errorMessage } = 
        context.field.validation.dynamicValidatorParams || {};
      
      if (!dependsOn) return true;
      
      const stepId = context.field.stepId;
      const dependentValue = context.formData[stepId][dependsOn];
      
      if (dependentValue === dependsOnValue && (!value || value.trim() === '')) {
        return errorMessage || 'This field is conditionally required';
      }
      
      return true;
    });

    // Apply validator to phone number field
    methods.extendField('contact', 'phoneNumber', {
      validation: {
        dynamicValidator: 'requiredIf',
        dynamicValidatorParams: {
          dependsOn: 'subscribe',
          dependsOnValue: true,
          errorMessage: 'Phone number is required when subscribing'
        }
      }
    });

    // Cleanup on unmount
    return () => {
      methods.unregisterValidator('requiredIf');
    };
  }, [methods]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.isFormValid) {
      console.log('Form submitted:', state.formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={state.values.subscribe || false}
            onChange={(e) => methods.setValue('subscribe', e.target.checked)}
          />
          {' '}Subscribe to newsletter
        </label>
      </div>
      
      {state.values.subscribe && (
        <div className="form-group">
          <label>
            Phone Number:
            <input
              type="tel"
              value={state.values.phoneNumber || ''}
              onChange={(e) => methods.setValue('phoneNumber', e.target.value)}
              onBlur={() => methods.touchField('phoneNumber')}
              className={state.fieldErrors.phoneNumber ? 'border-red-500' : ''}
            />
          </label>
          {state.fieldErrors.phoneNumber && (
            <div className="text-red-500">{state.fieldErrors.phoneNumber}</div>
          )}
        </div>
      )}
      
      <button type="submit" disabled={!state.isFormValid}>
        Submit
      </button>
    </form>
  );
}`}
                  language="tsx"
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="vue" className="space-y-4">
            <Card>
              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                  <span className="text-zinc-400">vue-conditional-fields.vue</span>
                </div>
                <SyntaxHighlighter
                  code={`<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label>
        <input
          type="checkbox"
          v-model="state.values.subscribe"
        />
        Subscribe to newsletter
      </label>
    </div>
    
    <div v-if="state.values.subscribe" class="form-group">
      <label>
        Phone Number:
        <input
          type="tel"
          v-model="state.values.phoneNumber"
          @blur="methods.touchField('phoneNumber')"
          :class="{ 'border-red-500': state.fieldErrors.phoneNumber }"
        />
      </label>
      <div v-if="state.fieldErrors.phoneNumber" class="text-red-500">
        {{ state.fieldErrors.phoneNumber }}
      </div>
    </div>
    
    <button type="submit" :disabled="!state.isFormValid">
      Submit
    </button>
  </form>
</template>

<script setup>
import { useUplinkController } from "@uplink-protocol/vue";
import { FormController } from "@uplink-protocol/form-controller";
import { onMounted, onUnmounted } from 'vue';

const { state, methods } = useUplinkController(FormController({
  steps: [
    {
      id: 'contact',
      fields: {
        subscribe: {
          id: 'subscribe',
          type: 'checkbox',
          label: 'Subscribe to newsletter',
          value: false
        },
        phoneNumber: {
          id: 'phoneNumber',
          type: 'tel',
          label: 'Phone Number',
          value: ''
        }
      }
    }
  ]
}), { trackBindings: "all" });

// Register conditional validator
onMounted(() => {
  methods.registerValidator('requiredIf', (value, context) => {
    const { dependsOn, dependsOnValue, errorMessage } = 
      context.field.validation.dynamicValidatorParams || {};
    
    if (!dependsOn) return true;
    
    const stepId = context.field.stepId;
    const dependentValue = context.formData[stepId][dependsOn];
    
    if (dependentValue === dependsOnValue && (!value || value.trim() === '')) {
      return errorMessage || 'This field is conditionally required';
    }
    
    return true;
  });

  // Apply validator to phone number field
  methods.extendField('contact', 'phoneNumber', {
    validation: {
      dynamicValidator: 'requiredIf',
      dynamicValidatorParams: {
        dependsOn: 'subscribe',
        dependsOnValue: true,
        errorMessage: 'Phone number is required when subscribing'
      }
    }
  });
});

// Cleanup on unmount
onUnmounted(() => {
  methods.unregisterValidator('requiredIf');
});

const handleSubmit = () => {
  if (state.isFormValid) {
    console.log('Form submitted:', state.formData);
  }
};
</script>`}
                  language="vue"
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="svelte" className="space-y-4">
            <Card>
              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                  <span className="text-zinc-400">svelte-conditional-fields.svelte</span>
                </div>
                <SyntaxHighlighter
                  code={`<script>
  import { useUplinkController } from "@uplink-protocol/svelte";
  import { FormController } from "@uplink-protocol/form-controller";
  import { onMount, onDestroy } from 'svelte';

  const { state, methods } = useUplinkController(FormController({
    steps: [
      {
        id: 'contact',
        fields: {
          subscribe: {
            id: 'subscribe',
            type: 'checkbox',
            label: 'Subscribe to newsletter',
            value: false
          },
          phoneNumber: {
            id: 'phoneNumber',
            type: 'tel',
            label: 'Phone Number',
            value: ''
          }
        }
      }
    ]
  }), { trackBindings: "all" });

  // Register conditional validator
  onMount(() => {
    methods.registerValidator('requiredIf', (value, context) => {
      const { dependsOn, dependsOnValue, errorMessage } = 
        context.field.validation.dynamicValidatorParams || {};
      
      if (!dependsOn) return true;
      
      const stepId = context.field.stepId;
      const dependentValue = context.formData[stepId][dependsOn];
      
      if (dependentValue === dependsOnValue && (!value || value.trim() === '')) {
        return errorMessage || 'This field is conditionally required';
      }
      
      return true;
    });

    // Apply validator to phone number field
    methods.extendField('contact', 'phoneNumber', {
      validation: {
        dynamicValidator: 'requiredIf',
        dynamicValidatorParams: {
          dependsOn: 'subscribe',
          dependsOnValue: true,
          errorMessage: 'Phone number is required when subscribing'
        }
      }
    });
  });

  // Cleanup on unmount
  onDestroy(() => {
    methods.unregisterValidator('requiredIf');
  });

  function handleSubmit() {
    if ($state.isFormValid) {
      console.log('Form submitted:', $state.formData);
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-group">
    <label>
      <input
        type="checkbox"
        bind:checked={$state.values.subscribe}
      />
      Subscribe to newsletter
    </label>
  </div>
  
  {#if $state.values.subscribe}
    <div class="form-group">
      <label>
        Phone Number:
        <input
          type="tel"
          bind:value={$state.values.phoneNumber}
          on:blur={() => methods.touchField('phoneNumber')}
          class={$state.fieldErrors.phoneNumber ? 'border-red-500' : ''}
        />
      </label>
      {#if $state.fieldErrors.phoneNumber}
        <div class="text-red-500">{$state.fieldErrors.phoneNumber}</div>
      {/if}
    </div>
  {/if}
  
  <button type="submit" disabled={!$state.isFormValid}>
    Submit
  </button>
</form>`}
                  language="svelte"
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="vanilla" className="space-y-4">
            <Card>
              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                  <span className="text-zinc-400">vanilla-conditional-fields.js</span>
                </div>
                <SyntaxHighlighter
                  code={`
import { FormController } from "@uplink-protocol/form-controller";

// Initialize the form controller
const form = (FormController({
  steps: [
    {
      id: 'contact',
      fields: {
        subscribe: {
          id: 'subscribe',
          type: 'checkbox',
          label: 'Subscribe to newsletter',
          value: false
        },
        phoneNumber: {
          id: 'phoneNumber',
          type: 'tel',
          label: 'Phone Number',
          value: \'\'
        }
      }
    }
  ]
}), { trackBindings: "all" });

// Register conditional validator
form.methods.registerValidator('requiredIf', (value, context) => {
  const { dependsOn, dependsOnValue, errorMessage } = 
    context.field.validation.dynamicValidatorParams || {};
  
  if (!dependsOn) return true;
  
  const stepId = context.field.stepId;
  const dependentValue = context.formData[stepId][dependsOn];
  
  if (dependentValue === dependsOnValue && (!value || value.trim() === '')) {
    return errorMessage || 'This field is conditionally required';
  }
  
  return true;
});

// Apply validator to phone number field
form.methods.extendField('contact', 'phoneNumber', {
  validation: {
    dynamicValidator: 'requiredIf',
    dynamicValidatorParams: {
      dependsOn: 'subscribe',
      dependsOnValue: true,
      errorMessage: 'Phone number is required when subscribing'
    }
  }
});

// DOM elements
const subscribeCheckbox = document.getElementById('subscribe');
const phoneNumberContainer = document.getElementById('phone-container');
const phoneNumberInput = document.getElementById('phone');
const phoneNumberError = document.getElementById('phone-error');
const submitButton = document.getElementById('submit-button');

// Setup event listeners
subscribeCheckbox.addEventListener('change', (e) => {
  form.methods.setValue('subscribe', e.target.checked);
  
  // Show/hide phone field based on checkbox state
  phoneNumberContainer.style.display = e.target.checked ? 'block' : 'none';
});

phoneNumberInput.addEventListener('input', (e) => {
  form.methods.setValue('phoneNumber', e.target.value);
});

phoneNumberInput.addEventListener('blur', () => {
  form.methods.touchField('phoneNumber');
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (form.state.isFormValid.value) {
    console.log('Form submitted:', form.state.formData.value);
  }
});

// Subscribe to form state changes
form.subscribe((state) => {
  // Update UI based on state changes
  subscribeCheckbox.checked = state.values.subscribe || false;
  phoneNumberContainer.style.display = state.values.subscribe ? 'block' : 'none';
  phoneNumberInput.value = state.values.phoneNumber || '';
  
  // Update error message
  phoneNumberError.textContent = state.fieldErrors.phoneNumber || '';
  phoneNumberError.style.display = state.fieldErrors.phoneNumber ? 'block' : 'none';
  
  // Update button state
  submitButton.disabled = !state.isFormValid;
});

// Cleanup when no longer needed
window.addEventListener('unload', () => {
  form.methods.unregisterValidator('requiredIf');
});`}
                  language="js"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-lg mt-4">
          <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Implementation Tips</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-medium text-blue-700 dark:text-blue-400">•</span>
              <span>Always handle both UI rendering  validation logic for conditional fields</span>
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
        
        <Tabs defaultValue="react" className="mt-6">
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
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                  <span className="text-zinc-400">react-cross-field-validation.tsx</span>
                </div>
                <SyntaxHighlighter
                  code={`import React, { useEffect } from 'react';
import { useUplinkController } from "@uplink-protocol/react";
import { FormController } from "@uplink-protocol/form-controller";

function PasswordForm() {
  const { state, methods } = useUplinkController(FormController({
    steps: [
      {
        id: 'credentials',
        fields: {
          password: {
            id: 'password',
            type: 'password',
            label: 'Password',
            value: '',
            required: true
          },
          confirmPassword: {
            id: 'confirmPassword',
            type: 'password',
            label: 'Confirm Password',
            value: '',
            required: true
          }
        }
      }
    ]
  }), { trackBindings: "all" });

  // Register a custom dynamic validator for password matching
  useEffect(() => {
    methods.registerValidator('equals', (value, context) => {
      const { matchField } = context.field.validation.dynamicValidatorParams || {};
      const stepId = context.field.stepId;
      
      if (!matchField) return true;
      
      const targetValue = context.formData[stepId][matchField];
      return value === targetValue || 'Fields must match';
    });

    // Apply validator to confirm password field
    methods.extendField('credentials', 'confirmPassword', {
      validation: {
        dynamicValidator: 'equals',
        dynamicValidatorParams: {
          matchField: 'password',
          errorMessage: 'Passwords must match'
        }
      }
    });

    // Cleanup on unmount
    return () => {
      methods.unregisterValidator('equals');
    };
  }, [methods]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.isFormValid) {
      console.log('Form submitted:', state.formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Password:
          <input
            type="password"
            value={state.values.password || ''}
            onChange={(e) => methods.setValue('password', e.target.value)}
            onBlur={() => methods.touchField('password')}
            className={state.fieldErrors.password ? 'border-red-500' : ''}
          />
        </label>
        {state.fieldErrors.password && (
          <div className="text-red-500">{state.fieldErrors.password}</div>
        )}
      </div>
      
      <div className="form-group">
        <label>
          Confirm Password:
          <input
            type="password"
            value={state.values.confirmPassword || ''}
            onChange={(e) => methods.setValue('confirmPassword', e.target.value)}
            onBlur={() => methods.touchField('confirmPassword')}
            className={state.fieldErrors.confirmPassword ? 'border-red-500' : ''}
          />
        </label>
        {state.fieldErrors.confirmPassword && (
          <div className="text-red-500">{state.fieldErrors.confirmPassword}</div>
        )}
      </div>
      
      <button type="submit" disabled={!state.isFormValid}>
        Submit
      </button>
    </form>
  );
}`}
                  language="tsx"
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="vue" className="space-y-4">
            <Card>
              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                  <span className="text-zinc-400">vue-cross-field-validation.vue</span>
                </div>
                <SyntaxHighlighter
                  code={`<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label>
        Password:
        <input
          type="password"
          v-model="state.values.password"
          @blur="methods.touchField('password')"
          :class="{ 'border-red-500': state.fieldErrors.password }"
        />
      </label>
      <div v-if="state.fieldErrors.password" class="text-red-500">
        {{ state.fieldErrors.password }}
      </div>
    </div>
    
    <div class="form-group">
      <label>
        Confirm Password:
        <input
          type="password"
          v-model="state.values.confirmPassword"
          @blur="methods.touchField('confirmPassword')"
          :class="{ 'border-red-500': state.fieldErrors.confirmPassword }"
        />
      </label>
      <div v-if="state.fieldErrors.confirmPassword" class="text-red-500">
        {{ state.fieldErrors.confirmPassword }}
      </div>
    </div>
    
    <button type="submit" :disabled="!state.isFormValid">
      Submit
    </button>
  </form>
</template>

<script setup>
import { useUplinkController } from "@uplink-protocol/vue";
import { FormController } from "@uplink-protocol/form-controller";
import { onMounted, onUnmounted } from 'vue';

const { state, methods } = useUplinkController(FormController({
  steps: [
    {
      id: 'credentials',
      fields: {
        password: {
          id: 'password',
          type: 'password',
          label: 'Password',
          value: '',
          required: true
        },
        confirmPassword: {
          id: 'confirmPassword',
          type: 'password',
          label: 'Confirm Password',
          value: '',
          required: true
        }
      }
    }
  ]
}), { trackBindings: "all" });

// Register a custom dynamic validator for password matching
onMounted(() => {
  methods.registerValidator('equals', (value, context) => {
    const { matchField } = context.field.validation.dynamicValidatorParams || {};
    const stepId = context.field.stepId;
    
    if (!matchField) return true;
    
    const targetValue = context.formData[stepId][matchField];
    return value === targetValue || 'Fields must match';
  });

  // Apply validator to confirm password field
  methods.extendField('credentials', 'confirmPassword', {
    validation: {
      dynamicValidator: 'equals',
      dynamicValidatorParams: {
        matchField: 'password',
        errorMessage: 'Passwords must match'
      }
    }
  });
});

// Cleanup on unmount
onUnmounted(() => {
  methods.unregisterValidator('equals');
});

const handleSubmit = () => {
  if (state.isFormValid) {
    console.log('Form submitted:', state.formData);
  }
};
</script>`}
                  language="vue"
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="svelte" className="space-y-4">
            <Card>
              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                  <span className="text-zinc-400">svelte-cross-field-validation.svelte</span>
                </div>
                <SyntaxHighlighter
                  code={`<script>
  import { useUplinkController } from "@uplink-protocol/svelte";
  import { FormController } from "@uplink-protocol/form-controller";
  import { onMount, onDestroy } from 'svelte';

  const { state, methods } = useUplinkController(FormController({
    steps: [
      {
        id: 'credentials',
        fields: {
          password: {
            id: 'password',
            type: 'password',
            label: 'Password',
            value: '',
            required: true
          },
          confirmPassword: {
            id: 'confirmPassword',
            type: 'password',
            label: 'Confirm Password',
            value: '',
            required: true
          }
        }
      }
    ]
  }), { trackBindings: "all" });

  // Register a custom dynamic validator for password matching
  onMount(() => {
    methods.registerValidator('equals', (value, context) => {
      const { matchField } = context.field.validation.dynamicValidatorParams || {};
      const stepId = context.field.stepId;
      
      if (!matchField) return true;
      
      const targetValue = context.formData[stepId][matchField];
      return value === targetValue || 'Fields must match';
    });

    // Apply validator to confirm password field
    methods.extendField('credentials', 'confirmPassword', {
      validation: {
        dynamicValidator: 'equals',
        dynamicValidatorParams: {
          matchField: 'password',
          errorMessage: 'Passwords must match'
        }
      }
    });
  });

  // Cleanup on unmount
  onDestroy(() => {
    methods.unregisterValidator('equals');
  });

  function handleSubmit() {
    if ($state.isFormValid) {
      console.log('Form submitted:', $state.formData);
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-group">
    <label>
      Password:
      <input
        type="password"
        bind:value={$state.values.password}
        on:blur={() => methods.touchField('password')}
        class={$state.fieldErrors.password ? 'border-red-500' : ''}
      />
    </label>
    {#if $state.fieldErrors.password}
      <div class="text-red-500">{$state.fieldErrors.password}</div>
    {/if}
  </div>
  
  <div class="form-group">
    <label>
      Confirm Password:
      <input
        type="password"
        bind:value={$state.values.confirmPassword}
        on:blur={() => methods.touchField('confirmPassword')}
        class={$state.fieldErrors.confirmPassword ? 'border-red-500' : ''}
      />
    </label>
    {#if $state.fieldErrors.confirmPassword}
      <div class="text-red-500">{$state.fieldErrors.confirmPassword}</div>
    {/if}
  </div>
  
  <button type="submit" disabled={!$state.isFormValid}>
    Submit
  </button>
</form>`}
                  language="svelte"
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="vanilla" className="space-y-4">
            <Card>
              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                  <span className="text-zinc-400">vanilla-cross-field-validation.js</span>
                </div>
                <SyntaxHighlighter
                  code={`
import { FormController } from "@uplink-protocol/form-controller";

// Initialize the form controller
const form = (FormController({
  steps: [
    {
      id: 'credentials',
      fields: {
        password: {
          id: 'password',
          type: 'password',
          label: 'Password',
          value: '',
          required: true
        },
        confirmPassword: {
          id: 'confirmPassword',
          type: 'password',
          label: 'Confirm Password',
          value: '',
          required: true
        }
      }
    }
  ]
}), { trackBindings: "all" });

// Register a custom dynamic validator for password matching
form.methods.registerValidator('equals', (value, context) => {
  const { matchField } = context.field.validation.dynamicValidatorParams || {};
  const stepId = context.field.stepId;
  
  if (!matchField) return true;
  
  const targetValue = context.formData[stepId][matchField];
  return value === targetValue || 'Fields must match';
});

// Apply validator to confirm password field
form.methods.extendField('credentials', 'confirmPassword', {
  validation: {
    dynamicValidator: 'equals',
    dynamicValidatorParams: {
      matchField: 'password',
      errorMessage: 'Passwords must match'
    }
  }
});

// DOM elements
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const submitButton = document.getElementById('submit-button');

// Setup event listeners
passwordInput.addEventListener('input', (e) => {
  form.methods.updateField('credentials', 'password', e.target.value);
});

passwordInput.addEventListener('blur', () => {
  form.methods.touchField('credentials', 'password');
});

confirmPasswordInput.addEventListener('input', (e) => {
  form.methods.updateField('credentials', 'confirmPassword', e.target.value);
});

confirmPasswordInput.addEventListener('blur', () => {
  form.methods.touchField('confirmPassword');
});

document.getElementById('password-form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (form.methods.validateForm(true)) {
    const formData = form.methods.getFlatData();
    console.log('Form submitted:', formData);
  }
});

// Subscribe to form state changes
form.bindings.formData.subscribe((data) => {
  // Update UI based on data changes
  passwordInput.value = data.credentials?.password || '';
  confirmPasswordInput.value = data.credentials?.confirmPassword || '';
});

form.bindings.fieldErrors.subscribe((errors) => {
  // Update error messages
  passwordError.textContent = errors.credentials?.password || '';
  passwordError.style.display = errors.credentials?.password ? 'block' : 'none';
  
  confirmPasswordError.textContent = errors.credentials?.confirmPassword || '';
  confirmPasswordError.style.display = errors.credentials?.confirmPassword ? 'block' : 'none';
});

form.bindings.isFormValid.subscribe((isValid) => {
  // Update button state
  submitButton.disabled = !isValid;
});

// Cleanup when no longer needed
window.addEventListener('unload', () => {
  form.methods.unregisterValidator('equals');
});`}
                  language="js"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
            <h4 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">Best Practices</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="font-medium text-green-700 dark:text-green-400">✓</span>
                <span>Always validate both fields in a relationship to ensure consistent error states</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-green-700 dark:text-green-400">✓</span>
                <span>Use type coercion when comparing values of different types</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-green-700 dark:text-green-400">✓</span>
                <span>Consider the timing of validation (onChange, onBlur, or onSubmit)</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
            <h4 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">Common Pitfalls</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="font-medium text-red-700 dark:text-red-400">✗</span>
                <span>Forgetting to handle undefined values in comparisons</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-red-700 dark:text-red-400">✗</span>
                <span>Not updating related field error states when one field changes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-red-700 dark:text-red-400">✗</span>
                <span>Creating circular validation dependencies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>      {/* Form State Persistence */}
      <div className="space-y-4 pt-6">
        <h3 className="text-2xl font-bold">Form State Persistence</h3>
        <p className="text-muted-foreground">
          Form Controller provides a robust foundation for implementing state persistence across sessions, page refreshes, and navigation. This is crucial for complex forms where users might need to save their progress and return later, or for recovering form data in case of unexpected errors.
        </p>
        
        <Tabs defaultValue="react" className="mt-6">
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
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                  <span className="text-zinc-400">react-form-persistence.tsx</span>
                </div>
                <SyntaxHighlighter
                  code={`import { useUplinkController } from "@uplink-protocol/react";
import { FormController } from "@uplink-protocol/form-controller";
import { useEffect } from "react";

export function FormWithPersistence() {
  const { state, methods } = useUplinkController(FormController({
    steps: [
      {
        id: 'userInfo',
        fields: {
          name: {
            id: 'name',
            type: 'text',
            label: 'Full Name',
            value: '',
            required: true
          },
          email: {
            id: 'email',
            type: 'email',
            label: 'Email Address',
            value: ''
          }
        }
      }
    ]
  }), { trackBindings: "all" });

  // Load saved state on component mount
  useEffect(() => {
    try {
      const savedState = localStorage.getItem('myForm');
      if (savedState) {
        const { timestamp, fields } = JSON.parse(savedState);
        
        // Check if saved data is still valid (e.g., not older than 24 hours)
        const ONE_DAY = 24 * 60 * 60 * 1000;
        if (Date.now() - timestamp < ONE_DAY) {
          // Restore field values
          Object.entries(fields).forEach(([fieldId, value]) => {
            methods.setValue(fieldId, value);
          });
          
          // Display notification to user
          alert('Your previous form data has been restored.');
        } else {
          // Clear expired data
          localStorage.removeItem('myForm');
        }
      }
    } catch (error) {
      console.error('Error loading saved form state:', error);
    }
  }, [methods]);

  // Set up auto-save
  useEffect(() => {
    const handleStateChange = () => {
      localStorage.setItem('myForm', JSON.stringify({
        timestamp: Date.now(),
        fields: state.values
      }));
    };

    // Save state on changes
    const unsubscribe = methods.subscribe(handleStateChange);

    return () => {
      unsubscribe();
    };
  }, [state.values, methods]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (state.isFormValid) {
      // Process form submission
      console.log('Form submitted:', state.formData);
      
      // Clear saved form data after successful submission
      localStorage.removeItem('myForm');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Full Name:
          <input
            type="text"
            value={state.values.name || ''}
            onChange={(e) => methods.setValue('name', e.target.value)}
            onBlur={() => methods.touchField('name')}
          />
        </label>
        {state.fieldErrors.name && (
          <div className="text-red-500">{state.fieldErrors.name}</div>
        )}
      </div>

      <div className="form-group">
        <label>
          Email:
          <input
            type="email"
            value={state.values.email || ''}
            onChange={(e) => methods.setValue('email', e.target.value)}
            onBlur={() => methods.touchField('email')}
          />
        </label>
      </div>
      
      <button type="submit" disabled={!state.isFormValid}>
        Submit
      </button>
    </form>
  );
}`}
                  language="tsx"
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="vue" className="space-y-4">
            <Card>
              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                  <span className="text-zinc-400">vue-form-persistence.vue</span>
                </div>
                <SyntaxHighlighter
                  code={`<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>
          Full Name:
          <input
            type="text"
            v-model="state.values.name"
            @blur="methods.touchField('name')"
          />
        </label>
        <div v-if="state.fieldErrors.name" class="text-red-500">
          {{ state.fieldErrors.name }}
        </div>
      </div>
      
      <div class="form-group">
        <label>
          Email:
          <input
            type="email"
            v-model="state.values.email"
            @blur="methods.touchField('email')"
          />
        </label>
      </div>
      
      <button type="submit" :disabled="!state.isFormValid">
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { useUplinkController } from "@uplink-protocol/vue";
import { FormController } from "@uplink-protocol/form-controller";
import { onMounted, onUnmounted } from 'vue';

const { state, methods } = useUplinkController(FormController({
  steps: [
    {
      id: 'userInfo',
      fields: {
        name: {
          id: 'name',
          type: 'text',
          label: 'Full Name',
          value: '',
          required: true
        },
        email: {
          id: 'email',
          type: 'email',
          label: 'Email Address',
          value: ''
        }
      }
    }
  ]
}), { trackBindings: "all" });

// Function to load saved form state
const loadFormState = () => {
  try {
    const savedState = localStorage.getItem('myForm');
    if (savedState) {
      const { timestamp, fields } = JSON.parse(savedState);
      
      // Check if saved data is still valid (24 hours)
      const ONE_DAY = 24 * 60 * 60 * 1000;
      if (Date.now() - timestamp < ONE_DAY) {
        // Restore field values
        Object.entries(fields).forEach(([fieldId, value]) => {
          methods.setValue(fieldId, value);
        });
        
        // Display notification to user
        alert('Your previous form data has been restored.');
      } else {
        // Clear expired data
        localStorage.removeItem('myForm');
      }
    }
  } catch (error) {
    console.error('Error loading saved form state:', error);
  }
};

// Function to set up auto-save
const setupAutoSave = () => {
  const handleStateChange = () => {
    localStorage.setItem('myForm', JSON.stringify({
      timestamp: Date.now(),
      fields: state.values
    }));
  };

  // Set up subscription
  const unsubscribe = methods.subscribe(handleStateChange);
  return unsubscribe;
};

// Load saved state on mount
onMounted(() => {
  loadFormState();
  const cleanup = setupAutoSave();
  
  // Clean up subscription on unmount
  onUnmounted(cleanup);
});

// Function to handle form submission
const handleSubmit = () => {
  if (state.isFormValid) {
    // Process form submission
    console.log('Form submitted:', state.formData);
    
    // Clear saved form data after successful submission
    localStorage.removeItem('myForm');
  }
};
</script>`}
                  language="vue"
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="svelte" className="space-y-4">
            <Card>
              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                  <span className="text-zinc-400">svelte-form-persistence.svelte</span>
                </div>
                <SyntaxHighlighter
                  code={`<script>
  import { useUplinkController } from "@uplink-protocol/svelte";
  import { FormController } from "@uplink-protocol/form-controller";
  import { onMount, onDestroy } from 'svelte';

  const { state, methods } = useUplinkController(FormController({
    steps: [
      {
        id: 'userInfo',
        fields: {
          name: {
            id: 'name',
            type: 'text',
            label: 'Full Name',
            value: '',
            required: true
          },
          email: {
            id: 'email',
            type: 'email',
            label: 'Email Address',
            value: ''
          }
        }
      }
    ]
  }), { trackBindings: "all" });

  // Load saved state on component mount
  onMount(() => {
    try {
      const savedState = localStorage.getItem('myForm');
      if (savedState) {
        const { timestamp, fields } = JSON.parse(savedState);
        
        // Check if saved data is still valid (24 hours)
        const ONE_DAY = 24 * 60 * 60 * 1000;
        if (Date.now() - timestamp < ONE_DAY) {
          // Restore field values
          Object.entries(fields).forEach(([fieldId, value]) => {
            methods.setValue(fieldId, value);
          });
          
          // Display notification to user
          alert('Your previous form data has been restored.');
        } else {
          // Clear expired data
          localStorage.removeItem('myForm');
        }
      }
    } catch (error) {
      console.error('Error loading saved form state:', error);
    }
  });

  // Set up auto-save subscription
  const unsubscribe = methods.subscribe((state) => {
    localStorage.setItem('myForm', JSON.stringify({
      timestamp: Date.now(),
      fields: state.values
    }));
  });

  // Clean up subscription on unmount
  onDestroy(unsubscribe);

  const handleSubmit = () => {
    if ($state.isFormValid) {
      // Process form submission
      console.log('Form submitted:', $state.formData);
      
      // Clear saved form data after successful submission
      localStorage.removeItem('myForm');
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-group">
    <label>
      Full Name:
      <input
        type="text"
        bind:value={$state.values.name}
        on:blur={() => methods.touchField('name')}
      />
    </label>
    {#if $state.fieldErrors.name}
      <div class="text-red-500">{$state.fieldErrors.name}</div>
    {/if}
  </div>
  
  <div class="form-group">
    <label>
      Email:
      <input
        type="email"
        bind:value={$state.values.email}
        on:blur={() => methods.touchField('email')}
      />
    </label>
  </div>
  
  <button type="submit" disabled={!$state.isFormValid}>
    Submit
  </button>
</form>`}
                  language="svelte"
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="vanilla" className="space-y-4">
            <Card>
              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                  <span className="text-zinc-400">vanilla-form-persistence.js</span>
                </div>
                <SyntaxHighlighter
                  code={`
import { FormController } from "@uplink-protocol/form-controller";

// Initialize the form controller
const form = (FormController({
  steps: [
    {
      id: 'userInfo',
      fields: {
        name: {
          id: 'name',
          type: 'text',
          label: 'Full Name',
          value: '',
          required: true
        },
        email: {
          id: 'email',
          type: 'email',
          label: 'Email Address',
          value: ''
        }
      }
    }
  ]
}), { trackBindings: "all" });

// Get DOM elements
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const nameError = document.querySelector('#nameError');
const submitButton = document.querySelector('#submitButton');

// Function to load saved form state
const loadFormState = () => {
  try {
    const savedState = localStorage.getItem('myForm');
    if (savedState) {
      const { timestamp, fields } = JSON.parse(savedState);
      
      // Check if saved data is still valid (24 hours)
      const ONE_DAY = 24 * 60 * 60 * 1000;
      if (Date.now() - timestamp < ONE_DAY) {
        // Restore field values
        Object.entries(fields).forEach(([fieldId, value]) => {
          form.methods.setValue(fieldId, value);
        });
        
        // Display notification to user
        alert('Your previous form data has been restored.');
      } else {
        // Clear expired data
        localStorage.removeItem('myForm');
      }
    }
  } catch (error) {
    console.error('Error loading saved form state:', error);
  }
};

// Function to set up auto-save
const setupAutoSave = () => {
  const handleStateChange = (state) => {
    localStorage.setItem('myForm', JSON.stringify({
      timestamp: Date.now(),
      fields: state.values
    }));
  };

  // Set up subscription
  const unsubscribe = form.methods.subscribe(handleStateChange);
  return unsubscribe;
};

// Subscribe to form state changes to update UI
form.subscribe((state) => {
  // Update field values
  nameInput.value = state.values.name || '';
  emailInput.value = state.values.email || '';
  
  // Update error messages
  nameError.textContent = state.fieldErrors.name || '';
  nameError.style.display = state.fieldErrors.name ? 'block' : 'none';
  
  // Update submit button state
  submitButton.disabled = !state.isFormValid;
});

// Initialize the form
document.addEventListener('DOMContentLoaded', () => {
  // Load saved state on page load
  loadFormState();
  
  // Set up auto-save
  const cleanupAutoSave = setupAutoSave();
  
  // Clean up when window unloads
  window.addEventListener('beforeunload', () => {
    cleanupAutoSave();
  });
  
  // Set up form handlers
  nameInput.addEventListener('input', (e) => {
    form.methods.setValue('name', e.target.value);
  });
  
  nameInput.addEventListener('blur', () => {
    form.methods.touchField('name');
  });
  
  emailInput.addEventListener('input', (e) => {
    form.methods.setValue('email', e.target.value);
  });
  
  emailInput.addEventListener('blur', () => {
    form.methods.touchField('email');
  });
  
  // Handle form submission
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const state = form.getState();
    if (state.isFormValid) {
      // Process form submission
      console.log('Form submitted:', state.formData);
      
      // Clear saved form data after successful submission
      localStorage.removeItem('myForm');
    }
  });
});`}
                  language="js"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg border border-amber-200 dark:border-amber-800/50 mt-4">
          <h4 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Implementation Considerations</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-medium text-amber-700 dark:text-amber-400">⚠️</span>
              <span>Consider storage limitations when deciding what and how frequently to save</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-amber-700 dark:text-amber-400">⚠️</span>
              <span>Implement expiration logic for saved form data to prevent stale data issues</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-amber-700 dark:text-amber-400">⚠️</span>
              <span>Provide clear UI indicators when form data is being restored from a saved state</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-amber-700 dark:text-amber-400">⚠️</span>
              <span>Consider server-side storage for larger forms or when persistence across devices is needed</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
