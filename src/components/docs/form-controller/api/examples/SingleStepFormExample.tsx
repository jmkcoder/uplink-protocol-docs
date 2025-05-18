import React from 'react';
import { CodeBlock } from '@/components/code-block';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";

const SingleStepFormExample: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Single-Step Form Example</h3>
      
      <p className="text-muted-foreground">
        A basic form with field validation and submission handling. Perfect starting point for 
        learning Form Controller basics.
      </p>
      
      <div className="grid md:grid-cols-1 gap-6">
        <Card className="p-5">
          <h4 className="text-lg font-medium mb-3">Basic Form Setup</h4>
          <p className="text-sm text-muted-foreground mb-4">
            The simplest form setup uses a single step with basic field validation:
          </p>
          <CodeBlock language="tsx" code={`// Define your form configuration
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

// Initialize the form controller
const { state, methods } = useUplink(
  () => FormController(formConfig),
  { trackBindings: "all" }
);`} />
        </Card>
        
        <Card className="p-5">
          <h4 className="text-lg font-medium mb-3">Form Component Implementation</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Implement your form with fields and error handling:
          </p>
          <CodeBlock language="tsx" code={`<form onSubmit={handleSubmit}>
  <div>
    <label>
      Full Name <span className="text-red-500">*</span>
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
      Email Address <span className="text-red-500">*</span>
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
</form>`} />
        </Card>
      </div>
      
      <div className="p-5 border rounded-lg">
        <h4 className="text-lg font-medium mb-4">Form Submission Handling</h4>
        <p className="text-muted-foreground mb-4">
          Implement form submission with validation handling:
        </p>
        <CodeBlock language="tsx" code={`// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  const result = methods.submitForm();

  if (result.success) {
    console.log('Form data:', result.data);
    // Process the valid form data
    // For example: make an API call, show success message, etc.
    alert("Form submitted successfully!");
  } else {
    // Handle validation errors
    alert("Please fix the errors before submitting.");
  }
};`} />      </div>
      
      <div className="p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-md">
        <h4 className="text-lg font-medium mb-3">Key Benefits</h4>
        <p className="text-muted-foreground mb-4">
          This simple form example demonstrates:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Basic form configuration and setup</li>
          <li>Field validation with pattern matching</li>
          <li>Form submission and data handling</li>
          <li>Error reporting and validation feedback</li>
          <li>Simple state management with minimal code</li>
        </ul>
        
        <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-md text-sm">
          <span className="font-semibold">Best Practice:</span> Always provide clear validation 
          feedback to users and disable the submit button when the form is invalid to prevent 
          unnecessary submission attempts.
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
              code={`import { FormController } from "@uplink-protocol/form-controller";

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

// Create a form controller instance
const form = FormController(formConfig);

// Get DOM elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submit");
const contactForm = document.getElementById("contact-form");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");

// Listen for state changes with individual bindings
form.bindings.formData.subscribe((data) => {
  // Update inputs with current values
  nameInput.value = data.contact?.name || "";
  emailInput.value = data.contact?.email || "";
});

form.bindings.fieldErrors.subscribe((errors) => {
  // Update error messages
  nameError.textContent = errors.contact?.name || "";
  nameError.style.display = errors.contact?.name ? "block" : "none";
  
  emailError.textContent = errors.contact?.email || "";
  emailError.style.display = errors.contact?.email ? "block" : "none";
});

// Setup input change handlers
nameInput.addEventListener("input", (e) => {
  form.methods.updateField('contact', 'name', e.target.value);
});

emailInput.addEventListener("input", (e) => {
  form.methods.updateField('contact', 'email', e.target.value);
});

// Handle form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Validate the form first
  const isValid = form.methods.validateForm(true);
  
  if (isValid) {
    const formData = form.methods.getFlatData();
    console.log('Form data:', formData);
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
  );
};

export default SingleStepFormExample;
