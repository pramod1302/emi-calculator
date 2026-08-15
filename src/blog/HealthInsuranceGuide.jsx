import React from 'react';
import { Helmet } from 'react-helmet';
import { TopBannerAd, InFeedAd, BottomBannerAd } from '../components/AdUnits';

function HealthInsuranceGuide() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <Helmet>
        <title>How to Choose the Right Health Insurance Plan in India - Truyon Finance</title>
        <meta name="description" content="A comprehensive guide to selecting the best health insurance policy for you and your family. Learn about claim settlement ratios, network hospitals, and key factors to consider." />
        <link rel="canonical" href="https://finance.truyon.com/health-insurance-guide" />
        <meta property="og:title" content="How to Choose the Right Health Insurance Plan in India" />
        <meta property="og:description" content="A comprehensive guide to selecting the best health insurance policy for you and your family." />
        <meta property="og:url" content="https://finance.truyon.com/health-insurance-guide" />
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
              <span className="text-green-600 dark:text-green-400 font-medium">Insurance Guide</span>
              <span>|</span>
              <span>8 min read</span>
              <span>|</span>
              <span>August 7, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              How to Choose the Right Health Insurance Plan in India
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              A comprehensive guide to selecting the best health insurance policy for you and your family
            </p>
          </header>

          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-6 text-white mb-8">
            <p className="text-sm font-semibold opacity-80 mb-3">QUICK TIPS</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Check <span className="font-bold">claim settlement ratio</span> of the insurer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Look for <span className="font-bold">no-claim bonus</span> benefits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Understand <span className="font-bold">waiting periods</span> for pre-existing conditions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Compare <span className="font-bold">network hospitals</span> in your city</span>
              </li>
            </ul>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Why Health Insurance is Essential</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              With rising healthcare costs in India, health insurance has become a necessity rather than a luxury. A single hospitalization can cost lakhs of rupees, wiping out years of savings. A comprehensive health insurance policy protects you and your family from such financial shocks.
            </p>

            {/* IN-FEED AD */}
            <InFeedAd />
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Top Health Insurance Companies in India (2026)</h2>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200 dark:border-slate-600">
                    <th className="text-left py-2 font-semibold text-slate-600 dark:text-slate-300">Company</th>
                    <th className="text-left py-2 font-semibold text-slate-600 dark:text-slate-300">Claim Settlement Ratio</th>
                    <th className="text-left py-2 font-semibold text-slate-600 dark:text-slate-300">Network Hospitals</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200 dark:border-slate-600/50">
                    <td className="py-2 font-medium">Star Health</td>
                    <td className="py-2 text-green-600 font-bold">99.8%</td>
                    <td className="py-2">14,000+</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-600/50">
                    <td className="py-2 font-medium">HDFC Ergo</td>
                    <td className="py-2 text-green-600 font-bold">99.2%</td>
                    <td className="py-2">12,500+</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-600/50">
                    <td className="py-2 font-medium">ICICI Lombard</td>
                    <td className="py-2 text-green-600 font-bold">99.1%</td>
                    <td className="py-2">11,800+</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Aditya Birla Health</td>
                    <td className="py-2 text-green-600 font-bold">98.7%</td>
                    <td className="py-2">10,500+</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-slate-500 mt-3">* As of March 2026. Source: IRDAI Annual Report</p>
            </div>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Key Factors to Consider</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-slate-800 dark:text-white">1. Claim Settlement Ratio</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Choose insurers with 95%+ claim settlement ratio. This indicates the company settles most claims without disputes.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-slate-800 dark:text-white">2. Network Hospitals</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Check if your preferred hospitals are in the insurer's network. Cashless treatment is available only at network hospitals.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-slate-800 dark:text-white">3. No-Claim Bonus</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Look for policies that offer no-claim bonus (NCB). This increases your sum insured for each claim-free year, typically by 10-50%.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-slate-800 dark:text-white">4. Waiting Period</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Understand waiting periods for pre-existing conditions (usually 2-4 years) and specific diseases (12-24 months).</p>
              </div>
            </div>

            {/* IN-FEED AD */}
            <InFeedAd />
          </section>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-300">
              <span className="font-bold">📌 Pro Tip:</span> Compare at least 3-4 policies before making a decision. Don't just look at the premium; consider coverage, exclusions, and claim process.
            </p>
          </div>

          <section className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <p className="font-bold text-slate-800 dark:text-white mb-2">Plan Your Finances</p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">Use our calculators to plan your financial future.</p>
            <a href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Use Our Free Calculator →
            </a>
          </section>

          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-400">Source: IRDAI Annual Report 2025-26, Industry Reports</p>
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
            <a href="/sip-vs-fd" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Read</p>
              <p className="font-medium text-slate-800 dark:text-white mt-1">SIP vs FD: Which Investment is Better for You?</p>
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

export default HealthInsuranceGuide;