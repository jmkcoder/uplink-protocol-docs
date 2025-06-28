import { CalendarController } from '@uplink-protocol/calendar-controller';

// Create a new calendar controller
export const Controller = CalendarController({
  firstDayOfWeek: 0, // Sunday,
  dateFormatOptions: {
    localeMatcher: 'lookup',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  },
});
