import React from 'react';
import { CodeBlock } from '@/components/code-block';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";

const AdvancedValidationFormExample: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Advanced Validation Example</h3>
      
      <p className="text-muted-foreground">
        A form showcasing custom validators and dynamic field validation rules. Demonstrates complex validation patterns 
        like conditional requirements and field matching.
      </p>
      
      <div className="grid md:grid-cols-1 gap-6">
        <Card className="p-5">
          <h4 className="text-lg font-medium mb-3">Custom Validator Registration</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Register custom validators that can access the entire form state:
          </p>
          <CodeBlock language="tsx" code={`// Register custom validators
useEffect(() => {
  // Register requiredIf validator
  methods.registerValidator('requiredIf', (value, context) => {
    const { dependsOn, dependsOnValue } = context.field.validation.dynamicValidatorParams || {};
    
    if (dependsOn) {
      // Get the value of the field this field depends on
      const stepId = context.field.stepId;
      const dependentValue = context.formData[stepId][dependsOn];
      
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
    const { matchField, errorMessage } = context.field.validation.dynamicValidatorParams || {};
    
    if (matchField) {
      const stepId = context.field.stepId;
      const fieldToMatch = context.formData[stepId][matchField];
      
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
}, [methods]);`} />
        </Card>
        
        <Card className="p-5">
          <h4 className="text-lg font-medium mb-3">Dynamic Field Configuration</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Configure fields with dynamic validation rules:
          </p>
          <CodeBlock language="tsx" code={`const formConfig = {
  steps: [
    {
      id: 'contact',
      title: 'Contact Information',
      fields: {
        // Other fields...
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
};`} />
        </Card>
      </div>
      
      <div className="p-5 border rounded-lg">
        <h4 className="text-lg font-medium mb-4">Conditional UI Rendering</h4>
        <p className="text-muted-foreground mb-4">
          Update UI based on dynamic validation state:
        </p>
        <CodeBlock language="tsx" code={`// Render phone number field with conditional requirement
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

// Subscription checkbox that affects other fields
<div className="form-field checkbox">
  <input
    type="checkbox"
    id="subscribe"
    checked={!!state.formData.contact?.subscribe}
    onChange={(e) => methods.updateField('contact', 'subscribe', e.target.checked)}
  />
  <label htmlFor="subscribe">Subscribe to newsletter</label>
</div>`} />
      </div>
      
      <div className="p-5 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded-md">
        <h4 className="text-lg font-medium mb-3">Custom Validation Features</h4>
        <p className="text-muted-foreground mb-4">
          This advanced validation example demonstrates:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Conditional field requirements based on other field values</li>
          <li>Field matching validation (password confirmation)</li>
          <li>Custom validator registration using Form Controller API</li>
          <li>Dynamic error messages based on validation context</li>
          <li>Real-time validation feedback</li>
        </ul>
        
        <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-md text-sm">
          <span className="font-semibold">Implementation Highlights:</span> Uses <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">registerValidator</code> to define custom validation rules. Implements <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">requiredIf</code> validator for conditional field requirements. Implements <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">equals</code> validator for field matching validation. Uses <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">dynamicValidatorParams</code> to configure validation behavior. Demonstrates accessing validation context to create interdependent field validation.
        </div>
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
            <h4 className="text-lg font-semibold">Complete Code Example</h4>
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

  // Initialize the form controller
  const { state, methods } = useUplink(
    () => FormController(formConfig),
    { trackBindings: "all" }
  );

  // Register custom validators
  useEffect(() => {
    // Register requiredIf validator
    methods.registerValidator('requiredIf', (value, context) => {
      const { dependsOn, dependsOnValue } = context.field.validation.dynamicValidatorParams || {};
      
      if (dependsOn) {
        // Get the value of the field this field depends on
        const stepId = context.field.stepId;
        const dependentValue = context.formData[stepId][dependsOn];
        
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
      const { matchField, errorMessage } = context.field.validation.dynamicValidatorParams || {};
      
      if (matchField) {
        const stepId = context.field.stepId;
        const fieldToMatch = context.formData[stepId][matchField];
        
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

// Initialize the form controller
const { state, methods } = useUplink(
  () => FormController(formConfig),
  { trackBindings: "all" }
);

// Register custom validators
onMounted(() => {
  // Register requiredIf validator
  methods.registerValidator('requiredIf', (value, context) => {
    const { dependsOn, dependsOnValue } = context.field.validation.dynamicValidatorParams || {};
    
    if (dependsOn) {
      // Get the value of the field this field depends on
      const stepId = context.field.stepId;
      const dependentValue = context.formData[stepId][dependsOn];
      
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
    const { matchField, errorMessage } = context.field.validation.dynamicValidatorParams || {};
    
    if (matchField) {
      const stepId = context.field.stepId;
      const fieldToMatch = context.formData[stepId][matchField];
      
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
        :checked="!!state.formData.contact?.subscribe"
        @change="(e) => methods.updateField('contact', 'subscribe', e.target.checked)"
      />
      <label for="subscribe">Subscribe to newsletter</label>
    </div>

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

  // Initialize the form controller
  const { state, methods } = useUplink(
    () => FormController(formConfig),
    { trackBindings: "all" }
  );

  // Register custom validators
  onMount(() => {
    // Register requiredIf validator
    methods.registerValidator('requiredIf', (value, context) => {
      const { dependsOn, dependsOnValue } = context.field.validation.dynamicValidatorParams || {};
      
      if (dependsOn) {
        // Get the value of the field this field depends on
        const stepId = context.field.stepId;
        const dependentValue = context.formData[stepId][dependsOn];
        
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
      const { matchField, errorMessage } = context.field.validation.dynamicValidatorParams || {};
      
      if (matchField) {
        const stepId = context.field.stepId;
        const fieldToMatch = context.formData[stepId][matchField];
        
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
              code={`import {  } from " @uplink-protocol/core";
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

// Create form controller instance
const form = FormController(formConfig);

// DOM element references
const formElement = document.getElementById('validation-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subscribeCheckbox = document.getElementById('subscribe');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

// Register custom validators
form.methods.registerValidator('requiredIf', (value, context) => {
  const { dependsOn, dependsOnValue } = context.field.validation.dynamicValidatorParams || {};
  
  if (dependsOn) {
    // Get the value of the field this field depends on
    const stepId = context.field.stepId;
    const dependentValue = context.formData[stepId][dependsOn];
    
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

form.methods.registerValidator('equals', (value, context) => {
  const { matchField, errorMessage } = context.field.validation.dynamicValidatorParams || {};
  
  if (matchField) {
    const stepId = context.field.stepId;
    const fieldToMatch = context.formData[stepId][matchField];
    
    if (value !== fieldToMatch) {
      return errorMessage || \`\${context.field.label} must match \${matchField}\`;
    }
  }
  
  return true; // validation passes
});

// Setup event listeners for inputs
nameInput.addEventListener('input', (e) => {
  form.methods.updateField('contact', 'name', e.target.value);
});

emailInput.addEventListener('input', (e) => {
  form.methods.updateField('contact', 'email', e.target.value);
});

subscribeCheckbox.addEventListener('change', (e) => {
  form.methods.updateField('contact', 'subscribe', e.target.checked);
  
  // Update phone number required label
  const phoneLabel = document.querySelector('label[for="phone"] .required');
  if (e.target.checked) {
    if (!phoneLabel) {
      const requiredSpan = document.createElement('span');
      requiredSpan.className = 'required';
      requiredSpan.textContent = '*';
      document.querySelector('label[for="phone"]').appendChild(requiredSpan);
    }
  } else if (phoneLabel) {
    phoneLabel.remove();
  }
});

phoneInput.addEventListener('input', (e) => {
  form.methods.updateField('contact', 'phoneNumber', e.target.value);
});

passwordInput.addEventListener('input', (e) => {
  form.methods.updateField('contact', 'password', e.target.value);
});

confirmPasswordInput.addEventListener('input', (e) => {
  form.methods.updateField('contact', 'confirmPassword', e.target.value);
});

// Handle form submission
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Validate the entire form
  const isValid = form.methods.validateForm(true);
  
  if (isValid) {
    const formData = form.methods.getFlatData();
    console.log('Form data:', formData);
    alert("Form submitted successfully!");
  } else {
    alert("Please fix the errors before submitting.");
  }
});

// Update UI based on state changes
// Subscribe to form data changes
form.bindings.formData.subscribe((data) => {
  // Update input values
  nameInput.value = data.contact?.name || '';
  emailInput.value = data.contact?.email || '';
  subscribeCheckbox.checked = !!data.contact?.subscribe;
  phoneInput.value = data.contact?.phoneNumber || '';
  passwordInput.value = data.contact?.password || '';
  confirmPasswordInput.value = data.contact?.confirmPassword || '';
  
  // Update required status for phone based on subscription status
  const existingRequiredMark = phoneLabel.querySelector('.required');
  if (data.contact?.subscribe) {
    if (!existingRequiredMark) {
      const requiredSpan = document.createElement('span');
      requiredSpan.className = 'required';
      requiredSpan.textContent = '*';
      phoneLabel.appendChild(requiredSpan);
    }
  } else if (existingRequiredMark) {
    existingRequiredMark.remove();
  }
});

// Subscribe to error changes
form.bindings.fieldErrors.subscribe((errors) => {
  // Update error messages
  nameError.textContent = errors.contact?.name || '';
  nameError.style.display = errors.contact?.name ? 'block' : 'none';
  
  emailError.textContent = errors.contact?.email || '';
  emailError.style.display = errors.contact?.email ? 'block' : 'none';
  
  phoneError.textContent = errors.contact?.phoneNumber || '';
  phoneError.style.display = errors.contact?.phoneNumber ? 'block' : 'none';
  
  passwordError.textContent = errors.contact?.password || '';
  passwordError.style.display = errors.contact?.password ? 'block' : 'none';
  
  confirmPasswordError.textContent = errors.contact?.confirmPassword || '';
  confirmPasswordError.style.display = errors.contact?.confirmPassword ? 'block' : 'none';
});

// Subscribe to form validity changes
form.bindings.isFormValid.subscribe((isValid) => {
  // Update submit button state
  submitButton.disabled = !isValid;
});

// Clean up validators when page unloads
window.addEventListener('unload', () => {
  form.methods.unregisterValidator('requiredIf');
  form.methods.unregisterValidator('equals');
});`}
              language="js"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdvancedValidationFormExample;
