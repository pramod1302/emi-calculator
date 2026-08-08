import React from 'react';
import { Helmet } from 'react-helmet';
import { TopBannerAd, InFeedAd, BottomBannerAd } from '../components/AdUnits';

function SBIQ1Results2026() {
  const navigateBack = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/blog');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <Helmet>
        <title>SBI Standalone Net Profit Up 10.2% to ₹21,121 Crore - Truyon Finance</title>
        <meta name="description" content="State Bank of India reports Q1 standalone net profit of ₹21,121 crore, driven by a 15% increase in net interest income and strong credit growth." />
        <link rel="canonical" href="https://finance.truyon.com/sbi-q1-results-2026" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <a 
          href="/blog" 
          onClick={navigateBack} 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm cursor-pointer"
        >
          ← Back to Blog
        </a>

        <TopBannerAd />

        <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <header className="mb-8">
            <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
              <span className="text-blue-600 dark:text-blue-400 font-medium">Banking News</span>
              <span>|</span>
              <span>4 min read</span>
              <span>|</span>
              <span>August 7, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              SBI Standalone Net Profit Up 10.2% to ₹21,121 Crore on Higher Interest Income
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              State Bank of India core net interest income rose nearly 15% on the back of strong credit expansion.
            </p>
          </header>

          <img 
            src="https://th-i.thgim.com/public/incoming/pmapms/article71317262.ece/alternates/LANDSCAPE_1200/_DSC0940.jpg" 
            alt="State Bank of India building" 
            className="w-full rounded-xl mb-8 shadow-sm object-cover h-80"
          />

          <section className="mb-8 text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
            <p>
              State Bank of India (SBI)’s standalone net profit after tax increased <strong>10.2% to ₹21,121 crore</strong> for the first quarter of fiscal 2026, compared to ₹19,160 crore recorded in the same period last year.
            </p>
            <p>
              The country’s largest public sector lender increased its net interest income (NII) by <strong>15% to ₹46,992 crore</strong> on a year-on-year basis. The core expansion was heavily supported by an 18.63% increase in gross advances, which reached ₹50.5 lakh crore. Meanwhile, domestic net interest margin (NIM) contracted marginally by 1 basis point to 3%.
            </p>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 my-6 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-800 dark:text-white mb-3">Key Financial Highlights (Q1)</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Standalone Net Profit:</strong> ₹21,121 crore (Up 10.2% YoY)</li>
                <li>• <strong>Net Interest Income (NII):</strong> ₹46,992 crore (Up 15% YoY)</li>
                <li>• <strong>Gross Advances:</strong> ₹50.5 lakh crore (Up 18.6% YoY)</li>
                <li>• <strong>Total Deposits:</strong> ₹60 lakh crore (Up 9.7% YoY)</li>
                <li>• <strong>Gross NPA:</strong> Improved by 36 bps to 1.47%</li>
                <li>• <strong>Net NPA:</strong> Improved by 9 bps to 0.38%</li>
              </ul>
            </div>

            <InFeedAd />

            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-6 mb-4">Asset Quality and Guidance</h3>
            <p>
              The bank's asset quality saw visible improvements, with Gross non-performing assets (NPA) dropping to 1.47% and Net NPA tightening down to 0.38%. Additionally, SBI mopped up $6 billion in FCNR(B) deposits, eyeing a total target of $10 billion by the September quarter of fiscal 2027.
            </p>
            <p>
              For the full financial year, management has projected a credit growth target of 14-15%, deposit growth tracking around 10-11%, a stable NIM of 3%, and a Return on Assets (RoA) holding near 1%.
            </p>
          </section>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <p className="font-bold text-slate-800 dark:text-white mb-2">Explore More Financial Analysis</p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">Check out other regulatory updates and market reports on our blog.</p>
            <a 
              href="/blog" 
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/blog');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Back to All Articles →
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-400">Source: The Hindu (Reported by Ashokamithran T.)</p>
          </div>
        </article>

        <BottomBannerAd />

        <div className="mt-6 text-center text-xs text-slate-400">
          © 2026 <span className="text-blue-600 font-medium">Truyon</span>
        </div>
      </div>
    </div>
  );
}

export default SBIQ1Results2026;