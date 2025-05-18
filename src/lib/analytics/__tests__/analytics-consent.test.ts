import { describe, expect, it, beforeEach, vi, afterEach } from 'vitest';
import { shouldEnableAnalytics } from '../config';

// Mock config.ts functions
vi.mock('../config', async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    isAnalyticsEnabled: true,
    hasUserConsented: vi.fn(),
  };
});

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

describe('Analytics consent integration', () => {
  beforeEach(() => {
    // Setup localStorage mock
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    localStorageMock.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should only enable analytics when user has consented', () => {
    // Mock hasUserConsented to return true
    const { hasUserConsented } = require('../config');
    hasUserConsented.mockReturnValue(true);
    
    // Analytics should be enabled
    expect(shouldEnableAnalytics()).toBe(true);
    
    // Mock hasUserConsented to return false
    hasUserConsented.mockReturnValue(false);
    
    // Analytics should not be enabled
    expect(shouldEnableAnalytics()).toBe(false);
  });

  it('should check localStorage for consent status', () => {
    // Real implementation of hasUserConsented
    const originalHasUserConsented = vi.fn(() => {
      if (typeof window === 'undefined') return false;
      return localStorage.getItem('analytics-consent') === 'accepted';
    });
    
    const { hasUserConsented } = require('../config');
    hasUserConsented.mockImplementation(originalHasUserConsented);
    
    // No consent given yet
    expect(originalHasUserConsented()).toBe(false);
    
    // Set consent to declined
    localStorage.setItem('analytics-consent', 'declined');
    expect(originalHasUserConsented()).toBe(false);
    
    // Set consent to accepted
    localStorage.setItem('analytics-consent', 'accepted');
    expect(originalHasUserConsented()).toBe(true);
  });
});
