import React from 'react';
import { CodeBlock } from '@/components/code-block';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";

const MultiStepFormExample: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Multi-Step Form Example</h3>
      
      <p className="text-muted-foreground">
        A more advanced form with multiple steps and navigation controls. Shows how to implement 
        wizard-like forms with progressive data collection.
      </p>
      
      <div className="grid md:grid-cols-1 gap-6">
        <Card className="p-5">
          <h4 className="text-lg font-medium mb-3">Multi-Step Configuration</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Configure multiple form steps for progressive data collection:
          </p>
          <CodeBlock language="tsx" code={`const formConfig = {
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
};`} />
        </Card>
        
        <Card className="p-5">
          <h4 className="text-lg font-medium mb-3">Step Navigation</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Implement navigation between steps with validation:
          </p>
          <CodeBlock language="tsx" code={`// Move to next step after validating current step
const handleNext = (e) => {
  e.preventDefault();
  methods.nextStep();
};

// Move to previous step
const handlePrevious = (e) => {
  e.preventDefault();
  methods.prevStep();
};

// Navigation buttons
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
</div>`} />
        </Card>
      </div>
      
      <div className="p-5 border rounded-lg">
        <h4 className="text-lg font-medium mb-4">Step-Based Rendering</h4>
        <p className="text-muted-foreground mb-4">
          Render different content based on the current step:
        </p>
        <CodeBlock language="tsx" code={`// Render current step fields
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

  // For other steps, render fields dynamically
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
};`} />
      </div>
      
      <div className="p-5 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-md">
        <h4 className="text-lg font-medium mb-3">Key Features</h4>
        <p className="text-muted-foreground mb-4">
          This multi-step form example demonstrates:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Step-based navigation with progress indicator</li>
          <li>State persistence between steps</li>
          <li>Validation before progressing to next step</li>
          <li>Step completion tracking and navigation controls</li>
          <li>Comprehensive form submission with aggregated data</li>
        </ul>
        
        <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-md text-sm">
          <span className="font-semibold">Implementation Highlights:</span> Uses <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">currentStep</code>, <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">prevStep</code>, and <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">nextStep</code> methods for navigation. Validates each step with <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">validateStep</code> method. Tracks validation with <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">isCurrentStepValid</code> state. Collects all form data with <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">getFlatData</code> on final submission.
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

  // Move to next step after validating current step
  const handleNext = (e) => {
    e.preventDefault();
    methods.nextStep();
  };

  // Move to previous step
  const handlePrevious = (e) => {
    e.preventDefault();
    methods.prevStep();
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

    // For other steps, render fields dynamically
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

// Render review step data
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

// Define your form configuration
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
  );
};

export default MultiStepFormExample;
