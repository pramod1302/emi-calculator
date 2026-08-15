import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { TopBannerAd, InFeedAd, BottomBannerAd } from '../components/AdUnits';

// Import all blog post page components
import UPIChargesBill from './UPIChargesBill';
import RBIRepoRate from './RBIRepoRate';
import SIPvsFD from './SIPvsFD';
import HomeLoanTips from './HomeLoanTips';
import MFOnlyPMS from './MFOnlyPMS';
import GoldmanSachsGDP from './GoldmanSachsGDP';
import Budget2026 from './Budget2026';
import MoodysForecast from './MoodysForecast';
import IncomeTaxRules2026 from './IncomeTaxRules2026';
import HealthInsuranceGuide from './HealthInsuranceGuide';
import StateGSecAuction from './StateGSecAuction';
import SBIClerk2026 from './SBIClerk2026';
import SBIQ1Results2026 from './SBIQ1Results2026';
import HindalcoQ1Results2026 from './HindalcoQ1Results2026';
import ModelBITReview2026 from './ModelBITReview2026';
import UrbanCooperativeBanks2026 from './UrbanCooperativeBanks2026';
import HomeLoanGuide2026 from './HomeLoanGuide2026';
import CarLoanGuide2026 from './CarLoanGuide2026';
import PersonalLoanTips2026 from './PersonalLoanTips2026';
import LowCibilPersonalLoan2026 from './LowCibilPersonalLoan2026';
import GoldLoanGuide2026 from './GoldLoanGuide2026';
import BankHomeLoanComparison2026 from './BankHomeLoanComparison2026';
import HomeLoanBalanceTransfer2026 from './HomeLoanBalanceTransfer2026';
import StandingDepositFacility2026 from './StandingDepositFacility2026';
import NbfcVsBankPersonalLoan2026 from './NbfcVsBankPersonalLoan2026';
import SbiResearchCreditGrowth2026 from './SbiResearchCreditGrowth2026';
import VarmaBankDominance2026 from './VarmaBankDominance2026';
import ChoosingSavingsAccount2026 from './ChoosingSavingsAccount2026';
import FixedDepositGuide2026 from './FixedDepositGuide2026';
import EmergencyFundGuide2026 from './EmergencyFundGuide2026';
import NoSpendChallenge2026 from './NoSpendChallenge2026';
import GrocerySavingsGuide2026 from './GrocerySavingsGuide2026';
import InvestOrRepayDebts2026 from './InvestOrRepayDebts2026';
import HolidayOverspendingRecovery2026 from './HolidayOverspendingRecovery2026';
import InvisiblePriceTag2026 from './InvisiblePriceTag2026';
import HiddenCostDelayingInvestments2026 from './HiddenCostDelayingInvestments2026';
import StartSip500PerMonth2026 from './StartSip500PerMonth2026';
import SipVsFdGuide2026 from './SipVsFdGuide2026';
import AssetAllocationGuide2026 from './AssetAllocationGuide2026';
import PowerOfCompoundingGuide2026 from './PowerOfCompoundingGuide2026';
import MutualFundsVsStocks2026 from './MutualFundsVsStocks2026';
import SipGuide2026 from './SipGuide2026';
import MutualFundFactsheetGuide2026 from './MutualFundFactsheetGuide2026';
import TenRupeeWeeklyChallenge2026 from './TenRupeeWeeklyChallenge2026';
import TopSipFunds2026 from './TopSipFunds2026';
import SaveHomeLoanInterest2026 from './SaveHomeLoanInterest2026';
import HomeLoanTenureGuide2026 from './HomeLoanTenureGuide2026';
import TermInsuranceVsUlip2026 from './TermInsuranceVsUlip2026';
import ClaimSettlementRatioGuide2026 from './ClaimSettlementRatioGuide2026';
import TopHealthInsurance2026 from './TopHealthInsurance2026';
import MSMEDAmendment2026 from './MSMEDAmendment2026';

// ==========================================
// ARTICLE COMPONENT MAPPING (with /blog/ prefix)
// ==========================================
const articleComponents = {
  'blog/upi-charges-bill': UPIChargesBill,
  'blog/rbi-repo-rate-august-2026': RBIRepoRate,
  'blog/sip-vs-fd': SIPvsFD,
  'blog/home-loan-tips': HomeLoanTips,
  'blog/sebi-mf-pms-proposal': MFOnlyPMS,
  'blog/goldman-sachs-gdp-upgrade': GoldmanSachsGDP,
  'blog/budget-2026': Budget2026,
  'blog/moodys-forecast': MoodysForecast,
  'blog/income-tax-rules-2026': IncomeTaxRules2026,
  'blog/health-insurance-guide': HealthInsuranceGuide,
  'blog/state-gsec-auction': StateGSecAuction,
  'blog/sbi-clerk-recruitment-2026': SBIClerk2026,
  'blog/sbi-q1-results-2026': SBIQ1Results2026,
  'blog/hindalco-q1-results-2026': HindalcoQ1Results2026,
  'blog/model-bit-review-2026': ModelBITReview2026,
  'blog/urban-cooperative-banks-2026': UrbanCooperativeBanks2026,
  'blog/home-loan-guide-2026': HomeLoanGuide2026,
  'blog/car-loan-guide-2026': CarLoanGuide2026,
  'blog/personal-loan-tips-2026': PersonalLoanTips2026,
  'blog/low-cibil-personal-loan-2026': LowCibilPersonalLoan2026,
  'blog/gold-loan-guide-2026': GoldLoanGuide2026,
  'blog/bank-home-loan-comparison-2026': BankHomeLoanComparison2026,
  'blog/home-loan-balance-transfer-2026': HomeLoanBalanceTransfer2026,
  'blog/standing-deposit-facility-2026': StandingDepositFacility2026,
  'blog/nbfc-vs-bank-personal-loan-2026': NbfcVsBankPersonalLoan2026,
  'blog/sbi-research-credit-growth-2026': SbiResearchCreditGrowth2026,
  'blog/varma-bank-dominance-2026': VarmaBankDominance2026,
  'blog/choosing-savings-account-2026': ChoosingSavingsAccount2026,
  'blog/fixed-deposit-guide-2026': FixedDepositGuide2026,
  'blog/emergency-fund-guide-2026': EmergencyFundGuide2026,
  'blog/no-spend-challenge-2026': NoSpendChallenge2026,
  'blog/grocery-savings-guide-2026': GrocerySavingsGuide2026,
  'blog/invest-or-repay-debts-2026': InvestOrRepayDebts2026,
  'blog/holiday-overspending-recovery-2026': HolidayOverspendingRecovery2026,
  'blog/invisible-price-tag-2026': InvisiblePriceTag2026,
  'blog/hidden-cost-delaying-investments-2026': HiddenCostDelayingInvestments2026,
  'blog/start-sip-500-per-month-2026': StartSip500PerMonth2026,
  'blog/sip-vs-fd-guide-2026': SipVsFdGuide2026,
  'blog/asset-allocation-guide-2026': AssetAllocationGuide2026,
  'blog/power-of-compounding-2026': PowerOfCompoundingGuide2026,
  'blog/mutual-funds-vs-stocks-2026': MutualFundsVsStocks2026,
  'blog/sip-guide-2026': SipGuide2026,
  'blog/mutual-fund-factsheet-guide-2026': MutualFundFactsheetGuide2026,
  'blog/ten-rupee-weekly-challenge-2026': TenRupeeWeeklyChallenge2026,
  'blog/top-sip-funds-2026': TopSipFunds2026,
  'blog/save-home-loan-interest-2026': SaveHomeLoanInterest2026,
  'blog/home-loan-tenure-guide-2026': HomeLoanTenureGuide2026,
  'blog/term-insurance-vs-ulip-2026': TermInsuranceVsUlip2026,
  'blog/claim-settlement-ratio-guide-2026': ClaimSettlementRatioGuide2026,
  'blog/top-health-insurance-2026': TopHealthInsurance2026,
  'blog/msmed-amendment-bill-2026': MSMEDAmendment2026,
};

// ==========================================
// ARTICLE LIST (with /blog/ prefix in slugs)
// ==========================================
const articles = [
  {
    slug: '/blog/upi-charges-bill',
    title: 'Lok Sabha Passes Bill to Authorise Banks to Levy Charges on UPI Transactions',
    date: 'August 6, 2026',
    category: 'Finance News',
    excerpt: 'The Taxation and other Laws (Amendment) Bill amends the Payment and Settlement Systems Act, 2007, paving the way for Merchant Discount Rate (MDR) on UPI payments.'
  },
  {
    slug: '/blog/rbi-repo-rate-august-2026',
    title: 'RBI MPC Keeps Policy Rate Unchanged at 5.25%',
    date: 'August 5, 2026',
    category: 'RBI Policy',
    excerpt: 'MPC votes unanimously for status quo, retains neutral stance amid inflation concerns and global uncertainties.'
  },
  {
    slug: '/blog/home-loan-tips',
    title: 'How to Save ₹5 Lakh on Home Loan Interest',
    date: 'March 15, 2026',
    category: 'Home Loan',
    excerpt: 'Practical strategies to reduce your home loan interest burden and become debt-free faster.'
  },
  {
    slug: '/blog/sebi-mf-pms-proposal',
    title: 'SEBI Proposes Mutual Fund-Only PMS: Key Changes That Could Impact Your Investments',
    date: 'August 7, 2026',
    category: 'Mutual Funds',
    excerpt: 'Market regulator\'s new framework could lower entry barriers for affluent investors and reshape India\'s wealth management industry with a ₹25 lakh entry point.'
  },
  {
    slug: '/blog/sip-vs-fd',
    title: 'SIP vs FD: Which Investment is Better for You?',
    date: 'March 16, 2026',
    category: 'Investment',
    excerpt: 'A detailed comparison of Systematic Investment Plans and Fixed Deposits to help you make the right choice.'
  },
  {
    slug: '/blog/goldman-sachs-gdp-upgrade',
    title: "Goldman Sachs Upgrades India's 2026 GDP Growth Forecast to 6.8%",
    date: 'August 7, 2026',
    category: 'Economy',
    excerpt: 'US-Iran peace deal and lower crude oil prices drive upgrade, with inflation outlook improving.'
  },
  {
    slug: '/blog/budget-2026',
    title: 'Union Budget 2026-27: Key Highlights and Tax Changes Explained',
    date: 'August 7, 2026',
    category: 'Budget',
    excerpt: 'New Income Tax Act effective April 1, 2026, capex push to ₹12.2 lakh crore, and major changes for taxpayers.'
  },
  {
    slug: '/blog/moodys-forecast',
    title: "Moody's Lowers India's 2026 GDP Growth Forecast to 6%",
    date: 'August 7, 2026',
    category: 'Economy',
    excerpt: 'Rating agency cites weaker private consumption, slower investments, and high energy costs as headwinds.'
  },
  {
    slug: '/blog/income-tax-rules-2026',
    title: 'New Income Tax Rules 2026: Key Changes for HRA, Capital Gains & More',
    date: 'August 7, 2026',
    category: 'Tax Rules',
    excerpt: 'CBDT notifies Income-tax Rules 2026 effective April 1, 2026, implementing the new Income-tax Act, 2025.'
  },
  {
    slug: '/blog/health-insurance-guide',
    title: 'How to Choose the Right Health Insurance Plan in India',
    date: 'August 7, 2026',
    category: 'Insurance',
    excerpt: 'A comprehensive guide to selecting the best health insurance policy for you and your family.'
  },
  {
    slug: '/blog/state-gsec-auction',
    title: 'RBI Announces Auction of State Government Securities worth ₹15,300 Crore',
    date: 'August 8, 2026',
    category: 'RBI Policy',
    excerpt: 'State Governments to raise ₹15,300 crore via auction on August 11, 2026. Retail investors can participate via RBI Retail Direct.'
  },
  {
    slug: '/blog/sbi-clerk-recruitment-2026',
    title: 'SBI Clerk Recruitment 2026: 1,538 Backlog Vacancies Announced',
    date: 'August 8, 2026',
    category: 'Government Jobs',
    excerpt: 'SBI invites applications for 1,538 Junior Associate vacancies. Check eligibility and how to apply for the special drive.'
  },
  {
    slug: '/blog/sbi-q1-results-2026',
    title: 'SBI Standalone Net Profit Up 10.2% to ₹21,121 Crore on Higher Interest Income',
    date: 'August 7, 2026',
    category: 'Banking News',
    excerpt: 'State Bank of India reports a 10.2% jump in Q1 net profit powered by a 15% increase in net interest income and robust credit expansion.'
  },
  {
    slug: '/blog/hindalco-q1-results-2026',
    title: 'Hindalco Q1 Net Profit Surges 75% to ₹7,013 Crore, Sales Up 32%',
    date: 'August 7, 2026',
    category: 'Corporate News',
    excerpt: 'Aditya Birla flagship Hindalco posts strong Q1 results driven by robust momentum in the India aluminum business and recovery at Novelis.'
  },
  {
    slug: '/blog/model-bit-review-2026',
    title: 'Revamp of Model Bilateral Investment Treaty in Works, to be Presented to Cabinet Soon: Secy',
    date: 'August 7, 2026',
    category: 'Economy & Policy',
    excerpt: 'Finance Ministry reviewing India\'s Model BIT framework to enhance investor-friendly terms, address global arbitration practices, and protect overseas Indian investments.'
  },
  {
    slug: '/blog/urban-cooperative-banks-2026',
    title: 'RBI Gives Urban Cooperative Banks New Lease of Life | Explained',
    date: 'August 7, 2026',
    category: 'Banking Policy',
    excerpt: 'RBI resumes on-tap licensing for Urban Cooperative Banks after two decades, introducing strict net-worth and capital adequacy criteria to foster financial inclusion safely.'
  },
  {
    slug: '/blog/home-loan-guide-2026',
    title: '10 Things You Must Know Before You Avail a Home Loan',
    date: 'August 8, 2026',
    category: 'Home Loan',
    excerpt: 'Planning to buy a house? Learn about eligibility, interest types, pre-approval, documentation, and insurance considerations before applying.'
  },
  {
    slug: '/blog/car-loan-guide-2026',
    title: 'Key Things to Keep In Mind Before Applying for a Car Loan',
    date: 'August 8, 2026',
    category: 'Car Loan',
    excerpt: 'Essential guide covering car loan interest rates, CIBIL score requirements, documentation, and tips to secure the best vehicle financing deal.'
  },
  {
    slug: '/blog/personal-loan-tips-2026',
    title: '9 Best Personal Loan Tips You Must Follow',
    date: 'August 8, 2026',
    category: 'Personal Loan',
    excerpt: 'Essential tips for managing personal loans, evaluating interest rates, maintaining high CIBIL scores, and optimizing your repayment tenure.'
  },
  {
    slug: '/blog/low-cibil-personal-loan-2026',
    title: 'Can You Get a Personal Loan with a Low CIBIL Score?',
    date: 'July 16, 2026',
    category: 'Banking',
    excerpt: 'Explore actionable options, co-applicant strategies, and credit-building practices to secure a personal loan even with a low CIBIL score.'
  },
  {
    slug: '/blog/gold-loan-guide-2026',
    title: '5 Essential Things to Consider Before Getting a Gold Loan',
    date: 'August 8, 2026',
    category: 'Gold Loan',
    excerpt: 'Key considerations before taking a gold loan, including interest rate comparison, tenure choices, gold purity valuation, and choosing trustworthy lenders.'
  },
  {
    slug: '/blog/bank-home-loan-comparison-2026',
    title: 'Home Loan - SBI vs. ICICI Bank vs. HDFC Bank',
    date: 'August 8, 2026',
    category: 'Home Loan',
    excerpt: 'Detailed comparison of interest rates, eligibility, processing fees, and maximum funding limits across SBI, HDFC Bank, and ICICI Bank.'
  },
  {
    slug: '/blog/home-loan-balance-transfer-2026',
    title: 'How to Transfer Home Loan from One Bank to Another',
    date: 'August 8, 2026',
    category: 'Home Loan',
    excerpt: 'A comprehensive guide on transferring your home loan balance to a new bank to secure lower interest rates and save on your overall interest outgo.'
  },
  {
    slug: '/blog/standing-deposit-facility-2026',
    title: 'Standing Deposit Facility (SDF): Meaning and Implications for Investors',
    date: 'August 23, 2024',
    category: 'Personal Finance',
    excerpt: 'Explore the definition of the Standing Deposit Facility (SDF), how it absorbs central bank liquidity without collateral, and what it means for online stock investors.'
  },
  {
    slug: '/blog/nbfc-vs-bank-personal-loan-2026',
    title: 'NBFC vs. Traditional Bank Personal Loans: Which is Better?',
    date: 'October 3, 2025',
    category: 'Personal Finance',
    excerpt: 'Compare NBFCs and traditional banks for personal loans. Understand key differences in approval speeds, CIBIL scores, documentation, and interest rates.'
  },
  {
    slug: '/blog/sbi-research-credit-growth-2026',
    title: 'Bank Credit Growth to Remain Strong Despite Deposit Gap: SBI Research',
    date: 'July 20, 2026',
    category: 'Banking & Economy',
    excerpt: 'SBI Research report indicates Indian banks are in a goldilocks period with strong capital adequacy, as credit growth of 18.6% outpaces deposit expansion.'
  },
  {
    slug: '/blog/varma-bank-dominance-2026',
    title: 'Gradual End of Bank Dominance in India',
    date: 'February 9, 2026',
    category: 'Financial Markets Regulation',
    excerpt: 'Prof. Jayanth R. Varma explores how household savings shifting from bank deposits to mutual funds and pension funds are gradually ending bank dominance in India.'
  },
  {
    slug: '/blog/choosing-savings-account-2026',
    title: 'How to Choose the Right Savings Account for Your Needs?',
    date: 'June 3, 2026',
    category: 'Personal Finance',
    excerpt: 'A comprehensive guide on evaluating savings accounts based on interest rates, minimum balance requirements, fees, and individual profiles.'
  },
  {
    slug: '/blog/fixed-deposit-guide-2026',
    title: 'Fixed Deposit (FD) Guide 2026: Rates, Comparison & Benefits',
    date: 'August 5, 2026',
    category: 'Investment Guide',
    excerpt: 'Compare latest fixed deposit interest rates across top banks, explore tax-saving FDs, senior citizen benefits, DICGC insurance coverage, and calculation features.'
  },
  {
    slug: '/blog/emergency-fund-guide-2026',
    title: 'What to Consider Before Building an Emergency Fund',
    date: 'September 25, 2023',
    category: 'Personal Finance',
    excerpt: 'Learn why an emergency fund is crucial, how to calculate your target corpus (3-6 months of expenses), and where to invest it safely in liquid funds.'
  },
  {
    slug: '/blog/no-spend-challenge-2026',
    title: 'The 7-Day No-Spend Challenge: How to Build Financial Awareness',
    date: 'September 25, 2023',
    category: 'Personal Finance',
    excerpt: 'Transform your money mindset with a 7-day no-spend challenge. A practical guide to resetting spending habits and identifying hidden spending triggers.'
  },
  {
    slug: '/blog/grocery-savings-guide-2026',
    title: '6 Smart Ways to Save Money on Your Grocery Shopping',
    date: 'November 12, 2025',
    category: 'Budgeting Tips',
    excerpt: 'Learn how to manage your monthly grocery budget with 6 essential hacks, including shelf scanning, avoiding bundle traps, and the cash payment rule.'
  },
  {
    slug: '/blog/invest-or-repay-debts-2026',
    title: 'Should You Invest or Repay Your Debts?',
    date: 'August 8, 2026',
    category: 'Personal Finance',
    excerpt: 'Weigh the pros and cons of paying off high-interest debts versus investing. Explore strategies for credit cards, emergency funds, and mortgages.'
  },
  {
    slug: '/blog/holiday-overspending-recovery-2026',
    title: 'If You’ve Already Overspent This Season: How To Recover Without Shame',
    date: 'December 12, 2025',
    category: 'Financial Mindset & Wellness',
    excerpt: 'Practical strategies to overcome holiday overspending, banish financial shame, organize BNPL bills, and build a healthy financial mindset.'
  },
  {
    slug: '/blog/invisible-price-tag-2026',
    title: 'The Invisible Price Tag: How Time Shapes Our Spending Choices',
    date: 'November 9, 2025',
    category: 'Behavioural Finance',
    excerpt: 'Explore the money psychology paradox behind paying for instant convenience while procrastinating on critical financial tasks like KYC and SIP setups.'
  },
  {
    slug: '/blog/hidden-cost-delaying-investments-2026',
    title: 'Hidden Cost of Delaying Investments: Starting SIPs Late Can Kill Crores From Your Portfolio',
    date: 'April 18, 2026',
    category: 'Mutual Funds & SIP',
    excerpt: 'Explore why starting mutual fund SIPs early beats investing larger sums later. Learn how time, compounding, and rupee-cost averaging drive wealth creation.'
  },
  {
    slug: '/blog/start-sip-500-per-month-2026',
    title: 'Start SIP With ₹500 Per Month: Build Long-Term Wealth Easily',
    date: 'August 8, 2026',
    category: 'Mutual Funds & SIP',
    excerpt: 'Learn how to start a mutual fund SIP with just ₹500 a month, cultivate financial discipline, and leverage rupee-cost averaging.'
  },
  {
    slug: '/blog/sip-vs-fd-guide-2026',
    title: 'SIP vs FD: Which Investment is Better for You?',
    date: 'August 8, 2026',
    category: 'Investment Guide',
    excerpt: 'Compare Systematic Investment Plans (SIP) and Fixed Deposits (FD) to determine how to balance guaranteed safety with long-term wealth creation.'
  },
  {
    slug: '/blog/asset-allocation-guide-2026',
    title: 'Understanding Asset Allocation: Why You Need Debt and Gold in Your Portfolio',
    date: 'July 26, 2026',
    category: 'Investment Strategy',
    excerpt: 'A comprehensive guide on balancing equities, debt, and gold to manage portfolio risk, beat inflation, and adapt to different life stages.'
  },
  {
    slug: '/blog/power-of-compounding-2026',
    title: 'The Power of Compounding: Why Starting Early Wins',
    date: 'September 1, 2025',
    category: 'Wealth Creation',
    excerpt: 'Understand how compound interest turns small, regular investments into significant wealth over time. See why starting two years earlier beats starting with 33% more money.'
  },
  {
    slug: '/blog/mutual-funds-vs-stocks-2026',
    title: 'Mutual Funds vs. Direct Stocks: Which Should You Choose?',
    date: 'August 8, 2026',
    category: 'Investment Strategy',
    excerpt: 'A detailed comparison of mutual funds and direct stocks to help you balance professional management against individual portfolio control.'
  },
  {
    slug: '/blog/sip-guide-2026',
    title: 'Systematic Investment Plan (SIP): The Path to Disciplined Wealth Creation',
    date: 'August 8, 2026',
    category: 'Mutual Funds',
    excerpt: 'Learn the mechanics of SIPs, the power of rupee-cost averaging, and how the 7-5-3-1 investing rule can help you build long-term wealth.'
  },
  {
    slug: '/blog/mutual-fund-factsheet-guide-2026',
    title: 'How to Read a Mutual Fund Factsheet Like a Pro',
    date: 'August 8, 2026',
    category: 'Investment Education',
    excerpt: 'Learn how to decode mutual fund factsheets, covering key ratios like Beta, Sharpe, expense ratios, and understanding riskometers for smarter investing.'
  },
  {
    slug: '/blog/ten-rupee-weekly-challenge-2026',
    title: 'The ₹10 Weekly Investment Challenge: How Small Amounts Add Up',
    date: 'August 8, 2026',
    category: 'Wealth Creation',
    excerpt: 'A micro-investing strategy to help you build financial discipline. Learn how the ₹10 weekly challenge can serve as a stepping stone to your first SIP.'
  },
  {
    slug: '/blog/top-sip-funds-2026',
    title: 'Top 10 Mutual Funds for SIP in 2026',
    date: 'August 8, 2026',
    category: 'Mutual Funds',
    excerpt: 'A comprehensive guide on top-performing mutual funds for SIP investment in 2026, covering large-cap, mid-cap, and sectoral fund strategies.'
  },
  {
    slug: '/blog/save-home-loan-interest-2026',
    title: '6 Effective Strategies to Save ₹5 Lakh on Home Loan Interest',
    date: 'May 8, 2026',
    category: 'Home Loan',
    excerpt: 'Learn 6 proven ways to minimize your home loan interest costs, including improving your credit score, negotiating with lenders, and leveraging balance transfers.'
  },
  {
    slug: '/blog/home-loan-tenure-guide-2026',
    title: 'What is the Ideal Home Loan Tenure? 10, 20, or 30 Years?',
    date: 'March 28, 2026',
    category: 'Home Loan',
    excerpt: 'Understand how home loan tenure affects your total interest payout and EMI. Learn the 20-year "sweet spot" and how to calculate affordability.'
  },
  {
    slug: '/blog/term-insurance-vs-ulip-2026',
    title: 'Term Insurance vs. ULIP: Which Is Better for You?',
    date: 'October 15, 2025',
    category: 'Life Insurance',
    excerpt: 'A clear comparison of term insurance and ULIPs to help you decide between pure protection and investment-linked life insurance.'
  },
  {
    slug: '/blog/claim-settlement-ratio-guide-2026',
    title: 'Understanding Claim Settlement Ratio: Why It Matters',
    date: 'March 28, 2023',
    category: 'Life Insurance',
    excerpt: 'Learn what Claim Settlement Ratio (CSR) means, how to calculate it, its limitations, and practical steps to avoid claim rejections.'
  },
  {
    slug: '/blog/top-health-insurance-2026',
    title: 'Top 5 Health Insurance Companies in India (2026 Comparison)',
    date: 'August 8, 2026',
    category: 'Health Insurance',
    excerpt: 'Explore Ditto’s top-rated health insurance plans for 2026, featuring HDFC Ergo Optima Secure+, Care Supreme, and Aditya Birla Activ One.'
  },
  {
    slug: '/blog/msmed-amendment-bill-2026',
    title: 'MSMED Amendment Bill 2026 Passed: What It Means for Indian Small Businesses',
    date: 'August 7, 2026',
    category: 'Policy & Regulations',
    excerpt: 'Discover key takeaways from the MSMED Amendment Bill 2026 passed by Parliament. Learn how it tackles delayed payments, TReDS mandates, and eases compliance.'
  },
];

// ==========================================
// BLOG COMPONENT
// ==========================================
function Blog() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Listen for URL changes (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Check if we're on the blog listing page
  const isBlogListing = currentPath === '/blog' || currentPath === '/blog/' || currentPath === '/blog';

  // Check if it's an article
  const isArticle = !isBlogListing && currentPath.startsWith('/blog/');
  const slug = isArticle ? currentPath.substring(1) : ''; // Remove leading slash
  const ArticleComponent = isArticle ? articleComponents[slug] : null;

  // ==========================================
  // RENDER INDIVIDUAL ARTICLE
  // ==========================================
  if (isArticle && ArticleComponent) {
    return <ArticleComponent />;
  }

  // ==========================================
  // RENDER 404 FOR UNKNOWN ARTICLE
  // ==========================================
  if (!isBlogListing && isArticle && !ArticleComponent) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Article not found</h1>
          <button
            onClick={() => {
              window.history.pushState({}, '', '/blog');
              setCurrentPath('/blog');
            }}
            className="mt-6 inline-flex px-5 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700"
          >
            View all articles
          </button>
        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER BLOG LISTING PAGE
  // ==========================================
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
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
        <button
          onClick={() => {
            window.history.pushState({}, '', '/');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm cursor-pointer"
        >
          ← Back to Calculator
        </button>

        <TopBannerAd />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            All Articles
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            {sortedArticles.length} articles on finance, investments, and RBI policy
          </p>
        </div>

        <div className="space-y-4">
          {sortedArticles.map((article, index) => (
            <React.Fragment key={article.slug}>
              <button
                onClick={() => {
                  window.history.pushState({}, '', article.slug);
                  setCurrentPath(article.slug);
                }}
                className="w-full text-left block bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm hover:shadow-md transition border border-slate-200 dark:border-slate-700 cursor-pointer"
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
              </button>

              {(index + 1) % 3 === 0 && <InFeedAd />}
            </React.Fragment>
          ))}
        </div>

        <BottomBannerAd />

        <div className="mt-8 text-center text-xs text-slate-400">
          © 2026 <span className="text-blue-600 font-medium">Truyon</span>
        </div>
      </div>
    </div>
  );
}

export default Blog;