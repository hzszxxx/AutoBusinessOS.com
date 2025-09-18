'use client';

import Script from 'next/script';

interface GoogleAdsProps {
  conversionId?: string;
}

// gtag global types already declared in GoogleAnalytics.tsx

export default function GoogleAds({
  conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || 'AW-XXXXXXXXX'
}: GoogleAdsProps) {
  if (!conversionId || conversionId === 'AW-XXXXXXXXX') {
    return null;
  }

  return (
    <Script id="google-ads-config" strategy="afterInteractive">
      {`
        // Google Ads conversion tracking configuration
        gtag('config', '${conversionId}');

        // Enhanced conversion settings
        gtag('config', '${conversionId}', {
          allow_enhanced_conversions: true
        });
      `}
    </Script>
  );
}

// Conversion tracking function
export const trackAdConversion = (
  conversionLabel: string,
  value?: number,
  currency: string = 'CNY',
  transactionId?: string
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;

    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
      value: value,
      currency: currency,
      transaction_id: transactionId,
    });
  }
};

// Predefined conversion events
export const AdConversions = {
  // ROI calculator completion
  ROI_CALCULATOR_COMPLETE: 'roi_calculator_complete',

  // Email subscription
  EMAIL_SUBSCRIPTION: 'email_subscription',

  // Contact form submission
  CONTACT_FORM_SUBMIT: 'contact_form_submit',

  // Resource download
  RESOURCE_DOWNLOAD: 'resource_download',

  // Page depth browsing
  PAGE_ENGAGEMENT: 'page_engagement',

  // Solution page view
  SOLUTION_PAGE_VIEW: 'solution_page_view',

  // Tool usage
  TOOL_USAGE: 'tool_usage'
};

// ROI calculator conversion tracking
export const trackROICalculatorConversion = (
  calculatedValue: number,
  userEmail?: string
) => {
  trackAdConversion(
    AdConversions.ROI_CALCULATOR_COMPLETE,
    calculatedValue,
    'CNY',
    `roi_${Date.now()}`
  );

  // Enhanced conversion data
  if (userEmail && typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_data', {
      email_address: userEmail,
    });
  }
};

// Email subscription conversion tracking
export const trackEmailSubscriptionConversion = (
  email: string,
  source: string = 'unknown'
) => {
  trackAdConversion(
    AdConversions.EMAIL_SUBSCRIPTION,
    50, // Estimated value $50
    'CNY',
    `email_${Date.now()}`
  );

  // Set user data
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_data', {
      email_address: email,
    });

    // Track subscription source
    window.gtag('event', 'email_subscription_source', {
      event_category: 'conversion',
      event_label: source,
      subscription_source: source
    });
  }
};

// High-value page view conversion
export const trackHighValuePageView = (
  pagePath: string,
  estimatedValue: number = 25
) => {
  trackAdConversion(
    AdConversions.SOLUTION_PAGE_VIEW,
    estimatedValue,
    'CNY',
    `page_${Date.now()}`
  );
};

// User engagement conversion tracking
export const trackEngagementConversion = (
  engagementType: 'scroll_depth' | 'time_on_page' | 'multiple_pages',
  value: number
) => {
  let conversionValue = 0;

  switch (engagementType) {
    case 'scroll_depth':
      conversionValue = value > 75 ? 20 : 10; // Deep scrolling is more valuable
      break;
    case 'time_on_page':
      conversionValue = value > 300 ? 30 : 15; // High value for 5+ minutes stay
      break;
    case 'multiple_pages':
      conversionValue = value * 10; // $10 value per page view
      break;
  }

  trackAdConversion(
    AdConversions.PAGE_ENGAGEMENT,
    conversionValue,
    'CNY',
    `engagement_${Date.now()}`
  );
};

// Smart bidding optimization
export const setSmartBiddingSignals = (
  userType: 'new' | 'returning',
  trafficSource: string,
  deviceType: 'mobile' | 'desktop' | 'tablet'
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      user_type: userType,
      traffic_source: trafficSource,
      device_type: deviceType,
      timestamp: Date.now()
    });
  }
};