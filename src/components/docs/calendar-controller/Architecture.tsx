'use client'

import { CodeBlock } from "@/components/code-block"

export function Architecture() {
  return (
    <div className="space-y-6">
      <div>
        <h2 id="architecture" className="text-2xl font-bold tracking-tight mb-4">Architecture</h2>
        <p className="text-muted-foreground">
          Calendar Controller follows a clear architectural pattern that separates concerns and provides a maintainable, extensible foundation.
        </p>
      </div>
      
      <div className="p-6 border border-border rounded-lg bg-muted/50 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col space-y-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 p-4 rounded-lg font-medium">
              UI Layer (Your Implementation)
            </div>
            
            <div className="text-center">↕️</div>
              <div className="bg-primary/10 text-primary p-4 rounded-lg font-medium">
              Calendar Controller API
              <div className="grid grid-cols-3 gap-2 mt-4 text-sm">
                <div className="bg-primary/20 p-2 rounded">Methods</div>
                <div className="bg-primary/20 p-2 rounded">Bindings</div>
                <div className="bg-primary/20 p-2 rounded">Services</div>
              </div>
            </div>
            
            <div className="text-center">↕️</div>
            
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg font-medium">
              Specialized Services Layer
              <div className="grid grid-cols-2 gap-1 mt-2 text-xs">
                <div className="bg-gray-200 dark:bg-gray-700 p-1 rounded">CalendarService</div>
                <div className="bg-gray-200 dark:bg-gray-700 p-1 rounded">DateSelectionService</div>
                <div className="bg-gray-200 dark:bg-gray-700 p-1 rounded">DateValidationService</div>
                <div className="bg-gray-200 dark:bg-gray-700 p-1 rounded">DateFormattingService</div>
                <div className="bg-gray-200 dark:bg-gray-700 p-1 rounded">NavigationService</div>
                <div className="bg-gray-200 dark:bg-gray-700 p-1 rounded">ViewStateService</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Service-Oriented Architecture</h3>
          <ul className="space-y-2 list-disc pl-6">
            <li><strong>Specialized Services</strong>: Each service handles a specific aspect of calendar functionality for clear separation of concerns.</li>
            <li><strong>Reactive Bindings</strong>: Updates are propagated through reactive bindings, ensuring all consumers stay in sync.</li>
            <li><strong>Immutable State</strong>: Calendar data is provided as immutable snapshots, preventing unintended side effects.</li>
            <li><strong>Factory Pattern</strong>: CalendarController() factory function creates and configures all necessary services.</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Specialized Services</h3>
          <ul className="space-y-2 list-disc pl-6">
            <li><strong>CalendarService</strong>: Core calendar operations and state management.</li>
            <li><strong>DateSelectionService</strong>: Handles single and range date selection logic.</li>
            <li><strong>DateValidationService</strong>: Enforces date constraints and validation rules.</li>
            <li><strong>DateFormattingService</strong>: Provides consistent date formatting and internationalization.</li>
            <li><strong>NavigationService</strong>: Manages calendar navigation between months, years, and view modes.</li>
            <li><strong>ViewStateService</strong>: Maintains current view state and mode switching.</li>
            <li><strong>EventManagerService</strong>: Handles event dispatch and subscription management.</li>
            <li><strong>ConstraintsService</strong>: Manages date constraints and business rules.</li>
            <li><strong>CalendarGeneratorService</strong>: Generates calendar data structures for rendering.</li>
            <li><strong>ConfigurationService</strong>: Handles configuration management and validation.</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-4">
        <h3 className="text-xl font-semibold mb-4">Design Patterns</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">          <div className="border border-border p-4 rounded-md">
            <h4 className="font-semibold mb-2">Service Locator</h4>
            <p className="text-sm text-muted-foreground">
              Used to register and locate specialized services within the controller, enabling loose coupling and testability.
            </p>
          </div>
          
          <div className="border border-border p-4 rounded-md">
            <h4 className="font-semibold mb-2">Observer Pattern</h4>
            <p className="text-sm text-muted-foreground">
              Used for the reactive binding system, allowing components to subscribe to state changes without tight coupling.
            </p>
          </div>
          
          <div className="border border-border p-4 rounded-md">
            <h4 className="font-semibold mb-2">Factory Pattern</h4>
            <p className="text-sm text-muted-foreground">
              CalendarController() factory function creates and configures all necessary services and their dependencies.
            </p>
          </div>
          
          <div className="border border-border p-4 rounded-md">
            <h4 className="font-semibold mb-2">Strategy Pattern</h4>
            <p className="text-sm text-muted-foreground">
              Used for validation rules and date formatting, allowing for different strategies to be swapped in.
            </p>
          </div>
          
          <div className="border border-border p-4 rounded-md">
            <h4 className="font-semibold mb-2">Immutable State</h4>
            <p className="text-sm text-muted-foreground">
              All state updates create new state objects rather than mutating existing ones, improving predictability.
            </p>
          </div>
        </div>
      </div>
      
      <div className="pt-4">
        <h3 className="text-xl font-semibold mb-4">Integration Flow</h3>
          <CodeBlock language="tsx" code={`// 1. Import and initialize
import { CalendarController } from '@uplink-protocol/calendar-controller';
const calendar = CalendarController();

// 2. Set up reactive bindings
const unsubscriptions = [
  calendar.bindings.calendarDays.subscribe(handleDaysChange),
  calendar.bindings.selectedDate.subscribe(handleDateSelection),
  calendar.bindings.viewMode.subscribe(handleViewModeChange),
  calendar.bindings.monthName.subscribe(handleMonthChange),
  calendar.bindings.currentYear.subscribe(handleYearChange)
];

// 3. Access current state
const days = calendar.bindings.calendarDays.current;
const monthName = calendar.bindings.monthName.current;
const currentYear = calendar.bindings.currentYear.current;

// 4. Render your UI with the data
function renderCalendar() {
  // Your UI rendering code using days, monthName, currentYear
}

// 5. Handle user interactions
function handlePrevMonthClick() {
  calendar.methods.prevMonth();
  // UI updates automatically via bindings
}

function handleDateClick(day) {
  if (!day.isDisabled && day.date) {
    calendar.methods.selectDate(
      day.date.getFullYear(),
      day.date.getMonth(), 
      day.date.getDate()
    );
    // UI updates automatically via bindings
  }
}

// 6. Clean up when component unmounts
function cleanup() {
  unsubscriptions.forEach(unsub => unsub());
}`} />
      </div>
    </div>
  )
}
