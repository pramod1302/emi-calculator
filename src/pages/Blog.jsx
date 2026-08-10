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
    {
  slug: '/home-loan-guide-2026',
  title: '10 Things You Must Know Before You Avail a Home Loan',
  date: 'August 8, 2026',
  category: 'Home Loan',
  excerpt: 'Planning to buy a house? Learn about eligibility, interest types, pre-approval, documentation, and insurance considerations before applying.'
},
{
  slug: '/car-loan-guide-2026',
  title: 'Key Things to Keep In Mind Before Applying for a Car Loan',
  date: 'August 8, 2026',
  category: 'Car Loan',
  excerpt: 'Essential guide covering car loan interest rates, CIBIL score requirements, documentation, and tips to secure the best vehicle financing deal.'
},
{
  slug: '/personal-loan-tips-2026',
  title: '9 Best Personal Loan Tips You Must Follow',
  date: 'August 8, 2026',
  category: 'Personal Loan',
  excerpt: 'Essential tips for managing personal loans, evaluating interest rates, maintaining high CIBIL scores, and optimizing your repayment tenure.'
},
{
  slug: '/low-cibil-personal-loan-2026',
  title: 'Can You Get a Personal Loan with a Low CIBIL Score?',
  date: 'July 16, 2026',
  category: 'Banking',
  excerpt: 'Explore actionable options, co-applicant strategies, and credit-building practices to secure a personal loan even with a low CIBIL score.'
},
{
  slug: '/gold-loan-guide-2026',
  title: '5 Essential Things to Consider Before Getting a Gold Loan',
  date: 'August 8, 2026',
  category: 'Gold Loan',
  excerpt: 'Key considerations before taking a gold loan, including interest rate comparison, tenure choices, gold purity valuation, and choosing trustworthy lenders.'
},
{
  slug: '/bank-home-loan-comparison-2026',
  title: 'Home Loan - SBI vs. ICICI Bank vs. HDFC Bank',
  date: 'August 8, 2026',
  category: 'Home Loan',
  excerpt: 'Detailed comparison of interest rates, eligibility, processing fees, and maximum funding limits across SBI, HDFC Bank, and ICICI Bank.'
},
{
  slug: '/home-loan-balance-transfer-2026',
  title: 'How to Transfer Home Loan from One Bank to Another',
  date: 'August 8, 2026',
  category: 'Home Loan',
  excerpt: 'A comprehensive guide on transferring your home loan balance to a new bank to secure lower interest rates and save on your overall interest outgo.'
},
{
  slug: '/standing-deposit-facility-2026',
  title: 'Standing Deposit Facility (SDF): Meaning and Implications for Investors',
  date: 'August 23, 2024',
  category: 'Personal Finance',
  excerpt: 'Explore the definition of the Standing Deposit Facility (SDF), how it absorbs central bank liquidity without collateral, and what it means for online stock investors.'
},
{
  slug: '/nbfc-vs-bank-personal-loan-2026',
  title: 'NBFC vs. Traditional Bank Personal Loans: Which is Better?',
  date: 'October 3, 2025',
  category: 'Personal Finance',
  excerpt: 'Compare NBFCs and traditional banks for personal loans. Understand key differences in approval speeds, CIBIL scores, documentation, and interest rates.'
},
{
  slug: '/sbi-research-credit-growth-2026',
  title: 'Bank Credit Growth to Remain Strong Despite Deposit Gap: SBI Research',
  date: 'July 20, 2026',
  category: 'Banking & Economy',
  excerpt: 'SBI Research report indicates Indian banks are in a goldilocks period with strong capital adequacy, as credit growth of 18.6% outpaces deposit expansion.'
},
{
  slug: '/varma-bank-dominance-2026',
  title: 'Gradual End of Bank Dominance in India',
  date: 'February 9, 2026',
  category: 'Financial Markets Regulation',
  excerpt: 'Prof. Jayanth R. Varma explores how household savings shifting from bank deposits to mutual funds and pension funds are gradually ending bank dominance in India.'
},
{
  slug: '/choosing-savings-account-2026',
  title: 'How to Choose the Right Savings Account for Your Needs?',
  date: 'June 3, 2026',
  category: 'Personal Finance',
  excerpt: 'A comprehensive guide on evaluating savings accounts based on interest rates, minimum balance requirements, fees, and individual profiles.'
},
{
  slug: '/fixed-deposit-guide-2026',
  title: 'Fixed Deposit (FD) Guide 2026: Rates, Comparison & Benefits',
  date: 'August 5, 2026',
  category: 'Investment Guide',
  excerpt: 'Compare latest fixed deposit interest rates across top banks, explore tax-saving FDs, senior citizen benefits, DICGC insurance coverage, and calculation features.'
},
{
  slug: '/emergency-fund-guide-2026',
  title: 'What to Consider Before Building an Emergency Fund',
  date: 'September 25, 2023',
  category: 'Personal Finance',
  excerpt: 'Learn why an emergency fund is crucial, how to calculate your target corpus (3-6 months of expenses), and where to invest it safely in liquid funds.'
},
{
  slug: '/no-spend-challenge-2026',
  title: 'The 7-Day No-Spend Challenge: How to Build Financial Awareness',
  date: 'September 25, 2023',
  category: 'Personal Finance',
  excerpt: 'Transform your money mindset with a 7-day no-spend challenge. A practical guide to resetting spending habits and identifying hidden spending triggers.'
},
{
  slug: '/grocery-savings-guide-2026',
  title: '6 Smart Ways to Save Money on Your Grocery Shopping',
  date: 'November 12, 2025',
  category: 'Budgeting Tips',
  excerpt: 'Learn how to manage your monthly grocery budget with 6 essential hacks, including shelf scanning, avoiding bundle traps, and the cash payment rule.'
},
{
  slug: '/invest-or-repay-debts-2026',
  title: 'Should You Invest or Repay Your Debts?',
  date: 'August 8, 2026',
  category: 'Personal Finance',
  excerpt: 'Weigh the pros and cons of paying off high-interest debts versus investing. Explore strategies for credit cards, emergency funds, and mortgages.'
},
{
  slug: '/holiday-overspending-recovery-2026',
  title: 'If You’ve Already Overspent This Season: How To Recover Without Shame',
  date: 'December 12, 2025',
  category: 'Financial Mindset & Wellness',
  excerpt: 'Practical strategies to overcome holiday overspending, banish financial shame, organize BNPL bills, and build a healthy financial mindset.'
},
{
  slug: '/invisible-price-tag-2026',
  title: 'The Invisible Price Tag: How Time Shapes Our Spending Choices',
  date: 'November 9, 2025',
  category: 'Behavioural Finance',
  excerpt: 'Explore the money psychology paradox behind paying for instant convenience while procrastinating on critical financial tasks like KYC and SIP setups.'
},
{
  slug: '/hidden-cost-delaying-investments-2026',
  title: 'Hidden Cost of Delaying Investments: Starting SIPs Late Can Kill Crores From Your Portfolio',
  date: 'April 18, 2026',
  category: 'Mutual Funds & SIP',
  excerpt: 'Explore why starting mutual fund SIPs early beats investing larger sums later. Learn how time, compounding, and rupee-cost averaging drive wealth creation.'
},
{
  slug: '/start-sip-500-per-month-2026',
  title: 'Start SIP With ₹500 Per Month: Build Long-Term Wealth Easily',
  date: 'August 8, 2026',
  category: 'Mutual Funds & SIP',
  excerpt: 'Learn how to start a mutual fund SIP with just ₹500 a month, cultivate financial discipline, and leverage rupee-cost averaging.'
},
{
  slug: '/sip-vs-fd-guide-2026',
  title: 'SIP vs FD: Which Investment is Better for You?',
  date: 'August 8, 2026',
  category: 'Investment Guide',
  excerpt: 'Compare Systematic Investment Plans (SIP) and Fixed Deposits (FD) to determine how to balance guaranteed safety with long-term wealth creation.'
},
{
  slug: '/asset-allocation-guide-2026',
  title: 'Understanding Asset Allocation: Why You Need Debt and Gold in Your Portfolio',
  date: 'July 26, 2026',
  category: 'Investment Strategy',
  excerpt: 'A comprehensive guide on balancing equities, debt, and gold to manage portfolio risk, beat inflation, and adapt to different life stages.'
},
{
  slug: '/power-of-compounding-2026',
  title: 'The Power of Compounding: Why Starting Early Wins',
  date: 'September 1, 2025',
  category: 'Wealth Creation',
  excerpt: 'Understand how compound interest turns small, regular investments into significant wealth over time. See why starting two years earlier beats starting with 33% more money.'
},
{
  slug: '/mutual-funds-vs-stocks-2026',
  title: 'Mutual Funds vs. Direct Stocks: Which Should You Choose?',
  date: 'August 8, 2026',
  category: 'Investment Strategy',
  excerpt: 'A detailed comparison of mutual funds and direct stocks to help you balance professional management against individual portfolio control.'
},

{
  slug: '/sip-guide-2026',
  title: 'Systematic Investment Plan (SIP): The Path to Disciplined Wealth Creation',
  date: 'August 8, 2026',
  category: 'Mutual Funds',
  excerpt: 'Learn the mechanics of SIPs, the power of rupee-cost averaging, and how the 7-5-3-1 investing rule can help you build long-term wealth.'
},
{
  slug: '/mutual-fund-factsheet-guide-2026',
  title: 'How to Read a Mutual Fund Factsheet Like a Pro',
  date: 'August 8, 2026',
  category: 'Investment Education',
  excerpt: 'Learn how to decode mutual fund factsheets, covering key ratios like Beta, Sharpe, expense ratios, and understanding riskometers for smarter investing.'
},
{
  slug: '/ten-rupee-weekly-challenge-2026',
  title: 'The ₹10 Weekly Investment Challenge: How Small Amounts Add Up',
  date: 'August 8, 2026',
  category: 'Wealth Creation',
  excerpt: 'A micro-investing strategy to help you build financial discipline. Learn how the ₹10 weekly challenge can serve as a stepping stone to your first SIP.'
},
{
  slug: '/top-sip-funds-2026',
  title: 'Top 10 Mutual Funds for SIP in 2026',
  date: 'August 8, 2026',
  category: 'Mutual Funds',
  excerpt: 'A comprehensive guide on top-performing mutual funds for SIP investment in 2026, covering large-cap, mid-cap, and sectoral fund strategies.'
},
{
  slug: '/save-home-loan-interest-2026',
  title: '6 Effective Strategies to Save ₹5 Lakh on Home Loan Interest',
  date: 'May 8, 2026',
  category: 'Home Loan',
  excerpt: 'Learn 6 proven ways to minimize your home loan interest costs, including improving your credit score, negotiating with lenders, and leveraging balance transfers.'
},
{
  slug: '/home-loan-tenure-guide-2026',
  title: 'What is the Ideal Home Loan Tenure? 10, 20, or 30 Years?',
  date: 'March 28, 2026',
  category: 'Home Loan',
  excerpt: 'Understand how home loan tenure affects your total interest payout and EMI. Learn the 20-year "sweet spot" and how to calculate affordability.'
},
{
  slug: '/term-insurance-vs-ulip-2026',
  title: 'Term Insurance vs. ULIP: Which Is Better for You?',
  date: 'October 15, 2025',
  category: 'Life Insurance',
  excerpt: 'A clear comparison of term insurance and ULIPs to help you decide between pure protection and investment-linked life insurance.'
},
{
  slug: '/claim-settlement-ratio-guide-2026',
  title: 'Understanding Claim Settlement Ratio: Why It Matters',
  date: 'March 28, 2023',
  category: 'Life Insurance',
  excerpt: 'Learn what Claim Settlement Ratio (CSR) means, how to calculate it, its limitations, and practical steps to avoid claim rejections.'
},
{
  slug: '/top-health-insurance-2026',
  title: 'Top 5 Health Insurance Companies in India (2026 Comparison)',
  date: 'August 8, 2026',
  category: 'Health Insurance',
  excerpt: 'Explore Ditto’s top-rated health insurance plans for 2026, featuring HDFC Ergo Optima Secure+, Care Supreme, and Aditya Birla Activ One.'
},
{
  "slug": "/msmed-amendment-bill-2026",
  "title": "MSMED Amendment Bill 2026 Passed: What It Means for Indian Small Businesses",
  "date": "August 7, 2026",
  "category": "Policy & Regulations",
  "excerpt": "Discover key takeaways from the MSMED Amendment Bill 2026 passed by Parliament. Learn how it tackles delayed payments, TReDS mandates, and eases compliance."
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