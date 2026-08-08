import React from 'react';
import { Helmet } from 'react-helmet';
import { TopBannerAd, InFeedAd, BottomBannerAd } from '../components/AdUnits';

function MFOnlyPMS() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <Helmet>
        <title>SEBI Proposes Mutual Fund-Only PMS: Key Changes - Truyon Finance</title>
        <meta name="description" content="SEBI proposes Mutual Fund-only PMS with ₹25 lakh minimum investment. Learn about the new framework, fee structure, and how it impacts investors." />
        <link rel="canonical" href="https://finance.truyon.com/sebi-mf-pms-proposal" />
        <meta property="og:title" content="SEBI Proposes Mutual Fund-Only PMS: Key Changes That Could Impact Your Investments" />
        <meta property="og:description" content="Market regulator's new framework could lower entry barriers for affluent investors and reshape India's wealth management industry." />
        <meta property="og:url" content="https://finance.truyon.com/sebi-mf-pms-proposal" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        
        {/* Back to Home */}
        <a href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm">
          ← Back to Calculator
        </a>

        {/* TOP BANNER AD */}
        <TopBannerAd />

        {/* Blog Post Container */}
        <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
              <span className="text-blue-600 dark:text-blue-400 font-medium">Mutual Funds</span>
              <span>|</span>
              <span>7 min read</span>
              <span>|</span>
              <span>August 7, 2026</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              SEBI Proposes Mutual Fund-Only PMS: Key Changes That Could Impact Your Investments
            </h1>
            
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              Market regulator's new framework could lower entry barriers for affluent investors and reshape India's wealth management industry
            </p>
          </header>

          {/* Key Highlights Box */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white mb-8">
            <p className="text-sm font-semibold opacity-80 mb-3">KEY HIGHLIGHTS</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>New <span className="font-bold">MF-only PMS</span> category proposed with <span className="font-bold">₹25 lakh</span> minimum investment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Traditional PMS minimum remains <span className="font-bold">₹50 lakh</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Net worth requirement for managers lowered to <span className="font-bold">₹2 crore</span> from ₹5 crore</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Management fee capped at <span className="font-bold">2.5%</span> of AUM</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Portfolios will invest only in <span className="font-bold">direct plans</span> of mutual funds, ETFs, and SIFs</span>
              </li>
            </ul>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              The Securities and Exchange Board of India (SEBI) has released a consultation paper proposing a major overhaul of the Portfolio Management Services (PMS) framework. The centrepiece of this proposal is the introduction of a new category called <strong>Mutual Fund-only Portfolio Management Service (MF-PMS)</strong>, which could significantly expand access to professionally managed investment portfolios.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-3">
              The proposed framework comes at a time when India's PMS industry has grown substantially, with assets under management rising from ₹18.07 lakh crore in April 2019 to <strong>₹42.61 lakh crore in May 2026</strong>, while the number of registered portfolio managers has more than doubled from 226 to 515.
            </p>

            {/* IN-FEED AD */}
            <InFeedAd />
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* What is MF-Only PMS */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              What is Mutual Fund-Only PMS?
            </h2>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Under the proposed framework, MF-PMS portfolios will invest <strong>exclusively in direct plans of mutual funds</strong>, including exchange-traded funds (ETFs) and Specialised Investment Funds (SIFs). This is a significant departure from traditional PMS, which allows investment across listed equities, debt securities, and other securities.
            </p>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 my-4 overflow-x-auto">
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-3">Key Differences: MF-Only PMS vs Traditional PMS</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200 dark:border-slate-600">
                    <th className="text-left py-2 font-semibold text-slate-600 dark:text-slate-300">Parameter</th>
                    <th className="text-left py-2 font-semibold text-slate-600 dark:text-slate-300">MF-Only PMS</th>
                    <th className="text-left py-2 font-semibold text-slate-600 dark:text-slate-300">Traditional PMS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200 dark:border-slate-600/50">
                    <td className="py-2 font-medium">Minimum Investment</td>
                    <td className="py-2 font-bold text-blue-600">₹25 Lakh</td>
                    <td className="py-2">₹50 Lakh</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-600/50">
                    <td className="py-2 font-medium">Investment Universe</td>
                    <td className="py-2">Direct mutual funds, ETFs, SIFs only</td>
                    <td className="py-2">Equities, debt, mutual funds, and more</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-600/50">
                    <td className="py-2 font-medium">Management Fee Cap</td>
                    <td className="py-2">2.5% of AUM</td>
                    <td className="py-2">Negotiated with manager</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Manager Net Worth Requirement</td>
                    <td className="py-2 font-bold text-blue-600">₹2 Crore</td>
                    <td className="py-2">₹5 Crore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* IN-FEED AD */}
            <InFeedAd />
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* Who Benefits */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Who Benefits from MF-Only PMS?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 text-lg">Mass Affluent Investors</h3>
                <ul className="list-disc pl-5 text-sm text-slate-700 dark:text-slate-300 mt-2 space-y-1">
                  <li>Investors with ₹25-50 lakh investable surplus</li>
                  <li>Previously didn't qualify for traditional PMS</li>
                  <li>Estimated 1.5-2 crore Indians in this segment</li>
                  <li>Access to professional portfolio management</li>
                </ul>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-5">
                <h3 className="font-bold text-emerald-800 dark:text-emerald-300 text-lg">Portfolio Managers</h3>
                <ul className="list-disc pl-5 text-sm text-slate-700 dark:text-slate-300 mt-2 space-y-1">
                  <li>Lower entry barriers (₹2 crore net worth)</li>
                  <li>Simplified compliance and operations</li>
                  <li>New business opportunities</li>
                  <li>Easier to scale boutique wealth management</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                <span className="font-bold">Key Insight:</span> The MF-only PMS framework is positioned as a bridge between self-managed mutual fund investing and traditional PMS, allowing investors to access professional portfolio management at a lower entry threshold.
              </p>
            </div>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* Cost Structure */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              What Will MF-Only PMS Cost Investors?
            </h2>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              SEBI has proposed clear guidelines on fees to ensure transparency:
            </p>

            <div className="space-y-4 mt-4">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-slate-800 dark:text-white">Fixed Management Fee</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Capped at <strong className="text-blue-600 dark:text-blue-400">2.5%</strong> of Assets Under Management (AUM)
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-slate-800 dark:text-white">Performance-Linked Fee</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  May be charged in addition to fixed fee, subject to <strong>client consent</strong>
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-slate-800 dark:text-white">Hybrid Model</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Combination of fixed and performance-based fees
                </p>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg mt-4">
              <p className="text-sm text-amber-800 dark:text-amber-300">
                <span className="font-bold">Important Note:</span> Investors should be aware that MF-only PMS involves <strong>two layers of costs</strong> — the expense ratio of the underlying mutual funds plus the PMS management fee. The 2.5% cap is the maximum, not the minimum fee.
              </p>
            </div>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* Additional Proposals */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Other Key Proposals in the Consultation Paper
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Expanded Investment Universe</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Portfolio managers can now invest in securities proposed to be listed, foreign securities, REITs, and InvITs</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Demat Account Portability</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Investors can switch PMS managers without opening a new demat account</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Derivatives Framework</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Aggregate exposure up to 1.25x client's AUM permitted; unhedged short exposure capped at 50%</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Grandfathering for Existing Clients</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Existing PMS clients (non MF-PMS) have 36 months to meet the ₹50 lakh minimum requirement</p>
              </div>
            </div>

            {/* IN-FEED AD */}
            <InFeedAd />
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              What This Means for You
            </h2>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>If you have <span className="font-bold">₹25 lakh+</span> to invest, you may soon access professional portfolio management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>MF-only PMS invests in <span className="font-bold">direct mutual fund plans</span>, potentially lowering costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>You get <span className="font-bold">discretionary management</span> — the manager executes decisions on your behalf</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Consultation paper is open for <span className="font-bold">public comments until August 13, 2026</span></span>
                </li>
              </ul>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <p className="font-bold text-slate-800 dark:text-white mb-2">
              Calculate Your SIP Returns
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
              Use our free calculators to plan your mutual fund investments.
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
              Sources: SEBI Consultation Paper (July 2026), The Economic Times, NDTV Profit, Moneycontrol, Mint
            </p>
          </div>

        </article>

        {/* BOTTOM BANNER AD */}
        <BottomBannerAd />

        {/* Related Posts */}
        <div className="mt-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/sip-vs-fd" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Read</p>
              <p className="font-medium text-slate-800 dark:text-white mt-1">SIP vs FD: Which Investment is Better for You?</p>
            </a>
            <a href="/rbi-repo-rate-august-2026" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Read</p>
              <p className="font-medium text-slate-800 dark:text-white mt-1">RBI MPC Keeps Policy Rate Unchanged at 5.25%</p>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-slate-400">
          © 2026 <span className="text-blue-600 font-medium">Truyon</span>
        </div>
      </div>
    </div>
  );
}

export default MFOnlyPMS;