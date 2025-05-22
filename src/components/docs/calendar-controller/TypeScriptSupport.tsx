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
interface CalendarConfig {
  locale?: string;
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  minDate?: Date;
  maxDate?: Date;
  dateFormatOptions?: Intl.DateTimeFormatOptions;
  selectionMode?: 'single' | 'range' | 'multiple';
  hideOtherMonthDays?: boolean;
}

// Calendar day representation
interface CalendarDay {
  date: Date;
  dayOfMonth: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  isStartOfRange: boolean;
  isEndOfRange: boolean;
  isWithinRange: boolean;
}

// Date range definition
interface DateRange {
  start: Date;
  end: Date;
}

// View modes
type ViewMode = 'day' | 'month' | 'year';`} />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Type-Safe Events</h3>
          <p>
            The event system is fully typed for better development experience:
          </p>
          
          <CodeBlock language="ts" code={`// Type-safe event handlers
type DateSelectedHandler = (date: Date) => void;
type DateRangeSelectedHandler = (range: DateRange) => void;
type ViewModeChangeHandler = (viewMode: ViewMode) => void;
type NavigationChangeHandler = (state: {
  currentMonth: number;
  currentYear: number;
}) => void;

// Type-safe event subscriptions
const unsub1: () => void = calendar.onDateSelected((date) => {
  // date is typed as Date
});

const unsub2: () => void = calendar.onDateRangeSelected((range) => {
  // range is typed as DateRange with start and end
});

// TypeScript ensures you're using handlers correctly
calendar.onViewModeChange((mode) => {
  // mode is typed as 'day' | 'month' | 'year'
  if (mode === 'day') {
    // TypeScript knows this is a valid condition
  }
});`} />
        </div>
      </div>
      
      <div className="pt-4">
        <h3 className="text-xl font-semibold mb-4">Generic Extensions</h3>
        <p className="mb-4">
          Calendar Controller supports generic types for custom data extensions:
        </p>
        
        <CodeBlock language="ts" code={`// Extending calendar day with custom data
interface EventData {
  events: Array<{
    id: string;
    title: string;
  }>;
  isHoliday: boolean;
}

// Use the generic parameter to extend CalendarDay
const calendar = new CalendarController<EventData>();

// Attach custom data to specific dates
calendar.setDayData(new Date(2025, 4, 15), {
  events: [{ id: '1', title: 'Meeting' }],
  isHoliday: false
});

// Later, the generated days will include your custom data
const days = calendar.generateCalendarDays();
days.forEach(day => {
  if (day.customData?.events.length > 0) {
    console.log(\`Events on \${day.date}:\`, day.customData.events);
  }
});`} />
      </div>
      
      <div className="pt-4">
        <h3 className="text-xl font-semibold mb-4">Type-Safe Configuration</h3>
        <p className="mb-4">
          Configure the Calendar Controller with TypeScript validation:
        </p>
        
        <CodeBlock language="ts" code={`import { CalendarController, CalendarConfig } from '@uplink/calendar-controller';

// Configuration with type checking
const config: CalendarConfig = {
  locale: 'en-US',
  firstDayOfWeek: 1,          // Monday (TypeScript ensures this is 0-6)
  selectionMode: 'range',     // TypeScript ensures this is a valid option
  dateFormatOptions: {        // Type-checked against Intl.DateTimeFormatOptions
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
};

// TypeScript will catch errors at compile time
const calendar = new CalendarController(config);

// Type inference works throughout the API
const currentDay = calendar.getSelectedDate();  // Inferred as Date | null
const range = calendar.getSelectedDateRange();  // Inferred as DateRange | null
const isValidDate = calendar.isDateValid(new Date());  // Inferred as boolean`} />
      </div>
    </div>
  )
}
