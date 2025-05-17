// src/components/docs/form-controller/api/StateApi.tsx
import React from 'react';
import { CodeBlock } from '@/components/code-block';
import { Card, CardContent } from "@/components/ui/card";

type CodeBlockLanguage = "js" | "jsx" | "ts" | "tsx" | "html" | "css" | "shell" | "vue" | "svelte";

const BindingDetail: React.FC<{ name: string; type: string; description: string; exampleCode?: string }> = ({ name, type, description, exampleCode }) => (
  <section className="py-6 mb-8 border-b border-border last:border-b-0 last:mb-0">
    <h3 className="text-2xl font-semibold mb-2 text-foreground"><code>{name}</code></h3>
    <p className="text-sm text-muted-foreground mb-3">Type: <code className="text-xs bg-muted px-1 py-0.5 rounded">{type}</code></p>
    <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
    {exampleCode && (
      <div className="mt-4">
        <CodeBlock language={"ts" as CodeBlockLanguage} code={exampleCode} />
      </div>
    )}
  </section>
);

const StateApi: React.FC = () => {
  return (
    <div className="space-y-8">      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">State (Bindings)</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          The FormController exposes its internal state through reactive bindings. Each binding is an object 
          with a <code>current</code> property holding the state value, and a <code>subscribe</code> method to listen for changes. 
          Some bindings also include a <code>set</code> method for direct state manipulation, though using dedicated 
          controller methods (see Methods tab) is often preferred for maintaining data integrity and triggering related logic.
        </p>
      </div>

      {/* API Overview Card */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">State Management API</h3>
        <p className="text-muted-foreground mb-2">
          Form Controller provides a reactive state management system through bindings.
          These bindings allow you to observe and react to changes in the form state.
        </p>
        <CodeBlock language="ts" code={`// Accessing and subscribing to form state
import { FormController } from "@uplink-protocol/form-controller";

const controller = FormController(formConfig);
const { bindings } = controller;

// Get current state
const currentData = bindings.formData.current;
const currentStep = bindings.currentStepIndex.current;

// Subscribe to state changes
const unsubscribe = bindings.formData.subscribe(newData => {
  console.log('Form data changed:', newData);
});

// Clean up subscription when done
// unsubscribe();`} />
      </div>

      {/* State Categories Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Reactive Bindings</h3>
            </div>
            <p className="text-muted-foreground">Observable state properties with subscribe/unsubscribe pattern for reactive UI updates.</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Data Access</h3>
            </div>
            <p className="text-muted-foreground">Current-value access to form data, field errors, and configuration state properties.</p>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">History Tracking</h3>
            </div>
            <p className="text-muted-foreground">Track user interactions and form state changes for analytics and debugging.</p>
          </CardContent>
        </Card>
      </div>      <BindingDetail
        name="config"
        type="FormConfig"
        description="The current form configuration object that defines the structure and behavior of the form. This binding allows you to observe when configuration changes are made through the updateConfig method."
        exampleCode={`const { bindings } = FormController(initialConfig);
// Access the current configuration
const currentFormConfig = bindings.config.current;

// Subscribe to configuration changes (e.g., when steps are added/removed)
const unsubscribe = bindings.config.subscribe(newConfig => {
  console.log('Config changed:', newConfig);
  // Update UI or perform side effects based on the new configuration
});`}
      />      <BindingDetail
        name="currentStepIndex"
        type="number"
        description="The 0-based index of the currently active step in the form. This binding updates whenever navigation methods like nextStep, prevStep, or goToStep are called, making it essential for UI components that need to track the current step."
        exampleCode={`const { bindings } = FormController(initialConfig);
// Get the current step index
const currentIndex = bindings.currentStepIndex.current;

// Subscribe to step changes to update UI
const unsubscribe = bindings.currentStepIndex.subscribe(index => {
  console.log('Current step index:', index);
  
  // Example: Update progress indicator
  updateProgressBar(index, totalSteps);
  
  // Example: Scroll to the top when step changes
  window.scrollTo(0, 0);
});`}
      />

      <BindingDetail
        name="currentStep"
        type="FormStep | undefined"
        description="The configuration object (FormStep) for the currently active step, or undefined if no steps exist. See the Configuration tab for FormStep details."
        exampleCode={`const { bindings } = FormController(initialConfig);
const currentStepDetails = bindings.currentStep.current;
if (currentStepDetails) {
  console.log('Current step title:', currentStepDetails.title);
}
const unsubscribe = bindings.currentStep.subscribe(step => {
  if (step) {
    console.log('Current step details updated:', step.title);
  }
});`}
      />      <BindingDetail
        name="formData"
        type="Record<string, Record<string, any>>"
        description="The core state binding that contains all user-entered data in the form. Structured hierarchically with step IDs as top-level keys and field IDs as nested keys. This binding updates whenever any field value changes, making it ideal for real-time form processing, data persistence, or conditional UI rendering."
        exampleCode={`const { bindings } = FormController(initialConfig);

// Get all current form data
const allData = bindings.formData.current;

// Access specific field values (with optional chaining for safety)
const emailValue = allData?.contactDetails?.email;
const phoneValue = allData?.contactDetails?.phone;
console.log('Contact info:', emailValue, phoneValue);

// Subscribe to any data changes in the entire form
const unsubscribe = bindings.formData.subscribe(data => {
  console.log('Form data updated:', data);
  
  // Example: Save form data to localStorage for persistence
  localStorage.setItem('savedFormData', JSON.stringify(data));
  
  // Example: Enable/disable submit button based on specific values
  const isComplete = data?.preferences?.agreeToTerms === true;
  submitButton.disabled = !isComplete;
});`}
      />

      <BindingDetail
        name="stepsValidity"
        type="Record<string, boolean>"
        description="An object indicating the validity status of each step. Keys are step IDs, values are booleans (true if valid, false otherwise)."
        exampleCode={`const { bindings } = FormController(initialConfig);
// Example: Accessing validity, assuming 'addressStep' exists
// const isAddressStepValid = bindings.stepsValidity.current?.addressStep;
// console.log('Is Address Step valid?', isAddressStepValid);
const unsubscribe = bindings.stepsValidity.subscribe(validityMap => {
  console.log('Step validity states:', validityMap);
});`}
      />

      <BindingDetail
        name="isCurrentStepValid"
        type="boolean"
        description="A boolean indicating whether the current active step is valid."
        exampleCode={`const { bindings } = FormController(initialConfig);
const isMyCurrentStepOkay = bindings.isCurrentStepValid.current;
const unsubscribe = bindings.isCurrentStepValid.subscribe(isValid => {
  console.log('Current step validity:', isValid);
});`}
      />

      <BindingDetail
        name="fieldErrors"
        type="Record<string, Record<string, string>>"
        description="An object containing current validation error messages for fields, structured by stepId and then fieldId. E.g., { contactDetails: { email: 'Invalid email format' } }."
        exampleCode={`const { bindings } = FormController(initialConfig);
// Example: Accessing errors, assuming 'contactDetails' step and 'email' field exist
// const emailError = bindings.fieldErrors.current?.contactDetails?.email;
// if (emailError) console.log('Email error:', emailError);
const unsubscribe = bindings.fieldErrors.subscribe(errors => {
  console.log('All field errors:', errors);
});`}
      />

      <BindingDetail
        name="totalSteps"
        type="number"
        description="The total number of steps in the form."
        exampleCode={`const { bindings } = FormController(initialConfig);
const count = bindings.totalSteps.current;
console.log('Total steps in form:', count);`}
      />

      <BindingDetail
        name="isLastStep"
        type="boolean"
        description="A boolean indicating if the current step is the last step in the form."
        exampleCode={`const { bindings } = FormController(initialConfig);
if (bindings.isLastStep.current) {
  console.log('This is the final step!');
}`}
      />

      <BindingDetail
        name="isFirstStep"
        type="boolean"
        description="A boolean indicating if the current step is the first step in the form."
        exampleCode={`const { bindings } = FormController(initialConfig);
if (bindings.isFirstStep.current) {
  console.log('Welcome to the first step!');
}`}
      />

      <BindingDetail
        name="isFormValid"
        type="boolean"
        description="A boolean indicating whether the entire form (all steps and fields) is currently valid."
        exampleCode={`const { bindings } = FormController(initialConfig);
const canSubmit = bindings.isFormValid.current;
const unsubscribe = bindings.isFormValid.subscribe(isValid => {
  console.log('Overall form validity:', isValid);
});`}
      />

    </div>
  );
};

export default StateApi;
