'use client';

import Script from 'next/script';
import { useEffect } from 'react';

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

export default function GoogleAdSense({
  adClient = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT || 'ca-pub-XXXXXXXXX',
  adSlot,
  adFormat = 'auto',
  adStyle = { display: 'block' }
}: GoogleAdSenseProps) {
  useEffect(() => {
    if (!adClient || adClient === 'ca-pub-XXXXXXXXX') {
      console.warn('Google AdSense Client ID not configured');
      return;
    }

    // Initialize AdSense
    if (window.adsbygoogle) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, [adClient, adSlot]);

  if (!adClient || adClient === 'ca-pub-XXXXXXXXX') {
    return null;
  }

  return (
    <>
      {/* Google AdSense Script */}
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      
      {/* Ad Unit */}
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
