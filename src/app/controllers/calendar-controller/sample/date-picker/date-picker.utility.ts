import { CalendarControllerClass } from '@uplink-protocol/calendar-controller';

export class DatePickerUtility {
  constructor(private controller: CalendarControllerClass) {}

  isMonthDisabled(monthToCheck: number, yearToCheck: number, action: 'current' | 'prev' | 'next') {
    const minDate = this.controller._minDate;
    const maxDate = this.controller._maxDate;

    const isPrevMonthDisabled = (month: number, year: number): boolean => {
      // Create a date object for the last day of the given month
      const prevCheckDate = new Date(year, month + 1, 0); // month is zero-based, so month + 1 is used

      if (minDate && prevCheckDate < minDate) {
        return true;
      }
      return false;
    };

    const isNextMonthDisabled = (month: number, year: number): boolean => {
      // Create a date object for the first day of the given month
      const nextCheckDate = new Date(year, month, 1); // month is zero-based

      if (maxDate && nextCheckDate > maxDate) {
        return true;
      }
      return false;
    };

    if (action === 'prev') return isPrevMonthDisabled(monthToCheck, yearToCheck);
    else if (action === 'next') return isNextMonthDisabled(monthToCheck, yearToCheck);
    else
      return (
        isPrevMonthDisabled(monthToCheck, yearToCheck) ||
        isNextMonthDisabled(monthToCheck, yearToCheck)
      );
  }

  prevMonthAndYear(): { Month: number; Year: number } {
    const currentMonth = this.controller.bindings.currentMonth.current;
    const currentYear = this.controller.bindings.currentYear.current;

    let prevMonth = currentMonth;
    let prevYear = currentYear;

    if (currentMonth == 0 || currentMonth == 12) {
      if (currentMonth == 0) {
        prevMonth = 12;
        prevYear = currentYear - 1;
      }

      if (currentMonth == 12) {
        prevMonth = currentMonth - 1;
      }
    } else {
      prevMonth = currentMonth - 1;
    }

    return {
      Month: prevMonth,
      Year: prevYear,
    };
  }

  nextMonthAndYear(): { Month: number; Year: number } {
    const currentMonth = this.controller.bindings.currentMonth.current;
    const currentYear = this.controller.bindings.currentYear.current;

    let nextMonth = currentMonth;
    let nextYear = currentYear;

    if (currentMonth == 0 || currentMonth == 12) {
      if (currentMonth == 0) {
        nextMonth = currentMonth + 1;
      }

      if (currentMonth == 12) {
        nextMonth = 0;
        nextYear = currentYear - 1;
      }
    } else {
      nextMonth = currentMonth + 1;
    }

    return {
      Month: nextMonth,
      Year: nextYear,
    };
  }
}
