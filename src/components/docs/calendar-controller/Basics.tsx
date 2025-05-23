'use client'

import { CodeBlock } from "@/components/code-block"

export function Basics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 id="basics" className="text-2xl font-bold tracking-tight mb-4">Basic Usage</h2>
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
          <CodeBlock language="js" code={`import { CalendarController } from '@uplink-protocol/calendar-controller';

// Create with default settings
const calendar = CalendarController();

// Or with custom configuration
const customCalendar = CalendarController({
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
            <CodeBlock language="js" code={`// Select a specific date using methods
calendar.methods.selectDate(2025, 4, 21); // May 21, 2025 (year, month, day)

// Get the currently selected date from bindings
const selectedDate = calendar.bindings.selectedDate.current;

// Set range selection mode and select a range
calendar.methods.setRangeSelectionMode(true);
calendar.methods.selectDate(2025, 4, 10); // Start date
calendar.methods.selectDate(2025, 4, 15); // End date

// Get selected range
const selectedRange = calendar.bindings.selectedDateRange.current;

// Clear selection
calendar.methods.clearSelection();`} />
        </div>
          <div id="calendar-navigation" className="space-y-4">
          <h3 className="text-xl font-semibold">Calendar Navigation</h3>
          <p>Navigate through the calendar with intuitive methods:</p>
            <CodeBlock language="js" code={`// Move to next/previous month
calendar.methods.nextMonth();
calendar.methods.prevMonth();

// Move to next/previous year  
calendar.methods.nextYear();
calendar.methods.prevYear();

// Jump to today
calendar.methods.goToToday();

// Navigate to a specific month and year
calendar.methods.selectMonth(0, 2025); // January 2025
calendar.methods.selectYear(2025);     // Go to 2025

// Switch view modes
calendar.methods.setViewMode('month'); // Month view
calendar.methods.setViewMode('year');  // Year view
calendar.methods.setViewMode('day');   // Day view (default)`} />
        </div>
      </div>
        <div id="rendering-data">
        <h3 className="text-xl font-semibold mb-4">Rendering Data</h3>
        <p className="mb-4">
          Generate all the data needed to render your calendar UI:
        </p>
          <CodeBlock language="js" code={`// Get days to render in the current day view
const days = calendar.bindings.calendarDays.current;
/* Example structure:
[
  {
    date: Date(2025, 3, 30),         // Date object for April 30
    day: 30,                         // Day number
    isCurrentMonth: false,           // From previous month
    isToday: false,                  // Not today
    isSelected: false,               // Not selected
    isDisabled: false,               // Can be selected
    isRangeStart: false,             // Not start of range
    isRangeEnd: false,               // Not end of range
    isInRange: false                 // Not within a range
  },
  {
    date: Date(2025, 4, 1),          // Date object for May 1
    day: 1,                          // Day number
    isCurrentMonth: true,            // From current month
    // ...other properties
  },
  // ...more days
]
*/

// Get months for month view
const months = calendar.bindings.calendarMonths.current;

// Get years for year view
const years = calendar.bindings.calendarYears.current;

// Get current month name and year
const monthName = calendar.bindings.monthName.current;
const currentYear = calendar.bindings.currentYear.current;
// Example: "May", 2025`} />
      </div>
        <div id="event-handling">
        <h3 className="text-xl font-semibold mb-4">Event Handling</h3>
        <p className="mb-4">
          Subscribe to calendar events to react to user interactions:
        </p>
          <CodeBlock language="js" code={`// Subscribe to date selection changes
const unsubscribeFromDateEvents = calendar.bindings.selectedDate.subscribe((selectedDate) => {
  console.log('Date selected:', selectedDate);
  // Update your UI here
});

// Subscribe to month/year navigation changes
const unsubscribeFromMonthEvents = calendar.bindings.monthName.subscribe((monthName) => {
  console.log('Current month:', monthName);
});

const unsubscribeFromYearEvents = calendar.bindings.currentYear.subscribe((year) => {
  console.log('Current year:', year);
});

// Subscribe to view mode changes
const unsubscribeFromViewModeEvents = calendar.bindings.viewMode.subscribe((viewMode) => {
  console.log('View mode changed to:', viewMode); // 'day', 'month', or 'year'
});

// Don't forget to clean up subscriptions when done
unsubscribeFromDateEvents();
unsubscribeFromMonthEvents();
unsubscribeFromYearEvents();
unsubscribeFromViewModeEvents();`} />
      </div>
        <div id="complete-example" className="mt-6 pt-2 border-t border-border">
        <h3 className="text-xl font-semibold mb-4">Complete Basic Example</h3>
        <p className="mb-4">
          Here's a complete example showing a basic React integration:
        </p>
          <CodeBlock language="tsx" code={`import React, { useEffect, useState } from 'react';
import { CalendarController } from '@uplink-protocol/calendar-controller';

function Calendar() {
  const [calendar] = useState(() => CalendarController());
  const [days, setDays] = useState([]);
  const [monthName, setMonthName] = useState('');
  const [currentYear, setCurrentYear] = useState('');
  
  useEffect(() => {
    // Set up subscriptions to reactive bindings
    const subscriptions = [
      calendar.bindings.calendarDays.subscribe(setDays),
      calendar.bindings.monthName.subscribe(setMonthName),
      calendar.bindings.currentYear.subscribe(setCurrentYear)
    ];
    
    // Clean up subscriptions
    return () => {
      subscriptions.forEach(sub => sub());
    };
  }, [calendar]);
  
  // Navigation handlers
  const handlePrevMonth = () => calendar.methods.prevMonth();
  const handleNextMonth = () => calendar.methods.nextMonth();
  const handleToday = () => calendar.methods.goToToday();
  
  // Date selection handler
  const handleSelectDate = (day) => {
    if (!day.isDisabled && day.date) {
      calendar.methods.selectDate(
        day.date.getFullYear(),
        day.date.getMonth(),
        day.date.getDate()
      );
    }
  };
  
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>Previous</button>
        <h2>{monthName} {currentYear}</h2>
        <button onClick={handleNextMonth}>Next</button>
        <button onClick={handleToday}>Today</button>
      </div>
      
      <div className="calendar-grid">
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
            {day.day}
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
