import React from 'react';
import { Helmet } from 'react-helmet';
import { TopBannerAd, BottomBannerAd } from '../components/AdUnits';

function StateGSecAuction() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <Helmet>
        <title>RBI Announces Auction of State Government Securities worth ₹15,300 Crore</title>
        <meta name="description" content="RBI to conduct auction of State Government Securities (SGS) on August 11, 2026, for an aggregate amount of ₹15,300 crore." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <a href="/blog" className="inline-flex items-center text-blue-600 hover:underline mb-6 text-sm">← Back to Blog</a>
        
        <TopBannerAd />

        <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">RBI Announces Auction of State Government Securities worth ₹15,300 Crore</h1>
            <p className="text-slate-500 mt-2">August 8, 2026 | RBI Policy Updates</p>
          </header>

          <section className="text-slate-700 dark:text-slate-300 leading-relaxed">
            <p className="mb-4">
              The Reserve Bank of India (RBI) has announced that several State Governments will offer to sell stocks by way of auction for an aggregate amount of <strong>₹15,300 Crore</strong>.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">Key Details:</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><strong>Auction Date:</strong> August 11, 2026 (Tuesday)</li>
              <li><strong>Participating States:</strong> Andhra Pradesh, Gujarat, Maharashtra, Meghalaya, Punjab, and Rajasthan.</li>
              <li><strong>Settlement Date:</strong> August 12, 2026</li>
              <li><strong>Platform:</strong> RBI Core Banking Solution (E-Kuber) system.</li>
            </ul>
            <p>
              Individual investors can participate in this auction through the 
              <a href="https://rbiretaildirect.org.in" className="text-blue-600 hover:underline mx-1">RBI Retail Direct portal</a>.
            </p>
          </section>
        </article>

        <BottomBannerAd />
      </div>
    </div>
  );
}

export default StateGSecAuction;