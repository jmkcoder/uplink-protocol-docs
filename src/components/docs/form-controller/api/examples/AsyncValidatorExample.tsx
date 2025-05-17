import React from 'react';
import { CodeBlock } from '@/components/code-block';
import { Card } from '@/components/ui/card';

const AsyncValidatorExample: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Advanced Asynchronous Validation Examples</h3>
      
      <p className="text-muted-foreground">
        Asynchronous validation is essential for cases where validation requires server-side checks or external API calls.
        The FormController fully supports async validators, making it easy to implement features like username availability
        checks, API-based data validation, or other server-dependent validations.
      </p>
      
      <div className="grid md:grid-cols-1 gap-6">
        <Card className="p-5">
          <h4 className="text-lg font-medium mb-3">Basic Async Validator Pattern</h4>
          <p className="text-sm text-muted-foreground mb-4">
            The simplest pattern for async validation returns a Promise from your validator function:
          </p>
          <CodeBlock language="tsx" code={`// Register async validator
controller.methods.registerValidator('checkUnique', 
  async (value, fieldConfig) => {
    // Skip validation for empty values
    if (!value) return null;
    
    // Perform async validation
    try {
      const response = await fetch(
        \`/api/check-unique?field=\${fieldConfig.id}&value=\${value}\`
      );
      const data = await response.json();
      
      // Return either null (valid) or error message
      return data.isUnique ? null : 'This value is already taken';
    } catch (error) {
      console.error('Validation error:', error);
      return 'Unable to validate. Please try again.';
    }
  }
);`} />
        </Card>
        
        <Card className="p-5">
          <h4 className="text-lg font-medium mb-3">UI Integration with Async Validation</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Handle loading states and error messages in your UI components:
          </p>
          <CodeBlock language="tsx" code={`function UsernameField() {
  const { state, methods } = useFormController();
  const { fieldValues, fieldErrors, isValidating } = state;
  
  // Check if this specific field is validating
  const isCheckingUsername = isValidating.username;
  
  return (
    <div>
      <label htmlFor="username">Username</label>
      <div className="relative">
        <input
          id="username"
          value={fieldValues.username || ''}
          onChange={(e) => methods.updateField('username', e.target.value)}
          onBlur={() => methods.validateField('username')}
          className={\`input \${fieldErrors.username ? 'input-error' : ''}\`}
        />
        {isCheckingUsername && (
          <span className="absolute right-2 top-2">
            <LoadingSpinner size="small" />
          </span>
        )}
      </div>
      {fieldErrors.username && (
        <p className="text-red-500 text-sm mt-1">{fieldErrors.username}</p>
      )}
    </div>
  );
}`} />
        </Card>
      </div>
      
      <div className="p-5 border rounded-lg">
        <h4 className="text-lg font-medium mb-4">Debounced Asynchronous Validation</h4>
        <p className="text-muted-foreground mb-4">
          For improved user experience and to reduce API calls, implement debouncing with async validators:
        </p>
        <CodeBlock language="tsx" code={`// Utility function for creating debounced async validators
function createDebouncedValidator(validatorFn, debounceMs = 500) {
  const pendingValidations = new Map();
  
  return async (value, fieldConfig, formData) => {
    const fieldId = fieldConfig?.id;
    if (!fieldId) return null;
    
    // Cancel any pending validation for this field
    if (pendingValidations.has(fieldId)) {
      clearTimeout(pendingValidations.get(fieldId));
    }
    
    // Return a promise that will resolve after the debounce period
    return new Promise(resolve => {
      const timeoutId = setTimeout(async () => {
        pendingValidations.delete(fieldId);
        
        // Run the actual validator
        const result = await validatorFn(value, fieldConfig, formData);
        resolve(result);
      }, debounceMs);
      
      pendingValidations.set(fieldId, timeoutId);
    });
  };
}

// Usage example
controller.methods.registerValidator(
  'debouncedUsernameCheck',
  createDebouncedValidator(async (value) => {
    if (!value || value.length < 3) return null;
    
    try {
      const response = await fetch(\`/api/check-username?username=\${value}\`);
      const data = await response.json();
      return data.available ? null : 'Username already taken';
    } catch (error) {
      return 'Error checking username';
    }
  }, 800) // 800ms debounce
);`} />
      </div>
      
      <div className="p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-md">
        <h4 className="text-lg font-medium mb-3">Advanced: Caching Validation Results</h4>
        <p className="text-muted-foreground mb-4">
          For expensive validation operations, implement caching to avoid redundant API calls:
        </p>
        <CodeBlock language="tsx" code={`// Create a validator with result caching
function createCachedValidator(validatorFn, cacheTimeMs = 30000) {
  const cache = new Map();
  
  return async (value, fieldConfig, formData) => {
    if (!value) return null;
    
    // Use the value as cache key (could be more complex for your use case)
    const cacheKey = String(value);
    
    // Check if we have a cached result that's still valid
    if (cache.has(cacheKey)) {
      const { result, timestamp } = cache.get(cacheKey);
      const isExpired = Date.now() - timestamp > cacheTimeMs;
      
      if (!isExpired) {
        return result;
      }
    }
    
    // No valid cached result, run the validator
    const result = await validatorFn(value, fieldConfig, formData);
    
    // Cache the result
    cache.set(cacheKey, {
      result,
      timestamp: Date.now()
    });
    
    return result;
  };
}

// Usage with a ZIP code validation API
controller.methods.registerValidator(
  'zipCodeValidator',
  createCachedValidator(async (value) => {
    // Only validate if it looks like a ZIP code
    if (!value || !/^\\d{5}(-\\d{4})?$/.test(value)) {
      return null;
    }
    
    try {
      const response = await fetch(\`/api/validate-zip?code=\${value}\`);
      const data = await response.json();
      return data.isValid ? null : 'Invalid ZIP code';
    } catch (error) {
      return 'Error validating ZIP code';
    }
  })
);`} />
        
        <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-md text-sm">
          <span className="font-semibold">Best Practice:</span> When implementing advanced validation patterns, consider 
          creating reusable validator factories like the examples above. This helps maintain consistent validation 
          behavior across your application and makes complex validation logic more maintainable.
        </div>
      </div>
    </div>
  );
};

export default AsyncValidatorExample;
