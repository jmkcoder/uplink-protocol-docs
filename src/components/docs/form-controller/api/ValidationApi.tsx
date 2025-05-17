// src/components/docs/form-controller/api/ValidationApi.tsx
import React from 'react';
import { CodeBlock } from '@/components/code-block';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';

type CodeBlockLanguage = "js" | "jsx" | "ts" | "tsx" | "html" | "css" | "shell" | "vue" | "svelte";

const DetailItem: React.FC<{ title: string; signature?: string; description: string; children?: React.ReactNode; code?: string; type?: string; isInterface?: boolean }> = 
  ({ title, signature, description, children, code, type, isInterface = false }) => (
  <section className="py-6 mb-8 border-b border-border last:border-b-0 last:mb-0">
    <h3 className={`text-2xl font-semibold mb-2 text-foreground ${isInterface || type === 'Interface' || type === 'Type Alias' ? "font-mono" : ""}`}>
      {isInterface || type === 'Interface' || type === 'Type Alias' ? title : <code>{title}</code>}
    </h3>
    {type && !isInterface && <p className="text-sm text-muted-foreground mb-3">Type: <code className="text-xs bg-muted px-1 py-0.5 rounded">{type}</code></p>}
    {signature && (
      <div className="mt-3 mb-3">
        <CodeBlock language={"ts" as CodeBlockLanguage} code={signature} />
      </div>
    )}
    <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
    {children}
    {code && !signature && (
      <div className="mt-4">
        <CodeBlock language={"ts" as CodeBlockLanguage} code={code} />
      </div>
    )}
  </section>
);

const ValidationApi: React.FC = () => {
  return (
    <div className="space-y-8">      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">Validation</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          The FormController provides robust validation capabilities, supporting both built-in and custom validation rules. 
          Validation can be triggered automatically on field changes or programmatically.
        </p>
      </div>

      {/* API Overview Card */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">Form Validation API</h3>
        <p className="text-muted-foreground mb-2">
          Form Controller offers a powerful validation system with built-in validators and support for custom validation logic.
          Validations can be defined declaratively in your form configuration or triggered programmatically.
        </p>
        <CodeBlock language="ts" code={`// Form configuration with validation
const formConfig = {
  id: "signup-form",
  steps: [{
    id: "user-info",
    fields: {
      email: {
        type: "email",
        label: "Email",
        validations: [
          { type: "required", message: "Email is required" },
          { type: "email", message: "Must be a valid email address" }
        ]
      },
      password: {
        type: "password",
        label: "Password",
        validations: [
          { type: "required", message: "Password is required" },
          { type: "minLength", value: 8, message: "Password must be at least 8 characters" }
        ]
      }
    }
  }]
};`} />
      </div>

      {/* Validation Categories Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Built-in Validators</h3>
            </div>
            <p className="text-muted-foreground">Ready-to-use validators for common validations like required fields, email format, and length constraints.</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Custom Validators</h3>
            </div>
            <p className="text-muted-foreground">Create and register your own validation logic for application-specific requirements.</p>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Cross-Field Validation</h3>
            </div>
            <p className="text-muted-foreground">Validate fields in relation to each other, such as password confirmation or interdependent business rules.</p>
          </CardContent>
        </Card>
      </div>      <DetailItem
        title="Validation Interface"
        type="Interface"
        description="Defines the structure for a single validation rule that can be applied to a field. Each validation rule specifies a validation type, error message, and optional parameters."
        code={`interface Validation {
  type: string; // Name of the validator (e.g., 'required', 'email', 'minLength', or a custom registered validator name)
  value?: any; // The value to validate against (e.g., for minLength, this would be the minimum length number)
  message: string; // Error message to display if validation fails
  validateImmediately?: boolean; // If true, validates as soon as the field is mounted or its value changes programmatically
}`} 
      >
        <div className="mt-4 space-y-2">
          <p className="text-base"><strong>Key Properties:</strong></p>
          <ul className="space-y-2 list-disc list-inside ml-4 text-muted-foreground">
            <li>
              <code className="text-sm bg-muted px-1 py-0.5 rounded">type</code>: The validator name to apply. Can be a built-in validator ('required', 'email', 'minLength', 'maxLength', 'pattern', 'matches') or a custom validator registered with <code>registerValidator</code>.
            </li>
            <li>
              <code className="text-sm bg-muted px-1 py-0.5 rounded">value</code>: (Optional) The parameter value used by the validator. For example, the minimum length for 'minLength', the pattern string for 'pattern', or any custom value needed by custom validators.
            </li>
            <li>
              <code className="text-sm bg-muted px-1 py-0.5 rounded">message</code>: The error message to display when validation fails. Can include dynamic placeholders that are replaced with actual values during validation.
            </li>
            <li>
              <code className="text-sm bg-muted px-1 py-0.5 rounded">validateImmediately</code>: (Optional) When true, this validation rule is checked as soon as the field is initialized or its value changes programmatically. When false (default), validation only occurs on field blur, form submission, or explicit validation calls.
            </li>
          </ul>
        </div>
        <p className="mt-3 text-sm">Refer to <code>@uplink-protocol/form-controller/dist/interfaces/validation.interface.d.ts</code> and the <Link href="/logic/form-controller/overview#validation" className="text-primary hover:underline">Validation Guide</Link> for more examples.</p>
      </DetailItem>      <DetailItem
        title="DynamicValidator"
        type="Type Alias"
        description="Defines the function signature for custom validators that can be registered with the FormController. Custom validators enable you to implement application-specific validation logic beyond the built-in validators."
        signature={`type DynamicValidator = (
  value: any, // The current value of the field being validated
  fieldConfig?: Field, // (Optional) The configuration of the field being validated
  formData?: Record<string, any> // (Optional) The current data of the entire form (flat structure)
) => string | null | Promise<string | null>;`}
      >
        <div className="mt-4 space-y-2">
          <p className="text-base"><strong>Parameters:</strong></p>
          <ul className="space-y-2 list-disc list-inside ml-4 text-muted-foreground">
            <li>
              <code className="text-sm bg-muted px-1 py-0.5 rounded">value</code>: The current value of the field being validated. This is the primary input to your validation logic.
            </li>
            <li>
              <code className="text-sm bg-muted px-1 py-0.5 rounded">fieldConfig</code>: (Optional) The complete configuration object for the field being validated. Useful for accessing field metadata like field type, validations, or other properties.
            </li>
            <li>
              <code className="text-sm bg-muted px-1 py-0.5 rounded">formData</code>: (Optional) The current data of the entire form in a flat structure. This enables cross-field validation where one field's validity depends on other fields' values.
            </li>
          </ul>
          
          <p className="text-base mt-4"><strong>Return Value:</strong></p>
          <p className="text-muted-foreground">A custom validator function should return one of the following:</p>
          <ul className="space-y-1 list-disc list-inside ml-4 text-muted-foreground">
            <li><code>null</code> if the validation passes - indicating the input is valid.</li>
            <li>A <code>string</code> error message if the validation fails - this message will be displayed to the user.</li>
            <li>A <code>Promise</code> that resolves to <code>null</code> or an error <code>string</code> for asynchronous validation - enables validations that need to make API calls or perform other async operations.</li>
          </ul>
        </div>
        
        <div className="mt-4 p-4 bg-muted/50 rounded-md">
          <p className="text-sm font-medium mb-2">Example Custom Validator:</p>
          <CodeBlock language="ts" code={`// Register a custom US zip code validator
controller.methods.registerValidator('usZipCode', (value) => {
  // Check if the value matches a US ZIP code pattern (5 digits or 5+4)
  const zipRegex = /^\\d{5}(-\\d{4})?$/;
  return zipRegex.test(value) ? null : 'Please enter a valid US ZIP code';
});

// Use in field configuration
{
  id: 'zipCode',
  type: 'text',
  label: 'ZIP Code',
  validations: [
    { type: 'required', message: 'ZIP code is required' },
    { type: 'usZipCode', message: 'Invalid ZIP format' }
  ]
}`} />
        </div>
        
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-md">
          <p className="text-sm font-medium mb-2">Asynchronous Validator Example:</p>
          <CodeBlock language="ts" code={`// Register an async validator that checks username availability
controller.methods.registerValidator('usernameAvailable', async (value) => {
  // Skip validation if value is empty (let required validator handle that)
  if (!value) return null;
  
  try {
    // Make an API call to check if username is available
    const response = await fetch(\`/api/check-username?username=\${encodeURIComponent(value)}\`);
    const data = await response.json();
    
    // Return null if available (valid), or error message if unavailable
    return data.available ? null : 'This username is already taken';
  } catch (error) {
    // Handle network errors or other exceptions
    console.error('Username validation error:', error);
    return 'Unable to verify username availability. Please try again.';
  }
});

// Use in field configuration
{
  id: 'username',
  type: 'text',
  label: 'Username',
  validations: [
    { type: 'required', message: 'Username is required' },
    { type: 'minLength', value: 3, message: 'Username must be at least 3 characters' },
    { type: 'usernameAvailable', message: 'This username is not available' }
  ]
}`} />
        </div>
        
        <p className="mt-3 text-sm">See the <code>registerValidator</code> method in the <strong>Methods</strong> tab for how to register custom validators.</p>
      </DetailItem><DetailItem
        title="Built-in Validators"
        description="The FormController provides several predefined validators for common validation scenarios."
      >
        <div className="mt-4 space-y-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2 font-semibold">Validator</th>
                <th className="text-left py-2 px-2 font-semibold">Value Parameter</th>
                <th className="text-left py-2 px-2 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-3 px-2"><code>required</code></td>
                <td className="py-3 px-2">N/A</td>
                <td className="py-3 px-2">Ensures the field has a non-empty value. Checks that strings are not empty, arrays have elements, objects have properties, and numbers/booleans are defined.</td>
              </tr>
              <tr>
                <td className="py-3 px-2"><code>email</code></td>
                <td className="py-3 px-2">N/A</td>
                <td className="py-3 px-2">Validates that the value is a properly formatted email address using a standard email regex pattern.</td>
              </tr>
              <tr>
                <td className="py-3 px-2"><code>minLength</code></td>
                <td className="py-3 px-2">number</td>
                <td className="py-3 px-2">Validates that a string value has at least the specified number of characters, or an array has at least the specified number of elements.</td>
              </tr>
              <tr>
                <td className="py-3 px-2"><code>maxLength</code></td>
                <td className="py-3 px-2">number</td>
                <td className="py-3 px-2">Validates that a string value has no more than the specified number of characters, or an array has no more than the specified number of elements.</td>
              </tr>
              <tr>
                <td className="py-3 px-2"><code>min</code></td>
                <td className="py-3 px-2">number</td>
                <td className="py-3 px-2">Validates that a numeric value is greater than or equal to the specified minimum.</td>
              </tr>
              <tr>
                <td className="py-3 px-2"><code>max</code></td>
                <td className="py-3 px-2">number</td>
                <td className="py-3 px-2">Validates that a numeric value is less than or equal to the specified maximum.</td>
              </tr>
              <tr>
                <td className="py-3 px-2"><code>pattern</code></td>
                <td className="py-3 px-2">string (regex)</td>
                <td className="py-3 px-2">Validates that a string value matches the specified regular expression pattern.</td>
              </tr>
              <tr>
                <td className="py-3 px-2"><code>matches</code></td>
                <td className="py-3 px-2">string (field ID)</td>
                <td className="py-3 px-2">Validates that a field's value matches another field's value. Commonly used for password confirmation.</td>
              </tr>
            </tbody>
          </table>
          
          <div className="mt-4 p-4 bg-muted/50 rounded-md">
            <p className="text-sm font-medium mb-2">Example Usage:</p>
            <CodeBlock language="ts" code={`// Field with multiple validations
{
  id: 'password',
  type: 'password',
  label: 'Password',
  validations: [
    { type: 'required', message: 'Password is required' },
    { type: 'minLength', value: 8, message: 'Password must be at least 8 characters' },
    { 
      type: 'pattern', 
      value: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$', 
      message: 'Password must include uppercase, lowercase, number and special character' 
    }
  ]
}`} />
          </div>
        </div>      </DetailItem>
      
      <DetailItem
        title="validateForm"
        description="Validates the entire form across all steps."
        signature="validateForm: (showErrors?: boolean) => boolean;"
      >
        <p className="mt-3 text-sm">Refer to the <strong>Methods</strong> tab for full parameter details.</p>
      </DetailItem>

      <DetailItem
        title="fieldErrors (Binding)"
        type="Record<string, Record<string, string>>"
        description="A reactive state binding that holds all current validation error messages, organized by step ID and field ID."
      >
        <p className="mt-3 text-muted-foreground">This is the primary way to display error messages in your UI. Refer to the <strong>State</strong> tab for more details on how to use this binding.</p>
        <div className="mt-4">
          <CodeBlock language={"ts" as CodeBlockLanguage} code={
`// Example: Accessing an error message in a React component
const { bindings } = myFormController;
const emailError = bindings.fieldErrors.current?.contactDetailsStep?.emailField;`
          } />
        </div>
      </DetailItem>

      <DetailItem
        title="registerValidator"
        description="Registers a new custom validator function. Once registered, it can be used by its name in the `validations` array of a field configuration."
        signature="registerValidator: (name: string, validatorFn: DynamicValidator) => void;"
      >
        <p className="mt-3 text-sm">Refer to the <strong>Methods</strong> tab for parameter details and the <code>DynamicValidator</code> type alias on this page for the function signature.</p>
      </DetailItem>

      <DetailItem
        title="unregisterValidator"
        description="Removes a custom validator that was previously registered."
        signature="unregisterValidator: (name: string) => boolean;"
      >
        <p className="mt-3 text-sm">Refer to the <strong>Methods</strong> tab for parameter details.</p>
      </DetailItem>

      <DetailItem
        title="getAvailableValidators"
        description="Returns an array of names for all currently registered validators (both built-in and custom)."
        signature="getAvailableValidators: () => string[];"
      >
        <p className="mt-3 text-sm">Refer to the <strong>Methods</strong> tab for parameter details.</p>
      </DetailItem>

      {/* Cross-field validation example section */}
      <h3 className="text-xl font-semibold mb-3 mt-8">Cross-Field Validation</h3>
      <div className="space-y-4">
        <Card className="p-5">
          <p className="text-base mb-4">
            Cross-field validation allows you to validate fields in relation to each other. This is useful for scenarios like:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-3 text-muted-foreground">
            <li>Password confirmation fields that must match the original password</li>
            <li>Date ranges where end date must come after start date</li>
            <li>Conditional required fields that depend on values in other fields</li>
            <li>Form sections that become valid/invalid based on other sections</li>
          </ul>
        </Card>

        <div className="p-5 rounded-lg border">
          <h4 className="text-lg font-medium mb-4">Comprehensive Cross-Field Validation Example</h4>
          <p className="mb-4 text-muted-foreground">
            The following example demonstrates how to implement various cross-field validation scenarios in a user registration form:
          </p>
          <CodeBlock language="tsx" code={`// Register custom cross-field validators
controller.methods.registerValidator('passwordMatch', (value, _, formData) => {
  // Access the password field to compare against the confirmation field
  const password = formData?.password;
  
  // Skip validation if either field is empty
  if (!value || !password) return null;
  
  // Compare password and confirmation
  return value === password ? null : 'Passwords do not match';
});

controller.methods.registerValidator('afterStartDate', (endDate, fieldConfig, formData) => {
  // Get the ID of the start date field from validator params
  const startFieldId = fieldConfig?.validations?.find(v => v.type === 'afterStartDate')?.params?.startFieldId;
  if (!startFieldId || !formData) return null;
  
  const startDate = formData[startFieldId];
  
  // Skip validation if either date is missing
  if (!startDate || !endDate) return null;
  
  // Compare dates (convert string dates to Date objects if needed)
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return end > start ? null : 'End date must be after the start date';
});

controller.methods.registerValidator('conditionalRequired', (value, fieldConfig, formData) => {
  // Get condition details from validator params
  const params = fieldConfig?.validations?.find(v => v.type === 'conditionalRequired')?.params;
  if (!params || !formData) return null;
  
  const { dependsOn, dependsValue } = params;
  
  // Check if the dependent field has the specified value
  const shouldBeRequired = formData[dependsOn] === dependsValue;
  
  // Only validate as required if condition is met
  if (shouldBeRequired && (value === undefined || value === null || value === '')) {
    return 'This field is required';
  }
  
  return null;
});

// Form configuration using cross-field validators
const formConfig = {
  steps: [
    {
      id: 'userInfo',
      title: 'User Information',
      fields: [
        {
          id: 'username',
          type: 'text',
          label: 'Username',
          validations: [
            { type: 'required', message: 'Username is required' }
          ]
        },
        {
          id: 'password',
          type: 'password',
          label: 'Password',
          validations: [
            { type: 'required', message: 'Password is required' },
            { type: 'minLength', value: 8, message: 'Password must be at least 8 characters long' }
          ]
        },
        {
          id: 'confirmPassword',
          type: 'password',
          label: 'Confirm Password',
          validations: [
            { type: 'required', message: 'Please confirm your password' },
            { type: 'passwordMatch', message: 'Passwords do not match' } // Cross-field validation
          ]
        }
      ]
    },
    {
      id: 'dateRange',
      title: 'Event Details',
      fields: [
        {
          id: 'eventType',
          type: 'select',
          label: 'Event Type',
          options: [
            { label: 'Conference', value: 'conference' },
            { label: 'Workshop', value: 'workshop' },
            { label: 'Meeting', value: 'meeting' }
          ],
          validations: [
            { type: 'required', message: 'Please select an event type' }
          ]
        },
        {
          id: 'startDate',
          type: 'date',
          label: 'Start Date',
          validations: [
            { type: 'required', message: 'Start date is required' }
          ]
        },
        {
          id: 'endDate',
          type: 'date',
          label: 'End Date',
          validations: [
            { type: 'required', message: 'End date is required' },
            { 
              type: 'afterStartDate', 
              message: 'End date must be after start date',
              params: { startFieldId: 'startDate' } // Pass parameters to validator
            }
          ]
        },
        {
          id: 'workshopMaterials',
          type: 'text',
          label: 'Workshop Materials',
          validations: [
            { 
              type: 'conditionalRequired', 
              message: 'Materials are required for workshops',
              params: { dependsOn: 'eventType', dependsValue: 'workshop' }
            }
          ]
        }
      ]
    }
  ]
};`} />
          
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-md">
            <h5 className="font-medium text-md mb-2">Key Cross-Field Validation Principles:</h5>
            <ol className="space-y-2 list-decimal list-inside ml-3 text-muted-foreground">
              <li>Use the <code>formData</code> parameter to access other field values</li>
              <li>Pass additional configuration through the <code>params</code> object in validation rules</li>
              <li>Consider creating reusable validators for common cross-field validation patterns</li>
              <li>Handle edge cases like empty values or undefined fields gracefully</li>
              <li>Use descriptive error messages that explain the relationship between fields</li>
            </ol>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3 mt-8">API Integration with Form Lifecycle</h3>
      <div className="p-5 rounded-lg border">
        <p className="text-base mb-4">
          The validation system integrates with other parts of the FormController API:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-3 text-muted-foreground">
          <li><strong>Configuration API</strong>: Define validation rules in field configurations</li>
          <li><strong>Methods API</strong>: Use <code>validateField</code>, <code>validateStep</code>, and <code>validateForm</code> to trigger validation</li>
          <li><strong>State API</strong>: Access validation results through <code>formErrors</code> and <code>isValid</code> state bindings</li>
        </ul>
        
        <div className="mt-4 p-4 bg-muted/50 rounded-md">
          <p className="text-sm font-medium mb-2">Example of Validation API Integration:</p>
          <CodeBlock language="tsx" code={`// In your component
import { useFormController } from '@uplink/form-controller';

function RegistrationForm() {
  const controller = useFormController({
    // Form configuration with validation rules
    config: formConfig,
    // Optional validation options
    options: {
      validateOnBlur: true,
      validateOnChange: false,
      validateOnSubmit: true
    }
  });
  
  // Access validation state
  const { formErrors, isValid, isSubmitting } = controller.state;
  
  // Manual validation methods
  const handleValidateStep = async () => {
    const isStepValid = await controller.methods.validateStep();
    if (isStepValid) {
      controller.methods.nextStep();
    }
  };
  
  return (
    <form onSubmit={controller.methods.handleSubmit}>
      {/* Form fields */}
      
      {/* Display validation errors */}
      {Object.keys(formErrors).length > 0 && (
        <div className="error-summary">
          <h4>Please correct the following errors:</h4>
          <ul>
            {Object.entries(formErrors).map(([field, error]) => (
              <li key={field}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      
      <button 
        type="button" 
        onClick={handleValidateStep}
        disabled={isSubmitting}
      >
        Next Step
      </button>
      
      <button 
        type="submit" 
        disabled={!isValid || isSubmitting}
      >
        Submit
      </button>
    </form>
  );
}`} />
        </div>
      </div>

      <div className="mt-10 p-6 bg-muted/50 rounded-lg border border-border">
        <h3 className="text-xl font-semibold text-foreground mb-2">Advanced Examples</h3>
        <p className="text-muted-foreground mb-3">
          For more advanced validation patterns and examples, see these dedicated resources:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-3 text-muted-foreground">
          <li>
            <Link href="/logic/form-controller/examples/async-validation" className="text-primary hover:underline">
              Advanced Asynchronous Validation Patterns
            </Link> - Learn about debouncing, caching, and UI integration for async validators
          </li>
          <li>
            <Link href="/logic/form-controller/overview#validation" className="text-primary hover:underline">
              Validation Guide
            </Link> - General validation concepts and best practices
          </li>
        </ul>
      </div>

    </div>
  );
};

export default ValidationApi;
