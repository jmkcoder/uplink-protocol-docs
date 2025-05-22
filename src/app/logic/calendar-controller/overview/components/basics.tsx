import React from 'react'
import { CodeBlock } from '@/components/code-block'

export function Basics() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
      <p className="mb-4">
        Getting started with Calendar Controller is straightforward. This section covers initialization, basic configuration, and integration with UI frameworks.
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Initialization</h3>
      <p className="mb-4">
        To create a new calendar controller instance:
      </p>
      
      <CodeBlock language="js" code={`import { CalendarController } from '@uplink/calendar-controller';

// Create a new calendar with default settings
const calendar = new CalendarController();

// Or with custom configuration
const customCalendar = new CalendarController({
  // Optional configuration
  firstDayOfWeek: 0,           // Sunday (0) as first day of week
  hideOtherMonthDays: false,   // Show days from adjacent months
  minDate: new Date(2023, 0, 1),    // Jan 1, 2023 as earliest selectable date
  maxDate: new Date(2025, 11, 31),  // Dec 31, 2025 as latest selectable date
  locale: 'en-US',             // Use US English formatting
  dateFormatOptions: {         // Custom date formatting options
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
});`} />
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Core Calendar Operations</h3>
      <p className="mb-4">
        Common operations you'll use with Calendar Controller:
      </p>
      
      <h4 className="text-lg font-medium mt-4 mb-2">Date Selection</h4>
      <CodeBlock language="js" code={`// Select a specific date
calendar.selectDate(new Date(2025, 4, 21)); // May 21, 2025

// Get the currently selected date
const selectedDate = calendar.getSelectedDate();

// Clear selection
calendar.clearSelection();`} />
      
      <h4 className="text-lg font-medium mt-4 mb-2">Navigation</h4>
      <CodeBlock language="js" code={`// Move to next/previous month
calendar.nextMonth();
calendar.prevMonth();

// Jump to today
calendar.navigateToToday();

// Jump to a specific month and year
calendar.navigateToMonth(0, 2025); // January 2025`} />
      
      <h4 className="text-lg font-medium mt-4 mb-2">View Generation</h4>
      <CodeBlock language="js" code={`// Generate calendar days for rendering
const days = calendar.generateCalendarDays();

// Get weekday names in current locale
const weekdays = calendar.getLocalizedWeekdays(); 

// Get current month and year as formatted string
const monthYearLabel = calendar.getFormattedMonthYear();`} />
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Calendar State</h3>
      <p className="mb-4">
        The Calendar Controller exposes all necessary state information and provides reactive updates:
      </p>
      
      <CodeBlock language="js" code={`// Get current state information
const state = calendar.getState();
console.log(state);
/* Example output:
{
  selectedDate: Date, // Currently selected date or null
  currentMonth: 4, // May (0-indexed)
  currentYear: 2025,
  viewMode: 'day', // Current view mode
  minDate: Date, // Minimum selectable date
  maxDate: Date, // Maximum selectable date
  locale: 'en-US',
  firstDayOfWeek: 0
}
*/`} />
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Event Handling</h3>
      <p className="mb-4">
        Listen for state changes using the event system:
      </p>
      
      <CodeBlock language="js" code={`// Subscribe to date selection events
const unsubscribeFromDateEvents = calendar.onDateSelected((date) => {
  console.log('Date selected:', date);
  
  // Update your UI or perform other actions
  updateUI(date);
});

// Subscribe to month/year change events
const unsubscribeFromViewEvents = calendar.onViewChange((viewState) => {
  console.log('View changed:', viewState);
  
  // Update your UI with new month/year
  updateMonthYearLabel(viewState.currentMonth, viewState.currentYear);
});

// Later, clean up subscriptions
unsubscribeFromDateEvents();
unsubscribeFromViewEvents();`} />
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Integration with UI Frameworks</h3>
      <p className="mb-4">
        Calendar Controller works with any UI framework. Here are examples for popular frameworks:
      </p>
      
      <h4 className="text-lg font-medium mt-4 mb-2">React Integration</h4>
      <CodeBlock language="jsx" code={`import React, { useState, useEffect } from 'react';
import { CalendarController } from '@uplink/calendar-controller';

function Calendar() {
  // Initialize controller in state to preserve across renders
  const [calendar] = useState(() => new CalendarController());
  
  // State for UI rendering
  const [days, setDays] = useState([]);
  const [monthYear, setMonthYear] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  
  useEffect(() => {
    // Set up event listeners
    const unsubscribeDate = calendar.onDateSelected(date => {
      setSelectedDate(date);
    });
    
    const unsubscribeView = calendar.onViewChange(({ currentMonth, currentYear }) => {
      // Update days and month/year label when view changes
      setDays(calendar.generateCalendarDays());
      setMonthYear(calendar.getFormattedMonthYear());
    });
    
    // Initial data load
    setDays(calendar.generateCalendarDays());
    setMonthYear(calendar.getFormattedMonthYear());
    
    // Clean up event listeners
    return () => {
      unsubscribeDate();
      unsubscribeView();
    };
  }, [calendar]);
  
  // Handler for navigating to previous month
  const handlePrevMonth = () => {
    calendar.prevMonth();
  };
  
  // Handler for navigating to next month
  const handleNextMonth = () => {
    calendar.nextMonth();
  };
  
  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>Previous</button>
        <h2>{monthYear}</h2>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      
      <div className="calendar-grid">
        {/* Render days here */}
      </div>
    </div>
  );
}`} />
      
      <h4 className="text-lg font-medium mt-4 mb-2">Vue Integration</h4>
      <CodeBlock language="html" code={`<template>
  <div class="calendar">
    <div class="calendar-header">
      <button @click="prevMonth">Previous</button>
      <h2>{{ monthYear }}</h2>
      <button @click="nextMonth">Next</button>
    </div>
    
    <div class="calendar-grid">
      <!-- Render days here -->
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { CalendarController } from '@uplink/calendar-controller';

export default {
  setup() {
    const calendar = new CalendarController();
    const days = ref([]);
    const monthYear = ref('');
    const selectedDate = ref(null);
    
    // Calendar event handlers
    let unsubscribeDate, unsubscribeView;
    
    onMounted(() => {
      // Set up event listeners
      unsubscribeDate = calendar.onDateSelected(date => {
        selectedDate.value = date;
      });
      
      unsubscribeView = calendar.onViewChange(() => {
        // Update days and month/year label when view changes
        days.value = calendar.generateCalendarDays();
        monthYear.value = calendar.getFormattedMonthYear();
      });
      
      // Initial data load
      days.value = calendar.generateCalendarDays();
      monthYear.value = calendar.getFormattedMonthYear();
    });
    
    onUnmounted(() => {
      // Clean up event listeners
      unsubscribeDate && unsubscribeDate();
      unsubscribeView && unsubscribeView();
    });
    
    // Navigation methods
    const prevMonth = () => calendar.prevMonth();
    const nextMonth = () => calendar.nextMonth();
    
    return {
      days,
      monthYear,
      selectedDate,
      prevMonth,
      nextMonth
    };
  }
};
</script>`} />
    </div>
  )
}
