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
                <div className="bg-primary/20 p-2 rounded">State Management</div>
                <div className="bg-primary/20 p-2 rounded">Event System</div>
                <div className="bg-primary/20 p-2 rounded">Date Logic</div>
              </div>
            </div>
            
            <div className="text-center">↕️</div>
            
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg font-medium">
              Core Date Utilities & Internationalization
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Core Principles</h3>
          <ul className="space-y-2 list-disc pl-6">
            <li><strong>Clear Separation of Concerns</strong>: Logic and UI are completely separate, allowing for maximum flexibility in presentation.</li>
            <li><strong>Reactive Architecture</strong>: Updates are propagated through an event system, ensuring all consumers stay in sync.</li>
            <li><strong>Immutable Data Patterns</strong>: Calendar data is provided as immutable snapshots, preventing unintended side effects.</li>
            <li><strong>Minimal Dependencies</strong>: Built with minimal external dependencies to keep the package lightweight.</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Module Structure</h3>
          <ul className="space-y-2 list-disc pl-6">
            <li><strong>Core Controller</strong>: Main class that orchestrates all functionality.</li>
            <li><strong>State Manager</strong>: Handles internal state mutations and validations.</li>
            <li><strong>Event Bus</strong>: Manages subscriptions and event notifications.</li>
            <li><strong>Date Generators</strong>: Creates calendar day objects for rendering.</li>
            <li><strong>Internationalization Engine</strong>: Handles all locale-specific formatting.</li>
            <li><strong>Validation Engine</strong>: Enforces date constraints and rules.</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-4">
        <h3 className="text-xl font-semibold mb-4">Design Patterns</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-border p-4 rounded-md">
            <h4 className="font-semibold mb-2">Observer Pattern</h4>
            <p className="text-sm text-muted-foreground">
              Used for the event system, allowing components to subscribe to changes in the calendar state without tight coupling.
            </p>
          </div>
          
          <div className="border border-border p-4 rounded-md">
            <h4 className="font-semibold mb-2">Factory Pattern</h4>
            <p className="text-sm text-muted-foreground">
              Employed for creating calendar day objects and other complex data structures in a consistent way.
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
import { CalendarController } from '@uplink/calendar-controller';
const calendar = new CalendarController();

// 2. Set up event listeners
calendar.onDateSelected(handleDateSelection);
calendar.onViewModeChange(handleViewChange);
calendar.onNavigationChange(refreshCalendarView);

// 3. Generate UI data
const calendarDays = calendar.generateCalendarDays();
const weekdayNames = calendar.getLocalizedWeekdays();
const monthYearHeader = calendar.getFormattedMonthYear();

// 4. Render your UI with the data
function renderCalendar() {
  // Your UI rendering code
}

// 5. Handle user interactions
function handlePrevMonthClick() {
  calendar.prevMonth();
  // UI updates via event handlers
}

function handleDateClick(day) {
  if (!day.isDisabled) {
    calendar.selectDate(day.date);
    // UI updates via event handlers
  }
}`} />
      </div>
    </div>
  )
}
