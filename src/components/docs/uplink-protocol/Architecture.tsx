'use client'

import { Card, CardContent } from "@/components/ui/card"

export function Architecture() {
  return (    <div className="space-y-4">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" id="architecture">Protocol Architecture</h2>
      
      <p className="text-base sm:text-lg">
        The Uplink Protocol follows a layered architecture designed for maximum flexibility and reusability:
      </p>
      
      <div className="space-y-4 sm:space-y-6 pt-4">
        <Card className="border-primary/20">
          <CardContent className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">1. Core Protocol Layer</h3>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              This layer defines the fundamental interfaces and models that make up the foundation of the protocol:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><strong>Controllers</strong>: Encapsulate business logic and state management</li>
              <li><strong>Bindings</strong>: Reactive state containers with subscription capabilities</li>
              <li><strong>Event Emitters</strong>: Communication channels for broadcasting state changes</li>
            </ul>
          </CardContent>
        </Card>
          <Card className="border-primary/20">
          <CardContent className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">2. Adapter Layer</h3>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              The adapter layer bridges the protocol with specific UI frameworks, translating between protocol operations and framework patterns:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><strong>Framework Adapters</strong>: Connect controllers to specific UI frameworks</li>
              <li><strong>Adapter Registry</strong>: Manages all available adapters</li>
              <li><strong>Controller Adapter</strong>: Provides a unified interface for controllers</li>
            </ul>
          </CardContent>
        </Card>
          <Card className="border-primary/20">
          <CardContent className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">3. Integration Layer</h3>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              The top layer provides framework-specific APIs and hooks for a seamless developer experience:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><strong>Framework Hooks</strong>: useUplink() for React, Vue composables, etc.</li>
              <li><strong>Integration Utilities</strong>: Tools for connecting controllers to framework components</li>
              <li><strong>Component Bindings</strong>: Pre-built UI connections for common patterns</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
