import React from 'react';
import { Helmet } from 'react-helmet';
import { TopBannerAd, InFeedAd, BottomBannerAd } from '../components/AdUnits';

function IncomeTaxRules2026() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <Helmet>
        <title>New Income Tax Rules 2026: HRA, Capital Gains & More - Truyon Finance</title>
        <meta name="description" content="CBDT notifies Income-tax Rules 2026 effective April 1, 2026. Learn about expanded HRA exemption cities, capital gains reporting, and new forms." />
        <link rel="canonical" href="https://finance.truyon.com/income-tax-rules-2026" />
        <meta property="og:title" content="New Income Tax Rules 2026: HRA, Capital Gains & More" />
        <meta property="og:description" content="CBDT notifies Income-tax Rules 2026 effective April 1, 2026, implementing the new Income-tax Act, 2025." />
        <meta property="og:url" content="https://finance.truyon.com/income-tax-rules-2026" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <a href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm">
          ← Back to Calculator
        </a>

        {/* TOP BANNER AD */}
        <TopBannerAd />

        <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <header className="mb-8">
            <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
              <span className="text-blue-600 dark:text-blue-400 font-medium">Tax Rules</span>
              <span>|</span>
              <span>6 min read</span>
              <span>|</span>
              <span>August 7, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              New Income Tax Rules 2026: Key Changes for HRA, Capital Gains & More
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              CBDT notifies Income-tax Rules 2026 effective April 1, 2026, implementing the new Income-tax Act, 2025
            </p>
          </header>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white mb-8">
            <p className="text-sm font-semibold opacity-80 mb-3">KEY HIGHLIGHTS</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span><span className="font-bold">8 cities</span> now qualify for 50% HRA exemption (up from 6)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Taxpayers must disclose relationship with landlord in <span className="font-bold">Form 124</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Stricter compliance for stock exchanges and capital gains reporting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Simplified compliance framework with <span className="font-bold">new forms</span></span>
              </li>
            </ul>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">HRA Exemption Rules Expanded</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              The Income-tax Rules, 2026, which came into effect from April 1, 2026, have expanded the list of cities eligible for higher House Rent Allowance (HRA) exemption.
            </p>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 my-4">
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">Cities Qualifying for 50% HRA Exemption (New)</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-lg text-xs font-medium text-center">Delhi</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-lg text-xs font-medium text-center">Mumbai</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-lg text-xs font-medium text-center">Chennai</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-lg text-xs font-medium text-center">Kolkata</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-lg text-xs font-medium text-center">Bengaluru</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-lg text-xs font-medium text-center">Hyderabad</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-lg text-xs font-medium text-center">Ahmedabad</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-lg text-xs font-medium text-center">Pune</span>
              </div>
              <p className="text-xs text-slate-500 mt-2">Previously only Delhi, Mumbai, Chennai, and Kolkata qualified</p>
            </div>

            {/* IN-FEED AD */}
            <InFeedAd />
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Capital Gains Reporting Rules</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              The new rules introduce stricter compliance requirements for capital gains reporting, particularly for stock exchange transactions. Taxpayers must now provide more detailed information about capital gains from listed securities.
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg mt-3">
              <p className="text-sm text-amber-800 dark:text-amber-300">
                <span className="font-bold">⚠️ Important:</span> Investors trading on stock exchanges must ensure accurate reporting of all capital gains transactions to avoid notices from the tax authorities.
              </p>
            </div>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">New Forms and Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-slate-800 dark:text-white">Form 124</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Taxpayers must now disclose their relationship with the landlord when claiming HRA exemption.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-slate-800 dark:text-white">Simplified Forms</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">The new rules introduce simplified compliance framework with redesigned forms for easier filing.</p>
              </div>
            </div>

            {/* IN-FEED AD */}
            <InFeedAd />
          </section>

          <section className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <p className="font-bold text-slate-800 dark:text-white mb-2">Calculate Your Taxes</p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">Use our calculators to plan your taxes.</p>
            <a href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Use Our Free Calculator →
            </a>
          </section>

          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-400">Source: CBDT Notification, Income-tax Rules 2026</p>
          </div>
        </article>

        {/* BOTTOM BANNER AD */}
        <BottomBannerAd />

        <div className="mt-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/budget-2026" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Read</p>
              <p className="font-medium text-slate-800 dark:text-white mt-1">Union Budget 2026-27: Key Highlights</p>
            </a>
            <a href="/home-loan-tips" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Read</p>
              <p className="font-medium text-slate-800 dark:text-white mt-1">How to Save ₹5 Lakh on Home Loan Interest</p>
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-400">
          © 2026 <span className="text-blue-600 font-medium">Truyon</span>
        </div>
      </div>
    </div>
  );
}

export default IncomeTaxRules2026;