import React from 'react';
import { Helmet } from 'react-helmet';
import { TopBannerAd, InFeedAd, BottomBannerAd } from '../components/AdUnits';

function BankHomeLoanComparison2026() {
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
        <title>Home Loan Comparison: SBI vs. ICICI Bank vs. HDFC Bank - Truyon Finance</title>
        <meta name="description" content="Compare home loan interest rates, eligibility criteria, processing fees, maximum funding, and repayment tenures across SBI, HDFC Bank, and ICICI Bank." />
        <link rel="canonical" href="https://finance.truyon.com/bank-home-loan-comparison-2026" />
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
              <span className="text-blue-600 dark:text-blue-400 font-medium">Home Loan Comparison</span>
              <span>|</span>
              <span>6 min read</span>
              <span>|</span>
              <span>August 8, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              Home Loan - SBI vs. ICICI Bank vs. HDFC Bank
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              A comprehensive side-by-side comparison of India's leading housing finance lenders to help you secure the best deal.
            </p>
          </header>

          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80" 
            alt="Home loan comparison and real estate financing" 
            className="w-full rounded-xl mb-8 shadow-sm object-cover h-80"
          />

          <section className="mb-8 text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
            <p>
              Owning a home is one of the primary life goals for every household. However, with rising real estate prices across India, purchasing residential property requires careful financial planning. This is where a home loan comes to your rescue, bridging the gap between your savings and your dream home.
            </p>
            <p>
              With multiple banking institutions offering competitive housing finance products, choosing the right lender can be challenging. Below is a detailed feature comparison between three of India's leading lenders: <strong>State Bank of India (SBI)</strong>, <strong>HDFC Bank</strong>, and <strong>ICICI Bank</strong>.
            </p>

            <h3 className="text-2xl font-bold text-slate-800 dark:text-white pt-6 mb-4">Quick Feature Comparison Matrix</h3>
            
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 my-4 overflow-x-auto border border-slate-200 dark:border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200 dark:border-slate-600">
                    <th className="text-left py-2 font-semibold text-slate-800 dark:text-white">Particulars</th>
                    <th className="text-left py-2 font-semibold text-slate-800 dark:text-white">SBI Home Loan</th>
                    <th className="text-left py-2 font-semibold text-slate-800 dark:text-white">HDFC Home Loan</th>
                    <th className="text-left py-2 font-semibold text-slate-800 dark:text-white">ICICI Home Loan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-600/50">
                  <tr>
                    <td className="py-2 font-medium">Age of Primary Applicant</td>
                    <td className="py-2">18–70 years</td>
                    <td className="py-2">18–65 years</td>
                    <td className="py-2">21–65 years</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Profession</td>
                    <td className="py-2">Salaried / Self-Employed</td>
                    <td className="py-2">Salaried / Self-Employed</td>
                    <td className="py-2">Salaried / Self-Employed</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Maximum Funding</td>
                    <td className="py-2">Up to ₹5 crore</td>
                    <td className="py-2">Up to ₹10 crore</td>
                    <td className="py-2">Up to ₹5 crore</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Repayment Tenure</td>
                    <td className="py-2">Up to 30 years</td>
                    <td className="py-2">Up to 30 years</td>
                    <td className="py-2">Up to 30 years</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Processing Fees</td>
                    <td className="py-2">0.35% + GST</td>
                    <td className="py-2">0.50% or ₹3,000 + GST</td>
                    <td className="py-2">0.50% – 1% + GST (Min ₹2,000, Max ₹10,000)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <InFeedAd />

            <h3 className="text-2xl font-bold text-slate-800 dark:text-white pt-6 mb-4">Detailed Breakdown by Parameter</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">1. Age and Co-Applicants</h4>
                <p className="mt-1">
                  Age limits vary slightly across institutions. SBI permits primary applicants aged 18 to 70 years, whereas HDFC allows 18 to 65 years and ICICI sets the minimum age at 21 up to 65 years. All three lenders allow the inclusion of co-applicants or family members (even non-co-owners in certain structures) to enhance overall loan eligibility and repayment tenure.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">2. Interest Rate Benchmarks</h4>
                <p className="mt-1">
                  Interest structures depend on underlying benchmarks: SBI and ICICI link rates directly to the Marginal Cost of Funds-based Lending Rate (MCLR), while HDFC connects rates to its Retail Prime Lending Rate (RPLR). Concessional rates (typically around 0.05% lower) are frequently available for female borrowers across these banks.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">3. Maximum Loan Amounts</h4>
                <p className="mt-1">
                  While SBI and ICICI cap their standard home loan funding at ₹5 crore, HDFC extends maximum limits up to ₹10 crore, subject to applicant income, property valuation, and credit score evaluation.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">4. Documentation Requirements</h4>
                <p className="mt-1">
                  Documentation standards remain consistent across all three institutions, requiring standard KYC proofs, income verification documents (salary slips or ITRs), up-to-date bank statements, property chain documents, a signed application form, and processing fee instruments.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <p className="font-bold text-slate-800 dark:text-white mb-2">Evaluate Your Monthly EMIs</p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">Use our calculator to simulate different interest rates and loan amounts.</p>
            <a 
              href="/" 
              onClick={navigateToCalculator}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
            >
              Back to Calculator →
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-400">Source: MyMoneyMantra & Banking Insights (Updated: August 8, 2026)</p>
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

export default BankHomeLoanComparison2026;