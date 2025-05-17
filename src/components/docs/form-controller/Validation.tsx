'use client'

import { Card, CardContent } from "@/components/ui/card"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Validation() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Validation System</h2>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Form Controller offers a comprehensive validation system to ensure data integrity and provide helpful feedback to users. From simple required field checks to complex cross-field and asynchronous validation, the form controller handles all validation scenarios.
      </p>
      
      {/* Validation Overview */}
      <div className="mt-6 space-y-4">
        <h3 className="text-2xl font-bold">Validation Overview</h3>
        <p className="text-muted-foreground">
          The validation system in Form Controller works on multiple levels:
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <Card className="p-5 border-l-4 border-green-500">
            <h4 className="font-medium text-lg mb-2">Field Validation</h4>
            <p className="text-sm text-muted-foreground">
              Applied to individual fields to validate their content according to specific rules. This is the most common form of validation and happens automatically.
            </p>
          </Card>
          
          <Card className="p-5 border-l-4 border-blue-500">
            <h4 className="font-medium text-lg mb-2">Step Validation</h4>
            <p className="text-sm text-muted-foreground">
              Validates all fields within a step, ensuring the entire step is valid before allowing navigation to the next step. Useful for multi-step forms.
            </p>
          </Card>
          
          <Card className="p-5 border-l-4 border-purple-500">
            <h4 className="font-medium text-lg mb-2">Form Validation</h4>
            <p className="text-sm text-muted-foreground">
              Validates the entire form state, ensuring all fields across all steps are valid before submission. This prevents submitting invalid data.
            </p>
          </Card>
        </div>
        
        <div className="mt-6">
          <Card>
            <CardContent className="p-0 rounded-xl overflow-hidden">
              <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                <div className="flex items-center space-x-2">
                  <span className="bg-green-500 w-3 h-3 rounded-full"></span>
                  <span className="text-zinc-400">validation-interface.ts</span>
                </div>
              </div>
              <SyntaxHighlighter
                code={`interface Validation {
  required?: boolean;
  pattern?: RegExp | string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  custom?: (value: any) => boolean | string;
  dynamicValidator?: string;
  dynamicValidatorParams?: Record<string, any>;
  errorMessage?: string;
}`}
                language="ts"
              />
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Built-in Validators */}
      <div className="space-y-4 pt-8">
        <h3 className="text-2xl font-bold">Built-in Validators</h3>
        <p className="text-muted-foreground">
          Form Controller provides several built-in validators that cover the most common validation needs:
        </p>
        
        <div className="mt-4 bg-white dark:bg-zinc-800/60 rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
          <div className="divide-y divide-zinc-200 dark:divide-zinc-700">
            <div className="grid grid-cols-12 p-4">
              <div className="col-span-3 font-medium">Validator</div>
              <div className="col-span-3 font-medium">Type</div>
              <div className="col-span-6 font-medium">Description</div>
            </div>
            
            <div className="grid grid-cols-12 p-4">
              <div className="col-span-3"><code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">required</code></div>
              <div className="col-span-3">Boolean</div>
              <div className="col-span-6 text-sm text-muted-foreground">Ensures the field has a non-empty value</div>
            </div>
            
            <div className="grid grid-cols-12 p-4">
              <div className="col-span-3"><code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">pattern</code></div>
              <div className="col-span-3">RegExp | string</div>
              <div className="col-span-6 text-sm text-muted-foreground">Validates the value against a regular expression pattern</div>
            </div>
            
            <div className="grid grid-cols-12 p-4">
              <div className="col-span-3"><code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">minLength</code></div>
              <div className="col-span-3">Number</div>
              <div className="col-span-6 text-sm text-muted-foreground">Ensures the value has at least the specified number of characters</div>
            </div>
            
            <div className="grid grid-cols-12 p-4">
              <div className="col-span-3"><code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">maxLength</code></div>
              <div className="col-span-3">Number</div>
              <div className="col-span-6 text-sm text-muted-foreground">Ensures the value doesn't exceed the specified number of characters</div>
            </div>
            
            <div className="grid grid-cols-12 p-4">
              <div className="col-span-3"><code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">min</code></div>
              <div className="col-span-3">Number</div>
              <div className="col-span-6 text-sm text-muted-foreground">For numeric fields, ensures the value is at least the specified minimum</div>
            </div>
            
            <div className="grid grid-cols-12 p-4">
              <div className="col-span-3"><code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">max</code></div>
              <div className="col-span-3">Number</div>
              <div className="col-span-6 text-sm text-muted-foreground">For numeric fields, ensures the value doesn't exceed the specified maximum</div>
            </div>
            
            <div className="grid grid-cols-12 p-4">
              <div className="col-span-3"><code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">custom</code></div>
              <div className="col-span-3">Function</div>
              <div className="col-span-6 text-sm text-muted-foreground">A custom function that returns true for valid input or an error message string</div>
            </div>
          </div>
        </div>
        
        <Card className="mt-6">
          <CardContent className="p-0 rounded-xl overflow-hidden">
            <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
              <div className="flex items-center space-x-2">
                <span className="bg-blue-500 w-3 h-3 rounded-full"></span>
                <span className="text-zinc-400">basic-validation-examples.js</span>
              </div>
            </div>
            <SyntaxHighlighter
              code={`// Required field validation
const nameField = {
  id: 'name',
  type: 'text',
  label: 'Full Name',
  required: true, // Shorthand for validation: { required: true }
  value: ''
};

// Pattern validation (email)
const emailField = {
  id: 'email',
  type: 'email',
  label: 'Email Address',
  validation: {
    required: true,
    pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
    errorMessage: 'Please enter a valid email address'
  }
};

// Min/max length validation (password)
const passwordField = {
  id: 'password',
  type: 'password',
  label: 'Password',
  validation: {
    required: true,
    minLength: 8,
    maxLength: 50,
    errorMessage: 'Password must be between 8 and 50 characters'
  }
};

// Min/max numeric validation (age)
const ageField = {
  id: 'age',
  type: 'number',
  label: 'Age',
  validation: {
    required: true,
    min: 18,
    max: 120,
    errorMessage: 'Age must be between 18 and 120'
  }
};

// Custom validation function
const usernameField = {
  id: 'username',
  type: 'text',
  label: 'Username',
  validation: {
    required: true,
    custom: (value) => {
      if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        return 'Username can only contain letters, numbers, and underscores';
      }
      
      if (value.length < 3) {
        return 'Username must be at least 3 characters long';
      }
      
      // Additional async check could be performed here if needed
      
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
      <div className="space-y-4 pt-8">
        <h3 className="text-2xl font-bold">Dynamic Validators</h3>
        <p className="text-muted-foreground">
          Dynamic validators enable more complex validation scenarios by taking into account the context of the form, including other field values. This is particularly useful for conditional validation and cross-field validation scenarios.
        </p>
        
        <Card className="mt-4">
          <CardContent className="p-0 rounded-xl overflow-hidden">
            <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
              <div className="flex items-center space-x-2">
                <span className="bg-purple-500 w-3 h-3 rounded-full"></span>
                <span className="text-zinc-400">dynamic-validator-example.js</span>
              </div>
            </div>
            <SyntaxHighlighter
              code={`// First, register a dynamic validator
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

// Then use the dynamic validator in a field configuration
const formConfig = {
  steps: [
    {
      id: 'shipping',
      title: 'Shipping Information',
      fields: {
        shippingMethod: {
          id: 'shippingMethod',
          type: 'select',
          label: 'Shipping Method',
          options: [
            { value: 'standard', label: 'Standard Shipping' },
            { value: 'express', label: 'Express Shipping' },
            { value: 'pickup', label: 'Local Pickup' }
          ],
          required: true
        },
        pickupLocation: {
          id: 'pickupLocation',
          type: 'select',
          label: 'Pickup Location',
          options: [
            { value: 'store1', label: 'Downtown Store' },
            { value: 'store2', label: 'Mall Location' }
          ],
          validation: {
            dynamicValidator: 'requiredIf',
            dynamicValidatorParams: {
              dependsOn: 'shippingMethod',
              dependsOnValue: 'pickup',
              errorMessage: 'Please select a pickup location'
            }
          }
        }
      }
    }
  ]
};`}
              language="js"
            />
          </CardContent>
        </Card>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border border-purple-200 dark:border-purple-800/50 mt-6">
          <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-3">Dynamic Validator Context</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Every dynamic validator receives a context object that provides access to:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-medium text-purple-700 dark:text-purple-400">•</span>
              <span><code className="bg-purple-100 dark:bg-purple-900/40 px-1.5 py-0.5 rounded">field</code> - The field configuration including all validation settings</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-purple-700 dark:text-purple-400">•</span>
              <span><code className="bg-purple-100 dark:bg-purple-900/40 px-1.5 py-0.5 rounded">formData</code> - The current values of all fields in the form</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-purple-700 dark:text-purple-400">•</span>
              <span><code className="bg-purple-100 dark:bg-purple-900/40 px-1.5 py-0.5 rounded">fieldErrors</code> - The current validation errors for all fields</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-purple-700 dark:text-purple-400">•</span>
              <span><code className="bg-purple-100 dark:bg-purple-900/40 px-1.5 py-0.5 rounded">methods</code> - Access to form controller methods for complex validation scenarios</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Asynchronous Validation */}
      <div className="space-y-4 pt-8">
        <h3 className="text-2xl font-bold">Asynchronous Validation</h3>
        <p className="text-muted-foreground">
          Form Controller supports asynchronous validation for scenarios where validation requires API calls or other asynchronous operations. This is useful for checking username availability, email uniqueness, or other server-side validations.
        </p>
        
        <Card className="mt-4">
          <CardContent className="p-0 rounded-xl overflow-hidden">
            <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
              <div className="flex items-center space-x-2">
                <span className="bg-amber-500 w-3 h-3 rounded-full"></span>
                <span className="text-zinc-400">async-validation.js</span>
              </div>
            </div>
            <SyntaxHighlighter
              code={`// Register an async validator
methods.registerValidator('usernameAvailable', async (value, context) => {
  // Skip validation if empty (let required validator handle it)
  if (!value) return true;
  
  try {
    // Show loading state during validation
    methods.setFieldValidating(context.field.stepId, context.field.id, true);
    
    // Make API call to check username availability
    const response = await fetch(\`/api/check-username?username=\${encodeURIComponent(value)}\`);
    const data = await response.json();
    
    // Return validation result
    return data.available ? true : 'This username is already taken';
  } catch (error) {
    console.error('Username validation error:', error);
    return 'Could not verify username availability';
  } finally {
    // Hide loading state after validation
    methods.setFieldValidating(context.field.stepId, context.field.id, false);
  }
});

// Use the async validator in field configuration
const usernameField = {
  id: 'username',
  type: 'text',
  label: 'Username',
  validation: {
    required: true,
    minLength: 3,
    dynamicValidator: 'usernameAvailable',
    // Debounce to prevent excessive API calls
    debounce: 500
  }
};

// In your UI, show loading state
return (
  <div>
    <input type="text" {...methods.bindInput('username')} />
    {state.fieldsValidating.registration?.username && (
      <span className="text-blue-500">Checking availability...</span>
    )}
    {state.fieldErrors.registration?.username && (
      <span className="text-red-500">{state.fieldErrors.registration.username}</span>
    )}
  </div>
);`}
              language="js"
            />
          </CardContent>
        </Card>
        
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Async Validation Tips</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="font-medium text-blue-700 dark:text-blue-400">•</span>
                <span>Always implement debouncing to prevent excessive API calls</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-blue-700 dark:text-blue-400">•</span>
                <span>Show clear loading indicators during validation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-blue-700 dark:text-blue-400">•</span>
                <span>Handle network errors gracefully with meaningful messages</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg">
            <h4 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">When to Use Async Validation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="font-medium text-amber-700 dark:text-amber-400">•</span>
                <span>Checking for duplicates in a database (usernames, emails)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-amber-700 dark:text-amber-400">•</span>
                <span>Validating addresses or other complex data against external services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-amber-700 dark:text-amber-400">•</span>
                <span>Verifying coupon codes or other user-entered references</span>
              </li>
            </ul>
          </div>
        </div>      </div>
      
      {/* Framework-Specific Validation Examples */}
      <div className="space-y-4 pt-8">
        <h3 className="text-2xl font-bold">Framework-Specific Validation Examples</h3>
        <p className="text-muted-foreground">
          Here's how to implement form validation using Form Controller in different frontend frameworks:
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
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                  <span className="text-zinc-400">react-validation.tsx</span>
                </div>
                <SyntaxHighlighter
                  code={`import React from 'react';
import { useUplinkController } from "@uplink-protocol/react";
import { FormController } from "@uplink-protocol/form-controller";

function RegistrationForm() {
  const { state, methods } = useUplinkController(FormController({
    steps: [
      {
        id: 'registration',
        fields: {
          username: { 
            id: 'username', 
            type: 'text', 
            label: 'Username',
            required: true,
            validation: {
              minLength: 3,
              maxLength: 20,
              pattern: /^[a-zA-Z0-9_]+$/,
              errorMessage: 'Username must be 3-20 characters and contain only letters, numbers, and underscores'
            }
          },
          password: { 
            id: 'password', 
            type: 'password',
            label: 'Password',
            required: true,
            validation: {
              minLength: 8,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$/,
              errorMessage: 'Password must be at least 8 characters and include uppercase, lowercase, number and special character'
            }
          },
          confirmPassword: {
            id: 'confirmPassword',
            type: 'password',
            label: 'Confirm Password',
            required: true
          }
        }
      }
    ]
  }), {
    trackBindings: "all" // For this example, we track all bindings since we use multiple fields
  });

  // Add custom cross-field validation
  React.useEffect(() => {
    methods.registerValidator('passwordsMatch', (value, context) => {
      if (context.field.id === 'confirmPassword' && value !== context.formData.password) {
        return 'Passwords do not match';
      }
      return true;
    });

    // Apply the validator to the confirm password field
    methods.extendField('registration', 'confirmPassword', {
      validation: {
        dynamicValidator: 'passwordsMatch'
      }
    });

    // Cleanup on unmount
    return () => {
      methods.unregisterValidator('passwordsMatch');
    };
  }, [methods]);

  const handleSubmit = (e) => {
    e.preventDefault();
    methods.submit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">
          {state.fields.username.label}
          {state.fields.username.required && ' *'}
        </label>
        <input
          id="username"
          type="text"
          value={state.values.username || ''}
          onChange={(e) => methods.setValue('username', e.target.value)}
          onBlur={() => methods.touchField('username')}
          className={state.fieldErrors.username ? 'border-red-500' : ''}
        />
        {state.fieldErrors.username && (
          <div className="text-red-500">{state.fieldErrors.username}</div>
        )}
      </div>
      
      <div className="form-group">
        <label htmlFor="password">
          {state.fields.password.label}
          {state.fields.password.required && ' *'}
        </label>
        <input
          id="password"
          type="password"
          value={state.values.password || ''}
          onChange={(e) => methods.setValue('password', e.target.value)}
          onBlur={() => methods.touchField('password')}
          className={state.fieldErrors.password ? 'border-red-500' : ''}
        />
        {state.fieldErrors.password && (
          <div className="text-red-500">{state.fieldErrors.password}</div>
        )}
      </div>
      
      <div className="form-group">
        <label htmlFor="confirmPassword">
          {state.fields.confirmPassword.label}
          {state.fields.confirmPassword.required && ' *'}
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={state.values.confirmPassword || ''}
          onChange={(e) => methods.setValue('confirmPassword', e.target.value)}
          onBlur={() => methods.touchField('confirmPassword')}
          className={state.fieldErrors.confirmPassword ? 'border-red-500' : ''}
        />
        {state.fieldErrors.confirmPassword && (
          <div className="text-red-500">{state.fieldErrors.confirmPassword}</div>
        )}
      </div>
      
      <button 
        type="submit" 
        disabled={!state.isFormValid || !state.isFormDirty}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Register
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
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                  <span className="text-zinc-400">vue-validation.vue</span>
                </div>
                <SyntaxHighlighter
                  code={`<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label :for="'username'">
        {{ state.fields.username.label }}
        <span v-if="state.fields.username.required">*</span>
      </label>
      <input
        id="username"
        type="text"
        v-model="state.values.username"
        @blur="methods.touchField('username')"
        :class="{ 'border-red-500': state.fieldErrors.username }"
      />
      <div v-if="state.fieldErrors.username" class="text-red-500">
        {{ state.fieldErrors.username }}
      </div>
    </div>
    
    <div class="form-group">
      <label :for="'password'">
        {{ state.fields.password.label }}
        <span v-if="state.fields.password.required">*</span>
      </label>
      <input
        id="password"
        type="password"
        v-model="state.values.password"
        @blur="methods.touchField('password')"
        :class="{ 'border-red-500': state.fieldErrors.password }"
      />
      <div v-if="state.fieldErrors.password" class="text-red-500">
        {{ state.fieldErrors.password }}
      </div>
    </div>
    
    <div class="form-group">
      <label :for="'confirmPassword'">
        {{ state.fields.confirmPassword.label }}
        <span v-if="state.fields.confirmPassword.required">*</span>
      </label>
      <input
        id="confirmPassword"
        type="password"
        v-model="state.values.confirmPassword"
        @blur="methods.touchField('confirmPassword')"
        :class="{ 'border-red-500': state.fieldErrors.confirmPassword }"
      />
      <div v-if="state.fieldErrors.confirmPassword" class="text-red-500">
        {{ state.fieldErrors.confirmPassword }}
      </div>
    </div>
    
    <button 
      type="submit" 
      :disabled="!state.isFormValid || !state.isFormDirty"
      class="bg-green-500 text-white py-2 px-4 rounded"
    >
      Register
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
      id: 'registration',
      fields: {
        username: { 
          id: 'username', 
          type: 'text', 
          label: 'Username',
          required: true,
          validation: {
            minLength: 3,
            maxLength: 20,
            pattern: /^[a-zA-Z0-9_]+$/,
            errorMessage: 'Username must be 3-20 characters and contain only letters, numbers, and underscores'
          }
        },
        password: { 
          id: 'password', 
          type: 'password',
          label: 'Password',
          required: true,
          validation: {
            minLength: 8,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$/,
            errorMessage: 'Password must be at least 8 characters and include uppercase, lowercase, number and special character'
          }
        },
        confirmPassword: {
          id: 'confirmPassword',
          type: 'password',
          label: 'Confirm Password',
          required: true
        }
      }
    }
  ]
}), {
  trackBindings: "all" // For this example, we track all bindings since we use multiple fields
});

// Add custom cross-field validation
onMounted(() => {
  methods.registerValidator('passwordsMatch', (value, context) => {
    if (context.field.id === 'confirmPassword' && value !== context.formData.password) {
      return 'Passwords do not match';
    }
    return true;
  });

  // Apply the validator to the confirm password field
  methods.extendField('registration', 'confirmPassword', {
    validation: {
      dynamicValidator: 'passwordsMatch'
    }
  });
});

// Cleanup on unmount
onUnmounted(() => {
  methods.unregisterValidator('passwordsMatch');
});

const handleSubmit = () => {
  methods.submit();
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
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                  <span className="text-zinc-400">svelte-validation.svelte</span>
                </div>
                <SyntaxHighlighter
                  code={`<script>
  import { useUplinkController } from "@uplink-protocol/svelte";
  import { FormController } from "@uplink-protocol/form-controller";
  import { onMount, onDestroy } from 'svelte';

  const { state, methods } = useUplinkController(FormController({
    steps: [
      {
        id: 'registration',
        fields: {
          username: { 
            id: 'username', 
            type: 'text', 
            label: 'Username',
            required: true,
            validation: {
              minLength: 3,
              maxLength: 20,
              pattern: /^[a-zA-Z0-9_]+$/,
              errorMessage: 'Username must be 3-20 characters and contain only letters, numbers, and underscores'
            }
          },
          password: { 
            id: 'password', 
            type: 'password',
            label: 'Password',
            required: true,
            validation: {
              minLength: 8,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$/,
              errorMessage: 'Password must be at least 8 characters and include uppercase, lowercase, number and special character'
            }
          },
          confirmPassword: {
            id: 'confirmPassword',
            type: 'password',
            label: 'Confirm Password',
            required: true
          }
        }
      }
    ]
  }), {
    trackBindings: "all" // For this example, we track all bindings since we use multiple fields
  });

  // Add custom cross-field validation
  onMount(() => {
    methods.registerValidator('passwordsMatch', (value, context) => {
      if (context.field.id === 'confirmPassword' && value !== context.formData.password) {
        return 'Passwords do not match';
      }
      return true;
    });

    // Apply the validator to the confirm password field
    methods.extendField('registration', 'confirmPassword', {
      validation: {
        dynamicValidator: 'passwordsMatch'
      }
    });
  });

  // Cleanup on unmount
  onDestroy(() => {
    methods.unregisterValidator('passwordsMatch');
  });

  function handleSubmit() {
    methods.submit();
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-group">
    <label for="username">
      {$state.fields.username.label}
      {#if $state.fields.username.required}*{/if}
    </label>
    <input
      id="username"
      type="text"
      bind:value={$state.values.username}
      on:blur={() => methods.touchField('username')}
      class={$state.fieldErrors.username ? 'border-red-500' : ''}
    />
    {#if $state.fieldErrors.username}
      <div class="text-red-500">{$state.fieldErrors.username}</div>
    {/if}
  </div>
  
  <div class="form-group">
    <label for="password">
      {$state.fields.password.label}
      {#if $state.fields.password.required}*{/if}
    </label>
    <input
      id="password"
      type="password"
      bind:value={$state.values.password}
      on:blur={() => methods.touchField('password')}
      class={$state.fieldErrors.password ? 'border-red-500' : ''}
    />
    {#if $state.fieldErrors.password}
      <div class="text-red-500">{$state.fieldErrors.password}</div>
    {/if}
  </div>
  
  <div class="form-group">
    <label for="confirmPassword">
      {$state.fields.confirmPassword.label}
      {#if $state.fields.confirmPassword.required}*{/if}
    </label>
    <input
      id="confirmPassword"
      type="password"
      bind:value={$state.values.confirmPassword}
      on:blur={() => methods.touchField('confirmPassword')}
      class={$state.fieldErrors.confirmPassword ? 'border-red-500' : ''}
    />
    {#if $state.fieldErrors.confirmPassword}
      <div class="text-red-500">{$state.fieldErrors.confirmPassword}</div>
    {/if}
  </div>
  
  <button 
    type="submit" 
    disabled={!$state.isFormValid || !$state.isFormDirty}
    class="bg-orange-500 text-white py-2 px-4 rounded"
  >
    Register
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
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                  <span className="text-zinc-400">vanilla-validation.js</span>
                </div>
                <SyntaxHighlighter
                  code={`import { connectController } from "@uplink-protocol/core";
import { FormController } from "@uplink-protocol/form-controller";

// Initialize the form controller with proper configuration
const form = connectController(FormController({
  steps: [
    {
      id: 'registration',
      fields: {
        username: { 
          id: 'username', 
          type: 'text', 
          label: 'Username',
          required: true,
          validation: {
            minLength: 3,
            maxLength: 20,
            pattern: /^[a-zA-Z0-9_]+$/,
            errorMessage: 'Username must be 3-20 characters and contain only letters, numbers, and underscores'
          }
        },
        password: { 
          id: 'password', 
          type: 'password',
          label: 'Password',
          required: true,
          validation: {
            minLength: 8,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$/,
            errorMessage: 'Password must be at least 8 characters and include uppercase, lowercase, number and special character'
          }
        },
        confirmPassword: {
          id: 'confirmPassword',
          type: 'password',
          label: 'Confirm Password',
          required: true
        }
      }
    }
  ]
}), {
  trackBindings: "all" // For this example, we track all bindings since we use multiple fields
});

// Add custom cross-field validation
form.methods.registerValidator('passwordsMatch', (value, context) => {
  if (context.field.id === 'confirmPassword' && value !== context.formData.password) {
    return 'Passwords do not match';
  }
  return true;
});

// Apply the validator to the confirm password field
form.methods.extendField('registration', 'confirmPassword', {
  validation: {
    dynamicValidator: 'passwordsMatch'
  }
});

// Get DOM elements
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const usernameError = document.querySelector('#usernameError');
const passwordError = document.querySelector('#passwordError');
const confirmPasswordError = document.querySelector('#confirmPasswordError');
const submitButton = document.querySelector('#submitButton');

// Subscribe to form state changes to update UI
form.subscribe((state) => {
  // Update field values
  usernameInput.value = state.values.username || '';
  passwordInput.value = state.values.password || '';
  confirmPasswordInput.value = state.values.confirmPassword || '';
  
  // Update error messages
  usernameError.textContent = state.fieldErrors.username || '';
  usernameError.style.display = state.fieldErrors.username ? 'block' : 'none';
  
  passwordError.textContent = state.fieldErrors.password || '';
  passwordError.style.display = state.fieldErrors.password ? 'block' : 'none';
  
  confirmPasswordError.textContent = state.fieldErrors.confirmPassword || '';
  confirmPasswordError.style.display = state.fieldErrors.confirmPassword ? 'block' : 'none';
  
  // Update button state
  submitButton.disabled = !state.isFormValid || !state.isFormDirty;
});

// Set up form handlers
document.addEventListener('DOMContentLoaded', () => {
  // Input event handlers
  usernameInput.addEventListener('input', (e) => {
    form.methods.setValue('username', e.target.value);
  });
  
  usernameInput.addEventListener('blur', () => {
    form.methods.touchField('username');
  });
  
  passwordInput.addEventListener('input', (e) => {
    form.methods.setValue('password', e.target.value);
  });
  
  passwordInput.addEventListener('blur', () => {
    form.methods.touchField('password');
  });
  
  confirmPasswordInput.addEventListener('input', (e) => {
    form.methods.setValue('confirmPassword', e.target.value);
  });
  
  confirmPasswordInput.addEventListener('blur', () => {
    form.methods.touchField('confirmPassword');
  });
  
  // Form submission
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    form.methods.submit();
  });
});

// Clean up when page unloads
window.addEventListener('unload', () => {
  form.methods.unregisterValidator('passwordsMatch');
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
