import { DatePicker } from '../date-picker';
import { NavigationService } from './navigation.service';
import { ViewStateService } from './view-state.service';
import { DatePickerUtility } from '../date-picker.utility';
import { ViewMode } from '../enums/view-mode.enum';
import { CalendarControllerClass } from '@uplink-protocol/calendar-controller';

export class MobileAccessibilityService {
  constructor(
    private datePicker: DatePicker,
    private navigationService: NavigationService,
    private viewStateService: ViewStateService,
    private utility: DatePickerUtility,
    private controller: CalendarControllerClass
  ) {}

  /**
   * Initialize responsive behavior and touch gesture support
   */
  public initializeResponsiveBehavior(): void {
    // Enhanced touch gesture support
    let touchStartY = 0;
    let touchStartX = 0;
    let initialTouchTime = 0;
    const minSwipeDistance = 70; // Minimum swipe distance in pixels
    const maxSwipeTime = 300; // Maximum time for swipe in milliseconds

    const dialogElement = this.datePicker.querySelector('.date-picker-dialog') as HTMLElement;
    const calendarElement = this.datePicker.querySelector(
      '.date-picker-calendar'
    ) as HTMLDivElement;

    // Add touch gesture support for swiping to close the calendar
    dialogElement.addEventListener(
      'touchstart',
      (e: TouchEvent) => {
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
        initialTouchTime = Date.now();
      },
      { passive: false }
    );

    dialogElement.addEventListener(
      'touchmove',
      (e: TouchEvent) => {
        if (window.matchMedia('(max-width: 768px)').matches) {
          const touchY = e.touches[0].clientY;
          const touchX = e.touches[0].clientX;
          const deltaY = touchY - touchStartY;
          const deltaX = touchX - touchStartX;

          // Prevent pull-to-refresh when swiping inside the calendar dialog
          // This prevents the browser's native pull-to-refresh behavior
          if (deltaY > 0) {
            e.preventDefault();
          }

          // If swiping down, add a visual feedback by following the finger
          if (deltaY > 0 && Math.abs(deltaY) > Math.abs(deltaX)) {
            dialogElement.style.transform = `translateY(${deltaY / 3}px)`;
            dialogElement.style.opacity = `${1 - deltaY / 400}`;
          }
          // If swiping horizontally in calendar view, provide visual feedback for month navigation
          else if (
            Math.abs(deltaX) > Math.abs(deltaY) &&
            calendarElement.contains(e.target as Node)
          ) {
            // Apply horizontal swipe effect regardless of which view is active
            calendarElement.style.transform = `translateX(${deltaX / 2}px)`;
            calendarElement.style.opacity = `${1 - Math.abs(deltaX) / 500}`;
          }
        }
      },
      { passive: false }
    );

    dialogElement.addEventListener('touchend', (e: TouchEvent) => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        const touchEndY = e.changedTouches[0].clientY;
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndTime = Date.now();

        const deltaY = touchEndY - touchStartY;
        const deltaX = touchEndX - touchStartX;
        const swipeTime = touchEndTime - initialTouchTime;

        // Reset the transform and opacity
        dialogElement.style.transform = '';
        dialogElement.style.opacity = '';
        calendarElement.style.transform = '';
        calendarElement.style.opacity = '';

        // Check if it's a vertical or horizontal swipe
        const isVerticalSwipe = Math.abs(deltaY) > Math.abs(deltaX);

        // Close on fast or long downward swipe
        if (
          isVerticalSwipe &&
          deltaY > minSwipeDistance &&
          (swipeTime < maxSwipeTime || deltaY > window.innerHeight / 3)
        ) {
          this.viewStateService.toggleCalendar();
        }
        // Navigate based on the current view
        else if (
          !isVerticalSwipe &&
          Math.abs(deltaX) > minSwipeDistance &&
          swipeTime < maxSwipeTime &&
          calendarElement.contains(e.target as Node)
        ) {
          if (deltaX > 0) {
            // Swiping right - go to previous month with animation
            this.navigateWithAnimation('previous');
          } else {
            // Swiping left - go to next month with animation
            this.navigateWithAnimation('next');
          }
        }
      }
    });

    dialogElement.addEventListener('touchmove', (e: TouchEvent) => {
      if (e.cancelable) {
        e.preventDefault();
      }
    });

    // Add extra accessibility features for mobile
    dialogElement.setAttribute('role', 'dialog');
    dialogElement.setAttribute('aria-modal', 'true');
    dialogElement.setAttribute('aria-label', 'Date picker calendar');

    // Handle orientation changes and viewport adjustments
    window.addEventListener('resize', this.handleViewportChanges.bind(this));
    window.addEventListener('orientationchange', this.handleViewportChanges.bind(this));
  }

  /**
   * Navigate to previous or next month with animation
   * @param direction 'previous' or 'next'
   */
  private navigateWithAnimation(direction: 'previous' | 'next'): void {
    const calendarElement = this.datePicker.querySelector(
      '.date-picker-calendar'
    ) as HTMLDivElement;

    // Create animation class on the calendar element
    const animationClass = direction.includes('previous') ? 'slide-right' : 'slide-left';
    calendarElement.classList.add(animationClass);

    // Use setTimeout to ensure animation is visible
    setTimeout(() => {
      switch (this.navigationService.viewMode) {
        case ViewMode.CALENDAR:
          this.handleMonthChange(direction);
          break;

        case ViewMode.MONTH:
          this.handleYearChange(direction);
          break;

        case ViewMode.YEAR:
          this.handleYearRangeChange(direction);
          break;

        default:
          break;
      }

      // Remove animation class after animation completes
      setTimeout(() => {
        calendarElement.classList.remove(animationClass);
      }, 300);
    }, 50);
  }

  handleMonthChange(direction: 'previous' | 'next') {
    if (direction === 'previous') {
      const prev = this.utility.prevMonthAndYear();
      if (!this.utility.isMonthDisabled(prev.Month, prev.Year, 'prev')) {
        this.navigationService.prev();
      }
    } else if (direction === 'next') {
      const next = this.utility.nextMonthAndYear();
      if (!this.utility.isMonthDisabled(next.Month, next.Year, 'next')) {
        this.navigationService.next();
      }
    }
  }

  handleYearChange(direction: 'previous' | 'next') {
    if (direction === 'previous') {
      const prevYear = this.controller.bindings.currentYear.current - 1;
      if (!this.utility.isMonthDisabled(11, prevYear, 'prev')) {
        this.navigationService.prev();
      }
    } else if (direction === 'next') {
      const nextYear = this.controller.bindings.currentYear.current + 1;
      if (!this.utility.isMonthDisabled(0, nextYear, 'next')) {
        this.navigationService.next();
      }
    }
  }

  handleYearRangeChange(direction: 'previous' | 'next') {
    const selectedYearRange = this.controller.bindings.selectedDateRange.current;
    if (selectedYearRange.startDate) {
      if (direction === 'previous') {
        const prevYear = selectedYearRange.startDate.getFullYear() - 1;
        if (!this.utility.isMonthDisabled(11, prevYear, 'prev')) {
          this.navigationService.prev();
        }
      } else if (direction === 'next') {
        const nextYear = selectedYearRange.startDate.getFullYear() + 1;
        if (!this.utility.isMonthDisabled(0, nextYear, 'next')) {
          this.navigationService.next();
        }
      }
    }
  }

  /**
   * Handle viewport changes or orientation changes
   */
  public handleViewportChanges(): void {
    const dialogElement = this.datePicker.querySelector('.date-picker-dialog') as HTMLElement;
    const calendarElement = this.datePicker.querySelector(
      '.date-picker-calendar'
    ) as HTMLDivElement;

    // Adjust positioning for mobile view in case of orientation changes
    if (window.matchMedia('(max-width: 768px)').matches && this.viewStateService.isCalendarOpen) {
      // For mobile, ensure the calendar is correctly positioned and sized
      // Calculate safe area and ensure the calendar fits within viewport
      const viewHeight = window.innerHeight;

      // Adjust scrolling if needed
      if (calendarElement) {
        if (calendarElement.scrollHeight > viewHeight * 0.7) {
          calendarElement.style.maxHeight = `${viewHeight * 0.65}px`;
        } else {
          calendarElement.style.maxHeight = '';
        }
      }

      // Apply iOS safe area insets if available
      if (CSS.supports('padding-bottom: env(safe-area-inset-bottom)')) {
        dialogElement.style.paddingBottom = 'env(safe-area-inset-bottom)';
      }
    } else {
      // For desktop, reset any mobile-specific styles
      if (calendarElement) {
        calendarElement.style.maxHeight = '';
      }
      dialogElement.style.transform = '';
      dialogElement.style.opacity = '';
    }
  }
}
