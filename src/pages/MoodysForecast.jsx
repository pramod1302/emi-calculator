import React from 'react';

function MoodysForecast() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm">
          ← Back to Calculator
        </a>

        <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <header className="mb-8">
            <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
              <span className="text-red-600 dark:text-red-400 font-medium">Economy</span>
              <span>|</span>
              <span>5 min read</span>
              <span>|</span>
              <span>August 7, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              Moody's Lowers India's 2026 GDP Growth Forecast to 6%
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              Rating agency cites weaker private consumption, slower investments, and high energy costs as headwinds
            </p>
          </header>

          <div className="bg-gradient-to-br from-red-600 to-orange-700 rounded-xl p-6 text-white mb-8">
            <p className="text-sm font-semibold opacity-80 mb-3">KEY HIGHLIGHTS</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>GDP growth forecast cut by <span className="font-bold">80 basis points</span> to 6%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>FY27 growth also lowered by <span className="font-bold">0.5 percentage points</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>India remains <span className="font-bold">fastest-growing</span> major economy despite downgrade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Weaker private consumption and investment cited as key factors</span>
              </li>
            </ul>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Why Moody's Lowered India's Growth Forecast</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Moody's has cut India's GDP growth forecast for 2026 to <strong>6%</strong>, down 80 basis points from its earlier projection. The rating agency attributed the downgrade to <strong>weaker private consumption</strong>, <strong>slower investment activity</strong>, and <strong>persistently high energy costs</strong>.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-3">
              For FY27, the agency has also lowered its growth estimate by 0.5 percentage points, reflecting a more cautious outlook on India's economic trajectory over the medium term.
            </p>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Key Factors Cited by Moody's</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 text-center">
                <p className="text-sm font-semibold text-red-800 dark:text-red-300">Weaker Private Consumption</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Rural demand remains subdued, urban spending showing signs of fatigue</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 text-center">
                <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">Slower Investment Activity</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Private capex still lagging, government spending not fully compensating</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 text-center">
                <p className="text-sm font-semibold text-orange-800 dark:text-orange-300">High Energy Costs</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Crude oil and imported energy continue to strain the current account</p>
              </div>
            </div>
          </section>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-300">
              <span className="font-bold">📌 Key Insight:</span> Despite the downgrade, India remains the fastest-growing major economy. The 6% growth forecast is still significantly higher than most other large economies.
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
            <p className="text-xs text-slate-400">Source: Moody's Analytics Research Report, August 2026</p>
          </div>
        </article>

        <div className="mt-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/goldman-sachs-gdp-upgrade" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Read</p>
              <p className="font-medium text-slate-800 dark:text-white mt-1">Goldman Sachs Upgrades India GDP Growth to 6.8%</p>
            </a>
            <a href="/rbi-repo-rate-august-2026" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Read</p>
              <p className="font-medium text-slate-800 dark:text-white mt-1">RBI MPC Keeps Policy Rate Unchanged at 5.25%</p>
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

export default MoodysForecast;