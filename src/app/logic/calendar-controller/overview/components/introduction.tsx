import React from 'react'

export function Introduction() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Introduction to Calendar Controller</h2>
      <p className="mb-4">
        The Calendar Controller is a powerful and flexible component for date selection and calendar navigation in web applications. 
        It provides a comprehensive set of features for managing dates, including single date selection, date range selection, 
        multiple view modes, and extensive internationalization support.
      </p>
      <p className="mb-4">
        As part of the Uplink Protocol ecosystem, the Calendar Controller follows consistent API design patterns 
        and integrates seamlessly with other Uplink Protocol components. It strictly adheres to the separation of concerns 
        principle, providing calendar logic without any UI dependencies.
      </p>
      <p className="mb-4">
        Whether you're building a booking system, event scheduler, or any application that requires date manipulation, 
        the Calendar Controller provides a robust foundation with a clean separation between logic and UI.
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Design Philosophy</h3>
      <p className="mb-4">
        The Calendar Controller was built with these core principles in mind:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>
          <strong>Logic/UI Separation</strong>: Provides purely logical components with no UI dependencies, 
          giving you complete freedom in visual implementation
        </li>
        <li>
          <strong>Framework Agnostic</strong>: Compatible with any JavaScript framework (React, Vue, Angular) 
          or vanilla JavaScript
        </li>
        <li>
          <strong>Reactive Architecture</strong>: Uses a reactive event system for state updates and change notifications
        </li>
        <li>
          <strong>Comprehensive Internationalization</strong>: First-class support for multiple languages, date formats,
          and regional calendar preferences
        </li>
        <li>
          <strong>Extensible Design</strong>: Easy to extend with custom functionality while maintaining core stability
        </li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">When to Use Calendar Controller</h3>
      <p className="mb-4">
        The Calendar Controller is ideal for:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Date pickers in forms and applications</li>
        <li>Booking and reservation systems</li>
        <li>Event schedulers and calendars</li>
        <li>Date range selectors</li>
        <li>Applications requiring complex date manipulation</li>
        <li>Multi-language applications with internationalization requirements</li>
      </ul>
    </div>
  )
}
