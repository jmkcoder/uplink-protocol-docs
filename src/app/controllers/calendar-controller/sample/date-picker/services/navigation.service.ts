import { CalendarControllerClass } from '@uplink-protocol/calendar-controller';
import { ViewMode } from '../enums/view-mode.enum';

export class NavigationService {
  public viewMode: ViewMode = ViewMode.CALENDAR;

  constructor(private controller: CalendarControllerClass) {}

  goToToday(): void {
    this.viewMode = ViewMode.CALENDAR;

    this.controller.goToToday();
  }

  next(): void {
    if (this.viewMode == ViewMode.MONTH) {
      this.controller.goToNextYear();
      this.controller.selectYear(this.controller.bindings.currentYear.current);
      return;
    } else if (this.viewMode == ViewMode.YEAR) {
      this.controller.goToNextYearRange();
      return;
    }

    this.controller.goToNextMonth();
  }

  prev(): void {
    if (this.viewMode == ViewMode.MONTH) {
      this.controller.goToPreviousYear();
      this.controller.selectYear(this.controller.bindings.currentYear.current);
      return;
    } else if (this.viewMode == ViewMode.YEAR) {
      this.controller.goToPreviousYearRange();
      return;
    }

    this.controller.goToPreviousMonth();
  }

  toggleMonthView(): void {
    if (this.viewMode != ViewMode.MONTH) this.viewMode = ViewMode.MONTH;
    else this.viewMode = ViewMode.CALENDAR;

    this.controller.selectYear(this.controller.bindings.currentYear.current);
  }

  toggleYearView(): void {
    if (this.viewMode != ViewMode.YEAR) {
      this.viewMode = ViewMode.YEAR;
      this.controller.setCurrentYearRange(this.controller.bindings.currentDate.current);
    } else {
      this.viewMode = ViewMode.CALENDAR;
      this.controller.goToDate(this.controller.bindings.currentDate.current);
    }
  }
}
