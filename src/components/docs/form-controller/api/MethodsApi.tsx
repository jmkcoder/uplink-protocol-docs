// src/components/docs/form-controller/api/MethodsApi.tsx
import React from 'react';
import { CodeBlock } from '@/components/code-block';
import { Card, CardContent } from "@/components/ui/card";

const MethodDetail: React.FC<{ title: string; signature: string; description: string; params?: { name: string; type: string; description: string }[]; returns?: string }> = ({ title, signature, description, params, returns }) => (
  <section className="py-6 mb-8 border-b border-border last:border-b-0 last:mb-0">
    <h3 className="text-2xl font-semibold mb-3 text-foreground"><code>{title}</code></h3>
    <CodeBlock language="ts" code={signature} />
    <p className="mt-4 text-muted-foreground text-base leading-relaxed">{description}</p>
    {params && params.length > 0 && (
      <div className="mt-5">
        <h4 className="text-lg font-medium mb-2 text-foreground">Parameters:</h4>
        <ul className="space-y-2 list-disc list-inside ml-4 text-muted-foreground">
          {params.map(p => (
            <li key={p.name}>
              <code className="text-sm bg-muted px-1 py-0.5 rounded">{p.name}</code>
              {p.type && <span className="text-xs text-muted-foreground ml-1">(<code>{p.type}</code>)</span>}
              : {p.description}
            </li>
          ))}
        </ul>
      </div>
    )}
    {returns && (
      <div className="mt-5">
        <h4 className="text-lg font-medium mb-2 text-foreground">Returns:</h4>
        <p className="text-muted-foreground"><code>{returns}</code></p>
      </div>
    )}
  </section>
);

const MethodsApi: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">Controller Methods</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          The <code>FormController</code> instance provides a set of methods to interact with and manage the form. 
          These methods are available under the <code>methods</code> property of the controller object, or directly if using a framework-specific binding.
        </p>
      </div>

      {/* API Overview Card */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">FormController Methods API</h3>
        <p className="text-muted-foreground mb-2">
          The methods below provide programmatic control over form state, validation, navigation, and configuration.
          They're designed for both reactive UI integration and imperative control flow.
        </p>
        <CodeBlock language="ts" code={`// Basic FormController usage
import { FormController } from "@uplink-protocol/form-controller";

// Initialize the controller with configuration
const formController = FormController(myFormConfig);

// Access methods
const { methods } = formController;

// Example: Navigate to the next step
methods.nextStep(); 

// Example: Submit the form
const result = methods.submitForm();
if (result.success) {
  console.log("Form data:", result.data);
} else {
  console.log("Validation errors:", result.errors);
}`} />
      </div>
      
      {/* Method Categories Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Navigation</h3>
            </div>
            <p className="text-muted-foreground">Methods to move between form steps, supporting multi-step form workflows.</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Data Management</h3>
            </div>
            <p className="text-muted-foreground">Functions for handling form data, including field operations and form-wide data access.</p>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Validation</h3>
            </div>
            <p className="text-muted-foreground">Methods to validate fields, steps, or the entire form programmatically.</p>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Methods */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 pb-2 border-b border-border">Navigation Methods</h3>
      </div>      <MethodDetail
        title="nextStep"
        signature="nextStep: () => number;"
        description="Advances the form to the next step in a multi-step form workflow. This method handles all the logic for step transitions, including validation of the current step if configured to do so. If the form is already at the last step, this method will have no effect and return the current index."
        returns="number - The index of the new current step after navigation. Use this to update UI elements that depend on the current step."
      />      <MethodDetail
        title="prevStep"
        signature="prevStep: () => number;"
        description="Navigates back to the previous step in a multi-step form. This method handles backward navigation safely, preserving all previously entered data. If the form is already at the first step (index 0), this method will have no effect and return 0."
        returns="number - The index of the new current step after navigation. Returns 0 if already at the first step."
      />      <MethodDetail
        title="goToStep"
        signature="goToStep: (stepIndex: number) => boolean;"
        description="Directly navigates to any step in the form by its index. This method provides flexible navigation beyond simple next/previous operations, allowing for non-linear form flows such as skip logic or branching paths. The method includes boundary checks to prevent navigation to non-existent steps."
        params={[{ name: 'stepIndex', type: 'number', description: 'The 0-based index of the target step to navigate to. Must be a valid index in the steps array.' }]}
        returns="boolean - True if navigation was successful, false if the target index was invalid or navigation was prevented for any reason."
      />

      {/* Field Management Methods */}
      <div className="mt-10 mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 pb-2 border-b border-border">Field Management Methods</h3>
      </div>      <MethodDetail
        title="updateField"
        signature="updateField: (stepId: string, fieldId: string, value: any) => void;"
        description="Updates the value of a specific field in the form. This is the primary method for programmatically changing form values. It triggers internal state updates, validation (if configured), and notifies any subscribers of the state change. This is the recommended way to change field values rather than directly manipulating state."
        params={[
          { name: 'stepId', type: 'string', description: 'The unique ID of the step containing the target field, as defined in your form configuration.' },
          { name: 'fieldId', type: 'string', description: 'The unique ID of the field to update within the specified step.' },
          { name: 'value', type: 'any', description: 'The new value to set for the field. The type should match the expected field type (string, number, boolean, object, etc.).' },
        ]}
      />

      {/* Validation Methods */}
      <div className="mt-10 mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 pb-2 border-b border-border">Validation Methods</h3>
      </div>      <MethodDetail
        title="validateField"
        signature="validateField: (stepId: string, fieldId: string, value?: any, showErrors?: boolean) => boolean;"
        description="Validates a single field against its configured validation rules. This method is useful for immediate validation feedback after field interaction, without waiting for form submission. You can optionally validate against a temporary value without updating the actual field data, which is useful for preview validation during typing."
        params={[
          { name: 'stepId', type: 'string', description: 'The unique ID of the step containing the field to validate.' },
          { name: 'fieldId', type: 'string', description: 'The unique ID of the field to validate within the specified step.' },
          { name: 'value', type: 'any', description: 'Optional alternative value to validate instead of the current field value. Useful for validation previews or "what-if" scenarios.' },
          { name: 'showErrors', type: 'boolean', description: 'When true (default), validation errors will be stored in the fieldErrors state and can be displayed in the UI. Set to false to perform validation without updating the error state.' },
        ]}
        returns="boolean - True if the field passes all validation rules, false if any validation fails."
      />
      
      <MethodDetail
        title="validateStep"
        signature="validateStep: (stepId: string, showErrors?: boolean) => boolean;"
        description="Validates all fields within a specified step. Errors can be shown or hidden."
        params={[
          { name: 'stepId', type: 'string', description: 'The ID of the step to validate.' },
          { name: 'showErrors', type: 'boolean', description: '(Optional) If true, updates fieldErrors state for fields in this step. Defaults to true.' },
        ]}
        returns="boolean - True if all fields in the step are valid, false otherwise."
      />

      <MethodDetail
        title="validateCurrentStep"
        signature="validateCurrentStep: (showErrors?: boolean) => boolean;"
        description="Validates all fields in the current active step. Errors can be shown or hidden."
        params={[
          { name: 'showErrors', type: 'boolean', description: '(Optional) If true, updates fieldErrors state for fields in the current step. Defaults to true.' },
        ]}
        returns="boolean - True if the current step is valid, false otherwise."
      />
      
      <MethodDetail
        title="validateCurrentStepWithTouchedErrors"
        signature="validateCurrentStepWithTouchedErrors: () => boolean;"
        description="Validates the current step, but only updates error messages for fields that have been 'touched' (interacted with or previously validated)."
        returns="boolean - True if the current step is valid based on touched fields, false otherwise."
      />

      <MethodDetail
        title="validateStepWithTouchedErrors"
        signature="validateStepWithTouchedErrors: (stepId: string) => boolean;"
        description="Validates a specific step, but only updates error messages for fields within that step that have been 'touched'."
        params={[{ name: 'stepId', type: 'string', description: 'The ID of the step to validate.' }]}
        returns="boolean - True if the specified step is valid based on touched fields, false otherwise."
      />      <MethodDetail
        title="validateForm"
        signature="validateForm: (showErrors?: boolean) => boolean;"
        description="Performs complete validation of all form fields across all steps. This comprehensive validation is typically used before form submission to ensure all data is valid. The method executes all configured validation rules including required fields, pattern matching, custom validators, and cross-field validations."
        params={[
          { name: 'showErrors', type: 'boolean', description: 'When true (default), validation errors will be stored in the fieldErrors state and can be displayed in the UI. Set to false to check validity without updating error messages.' },
        ]}
        returns="boolean - True only if every field in every step passes all its validation rules. Returns false if any validation fails."
      />

      {/* Form Action Methods */}
      <div className="mt-10 mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 pb-2 border-b border-border">Form Action Methods</h3>
      </div>      <MethodDetail
        title="submitForm"
        signature="submitForm: () => { success: boolean; data?: Record<string, Record<string, any>>; errors?: Record<string, Record<string, string>> };"
        description="Executes the form submission process with built-in validation. This is the primary method to call when a user completes a form. It first performs validation on all fields using validateForm(). If validation passes, it returns the complete form data and triggers any onSubmit callback configured in the form. If validation fails, it returns detailed validation error information instead."
        returns="{ success: boolean; data?: Record<string, Record<string, any>>; errors?: Record<string, Record<string, string>> } - A result object containing: 'success' flag indicating if submission was successful, 'data' containing all form values if successful, or 'errors' containing validation error messages if unsuccessful."
      />      <MethodDetail
        title="resetForm"
        signature="resetForm: () => void;"
        description="Completely resets the form to its initial state. This method clears all user-entered data, resets validation errors, and returns to the first step. Use this after successful form submission to allow the user to start over, or when implementing a 'Clear Form' feature. Any initialData provided in the original form configuration will be restored."
      />

      <MethodDetail
        title="updateConfig"
        signature="updateConfig: (newConfig: FormConfig) => void;"
        description="Dynamically updates the form's configuration. This allows changing steps, fields, or other settings after the controller has been initialized."
        params={[{ name: 'newConfig', type: 'FormConfig', description: 'The new form configuration object.' }]}
      />

      {/* Data Access Methods */}
      <div className="mt-10 mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 pb-2 border-b border-border">Data Access Methods</h3>
      </div>
      <MethodDetail
        title="getStepData"
        signature="getStepData: (stepId: string) => Record<string, any>;"
        description="Retrieves the data for a specific step."
        params={[{ name: 'stepId', type: 'string', description: 'The ID of the step.' }]}
        returns="Record<string, any> - An object containing fieldId-value pairs for the specified step."
      />

      <MethodDetail
        title="getAllData"
        signature="getAllData: () => Record<string, Record<string, any>>;"
        description="Retrieves all form data, structured by step ID and then field ID."
        returns="Record<string, Record<string, any>> - An object where keys are step IDs, and values are objects of fieldId-value pairs for that step."
      />

      <MethodDetail
        title="getFlatData"
        signature="getFlatData: () => Record<string, any>;"
        description="Retrieves all form data as a single flat object, where keys are field IDs. Note: If field IDs are not unique across steps, values might be overwritten."
        returns="Record<string, any> - An object containing all fieldId-value pairs from the form."
      />

      {/* Step Management Methods */}
      <div className="mt-10 mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 pb-2 border-b border-border">Step Management Methods</h3>
      </div>
      <MethodDetail
        title="addStep"
        signature="addStep: (step: FormStep, index?: number) => number;"
        description="Adds a new step to the form at a specified index. If no index is provided, the step is added at the end."
        params={[
          { name: 'step', type: 'FormStep', description: 'The FormStep object to add.' },
          { name: 'index', type: 'number', description: '(Optional) The 0-based index at which to insert the step.' },
        ]}
        returns="number - The new total number of steps."
      />

      <MethodDetail
        title="removeStep"
        signature="removeStep: (stepId: string) => boolean;"
        description="Removes a step from the form by its ID."
        params={[{ name: 'stepId', type: 'string', description: 'The ID of the step to remove.' }]}
        returns="boolean - True if the step was successfully removed, false otherwise (e.g., step not found)."
      />

      {/* Validator Methods */}
      <div className="mt-10 mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 pb-2 border-b border-border">Validator Methods</h3>
      </div>
      <MethodDetail
        title="registerValidator"
        signature="registerValidator: (name: string, validatorFn: DynamicValidator) => void;"
        description="Registers a custom validator function with a unique name. This validator can then be referenced in field configurations."
        params={[
          { name: 'name', type: 'string', description: 'A unique name for the validator.' },
          { name: 'validatorFn', type: 'DynamicValidator', description: 'The validator function. See Validation tab for DynamicValidator signature.' },
        ]}
      />

      <MethodDetail
        title="unregisterValidator"
        signature="unregisterValidator: (name: string) => boolean;"
        description="Removes a previously registered custom validator."
        params={[{ name: 'name', type: 'string', description: 'The name of the validator to unregister.' }]}
        returns="boolean - True if the validator was successfully unregistered, false otherwise."
      />

      <MethodDetail
        title="getAvailableValidators"
        signature="getAvailableValidators: () => string[];"
        description="Returns a list of all registered validator names, including built-in and custom validators."
        returns="string[] - An array of validator names."
      />
    </div>
  );
};

export default MethodsApi;