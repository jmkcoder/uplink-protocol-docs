'use client'

import { Card, CardContent } from "@/components/ui/card"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"

export function BasicUsage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight" id="basic-usage">Basic Usage</h2>
      
      <p className="text-lg">
        Creating and using controllers with the Uplink Protocol follows a simple pattern:
      </p>
      
      <div className="space-y-6 pt-4">
        <Card>
          <CardContent className="p-0 rounded-xl overflow-hidden">
            <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
              <span className="text-zinc-400">Creating a Controller</span>
            </div>
            <SyntaxHighlighter
              code={`import { StandardBinding, EventEmitter } from '@uplink-protocol/core';

class CounterController {
  constructor() {
    // Bindings hold reactive state
    this.bindings = {
      count: new StandardBinding(0),
      isEven: new StandardBinding(true)
    };
    
    // Methods define controller behavior
    this.methods = {
      increment: () => {
        const newCount = this.bindings.count.current + 1;
        this.bindings.count.set(newCount);
        this.bindings.isEven.set(newCount % 2 === 0);
        this.events.increment.emit(newCount);
      },
      
      decrement: () => {
        const newCount = this.bindings.count.current - 1;
        this.bindings.count.set(newCount);
        this.bindings.isEven.set(newCount % 2 === 0);
        this.events.decrement.emit(newCount);
      },
      
      reset: () => {
        this.bindings.count.set(0);
        this.bindings.isEven.set(true);
      }
    };
    
    // Events for notifying external systems
    this.events = {
      increment: new EventEmitter(),
      decrement: new EventEmitter()
    };
  }
}`}
              language="js"
            />
          </CardContent>
        </Card>
      </div>
      
      <h3 className="text-2xl font-semibold mt-8">Framework Integration Examples</h3>
      
      <div className="space-y-6 pt-4">
        <Card>
          <CardContent className="p-0">
            <div className="border-b border-border">
              <div className="flex overflow-x-auto">
                <div className="flex-1 px-4 py-2 font-medium border-b-2 border-primary text-primary">React</div>
                <div className="flex-1 px-4 py-2 text-muted-foreground">Vue</div>
                <div className="flex-1 px-4 py-2 text-muted-foreground">Svelte</div>
                <div className="flex-1 px-4 py-2 text-muted-foreground">Vanilla JS</div>
              </div>
            </div>
            
            <div className="p-0 rounded-xl overflow-hidden">
              <SyntaxHighlighter
                code={`import { useUplink } from '@uplink-protocol/react';
import { CounterController } from './counter.controller';
import { useEffect } from 'react';

// Initialize adapter at app entry point
// import { initializeReactAdapter } from '@uplink-protocol/react';
// initializeReactAdapter();

function CounterComponent() {
  // Use the controller with React
  const { state, methods, events } = useUplink(new CounterController());
  
  useEffect(() => {
    // Subscribe to events if needed
    const unsubscribe = events.increment.subscribe((count) => {
      console.log(\`Counter incremented to \${count}\`);
    });
    
    return () => unsubscribe();
  }, [events]);
  
  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <p>The count is {state.isEven ? 'even' : 'odd'}</p>
      <button onClick={methods.increment}>Increment</button>
      <button onClick={methods.decrement}>Decrement</button>
      <button onClick={methods.reset}>Reset</button>
    </div>
  );
}`}
                language="js"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
