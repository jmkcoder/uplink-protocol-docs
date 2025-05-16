'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import "../../../syntax-highlight.css"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"
import { DocsSidebar } from "@/components/docs/sidebar"

export default function FormControllerAPI() {  
  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-background text-foreground">
      {/* Sidebar */}
      <DocsSidebar />
      
      {/* Main Content */}      <div className="flex-1 px-6 py-12 lg:max-w-4xl">
        {/* Header & Navigation */}
        <div className="space-y-2 mb-8">
          <Badge variant="outline" className="mb-2">Logic</Badge>
          <h1 className="text-4xl font-bold tracking-tight">Form Controller</h1>
          <p className="text-muted-foreground text-lg">
            A lightweight yet powerful form management system for building dynamic, multi-step forms with advanced validation capabilities.
          </p>
          
          <div className="flex gap-4 pt-4 border-b border-border">
            <Link href="/logic/form-controller/overview" className="text-muted-foreground hover:text-foreground pb-2">Overview</Link>
            <Link href="/logic/form-controller/api" className="font-medium text-primary border-b-2 border-primary pb-2">API</Link>
            <Link href="/logic/form-controller/examples" className="text-muted-foreground hover:text-foreground pb-2">Examples</Link>
          </div>
        </div>

        {/* API Content */}
        <section>
          {/* API Reference Tabs */}
          <div className="mb-8">
            <Tabs defaultValue="methods" className="w-full">              <TabsList className="mb-4 w-full justify-start gap-2">
                <TabsTrigger value="methods" className="py-2 px-4" onClick={() => {
                  document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
                    panel.classList.add('hidden');
                    panel.setAttribute('data-state', 'inactive');
                  });
                  document.getElementById('methods')?.classList.remove('hidden');
                  document.getElementById('methods')?.setAttribute('data-state', 'active');
                }}>Methods</TabsTrigger>
                <TabsTrigger value="config" className="py-2 px-4" onClick={() => {
                  document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
                    panel.classList.add('hidden');
                    panel.setAttribute('data-state', 'inactive');
                  });
                  document.getElementById('config')?.classList.remove('hidden');
                  document.getElementById('config')?.setAttribute('data-state', 'active');
                }}>Configuration</TabsTrigger>
                <TabsTrigger value="bindings" className="py-2 px-4" onClick={() => {
                  document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
                    panel.classList.add('hidden');
                    panel.setAttribute('data-state', 'inactive');
                  });
                  document.getElementById('bindings')?.classList.remove('hidden');
                  document.getElementById('bindings')?.setAttribute('data-state', 'active');
                }}>Bindings</TabsTrigger>
                <TabsTrigger value="validation" className="py-2 px-4" onClick={() => {
                  document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
                    panel.classList.add('hidden');
                    panel.setAttribute('data-state', 'inactive');
                  });
                  document.getElementById('validation')?.classList.remove('hidden');
                  document.getElementById('validation')?.setAttribute('data-state', 'active');
                }}>Validation</TabsTrigger>
              </TabsList>{/* Methods Tab Content */}
              <div className="space-y-6" id="methods" data-state="active" role="tabpanel">
                <Card className="overflow-hidden border-primary/10">
                  <CardContent className="p-6 space-y-0">
                    <h3 className="text-2xl font-semibold tracking-tight mb-4">Navigation Methods</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">nextStep()</h4>
                        <p className="text-sm text-muted-foreground">Navigate to the next step (if current step is valid)</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`form.methods.nextStep();`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">prevStep()</h4>
                        <p className="text-sm text-muted-foreground">Navigate to the previous step</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`form.methods.prevStep();`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">goToStep(stepIndex)</h4>
                        <p className="text-sm text-muted-foreground">Navigate to a specific step by index</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`form.methods.goToStep(2); // Go to the third step`}
                            language="js"
                          />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight mb-4 mt-8">Form Data Methods</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">updateField(stepId, fieldId, value)</h4>
                        <p className="text-sm text-muted-foreground">Update a field&apos;s value</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`form.methods.updateField('personal', 'name', 'John Doe');`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">getStepData(stepId)</h4>
                        <p className="text-sm text-muted-foreground">Get form data for a specific step</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`const personalData = form.methods.getStepData('personal');`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">getAllData()</h4>
                        <p className="text-sm text-muted-foreground">Get all form data organized by steps</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`const allData = form.methods.getAllData();
// { personal: { name: 'John', ... }, contact: { ... } }`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">getFlatData()</h4>
                        <p className="text-sm text-muted-foreground">Get flattened form data merged from all steps</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`const flatData = form.methods.getFlatData();
// { name: 'John', email: 'john@example.com', ... }`}
                            language="js"
                          />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight mb-4 mt-8">Validation Methods</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">validateField(stepId, fieldId, value, showErrors)</h4>
                        <p className="text-sm text-muted-foreground">Validate a single field</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`const isEmailValid = form.methods.validateField('contact', 'email');`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">validateStep(stepId, showErrors)</h4>
                        <p className="text-sm text-muted-foreground">Validate an entire step</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`const isPersonalStepValid = form.methods.validateStep('personal', true);`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">validateCurrentStep(showErrors)</h4>
                        <p className="text-sm text-muted-foreground">Validate the current step</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`if (form.methods.validateCurrentStep(true)) {
  form.methods.nextStep();
}`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">validateForm(showErrors)</h4>
                        <p className="text-sm text-muted-foreground">Validate the entire form</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`if (form.methods.validateForm(true)) {
  // Form is valid, proceed
}`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">registerValidator(name, validatorFn)</h4>
                        <p className="text-sm text-muted-foreground">Register a custom dynamic validator</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`form.methods.registerValidator('matchesPassword', 
  (value, context) => {
    if (value !== context.formData.password) {
      return 'Passwords do not match';
    }
    return true;
  }
);`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">unregisterValidator(name)</h4>
                        <p className="text-sm text-muted-foreground">Remove a custom validator</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`form.methods.unregisterValidator('matchesPassword');`}
                            language="js"
                          />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight mb-4 mt-8">Form Management Methods</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">submitForm()</h4>
                        <p className="text-sm text-muted-foreground">Validate and submit the form</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`form.methods.submitForm().then((data) => {
  console.log('Form submitted:', data);
});`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">resetForm()</h4>
                        <p className="text-sm text-muted-foreground">Reset the form to initial values</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`form.methods.resetForm();`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">updateConfig(newConfig)</h4>
                        <p className="text-sm text-muted-foreground">Update form configuration (for dynamic forms)</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`form.methods.updateConfig({
  initialStep: 2,
  steps: [...updatedSteps],
});`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">addStep(step, index)</h4>
                        <p className="text-sm text-muted-foreground">Add a new step dynamically</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`form.methods.addStep({
  id: 'review',
  title: 'Review Information',
  fields: { /* ... */ }
}, 2); // Insert at index 2`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">removeStep(stepId)</h4>
                        <p className="text-sm text-muted-foreground">Remove a step dynamically</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`form.methods.removeStep('optional');`}
                            language="js"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
                {/* Configuration Tab Content */}
              <div className="space-y-6 hidden" id="config" data-state="inactive" role="tabpanel">
                <Card className="overflow-hidden border-primary/10">
                  <CardContent className="p-6">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight mb-4">Form Configuration</h3>
                        <div className="mb-4">
                          <SyntaxHighlighter 
                            code={`const form = FormController({
  steps: [
    {
      id: 'personal',
      title: 'Personal Information',
      fields: { /* ... */ }
    },
    {
      id: 'contact',
      title: 'Contact Information',
      fields: { /* ... */ }
    }
  ],
  initialStep: 0,
  validators: { /* Custom validators */ }
});`}
                            language="js"
                          />
                        </div>

                        <div className="mt-6 pl-4 border-l-2 border-primary/20 space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold">steps</h4>
                            <p className="text-muted-foreground">
                              <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">Array&lt;StepConfig&gt;</code> - 
                              An array of step configurations that define the form&apos;s structure.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold">initialStep</h4>
                            <p className="text-muted-foreground">
                              <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">number</code> - 
                              Optional. The index of the initial step to display (defaults to 0).
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold">validators</h4>
                            <p className="text-muted-foreground">
                              <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">Record&lt;string, ValidatorFn&gt;</code> - 
                              Optional. Custom validators that can be referenced by fields.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight mb-4">Step Configuration</h3>
                        <div className="mb-4">
                          <SyntaxHighlighter 
                            code={`{
  id: 'personal',
  title: 'Personal Information',
  fields: {
    name: { type: 'text', label: 'Full Name', value: '', required: true },
    age: { type: 'number', label: 'Age', value: null }
  },
  validateOnChange: false
}`}
                            language="js"
                          />
                        </div>
                        
                        <div className="mt-6 pl-4 border-l-2 border-primary/20 space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold">id</h4>
                            <p className="text-muted-foreground">
                              <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">string</code> - 
                              Unique identifier for the step.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold">title</h4>
                            <p className="text-muted-foreground">
                              <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">string</code> - 
                              Display title for the step.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold">fields</h4>
                            <p className="text-muted-foreground">
                              <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">Record&lt;string, FieldConfig&gt;</code> - 
                              Map of field configurations for this step.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold">validateOnChange</h4>
                            <p className="text-muted-foreground">
                              <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">boolean</code> - 
                              Optional. Whether to validate fields on change (defaults to false).
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight mb-4">Field Configuration</h3>
                        <div className="mb-4">
                          <SyntaxHighlighter 
                            code={`{
  id: 'email',
  type: 'email',
  label: 'Email Address',
  value: '',
  required: true,
  disabled: false,
  validation: {
    pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
    errorMessage: 'Please enter a valid email address'
  }
}`}
                            language="js"
                          />
                        </div>
                        
                        <div className="mt-6 pl-4 border-l-2 border-primary/20 space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold">id</h4>
                            <p className="text-muted-foreground">
                              <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">string</code> - 
                              Unique identifier for the field.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold">type</h4>
                            <p className="text-muted-foreground">
                              <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">string</code> - 
                              Field type (e.g., &apos;text&apos;, &apos;email&apos;, &apos;password&apos;, etc.).
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold">label</h4>
                            <p className="text-muted-foreground">
                              <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">string</code> - 
                              Optional. Display label for the field.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold">value</h4>
                            <p className="text-muted-foreground">
                              <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">any</code> - 
                              Initial value for the field.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold">required</h4>
                            <p className="text-muted-foreground">
                              <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">boolean</code> - 
                              Optional. Whether the field is required (defaults to false).
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold">disabled</h4>
                            <p className="text-muted-foreground">
                              <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">boolean</code> - 
                              Optional. Whether the field is disabled (defaults to false).
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold">validation</h4>
                            <p className="text-muted-foreground">
                              <code className="bg-primary/10 text-primary px-1 py-0.5 rounded">ValidationConfig</code> - 
                              Optional. Validation rules for the field.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
                {/* Bindings Tab Content */}
              <div className="space-y-6 hidden" id="bindings" data-state="inactive" role="tabpanel">
                <Card className="overflow-hidden border-primary/10">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold tracking-tight mb-6">Reactive Bindings</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">config</h4>
                        <p className="text-sm text-muted-foreground">The current form configuration</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`// Access the current form configuration
console.log(bindings.config.steps);
console.log(bindings.config.initialStep);`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">currentStepIndex</h4>
                        <p className="text-sm text-muted-foreground">Index of the current step</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`// Example: Update progress bar
const progress = (bindings.currentStepIndex + 1) / bindings.totalSteps;`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">currentStep</h4>
                        <p className="text-sm text-muted-foreground">The current step object</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`// React example
<h2>{bindings.currentStep.title}</h2>`}
                            language="jsx"
                          />
                        </div>
                      </div>                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">formData</h4>
                        <p className="text-sm text-muted-foreground">Form data for all steps</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`// React example
const { personal, contact } = bindings.formData;
console.log('Name:', personal.name);
console.log('Email:', contact.email);`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">stepsValidity</h4>
                        <p className="text-sm text-muted-foreground">Validation state for each step</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`// Check if personal step is valid
const isPersonalValid = bindings.stepsValidity.personal;`}
                            language="js"
                          />
                        </div>
                      </div>                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">isCurrentStepValid</h4>
                        <p className="text-sm text-muted-foreground">Whether the current step is valid</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`// Enable/disable the next button based on current step validity
<button 
  disabled={!bindings.isCurrentStepValid} 
  onClick={form.methods.nextStep}
>
  Next
</button>`}
                            language="jsx"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">fieldErrors</h4>
                        <p className="text-sm text-muted-foreground">Validation error messages</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`// React example
{bindings.fieldErrors.personal?.name && (
  <div className="error">{bindings.fieldErrors.personal.name}</div>
)}`}
                            language="jsx"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">fields</h4>
                        <p className="text-sm text-muted-foreground">All form fields organized by steps</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`// React example
<input
  value={bindings.fields.personal.name.value}
  disabled={bindings.fields.personal.name.disabled}
  required={bindings.fields.personal.name.required}
/>`}
                            language="jsx"
                          />
                        </div>
                      </div>                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">totalSteps</h4>
                        <p className="text-sm text-muted-foreground">Total number of steps</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`// Create progress indicator
const progressPercent = (bindings.currentStepIndex + 1) / bindings.totalSteps * 100;
<div className="progress-bar" style={{ width: \`\${progressPercent}%\` }} />`}
                            language="jsx"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">isLastStep</h4>
                        <p className="text-sm text-muted-foreground">Whether the current step is the last one</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`// React example
<button>
  {bindings.isLastStep ? 'Submit' : 'Next'}
</button>`}
                            language="jsx"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">isFirstStep</h4>
                        <p className="text-sm text-muted-foreground">Whether the current step is the first one</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`// React example
{!bindings.isFirstStep && (
  <button onClick={form.methods.prevStep}>Back</button>
)}`}
                            language="jsx"
                          />
                        </div>
                      </div>                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">isFormValid</h4>
                        <p className="text-sm text-muted-foreground">Whether the entire form is valid</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`// Enable submit button only when form is valid
<button 
  disabled={!bindings.isFormValid} 
  onClick={form.methods.submitForm}
>
  Submit
</button>`}
                            language="jsx"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
                {/* Validation Tab Content */}
              <div className="space-y-6 hidden" id="validation" data-state="inactive" role="tabpanel">
                <Card className="overflow-hidden border-primary/10">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold tracking-tight mb-4">Validation Configuration</h3>
                    
                    <div className="mb-6">
                      <SyntaxHighlighter 
                        code={`{
  // Field with multiple validation rules
  password: {
    type: 'password',
    label: 'Password',
    value: '',
    validation: {
      minLength: 8,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$/,
      errorMessage: 'Password must be 8+ characters with uppercase, lowercase, and numbers'
    }
  },
  
  // Field with custom validator
  confirmPassword: {
    type: 'password',
    label: 'Confirm Password',
    value: '',
    validation: {
      dynamicValidator: 'matchesPassword',
      errorMessage: 'Passwords do not match'
    }
  }
}`}
                        language="js"
                      />
                    </div>
                    
                    <h4 className="text-xl font-semibold mt-6 mb-4">ValidationConfig Properties</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">pattern</h4>
                        <p className="text-sm text-muted-foreground">RegExp pattern to validate against</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`email: {
  validation: {
    pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
  }
}`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">minLength</h4>
                        <p className="text-sm text-muted-foreground">Minimum string length</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`username: {
  validation: {
    minLength: 3
  }
}`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">maxLength</h4>
                        <p className="text-sm text-muted-foreground">Maximum string length</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`bio: {
  validation: {
    maxLength: 250
  }
}`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">min</h4>
                        <p className="text-sm text-muted-foreground">Minimum numeric value</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`age: {
  type: 'number',
  validation: {
    min: 18
  }
}`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">max</h4>
                        <p className="text-sm text-muted-foreground">Maximum numeric value</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`rating: {
  type: 'number',
  validation: {
    max: 5
  }
}`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">dynamicValidator</h4>
                        <p className="text-sm text-muted-foreground">Name of a registered custom validator</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`confirmPassword: {
  validation: {
    dynamicValidator: 'matchesPassword'
  }
}`}
                            language="js"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-primary/5">
                        <h4 className="text-lg font-medium">errorMessage</h4>
                        <p className="text-sm text-muted-foreground">Custom error message to display on validation failure</p>
                        <div className="mt-2">
                          <SyntaxHighlighter 
                            code={`email: {
  validation: {
    pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
    errorMessage: 'Please enter a valid email address'
  }
}`}
                            language="js"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-semibold mt-8 mb-4">Custom Validator Example</h4>
                    
                    <div className="mb-6">
                      <SyntaxHighlighter 
                        code={`// Register a custom validator
form.methods.registerValidator('matchesPassword', (value, context) => {
  if (value !== context.formData.password) {
    return 'Passwords do not match'; // Return error message
  }
  return true; // Return true if valid
});

// Use in field configuration
confirmPassword: {
  validation: {
    dynamicValidator: 'matchesPassword'
  }
}`}
                        language="js"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Tabs>
          </div>
          
          {/* Related Links */}
          <div className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold tracking-tight">Related References</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/logic/form-controller/overview">
                <Card className="overflow-hidden transition-all hover:shadow-lg hover:bg-primary/5 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium">Overview</h3>
                    </div>
                    <p className="text-muted-foreground mt-4">Return to the Form Controller overview for a high-level introduction.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/logic/form-controller/examples">
                <Card className="overflow-hidden transition-all hover:shadow-lg hover:bg-primary/5 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium">Examples</h3>
                    </div>
                    <p className="text-muted-foreground mt-4">Explore practical examples of the Form Controller in action.</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
