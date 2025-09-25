'use client';

import { useEffect, useRef } from 'react';
import { trackEvent, trackPageDepth } from '@/components/Analytics/GoogleAnalytics';
import { trackHighValuePageView, setSmartBiddingSignals } from '@/components/Analytics/GoogleAds';

interface AnalyticsConfig {
  trackScrollDepth?: boolean;
  trackTimeOnPage?: boolean;
  trackPageValue?: number;
  highValuePage?: boolean;
}

export function useAnalytics(config: AnalyticsConfig = {}) {
  const {
    trackScrollDepth = true,
    trackTimeOnPage = true,
    trackPageValue,
    highValuePage = false
  } = config;

  const startTime = useRef<number>(Date.now());
  const maxScrollDepth = useRef<number>(0);
  const hasTrackedEngagement = useRef<boolean>(false);

  useEffect(() => {
    // Detect user type
    const isReturningUser = localStorage.getItem('user_visited') === 'true';
    const userType = isReturningUser ? 'returning' : 'new';

    // Detect device type
    const deviceType = window.innerWidth <= 768 ? 'mobile' :
                      window.innerWidth <= 1024 ? 'tablet' : 'desktop';

    // Detect traffic source
    const trafficSource = document.referrer ?
      new URL(document.referrer).hostname : 'direct';

    // Set smart bidding signals
    setSmartBiddingSignals(userType, trafficSource, deviceType);

    // Mark user as visited
    localStorage.setItem('user_visited', 'true');

    // High value page tracking
    if (highValuePage && trackPageValue) {
      trackHighValuePageView(window.location.pathname, trackPageValue);
    }

    // Scroll depth tracking
    const handleScroll = () => {
      if (!trackScrollDepth) return;

      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent > maxScrollDepth.current) {
        maxScrollDepth.current = scrollPercent;

        // Track key scroll milestones
        if ([25, 50, 75, 90].includes(scrollPercent)) {
          trackPageDepth(scrollPercent);
        }

        // Deep engagement conversion tracking
        if (scrollPercent >= 75 && !hasTrackedEngagement.current) {
          hasTrackedEngagement.current = true;
          trackEvent('deep_engagement', {
            category: 'engagement',
            label: 'scroll_75_percent',
            value: 75,
            engagement_type: 'deep_scroll'
          });
        }
      }
    };

    // Track time when leaving page
    const handleBeforeUnload = () => {
      if (!trackTimeOnPage) return;

      const timeOnPage = Math.round((Date.now() - startTime.current) / 1000);

      trackEvent('time_on_page', {
        category: 'engagement',
        label: 'page_exit',
        value: timeOnPage,
        time_spent: timeOnPage
      });

      // High engagement conversion tracking
      if (timeOnPage > 120) { // Over 2 minutes
        trackEvent('high_engagement', {
          category: 'engagement',
          label: 'long_session',
          value: timeOnPage,
          engagement_type: 'time_spent'
        });
      }
    };

    // Page visibility change tracking
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Record time when page is hidden
        const sessionTime = Date.now() - startTime.current;
        if (sessionTime > 30000) { // Only record if over 30 seconds
          trackEvent('page_visibility', {
            category: 'engagement',
            label: 'page_hidden',
            value: Math.round(sessionTime / 1000),
            session_duration: sessionTime
          });
        }
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial page view tracking
    trackEvent('page_view_enhanced', {
      category: 'navigation',
      label: window.location.pathname,
      page_path: window.location.pathname,
      page_title: document.title,
      user_type: userType,
      device_type: deviceType,
      traffic_source: trafficSource
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [trackScrollDepth, trackTimeOnPage, trackPageValue, highValuePage]);

  // Return tracking functions for component use
  return {
    trackCustomEvent: trackEvent,
    getSessionTime: () => Date.now() - startTime.current,
    getMaxScrollDepth: () => maxScrollDepth.current
  };
}

// Analytics configurations for specific pages
export const AnalyticsPageConfigs = {
  homepage: {
    trackScrollDepth: true,
    trackTimeOnPage: true,
    trackPageValue: 30,
    highValuePage: true
  },

  solutions: {
    trackScrollDepth: true,
    trackTimeOnPage: true,
    trackPageValue: 50,
    highValuePage: true
  },

  roiCalculator: {
    trackScrollDepth: true,
    trackTimeOnPage: true,
    trackPageValue: 100,
    highValuePage: true
  },

  resources: {
    trackScrollDepth: true,
    trackTimeOnPage: true,
    trackPageValue: 25,
    highValuePage: false
  },

  industries: {
    trackScrollDepth: true,
    trackTimeOnPage: true,
    trackPageValue: 40,
    highValuePage: true
  }
};