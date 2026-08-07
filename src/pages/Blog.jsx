import React from 'react';

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
      slug: '/sip-vs-fd',
      title: 'SIP vs FD: Which Investment is Better for You?',
      date: 'March 16, 2026',
      category: 'Investment',
      excerpt: 'A detailed comparison of Systematic Investment Plans and Fixed Deposits to help you make the right choice.'
    },
  ];

  // Sort articles by date (newest first)
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Back to Home */}
        <a href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm">
          ← Back to Calculator
        </a>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            📝 All Articles
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            {sortedArticles.length} articles on finance, investments, and RBI policy
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-4">
          {sortedArticles.map((article) => (
            <a 
              key={article.slug}
              href={article.slug} 
              className="block bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm hover:shadow-md transition border border-slate-200 dark:border-slate-700"
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
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-slate-400">
          © 2026 <span className="text-blue-600 font-medium">Truyon</span>
        </div>
      </div>
    </div>
  );
}

export default Blog;