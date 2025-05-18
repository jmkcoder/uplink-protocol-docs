# Vanilla JavaScript Usage Guide

This document explains the correct patterns for using the Form Controller with vanilla JavaScript.

## Correct Pattern for Vanilla JavaScript

When using the Form Controller with vanilla JavaScript (without a framework like React, Vue, or Svelte), follow these key patterns:

### 1. Initialize Form Controller Directly

```javascript
// Correct initialization
const form = FormController(formConfig);

// INCORRECT - Do not use controller adapter
// const controller = (() => FormController(formConfig));
```

### 2. Use Individual Bindings Subscriptions

```javascript
// Correct - Use individual bindings subscriptions
form.bindings.formData.subscribe((data) => {
  // Update UI based on form data
  nameInput.value = data.personal?.name || '';
});

form.bindings.fieldErrors.subscribe((errors) => {
  // Update error messages
  nameError.textContent = errors.personal?.name || '';
  nameError.style.display = errors.personal?.name ? 'block' : 'none';
});

form.bindings.isFormValid.subscribe((isValid) => {
  // Update submit button state
  submitButton.disabled = !isValid;
});

// INCORRECT - Do not use a single state subscription
// controller.subscribe((state) => {
//   // Don't access state directly like this
//   nameInput.value = state.formData.personal?.name || '';
//   submitButton.disabled = !state.isFormValid;
// });
```

### 3. Use Methods API Directly

```javascript
// Correct - Direct method calls on the form instance
form.methods.updateField('personal', 'name', 'John Doe');
form.methods.validateForm(true);
form.methods.getFlatData();

// INCORRECT - Don't access state properties directly
// if (form.state.isFormValid.value) { ... }
```

### 4. Form Submission

```javascript
// Correct form submission pattern
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Validate the form
  const isValid = form.methods.validateForm(true);
  
  if (isValid) {
    // Get form data using methods API
    const formData = form.methods.getFlatData();
    // Process the data
    console.log('Form data:', formData);
  }
});

// INCORRECT - Don't use submitForm() method
// const result = controller.methods.submitForm();
```

## Framework Differences

Unlike framework adapters that manage state directly in the component, vanilla JavaScript requires:

1. Manual DOM element references
2. Explicit subscription to individual bindings
3. Explicit event handlers to update the form controller
4. Manual cleanup of event listeners and subscriptions

## Example

```javascript
import { FormController } from "@uplink-protocol/form-controller";

// Form configuration
const formConfig = { /* ... */ };

// Initialize form controller
const form = FormController(formConfig);

// DOM references
const nameInput = document.getElementById('name');
const nameError = document.getElementById('name-error');
const submitButton = document.getElementById('submit');

// Subscribe to form data changes
form.bindings.formData.subscribe((data) => {
  nameInput.value = data.personal?.name || '';
});

// Subscribe to error changes
form.bindings.fieldErrors.subscribe((errors) => {
  nameError.textContent = errors.personal?.name || '';
  nameError.style.display = errors.personal?.name ? 'block' : 'none';
});

// Subscribe to validity changes
form.bindings.isFormValid.subscribe((isValid) => {
  submitButton.disabled = !isValid;
});

// Event handlers
nameInput.addEventListener('input', (e) => {
  form.methods.updateField('personal', 'name', e.target.value);
});

// Form submission
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const isValid = form.methods.validateForm(true);
  if (isValid) {
    const formData = form.methods.getFlatData();
    console.log('Form submitted:', formData);
  }
});
```
