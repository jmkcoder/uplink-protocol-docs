import { CalendarControllerClass } from '@uplink-protocol/calendar-controller';

export class CalendarAccessibility {
  constructor(private controller: CalendarControllerClass) {}

  handleKeyDown(e: KeyboardEvent, isOpen: boolean): 'close' | 'focusOnly' | 'none' {
    if (!isOpen) return 'none';

    let action: 'close' | 'focusOnly' | 'none' = 'focusOnly';

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();

        if (!this.allowNavigation('prev')) break;

        this.controller.moveFocusLeft();
        break;

      case 'ArrowRight':
        e.preventDefault();

        if (!this.allowNavigation('next')) break;

        this.controller.moveFocusRight();
        break;

      case 'ArrowUp':
        e.preventDefault();

        if (!this.allowNavigation('prev', 7)) break;

        this.controller.moveFocusUp();
        break;

      case 'ArrowDown':
        e.preventDefault();

        if (!this.allowNavigation('next', 7)) break;

        this.controller.moveFocusDown();
        break;

      case 'Home':
        e.preventDefault();
        this.controller.moveFocusToStartOfMonth();
        break;

      case 'End':
        e.preventDefault();
        this.controller.moveFocusToEndOfMonth();
        break;

      case 'PageUp':
        e.preventDefault();

        if (e.shiftKey) {
          this.controller.moveFocusToPreviousYear();
        } else {
          this.controller.moveFocusToPreviousMonth();
        }

        break;

      case 'PageDown':
        e.preventDefault();

        if (e.shiftKey) {
          this.controller.moveFocusToNextYear();
        } else {
          this.controller.moveFocusToNextMonth();
        }

        break;

      case 'Enter':
      case ' ': // Space
        e.preventDefault();

        if ((e.target as HTMLElement).classList.contains('disabled')) break;

        this.controller.selectFocusedDate();
        break;

      case 'Tab':
        break;

      default:
        action = 'none';
        break;
    }

    return action;
  }

  allowNavigation(direction: 'prev' | 'next', numberOfDays = 1): boolean {
    if (this.controller.bindings.focusedDate.current) {
      const currentDate = new Date(
        this.controller.bindings.focusedDate.current.getFullYear(),
        this.controller.bindings.focusedDate.current.getMonth(),
        this.controller.bindings.focusedDate.current.getDate()
      );

      if (direction == 'prev') {
        const minDate = this.controller._minDate;
        currentDate.setDate(currentDate.getDate() - numberOfDays);

        if (minDate && currentDate < minDate) return false;
      } else {
        const maxDate = this.controller._maxDate;
        currentDate.setDate(currentDate.getDate() + numberOfDays);

        if (maxDate && currentDate > maxDate) return false;
      }
    }

    return true;
  }
}
