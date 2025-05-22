import React from 'react'
import { CodeBlock } from '@/components/code-block'

export function KeyFeatures() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Date Selection</h3>
        <p className="mb-3">
          Calendar Controller provides multiple ways to handle date selection with built-in validation:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Single Date Selection</strong>: Select individual dates with full validation against constraints
            <CodeBlock language="ts" code=
              {`// Select a specific date
calendar.selectDate(new Date(2025, 4, 15)); // May 15, 2025

// Get the currently selected date
const selectedDate = calendar.getSelectedDate();`}
            />
          </li>
          <li>
            <strong>Date Range Selection</strong>: Select a start and end date to define a date range
            <CodeBlock language="ts" code=
              {`// Select a date range
calendar.selectDateRange({
  start: new Date(2025, 4, 10), // May 10, 2025
  end: new Date(2025, 4, 15)    // May 15, 2025
});

// Get the currently selected date range
const { start, end } = calendar.getSelectedDateRange();`}
            />
          </li>
          <li>
            <strong>Date Clearing</strong>: Remove all selected dates with a single method call
            <CodeBlock language="ts" code=
              {`// Clear any selected dates
calendar.clearSelection();`}
            />
          </li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Navigation</h3>
        <p className="mb-3">
          Navigate through the calendar with intuitive methods:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Month Navigation</strong>: Move forward and backward through months
            <CodeBlock language="ts" code=
              {`// Navigate to next or previous month
calendar.nextMonth();
calendar.prevMonth();`}
            />
          </li>
          <li>
            <strong>Year Navigation</strong>: Jump forward or backward by years
            <CodeBlock language="ts" code=
              {`// Navigate to next or previous year
calendar.nextYear();
calendar.prevYear();`}
            />
          </li>
          <li>
            <strong>Direct Navigation</strong>: Go directly to a specific month, year, or date
            <CodeBlock language="ts" code=
              {`// Navigate to specific month and year
calendar.navigateToMonth(4, 2025); // May 2025 (0-indexed months)

// Navigate to today's date
calendar.navigateToToday();`}
            />
          </li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Multiple View Modes</h3>
        <p className="mb-3">
          The calendar offers different view modes to streamline date selection:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Day View</strong>: Traditional calendar grid showing days of a month
            <CodeBlock language="ts" code=
              {`// Switch to day view mode
calendar.setViewMode('day');

// Get calendar days for rendering
const calendarDays = calendar.generateCalendarDays();`}
            />
          </li>
          <li>
            <strong>Month View</strong>: Grid of months for quick month selection
            <CodeBlock language="ts" code=
              {`// Switch to month view mode
calendar.setViewMode('month');

// Get months for rendering
const months = calendar.generateMonths();`}
            />
          </li>
          <li>
            <strong>Year View</strong>: Range of years for quick year selection and decade navigation
            <CodeBlock language="ts" code=
              {`// Switch to year view mode
calendar.setViewMode('year');

// Get years for rendering
const years = calendar.generateYears();`}
            />
          </li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Validation and Constraints</h3>
        <p className="mb-3">
          Enforce rules for date selection with comprehensive validation options:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Min/Max Date Range</strong>: Set minimum and maximum selectable dates
            <CodeBlock language="ts" code=
              {`// Configure min/max date constraints
const calendar = new CalendarController({
  minDate: new Date(2025, 0, 1),  // Jan 1, 2025
  maxDate: new Date(2025, 11, 31) // Dec 31, 2025
});`}
            />
          </li>
          <li>
            <strong>Disabled Dates</strong>: Specify individual dates that should be disabled
            <CodeBlock language="ts" code=
              {`// Disable specific dates
calendar.disableDates([
  new Date(2025, 4, 15), // May 15, 2025
  new Date(2025, 4, 16)  // May 16, 2025
]);

// Disable dates using a function
calendar.disableDatesWhen(date => {
  // Disable weekends
  const day = date.getDay();
  return day === 0 || day === 6;
});`}
            />
          </li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Visual Customization</h3>
        <p className="mb-3">
          Adapt the calendar to your UI needs with flexible configuration options:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>First Day of Week</strong>: Configure which day starts the week
            <CodeBlock language="ts" code=
              {`// Set first day of week (0 = Sunday, 1 = Monday, etc.)
const calendar = new CalendarController({
  firstDayOfWeek: 1 // Start weeks on Monday
});`}
            />
          </li>
          <li>
            <strong>Hide Other Month Days</strong>: Option to show only days from the current month
            <CodeBlock language="ts" code=
              {`// Hide days from adjacent months
const calendar = new CalendarController({
  hideOtherMonthDays: true
});`}
            />
          </li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Internationalization</h3>
        <p className="mb-3">
          Support for multiple languages and regional formatting:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Localized Month and Day Names</strong>: Display names in the user's language
            <CodeBlock language="ts" code=
              {`// Create a calendar with a specific locale
const calendar = new CalendarController({
  locale: 'fr-FR' // French (France)
});

// Get localized weekday names
const weekdays = calendar.getLocalizedWeekdays();

// Get localized month names
const months = calendar.getLocalizedMonths();`}
            />
          </li>
          <li>
            <strong>Custom Date Formatting</strong>: Format dates according to regional preferences
            <CodeBlock language="ts" code=
              {`// Configure date formatting options
const calendar = new CalendarController({
  locale: 'de-DE', // German (Germany)
  dateFormatOptions: {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
});

// Get formatted date
const formatted = calendar.formatDate(new Date(2025, 4, 21));
// Output: "Mittwoch, 21. Mai 2025"`}
            />
          </li>
          <li>
            <strong>Dynamic Locale Switching</strong>: Change the locale at runtime
            <CodeBlock language="ts" code=
              {`// Switch locale dynamically
calendar.setLocale('ja-JP'); // Japanese (Japan)`}
            />
          </li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Event System</h3>
        <p className="mb-3">
          The Calendar Controller uses an event-based system to notify about changes:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Date Selection Events</strong>: React to date selection changes
            <CodeBlock language="ts" code=
              {`// Subscribe to date selection events
const unsubscribe = calendar.onDateSelected(date => {
  console.log('Date selected:', date);
  
  // Update your UI component
  updateCalendarUI();
});

// Later, unsubscribe from events when needed
unsubscribe();`}
            />
          </li>
          <li>
            <strong>View Changes</strong>: Monitor changes in the view (month, year, etc.)
            <CodeBlock language="ts" code=
              {`// Subscribe to view change events
calendar.onViewChange(({ viewMode, currentMonth, currentYear }) => {
  console.log(\`View changed to: \${viewMode}\`);
  console.log(\`Current month/year: \${currentMonth}/\${currentYear}\`);
  
  // Update UI with new view data
});`}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
