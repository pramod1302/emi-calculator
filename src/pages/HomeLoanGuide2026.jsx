import React from 'react';
import { Helmet } from 'react-helmet';
import { TopBannerAd, InFeedAd, BottomBannerAd } from '../components/AdUnits';

function HomeLoanGuide2026() {
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
        <title>10 Things You Must Know Before You Avail a Home Loan - Truyon Finance</title>
        <meta name="description" content="Planning to buy a house? Here are 10 essential things you need to know about eligibility, loan amounts, documentation, EMIs, and insurance before applying for a home loan." />
        <link rel="canonical" href="https://finance.truyon.com/home-loan-guide-2026" />
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
              <span className="text-blue-600 dark:text-blue-400 font-medium">Home Loan Guide</span>
              <span>|</span>
              <span>7 min read</span>
              <span>|</span>
              <span>August 8, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              10 Things You Must Know Before You Avail a Home Loan
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              Everything you need to know about eligibility, loan types, documentation, and costs before committing to a housing loan.
            </p>
          </header>

          <section className="mb-8 text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
            <p>
              Owning a house is one of the biggest financial decisions that you and your family will ever make. For most first-time home buyers, availing a home loan is the only way they can bring alive their aspirations of home ownership.
            </p>
            <p>
              If you are planning to take a home loan, it’s important to understand all about it; after all, it’s a commitment that will run into years till you can repay the entire loan amount. Here are 10 key things you should know before you apply:
            </p>

            <div className="space-y-6 pt-4">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">1. Eligibility Criteria</h3>
                <p>
                  Lenders will assess your eligibility for a housing loan primarily on the basis of your income and repayment capacity. Other important considerations include age, educational qualifications, financial position, number of dependents, spouse’s income, and job stability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">2. Types of Home Loans</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Adjustable/Floating Rate Loans:</strong> Interest rates are linked to the lender’s benchmark rate and fluctuate proportionately.</li>
                  <li><strong>Fixed Rate Loans:</strong> Interest rate remains fixed throughout the loan tenure.</li>
                  <li><strong>Combination Loans:</strong> Offers a mix of fixed and floating interest rates for different parts of the loan.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">3. Home First or Loan First?</h3>
                <p>
                  It is advisable to get your home loan pre-approved before selecting your home. Pre-approval fixes your exact budget, makes your search focused, and helps you negotiate better deals faster.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">4. Loan Amount</h3>
                <p>
                  Most lenders provide housing loans ranging from 75% to 90% of the property cost. Including a co-applicant (spouse, parent, or adult child) can help increase your eligible loan amount.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">5. Cost of Your Home Loan</h3>
                <p>
                  Factor in interest payments, processing fees, administrative charges, and prepayment penalties. Per regulatory guidelines, floating-rate home loans should carry zero prepayment charges.
                </p>
              </div>

              <InFeedAd />

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">6. EMI / Pre-EMI</h3>
                <p>
                  EMIs cover both principal and interest components. For under-construction properties, you can opt for Pre-EMI interest payments during the construction phase before full principal repayment kicks in.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">7. Tenure</h3>
                <p>
                  Home loans can be sanctioned for up to 30 years. A longer tenure reduces your monthly EMI burden, though it increases the overall interest payout over time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">8. Documentation</h3>
                <p>
                  Required documentation includes KYC records (identity and address proofs like [Aadhaar Redacted], passport, voter ID), income documents (salary slips or ITR), and original property title deeds required for disbursement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">9. Insurance Cover</h3>
                <p>
                  Purchasing a loan cover term assurance plan is highly recommended. It safeguards your family by clearing the outstanding loan liability in the unfortunate event of your demise.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">10. Default and Recovery</h3>
                <p>
                  Missing more than 3 consecutive instalments empowers lenders to take action under the SARFAESI Act, 2002. Always communicate with your lender early if you face financial distress.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <p className="font-bold text-slate-800 dark:text-white mb-2">Plan Your Home Loan Today</p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">Use our interactive calculators to test different tenures and EMIs.</p>
            <a 
              href="/" 
              onClick={navigateToCalculator}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
            >
              Back to Calculator →
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-400">Source: HDFC Home Loans Blog</p>
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

export default HomeLoanGuide2026;