import React from 'react';
import { Helmet } from 'react-helmet';
import { TopBannerAd, InFeedAd, BottomBannerAd } from '../components/AdUnits';

function TenRupeeWeeklyChallenge2026() {
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
        <title>The ₹10 Weekly Investment Challenge: How Small Amounts Add Up - Truyon Finance</title>
        <meta name="description" content="Discover the power of micro-investing with the ₹10 weekly challenge. Learn how consistent, small contributions build discipline and long-term wealth." />
        <link rel="canonical" href="https://finance.truyon.com/ten-rupee-weekly-challenge-2026" />
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
              <span className="text-blue-600 dark:text-blue-400 font-medium">Wealth Creation</span>
              <span>|</span>
              <span>3 min read</span>
              <span>|</span>
              <span>August 8, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              The ₹10 Weekly Investment Challenge: How Small Amounts Add Up
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              You don’t need a massive salary to start investing. Learn how a simple ₹10 weekly habit can transform your relationship with money.
            </p>
          </header>

          <img 
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80" 
            alt="Micro-investing and financial discipline" 
            className="w-full rounded-xl mb-8 shadow-sm object-cover h-80"
          />

          <section className="mb-8 text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
            <p>
              Many aspiring investors are held back by the misconception that they need thousands of rupees to start their journey. The truth? Wealth creation isn't about the size of your first deposit—it's about the consistency of your habits. Enter the <strong>₹10 Weekly Challenge</strong>.
            </p>

            <h3 className="text-2xl font-bold text-slate-800 dark:text-white pt-4">What is the ₹10 Weekly Challenge?</h3>
            <p>
              The premise is simple: set aside ₹10 every single week into a separate investment account or piggy bank. In week two, you set aside ₹20; in week three, ₹30, and so on. By the end of the year, you have created a disciplined routine that forces you to prioritize your future self over instant gratification.
            </p>

            <InFeedAd />

            <h3 className="text-2xl font-bold text-slate-800 dark:text-white pt-6 mb-4">Why This Works</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Low Entry Barrier:</strong> Starting with just ₹10 eliminates the fear of "risking too much money."</li>
              <li><strong>Behavioral Training:</strong> It trains your brain to treat savings as a non-negotiable monthly expense.</li>
              <li><strong>The Compounding Edge:</strong> Even micro-investments earn returns, and those returns are reinvested, creating a snowball effect.</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-800 dark:text-white pt-4">Scaling Up Your Habit</h3>
            <p>
              Once you master the ₹10 rhythm for a month, you will likely realize that your budget can comfortably accommodate more. You can eventually transition these micro-contributions into a full-fledged Mutual Fund SIP. The objective is to move from "saving leftovers" to "investing first."
            </p>
          </section>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <p className="font-bold text-slate-800 dark:text-white mb-2">Start Small, Grow Big</p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">Our calculators show you exactly what your small weekly savings could grow into over 10 or 20 years.</p>
            <a 
              href="/" 
              onClick={navigateToCalculator}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
            >
              Back to Calculator →
            </a>
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

export default TenRupeeWeeklyChallenge2026;