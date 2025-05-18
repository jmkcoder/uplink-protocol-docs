import { describe, expect, it, beforeEach, vi, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CookieConsent from '../components/ui/cookie-consent';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
})();

describe('CookieConsent', () => {
  beforeEach(() => {
    // Setup localStorage mock
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    localStorageMock.clear();
    
    // Mock setTimeout
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the consent banner after a delay', () => {
    const onAccept = vi.fn();
    const onDecline = vi.fn();
    
    render(<CookieConsent onAccept={onAccept} onDecline={onDecline} />);
    
    // Banner should not be visible initially
    expect(screen.queryByText(/We use analytics cookies/)).toBeNull();
    
    // Advance timer to show banner
    vi.advanceTimersByTime(1100);
    
    // Banner should now be visible
    expect(screen.getByText(/We use analytics cookies/)).toBeInTheDocument();
  });

  it('saves choice in localStorage when accepted', () => {
    const onAccept = vi.fn();
    const onDecline = vi.fn();
    
    render(<CookieConsent onAccept={onAccept} onDecline={onDecline} />);
    vi.advanceTimersByTime(1100);
    
    fireEvent.click(screen.getByText('Accept'));
    
    expect(localStorageMock.getItem('analytics-consent')).toBe('accepted');
    expect(onAccept).toHaveBeenCalled();
  });

  it('saves choice in localStorage when declined', () => {
    const onAccept = vi.fn();
    const onDecline = vi.fn();
    
    render(<CookieConsent onAccept={onAccept} onDecline={onDecline} />);
    vi.advanceTimersByTime(1100);
    
    fireEvent.click(screen.getByText('Decline'));
    
    expect(localStorageMock.getItem('analytics-consent')).toBe('declined');
    expect(onDecline).toHaveBeenCalled();
  });

  it('does not show banner if consent has already been saved', () => {
    localStorageMock.setItem('analytics-consent', 'accepted');
    
    const onAccept = vi.fn();
    const onDecline = vi.fn();
    
    render(<CookieConsent onAccept={onAccept} onDecline={onDecline} />);
    vi.advanceTimersByTime(1100);
    
    expect(screen.queryByText(/We use analytics cookies/)).toBeNull();
  });
});
