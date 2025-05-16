import React, { useEffect } from "react";
import { useUplink } from "@uplink-protocol/react";
import { FormConfig, FormController } from "@uplink-protocol/form-controller";

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

function DynamicFormStepper() {
  // Define your form configuration
  const formConfig: FormConfig = {
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
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
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

  // Initialize the form controller with useUplink
  const { state, methods } = useUplink(
    () => FormController(formConfig),
    { trackBindings: "all" }
  );

  // Register custom validators
  useEffect(() => {
    // Register a dynamic validator that makes a field required based on another field's value
    methods.registerValidator('requiredIf', (value: unknown, context: ValidationContext) => {
      const { 
        dependsOn, // ID of the field this depends on
        dependsOnValue // Value that should trigger the requirement
      } = context.field.validation.dynamicValidatorParams || {};
      
      // Skip if not properly configured
      if (!dependsOn) return true;
      
      // Get the value of the dependent field from the step ID and field ID
      const stepId = context.field.stepId;
      const dependentValue = context.formData[stepId]?.[dependsOn];
      
      // Determine if this field should be required
      const isRequired = dependsOnValue !== undefined 
        ? dependentValue === dependsOnValue // Required if the dependent field equals the specified value
        : Boolean(dependentValue); // Required if the dependent field has any truthy value
      
      // If required but empty, return error message
      if (isRequired && (value === undefined || value === null || value === '')) {
        return `${context.field.label} is required when ${dependsOn} is selected`;
      }
      
      // Otherwise valid
      return true;
    });

    // Register a validator that checks if two fields match
    methods.registerValidator('equals', (value: unknown, context: ValidationContext) => {
      const { matchField, errorMessage } = context.field.validation.dynamicValidatorParams || {};
      
      if (!matchField) return true;
      
      const stepId = context.field.stepId;
      const fieldToMatch = context.formData[stepId]?.[matchField];
      
      if (value !== fieldToMatch) {
        return errorMessage || `Must match ${matchField}`;
      }
      
      return true;
    });
  }, [methods]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Full Name <span style={{ color: "red" }}>*</span>
          </label>
          <input 
            type="text"
            value={state.formData.contact?.name || ""}
            onChange={(e) => methods.updateField('contact', 'name', e.target.value)}
            style={{ 
              width: "100%",
              padding: "8px 12px",
              borderRadius: "4px",
              border: state.fieldErrors.contact?.name ? "1px solid red" : "1px solid #ccc",
            }}
          />
          {state.fieldErrors.contact?.name && (
            <div style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
              {state.fieldErrors.contact.name}
            </div>
          )}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Email Address <span style={{ color: "red" }}>*</span>
          </label>
          <input 
            type="email"
            value={state.formData.contact?.email || ""}
            onChange={(e) => methods.updateField('contact', 'email', e.target.value)}
            style={{ 
              width: "100%",
              padding: "8px 12px",
              borderRadius: "4px",
              border: state.fieldErrors.contact?.email ? "1px solid red" : "1px solid #ccc",
            }}
          />
          {state.fieldErrors.contact?.email && (
            <div style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
              {state.fieldErrors.contact.email}
            </div>
          )}
        </div>
        
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input 
              type="checkbox"
              checked={state.formData.contact?.subscribe || false}
              onChange={(e) => methods.updateField('contact', 'subscribe', e.target.checked)}
            />
            Subscribe to newsletter
          </label>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Phone Number {state.formData.contact?.subscribe && <span style={{ color: "red" }}>*</span>}
          </label>
          <input 
            type="tel"
            value={state.formData.contact?.phoneNumber || ""}
            onChange={(e) => methods.updateField('contact', 'phoneNumber', e.target.value)}
            style={{ 
              width: "100%",
              padding: "8px 12px",
              borderRadius: "4px",
              border: state.fieldErrors.contact?.phoneNumber ? "1px solid red" : "1px solid #ccc",
            }}
          />
          {state.fieldErrors.contact?.phoneNumber && (
            <div style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
              {state.fieldErrors.contact.phoneNumber}
            </div>
          )}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Password <span style={{ color: "red" }}>*</span>
          </label>
          <input 
            type="password"
            value={state.formData.contact?.password || ""}
            onChange={(e) => methods.updateField('contact', 'password', e.target.value)}
            style={{ 
              width: "100%",
              padding: "8px 12px",
              borderRadius: "4px",
              border: state.fieldErrors.contact?.password ? "1px solid red" : "1px solid #ccc",
            }}
          />
          {state.fieldErrors.contact?.password && (
            <div style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
              {state.fieldErrors.contact.password}
            </div>
          )}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Confirm Password <span style={{ color: "red" }}>*</span>
          </label>
          <input 
            type="password"
            value={state.formData.contact?.confirmPassword || ""}
            onChange={(e) => methods.updateField('contact', 'confirmPassword', e.target.value)}
            style={{ 
              width: "100%",
              padding: "8px 12px",
              borderRadius: "4px",
              border: state.fieldErrors.contact?.confirmPassword ? "1px solid red" : "1px solid #ccc",
            }}
          />
          {state.fieldErrors.contact?.confirmPassword && (
            <div style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
              {state.fieldErrors.contact.confirmPassword}
            </div>
          )}
        </div>

        <button 
          type="submit" 
          style={{
            padding: "10px 20px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      {/* Debug information */}
      <div
        style={{
          marginTop: "40px",
          padding: "15px",
          backgroundColor: "#f8f9fa",
          borderRadius: "4px",
          fontSize: "14px",
          border: "1px solid #dee2e6",
        }}
      >
        <h3 style={{ margin: "0 0 10px 0" }}>Debug Information</h3>
        <div style={{ marginTop: "10px" }}>
          <strong>Form Data:</strong>
          <pre
            style={{
              backgroundColor: "#f1f1f1",
              padding: "10px",
              overflowX: "auto",
              margin: "5px 0 0 0",
            }}
          >
            {JSON.stringify(state.formData, null, 2)}
          </pre>
        </div>
        <div style={{ marginTop: "10px" }}>
          <strong>Form Errors:</strong>
          <pre
            style={{
              backgroundColor: "#f1f1f1",
              padding: "10px",
              overflowX: "auto",
              margin: "5px 0 0 0",
            }}
          >
            {JSON.stringify(state.fieldErrors, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default DynamicFormStepper;
