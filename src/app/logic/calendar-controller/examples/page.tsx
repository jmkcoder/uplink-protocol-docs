'use client'

import React, { useEffect } from 'react'
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { SEO } from '@/components/seo'
import { SocialShareContainer } from "@/components/social-share-container"
import { DocsPageLayout } from "@/components/docs/docs-page-layout"
import { event as trackEvent } from "@/lib/analytics"
import { Card, CardContent } from "@/components/ui/card"
import { SyntaxHighlighter } from "@/components/syntax-highlighter"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CalendarControllerExamplesPage() {
  // Track page view for analytics
  useEffect(() => {
    trackEvent({
      action: 'page_view',
      category: 'Documentation',
      label: 'Calendar Controller Examples'
    });
  }, []);

  return (
    <>
      <SEO
        title="Calendar Controller Examples | Uplink Protocol"
        description="Interactive examples of the Calendar Controller component, showcasing basic usage, date range selection, internationalization, and disabled weekdays functionality."
      />
      
      <DocsPageLayout>
        {/* Header & Navigation */}
        <div className="space-y-2 mb-6 sm:mb-8">
          <Badge variant="outline">Logic</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Calendar Controller</h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            A flexible and powerful calendar management system for building interactive date pickers, schedulers, and calendar applications.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 border-b border-border">
            <Link href="/logic/calendar-controller/overview" className="text-muted-foreground hover:text-foreground pb-2 text-sm sm:text-base">Overview</Link>
            <Link href="/logic/calendar-controller/api" className="text-muted-foreground hover:text-foreground pb-2 text-sm sm:text-base">API</Link>
            <Link href="/logic/calendar-controller/examples" className="font-medium text-primary border-b-2 border-primary pb-2 text-sm sm:text-base">Examples</Link>
          </div>
        </div>
        
        {/* Examples Content */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Examples</h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6">
            Explore interactive examples of Calendar Controller in action, including the new disabled weekdays feature from v0.2.1.
          </p>

          {/* Examples Tabs */}         
          <div className="mb-6 sm:mb-8">
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="mb-6 sm:mb-4 w-full grid grid-cols-4 sm:flex sm:flex-wrap sm:justify-start gap-2 sm:gap-3">
                <TabsTrigger value="basic">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:inline-block mr-1">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 10h18" />
                    <path d="M16 2v4" />
                    <path d="M8 2v4" />
                  </svg>
                  <span>Basic Usage</span>
                </TabsTrigger>
                
                <TabsTrigger value="date-range">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:inline-block mr-1">
                    <path d="M21 6v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1" />
                    <path d="M16 2h4a2 2 0 0 1 2 2v4" />
                    <path d="M3 10h18" />
                    <path d="M7 14h.01" />
                    <path d="M11 14h.01" />
                    <path d="M15 14h.01" />
                    <path d="M7 18h.01" />
                    <path d="M11 18h.01" />
                    <path d="m15 18 4-4" />
                  </svg>
                  <span>Date Range</span>
                </TabsTrigger>
                  <TabsTrigger value="i18n">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:inline-block mr-1">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m12 2-2.3 2.3" />
                    <path d="m12 2 2.3 2.3" />
                    <path d="M12 22v-4" />
                    <path d="m15 19-3-1-3 1" />
                    <path d="M19.8 17.8a10 10 0 1 0-15.6 0" />
                  </svg>
                  <span>Internationalization</span>
                </TabsTrigger>
                
                <TabsTrigger value="disabled-weekdays">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:inline-block mr-1">
                    <path d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <span className="flex items-center gap-1">
                    Disabled Weekdays
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                      New
                    </span>
                  </span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="mt-0">
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Basic Calendar Usage</h3>
                    <p className="text-muted-foreground mb-4">
                      A simple example of creating a calendar component with basic functionality.
                    </p>
                    
                    <div className="bg-muted rounded-md p-4 mb-6">
                      {/* Interactive Example Component would go here */}
                      <div className="text-center p-6 border rounded-md">
                        Calendar Component Demo
                      </div>
                    </div>

                    <h4 className="text-base font-medium mb-2">Code Example</h4>
                    <SyntaxHighlighter language="tsx" code=
{`import { createCalendarController } from '@uplink-protocol/calendar-controller';

// Create a new calendar controller instance
const calendar = createCalendarController({
  // Initial date to display
  initialDate: new Date(),
  
  // First day of week (0 = Sunday, 1 = Monday, etc.)
  firstDayOfWeek: 0,
  
  // Event handlers
  onDateSelect: (date) => {
    console.log('Selected date:', date);
  }
});

// Get the current month view
const currentMonth = calendar.getMonthView();

// Generate the calendar UI
function renderCalendar() {
  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => calendar.prevMonth()}>Previous</button>
        <h2>{calendar.getFormattedMonth()}</h2>
        <button onClick={() => calendar.nextMonth()}>Next</button>
      </div>
      
      <div className="calendar-grid">
        {/* Render weekday headers */}
        {calendar.getWeekdayLabels().map(day => (
          <div key={day} className="calendar-day-header">
            {day}
          </div>
        ))}
        
        {/* Render calendar days */}
        {currentMonth.days.map(day => (
          <div 
            key={day.date.toString()}
            className={\`calendar-day \${day.isCurrentMonth ? 'current-month' : 'other-month'} 
                      \${day.isToday ? 'today' : ''} 
                      \${day.isSelected ? 'selected' : ''}\`}
            onClick={() => calendar.selectDate(day.date)}
          >
            {day.dayOfMonth}
          </div>
        ))}
      </div>
    </div>
  );
}`}>
                    </SyntaxHighlighter>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="date-range" className="mt-0">
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Date Range Selection</h3>
                    <p className="text-muted-foreground mb-4">
                      A calendar component that allows users to select a range of dates.
                    </p>
                    
                    <div className="bg-muted rounded-md p-4 mb-6">
                      {/* Interactive Example Component would go here */}
                      <div className="text-center p-6 border rounded-md">
                        Date Range Calendar Demo
                      </div>
                    </div>

                    <h4 className="text-base font-medium mb-2">Code Example</h4>
                    <SyntaxHighlighter language="tsx" code=
{`import { createCalendarController } from '@uplink-protocol/calendar-controller';

// Create a calendar controller with date range selection
const rangeCalendar = createCalendarController({
  selectionMode: 'range',
  
  // Optional range constraints
  minDate: new Date(2023, 0, 1),  // Jan 1, 2023
  maxDate: new Date(2024, 11, 31), // Dec 31, 2024
  
  // Event handlers
  onRangeSelect: (startDate, endDate) => {
    console.log('Selected range:', { startDate, endDate });
  }
});

// Handle date selection to create a range
function handleDateClick(date) {
  if (!rangeCalendar.getSelectedStartDate()) {
    // First click - set start date
    rangeCalendar.selectRangeStart(date);
  } else if (!rangeCalendar.getSelectedEndDate()) {
    // Second click - set end date and complete range
    rangeCalendar.selectRangeEnd(date);
  } else {
    // Range already selected, start new selection
    rangeCalendar.clearSelection();
    rangeCalendar.selectRangeStart(date);
  }
}

// Render the calendar with range highlighting
function renderRangeCalendar() {
  const monthView = rangeCalendar.getMonthView();
  const startDate = rangeCalendar.getSelectedStartDate();
  const endDate = rangeCalendar.getSelectedEndDate();
  
  return (
    <div className="calendar range-calendar">
      <div className="calendar-header">
        <button onClick={() => rangeCalendar.prevMonth()}>Previous</button>
        <h2>{rangeCalendar.getFormattedMonth()}</h2>
        <button onClick={() => rangeCalendar.nextMonth()}>Next</button>
      </div>
      
      <div className="calendar-grid">
        {/* Render days with range highlight */}
        {monthView.days.map(day => {
          const isInRange = rangeCalendar.isDateInSelectedRange(day.date);
          const isRangeStart = startDate && rangeCalendar.isSameDay(day.date, startDate);
          const isRangeEnd = endDate && rangeCalendar.isSameDay(day.date, endDate);
          
          return (
            <div 
              key={day.date.toString()}
              className={\`calendar-day 
                        \${day.isCurrentMonth ? 'current-month' : 'other-month'}
                        \${day.isToday ? 'today' : ''}
                        \${isInRange ? 'in-range' : ''}
                        \${isRangeStart ? 'range-start' : ''}
                        \${isRangeEnd ? 'range-end' : ''}\`}
              onClick={() => handleDateClick(day.date)}
            >
              {day.dayOfMonth}
            </div>
          );
        })}
      </div>
      
      {startDate && (
        <div className="selected-range">
          <p>Start: {rangeCalendar.formatDate(startDate)}</p>
          {endDate && <p>End: {rangeCalendar.formatDate(endDate)}</p>}
        </div>
      )}
    </div>
  );
}`}>
                    </SyntaxHighlighter>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="i18n" className="mt-0">
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Internationalized Calendar</h3>
                    <p className="text-muted-foreground mb-4">
                      A calendar component with internationalization support for different languages and date formats.
                    </p>
                    
                    <div className="bg-muted rounded-md p-4 mb-6">
                      {/* Interactive Example Component would go here */}
                      <div className="text-center p-6 border rounded-md">
                        Internationalized Calendar Demo
                      </div>
                    </div>

                    <h4 className="text-base font-medium mb-2">Code Example</h4>
                    <SyntaxHighlighter language="tsx" code=
{`import { createCalendarController } from '@uplink-protocol/calendar-controller';

// Create a French calendar controller
const frenchCalendar = createCalendarController({
  locale: 'fr-FR',
  firstDayOfWeek: 1, // Monday is first day in French calendars
  
  // Month format options
  monthFormat: { month: 'long', year: 'numeric' },
  
  // Custom weekday labels (optional - will use locale by default)
  weekdayLabels: {
    short: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    long: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
  },
  
  // Custom month labels (optional - will use locale by default)
  monthLabels: {
    short: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
    long: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
  },
  
  // Date formatter function (optional)
  dateFormatter: (date, format) => {
    return new Intl.DateTimeFormat('fr-FR', format).format(date);
  }
});

// Function to switch between different locales
function switchLocale(locale) {
  frenchCalendar.updateConfig({
    locale: locale,
    firstDayOfWeek: locale === 'en-US' ? 0 : 1, // Sunday first for US, Monday first for others
  });
  
  // Update the UI after changing locale
  renderInternationalizedCalendar();
}

function renderInternationalizedCalendar() {
  const monthView = frenchCalendar.getMonthView();
  
  return (
    <div className="calendar i18n-calendar">
      <div className="locale-selector">
        <button onClick={() => switchLocale('en-US')}>English (US)</button>
        <button onClick={() => switchLocale('fr-FR')}>Français</button>
        <button onClick={() => switchLocale('de-DE')}>Deutsch</button>
        <button onClick={() => switchLocale('ja-JP')}>日本語</button>
      </div>
      
      <div className="calendar-header">
        <button onClick={() => frenchCalendar.prevMonth()}>
          {frenchCalendar.getConfig().locale === 'fr-FR' ? 'Précédent' : 'Previous'}
        </button>
        <h2>{frenchCalendar.getFormattedMonth()}</h2>
        <button onClick={() => frenchCalendar.nextMonth()}>
          {frenchCalendar.getConfig().locale === 'fr-FR' ? 'Suivant' : 'Next'}
        </button>
      </div>
      
      <div className="calendar-grid">
        {/* Weekday headers in the selected language */}
        {frenchCalendar.getWeekdayLabels('short').map(day => (
          <div key={day} className="calendar-day-header">
            {day}
          </div>
        ))}
        
        {/* Calendar days */}
        {monthView.days.map(day => (
          <div 
            key={day.date.toString()}
            className={\`calendar-day \${day.isCurrentMonth ? 'current-month' : 'other-month'}\`}
            onClick={() => frenchCalendar.selectDate(day.date)}
          >
            {day.dayOfMonth}
          </div>
        ))}
      </div>
      
      <div className="selected-date">
        {frenchCalendar.getSelectedDate() && (
          <p>
            {frenchCalendar.formatDate(frenchCalendar.getSelectedDate(), 
              { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
            )}
          </p>
        )}
      </div>
    </div>
  );
}`}></SyntaxHighlighter>
                  </CardContent>
                </Card>              </TabsContent>
              
              <TabsContent value="disabled-weekdays" className="mt-0">
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Disabled Weekdays Example</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                        New in v0.2.1
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Disable specific days of the week across all calendar views. Perfect for business applications, appointment scheduling, and custom date restrictions.
                    </p>

                    <SyntaxHighlighter language="tsx" code={`import React, { useEffect, useState } from 'react';
import { CalendarController } from '@uplink-protocol/calendar-controller';

function DisabledWeekdaysCalendar() {
  const [calendar] = useState(() => CalendarController({
    disabledDaysOfWeek: [0, 6], // Disable weekends (Sunday=0, Saturday=6)
    firstDayOfWeek: 1 // Start week on Monday
  }));
  
  const [days, setDays] = useState([]);
  const [monthName, setMonthName] = useState('');
  const [currentYear, setCurrentYear] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [disabledDays, setDisabledDays] = useState([]);
  
  useEffect(() => {
    // Set up subscriptions to reactive bindings
    const subscriptions = [
      calendar.bindings.calendarDays.subscribe(setDays),
      calendar.bindings.monthName.subscribe(setMonthName),
      calendar.bindings.currentYear.subscribe(setCurrentYear),
      calendar.bindings.selectedDate.subscribe(setSelectedDate)
    ];
    
    // Get initial disabled days
    setDisabledDays(calendar.getDisabledDaysOfWeek());
    
    return () => subscriptions.forEach(sub => sub());
  }, [calendar]);
  
  const handleSelectDate = (day) => {
    if (!day.isDisabled && day.date) {
      calendar.methods.selectDate(
        day.date.getFullYear(),
        day.date.getMonth(),
        day.date.getDate()
      );
    }
  };
  
  const toggleWeekday = (dayIndex) => {
    if (disabledDays.includes(dayIndex)) {
      calendar.removeDisabledDayOfWeek(dayIndex);
    } else {
      calendar.addDisabledDayOfWeek(dayIndex);
    }
    setDisabledDays(calendar.getDisabledDaysOfWeek());
  };
  
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  return (
    <div className="space-y-6">
      {/* Weekday Toggle Controls */}
      <div className="p-4 border rounded-lg">
        <h4 className="font-medium mb-3">Toggle Disabled Weekdays:</h4>
        <div className="flex flex-wrap gap-2">
          {weekdays.map((day, index) => (
            <button
              key={index}
              onClick={() => toggleWeekday(index)}
              className={\`px-3 py-1 rounded text-sm font-medium transition-colors \${
                disabledDays.includes(index)
                  ? 'bg-red-100 text-red-800 border border-red-300'
                  : 'bg-green-100 text-green-800 border border-green-300'
              }\`}
            >
              {day} {disabledDays.includes(index) ? '❌' : '✅'}
            </button>
          ))}
        </div>
      </div>
      
      {/* Calendar Display */}
      <div className="border rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={() => calendar.methods.prevMonth()}
            className="px-3 py-1 border rounded"
          >
            Previous
          </button>
          <h3 className="text-lg font-medium">{monthName} {currentYear}</h3>
          <button 
            onClick={() => calendar.methods.nextMonth()}
            className="px-3 py-1 border rounded"
          >
            Next
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => handleSelectDate(day)}
              disabled={day.isDisabled}
              className={\`p-2 text-center text-sm border rounded transition-colors \${
                day.isSelected 
                  ? 'bg-blue-500 text-white border-blue-500' 
                  : day.isToday
                  ? 'bg-blue-50 border-blue-200 text-blue-700'
                  : day.isDisabled
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
                  : day.isCurrentMonth
                  ? 'hover:bg-gray-50 border-gray-200'
                  : 'text-gray-400 border-gray-100'
              }\`}
            >
              {day.day}
            </button>
          ))}
        </div>
        
        {selectedDate && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
            <p className="text-sm">
              <strong>Selected Date:</strong> {selectedDate.toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
      
      {/* Business Rules Examples */}
      <div className="space-y-3">
        <h4 className="font-medium">Common Business Scenarios:</h4>
        <div className="grid gap-2">
          <button 
            onClick={() => {
              calendar.setDisabledDaysOfWeek([0, 6]);
              setDisabledDays([0, 6]);
            }}
            className="p-2 text-left border rounded hover:bg-gray-50"
          >
            <strong>Weekends Only:</strong> Disable Saturday & Sunday (common business hours)
          </button>
          <button 
            onClick={() => {
              calendar.setDisabledDaysOfWeek([1, 3, 5]);
              setDisabledDays([1, 3, 5]);
            }}
            className="p-2 text-left border rounded hover:bg-gray-50"
          >
            <strong>Alternating Schedule:</strong> Disable Mon, Wed, Fri
          </button>
          <button 
            onClick={() => {
              calendar.setDisabledDaysOfWeek([]);
              setDisabledDays([]);
            }}
            className="p-2 text-left border rounded hover:bg-gray-50"
          >
            <strong>No Restrictions:</strong> Enable all days
          </button>
        </div>
      </div>
    </div>
  );
}`}></SyntaxHighlighter>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Additional Resources */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Additional Resources</h3>
            <ul className="space-y-2 ml-6 list-disc">
              <li>
                <Link href="/logic/calendar-controller/api" className="text-primary hover:underline">
                  Complete Calendar Controller API documentation
                </Link>
              </li>
              <li>
                <Link href="/docs/date-picker/internationalization-guide" className="text-primary hover:underline">
                  Learn more about internationalization
                </Link>
              </li>
              <li>
                <Link href="https://github.com/uplink-protocol/calendar-controller" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  GitHub repository
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Social Share */}
        <div className="mt-10 pt-6 border-t border-border">
          <SocialShareContainer 
            title="Calendar Controller Examples" 
          />
        </div>
      </DocsPageLayout>
    </>
  );
}