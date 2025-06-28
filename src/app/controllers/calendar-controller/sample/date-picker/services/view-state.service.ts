import { CalendarControllerClass } from '@uplink-protocol/calendar-controller';
import { DatePicker } from '../date-picker';
import { ViewMode } from '../enums/view-mode.enum';
import { NavigationService } from './navigation.service';

export class ViewStateService {
  public isCalendarOpen = false;

  constructor(
    private datePicker: DatePicker,
    private navigationService: NavigationService,
    private controller: CalendarControllerClass
  ) {}

  toggleCalendar() {
    this.isCalendarOpen = !this.isCalendarOpen;
    const dialog = this.datePicker.querySelector('.date-picker-dialog') as HTMLElement;

    if (this.isCalendarOpen) {
      this.navigationService.viewMode = ViewMode.CALENDAR;
      const selectedDate: Date | null = this.controller.bindings.selectedDate.current;

      if (selectedDate)
        this.controller.selectMonth(selectedDate.getMonth(), selectedDate.getFullYear());
      else this.controller.goToToday();

      dialog.style.display = 'block';
      dialog.classList.add('open');

      const input = this.datePicker.querySelector('.date-picker-input') as HTMLInputElement;

      const rect = input.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
      
      if (!isInView) {
        input.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
          const rect = input.getBoundingClientRect();
          window.scrollBy(0, rect.top - 100); // Offset for navbar height
        }, 100);
      }

      setTimeout(() => {
        dialog.focus();
      }, 0);
    } else {
      dialog.style.display = 'none';
      dialog.classList.add('remove');
    }
  }

  closeCalendar(event: Event) {
    const dialog = this.datePicker.querySelector('.date-picker-dialog') as HTMLElement;

    if (!dialog.contains(event.target as HTMLElement) || event instanceof KeyboardEvent) {
      dialog.style.display = 'none';
      this.isCalendarOpen = false;
    }
  }

  resetSelection() {
    this.controller.clearSelection();
    setTimeout(() => this.navigationService.goToToday(), 0);
  }

  updateSelectedDateDisplay() {
    const input = this.datePicker.querySelector('.date-picker-input') as HTMLInputElement;
    if (this.controller.bindings.selectedDate.current)
      input.value = this.controller.formatDate(this.controller.bindings.selectedDate.current) ?? '';
    else input.value = '';
  }
}
