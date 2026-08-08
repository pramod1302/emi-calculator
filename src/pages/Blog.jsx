import React from 'react';
import { Helmet } from 'react-helmet';
import { TopBannerAd, InFeedAd, BottomBannerAd } from '../components/AdUnits';

function Blog() {
  // Add all your articles here
  const articles = [
    {
      slug: '/upi-charges-bill',
      title: 'Lok Sabha Passes Bill to Authorise Banks to Levy Charges on UPI Transactions',
      date: 'August 6, 2026',
      category: 'Finance News',
      excerpt: 'The Taxation and other Laws (Amendment) Bill amends the Payment and Settlement Systems Act, 2007, paving the way for Merchant Discount Rate (MDR) on UPI payments.'
    },
    {
      slug: '/rbi-repo-rate-august-2026',
      title: 'RBI MPC Keeps Policy Rate Unchanged at 5.25%',
      date: 'August 5, 2026',
      category: 'RBI Policy',
      excerpt: 'MPC votes unanimously for status quo, retains neutral stance amid inflation concerns and global uncertainties.'
    },
    {
      slug: '/home-loan-tips',
      title: 'How to Save ₹5 Lakh on Home Loan Interest',
      date: 'March 15, 2026',
      category: 'Home Loan',
      excerpt: 'Practical strategies to reduce your home loan interest burden and become debt-free faster.'
    },
    {
      slug: '/sebi-mf-pms-proposal',
      title: 'SEBI Proposes Mutual Fund-Only PMS: Key Changes That Could Impact Your Investments',
      date: 'August 7, 2026',
      category: 'Mutual Funds',
      excerpt: 'Market regulator\'s new framework could lower entry barriers for affluent investors and reshape India\'s wealth management industry with a ₹25 lakh entry point.'
    },
    {
      slug: '/sip-vs-fd',
      title: 'SIP vs FD: Which Investment is Better for You?',
      date: 'March 16, 2026',
      category: 'Investment',
      excerpt: 'A detailed comparison of Systematic Investment Plans and Fixed Deposits to help you make the right choice.'
    },
    {
      slug: '/goldman-sachs-gdp-upgrade',
      title: "Goldman Sachs Upgrades India's 2026 GDP Growth Forecast to 6.8%",
      date: 'August 7, 2026',
      category: 'Economy',
      excerpt: 'US-Iran peace deal and lower crude oil prices drive upgrade, with inflation outlook improving.'
    },
    {
      slug: '/budget-2026',
      title: 'Union Budget 2026-27: Key Highlights and Tax Changes Explained',
      date: 'August 7, 2026',
      category: 'Budget',
      excerpt: 'New Income Tax Act effective April 1, 2026, capex push to ₹12.2 lakh crore, and major changes for taxpayers.'
    },
    {
      slug: '/moodys-forecast',
      title: "Moody's Lowers India's 2026 GDP Growth Forecast to 6%",
      date: 'August 7, 2026',
      category: 'Economy',
      excerpt: 'Rating agency cites weaker private consumption, slower investments, and high energy costs as headwinds.'
    },
    {
      slug: '/income-tax-rules-2026',
      title: 'New Income Tax Rules 2026: Key Changes for HRA, Capital Gains & More',
      date: 'August 7, 2026',
      category: 'Tax Rules',
      excerpt: 'CBDT notifies Income-tax Rules 2026 effective April 1, 2026, implementing the new Income-tax Act, 2025.'
    },
    {
      slug: '/health-insurance-guide',
      title: 'How to Choose the Right Health Insurance Plan in India',
      date: 'August 7, 2026',
      category: 'Insurance',
      excerpt: 'A comprehensive guide to selecting the best health insurance policy for you and your family.'
    },
    {
      slug: '/state-gsec-auction',
      title: 'RBI Announces Auction of State Government Securities worth ₹15,300 Crore',
      date: 'August 8, 2026',
      category: 'RBI Policy',
      excerpt: 'State Governments to raise ₹15,300 crore via auction on August 11, 2026. Retail investors can participate via RBI Retail Direct.'
    },
    {
      slug: '/sbi-clerk-recruitment-2026',
      title: 'SBI Clerk Recruitment 2026: 1,538 Backlog Vacancies Announced',
      date: 'August 8, 2026',
      category: 'Government Jobs',
      excerpt: 'SBI invites applications for 1,538 Junior Associate vacancies. Check eligibility and how to apply for the special drive.'
    },
    {
      slug: '/sbi-q1-results-2026',
      title: 'SBI Standalone Net Profit Up 10.2% to ₹21,121 Crore on Higher Interest Income',
      date: 'August 7, 2026',
      category: 'Banking News',
      excerpt: 'State Bank of India reports a 10.2% jump in Q1 net profit powered by a 15% increase in net interest income and robust credit expansion.'
    },
    {
      slug: '/hindalco-q1-results-2026',
      title: 'Hindalco Q1 Net Profit Surges 75% to ₹7,013 Crore, Sales Up 32%',
      date: 'August 7, 2026',
      category: 'Corporate News',
      excerpt: 'Aditya Birla flagship Hindalco posts strong Q1 results driven by robust momentum in the India aluminum business and recovery at Novelis.'
    },
    {
      slug: '/model-bit-review-2026',
      title: 'Revamp of Model Bilateral Investment Treaty in Works, to be Presented to Cabinet Soon: Secy',
      date: 'August 7, 2026',
      category: 'Economy & Policy',
      excerpt: 'Finance Ministry reviewing India\'s Model BIT framework to enhance investor-friendly terms, address global arbitration practices, and protect overseas Indian investments.'
    },
    {
      slug: '/urban-cooperative-banks-2026',
      title: 'RBI Gives Urban Cooperative Banks New Lease of Life | Explained',
      date: 'August 7, 2026',
      category: 'Banking Policy',
      excerpt: 'RBI resumes on-tap licensing for Urban Cooperative Banks after two decades, introducing strict net-worth and capital adequacy criteria to foster financial inclusion safely.'
    },
  ];

  // Sort articles by date (newest first)
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      
      {/* Helmet for SEO */}
      <Helmet>
        <title>Truyon Finance Blog - Financial News, Guides & Insights</title>
        <meta name="description" content="Read the latest financial news, investment guides, and tax tips from Truyon Finance. Updated daily with expert insights." />
        <link rel="canonical" href="https://finance.truyon.com/blog" />
        <meta property="og:title" content="Truyon Finance Blog - Financial News & Guides" />
        <meta property="og:description" content="Read the latest financial news, investment guides, and tax tips from Truyon Finance." />
        <meta property="og:url" content="https://finance.truyon.com/blog" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        
        {/* Back to Home / Calculator */}
        <a 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, '', '/');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm cursor-pointer"
        >
          ← Back to Calculator
        </a>

        {/* TOP BANNER AD */}
        <TopBannerAd />

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            All Articles
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            {sortedArticles.length} articles on finance, investments, and RBI policy
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-4">
          {sortedArticles.map((article, index) => (
            <React.Fragment key={article.slug}>
              <a 
                href={article.slug} 
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', article.slug);
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className="block bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm hover:shadow-md transition border border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <h2 className="text-lg font-bold text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {article.excerpt}
                </p>
              </a>
              
              {/* IN-FEED AD (after every 3 articles) */}
              {(index + 1) % 3 === 0 && <InFeedAd />}
            </React.Fragment>
          ))}
        </div>

        {/* BOTTOM BANNER AD */}
        <BottomBannerAd />

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-slate-400">
          © 2026 <span className="text-blue-600 font-medium">Truyon</span>
        </div>
      </div>
    </div>
  );
}

export default Blog;