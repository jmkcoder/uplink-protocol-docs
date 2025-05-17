'use client'

import { Card, CardContent } from "@/components/ui/card"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TypeScriptSupport() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">TypeScript Support</h2>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Form Controller is built from the ground up with full TypeScript support, providing type safety, code completion, and improved developer experience throughout your application.
      </p>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">TypeScript Benefits</h3>
        <p className="text-lg mb-3">
          Using TypeScript with Form Controller provides several key benefits:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">1</span>
            </div>
            <span><strong className="text-foreground">Type Checking</strong> - Catch configuration errors at compile time rather than at runtime</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">2</span>
            </div>
            <span><strong className="text-foreground">IntelliSense</strong> - Get autocompletion and hints as you type, making development faster and reducing errors</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">3</span>
            </div>
            <span><strong className="text-foreground">Documentation</strong> - Access JSDoc comments directly in your IDE for better understanding of the API</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">4</span>
            </div>
            <span><strong className="text-foreground">Refactoring</strong> - Safely refactor your code with reliable type information</span>
          </li>
        </ul>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Basic TypeScript Setup</h3>
        <Card>
          <CardContent className="p-0 rounded-xl overflow-hidden">
            <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
              <div className="flex items-center space-x-2">
                <span className="bg-blue-500 w-3 h-3 rounded-full"></span>
                <span className="text-zinc-400">typed-form-config.ts</span>
              </div>
            </div>
            <SyntaxHighlighter
              code={`import { FormController, FormConfig, Field } from '@uplink-protocol/form-controller';

// Define your form configuration with proper types
const formConfig: FormConfig = {
  steps: [
    {
      id: 'contact',
      title: 'Contact Information',
      fields: {
        name: {
          id: 'name',
          type: 'text',
          label: 'Full Name',
          required: true
        } as Field,
        email: {
          id: 'email',
          type: 'email',
          label: 'Email Address',
          required: true,
          validation: {
            pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
          }
        } as Field
      }
    }
  ]
};

// Initialize the form controller
const form = FormController(formConfig);

// TypeScript will provide proper typing for all form methods and properties
const currentStep = form.state.currentStep.value; // string
const isValid = form.state.isFormValid.value;     // boolean
const formData = form.state.formData.value;       // Record<string, Record<string, any>>

// Type checking for methods
form.methods.updateField('contact', 'name', 'John Doe');
form.methods.validateField('contact', 'email');

// This would cause a TypeScript error:
// form.methods.goToStep(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'`}
              language="ts"
            />
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 space-y-6">
        <h3 className="text-xl font-semibold">Framework-Specific TypeScript Integration</h3>
        
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
                  <span className="text-zinc-400">react-typescript.tsx</span>
                </div>
                <SyntaxHighlighter
                  code={`import React from 'react';
import { useUplinkController } from "@uplink-protocol/react";
import { FormController, FormConfig, Field } from "@uplink-protocol/form-controller";

// Define your form data type
interface UserForm {
  personal: {
    name: string;
    email: string;
    age: number;
  };
  preferences: {
    theme: 'light' | 'dark' | 'system';
    notifications: boolean;
  };
}

// Create a strongly typed form component
function TypedForm() {
  // Form configuration with type parameters
  const formConfig: FormConfig<UserForm> = {
    steps: [
      {
        id: 'personal',
        title: 'Personal Information',
        fields: {
          name: {
            id: 'name',
            type: 'text',
            label: 'Full Name',
            required: true
          } as Field<string>,
          email: {
            id: 'email',
            type: 'email',
            label: 'Email Address',
            required: true,
            validation: {
              pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
            }
          } as Field<string>,
          age: {
            id: 'age',
            type: 'number',
            label: 'Age',
            required: true,
            validation: {
              min: 18,
              max: 120
            }
          } as Field<number>
        }
      },
      {
        id: 'preferences',
        title: 'Preferences',
        fields: {
          theme: {
            id: 'theme',
            type: 'select',
            label: 'Theme',
            options: [
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
              { value: 'system', label: 'System' }
            ],
            defaultValue: 'system'
          } as Field<'light' | 'dark' | 'system'>,
          notifications: {
            id: 'notifications',
            type: 'checkbox',
            label: 'Enable Notifications',
            defaultValue: true
          } as Field<boolean>
        }
      }
    ]
  };

  // Note the generic type parameter for proper type checking
  const { state, methods } = useUplinkController<UserForm>(
    () => FormController<UserForm>(formConfig)
  );

  // TypeScript now provides full type safety
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (state.isFormValid) {
      // Access with type safety
      const name: string = state.values.name;
      const age: number = state.values.age;
      const theme: 'light' | 'dark' | 'system' = state.values.theme;
      
      console.log('Form submitted with:', {
        name, age, theme,
        // Full form data is also correctly typed
        formData: state.formData
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {state.currentStep === 'personal' && (
        <div>
          <div className="form-group">
            <label htmlFor="name">
              {state.fields.personal.name.label}
              {state.fields.personal.name.required && ' *'}
            </label>
            <input
              id="name"
              type="text"
              value={state.values.name || ''}
              onChange={(e) => methods.setValue('name', e.target.value)}
              onBlur={() => methods.touchField('name')}
            />
            {state.fieldErrors.name && (
              <div className="text-red-500">{state.fieldErrors.name}</div>
            )}
          </div>
          
          {/* More fields... */}
          
          <button
            type="button"
            onClick={() => methods.goToStep('preferences')}
            disabled={!state.stepsValidity.personal}
          >
            Next
          </button>
        </div>
      )}
      
      {/* More steps... */}
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
                  <span className="text-zinc-400">vue-typescript.vue</span>
                </div>
                <SyntaxHighlighter
                  code={`<script lang="ts">
import { defineComponent } from 'vue';
import { useUplinkController } from "@uplink-protocol/vue";
import { FormController, FormConfig, Field } from "@uplink-protocol/form-controller";

// Define your form data type
interface UserForm {
  personal: {
    name: string;
    email: string;
    age: number;
  };
  preferences: {
    theme: 'light' | 'dark' | 'system';
    notifications: boolean;
  };
}

export default defineComponent({
  setup() {
    // Form configuration with type parameters
    const formConfig: FormConfig<UserForm> = {
      steps: [
        {
          id: 'personal',
          title: 'Personal Information',
          fields: {
            name: {
              id: 'name',
              type: 'text',
              label: 'Full Name',
              required: true
            } as Field<string>,
            email: {
              id: 'email',
              type: 'email',
              label: 'Email Address',
              required: true,
              validation: {
                pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
              }
            } as Field<string>,
            age: {
              id: 'age',
              type: 'number',
              label: 'Age',
              required: true,
              validation: {
                min: 18,
                max: 120
              }
            } as Field<number>
          }
        },
        {
          id: 'preferences',
          title: 'Preferences',
          fields: {
            theme: {
              id: 'theme',
              type: 'select',
              label: 'Theme',
              options: [
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
                { value: 'system', label: 'System' }
              ],
              defaultValue: 'system'
            } as Field<'light' | 'dark' | 'system'>,
            notifications: {
              id: 'notifications',
              type: 'checkbox',
              label: 'Enable Notifications',
              defaultValue: true
            } as Field<boolean>
          }
        }
      ]
    };

    // Note the generic type parameter for proper type checking
    const { state, methods } = useUplinkController<UserForm>(
      () => FormController<UserForm>(formConfig)
    );

    // TypeScript now provides full type safety
    const handleSubmit = () => {
      if (state.value.isFormValid) {
        // Access with type safety
        const name: string = state.value.values.name;
        const age: number = state.value.values.age;
        const theme: 'light' | 'dark' | 'system' = state.value.values.theme;
        
        console.log('Form submitted with:', {
          name, age, theme,
          // Full form data is also correctly typed
          formData: state.value.formData
        });
      }
    };

    return {
      state,
      methods,
      handleSubmit
    };
  }
});
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div v-if="state.currentStep === 'personal'">
      <div class="form-group">
        <label :for="'name'">
          {{ state.fields.personal.name.label }}
          <span v-if="state.fields.personal.name.required">*</span>
        </label>
        <input
          id="name"
          type="text"
          v-model="state.values.name"
          @blur="methods.touchField('name')"
        />
        <div v-if="state.fieldErrors.name" class="text-red-500">
          {{ state.fieldErrors.name }}
        </div>
      </div>
      
      <!-- More fields... -->
      
      <button
        type="button"
        @click="methods.goToStep('preferences')"
        :disabled="!state.stepsValidity.personal"
      >
        Next
      </button>
    </div>
    
    <!-- More steps... -->
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
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
                  <span className="text-zinc-400">svelte-typescript.svelte</span>
                </div>
                <SyntaxHighlighter
                  code={`<script lang="ts">
  import { useUplinkController } from "@uplink-protocol/svelte";
  import { FormController, FormConfig, Field } from "@uplink-protocol/form-controller";

  // Define your form data type
  interface UserForm {
    personal: {
      name: string;
      email: string;
      age: number;
    };
    preferences: {
      theme: 'light' | 'dark' | 'system';
      notifications: boolean;
    };
  }

  // Form configuration with type parameters
  const formConfig: FormConfig<UserForm> = {
    steps: [
      {
        id: 'personal',
        title: 'Personal Information',
        fields: {
          name: {
            id: 'name',
            type: 'text',
            label: 'Full Name',
            required: true
          } as Field<string>,
          email: {
            id: 'email',
            type: 'email',
            label: 'Email Address',
            required: true,
            validation: {
              pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
            }
          } as Field<string>,
          age: {
            id: 'age',
            type: 'number',
            label: 'Age',
            required: true,
            validation: {
              min: 18,
              max: 120
            }
          } as Field<number>
        }
      },
      {
        id: 'preferences',
        title: 'Preferences',
        fields: {
          theme: {
            id: 'theme',
            type: 'select',
            label: 'Theme',
            options: [
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
              { value: 'system', label: 'System' }
            ],
            defaultValue: 'system'
          } as Field<'light' | 'dark' | 'system'>,
          notifications: {
            id: 'notifications',
            type: 'checkbox',
            label: 'Enable Notifications',
            defaultValue: true
          } as Field<boolean>
        }
      }
    ]
  };

  // Note the generic type parameter for proper type checking
  const { state, methods } = useUplinkController<UserForm>(
    () => FormController<UserForm>(formConfig)
  );

  // TypeScript now provides full type safety
  function handleSubmit() {
    if ($state.isFormValid) {
      // Access with type safety
      const name: string = $state.values.name;
      const age: number = $state.values.age;
      const theme: 'light' | 'dark' | 'system' = $state.values.theme;
      
      console.log('Form submitted with:', {
        name, age, theme,
        // Full form data is also correctly typed
        formData: $state.formData
      });
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  {#if $state.currentStep === 'personal'}
    <div>
      <div class="form-group">
        <label for="name">
          {$state.fields.personal.name.label}
          {#if $state.fields.personal.name.required}*{/if}
        </label>
        <input
          id="name"
          type="text"
          bind:value={$state.values.name}
          on:blur={() => methods.touchField('name')}
        />
        {#if $state.fieldErrors.name}
          <div class="text-red-500">{$state.fieldErrors.name}</div>
        {/if}
      </div>
      
      <!-- More fields... -->
      
      <button
        type="button"
        on:click={() => methods.goToStep('preferences')}
        disabled={!$state.stepsValidity.personal}
      >
        Next
      </button>
    </div>
  {/if}
  
  <!-- More steps... -->
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
                  <span className="text-zinc-400">vanilla-typescript.ts</span>
                </div>
                <SyntaxHighlighter
                  code={`import { connectController } from "@uplink-protocol/core";
import { FormController, FormConfig, Field } from "@uplink-protocol/form-controller";

// Define your form data type
interface UserForm {
  personal: {
    name: string;
    email: string;
    age: number;
  };
  preferences: {
    theme: 'light' | 'dark' | 'system';
    notifications: boolean;
  };
}

// Form configuration with type parameters
const formConfig: FormConfig<UserForm> = {
  steps: [
    {
      id: 'personal',
      title: 'Personal Information',
      fields: {
        name: {
          id: 'name',
          type: 'text',
          label: 'Full Name',
          required: true
        } as Field<string>,
        email: {
          id: 'email',
          type: 'email',
          label: 'Email Address',
          required: true,
          validation: {
            pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
          }
        } as Field<string>,
        age: {
          id: 'age',
          type: 'number',
          label: 'Age',
          required: true,
          validation: {
            min: 18,
            max: 120
          }
        } as Field<number>
      }
    },
    {
      id: 'preferences',
      title: 'Preferences',
      fields: {
        theme: {
          id: 'theme',
          type: 'select',
          label: 'Theme',
          options: [
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
            { value: 'system', label: 'System' }
          ],
          defaultValue: 'system'
        } as Field<'light' | 'dark' | 'system'>,
        notifications: {
          id: 'notifications',
          type: 'checkbox',
          label: 'Enable Notifications',
          defaultValue: true
        } as Field<boolean>
      }
    }
  ]
};

// Initialize the form controller with type parameters
const form = connectController(() => FormController<UserForm>(formConfig));

// DOM elements
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const ageInput = document.getElementById('age') as HTMLInputElement;
const nextButton = document.getElementById('next-button') as HTMLButtonElement;

// Event listeners with type safety
nameInput.addEventListener('input', (e) => {
  const target = e.target as HTMLInputElement;
  form.methods.setValue('name', target.value);
});

nameInput.addEventListener('blur', () => {
  form.methods.touchField('name');
});

// Subscribe to form state with types
form.subscribe((state) => {
  // TypeScript ensures type safety
  const name: string = state.values.name || '';
  const isValid: boolean = state.isFormValid;
  
  // Update UI with typed values
  nameInput.value = name;
  nextButton.disabled = !state.stepsValidity.personal;
  
  // Control step visibility
  const personalStep = document.getElementById('personal-step');
  const preferencesStep = document.getElementById('preferences-step');
  
  if (personalStep && preferencesStep) {
    personalStep.style.display = state.currentStep === 'personal' ? 'block' : 'none';
    preferencesStep.style.display = state.currentStep === 'preferences' ? 'block' : 'none';
  }
});

// Type-safe event handlers
document.getElementById('next-button')?.addEventListener('click', () => {
  form.methods.goToStep('preferences');
});

document.getElementById('form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (form.state.isFormValid.value) {
    // Type-safe access to form data
    const formData = form.state.formData.value;
    console.log('Form submitted with:', formData);
  }
});`}
                  language="ts"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="mt-8 space-y-6">
        <h3 className="text-xl font-semibold">Type-Safe Event Handlers</h3>
        <p className="text-muted-foreground">
          TypeScript provides complete type safety for event handlers and subscriptions, ensuring you're always working with the correct data types.
        </p>
        
        <Card>
          <CardContent className="p-0 rounded-xl overflow-hidden">
            <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
              <div className="flex items-center space-x-2">
                <span className="bg-green-500 w-3 h-3 rounded-full"></span>
                <span className="text-zinc-400">typed-event-handlers.ts</span>
              </div>
            </div>
            <SyntaxHighlighter
              code={`import { FormController, FormConfig } from '@uplink-protocol/form-controller';

const form = FormController(formConfig);

// Type-safe subscription to form data changes
form.state.formData.subscribe((formData) => {
  // formData is properly typed as Record<string, Record<string, any>>
  const nameValue = formData.contact?.name; // Type safety for accessing properties
  console.log('Name updated:', nameValue);
});

// Type-safe event handler for step changes
form.state.currentStep.subscribe((stepId) => {
  // stepId is properly typed as string
  console.log('Current step:', stepId);
  
  // You can safely use stepId in other methods
  const isStepValid = form.state.stepsValidity.value[stepId];
});

// Type-safe form submission handler
form.methods.onSubmit(() => {
  if (form.state.isFormValid.value) {
    // Type-safe access to all form data
    const formData = form.state.formData.value;
    
    // Safely access nested properties
    const contactData = formData.contact;
    const name = contactData?.name;
    const email = contactData?.email;
    
    submitToApi({ name, email });
  }
});`}
              language="ts"
            />
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 space-y-6">
        <h3 className="text-xl font-semibold">Custom Form Models</h3>
        <p className="text-muted-foreground">
          For more complex applications, you can create custom form data models with specific types for each field, providing additional type safety and better documentation.
        </p>
        
        <Card>
          <CardContent className="p-0 rounded-xl overflow-hidden">
            <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
              <div className="flex items-center space-x-2">
                <span className="bg-purple-500 w-3 h-3 rounded-full"></span>
                <span className="text-zinc-400">custom-form-model.ts</span>
              </div>
            </div>
            <SyntaxHighlighter
              code={`import { FormController, FormConfig, Field } from '@uplink-protocol/form-controller';

// Define a custom form data model with specific types
interface UserFormData {
  personal: {
    name: string;
    age: number;
  };
  address: {
    street: string;
    city: string;
    zipCode: string;
    country: string;
  };
}

// Create a typed form configuration
const formConfig: FormConfig<UserFormData> = {
  steps: [
    {
      id: 'personal',
      title: 'Personal Information',
      fields: {
        name: {
          id: 'name',
          type: 'text',
          label: 'Full Name',
          required: true
        } as Field<string>,
        age: {
          id: 'age',
          type: 'number',
          label: 'Age',
          required: true,
          validation: {
            min: 18,
            max: 120
          }
        } as Field<number>
      }
    },
    {
      id: 'address',
      title: 'Address Information',
      fields: {
        street: {
          id: 'street',
          type: 'text',
          label: 'Street Address',
          required: true
        } as Field<string>,
        city: {
          id: 'city',
          type: 'text',
          label: 'City',
          required: true
        } as Field<string>,
        zipCode: {
          id: 'zipCode',
          type: 'text',
          label: 'ZIP/Postal Code',
          required: true
        } as Field<string>,
        country: {
          id: 'country',
          type: 'select',
          label: 'Country',
          required: true,
          options: [
            { value: 'us', label: 'United States' },
            { value: 'ca', label: 'Canada' },
            { value: 'uk', label: 'United Kingdom' }
          ]
        } as Field<string>
      }
    }
  ]
};

// Initialize with the generic type
const form = FormController<UserFormData>(formConfig);

// Now all methods and state are strongly typed to your data model
form.methods.updateField('personal', 'age', 30); // Type safe - age is number
form.methods.updateField('address', 'zipCode', '10001'); // Type safe - zipCode is string

// This would cause TypeScript errors:
// form.methods.updateField('personal', 'nonExistentField', 'value'); // Error: 'nonExistentField' doesn't exist
// form.methods.updateField('personal', 'age', 'thirty'); // Error: 'thirty' is not assignable to type 'number'

// Strongly-typed access to form data
form.state.formData.subscribe((formData) => {
  // Fully typed as UserFormData
  const age: number = formData.personal.age; // Properly typed as number
  const country: string = formData.address.country; // Properly typed as string
  
  // TypeScript will catch errors:
  // const invalid = formData.personal.invalidProperty; // Error: Property 'invalidProperty' does not exist
});`}
              language="ts"
            />
          </CardContent>
        </Card>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border border-purple-200 dark:border-purple-800/50 mt-4">
          <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-3">Advanced TypeScript Tips</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-medium text-purple-700 dark:text-purple-400">•</span>
              <span>Create type-safe custom validator functions by defining proper parameter and return types</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-purple-700 dark:text-purple-400">•</span>
              <span>Use TypeScript utility types like <code className="bg-purple-100 dark:bg-purple-900/40 px-1.5 py-0.5 rounded">Partial</code>, <code className="bg-purple-100 dark:bg-purple-900/40 px-1.5 py-0.5 rounded">Pick</code>, and <code className="bg-purple-100 dark:bg-purple-900/40 px-1.5 py-0.5 rounded">Omit</code> to create variations of your form data types</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-purple-700 dark:text-purple-400">•</span>
              <span>Create type assertions for dynamic validators to ensure proper usage</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-purple-700 dark:text-purple-400">•</span>
              <span>Use IDE plugins that enhance TypeScript experience (like VS Code's TypeScript language features)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
