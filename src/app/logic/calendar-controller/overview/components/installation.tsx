import React from 'react'
import { CodeBlock } from '@/components/code-block'

export function Installation() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Installation</h2>
      <p className="mb-4">
        To install the Calendar Controller component, use npm or yarn:
      </p>
      
      <CodeBlock language="shell" code=
        {`npm install @uplink/calendar-controller`}
      />
      
      <p className="mt-4 mb-2">Or using yarn:</p>
      
      <CodeBlock language="shell" code=
        {`yarn add @uplink/calendar-controller`}
      />
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Dependencies</h3>
      <p className="mb-4">
        The Calendar Controller has minimal dependencies and is designed to be lightweight. It requires:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>JavaScript runtime environment (browser or Node.js)</li>
        <li>ECMAScript 6 (ES6) or higher</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">TypeScript Support</h3>
      <p className="mb-4">
        Calendar Controller includes comprehensive TypeScript type definitions. To get full TypeScript support:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Make sure TypeScript is installed in your project</li>
        <li>Import the types directly from the package</li>
      </ol>
      
      <CodeBlock language="ts" code=
        {`import { 
  CalendarController, 
  CalendarConfig, 
  CalendarDay, 
  DateRange 
} from '@uplink/calendar-controller';`}
      />
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Framework Integration</h3>
      <p>
        Calendar Controller is framework-agnostic, but integrates well with popular frameworks:
      </p>
      
      <h4 className="text-lg font-medium mt-4 mb-2">React</h4>
      <CodeBlock language="ts" code=
        {`import { useEffect, useState } from 'react';
import { CalendarController } from '@uplink/calendar-controller';

function CalendarComponent() {
  const [calendar] = useState(() => new CalendarController());
  const [selectedDate, setSelectedDate] = useState(null);
  
  useEffect(() => {
    // Subscribe to date selection events
    const unsubscribe = calendar.onDateSelected((date) => {
      setSelectedDate(date);
    });
    
    // Clean up subscription
    return () => unsubscribe();
  }, [calendar]);
  
  // Render your UI based on calendar state
}`}/>
      
      <h4 className="text-lg font-medium mt-4 mb-2">Vue</h4>
      <CodeBlock language="html" code=
        {`<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { CalendarController } from '@uplink/calendar-controller';

const selectedDate = ref(null);
const calendar = new CalendarController();
let unsubscribe;

onMounted(() => {
  unsubscribe = calendar.onDateSelected((date) => {
    selectedDate.value = date;
  });
});

onUnmounted(() => {
  unsubscribe && unsubscribe();
});
</script>`} />
    </div>
  )
}
