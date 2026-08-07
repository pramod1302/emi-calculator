import React from 'react';

function RBIRepoRate() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Back to Home */}
        <a href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm">
          ← Back to Calculator
        </a>

        {/* Blog Post Container */}
        <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
              <span className="text-blue-600 dark:text-blue-400 font-medium">RBI Policy</span>
              <span>|</span>
              <span>6 min read</span>
              <span>|</span>
              <span>August 5, 2026</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              RBI MPC Keeps Policy Rate Unchanged at 5.25%
            </h1>
            
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              MPC votes unanimously for status quo, retains neutral stance amid inflation concerns and global uncertainties
            </p>
          </header>

          {/* Featured Image */}
          <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl p-6 mb-6 text-white text-center">
            <p className="text-sm opacity-80">📸 RBI Governor Sanjay Malhotra</p>
            <p className="text-xs mt-2 opacity-60">Photo Credit: Reuters</p>
          </div>

          {/* Key Highlights Box */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white mb-8">
            <p className="text-sm font-semibold opacity-80 mb-3">KEY HIGHLIGHTS</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Repo rate unchanged at <span className="font-bold">5.25%</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>MPC voted <span className="font-bold">unanimously</span> for status quo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Neutral stance maintained for <span className="font-bold">7th straight meeting</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>FY27 GDP growth projected at <span className="font-bold">6.7%</span> (up from 6.6%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>FY27 CPI inflation revised down to <span className="font-bold">5.0%</span></span>
              </li>
            </ul>
          </div>

          {/* Key Rates Table */}
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 my-6 overflow-x-auto">
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-3">Key Policy Rates (August 2026)</p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-600">
                  <th className="text-left py-2 font-semibold text-slate-600 dark:text-slate-300">Rate</th>
                  <th className="text-left py-2 font-semibold text-slate-600 dark:text-slate-300">Current Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 dark:border-slate-600/50">
                  <td className="py-2 font-medium">Repo Rate</td>
                  <td className="py-2 font-bold text-blue-600">5.25%</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-600/50">
                  <td className="py-2 font-medium">SDF Rate</td>
                  <td className="py-2 font-bold text-blue-600">5.00%</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">MSF Rate / Bank Rate</td>
                  <td className="py-2 font-bold text-blue-600">5.50%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              The Monetary Policy Committee (MPC) of the Reserve Bank of India (RBI) voted unanimously on Wednesday (August 5, 2026) to keep the policy repo rate under the liquidity adjustment facility (LAF) unchanged at 5.25%, after a detailed assessment of the evolving macroeconomic and financial developments and the outlook.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-3">
              Consequently, the standing deposit facility (SDF) rate remains at 5%, and the marginal standing facility (MSF) rate and the bank rate remain at 5.50%. The MPC also decided to continue with the neutral stance.
            </p>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* Governor's Statement */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              RBI Governor's Statement
            </h2>
            
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5">
              <p className="text-sm text-slate-700 dark:text-slate-300 italic">
                "The Indian economy has remained resilient amidst persisting global headwinds. High-frequency indicators available so far point towards steady domestic demand in Q1: 2026-27. Private consumption remained robust. Investment continues to be resilient, as suggested by various indicators related to construction, capital goods and bank credit."
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 italic mt-3">
                "External demand also sustained, as healthy expansion in services exports was complemented by a rebound in merchandise exports."
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 italic mt-3">
                "There is a need for greater clarity to emerge, especially regarding inflation, its path and composition before taking any policy action."
              </p>
              <p className="text-xs text-slate-500 mt-3">— RBI Governor Sanjay Malhotra</p>
            </div>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* Key Risks */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Key Risks Identified by RBI
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 text-center">
                <p className="text-sm font-semibold text-red-800 dark:text-red-300">Energy Prices</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Supply chain pressures remain elevated and uncertain</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 text-center">
                <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">El Niño & Monsoon</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Deficient and uneven monsoon poses risks to agriculture and rural demand</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 text-center">
                <p className="text-sm font-semibold text-purple-800 dark:text-purple-300">Geopolitics & Trade</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Global geopolitical tensions and trade policy uncertainties</p>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                <span className="font-bold">📌 Governor's Observation:</span> "The outlook, however, is hazy because of the uncertainties regarding the southwest monsoon, El Niño, geopolitics and global trade policy."
              </p>
            </div>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* Inflation and Growth Forecasts */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Inflation and Growth Outlook
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
                <h3 className="font-bold text-blue-600 dark:text-blue-400">CPI Inflation Forecast</h3>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between"><span>FY27 (Full Year)</span><span className="font-bold">5.0%</span></div>
                  <div className="flex justify-between"><span>Q2 FY27</span><span>4.7%</span></div>
                  <div className="flex justify-between"><span>Q3 FY27</span><span className="text-amber-600 font-bold">5.9%</span></div>
                  <div className="flex justify-between"><span>Q4 FY27</span><span>5.5%</span></div>
                  <div className="flex justify-between"><span>Q1 FY28</span><span>5.3%</span></div>
                  <p className="text-xs text-slate-500 mt-2">Source: RBI August 2026 Policy</p>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
                <h3 className="font-bold text-emerald-600 dark:text-emerald-400">GDP Growth Forecast</h3>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between"><span>FY27 (Full Year)</span><span className="font-bold">6.7%</span></div>
                  <div className="flex justify-between"><span>Q1 FY27</span><span>7.0%</span></div>
                  <div className="flex justify-between"><span>Q2 FY27</span><span>6.4%</span></div>
                  <div className="flex justify-between"><span>Q3 FY27</span><span>6.5%</span></div>
                  <div className="flex justify-between"><span>Q4 FY27</span><span>6.8%</span></div>
                  <div className="flex justify-between"><span>Q1 FY28</span><span className="font-bold">7.3%</span></div>
                  <p className="text-xs text-slate-500 mt-2">Source: RBI August 2026 Policy</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 mt-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <span className="font-bold">Core Inflation Outlook:</span> Core inflation is projected at 4.3% for 2026-27. Core inflation, excluding precious metals, is expected to be lower in the near term, suggesting that demand pressures remain contained.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg mt-3">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <span className="font-bold">📊 Key Insight:</span> The higher inflation is mostly on account of fuel and food, with little signs of generalisation of price pressures so far. Headline inflation is expected to peak in Q3:2026-27, primarily due to food and fuel, before moderating thereafter.
              </p>
            </div>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* Impact on Home Loans */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              What This Means for Home Loan Borrowers
            </h2>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Since the repo rate remains unchanged at 5.25%, banks are likely to keep their lending rates steady. This means:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">✅ For Existing Borrowers</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                  No immediate increase in EMI payments. This is the fourth consecutive pause, giving borrowers stability and predictability in their monthly outflows.
                </p>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4">
                <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">✅ For New Borrowers</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                  Home loan rates are likely to remain stable. The neutral stance signals that banks are not anticipating immediate changes in their lending rates.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 mt-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <span className="font-bold">💡 Use Our EMI Calculator:</span> Check how different interest rates affect your monthly payments. 
                <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">Calculate your EMI now →</a>
              </p>
            </div>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Summary: What to Expect Going Forward
            </h2>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Repo rate <span className="font-bold">unchanged at 5.25%</span> for the fourth consecutive meeting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Neutral stance retained for the <span className="font-bold">7th straight meeting</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span><span className="font-bold">GDP growth</span> projected at 6.7% for FY27</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span><span className="font-bold">CPI inflation</span> projected at 5.0% for FY27</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Inflation expected to peak at <span className="font-bold">5.9%</span> in Q3 FY27</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>RBI waiting for <span className="font-bold">greater clarity</span> before any policy action</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <p className="font-bold text-slate-800 dark:text-white mb-2">
              Calculate Your Home Loan EMI
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
              Use our free EMI calculator to plan your loan payments.
            </p>
            <a 
              href="/" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Use Our Free Calculator →
            </a>
          </section>

          {/* Source Credit */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-400">
              Source: The Hindu - "RBI MPC keeps policy rate unchanged at 5.25%" by Lalatendu Mishra, August 5, 2026. 
              Image Credit: Reuters via The Hindu.
            </p>
          </div>

        </article>

        {/* Related Posts */}
        <div className="mt-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/home-loan-tips" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Read</p>
              <p className="font-medium text-slate-800 dark:text-white mt-1">How to Save ₹5 Lakh on Home Loan Interest</p>
            </a>
            <a href="/sip-vs-fd" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Read</p>
              <p className="font-medium text-slate-800 dark:text-white mt-1">SIP vs FD: Which Investment is Better for You?</p>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-slate-400">
          © 2026 <span className="text-blue-600 font-medium">Truyon</span> | Source: The Hindu
        </div>
      </div>
    </div>
  );
}

export default RBIRepoRate;