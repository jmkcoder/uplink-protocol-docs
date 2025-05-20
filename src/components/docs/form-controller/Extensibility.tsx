'use client'

import { Card, CardContent } from "@/components/ui/card"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Extensibility() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Extensibility</h2>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Form Controller has been designed with extensibility in mind. The class-based architecture allows you to create custom form controllers with specialized behavior by extending the base FormControllerClass.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Key Extensibility Features</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span><strong className="text-foreground">Protected Properties and Methods</strong> - Access and override internal functionality in your custom controllers.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span><strong className="text-foreground">Lifecycle Hooks</strong> - Customize the initialization process at various stages.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span><strong className="text-foreground">Modular Service Architecture</strong> - Replace or extend individual services for targeted customization.</span>
            </li>
          </ul>
        </div>
        
        <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl border border-purple-200 dark:border-purple-800/60">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-900 dark:text-purple-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            When to Create Custom Controllers
          </h3>
          <p className="leading-relaxed text-purple-800 dark:text-purple-300">
            Consider creating a custom form controller when you need:
          </p>
          <ul className="mt-3 space-y-2 text-purple-700 dark:text-purple-400">
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Specialized validation behaviors</span>
            </li>
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Custom analytics integration</span>
            </li>
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Industry-specific form behaviors</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Creating a Custom Form Controller</h3>
        <p className="text-muted-foreground">
          To create a custom form controller, extend the FormControllerClass and override specific methods:
        </p>
          <Card className="mt-4">
          <CardContent className="p-0 rounded-xl overflow-hidden">
            <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
              <span className="text-zinc-400">custom-controller.ts</span>
            </div>
            <SyntaxHighlighter language="ts" code={`import { FormControllerClass, FormConfig } from '@uplink-protocol/form-controller';

export class CustomFormController extends FormControllerClass {
  constructor(config: FormConfig) {
    super(config);
    // Additional initialization if needed
  }
  
  // Override methods as needed
}`} />
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Extension Points</h3>
        
        <Tabs defaultValue="properties">
          <TabsList className="mb-4">
            <TabsTrigger value="properties">Protected Properties</TabsTrigger>
            <TabsTrigger value="hooks">Initialization Hooks</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
          </TabsList>
          
          <TabsContent value="properties">
            <p className="text-muted-foreground mb-4">
              All service instances and state objects are accessible in subclasses:
            </p>
              <Card>
              <CardContent className="p-0 rounded-xl overflow-hidden">
                <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                  <span className="text-zinc-400">custom-methods.ts</span>
                </div>
                <SyntaxHighlighter language="ts" code={`class CustomFormController extends FormControllerClass {
  customMethod() {
    // Access services directly
    const fieldData = this.fieldService.getFieldData(stepId, fieldId);
    
    // Access manager services
    this.formManagerService.customOperation();
    
    // Access state
    const data = this.initialFormData;
  }
}`} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="hooks">
            <p className="text-muted-foreground mb-4">
              You can customize the initialization process by overriding these lifecycle methods:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">1. setupInitialFormData</h4>                <Card>
                  <CardContent className="p-0 rounded-xl overflow-hidden">
                    <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                      <span className="text-zinc-400">setup-form-data.ts</span>
                    </div>
                    <SyntaxHighlighter language="ts" code={`protected setupInitialFormData(config: FormConfig): void {
  // Call the parent implementation first
  super.setupInitialFormData(config);
  
  // Add custom logic
  config.steps.forEach(step => {
    // Add default values for custom fields
    this.initialFormData[step.id]['customField'] = 'default value';
  });
}`} />
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">2. initializeServices</h4>                <Card>
                  <CardContent className="p-0 rounded-xl overflow-hidden">
                    <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                      <span className="text-zinc-400">initialize-services.ts</span>
                    </div>
                    <SyntaxHighlighter language="ts" code={`protected initializeServices(config: FormConfig): void {
  // Call the parent implementation
  super.initializeServices(config);
  
  // Replace a service with a custom implementation
  this.validatorService = new EnhancedValidatorService();
  
  // Add additional services
  this.myCustomService = new MyCustomService(config);
}`} />
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">3. initializeMethods</h4>                <Card>
                  <CardContent className="p-0 rounded-xl overflow-hidden">
                    <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                      <span className="text-zinc-400">initialize-methods.ts</span>
                    </div>
                    <SyntaxHighlighter language="ts" code={`protected initializeMethods(): void {
  // Call the parent implementation to get all standard methods
  super.initializeMethods();
  
  // Add custom methods
  this.methods.customSubmit = () => {
    // Custom submission logic
    this.methods.submitForm();
    // Additional processing after submission
    this.sendDataToServer();
  };
  
  // Override existing methods
  const originalSubmit = this.methods.submitForm;
  this.methods.submitForm = () => {
    // Pre-processing
    this.beforeSubmit();
    
    // Call original method
    const result = originalSubmit();
    
    // Post-processing
    this.afterSubmit();
    
    return result;
  };
}`} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="examples">
            <p className="text-muted-foreground mb-4">
              Here are some practical examples of custom form controller implementations:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">Analytics Form Controller</h4>                <Card>
                  <CardContent className="p-0 rounded-xl overflow-hidden">
                    <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                      <span className="text-zinc-400">analytics-controller.ts</span>
                    </div>
                    <SyntaxHighlighter language="ts" code={`import { FormControllerClass, FormConfig } from '@uplink-protocol/form-controller';

export class AnalyticsFormController extends FormControllerClass {
  private analyticsService: AnalyticsService;
  
  constructor(config: FormConfig) {
    super(config);
    this.analyticsService = new AnalyticsService();
  }
  
  protected initializeMethods(): void {
    super.initializeMethods();
    
    // Wrap navigation methods with analytics
    const originalNextStep = this.methods.nextStep;
    this.methods.nextStep = () => {
      const previousStep = this.bindings.currentStep.current.id;
      const result = originalNextStep();
      const currentStep = this.bindings.currentStep.current.id;
      
      this.analyticsService.trackNavigation(previousStep, currentStep);
      return result;
    };
    
    // Wrap submission with analytics
    const originalSubmit = this.methods.submitForm;
    this.methods.submitForm = () => {
      const result = originalSubmit();
      if (result.success) {
        this.analyticsService.trackCompletion(result.data);
      }
      return result;
    };
  }
}`} />
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">Enhanced Validation Controller</h4>                <Card>
                  <CardContent className="p-0 rounded-xl overflow-hidden">
                    <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800 code-block-header">
                      <span className="text-zinc-400">enhanced-validation-controller.ts</span>
                    </div>
                    <SyntaxHighlighter language="ts" code={`import { FormControllerClass, FormConfig } from '@uplink-protocol/form-controller';

export class EnhancedValidationController extends FormControllerClass {
  constructor(config: FormConfig) {
    super(config);
  }
  
  protected initializeServices(config: FormConfig): void {
    super.initializeServices(config);
    
    // Replace the validator service with an enhanced one
    this.validatorService = new EnhancedValidatorService();
  }
  
  protected initializeMethods(): void {
    super.initializeMethods();
    
    // Add advanced validation methods
    this.methods.validateWithRules = (rules) => {
      return this.validatorService.validateWithCustomRules(
        this.formService.getAllData(),
        rules
      );
    };
  }
}`} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Best Practices</h3>
        
        <div className="bg-muted p-6 rounded-lg border border-border">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong>Call super methods first</strong>
                <p className="text-muted-foreground text-sm mt-1">When overriding methods, call the parent implementation first unless you want to completely replace the behavior.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong>Avoid modifying base services directly</strong>
                <p className="text-muted-foreground text-sm mt-1">Instead of modifying the base services, create enhanced services and replace the references in your subclass.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong>Use composition for complex extensions</strong>
                <p className="text-muted-foreground text-sm mt-1">For very complex extensions, consider composing multiple controllers rather than deeply nesting inheritance.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong>Document your extensions</strong>
                <p className="text-muted-foreground text-sm mt-1">Make sure to document your custom controller's features and how they differ from the base implementation.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
