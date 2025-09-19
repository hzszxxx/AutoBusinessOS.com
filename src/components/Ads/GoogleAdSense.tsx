'use client';

import { useEffect } from 'react';

// Extend Window interface for AdSense
declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface GoogleAdSenseProps {
  adClient?: string;
  adSlot?: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  adStyle?: {
    display?: 'block' | 'inline-block';
    width?: string;
    height?: string;
  };
}

// Auto Ads component for Google AdSense Auto placement
export function AutoAds() {
  useEffect(() => {
    // Push auto ads config to AdSense - only on client
    const initializeAutoAds = () => {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-6923393739488910",
            enable_page_level_ads: true
          });
        } catch (error) {
          console.log('AdSense auto ads initialization deferred');
        }
      }
    };

    // Delay initialization to ensure DOM is ready
    const timer = setTimeout(initializeAutoAds, 100);
    return () => clearTimeout(timer);
  }, []);

  return null; // Auto ads don't need a visible component
}

export default function GoogleAdSense({
  adClient = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT || 'ca-pub-6923393739488910',
  adSlot,
  adFormat = 'auto',
  adStyle = { display: 'block' }
}: GoogleAdSenseProps) {
  useEffect(() => {
    if (!adClient || adClient === 'ca-pub-XXXXXXXXX') {
      console.warn('Google AdSense Client ID not configured');
      return;
    }

    // Initialize AdSense for manual ad units
    if (adSlot && window.adsbygoogle) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, [adClient, adSlot]);

  if (!adClient || adClient === 'ca-pub-XXXXXXXXX') {
    return null;
  }

  return (
    <>
      {/* Ad Unit - Script already loaded in head */}
      {adSlot && (
        <ins
          className="adsbygoogle"
          style={adStyle}
          data-ad-client={adClient}
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-full-width-responsive="true"
        />
      )}
    </>
  );
}

// Ad unit components for different placements
export const HeaderAd = () => (
  <GoogleAdSense
    adSlot="1234567890"
    adFormat="horizontal"
    adStyle={{ display: 'block', width: '100%', height: '90px' }}
  />
);

export const SidebarAd = () => (
  <GoogleAdSense
    adSlot="0987654321"
    adFormat="vertical"
    adStyle={{ display: 'block', width: '300px', height: '600px' }}
  />
);

export const InContentAd = () => (
  <GoogleAdSense
    adSlot="1122334455"
    adFormat="rectangle"
    adStyle={{ display: 'block', width: '100%', height: '250px' }}
  />
);

export const FooterAd = () => (
  <GoogleAdSense
    adSlot="5566778899"
    adFormat="horizontal"
    adStyle={{ display: 'block', width: '100%', height: '90px' }}
  />
);

// Responsive ad unit
export const ResponsiveAd = ({ adSlot }: { adSlot: string }) => (
  <GoogleAdSense
    adSlot={adSlot}
    adFormat="auto"
    adStyle={{ display: 'block', width: '100%' }}
  />
);
