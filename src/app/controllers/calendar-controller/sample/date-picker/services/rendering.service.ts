import {
  CalendarControllerClass,
  CalendarDate,
  CalendarMonth,
  CalendarYear,
} from '@uplink-protocol/calendar-controller';
import { DatePickerUtility } from '../date-picker.utility';
import { ViewMode } from '../enums/view-mode.enum';

export class RenderingService {
  constructor(
    private controller: CalendarControllerClass,
    private utility: DatePickerUtility
  ) {}

  renderCalendar(): string {
    return `
        ${this.renderCalendarHeader()}
        <div class="date-picker-calendar">
            ${this.renderCalendarDaysHeader()}
            ${this.renderCalendarDays()}
        </div>
        ${this.renderCalendarFooter()}
        `;
  }

  renderMonth(): string {
    return `
      ${this.renderCalendarHeader(ViewMode.MONTH)}
      <div class="date-picker-calendar">
        ${this.renderCalendarMonth()}
      </div>
      ${this.renderCalendarFooter()}
    `;
  }

  renderYear() {
    return `
      ${this.renderCalendarYearHeader()}
      <div class="date-picker-calendar">
        ${this.renderCalendarYear()}
      </div>
      ${this.renderCalendarFooter()}
    `;
  }

  renderCalendarHeader(viewMode: ViewMode = ViewMode.CALENDAR): string {
    let isPrevDisabled = false;
    let isNextDisabled = false;

    if (viewMode == ViewMode.MONTH) {
      const currentYear = this.controller.bindings.currentYear.current;

      isPrevDisabled = this.utility.isMonthDisabled(11, currentYear - 1, 'current');
      isNextDisabled = this.utility.isMonthDisabled(0, currentYear + 1, 'current');
    } else {
      const prev = this.utility.prevMonthAndYear();
      const next = this.utility.nextMonthAndYear();

      isPrevDisabled = this.utility.isMonthDisabled(prev.Month, prev.Year, 'prev');
      isNextDisabled = this.utility.isMonthDisabled(next.Month, next.Year, 'next');
    }

    return `
        <button type="button" class="mobile-close-btn">
          <span class="material-icons">close</span>
        </button>
        <div class="date-picker-header">
          <button class="date-picker-nav-btn prev-month" 
              tabindex="0"
              ${isPrevDisabled ? 'disabled' : ''}>
            <span class="material-icons">chevron_left</span>
          </button>
          <div class="date-picker-selectors">
            <button class="date-picker-month-selector" 
                    aria-label="Select month" 
                    tabindex="0">
              <span>${this.controller.bindings.monthName.current}</span>
            </button>
            <button class="date-picker-year-selector" 
                    aria-label="Select year" 
                    tabindex="0">
              <span>${this.controller.bindings.currentYear.current}</span>
            </button>
          </div>
          <button class="date-picker-nav-btn next-month" 
                  tabindex="0"
                  ${isNextDisabled ? 'disabled' : ''}>
            <span class="material-icons">chevron_right</span>
          </button>
        </div>
      `;
  }

  renderCalendarYearHeader(): string {
    const yearRange = this.controller.methods?.['getCurrentYearRange']();

    const isPrevDisabled = this.utility.isMonthDisabled(11, yearRange.startYear - 1, 'current');
    const isNextDisabled = this.utility.isMonthDisabled(0, yearRange.endYear + 1, 'current');

    return `
        <button type="button" class="mobile-close-btn">
          <span class="material-icons">close</span>
        </button>
        <div class="date-picker-header">
          <button class="date-picker-nav-btn prev-month" 
              tabindex="0"
              ${isPrevDisabled ? 'disabled' : ''}>
            <span class="material-icons">chevron_left</span>
          </button>
          <div class="date-picker-selectors">
            <button class="date-picker-year-selector" 
                    aria-label="Select year" 
                    tabindex="0"
              <span>${yearRange.startYear} - ${yearRange.endYear}</span>
            </button>
          </div>
          <button class="date-picker-nav-btn next-month" 
                  tabindex="0"
                  ${isNextDisabled ? 'disabled' : ''}>
            <span class="material-icons">chevron_right</span>
          </button>
        </div>
      `;
  }

  renderCalendarFooter(): string {
    return `
        <div class="date-picker-footer">
          <span class="date-picker-selected-date"></span>
          <div class="date-picker-buttons">
            <button class="date-picker-btn today-btn" 
                    tabindex="0" 
                    aria-label="Today">Today</button>
            <button class="date-picker-btn reset-btn" tabindex="0" aria-label="Reset selection">Reset</button>
            <button class="date-picker-btn close-btn primary" tabindex="0" aria-label="Close date picker">Close</button>
          </div>
        </div>
      `;
  }

  renderCalendarDaysHeader(): string {
    let calendarContent = `
        <table class="date-picker-table" role="grid" aria-labelledby="date-picker-header-title" tabindex="0">
          <thead>
            <tr class="date-picker-row date-picker-weekdays">
      `;

    const weekdays: string[] = this.controller.getWeekdayNames(true);

    weekdays.forEach((weekday) => {
      calendarContent += `
          <th class="date-picker-cell weekday" scope="col">${weekday}</th>
        `;
    });

    calendarContent += '</tr></thead>';

    return calendarContent;
  }

  renderCalendarDays(): string {
    let calendarContent = '<tbody>';

    const days: CalendarDate[] = this.controller.bindings.calendarDays.current;

    days.forEach((day: CalendarDate, i: number) => {
      if (i % 7 == 0) {
        if (i > 0) {
          calendarContent += '</tr>';
        }

        calendarContent += '<tr class="date-picker-row">';
      }

      const isToday = day.isToday;
      const isSelected = day.isSelected;
      const isCurrentMonth = day.isCurrentMonth;
      const isDisabled = day.isDisabled;
      const isFocused = day.isFocused;

      // Build CSS classes
      let cellClass = 'date-picker-cell';
      if (isToday) cellClass += ' today';
      if (isSelected) cellClass += ' selected';
      if (!isCurrentMonth) cellClass += ' other-month';
      if (!isCurrentMonth) cellClass += ' other-month';
      if (isDisabled) cellClass += ' disabled';
      if (isFocused) cellClass += ' focused';

      let ariaLabel = '';

      if (day.date) ariaLabel = this.controller.getAccessibleDateLabel(day.date);

      calendarContent += `
          <td 
            class="${cellClass}" 
            role="gridcell"
            tabindex="0" 
            aria-label="${ariaLabel}"
            aria-selected="${isSelected ? 'true' : 'false'}"
            aria-focused="${isFocused ? 'true' : 'false'}"
            ${isDisabled ? 'aria-disabled="true"' : ''}
            data-day="${day.day}"
            data-month="${day.month}"
            data-year="${day.year}">
            <div class="date-cell-content">
              ${day.day}
            </div>
          </td>
        `;
    });

    calendarContent += '</tr></thead><tbody>';

    calendarContent += '</tbody></table>';

    return calendarContent;
  }

  renderCalendarMonth(): string {
    let calendarContent = `<div class="date-picker-months-grid" role="grid" aria-label="Month selection grid">`;
    const months: CalendarMonth[] = this.controller.bindings.calendarMonths.current;
    const monthName: string[] = this.controller.getMonthNames();

    let rows = 0;

    months.forEach((month: CalendarMonth, i: number) => {
      if (i != 0 && i % 3 == 0) {
        calendarContent += `</div>`;
        calendarContent += `<div class="date-picker-row" role="row">`;
        rows += 1;
      } else if (i == 0) {
        calendarContent += `<div class="date-picker-row" role="row">`;
      }

      const isSelected = month.isSelected;
      const isDisabled = month.isDisabled;
      const isCurrent = month.isCurrentMonth;

      let cellClass = 'date-picker-cell month-cell';
      if (isSelected) cellClass += ' selected';
      if (isCurrent) cellClass += ' current';
      if (isDisabled) cellClass += ' disabled';

      calendarContent += `
          <div class="${cellClass}" 
            role="gridcell" 
            tabindex="0" 
            data-month="${month.month}" 
            data-year="${month.year}"
            data-row="${rows}"
            data-col="${i}"
            aria-selected="${isSelected ? 'true' : 'false'}"
            aria-disabled="${isDisabled ? 'true' : 'false'}"
            aria-label="${monthName[i]} ${month.year}">
            ${monthName[i]}
          </div>
        `;
    });

    calendarContent += `
          </div>
        </div>
      `;

    return calendarContent;
  }

  renderCalendarYear(): string {
    let calendarContent = `<div class="date-picker-years-grid" role="grid" aria-label="Year selection grid">`;
    const years: CalendarYear[] = this.controller.bindings.calendarYears.current;

    let rows = 0;

    years.forEach((year: CalendarYear, i: number) => {
      if (i != 0 && i % 3 == 0) {
        calendarContent += `</div>`;
        calendarContent += `<div class="date-picker-row" role="row">`;
        rows += 1;
      } else if (i == 0) {
        calendarContent += `<div class="date-picker-row" role="row">`;
      }

      const isSelected = year.isSelected;
      const isDisabled = year.isDisabled;
      const isCurrent = year.isCurrentYear;

      let cellClass = 'date-picker-cell year-cell';
      if (isSelected) cellClass += ' selected';
      if (isCurrent) cellClass += ' current';
      if (isDisabled) cellClass += ' disabled';

      calendarContent += `
          <div class="${cellClass}" 
                role="gridcell" 
                tabindex="0" 
                data-year="${year.year}"
                data-row="${rows}"
                data-col="${i}"
                aria-selected="${isSelected ? 'true' : 'false'}"
                aria-disabled="${isDisabled ? 'true' : 'false'}"
                aria-label="${year.year}">
            ${year.year}
          </div>
        `;
    });

    calendarContent += `
          </div>
        </div>
      `;

    return calendarContent;
  }

  buildAriaLabel(isToday: boolean, isSelected: boolean, isDisabled: boolean): string {
    let label = '';

    if (isToday) {
      label += ', Today';
    }

    if (isSelected) {
      label += ', Selected';
    }

    if (isDisabled) {
      label += ', Unavailable';
    }

    return label;
  }
}
