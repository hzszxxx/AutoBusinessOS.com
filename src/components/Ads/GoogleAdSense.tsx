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
// These components read ad slot IDs from environment variables
// Configure them in .env.local or Vercel environment variables
// See ADSENSE_AD_UNITS_SETUP_GUIDE.md for setup instructions

export const HeaderAd = () => {
  const adSlot = process.env.NEXT_PUBLIC_ADSENSE_HEADER_AD_SLOT;
  
  // Don't render if ad slot is not configured
  if (!adSlot || adSlot === '1234567890') {
    return null;
  }
  
  return (
    <GoogleAdSense
      adSlot={adSlot}
      adFormat="horizontal"
      adStyle={{ display: 'block', width: '100%', height: '90px' }}
    />
  );
};

export const SidebarAd = () => {
  const adSlot = process.env.NEXT_PUBLIC_ADSENSE_SIDEBAR_AD_SLOT;
  
  if (!adSlot || adSlot === '0987654321') {
    return null;
  }
  
  return (
    <GoogleAdSense
      adSlot={adSlot}
      adFormat="vertical"
      adStyle={{ display: 'block', width: '300px', height: '600px' }}
    />
  );
};

export const InContentAd = () => {
  const adSlot = process.env.NEXT_PUBLIC_ADSENSE_INCONTENT_AD_SLOT;
  
  if (!adSlot || adSlot === '1122334455') {
    return null;
  }
  
  return (
    <GoogleAdSense
      adSlot={adSlot}
      adFormat="rectangle"
      adStyle={{ display: 'block', width: '100%', height: '250px' }}
    />
  );
};

export const FooterAd = () => {
  const adSlot = process.env.NEXT_PUBLIC_ADSENSE_FOOTER_AD_SLOT;
  
  if (!adSlot || adSlot === '5566778899') {
    return null;
  }
  
  return (
    <GoogleAdSense
      adSlot={adSlot}
      adFormat="horizontal"
      adStyle={{ display: 'block', width: '100%', height: '90px' }}
    />
  );
};

// Responsive ad unit
export const ResponsiveAd = ({ adSlot }: { adSlot: string }) => (
  <GoogleAdSense
    adSlot={adSlot}
    adFormat="auto"
    adStyle={{ display: 'block', width: '100%' }}
  />
);
