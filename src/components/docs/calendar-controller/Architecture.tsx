'use client'

import { Card, CardContent } from "@/components/ui/card"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"
import { CodeBlock } from "@/components/code-block"

export function Architecture() {
  return (    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <h2 id="architecture" className="text-3xl font-bold tracking-tight">Architecture</h2>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
          Enhanced in v0.2.1
        </span>
      </div>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Calendar Controller is built using a service-oriented architecture with a reactive state management system, providing a robust foundation for complex calendar management including new disabled weekdays functionality.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Core Components</h3>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800/60">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 font-medium">CC</div>
                <div>
                  <span className="font-semibold text-blue-800 dark:text-blue-300">CalendarController</span>
                  <p className="text-sm text-muted-foreground">The main entry point that initializes services and exposes the public API</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 font-medium">CS</div>
                <div>
                  <span className="font-semibold text-indigo-800 dark:text-indigo-300">CalendarService</span>
                  <p className="text-sm text-muted-foreground">Core calendar operations and state management</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 font-medium">DS</div>
                <div>
                  <span className="font-semibold text-purple-800 dark:text-purple-300">DateSelectionService</span>
                  <p className="text-sm text-muted-foreground">Handles single and range date selection logic</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 font-medium">DV</div>
                <div>
                  <span className="font-semibold text-pink-800 dark:text-pink-300">DateValidationService</span>
                  <p className="text-sm text-muted-foreground">Enforces date constraints and validation rules</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 font-medium">DF</div>
                <div>
                  <span className="font-semibold text-red-800 dark:text-red-300">DateFormattingService</span>
                  <p className="text-sm text-muted-foreground">Provides consistent date formatting and internationalization</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 font-medium">NS</div>
                <div>
                  <span className="font-semibold text-amber-800 dark:text-amber-300">NavigationService</span>
                  <p className="text-sm text-muted-foreground">Manages calendar navigation between months, years, and view modes</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 font-medium">VS</div>
                <div>
                  <span className="font-semibold text-green-800 dark:text-green-300">ViewStateService</span>
                  <p className="text-sm text-muted-foreground">Maintains current view state and mode switching</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 font-medium">EM</div>
                <div>
                  <span className="font-semibold text-teal-800 dark:text-teal-300">EventManagerService</span>
                  <p className="text-sm text-muted-foreground">Handles event dispatch and subscription management</p>
                </div>
              </li>
            </ul>
          </div>
        </div>        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">State Management Concepts</h3>
          <Card className="overflow-hidden">
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium text-lg">Services</h4>
                <p className="text-sm text-muted-foreground">Internal state containers with getters/setters and subscription capabilities that manage different aspects of the calendar</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-lg">Bindings</h4>
                <p className="text-sm text-muted-foreground">Public reactive properties exposed to consumers that automatically update when the underlying state changes</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-lg">Methods</h4>
                <p className="text-sm text-muted-foreground">Public functions for interacting with the calendar that provide a clean API for calendar operations</p>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Reactive Update Flow</h4>
                <ol className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-blue-700 dark:text-blue-400">1.</span>
                    <span>User action triggers a method call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-blue-700 dark:text-blue-400">2.</span>
                    <span>Method updates service state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-blue-700 dark:text-blue-400">3.</span>
                    <span>Service notifies subscribers about state change</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-blue-700 dark:text-blue-400">4.</span>
                    <span>Binding callbacks are triggered with new values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-blue-700 dark:text-blue-400">5.</span>
                    <span>UI components react to binding changes</span>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Architecture Diagram</h3>
        <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6">
          <div className="flex justify-center">
            <div className="space-y-6 max-w-3xl w-full">
              {/* User Interface Layer */}
              <div className="border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/10">
                <h4 className="text-center font-medium mb-3">User Interface Layer</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border border-blue-200 dark:border-blue-800 rounded p-2 bg-white dark:bg-zinc-800 text-center text-sm">
                    React Components
                  </div>
                  <div className="border border-blue-200 dark:border-blue-800 rounded p-2 bg-white dark:bg-zinc-800 text-center text-sm">
                    Vue Components
                  </div>
                  <div className="border border-blue-200 dark:border-blue-800 rounded p-2 bg-white dark:bg-zinc-800 text-center text-sm">
                    Svelte Components
                  </div>
                </div>
              </div>
              
              {/* Arrow down */}
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              
              {/* Public API Layer */}
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg p-4 bg-green-50 dark:bg-green-900/10">
                <h4 className="text-center font-medium mb-3">Public API Layer</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-green-200 dark:border-green-800 rounded p-2 bg-white dark:bg-zinc-800 text-center text-sm">
                    Bindings (Reactive Properties)
                  </div>
                  <div className="border border-green-200 dark:border-green-800 rounded p-2 bg-white dark:bg-zinc-800 text-center text-sm">
                    Methods (Public Functions)
                  </div>
                </div>
              </div>
              
              {/* Arrow down */}
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              
              {/* CalendarController */}
              <div className="border-2 border-indigo-200 dark:border-indigo-800 rounded-lg p-4 bg-indigo-50 dark:bg-indigo-900/10">
                <h4 className="text-center font-medium mb-3">Calendar Controller</h4>
                <div className="border border-indigo-200 dark:border-indigo-800 rounded p-2 bg-white dark:bg-zinc-800 text-center text-sm">
                  Orchestrates Services & Manages Calendar Lifecycle
                </div>
              </div>
              
              {/* Arrow down */}
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              
              {/* Service Layer */}
              <div className="border-2 border-purple-200 dark:border-purple-800 rounded-lg p-4 bg-purple-50 dark:bg-purple-900/10">
                <h4 className="text-center font-medium mb-3">Service Layer</h4>
                <div className="grid grid-cols-4 gap-2">
                  <div className="border border-purple-200 dark:border-purple-800 rounded p-2 bg-white dark:bg-zinc-800 text-center text-xs">
                    CalendarService
                  </div>
                  <div className="border border-purple-200 dark:border-purple-800 rounded p-2 bg-white dark:bg-zinc-800 text-center text-xs">
                    DateSelectionService
                  </div>
                  <div className="border border-purple-200 dark:border-purple-800 rounded p-2 bg-white dark:bg-zinc-800 text-center text-xs">
                    DateValidationService
                  </div>
                  <div className="border border-purple-200 dark:border-purple-800 rounded p-2 bg-white dark:bg-zinc-800 text-center text-xs">
                    DateFormattingService
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  <div className="border border-purple-200 dark:border-purple-800 rounded p-2 bg-white dark:bg-zinc-800 text-center text-xs">
                    NavigationService
                  </div>
                  <div className="border border-purple-200 dark:border-purple-800 rounded p-2 bg-white dark:bg-zinc-800 text-center text-xs">
                    ViewStateService
                  </div>
                  <div className="border border-purple-200 dark:border-purple-800 rounded p-2 bg-white dark:bg-zinc-800 text-center text-xs">
                    EventManagerService
                  </div>
                  <div className="border border-purple-200 dark:border-purple-800 rounded p-2 bg-white dark:bg-zinc-800 text-center text-xs">
                    ConstraintsService
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Implementation Example</h3>
        <Card>
          <CardContent className="p-0 rounded-xl overflow-hidden">
            <div className="flex items-center p-2 bg-zinc-900 border-b border-zinc-800">
              <div className="flex items-center space-x-2">
                <span className="bg-purple-500 w-3 h-3 rounded-full"></span>
                <span className="text-zinc-400">reactive-updates.js</span>
              </div>
            </div>
            <SyntaxHighlighter
              code={`// Example of how reactive updates flow through the system
import { CalendarController } from '@uplink-protocol/calendar-controller';

// Initialize calendar controller with config
const calendar = CalendarController({
  firstDayOfWeek: 1, // Monday
  dateFormat: 'MM/DD/YYYY',
  locale: 'en-US'
});

// 1. Subscribe to calendar data changes in the UI
calendar.bindings.calendarDays.subscribe((days) => {
  console.log('Calendar days updated:', days);
  // Update UI components with new calendar grid
});

calendar.bindings.selectedDate.subscribe((date) => {
  console.log('Selected date changed:', date);
  // Update UI to show selected date
});

// 2. User navigates to next month via the public API
calendar.methods.nextMonth();

// Internal flow (simplified):
// - nextMonth() method is called on CalendarController
// - CalendarController delegates to NavigationService.nextMonth()
// - NavigationService updates internal state
// - NavigationService notifies CalendarService of the change
// - CalendarService regenerates calendar days for new month
// - CalendarService updates its calendarDays state
// - CalendarService notifies subscribers (the binding)
// - The binding callback is triggered with the new values
// - UI component reacts to the binding change

// 3. User selects a date
calendar.methods.selectDate(2025, 4, 15); // May 15, 2025

// Additional automatic steps:
// - DateValidationService is notified to validate the date
// - If validation passes, DateSelectionService updates selectedDate
// - ViewStateService may update view mode if needed
// - UI components subscribed to selectedDate update accordingly`}
              language="js"
            />
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800/50">
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3">Architecture Benefits</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-medium text-green-700 dark:text-green-400">✓</span>
              <span><strong className="text-foreground">Separation of Concerns</strong> - Each service handles a specific aspect of calendar management</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-green-700 dark:text-green-400">✓</span>
              <span><strong className="text-foreground">Testability</strong> - Services can be tested in isolation with minimal mocking</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-green-700 dark:text-green-400">✓</span>
              <span><strong className="text-foreground">Extensibility</strong> - New capabilities can be added by extending existing services or adding new ones</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-green-700 dark:text-green-400">✓</span>
              <span><strong className="text-foreground">Framework Agnostic</strong> - The core architecture isn't tied to any UI framework</span>
            </li>
          </ul>
        </div>
        
        <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800/50">
          <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-3">Advanced Usage Notes</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-medium text-amber-700 dark:text-amber-400">•</span>
              <span>Services maintain immutable state internally to prevent side effects</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-amber-700 dark:text-amber-400">•</span>
              <span>Bindings provide a read-only view of state to prevent direct mutations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-amber-700 dark:text-amber-400">•</span>
              <span>Method calls are the only way to update state, ensuring all updates go through proper validation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-amber-700 dark:text-amber-400">•</span>
              <span>Event-based communication between services reduces tight coupling</span>
            </li>
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
