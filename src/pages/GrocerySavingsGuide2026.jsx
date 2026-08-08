import React from 'react';
import { Helmet } from 'react-helmet';
import { TopBannerAd, InFeedAd, BottomBannerAd } from '../components/AdUnits';

function GrocerySavingsGuide2026() {
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
        <title>6 Smart Ways to Save Money on Your Grocery Shopping - Truyon Finance</title>
        <meta name="description" content="Master your monthly budget with these 6 essential grocery shopping hacks. Learn why you should avoid bundle offers, stick to your list, and use cash payments." />
        <link rel="canonical" href="https://finance.truyon.com/grocery-savings-guide-2026" />
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
              <span className="text-blue-600 dark:text-blue-400 font-medium">Budgeting Tips</span>
              <span>|</span>
              <span>3 min read</span>
              <span>|</span>
              <span>November 12, 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              6 Smart Ways to Save Money on Your Grocery Shopping
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              Grocery shopping can significantly impact your monthly budget. Adopt these budget-friendly practices to enhance your savings without compromising on your needs.
            </p>
          </header>

          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80" 
            alt="Grocery shopping budget" 
            className="w-full rounded-xl mb-8 shadow-sm object-cover h-80"
          />

          <section className="mb-8 text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
            <p>
              Shopping for groceries is a daily essential. Although grocery shopping may not seem extravagant, it can significantly add to your expenses and affect your overall monthly budget. To manage your finances effectively, you need to allocate your money carefully and adopt smarter shopping habits.
            </p>

            <h3 className="text-2xl font-bold text-slate-800 dark:text-white pt-6 mb-4">Top Tips for Grocery Savings</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">1. Check Bottom and Top Shelves</h4>
                <p>Retailers often place high-priced items at eye level to grab your attention. Items on middle shelves are frequently larger and more expensive. Take a moment to scan the bottom and top shelves to find better-priced alternatives.</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">2. Avoid Free Samples</h4>
                <p>Salespeople offering samples are using a tested method to win your confidence in a product. It’s an effective temptation to buy things you didn't plan for. Skip the samples to avoid impulsive buying.</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">3. Be Wary of Bundle Offers</h4>
                <p>Stores often sell slow-moving items through "buy one, get one" or bundle discounts. Before grabbing these, ask yourself if you actually need the quantity offered, or if you're just paying for items that will eventually go to waste.</p>
              </div>

              <InFeedAd />

              <div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">4. Stick to Your Grocery List</h4>
                <p>A grocery list is your strongest defense against impulse shopping. By estimating your total expenditure before stepping into the store and following the list strictly, you avoid aimless navigation and unnecessary spending.</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">5. Calculate As You Go</h4>
                <p>Don't just fill your cart—keep a mental or physical note of the total cost as you add each item. This awareness prevents "bill shock" at the checkout counter and helps you stay within your designated budget.</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">6. Use Cash for Payments</h4>
                <p>While digital payments are convenient, paying in cash gives you a tangible limit. When you carry a fixed amount, you are naturally more prudent because you know exactly when you've reached your maximum spending threshold.</p>
              </div>
            </div>
          </section>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <p className="font-bold text-slate-800 dark:text-white mb-2">Better Manage Your Monthly Budget</p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">Use our financial planning tools to track your expenses and boost your savings.</p>
            <a 
              href="/" 
              onClick={navigateToCalculator}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
            >
              Back to Calculator →
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-400">Source: SBI Life Insurance Insights (Published: November 12, 2025)</p>
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

export default GrocerySavingsGuide2026;