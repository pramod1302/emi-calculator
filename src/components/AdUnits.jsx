import React, { useEffect } from 'react';

// ==========================================
// ADSENSE CONFIGURATION
// ==========================================
const ADSENSE_CLIENT = 'ca-pub-5084091271054913'; // REPLACE WITH YOUR CLIENT ID
const AD_SLOTS = {
  TOP_BANNER: '8753816890',        // REPLACE WITH YOUR AD SLOT
  BOTTOM_BANNER: '8965303955',     // REPLACE WITH YOUR AD SLOT
  SIDEBAR: '9937926110',           // REPLACE WITH YOUR AD SLOT
  IN_FEED: '6127653550',           // REPLACE WITH YOUR AD SLOT
};

// Initialize AdSense
export const initializeAds = () => {
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch (error) {
    console.log('AdSense not loaded');
  }
};

// ==========================================
// AD UNIT COMPONENTS
// ==========================================

// Top Banner Ad
export const TopBannerAd = () => {
  useEffect(() => {
    initializeAds();
  }, []);

  return (
    <div id="ad-top" className="w-full min-h-[90px] bg-transparent mb-6">
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={AD_SLOTS.TOP_BANNER}
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
    </div>
  );
};

// Bottom Banner Ad
export const BottomBannerAd = () => {
  useEffect(() => {
    initializeAds();
  }, []);

  return (
    <div id="ad-bottom" className="w-full min-h-[90px] bg-transparent mt-8">
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={AD_SLOTS.BOTTOM_BANNER}
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
    </div>
  );
};

// Sidebar Ad (Desktop Only)
export const SidebarAd = () => {
  useEffect(() => {
    initializeAds();
  }, []);

  return (
    <div id="ad-sidebar" className="hidden lg:block sticky top-24 min-h-[600px] bg-transparent">
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={AD_SLOTS.SIDEBAR}
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
    </div>
  );
};

// In-Feed Ad (Appears within content)
export const InFeedAd = () => {
  useEffect(() => {
    initializeAds();
  }, []);

  return (
    <div id="ad-infeed" className="w-full min-h-[90px] bg-transparent my-4">
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={AD_SLOTS.IN_FEED}
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
    </div>
  );
};

// ==========================================
// DEFAULT EXPORT - All Ads Component
// ==========================================
const AdUnits = {
  TopBannerAd,
  BottomBannerAd,
  SidebarAd,
  InFeedAd,
};

export default AdUnits;