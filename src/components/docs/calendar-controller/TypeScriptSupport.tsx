'use client'

import { CodeBlock } from "@/components/code-block"

export function TypeScriptSupport() {
  return (
    <div className="space-y-6">
      <div>
        <h2 id="typescript-support" className="text-2xl font-bold tracking-tight mb-4">TypeScript Support</h2>
        <p className="text-muted-foreground">
          Calendar Controller is built with TypeScript and provides comprehensive type definitions to ensure type safety and improve developer experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Core Types</h3>
          <p>
            The key TypeScript interfaces and types that power Calendar Controller:
          </p>
            <CodeBlock language="ts" code={`// Configuration interface
interface CalendarOptions {
  locale?: string;
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  minDate?: Date;
  maxDate?: Date;
  dateFormat?: string;
  initialSelectedDate?: Date;
  hideOtherMonthDays?: boolean;
  yearRangeSize?: number;
}

// Calendar day representation
interface CalendarDate {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isInRange: boolean;
}

// Calendar month representation  
interface CalendarMonth {
  month: number;
  monthName: string;
  year: number;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isDisabled: boolean;
}

// Calendar year representation
interface CalendarYear {
  year: number;
  isCurrentYear: boolean;
  isSelected: boolean;
  isDisabled: boolean;
}

// Date range definition
interface DateRange {
  start: Date | null;
  end: Date | null;
}

// View modes
type ViewMode = 'day' | 'month' | 'year';`} />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Type-Safe Events</h3>
          <p>
            The event system is fully typed for better development experience:
          </p>
            <CodeBlock language="ts" code={`// Type-safe binding subscriptions
type DateSubscriptionHandler = (date: Date | null) => void;
type DateRangeSubscriptionHandler = (range: DateRange) => void;
type ViewModeSubscriptionHandler = (viewMode: ViewMode) => void;
type CalendarDaysHandler = (days: CalendarDate[]) => void;
type CalendarMonthsHandler = (months: CalendarMonth[]) => void;
type CalendarYearsHandler = (years: CalendarYear[]) => void;

// Type-safe binding subscriptions
const unsub1: () => void = calendar.bindings.selectedDate.subscribe((date) => {
  // date is typed as Date | null
  if (date) {
    console.log('Selected:', date.toLocaleDateString());
  }
});

const unsub2: () => void = calendar.bindings.selectedDateRange.subscribe((range) => {
  // range is typed as DateRange with start and end
  if (range.start && range.end) {
    console.log('Range:', range.start, 'to', range.end);
  }
});

const unsub3: () => void = calendar.bindings.calendarDays.subscribe((days) => {
  // days is typed as CalendarDate[]
  days.forEach(day => {
    // TypeScript provides intellisense for all properties
    if (day.isToday) {
      console.log('Today is day', day.day);
    }
  });
});

// TypeScript ensures you're using bindings correctly
calendar.bindings.viewMode.subscribe((mode) => {
  // mode is typed as 'day' | 'month' | 'year'
  if (mode === 'day') {
    // TypeScript knows this is a valid condition
  }
});`} />
        </div>
      </div>
        <div className="pt-4">
        <h3 className="text-xl font-semibold mb-4">Advanced TypeScript Integration</h3>
        <p className="mb-4">
          Working with Calendar Controller bindings in TypeScript:
        </p>
          <CodeBlock language="ts" code={`// Working with Calendar Controller bindings in TypeScript
import { CalendarController, CalendarDate } from '@uplink-protocol/calendar-controller';

const calendar = CalendarController();

// Type-safe binding access
const renderCalendar = (): void => {
  const days: CalendarDate[] = calendar.bindings.calendarDays.current;
  
  days.forEach(day => {
    // TypeScript provides intellisense for all properties
    const classNames = [
      day.isCurrentMonth ? 'current-month' : 'other-month',
      day.isToday ? 'today' : '',
      day.isSelected ? 'selected' : '',
      day.isDisabled ? 'disabled' : ''
    ].filter(Boolean).join(' ');
    
    // Render your UI with the day data
  });
};

// Type-safe view mode handling
const handleViewModeChange = (mode: 'day' | 'month' | 'year'): void => {
  calendar.methods.setViewMode(mode);
  // TypeScript ensures mode is valid
};`} />
      </div>
      
      <div className="pt-4">
        <h3 className="text-xl font-semibold mb-4">Type-Safe Configuration</h3>
        <p className="mb-4">
          Configure the Calendar Controller with TypeScript validation:
        </p>
          <CodeBlock language="ts" code={`import { CalendarController, CalendarOptions } from '@uplink-protocol/calendar-controller';

// Configuration with type checking
const options: CalendarOptions = {
  locale: 'en-US',
  firstDayOfWeek: 1,          // Monday (TypeScript ensures this is 0-6)
  dateFormat: 'MM/DD/YYYY',   // TypeScript ensures this is a valid format
  minDate: new Date(2025, 0, 1),
  maxDate: new Date(2025, 11, 31),
  yearRangeSize: 12           // TypeScript ensures this is a number
};

// TypeScript will catch errors at compile time
const calendar = CalendarController(options);

// Type inference works throughout the API
const currentDay = calendar.bindings.selectedDate.current;  // Inferred as Date | null
const viewMode = calendar.bindings.viewMode.current;        // Inferred as ViewMode

// Methods are type-checked
calendar.methods.selectDate(2025, 4, 15);  // TypeScript validates parameters
calendar.methods.setViewMode('month');     // TypeScript ensures valid view mode`} />
      </div>
    </div>
  )
}
