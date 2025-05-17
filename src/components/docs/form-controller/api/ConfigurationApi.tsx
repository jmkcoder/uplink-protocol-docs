// src/components/docs/form-controller/api/ConfigurationApi.tsx
import React from 'react';
import { CodeBlock } from '@/components/code-block';
import { Card, CardContent } from "@/components/ui/card";

// Define a type for the language prop that matches CodeBlock's expected types
type CodeBlockLanguage = "js" | "jsx" | "ts" | "tsx" | "html" | "css" | "shell" | "vue" | "svelte";

const DetailSection: React.FC<{ title: string; children: React.ReactNode; code?: string; language?: CodeBlockLanguage; isInterface?: boolean }> = ({ title, children, code, language, isInterface = false }) => (
  <section className="py-6 mb-8 border-b border-border last:border-b-0 last:mb-0">
    <h3 className={`text-2xl font-semibold mb-3 text-foreground ${isInterface ? "font-mono" : ""}`}>{isInterface ? title : <code>{title}</code>}</h3>
    <div className="text-muted-foreground text-base leading-relaxed space-y-3">
      {children}
    </div>
    {code && language && (
      <div className="mt-4">
        <CodeBlock language={language} code={code} />
      </div>
    )}
  </section>
);

const ConfigurationApi: React.FC = () => {
  return (
    <div className="space-y-8">      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">Form Configuration</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The FormController is initialized with a configuration object that defines its structure and behavior. 
          Key parts of this configuration are detailed below.
        </p>
      </div>

      {/* API Overview Card */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">Configuration API</h3>
        <p className="text-muted-foreground mb-2">
          The configuration objects below define the structure and behavior of your forms.
          They provide a declarative way to specify form fields, steps, validation rules, and more.
        </p>
        <CodeBlock language="ts" code={`// Basic FormController configuration
import { FormController } from "@uplink-protocol/form-controller";

const formConfig = {
  id: "registration-form",
  steps: [
    {
      id: "personal-info",
      fields: {
        name: { type: "text", label: "Full Name", validations: [{ type: "required", message: "Name is required" }] },
        email: { type: "email", label: "Email Address", validations: [{ type: "email", message: "Invalid email format" }] }
      }
    }
  ]
};

// Initialize the form controller with the configuration
const controller = FormController(formConfig);`} />
      </div>
      
      {/* Configuration Categories Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Form Structure</h3>
            </div>
            <p className="text-muted-foreground">Define form layout with steps, fields, and their relationships.</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Field Options</h3>
            </div>
            <p className="text-muted-foreground">Customize field behavior with properties for appearance, validation, and interactivity.</p>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Event Callbacks</h3>
            </div>
            <p className="text-muted-foreground">Hook into form lifecycle events with callbacks for field changes, step navigation, and form submission.</p>
          </CardContent>
        </Card>
      </div>

      <DetailSection
        title="FormConfig Interface"
        isInterface
        code={`interface FormConfig {
  id: string; // Unique identifier for the form
  steps: FormStep[]; // Array of form steps
  initialData?: Record<string, Record<string, any>>; // Optional initial data for the form
  globalConfig?: Record<string, any>; // Optional global settings
  onFieldChange?: (stepId: string, fieldId: string, value: any, formData: Record<string, Record<string, any>>) => void;
  onStepChange?: (currentStepIndex: number, currentStep: FormStep) => void;
  onSubmit?: (formData: Record<string, Record<string, any>>) => void | Promise<void>;
  // ... other potential properties
}`}
        language="ts"
      >        <p>The primary configuration object passed to the <code>FormController</code>. It defines all aspects of the form, including its steps, fields, initial data, and lifecycle callbacks. This object is the heart of your form's structure and behavior.</p>
        <p><strong>Key Properties:</strong></p>
        <ul className="space-y-1 list-disc list-inside ml-4">
          <li><code>id</code>: A unique identifier for the form. Used for tracking and distinguishing between multiple forms in the same application.</li>
          <li><code>steps</code>: An array of <code>FormStep</code> objects, each defining a step in the form. For single-step forms, this would be an array with just one element.</li>
          <li><code>initialData</code>: (Optional) Pre-populates the form with data when it initializes. Useful for edit modes or when continuing a previously saved form session.</li>
          <li><code>globalConfig</code>: (Optional) A container for global form settings like submission endpoints, theme configuration, or application-specific metadata.</li>
          <li><code>onFieldChange</code>: (Optional) A callback function triggered whenever any field value changes. Useful for real-time processing, dependent field updates, or analytics tracking.</li>
          <li><code>onStepChange</code>: (Optional) A callback function triggered when the active step changes. Can be used for analytics, loading additional data, or performing side effects.</li>
          <li><code>onSubmit</code>: (Optional) A callback function triggered when the form is successfully submitted. This is where you typically handle the form data, such as sending it to a server.</li>
        </ul>
        <p className="mt-2 text-sm">Refer to <code>@uplink-protocol/form-controller/dist/interfaces/form-config.interface.d.ts</code> for the complete definition.</p>
      </DetailSection>

      <DetailSection
        title="FormStep Interface"
        isInterface
        code={`interface FormStep {
  id: string; // Unique identifier for the step
  title: string; // Display title for the step
  fields: Field[]; // Array of fields within this step
  // ... other potential properties
}`}
        language="ts"
      >        <p>Defines a single step within a multi-step form workflow. Each step contains its own set of fields and can be navigated to independently. Steps are the organizational units that group related fields together.</p>
        <p><strong>Key Properties:</strong></p>
        <ul className="space-y-1 list-disc list-inside ml-4">
          <li><code>id</code>: A unique identifier for this step within the form. Used for programmatic access and navigation.</li>
          <li><code>title</code>: A user-friendly title for the step, often displayed in step indicators, progress bars, or navigation menus.</li>
          <li><code>description</code>: (Optional) Additional explanatory text about the purpose of this step.</li>
          <li><code>fields</code>: An object containing all the field definitions for this step, where keys are field IDs and values are Field configuration objects.</li>
          <li><code>validateOnNext</code>: (Optional) When true, fields in this step will be validated before allowing navigation to the next step.</li>
          <li><code>onEnter</code>: (Optional) A callback function triggered when this step becomes active.</li>
          <li><code>onExit</code>: (Optional) A callback function triggered when navigating away from this step.</li>
        </ul>
        <p className="mt-2 text-sm">Refer to <code>@uplink-protocol/form-controller/dist/interfaces/form-step.interface.d.ts</code> for the complete definition.</p>
      </DetailSection>

      <DetailSection
        title="Field Interface"
        isInterface
        code={`interface Field {
  id: string; // Unique identifier for the field (should be unique within the step)
  type: string; // Type of the field (e.g., 'text', 'email', 'select', 'custom-component')
  label: string; // Display label for the field
  defaultValue?: any; // Optional default value for the field
  placeholder?: string; // Optional placeholder text
  validations?: Validation[]; // Array of validation rules for the field
  options?: { label: string; value: any }[]; // For 'select', 'radio' types
  // ... other properties depending on field type
}`}
        language="ts"
      >        <p>Defines a single input field within a form step. Fields are the basic building blocks that collect and validate user input. Every input element in your form corresponds to a Field configuration object.</p>
        <p><strong>Key Properties:</strong></p>
        <ul className="space-y-1 list-disc list-inside ml-4">
          <li><code>id</code>: Unique identifier for the field within its step. Used to access the field's value and errors programmatically.</li>
          <li><code>type</code>: Defines the input type and behavior of the field. Standard HTML input types like 'text', 'email', 'number', 'checkbox' are supported, along with complex types like 'select', 'radio', and custom component types.</li>
          <li><code>label</code>: Human-readable text displayed as the field's label in the UI. Critical for accessibility and user understanding.</li>
          <li><code>defaultValue</code>: (Optional) The initial value of the field when the form loads, if not otherwise specified in initialData.</li>
          <li><code>placeholder</code>: (Optional) Hint text displayed within the input when it's empty, providing guidance on expected input format.</li>
          <li><code>required</code>: (Optional) Boolean flag indicating if the field must have a value. Creates an implicit validation rule.</li>
          <li><code>disabled</code>: (Optional) Boolean flag indicating if the field should be disabled/non-interactive.</li>
          <li><code>hidden</code>: (Optional) Boolean flag indicating if the field should be hidden but still part of the form data.</li>
          <li><code>validations</code>: (Optional) An array of <code>Validation</code> objects specifying validation rules for this field. These determine what values are considered valid.</li>
          <li><code>options</code>: (Optional) For fields like 'select', 'radio', or 'checkbox', this array provides the available choices, each with a label and value.</li>
          <li><code>dependsOn</code>: (Optional) Specifies field dependencies, allowing fields to conditionally appear or change based on other field values.</li>
          <li><code>onChange</code>: (Optional) Field-specific callback triggered when this field's value changes.</li>
        </ul>
        <p className="mt-2 text-sm">This interface is typically defined in your application and used within <code>FormStep</code>. Refer to <code>@uplink-protocol/form-controller/dist/interfaces/field.interface.d.ts</code> for more context.</p>
      </DetailSection>

      <DetailSection title="config (Binding)">
        <p>A reactive binding that holds the current <code>FormConfig</code> object. You can subscribe to this binding to react to changes in the form's configuration if it's updated dynamically.</p>
        <CodeBlock
          language="ts"
          code={`// Accessing the config binding
const { bindings } = FormController(initialFormConfig);

// Get current config
const currentConfig = bindings.config.current;

// Subscribe to config changes
const unsubscribe = bindings.config.subscribe(newConfig => {
  console.log('Form configuration updated:', newConfig);
});

// To update the config (see updateConfig method)
// bindings.config.set(newConfiguration); // Or use the dedicated updateConfig method`}
        />
        <p className="mt-3">This binding provides <code>current</code>, <code>subscribe()</code>, and <code>set()</code> properties. While <code>set()</code> can update the config, it's generally recommended to use the <code>updateConfig</code> method for more controlled updates.</p>
      </DetailSection>

      <DetailSection title="updateConfig (Method)">
        <p>A method to dynamically update the entire form configuration after the controller has been initialized. See the Methods tab for its full signature and details.</p>
        <CodeBlock
          language="ts"
          code={`// Signature from Methods tab:
// updateConfig: (newConfig: FormConfig) => void;

const { methods } = FormController(initialFormConfig);

const newConfiguration: FormConfig = {
  id: 'myFormV2',
  steps: [/* ... new or modified steps ... */],
  // ... other configuration properties
};

methods.updateConfig(newConfiguration);`}
        />
        <p className="mt-3">This is useful for scenarios where the form structure needs to change based on user actions or other application state, without re-instantiating the controller.</p>
      </DetailSection>
    </div>
  );
};

export default ConfigurationApi;
