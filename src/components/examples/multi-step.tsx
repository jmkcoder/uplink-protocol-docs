import React from "react";
import { useUplink } from "@uplink-protocol/react";
import { FormConfig, FormController } from "@uplink-protocol/form-controller";

function MultiStepForm() {
  // Define your form configuration with multiple steps
  const formConfig: FormConfig = {
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
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
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
  const handleNext = () => {
    const currentStepId = state.currentStep.id;
    const isValid = methods.validateStep(currentStepId);
    
    if (isValid) {
      methods.nextStep();
    }
  };

  // Move to previous step
  const handlePrevious = () => {
    methods.prevStep();
  };

  // Render form based on current step
  const renderStep = () => {
    const currentStepId = state.currentStep.id;
    
    // Step 1: Personal Info
    if (currentStepId === 'personal') {
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              First Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              value={state.formData.personal?.firstName || ""}
              onChange={(e) => methods.updateField('personal', 'firstName', e.target.value)}
              className="w-full p-2 border rounded-md"
              style={{ 
                borderColor: state.fieldErrors.personal?.firstName ? "red" : "#ccc"
              }}
            />
            {state.fieldErrors.personal?.firstName && (
              <div style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
                {state.fieldErrors.personal.firstName}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Last Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              value={state.formData.personal?.lastName || ""}
              onChange={(e) => methods.updateField('personal', 'lastName', e.target.value)}
              className="w-full p-2 border rounded-md"
              style={{ 
                borderColor: state.fieldErrors.personal?.lastName ? "red" : "#ccc"
              }}
            />
            {state.fieldErrors.personal?.lastName && (
              <div style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
                {state.fieldErrors.personal.lastName}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              value={state.formData.personal?.email || ""}
              onChange={(e) => methods.updateField('personal', 'email', e.target.value)}
              className="w-full p-2 border rounded-md"
              style={{ 
                borderColor: state.fieldErrors.personal?.email ? "red" : "#ccc"
              }}
            />
            {state.fieldErrors.personal?.email && (
              <div style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
                {state.fieldErrors.personal.email}
              </div>
            )}
          </div>
        </div>
      );
    }
    
    // Step 2: Address
    else if (currentStepId === 'address') {
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Street Address <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              value={state.formData.address?.street || ""}
              onChange={(e) => methods.updateField('address', 'street', e.target.value)}
              className="w-full p-2 border rounded-md"
              style={{ 
                borderColor: state.fieldErrors.address?.street ? "red" : "#ccc"
              }}
            />
            {state.fieldErrors.address?.street && (
              <div style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
                {state.fieldErrors.address.street}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              City <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              value={state.formData.address?.city || ""}
              onChange={(e) => methods.updateField('address', 'city', e.target.value)}
              className="w-full p-2 border rounded-md"
              style={{ 
                borderColor: state.fieldErrors.address?.city ? "red" : "#ccc"
              }}
            />
            {state.fieldErrors.address?.city && (
              <div style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
                {state.fieldErrors.address.city}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              ZIP / Postal Code <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              value={state.formData.address?.zipCode || ""}
              onChange={(e) => methods.updateField('address', 'zipCode', e.target.value)}
              className="w-full p-2 border rounded-md"
              style={{ 
                borderColor: state.fieldErrors.address?.zipCode ? "red" : "#ccc"
              }}
            />
            {state.fieldErrors.address?.zipCode && (
              <div style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
                {state.fieldErrors.address.zipCode}
              </div>
            )}
          </div>
        </div>
      );
    }
    
    // Step 3: Review
    else if (currentStepId === 'review') {
      return (
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Review Your Information</h3>
          
          <div className="border rounded-md overflow-hidden">
            <div className="p-4 bg-gray-50">
              <h4 className="font-medium">Personal Information</h4>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">First Name</div>
                  <div>{state.formData.personal?.firstName}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Last Name</div>
                  <div>{state.formData.personal?.lastName}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-sm text-gray-500">Email</div>
                  <div>{state.formData.personal?.email}</div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 border-t">
              <h4 className="font-medium">Address</h4>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                <div>
                  <div className="text-sm text-gray-500">Street Address</div>
                  <div>{state.formData.address?.street}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500">City</div>
                    <div>{state.formData.address?.city}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">ZIP / Postal Code</div>
                    <div>{state.formData.address?.zipCode}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Progress bar */}      <div className="flex border-b border-gray-200 mb-6">
        {formConfig.steps.map((step) => (
          <div 
            key={step.id}
            className={`flex-1 text-center py-2 font-medium ${
              state.currentStep.id === step.id 
              ? "bg-blue-500 text-white" 
              : "bg-gray-100 text-gray-500"
            }`}
          >
            {step.title}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Current step content */}
        {renderStep()}
        
        {/* Navigation buttons */}
        <div className="flex justify-end pt-6 mt-4">
          <button 
            type="button"
            onClick={handlePrevious}
            disabled={state.isFirstStep}
            className={`px-4 py-2 rounded mr-2 ${
              state.isFirstStep 
              ? "bg-gray-300 text-gray-600 cursor-not-allowed" 
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Previous
          </button>
          
          {state.isLastStep ? (
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          ) : (
            <button 
              type="button"
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next
            </button>
          )}
        </div>
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
        <div>
          <strong>Current Step:</strong> {state.currentStep.id} ({state.currentStepIndex + 1} of {formConfig.steps.length})
        </div>
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
      </div>
    </div>
  );
}

export default MultiStepForm;
