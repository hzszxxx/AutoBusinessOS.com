'use client';

import { useEffect, useRef } from 'react';
import { trackEngagementConversion, trackHighValuePageView } from './GoogleAds';
import { trackEvent, trackPageDepth } from './GoogleAnalytics';

interface PageEngagementProps {
  pagePath: string;
  estimatedValue?: number;
  trackScroll?: boolean;
  trackTime?: boolean;
  scrollThreshold?: number;
  timeThreshold?: number;
}

export default function PageEngagement({
  pagePath,
  estimatedValue = 25,
  trackScroll = true,
  trackTime = true,
  scrollThreshold = 75,
  timeThreshold = 300
}: PageEngagementProps) {
  const startTime = useRef<number>(Date.now());
  const maxScroll = useRef<number>(0);
  const hasTrackedScroll = useRef<boolean>(false);
  const hasTrackedTime = useRef<boolean>(false);
  const hasTrackedPageView = useRef<boolean>(false);

  useEffect(() => {
    // Track initial page view
    if (!hasTrackedPageView.current) {
      trackEvent('page_view', {
        category: 'navigation',
        label: pagePath,
        page_path: pagePath
      });
      trackHighValuePageView(pagePath, estimatedValue);
      hasTrackedPageView.current = true;
    }

    // Track scroll depth
    if (trackScroll) {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent > maxScroll.current) {
          maxScroll.current = scrollPercent;
        }

        // Track scroll milestones
        if (scrollPercent >= 25 && !hasTrackedScroll.current) {
          trackPageDepth(25);
        } else if (scrollPercent >= 50 && !hasTrackedScroll.current) {
          trackPageDepth(50);
        } else if (scrollPercent >= scrollThreshold && !hasTrackedScroll.current) {
          trackPageDepth(scrollThreshold);
          trackEngagementConversion('scroll_depth', scrollThreshold);
          hasTrackedScroll.current = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [pagePath, estimatedValue, trackScroll, scrollThreshold]);

  useEffect(() => {
    // Track time on page
    if (trackTime) {
      const timeInterval = setInterval(() => {
        const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);
        
        // Track time milestones
        if (timeSpent >= 30 && !hasTrackedTime.current) {
          trackEvent('time_on_page', {
            category: 'engagement',
            label: '30_seconds',
            value: 30,
            page_path: pagePath
          });
        } else if (timeSpent >= 60 && !hasTrackedTime.current) {
          trackEvent('time_on_page', {
            category: 'engagement',
            label: '1_minute',
            value: 60,
            page_path: pagePath
          });
        } else if (timeSpent >= timeThreshold && !hasTrackedTime.current) {
          trackEvent('time_on_page', {
            category: 'engagement',
            label: `${timeThreshold}_seconds`,
            value: timeThreshold,
            page_path: pagePath
          });
          trackEngagementConversion('time_on_page', timeThreshold);
          hasTrackedTime.current = true;
        }
      }, 1000);

      return () => clearInterval(timeInterval);
    }
  }, [pagePath, trackTime, timeThreshold]);

  // Track page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);
        if (timeSpent > 0) {
          trackEvent('time_on_page', {
            category: 'engagement',
            label: 'page_hidden',
            value: timeSpent,
            page_path: pagePath
          });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [pagePath]);

  // Track beforeunload for final time tracking
  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);
      if (timeSpent > 0) {
        trackEvent('time_on_page', {
          category: 'engagement',
          label: 'page_unload',
          value: timeSpent,
          page_path: pagePath
        });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [pagePath]);

  return null; // This component doesn't render anything
}
