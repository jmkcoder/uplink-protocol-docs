'use client'

import { CodeBlock } from "@/components/code-block"

export function Basics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-4">Basic Usage</h2>
        <p className="text-muted-foreground mb-4">
          Getting started with Calendar Controller is straightforward. Learn how to initialize, configure, and perform common operations.
        </p>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
        <h5 className="text-blue-800 dark:text-blue-300 font-medium mb-1">Focus on Logic, Not UI</h5>
        <div className="text-blue-700 dark:text-blue-400 text-sm">
          Remember that Calendar Controller provides only the logical layer. You'll need to implement your own UI components that consume this logic.
        </div>
      </div>
        <div id="initialization">
        <h3 className="text-xl font-semibold mb-4">Initialization</h3>
        <p className="mb-4">
          Create a new calendar controller with default or custom configuration:
        </p>
        
        <CodeBlock language="js" code={`import { CalendarController } from '@uplink/calendar-controller';

// Create with default settings
const calendar = new CalendarController();

// Or with custom configuration
const customCalendar = new CalendarController({
  firstDayOfWeek: 0,           // Sunday (0) as first day of week
  hideOtherMonthDays: false,   // Show days from adjacent months
  minDate: new Date(2023, 0, 1),    // Jan 1, 2023 as earliest selectable date
  maxDate: new Date(2025, 11, 31),  // Dec 31, 2025 as latest selectable date
  locale: 'en-US',             // Use US English formatting
  selectionMode: 'single'      // Allow only single date selection
});`} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">        <div id="date-selection" className="space-y-4">
          <h3 className="text-xl font-semibold">Date Selection</h3>
          <p>Select dates with full validation against any constraints you've set:</p>
          
          <CodeBlock language="js" code={`// Select a specific date
calendar.selectDate(new Date(2025, 4, 21)); // May 21, 2025

// Get the currently selected date
const selectedDate = calendar.getSelectedDate();

// Select a date range (if in range selection mode)
calendar.selectDateRange({
  start: new Date(2025, 4, 10),
  end: new Date(2025, 4, 15)
});

// Clear selection
calendar.clearSelection();`} />
        </div>
          <div id="calendar-navigation" className="space-y-4">
          <h3 className="text-xl font-semibold">Calendar Navigation</h3>
          <p>Navigate through the calendar with intuitive methods:</p>
          
          <CodeBlock language="js" code={`// Move to next/previous month
calendar.nextMonth();
calendar.prevMonth();

// Move to next/previous year
calendar.nextYear();
calendar.prevYear();

// Jump to today
calendar.navigateToToday();

// Jump to a specific month and year (months are 0-indexed)
calendar.navigateToMonth(0, 2025); // January 2025`} />
        </div>
      </div>
        <div id="rendering-data">
        <h3 className="text-xl font-semibold mb-4">Rendering Data</h3>
        <p className="mb-4">
          Generate all the data needed to render your calendar UI:
        </p>
        
        <CodeBlock language="js" code={`// Get days to render in the current month view
const days = calendar.generateCalendarDays();
/* Example structure:
[
  {
    date: Date(2025, 3, 30),         // Date object for April 30
    dayOfMonth: 30,                  // Day number
    isCurrentMonth: false,           // From previous month
    isToday: false,                  // Not today
    isSelected: false,               // Not selected
    isDisabled: false,               // Can be selected
    isStartOfRange: false,           // Not start of range
    isEndOfRange: false,             // Not end of range
    isWithinRange: false             // Not within a range
  },
  {
    date: Date(2025, 4, 1),          // Date object for May 1
    dayOfMonth: 1,                   // Day number
    isCurrentMonth: true,            // From current month
    // ...other properties
  },
  // ...more days
]
*/

// Get localized week day names
const weekdays = calendar.getLocalizedWeekdays(); 
// Example: ["Sunday", "Monday", "Tuesday", ...]

// Get month and year formatted for display
const monthYear = calendar.getFormattedMonthYear();
// Example: "May 2025"`} />
      </div>
        <div id="event-handling">
        <h3 className="text-xl font-semibold mb-4">Event Handling</h3>
        <p className="mb-4">
          Subscribe to calendar events to react to user interactions:
        </p>
        
        <CodeBlock language="js" code={`// Listen for date selection
const unsubscribeFromDateEvents = calendar.onDateSelected((selectedDate) => {
  console.log('Date selected:', selectedDate);
  // Update your UI here
});

// Listen for month/year navigation
const unsubscribeFromNavigationEvents = calendar.onNavigationChange((state) => {
  console.log('Current view:', state.currentMonth, state.currentYear);
  // Update month/year display in your UI
});

// Don't forget to clean up event listeners when done
unsubscribeFromDateEvents();
unsubscribeFromNavigationEvents();`} />
      </div>
        <div id="complete-example" className="mt-6 pt-2 border-t border-border">
        <h3 className="text-xl font-semibold mb-4">Complete Basic Example</h3>
        <p className="mb-4">
          Here's a complete example showing a basic React integration:
        </p>
        
        <CodeBlock language="tsx" code={`import React, { useEffect, useState } from 'react';
import { CalendarController, CalendarDay } from '@uplink/calendar-controller';

function Calendar() {
  const [calendar] = useState(() => new CalendarController());
  const [days, setDays] = useState<CalendarDay[]>([]);
  const [monthYear, setMonthYear] = useState('');
  const [weekdays, setWeekdays] = useState<string[]>([]);
  
  useEffect(() => {
    // Initialize calendar display
    setDays(calendar.generateCalendarDays());
    setMonthYear(calendar.getFormattedMonthYear());
    setWeekdays(calendar.getLocalizedWeekdays('short')); // "Sun", "Mon", etc.
    
    // Set up event listeners
    const unsub1 = calendar.onDateSelected(() => {
      setDays(calendar.generateCalendarDays()); // Refresh days to show selection
    });
    
    const unsub2 = calendar.onNavigationChange(() => {
      setDays(calendar.generateCalendarDays());
      setMonthYear(calendar.getFormattedMonthYear());
    });
    
    // Clean up
    return () => {
      unsub1();
      unsub2();
    };
  }, [calendar]);
  
  // Navigation handlers
  const handlePrevMonth = () => calendar.prevMonth();
  const handleNextMonth = () => calendar.nextMonth();
  const handleToday = () => calendar.navigateToToday();
  
  // Date selection handler
  const handleSelectDate = (day: CalendarDay) => {
    if (!day.isDisabled) {
      calendar.selectDate(day.date);
    }
  };
  
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>Previous</button>
        <h2>{monthYear}</h2>
        <button onClick={handleNextMonth}>Next</button>
        <button onClick={handleToday}>Today</button>
      </div>
      
      <div className="calendar-grid">
        {/* Weekday headers */}
        {weekdays.map(day => (
          <div key={day} className="weekday">{day}</div>
        ))}
        
        {/* Calendar days */}
        {days.map((day, index) => (
          <div 
            key={index}
            className={\`calendar-day \${day.isCurrentMonth ? 'current' : 'other'} 
                       \${day.isSelected ? 'selected' : ''} 
                       \${day.isToday ? 'today' : ''}
                       \${day.isDisabled ? 'disabled' : ''}\`}
            onClick={() => handleSelectDate(day)}
          >
            {day.dayOfMonth}
          </div>
        ))}
      </div>
    </div>
  );
}`} />
      </div>
    </div>
  )
}
