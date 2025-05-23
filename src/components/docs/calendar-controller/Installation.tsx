'use client'

import { CodeBlock } from "@/components/code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Installation() {
  return (
    <div className="space-y-6">
      <div>
        <h2 id="installation" className="text-2xl font-bold tracking-tight mb-4">Installation</h2>
        <p className="text-muted-foreground">
          Calendar Controller can be installed using npm, yarn, or pnpm. It has minimal dependencies and is designed to be lightweight and framework-agnostic.
        </p>
      </div>
      
      <Tabs defaultValue="npm" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-2">
          <TabsTrigger value="npm">npm</TabsTrigger>
          <TabsTrigger value="yarn">yarn</TabsTrigger>
          <TabsTrigger value="pnpm">pnpm</TabsTrigger>
        </TabsList>
          <TabsContent value="npm">
          <CodeBlock language="shell" code={`npm install @uplink-protocol/calendar-controller`} />
        </TabsContent>
        
        <TabsContent value="yarn">
          <CodeBlock language="shell" code={`yarn add @uplink-protocol/calendar-controller`} />
        </TabsContent>
        
        <TabsContent value="pnpm">
          <CodeBlock language="shell" code={`pnpm add @uplink-protocol/calendar-controller`} />
        </TabsContent>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Requirements</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>JavaScript runtime environment (browser or Node.js)</li>
            <li>ECMAScript 6 (ES6) or higher</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Version Compatibility</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Supported in all modern browsers</li>
            <li>IE11 support with appropriate polyfills</li>
            <li>Compatible with Node.js for server-side rendering</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-4">
        <h3 className="text-xl font-semibold mb-4">TypeScript Support</h3>
        <p className="mb-4">
          Calendar Controller includes comprehensive TypeScript type definitions out of the box:
        </p>
          <CodeBlock language="ts" code={`import { 
  CalendarController, 
  CalendarOptions, 
  CalendarDate, 
  DateRange 
} from '@uplink-protocol/calendar-controller';

// Types are automatically available
const options: CalendarOptions = {
  firstDayOfWeek: 1,
  dateFormat: 'MM/DD/YYYY'
};

const calendar = CalendarController(options);`} />
      </div>
      
      <div className="pt-4">
        <h3 className="text-xl font-semibold mb-4">Framework Integration</h3>
        <p className="mb-4">
          While Calendar Controller is framework-agnostic, here's how to integrate it with popular frameworks:
        </p>
        
        <Tabs defaultValue="react" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-2">
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="vue">Vue</TabsTrigger>
            <TabsTrigger value="angular">Angular</TabsTrigger>
          </TabsList>
          
          <TabsContent value="react">
            <CodeBlock language="tsx" code={`import { useEffect, useState, useRef } from 'react';
import { CalendarController } from '@uplink-protocol/calendar-controller';

function CalendarComponent() {
  const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [days, setDays] = useState([]);
  
  useEffect(() => {
    // Initialize calendar
    calendarRef.current = CalendarController({
      firstDayOfWeek: 1,
      dateFormat: 'MM/DD/YYYY'
    });
    
    // Subscribe to calendar changes
    const subscriptions = [
      calendarRef.current.bindings.selectedDate.subscribe(setSelectedDate),
      calendarRef.current.bindings.calendarDays.subscribe(setDays)
    ];
    
    // Clean up subscriptions
    return () => {
      subscriptions.forEach(sub => sub.unsubscribe());
    };
  }, []);
  
  // Render your UI based on calendar state
}`} />
          </TabsContent>
          
          <TabsContent value="vue">
            <CodeBlock language="html" code={`<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { CalendarController } from '@uplink-protocol/calendar-controller';

const selectedDate = ref(null);
const days = ref([]);
const calendar = CalendarController();
let subscriptions = [];

onMounted(() => {
  subscriptions.push(
    calendar.bindings.selectedDate.subscribe((date) => {
      selectedDate.value = date;
    }),
    calendar.bindings.calendarDays.subscribe((calendarDays) => {
      days.value = calendarDays;
    })
  );
});

onUnmounted(() => {
  subscriptions.forEach(sub => sub.unsubscribe());
});
</script>`} />
          </TabsContent>
          
          <TabsContent value="angular">
            <CodeBlock language="ts" code={`import { Component, OnInit, OnDestroy } from '@angular/core';
import { CalendarController } from '@uplink-protocol/calendar-controller';

@Component({
  selector: 'app-calendar',
  template: '<!-- Your calendar template -->'
})
export class CalendarComponent implements OnInit, OnDestroy {
  private calendar = CalendarController();
  private subscriptions: Function[] = [];
  selectedDate: Date | null = null;
  days: any[] = [];

  ngOnInit() {
    this.subscriptions.push(
      this.calendar.bindings.selectedDate.subscribe((date) => {
        this.selectedDate = date;
      }),
      this.calendar.bindings.calendarDays.subscribe((days) => {
        this.days = days;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}`} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
