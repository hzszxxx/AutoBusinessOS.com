'use client';

import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
}

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export function WebVitals() {
  useEffect(() => {
    // Dynamically import web-vitals
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(sendToGoogleAnalytics);
      onINP(sendToGoogleAnalytics); // INP replaces FID
      onFCP(sendToGoogleAnalytics);
      onLCP(sendToGoogleAnalytics);
      onTTFB(sendToGoogleAnalytics);
    });
  }, []);

  return null;
}

function sendToGoogleAnalytics({ name, value, id }: WebVitalsMetric) {
  // Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      event_label: id,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      non_interaction: true,
    });
  }

  // Performance logging in development environment
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', { name, value, id });
  }

  // Performance threshold warnings
  const thresholds = {
    LCP: 2500, // Largest Contentful Paint
    INP: 200,  // Interaction to Next Paint (replaces FID)
    CLS: 0.1,  // Cumulative Layout Shift
    FCP: 1800, // First Contentful Paint
    TTFB: 800, // Time to First Byte
  };

  const threshold = thresholds[name as keyof typeof thresholds];
  if (threshold && value > threshold) {
    console.warn(`Performance warning: ${name} (${value}) exceeds threshold (${threshold})`);
  }
}