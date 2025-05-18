'use client'

import { Card, CardContent } from "@/components/ui/card"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"

export function AdvancedFeatures() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight" id="advanced-features">Advanced Features</h2>
      
      <div className="space-y-6 pt-4">
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">Typed Controllers</h3>
            <p className="mb-4">
              When using TypeScript, you can leverage the TypedController interface for strong typing:
            </p>
            <SyntaxHighlighter
              code={`import { TypedController, Binding, EventEmitter, StandardBinding } from '@uplink-protocol/core';

// Define your specific controller types
interface CounterBindings {
  count: Binding<number>;
  isEven: Binding<boolean>;
}

interface CounterMethods {
  increment(): void;
  decrement(): void;
  reset(): void;
}

interface CounterEvents {
  increment: EventEmitter<number>;
  decrement: EventEmitter<number>;
}

// Implement with strong typing
class CounterController implements TypedController<CounterBindings, CounterMethods, CounterEvents> {
  // ... implementation
}`}
              language="ts"
            />
          </CardContent>
        </Card>
        
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">Custom Adapters</h3>
            <p className="mb-4">
              You can create custom adapters for specific frameworks or use cases:
            </p>
            <SyntaxHighlighter
              code={`import { AdapterInterface, Controller, AdapterRegistry } from '@uplink-protocol/core';

class CustomAdapter implements AdapterInterface {
  readonly name = 'custom-adapter';
  readonly version = '1.0.0';
  
  initialize(config?: any): void {
    // Initialization logic
  }
  
  connectController(controller: Controller, element: HTMLElement): void {
    // Connect controller to the element
  }
  
  // Implement other required methods
  // ...
}

// Register the adapter
const registry = AdapterRegistry.getInstance();
registry.registerAdapter(new CustomAdapter());
registry.setDefaultAdapter('custom-adapter');`}
              language="ts"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
