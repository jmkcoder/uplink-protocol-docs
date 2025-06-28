import { DatePickerUtility } from './date-picker.utility';
import { ViewMode } from './enums/view-mode.enum';
import { Controller } from './handlers';
import {
  MobileAccessibilityService,
  NavigationService,
  RenderingService,
  ViewStateService,
  EventService,
} from './services';

const template = document.createElement('template');

export class DatePicker extends HTMLElement {
  nestedHTML = '';
  isMounted = false;
  renderingService: RenderingService;
  navigationService: NavigationService;
  mobileAccessibilityService: MobileAccessibilityService;
  viewStateService: ViewStateService;
  eventService: EventService;
  utility: DatePickerUtility;

  subscriptions = {
    calendarDays: {},
    calendarMonths: {},
    calendarYears: {},
    selectedDate: {},
    focusedDate: {},
  };

  constructor() {
    super();
    Controller.setLocale('fr-CA');
    Controller.setDisabledDaysOfWeek([0, 6]);
    Controller.setMinDate(new Date(2025, 5, 1));
    Controller.setMaxDate(new Date(2025, 6, 31));
    this.utility = new DatePickerUtility(Controller);
    this.renderingService = new RenderingService(Controller, this.utility);
    this.navigationService = new NavigationService(Controller);
    this.viewStateService = new ViewStateService(this, this.navigationService, Controller);
    this.mobileAccessibilityService = new MobileAccessibilityService(
      this,
      this.navigationService,
      this.viewStateService,
      this.utility,
      Controller
    );
    this.eventService = new EventService(
      this,
      this.viewStateService,
      this.navigationService,
      this.mobileAccessibilityService,
      Controller
    );
  }

  // Set up subscriptions to calendar bindings
  setupSubscriptions() {
    // Early exit if calendar or bindings are not available
    if (!Controller || !Controller.bindings) {
      console.error('Cannot setup subscriptions: calendar or bindings not available');
      return;
    }

    // Clear any existing subscriptions to prevent memory leaks
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.values(this.subscriptions).forEach((sub: any) => {
      if (sub && typeof sub.unsubscribe === 'function') {
        sub.unsubscribe();
      }
    });

    // Set up new subscriptions with error handling
    try {
      if (Controller.bindings?.['calendarDays']) {
        this.subscriptions.calendarDays = Controller.bindings?.['calendarDays'].subscribe(() => {
          if (this.navigationService.viewMode == ViewMode.CALENDAR) {
            this.reRenderCalendar();
            this.viewStateService.updateSelectedDateDisplay();
            this.eventService.addAllCalendarEventsHandlers();
          }
        });
      }

      if (Controller.bindings?.['calendarMonths']) {
        this.subscriptions.calendarMonths = Controller.bindings?.['calendarMonths'].subscribe(
          () => {
            if (this.navigationService.viewMode == ViewMode.MONTH) {
              this.reRenderCalendar();
              this.eventService.addAllCalendarEventsHandlers();
            }
          }
        );
      }

      if (Controller.bindings?.['calendarYears']) {
        this.subscriptions.calendarYears = Controller.bindings?.['calendarYears'].subscribe(() => {
          if (this.navigationService.viewMode == ViewMode.YEAR) {
            this.reRenderCalendar();
            this.eventService.addAllCalendarEventsHandlers();
          }
        });
      }
    } catch (error) {
      console.error('Error setting up calendar subscriptions:', error);
    }
  }

  public render() {
    template.innerHTML = `
      <div class="date-picker-input-wrapper">
        <input type="text" class="date-picker-input" placeholder="Select date">
        <span class="date-picker-icon material-icons">calendar_today</span>
      </div>
      <div class="date-picker-dialog" tabindex="-1">
        ${this.renderingService.renderCalendar()}
      </div>
    `;
    this.innerHTML = '';
    this.appendChild(template.content.cloneNode(true));
  }

  reRenderCalendar() {
    const dialog = this.querySelector('.date-picker-dialog') as HTMLElement;
    if (this.navigationService.viewMode == ViewMode.MONTH) {
      dialog.innerHTML = this.renderingService.renderMonth();
      return;
    } else if (this.navigationService.viewMode == ViewMode.YEAR) {
      dialog.innerHTML = this.renderingService.renderYear();
      return;
    }

    dialog.innerHTML = this.renderingService.renderCalendar();
  }

  attributeChangedCallback() {
    if (!this.isMounted) return;
    this.render();
  }

  connectedCallback() {
    this.setupSubscriptions();
    this.classList.add('uplink-date-picker');

    this.nestedHTML = this.innerHTML;
    this.render();

    // events
    this.eventService.handleKeyPress();
    this.eventService.handleDocumentClick();
    this.eventService.handleCalendarToggle();
    this.eventService.handleValueChange();
    this.eventService.addAllCalendarEventsHandlers();

    this.isMounted = true;
  }
}

customElements.define('uplink-date-picker', DatePicker);