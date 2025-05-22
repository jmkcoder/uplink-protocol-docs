'use client'

import { CodeBlock } from "@/components/code-block"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function RelatedReferences() {
  return (
    <div className="space-y-6">
      <div>
        <h2 id="related-references" className="text-2xl font-bold tracking-tight mb-4">Related References</h2>
        <p className="text-muted-foreground">
          Calendar Controller integrates seamlessly with other components in the Uplink Protocol ecosystem.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-xl font-medium mb-3">Date Picker UI</h3>
            <p className="text-muted-foreground mb-4">
              The Date Picker component provides a pre-built UI implementation using Calendar Controller as its logical foundation.
            </p>
            <div className="space-y-4">
              <CodeBlock language="tsx" code={`import { DatePicker } from '@uplink/date-picker';

function MyDatePicker() {
  return (
    <DatePicker 
      onChange={(date) => console.log(date)}
      locale="en-US"
      minDate={new Date(2023, 0, 1)}
    />
  );
}`} />
              <div className="flex justify-end">
                <Link href="/components/date-picker/overview" className="group inline-flex items-center text-sm font-medium text-primary">
                  View Date Picker docs 
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-xl font-medium mb-3">Form Controller</h3>
            <p className="text-muted-foreground mb-4">
              Calendar Controller integrates with Form Controller for handling date fields in forms.
            </p>
            <div className="space-y-4">
              <CodeBlock language="tsx" code={`import { useFormController } from '@uplink/form-controller';
import { CalendarController } from '@uplink/calendar-controller';

function DateForm() {
  const form = useFormController({
    initialValues: { eventDate: null }
  });
  
  // Create a calendar controller
  const calendar = new CalendarController();
  
  // Connect form and calendar
  calendar.onDateSelected((date) => {
    form.setFieldValue('eventDate', date);
  });
  
  return (
    <form onSubmit={form.handleSubmit}>
      {/* Your UI components here */}
    </form>
  );
}`} />
              <div className="flex justify-end">
                <Link href="/logic/form-controller/overview" className="group inline-flex items-center text-sm font-medium text-primary">
                  View Form Controller docs 
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-xl font-medium mb-3">Data Handling</h3>
            <p className="text-muted-foreground mb-4">
              Learn how to use Calendar Controller with data fetching and server operations.
            </p>
            <div className="space-y-4">
              <CodeBlock language="tsx" code={`import { CalendarController } from '@uplink/calendar-controller';
import { fetchEvents } from './api';

// Create calendar with event support
const calendar = new CalendarController();

// When month changes, fetch events
calendar.onNavigationChange(async ({ currentMonth, currentYear }) => {
  const events = await fetchEvents(currentMonth, currentYear);
  
  // Highlight days with events
  events.forEach(event => {
    const eventDate = new Date(event.date);
    calendar.setDayData(eventDate, { hasEvent: true });
  });
});`} />
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-xl font-medium mb-3">Accessibility & Best Practices</h3>
            <p className="text-muted-foreground mb-4">
              Guidelines for creating accessible calendar interfaces using Calendar Controller.
            </p>
            <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
              <li>Use proper ARIA attributes in your calendar UI</li>
              <li>Provide keyboard navigation in your implementation</li>
              <li>Support screen readers with descriptive text</li>
              <li>Maintain sufficient color contrast for date indicators</li>
              <li>Provide clear feedback for selected and invalid dates</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-border">
              <Link href="/accessibility" className="group inline-flex items-center text-sm font-medium text-primary">
                View accessibility guidelines 
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="border border-border rounded-lg p-6">
        <h3 className="text-xl font-medium mb-3">Community Resources</h3>
        <p className="text-muted-foreground mb-4">
          Additional resources from the Uplink Protocol community:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="https://github.com/odyssey/uplink-calendar-controller" 
             target="_blank" 
             rel="noopener noreferrer"
             className="block p-4 border border-border rounded-md hover:bg-muted transition-colors">
            <h4 className="font-medium">GitHub Repository</h4>
            <p className="text-sm text-muted-foreground mt-1">Source code, issues, and contribution guidelines</p>
          </a>
          
          <a href="https://npmjs.com/package/@uplink/calendar-controller" 
             target="_blank" 
             rel="noopener noreferrer"
             className="block p-4 border border-border rounded-md hover:bg-muted transition-colors">
            <h4 className="font-medium">NPM Package</h4>
            <p className="text-sm text-muted-foreground mt-1">Latest releases and installation information</p>
          </a>
          
          <a href="https://discord.gg/uplink-protocol" 
             target="_blank" 
             rel="noopener noreferrer"
             className="block p-4 border border-border rounded-md hover:bg-muted transition-colors">
            <h4 className="font-medium">Discord Community</h4>
            <p className="text-sm text-muted-foreground mt-1">Get help and share your implementations</p>
          </a>
        </div>
      </div>
    </div>
  )
}
