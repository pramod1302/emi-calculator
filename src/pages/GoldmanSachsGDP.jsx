import React from 'react';

function GoldmanSachsGDP() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm">
          ← Back to Calculator
        </a>

        <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <header className="mb-8">
            <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
              <span className="text-blue-600 dark:text-blue-400 font-medium">Economy</span>
              <span>|</span>
              <span>5 min read</span>
              <span>|</span>
              <span>August 7, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              Goldman Sachs Upgrades India's 2026 GDP Growth Forecast to 6.8%
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              US-Iran peace deal and lower crude oil prices drive upgrade, with inflation outlook improving
            </p>
          </header>

          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl p-6 text-white mb-8">
            <p className="text-sm font-semibold opacity-80 mb-3">KEY HIGHLIGHTS</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>GDP growth forecast raised by <span className="font-bold">0.3 percentage points</span> to 6.8% for CY26</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Retail inflation projection lowered to <span className="font-bold">4.4%</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Current account deficit seen at <span className="font-bold">1.1%</span> of GDP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Oil price forecast reduced: <span className="font-bold">$82/bbl</span> vs $92/bbl earlier</span>
              </li>
            </ul>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Why the Upgrade?</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Goldman Sachs has raised India's GDP growth forecast for 2026 to <strong>6.8%</strong>, up 0.3 percentage points from its earlier projection. The upgrade follows the <strong>US-Iran peace deal</strong>, which has helped stabilize crude oil prices and eased supply chain concerns.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-3">
              The global investment bank now expects crude oil prices to average <strong>$82 per barrel</strong> in Q3-Q4 CY26, compared to its previous estimate of $92 per barrel. This has several positive implications for the Indian economy.
            </p>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Impact on Key Economic Indicators</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 text-center">
                <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">GDP Growth</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">6.8%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Up from 6.5%</p>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-5 text-center">
                <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">Retail Inflation</p>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">4.4%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Down from 4.7%</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5 text-center">
                <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">Current Account Deficit</p>
                <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">1.1%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Of GDP</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">What This Means for India</h2>
            <ul className="list-disc pl-5 text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <li><span className="font-bold">Lower oil prices</span> reduce India's import bill and help contain fiscal deficit</li>
              <li><span className="font-bold">Weaker dollar</span> improves capital flows and strengthens the rupee</li>
              <li><span className="font-bold">Improved inflation outlook</span> keeps RBI flexible on rates</li>
              <li><span className="font-bold">India remains</span> the fastest-growing major economy</li>
            </ul>
          </section>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-300">
              <span className="font-bold">📌 Key Insight:</span> The US-Iran peace deal is a game changer for India's energy security. Lower oil prices not only boost growth but also reduce inflationary pressures.
            </p>
          </div>

          <section className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <p className="font-bold text-slate-800 dark:text-white mb-2">Plan Your Investments</p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">Use our calculators to plan your financial future.</p>
            <a href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Use Our Free Calculator →
            </a>
          </section>

          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-400">Source: Goldman Sachs Research Report, August 2026</p>
          </div>
        </article>

        <div className="mt-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/rbi-repo-rate-august-2026" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Read</p>
              <p className="font-medium text-slate-800 dark:text-white mt-1">RBI MPC Keeps Policy Rate Unchanged at 5.25%</p>
            </a>
            <a href="/sebi-mf-pms-proposal" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Read</p>
              <p className="font-medium text-slate-800 dark:text-white mt-1">SEBI Proposes Mutual Fund-Only PMS</p>
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

export default GoldmanSachsGDP;