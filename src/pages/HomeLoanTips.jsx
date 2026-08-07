import React from 'react';

function HomeLoanTips() {
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
              <span className="text-blue-600 dark:text-blue-400 font-medium">Home Loan Guide</span>
              <span>|</span>
              <span>6 min read</span>
              <span>|</span>
              <span>March 15, 2026</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              How to Save ₹5 Lakh on Your Home Loan Interest
            </h1>
            
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              Practical strategies to reduce your home loan interest burden and become debt-free faster.
            </p>
          </header>

          {/* Featured Box */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white mb-8">
            <p className="text-sm opacity-80">Key Insight</p>
            <p className="text-xl font-bold mt-1">
              The average home loan borrower pays ₹8-12 lakhs in interest over 20 years.
            </p>
            <p className="text-sm opacity-80 mt-2">
              With the right strategies, you can save ₹5 lakhs or more.
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Taking a home loan is one of the biggest financial decisions you will ever make. 
              While it enables you to own a home, the interest you pay over the loan tenure can be substantial. 
              For a ₹25 lakh loan at 8.5% interest for 20 years, you would pay approximately ₹20.6 lakhs in 
              interest alone. This is more than the principal amount.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-3">
              At Truyon, we have analyzed thousands of home loans and identified five proven strategies 
              that can help you save ₹5 lakhs or more on your home loan interest.
            </p>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* Strategy 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              1. Choose a Shorter Tenure
            </h2>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              The tenure of your loan has a direct impact on the total interest you pay. 
              A shorter tenure means higher monthly payments but significantly lower total interest.
            </p>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 my-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200 dark:border-slate-600">
                    <th className="text-left py-2 font-semibold text-slate-600 dark:text-slate-300">Loan Amount</th>
                    <th className="text-left py-2 font-semibold text-slate-600 dark:text-slate-300">Tenure</th>
                    <th className="text-left py-2 font-semibold text-slate-600 dark:text-slate-300">Monthly EMI</th>
                    <th className="text-left py-2 font-semibold text-slate-600 dark:text-slate-300">Total Interest</th>
                    <th className="text-left py-2 font-semibold text-slate-600 dark:text-slate-300">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200 dark:border-slate-600/50">
                    <td className="py-2 font-medium">₹20 Lakh</td>
                    <td className="py-2">20 years</td>
                    <td className="py-2">₹18,560</td>
                    <td className="py-2">₹18.6 Lakh</td>
                    <td className="py-2 text-red-500">-</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-600/50">
                    <td className="py-2 font-medium">₹20 Lakh</td>
                    <td className="py-2">15 years</td>
                    <td className="py-2">₹19,694</td>
                    <td className="py-2">₹12.5 Lakh</td>
                    <td className="py-2 text-green-600 font-bold">Save ₹6.1 Lakh</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">₹20 Lakh</td>
                    <td className="py-2">10 years</td>
                    <td className="py-2">₹24,760</td>
                    <td className="py-2">₹8.2 Lakh</td>
                    <td className="py-2 text-green-600 font-bold">Save ₹10.4 Lakh</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-slate-400 mt-3">* Calculations based on 8.5% annual interest rate</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <span className="font-bold">Action Step:</span> Use our EMI Calculator to compare different tenures. 
                A 15-year loan may seem expensive monthly but saves you lakhs in the long run.
              </p>
            </div>
          </section>

          {/* Strategy 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              2. Make One Extra EMI Payment Per Year
            </h2>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Making just one additional EMI payment each year can significantly reduce your loan tenure 
              and save you a substantial amount in interest.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg my-4">
              <p className="text-sm text-green-800 dark:text-green-300">
                <span className="font-bold">Example:</span> On a ₹30 lakh loan at 8.5% for 20 years, 
                paying one extra EMI per year saves you ₹3.2 lakhs in interest and reduces your tenure by 2.5 years.
              </p>
            </div>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="font-bold">How to do it:</span> When you receive a bonus, salary increment, 
              or any unexpected income, use it to make an additional EMI payment.
            </p>
          </section>

          {/* Strategy 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              3. Compare Interest Rates Across Banks
            </h2>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              A difference of just 0.5% in your interest rate can save you ₹2-3 lakhs over 20 years. 
              Always compare rates from multiple banks before finalizing your loan.
            </p>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 my-4 overflow-x-auto">
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-3">Top Bank Interest Rates (2026)</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200 dark:border-slate-600">
                    <th className="text-left py-2 font-semibold text-slate-600 dark:text-slate-300">Bank</th>
                    <th className="text-left py-2 font-semibold text-slate-600 dark:text-slate-300">Interest Rate</th>
                    <th className="text-left py-2 font-semibold text-slate-600 dark:text-slate-300">Processing Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200 dark:border-slate-600/50">
                    <td className="py-2 font-medium">SBI</td>
                    <td className="py-2">8.40% - 9.15%</td>
                    <td className="py-2">0.35% - 1%</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-600/50">
                    <td className="py-2 font-medium">HDFC Bank</td>
                    <td className="py-2">8.45% - 9.20%</td>
                    <td className="py-2">0.50% - 1%</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-600/50">
                    <td className="py-2 font-medium">ICICI Bank</td>
                    <td className="py-2">8.50% - 9.25%</td>
                    <td className="py-2">0.50% - 1%</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-600/50">
                    <td className="py-2 font-medium">Axis Bank</td>
                    <td className="py-2">8.55% - 9.30%</td>
                    <td className="py-2">0.50% - 1%</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">PNB</td>
                    <td className="py-2">8.40% - 9.10%</td>
                    <td className="py-2">0.35% - 1%</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-slate-400 mt-3">* Rates as of March 2026. Subject to change.</p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                <span className="font-bold">Action Step:</span> Visit the official websites of these banks 
                to verify the latest rates and check your eligibility.
              </p>
            </div>
          </section>

          {/* Strategy 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              4. Increase Your Monthly EMI Amount
            </h2>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Even a modest increase in your monthly EMI can significantly reduce your loan tenure and total interest.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 my-4">
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">Example: ₹25 Lakh Loan at 8.5%</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-blue-200 dark:border-blue-700/50">
                    <th className="text-left py-2 text-blue-800 dark:text-blue-300">Scenario</th>
                    <th className="text-left py-2 text-blue-800 dark:text-blue-300">Monthly EMI</th>
                    <th className="text-left py-2 text-blue-800 dark:text-blue-300">Tenure</th>
                    <th className="text-left py-2 text-blue-800 dark:text-blue-300">Total Interest</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blue-200 dark:border-blue-700/50">
                    <td className="py-2">Standard</td>
                    <td className="py-2">₹21,720</td>
                    <td className="py-2">20 years</td>
                    <td className="py-2">₹20.6 Lakh</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold text-green-600">+10% Increase</td>
                    <td className="py-2">₹23,892</td>
                    <td className="py-2">17 years</td>
                    <td className="py-2 text-green-600 font-bold">₹17.2 Lakh</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-3">
                Total Savings: ₹3.4 Lakh | Tenure Reduced: 3 years
              </p>
            </div>
          </section>

          {/* Strategy 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              5. Consider Loan Balance Transfer
            </h2>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              If you find a bank offering a significantly lower interest rate, you can transfer your loan 
              to that bank. This is called a balance transfer.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg my-4">
              <p className="text-sm text-purple-800 dark:text-purple-300">
                <span className="font-bold">Important:</span> Banks charge a transfer fee of 0.5-1% of the loan amount. 
                If you save ₹2 lakhs in interest and pay ₹10,000 as transfer fee, you still save ₹1.9 lakhs.
              </p>
            </div>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="font-bold">When to consider:</span> When there is a difference of at least 0.5-1% between 
              your current rate and the new rate, and your remaining tenure is at least 5 years.
            </p>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Summary: Your Path to ₹5 Lakh in Savings
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Strategy</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">1. Shorter tenure</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">2. Extra EMI per year</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">3. Compare rates</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">4. Increase EMI</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">5. Balance transfer</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-5 text-white text-center flex flex-col justify-center">
                <p className="text-sm opacity-80">Potential Savings</p>
                <p className="text-3xl font-bold">₹5,00,000+</p>
                <p className="text-sm opacity-80 mt-1">On a ₹25 Lakh loan</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <p className="font-bold text-slate-800 dark:text-white mb-2">
              Start Saving on Your Home Loan Today
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
              Use our free calculators to plan your loan and see your potential savings.
            </p>
            <a 
              href="/" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Use Our Free Calculators
            </a>
          </section>

          {/* Footer Note */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-400">
              Disclaimer: All calculations and rates are indicative and based on publicly available data as of March 2026. 
              Please verify current rates with respective banks before making financial decisions.
            </p>
          </div>

        </article>

        {/* Related Posts */}
        <div className="mt-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Coming Soon</p>
              <p className="font-medium text-slate-800 dark:text-white mt-1">SIP vs FD: Which is Better for You?</p>
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

export default HomeLoanTips;