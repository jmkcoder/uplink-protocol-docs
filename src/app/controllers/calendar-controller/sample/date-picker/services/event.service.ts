import { CalendarControllerClass } from '@uplink-protocol/calendar-controller';
import { DatePicker } from '../date-picker';
import { EventHandler } from '../handlers';
import { NavigationService } from './navigation.service';
import { ViewStateService } from './view-state.service';
import { ViewMode } from '../enums/view-mode.enum';
import { CalendarAccessibility } from './calendar-accessibility.service';
import { MobileAccessibilityService } from './mobile-accessibility.service';

export class EventService {
  constructor(
    private datePicker: DatePicker,
    private viewStateService: ViewStateService,
    private navigationService: NavigationService,
    private mobileAccessibilityService: MobileAccessibilityService,
    private controller: CalendarControllerClass
  ) {}

  handleCalendarToggle() {
    const button = this.datePicker.querySelector('.date-picker-icon') as HTMLElement;

    EventHandler.handleClickEvent(
      button,
      this.viewStateService.toggleCalendar,
      this.viewStateService
    );
  }

  handleCloseButton() {
    const button = this.datePicker.querySelector('.close-btn') as HTMLElement;

    EventHandler.handleClickEvent(
      button,
      this.viewStateService.toggleCalendar,
      this.viewStateService
    );
  }

  handleTodayButton() {
    const button = this.datePicker.querySelector('.today-btn') as HTMLElement;

    EventHandler.handleClickEvent(button, this.navigationService.goToToday, this.navigationService);
  }

  handleResetButton() {
    const button = this.datePicker.querySelector('.reset-btn') as HTMLElement;

    EventHandler.handleClickEvent(
      button,
      this.viewStateService.resetSelection,
      this.viewStateService
    );
  }

  handleDocumentClick() {
    const body = document.body as HTMLElement;

    EventHandler.handleClickEvent(body, this.viewStateService.closeCalendar, this.viewStateService);
  }

  handleDateEvents() {
    const dates = this.datePicker.querySelectorAll(
      '.date-picker-cell:not(.month-cell):not(.year-cell):not(.weekday):not(.disabled)'
    ) as NodeListOf<HTMLElement>;

    dates.forEach((date: HTMLElement) => {
      EventHandler.handleClickEvent(date, this.selectDate, this);
    });
  }

  selectDate(event: Event) {
    const target = event.target as HTMLElement;

    const day = Number(target.getAttribute('data-day'));
    const month = Number(target.getAttribute('data-month'));
    const year = Number(target.getAttribute('data-year'));

    this.controller.selectDate(year, month, day);
    this.controller.selectMonth(month, year);
    this.viewStateService.closeCalendar(event);
  }

  handleMonthEvents() {
    const months = this.datePicker.querySelectorAll('.month-cell') as NodeListOf<HTMLElement>;

    months.forEach((month: HTMLElement) => {
      EventHandler.handleClickEvent(month, this.selectMonth, this);
    });
  }

  selectMonth(event: Event) {
    const target = event.target as HTMLElement;

    this.navigationService.viewMode = ViewMode.CALENDAR;

    const month = Number(target.getAttribute('data-month'));
    const year = Number(target.getAttribute('data-year'));

    this.controller.selectMonth(month, year);
    const date = this.controller.bindings.focusedDate.current ?? new Date();
    date?.setMonth(month);
    date?.setFullYear(year);
    this.controller.setFocusedDate(date);

    setTimeout(() => {
      (this.datePicker.querySelector('.focused') as HTMLElement)?.focus();
    }, 0);
  }

  handleYearEvents() {
    const years = this.datePicker.querySelectorAll('.year-cell') as NodeListOf<HTMLElement>;

    years.forEach((year: HTMLElement) => {
      EventHandler.handleClickEvent(year, this.selectYear, this);
    });
  }

  selectYear(event: Event) {
    const target = event.target as HTMLElement;

    this.navigationService.viewMode = ViewMode.MONTH;

    const year = Number(target.getAttribute('data-year'));

    this.controller.selectYear(year);
    const date = this.controller.bindings.focusedDate.current ?? new Date();
    date?.setFullYear(year);
    this.controller.setFocusedDate(date);

    setTimeout(() => {
      (this.datePicker.querySelector('.focused') as HTMLElement)?.focus();
    }, 0);
  }

  handleNextMonth() {
    const prevMonth = this.datePicker.querySelector(
      '.date-picker-nav-btn.next-month'
    ) as HTMLElement;

    EventHandler.handleClickEvent(prevMonth, this.navigationService.next, this.navigationService);
  }

  handlePrevMonth() {
    const prevMonth = this.datePicker.querySelector(
      '.date-picker-nav-btn.prev-month'
    ) as HTMLElement;

    EventHandler.handleClickEvent(prevMonth, this.navigationService.prev, this.navigationService);
  }

  handleMonthSelectorClick() {
    const month = this.datePicker.querySelector('.date-picker-month-selector') as HTMLElement;

    if (month)
      EventHandler.handleClickEvent(
        month,
        this.navigationService.toggleMonthView,
        this.navigationService
      );
  }

  handleYearSelectorClick() {
    const year = this.datePicker.querySelector('.date-picker-year-selector') as HTMLElement;

    if (year)
      EventHandler.handleClickEvent(
        year,
        this.navigationService.toggleYearView,
        this.navigationService
      );
  }

  handleKeyPress() {
    if (this.navigationService.viewMode == ViewMode.CALENDAR) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const ref = this;

      // Add event listener to the parent element
      this.datePicker.addEventListener('keydown', function (event: KeyboardEvent) {
        // Check if the event target is within the desired component or its children
        if (event.key == 'Escape') {
          ref.viewStateService.closeCalendar(event);
        }

        if (ref.navigationService.viewMode == ViewMode.MONTH) {
          const target = event.target as HTMLElement;
          if (
            target.classList.contains('date-picker-cell') &&
            !target.classList.contains('disabled') &&
            (event.key == 'Enter' || event.key == ' ')
          ) {
            ref.selectMonth(event);
          }

          return;
        } else if (ref.navigationService.viewMode == ViewMode.YEAR) {
          const target = event.target as HTMLElement;
          if (
            target.classList.contains('date-picker-cell') &&
            !target.classList.contains('disabled') &&
            (event.key == 'Enter' || event.key == ' ')
          ) {
            ref.selectYear(event);
          }

          return;
        }

        const dates = ref.datePicker.querySelectorAll(
          'td.date-picker-cell'
        ) as NodeListOf<HTMLElement>;

        if (event.key == 'Tab') {
          dates.forEach((date) => {
            date.setAttribute('tabIndex', '-1');
          });

          return;
        } else {
          dates.forEach((date) => {
            date.setAttribute('tabIndex', '0');
          });
        }

        if ((event.target as HTMLElement).closest('.date-picker-calendar')) {
          // Handle the event
          new CalendarAccessibility(ref.controller).handleKeyDown(
            event,
            ref.viewStateService.isCalendarOpen
          );

          setTimeout(() => {
            (ref.datePicker.querySelector('.focused') as HTMLElement)?.focus();
          }, 0);
        }
      });
    }
  }

  handleValueChange() {
    const input = this.datePicker.querySelector('.date-picker-input') as HTMLInputElement;

    EventHandler.handleChangeEvent(input, this.selectInputDate, this);
  }

  selectInputDate(event: Event) {
    const input = event.target as HTMLInputElement;
    const selectedDate = this.selectDateInput(input.value);

    if (selectedDate) {
      this.controller.selectDate(selectedDate);
      if (this.controller.bindings.selectedDate.current)
        input.value =
          this.controller.formatDate(this.controller.bindings.selectedDate.current) ?? '';
      else input.value = '';
    } else this.viewStateService.resetSelection();
  }

  selectDateInput(value: string): Date | null {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    let selectedDate: Date | null = null;

    if (digits.length >= 6) {
      // Get the date format from controller to intelligently parse the input
      const formatOptions = this.controller.getDateFormatOptions();
      const dateFormat = this.controller._dateFormat;
      
      // Determine date order based on format options or date format string
      let dateOrder = 'mdy'; // Default to month-day-year (US format)
      
      if (formatOptions || !dateFormat) {
        // Use locale information to determine date order
        const locale = this.controller.getLocale();
        const testDate = new Date(2023, 11, 25); // Dec 25, 2023 - more distinct digits
        const formatted = new Intl.DateTimeFormat(locale, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        }).format(testDate);
        
        // Analyze the formatted output to determine order
        const yearPos = formatted.indexOf('2023');
        const monthPos = formatted.indexOf('12');
        const dayPos = formatted.indexOf('25');
        
        if (yearPos < monthPos && monthPos < dayPos) {
          dateOrder = 'ymd'; // Year-Month-Day
        } else if (dayPos < monthPos && monthPos < yearPos) {
          dateOrder = 'dmy'; // Day-Month-Year
        } else {
          dateOrder = 'mdy'; // Month-Day-Year (default)
        }
      } else if (dateFormat) {
        // Parse the date format string to determine order
        const lowerFormat = dateFormat.toLowerCase();
        if (lowerFormat.indexOf('dd') < lowerFormat.indexOf('mm')) {
          dateOrder = 'dmy';
        } else if (lowerFormat.indexOf('yyyy') < lowerFormat.indexOf('mm')) {
          dateOrder = 'ymd';
        }
        // Otherwise keep default 'mdy'
      }
      
      // Parse digits according to determined order
      let day: string, month: string, year: string;
      
      if (digits.length === 8) {
        // 8 digits: assume YYYYMMDD, DDMMYYYY, or MMDDYYYY
        switch (dateOrder) {
          case 'dmy':
            day = digits.substring(0, 2);
            month = digits.substring(2, 4);
            year = digits.substring(4, 8);
            break;
          case 'ymd':
            year = digits.substring(0, 4);
            month = digits.substring(4, 6);
            day = digits.substring(6, 8);
            break;
          case 'mdy':
          default:
            month = digits.substring(0, 2);
            day = digits.substring(2, 4);
            year = digits.substring(4, 8);
            break;
        }
      } else {
        // 6-7 digits: assume DDMMYY, MMDDYY, or YYMMDD style
        switch (dateOrder) {
          case 'dmy':
            day = digits.substring(0, 2);
            month = digits.substring(2, 4);
            year = digits.length >= 6 ? digits.substring(4, 8) : `20${digits.substring(4, 6)}`;
            break;
          case 'ymd':
            if (digits.length >= 7) {
              year = digits.substring(0, 4);
              month = digits.substring(4, 6);
              day = digits.substring(6, 8);
            } else {
              year = `20${digits.substring(0, 2)}`;
              month = digits.substring(2, 4);
              day = digits.substring(4, 6);
            }
            break;
          case 'mdy':
          default:
            month = digits.substring(0, 2);
            day = digits.substring(2, 4);
            year = digits.length >= 6 ? digits.substring(4, 8) : `20${digits.substring(4, 6)}`;
            break;
        }
      }

      selectedDate = new Date(Number(year), Number(month) - 1, Number(day));
    }

    return selectedDate;
  }

  addAllCalendarEventsHandlers() {
    this.handleCloseButton();
    this.handleTodayButton();
    this.handleResetButton();
    this.handleDateEvents();
    this.handleNextMonth();
    this.handlePrevMonth();
    this.handleMonthSelectorClick();
    this.handleYearSelectorClick();
    this.handleMonthEvents();
    this.handleYearEvents();
    this.mobileAccessibilityService.initializeResponsiveBehavior();
    this.mobileAccessibilityService.handleViewportChanges();
  }
}
