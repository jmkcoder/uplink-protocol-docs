'use client'

import { CodeBlock } from "@/components/code-block"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function KeyFeatures() {
  return (
    <div className="space-y-6">
      <div>
        <h2 id="key-features" className="text-2xl font-bold tracking-tight mb-4">Key Features</h2>
        <p className="text-muted-foreground">
          Calendar Controller provides powerful features to handle all aspects of calendar management in modern web applications.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Flexible Date Selection</h3>
            </div>
            
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Single date selection with validation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Date range selection with start and end dates</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Multiple non-contiguous date selection</span>
              </li>
            </ul>
              <CodeBlock language="js" code={`// Select a single date (year, month, day)
// Note: month is 0-indexed
calendar.methods.selectDate(2025, 4, 21); // May 21, 2025

// Enable range selection mode
calendar.methods.setRangeSelectionMode(true);

// Select range start and end
calendar.methods.selectDate(2025, 4, 10); // Start date
calendar.methods.selectDate(2025, 4, 20); // End date`} />
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Internationalization</h3>
            </div>
            
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Support for multiple languages and locales</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Localized weekday and month names</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Regional first day of week support</span>
              </li>
            </ul>
              <CodeBlock language="js" code={`// Create calendar with locale configuration
const calendar = CalendarController({
  locale: 'fr-FR',
  firstDayOfWeek: 1 // Monday
});

// Access localized month and weekday names
const monthName = calendar.bindings.monthName.current;
const weekdays = calendar.bindings.weekdays.current;
// ["dimanche", "lundi", "mardi", ...]`} />
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Multiple View Modes</h3>
            </div>
            
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Day view for traditional calendar grid</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Month view for quick month selection</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Year view for broader navigation</span>
              </li>
            </ul>
              <CodeBlock language="js" code={`// Access different calendar views
const days = calendar.bindings.calendarDays.current;     // Day view
const months = calendar.bindings.calendarMonths.current; // Month view  
const years = calendar.bindings.calendarYears.current;   // Year view

// Navigate between views via method selection
calendar.methods.selectMonth(3, 2025); // Switch to April 2025
calendar.methods.selectYear(2026);     // Switch to 2026`} />
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Date Constraints</h3>
            </div>
            
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Min/max date boundaries</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Disabled dates via custom functions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Special date highlighting</span>
              </li>
            </ul>
              <CodeBlock language="js" code={`// Create calendar with date constraints
const calendar = CalendarController({
  minDate: new Date(2025, 0, 1),  // January 1, 2025
  maxDate: new Date(2025, 11, 31), // December 31, 2025
  disabledDates: [
    new Date(2025, 6, 4),  // July 4th disabled
    new Date(2025, 11, 25) // Christmas disabled
  ]
});

// Check if a date is disabled
const isDisabled = calendar.methods.isDateDisabled(new Date(2025, 6, 4));`} />
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Event System</h3>
            </div>
            
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Reactive event subscription</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Comprehensive event coverage</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Subscription cleanup handling</span>
              </li>
            </ul>
              <CodeBlock language="js" code={`// Subscribe to reactive bindings
const unsubSelectedDate = calendar.bindings.selectedDate.subscribe((date) => {
  console.log('Selected date:', date);
});

const unsubCalendarDays = calendar.bindings.calendarDays.subscribe((days) => {
  console.log('Calendar updated:', days.length, 'days');
});

const unsubDateRange = calendar.bindings.selectedDateRange.subscribe((range) => {
  console.log('Range:', range.startDate, 'to', range.endDate);
});

// Clean up subscriptions
unsubSelectedDate.unsubscribe();
unsubCalendarDays.unsubscribe();
unsubDateRange.unsubscribe();`} />
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">TypeScript Support</h3>
            </div>
            
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Comprehensive type definitions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Generic type parameters</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Type-safe event system</span>
              </li>
            </ul>
            
            <CodeBlock language="ts" code={`import { 
  CalendarController, 
  CalendarOptions,
  CalendarDate,
  DateRange 
} from '@uplink-protocol/calendar-controller';

// Type-safe configuration
const options: CalendarOptions = {
  firstDayOfWeek: 1,
  dateFormat: 'MM/DD/YYYY',
  initialSelectedDate: new Date()
};

const calendar = CalendarController(options);`} />
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Disabled Weekdays</h3>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                New in v0.2.1
              </span>
            </div>
            
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Disable specific days of the week globally</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Dynamic weekday management</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Business rules and scheduling support</span>
              </li>
            </ul>
            
            <CodeBlock language="js" code={`// Disable weekends (Saturday and Sunday)
const calendar = CalendarController({
  disabledDaysOfWeek: [0, 6] // 0 = Sunday, 6 = Saturday
});

// Dynamic weekday management
calendar.setDisabledDaysOfWeek([1, 3]); // Monday and Wednesday
calendar.addDisabledDayOfWeek(5);       // Add Friday
calendar.removeDisabledDayOfWeek(0);    // Remove Sunday`} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
