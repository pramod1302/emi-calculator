import React from 'react';
import { TopBannerAd, BottomBannerAd, InContentAd } from './AdUnits';

function PageLayout({ children, showInContent = true }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm">
          ← Back to Calculator
        </a>
        
        {/* TOP BANNER */}
        <TopBannerAd />
        
        {/* MAIN CONTENT */}
        {children}
        
        {/* IN-CONTENT AD */}
        {showInContent && <InContentAd />}
        
        {/* BOTTOM BANNER */}
        <BottomBannerAd />
        
        <div className="mt-6 text-center text-xs text-slate-400">
          © 2026 <span className="text-blue-600 font-medium">Truyon</span>
        </div>
      </div>
    </div>
  );
}

export default PageLayout;