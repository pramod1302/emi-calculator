import React from 'react';

function SIPvsFD() {
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
              <span className="text-blue-600 dark:text-blue-400 font-medium">Investment Guide</span>
              <span>|</span>
              <span>7 min read</span>
              <span>|</span>
              <span>March 16, 2026</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              SIP vs FD: Which Investment is Better for You?
            </h1>
            
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              A detailed comparison of Systematic Investment Plans and Fixed Deposits to help you make the right choice.
            </p>
          </header>

          {/* Featured Box */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl p-6 text-white mb-8">
            <p className="text-sm opacity-80">Quick Answer</p>
            <p className="text-xl font-bold mt-1">
              Choose SIP for long-term wealth creation, FD for guaranteed short-term safety.
            </p>
            <p className="text-sm opacity-80 mt-2">
              Your choice depends on your goals, risk appetite, and investment horizon.
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              One of the most common questions investors face is whether to invest in a Fixed Deposit (FD) 
              or a Systematic Investment Plan (SIP). Both are popular investment options in India, but they 
              serve completely different purposes.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-3">
              This guide will help you understand the differences, advantages, and disadvantages of each 
              so you can make an informed decision based on your financial goals.
            </p>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* Section: What is FD */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              What is a Fixed Deposit (FD)?
            </h2>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              A Fixed Deposit is a financial instrument where you deposit a lump sum amount with a bank 
              for a fixed period at a predetermined interest rate. At the end of the tenure, you receive 
              your principal amount plus the accrued interest.
            </p>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 my-4">
              <p className="font-semibold text-slate-700 dark:text-slate-300 mb-2">FD Key Features:</p>
              <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>Guaranteed returns (fixed interest rate)</li>
                <li>Capital protection (your principal is safe)</li>
                <li>Tenure ranges from 7 days to 10 years</li>
                <li>Interest rates: 5.5% - 8.5% (as of 2026)</li>
                <li>Senior citizens get higher rates (0.5% extra)</li>
                <li>Tax deduction under Section 80C (5-year lock-in)</li>
                <li>FD insurance up to ₹5 Lakh (DICGC)</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 my-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300">Top Bank FD Rates (2026)</p>
              <table className="w-full text-sm mt-2">
                <thead>
                  <tr className="border-b border-blue-200 dark:border-blue-700/50">
                    <th className="text-left py-2 text-blue-800 dark:text-blue-300">Bank</th>
                    <th className="text-left py-2 text-blue-800 dark:text-blue-300">1 Year</th>
                    <th className="text-left py-2 text-blue-800 dark:text-blue-300">3 Years</th>
                    <th className="text-left py-2 text-blue-800 dark:text-blue-300">5 Years</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blue-200 dark:border-blue-700/50">
                    <td className="py-2 font-medium">SBI</td>
                    <td className="py-2">6.50%</td>
                    <td className="py-2">7.00%</td>
                    <td className="py-2">7.50%</td>
                  </tr>
                  <tr className="border-b border-blue-200 dark:border-blue-700/50">
                    <td className="py-2 font-medium">HDFC</td>
                    <td className="py-2">6.60%</td>
                    <td className="py-2">7.10%</td>
                    <td className="py-2">7.60%</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">ICICI</td>
                    <td className="py-2">6.55%</td>
                    <td className="py-2">7.05%</td>
                    <td className="py-2">7.55%</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-3">* Rates as of March 2026. Subject to change.</p>
            </div>
          </section>

          {/* Section: What is SIP */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              What is a Systematic Investment Plan (SIP)?
            </h2>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              A Systematic Investment Plan (SIP) is a method of investing in mutual funds where you 
              invest a fixed amount regularly (monthly or quarterly). The amount is deducted from your 
              bank account and invested in the mutual fund scheme of your choice.
            </p>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 my-4">
              <p className="font-semibold text-slate-700 dark:text-slate-300 mb-2">SIP Key Features:</p>
              <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>Market-linked returns (not guaranteed)</li>
                <li>Rupee cost averaging (buy more when markets are low)</li>
                <li>Power of compounding (wealth grows exponentially)</li>
                <li>Historical returns: 12% - 15% (equity funds)</li>
                <li>Start with as low as ₹500 per month</li>
                <li>No lock-in period (except ELSS funds)</li>
                <li>Tax efficiency (LTCG tax on gains over ₹1 Lakh)</li>
              </ul>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-5 my-4">
              <p className="font-semibold text-emerald-800 dark:text-emerald-300">SIP Growth Example</p>
              <table className="w-full text-sm mt-2">
                <thead>
                  <tr className="border-b border-emerald-200 dark:border-emerald-700/50">
                    <th className="text-left py-2 text-emerald-800 dark:text-emerald-300">Monthly Investment</th>
                    <th className="text-left py-2 text-emerald-800 dark:text-emerald-300">Tenure</th>
                    <th className="text-left py-2 text-emerald-800 dark:text-emerald-300">Total Investment</th>
                    <th className="text-left py-2 text-emerald-800 dark:text-emerald-300">Expected Value (12%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-emerald-200 dark:border-emerald-700/50">
                    <td className="py-2">₹5,000</td>
                    <td className="py-2">5 years</td>
                    <td className="py-2">₹3,00,000</td>
                    <td className="py-2 font-bold">₹4,12,432</td>
                  </tr>
                  <tr className="border-b border-emerald-200 dark:border-emerald-700/50">
                    <td className="py-2">₹5,000</td>
                    <td className="py-2">10 years</td>
                    <td className="py-2">₹6,00,000</td>
                    <td className="py-2 font-bold">₹11,61,695</td>
                  </tr>
                  <tr>
                    <td className="py-2">₹5,000</td>
                    <td className="py-2">20 years</td>
                    <td className="py-2">₹12,00,000</td>
                    <td className="py-2 font-bold">₹49,20,000</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-3">* 12% annual return is historical average of equity mutual funds</p>
            </div>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* Comparison Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              SIP vs FD: Detailed Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-700">
                    <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">Parameter</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">Fixed Deposit</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">SIP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-3 px-4 font-medium">Returns</td>
                    <td className="py-3 px-4">Guaranteed (5.5% - 8.5%)</td>
                    <td className="py-3 px-4">Market-linked (10% - 15%)</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-3 px-4 font-medium">Risk</td>
                    <td className="py-3 px-4">Low (capital protected)</td>
                    <td className="py-3 px-4">Medium-High (market risk)</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-3 px-4 font-medium">Minimum Investment</td>
                    <td className="py-3 px-4">₹1,000 (lump sum)</td>
                    <td className="py-3 px-4">₹500 (monthly)</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-3 px-4 font-medium">Lock-in Period</td>
                    <td className="py-3 px-4">7 days - 10 years</td>
                    <td className="py-3 px-4">No lock-in (except ELSS)</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-3 px-4 font-medium">Taxation</td>
                    <td className="py-3 px-4">Interest taxed as per income tax slab</td>
                    <td className="py-3 px-4">LTCG 10% (above ₹1 Lakh) / STCG 15%</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-3 px-4 font-medium">Liquidity</td>
                    <td className="py-3 px-4">Low (penalty on premature withdrawal)</td>
                    <td className="py-3 px-4">High (can redeem anytime)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Best For</td>
                    <td className="py-3 px-4">Short-term goals, risk-averse investors</td>
                    <td className="py-3 px-4">Long-term goals, wealth creation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* When to Choose */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              When to Choose Which Investment
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 text-lg">Choose FD If:</h3>
                <ul className="list-disc pl-5 text-sm text-slate-700 dark:text-slate-300 mt-2 space-y-1">
                  <li>You need guaranteed returns</li>
                  <li>You are risk-averse</li>
                  <li>You have a short-term goal (1-3 years)</li>
                  <li>You want capital protection</li>
                  <li>You are a senior citizen</li>
                  <li>You need regular interest income</li>
                </ul>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-5">
                <h3 className="font-bold text-emerald-800 dark:text-emerald-300 text-lg">Choose SIP If:</h3>
                <ul className="list-disc pl-5 text-sm text-slate-700 dark:text-slate-300 mt-2 space-y-1">
                  <li>You have a long-term goal (5-20 years)</li>
                  <li>You want to build wealth</li>
                  <li>You can handle market volatility</li>
                  <li>You want to beat inflation</li>
                  <li>You have a regular monthly income</li>
                  <li>You want tax efficiency</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg mt-4">
              <p className="text-sm text-purple-800 dark:text-purple-300">
                <span className="font-bold">Expert Tip:</span> Many investors choose both. Use FD for your emergency fund 
                and short-term goals, and SIP for long-term wealth creation. This combination balances safety and growth.
              </p>
            </div>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Summary: Making Your Decision
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 text-center">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Goal</p>
                <p className="font-bold text-slate-800 dark:text-white mt-1">Emergency Fund</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Choose FD</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 text-center">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Goal</p>
                <p className="font-bold text-slate-800 dark:text-white mt-1">Wealth Creation</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Choose SIP</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 text-center">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Goal</p>
                <p className="font-bold text-slate-800 dark:text-white mt-1">Child Education</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Choose SIP</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <p className="font-bold text-slate-800 dark:text-white mb-2">
              Calculate Your Investment Returns
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
              Use our SIP and FD calculators to see exactly how much your money can grow.
            </p>
            <a 
              href="/" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Use Our Free Calculators
            </a>
          </section>

          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-400">
              Disclaimer: Past performance of mutual funds does not guarantee future returns. 
              SIP investments are subject to market risks. Please consult a financial advisor 
              before making investment decisions.
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
            <a href="#" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Coming Soon</p>
              <p className="font-medium text-slate-800 dark:text-white mt-1">Top 10 Tax Saving Tips for 2026</p>
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

export default SIPvsFD;