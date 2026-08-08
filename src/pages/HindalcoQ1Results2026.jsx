import React from 'react';
import { Helmet } from 'react-helmet';
import { TopBannerAd, InFeedAd, BottomBannerAd } from '../components/AdUnits';

function HindalcoQ1Results2026() {
  const navigateBack = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/blog');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <Helmet>
        <title>Hindalco Q1 Net Profit Surges 75% to ₹7,013 Crore - Truyon Finance</title>
        <meta name="description" content="Hindalco Industries reports a 75% YoY jump in consolidated net profit to ₹7,013 crore for Q1 FY27, driven by strong India business momentum and Novelis recovery." />
        <link rel="canonical" href="https://finance.truyon.com/hindalco-q1-results-2026" />
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
              <span className="text-blue-600 dark:text-blue-400 font-medium">Corporate News</span>
              <span>|</span>
              <span>5 min read</span>
              <span>|</span>
              <span>August 7, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              Hindalco Q1 Net Profit Surges 75% to ₹7,013 Crore, Sales Up 32%
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              Aditya Birla Group metals flagship delivers record performance supported by macro tailwinds and subsidiary Novelis' recovery.
            </p>
          </header>

          <section className="mb-8 text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
            <p>
              Hindalco Industries Ltd of the Aditya Birla Group for the quarter ended June 30, 2026, reported a massive <strong>75% year-on-year growth</strong> in consolidated net profit at <strong>₹7,013 crore</strong>, driven by strong operational momentum in its domestic business and a sharp recovery at its US-based subsidiary, Novelis.
            </p>
            <p>
              The company’s consolidated revenue for the quarter scaled up 32% to <strong>₹84,825 crore</strong>.
            </p>

            <blockquote className="border-l-4 border-blue-600 pl-4 italic my-4 text-slate-600 dark:text-slate-400">
              “Hindalco’s milestone performance was driven by favourable macro tailwinds and the Company’s strategic focus on resource security, premium product innovation and relentless operational excellence,” the company said in an official regulatory filing.
            </blockquote>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 my-6 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-800 dark:text-white mb-3">Key Financial Highlights (Q1 FY27)</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Consolidated Net Profit:</strong> ₹7,013 crore (Up 75% YoY)</li>
                <li>• <strong>Consolidated Revenue:</strong> ₹84,825 crore (Up 32% YoY)</li>
                <li>• <strong>Novelis EBITDA:</strong> ₹4,875 crore (Up 37% YoY)</li>
                <li>• <strong>Aluminium Upstream EBITDA:</strong> ₹7,390 crore (Up 81% YoY)</li>
                <li>• <strong>Copper Quarterly EBITDA:</strong> ₹918 crore (Up 36% YoY)</li>
              </ul>
            </div>

            <InFeedAd />

            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-6 mb-4">Segment Performance & Growth Drivers</h3>
            <p>
              Novelis recorded a 37% improvement in EBITDA, hitting <strong>₹4,875 crore</strong>. This was heavily aided by the successful restart of the Oswego hot mill and accelerated advantages derived from its internal cost-optimisation programs. 
            </p>
            <p>
              Domestically, upstream aluminium operations delivered an extraordinary 81% surge in EBITDA to ₹7,390 crore, while copper business EBITDA climbed 36% to ₹918 crore.
            </p>

            <p className="mt-4">
              Satish Pai, Managing Director, Hindalco Industries, commented on the outlook: <em>“Looking ahead, our pipeline of strategic investments remains robust across upstream and downstream.”</em>
            </p>
          </section>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <p className="font-bold text-slate-800 dark:text-white mb-2">Explore More Financial Reports</p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">Browse our blog for more quarterly reviews and market updates.</p>
            <a 
              href="/blog" 
              onClick={navigateBack}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Back to All Articles →
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-400">Source: The Hindu Bureau</p>
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

export default HindalcoQ1Results2026;