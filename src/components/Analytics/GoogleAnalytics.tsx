'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

// gtag global types defined in src/types/gtag.d.ts

export default function GoogleAnalytics({
  measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'
}: GoogleAnalyticsProps) {
  useEffect(() => {
    if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
      console.warn('Google Analytics Measurement ID not configured');
      return;
    }

    // Configure default parameters
    if (window.gtag) {
      window.gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [measurementId]);

  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    return null;
  }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
            // Enhanced ecommerce
            allow_enhanced_conversions: true,
            // Privacy configuration
            anonymize_ip: false,
            // Marketing attribution
            conversion_linker: true,
            // Custom parameters
            custom_map: {
              'custom_parameter_1': 'user_type',
              'custom_parameter_2': 'traffic_source'
            }
          });

          // Set user properties
          gtag('config', '${measurementId}', {
            user_properties: {
              platform: 'web',
              language: navigator.language,
              screen_resolution: screen.width + 'x' + screen.height
            }
          });

          // Enhanced page view event
          gtag('event', 'page_view', {
            event_category: 'engagement',
            event_label: 'initial_load',
            custom_parameter_1: 'unknown',
            custom_parameter_2: document.referrer || 'direct'
          });
        `}
      </Script>
    </>
  );
}

// Custom event tracking function
export const trackEvent = (
  eventName: string,
  parameters: Record<string, unknown> = {}
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'general',
      event_label: parameters.label,
      value: parameters.value,
      ...parameters,
    });
  }
};

// Conversion event tracking
export const trackConversion = (
  conversionAction: string,
  value?: number,
  currency: string = 'CNY'
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionAction,
      value: value,
      currency: currency,
      event_category: 'conversion',
      event_label: conversionAction,
    });
  }
};

// ROI calculator usage tracking
export const trackROICalculator = (
  action: 'start' | 'calculate' | 'email_submit',
  value?: number
) => {
  trackEvent('roi_calculator', {
    category: 'tool_usage',
    label: action,
    value: value,
    tool_name: 'roi_calculator',
    engagement_type: action
  });
};

// Page depth tracking
export const trackPageDepth = (depth: number) => {
  trackEvent('page_depth', {
    category: 'engagement',
    label: `depth_${depth}`,
    value: depth,
    engagement_type: 'scroll_depth'
  });
};

// Form tracking
export const trackFormEvent = (
  formName: string,
  action: 'start' | 'submit' | 'error',
  fieldName?: string
) => {
  trackEvent('form_interaction', {
    category: 'form',
    label: `${formName}_${action}`,
    form_name: formName,
    form_action: action,
    field_name: fieldName,
  });
};