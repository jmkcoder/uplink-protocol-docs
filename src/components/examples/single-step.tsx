import React from "react";
import { useUplink } from "@uplink-protocol/react";
import { FormConfig, FormController } from "@uplink-protocol/form-controller";

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
    <div style={{ padding: "15px" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>
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
              fontSize: "14px"
            }}
          />
          {state.fieldErrors.contact?.name && (
            <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
              {state.fieldErrors.contact.name}
            </div>
          )}
        </div>        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>
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
              fontSize: "14px" 
            }}
          />
          {state.fieldErrors.contact?.email && (
            <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
              {state.fieldErrors.contact.email}
            </div>
          )}
        </div>        <button 
          type="submit" 
          style={{
            padding: "8px 16px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Submit
        </button>
      </form>

      {/* Debug information */}
      <div
        style={{
          marginTop: "30px",
          padding: "12px",
          backgroundColor: "#f8f9fa",
          borderRadius: "4px",
          fontSize: "13px",
          border: "1px solid #dee2e6",
        }}
      >
        <h3 style={{ margin: "0 0 8px 0", fontSize: "15px" }}>Debug Information</h3>
        <div style={{ marginTop: "8px" }}>
          <strong>Form Data:</strong>
          <pre
            style={{
              backgroundColor: "#f1f1f1",
              padding: "8px",
              overflowX: "auto",
              margin: "5px 0 0 0",
              fontSize: "12px",
            }}
          >
            {JSON.stringify(state.formData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default DynamicFormStepper;
