import React from 'react';
import { Helmet } from 'react-helmet';
import { TopBannerAd, InFeedAd, BottomBannerAd } from '../components/AdUnits';

function SbiResearchCreditGrowth2026() {
  const navigateBack = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/blog');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const navigateToCalculator = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <Helmet>
        <title>Bank Credit Growth to Remain Strong Despite Deposit Gap: SBI Research - Truyon Finance</title>
        <meta name="description" content="SBI Research report highlights that Indian banks are in a goldilocks period with strong capital buffers, even as credit growth of 18.6% outpaces deposit growth." />
        <link rel="canonical" href="https://finance.truyon.com/sbi-research-credit-growth-2026" />
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
              <span className="text-blue-600 dark:text-blue-400 font-medium">Banking & Economy</span>
              <span>|</span>
              <span>4 min read</span>
              <span>|</span>
              <span>July 20, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              Bank Credit Growth to Remain Strong Despite Deposit Gap: SBI Research
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              Indian banks enter a "goldilocks period" supported by solid capital adequacy and low non-performing assets, according to an SBI Research report.
            </p>
          </header>

          <img 
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1600&q=80" 
            alt="Banking credit growth and financial markets" 
            className="w-full rounded-xl mb-8 shadow-sm object-cover h-80"
          />

          <section className="mb-8 text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
            <p>
              Bank credit growth is expected to remain robust despite a persistent gap between credit and deposit growth, with Indian banks entering a “goldilocks period” supported by strong capital buffers and low non-performing assets, according to a report by <strong>SBI Research</strong>.
            </p>
            <p>
              The report noted that the banking system has witnessed sustained expansion in credit since FY23, with scheduled commercial banks’ credit growing <strong>18.6 per cent</strong> for the fortnight ended June 30, 2026, while deposit growth stood at 13.3 per cent. This has resulted in the gap widening to 5.3% as of June 2026.
            </p>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white pt-4">Shift in Lending Patterns</h3>
            <p>
              Following the Reserve Bank of India’s (RBI) regulatory measures on unsecured retail lending, credit growth has increasingly flowed towards industry, finance, and other productive sectors, aided by schemes like the Emergency Credit Line Guarantee Scheme (ECLGS). Post-2022, working capital loans such as cash credit, overdrafts, demand loans, and export credit have outpaced overall credit growth.
            </p>

            <InFeedAd />

            <h3 className="text-xl font-bold text-slate-800 dark:text-white pt-4">The "Goldilocks Period" for Indian Banks</h3>
            <p>
              Despite the liquidity gap driven by external supply shocks (including geopolitical conflicts and global supply chain disruptions), SBI Research maintains a highly positive outlook for the banking sector:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Strong Capitalisation:</strong> CRAR holds strong, providing a significant cushion for credit expansion.</li>
              <li><strong>Low NPAs:</strong> Asset quality remains robust, effectively absorbing macro-driven stress.</li>
              <li><strong>Deposit Outlook:</strong> Deposit growth is expected to improve in FY27, supported by FCNR(B) deposit inflows.</li>
            </ul>
          </section>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <p className="font-bold text-slate-800 dark:text-white mb-2">Analyze Your Loan and Savings Plan</p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">Use our financial calculators to plan your capital growth and credit requirements.</p>
            <a 
              href="/" 
              onClick={navigateToCalculator}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
            >
              Back to Calculator →
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-400">Source: SBI Research (Report published via ANI / DD India, July 20, 2026)</p>
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

export default SbiResearchCreditGrowth2026;