import { useEffect, useState } from 'react';
import EMICalculator from './EMICalculator';
import HomeLoanTips from './pages/HomeLoanTips';
import SIPvsFD from './pages/SIPvsFD';
import UPIChargesBill from './pages/UPIChargesBill';
import RBIRepoRate from './pages/RBIRepoRate';
import Blog from './pages/Blog';
import MFOnlyPMS from './pages/MFOnlyPMS';
import GoldmanSachsGDP from './pages/GoldmanSachsGDP';
import Budget2026 from './pages/Budget2026';
import MoodysForecast from './pages/MoodysForecast';
import IncomeTaxRules2026 from './pages/IncomeTaxRules2026';
import HealthInsuranceGuide from './pages/HealthInsuranceGuide';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import StateGSecAuction from './pages/StateGSecAuction';
import SBIClerk2026 from './pages/SBIClerk2026';
import SBIQ1Results2026 from './pages/SBIQ1Results2026';
import HindalcoQ1Results2026 from './pages/HindalcoQ1Results2026';
import ModelBITReview2026 from './pages/ModelBITReview2026';
import UrbanCooperativeBanks2026 from './pages/UrbanCooperativeBanks2026';
import HomeLoanGuide2026 from './pages/HomeLoanGuide2026';
import CarLoanGuide2026 from './pages/CarLoanGuide2026';
import PersonalLoanTips2026 from './pages/PersonalLoanTips2026';
import LowCibilPersonalLoan2026 from './pages/LowCibilPersonalLoan2026';
import GoldLoanGuide2026 from './pages/GoldLoanGuide2026';
import BankHomeLoanComparison2026 from './pages/BankHomeLoanComparison2026';
import HomeLoanBalanceTransfer2026 from './pages/HomeLoanBalanceTransfer2026';
import StandingDepositFacility2026 from './pages/StandingDepositFacility2026';
import NbfcVsBankPersonalLoan2026 from './pages/NbfcVsBankPersonalLoan2026';
import SbiResearchCreditGrowth2026 from './pages/SbiResearchCreditGrowth2026';
import VarmaBankDominance2026 from './pages/VarmaBankDominance2026';
import ChoosingSavingsAccount2026 from './pages/ChoosingSavingsAccount2026';
import FixedDepositGuide2026 from './pages/FixedDepositGuide2026';
import EmergencyFundGuide2026 from './pages/EmergencyFundGuide2026';
import NoSpendChallenge2026 from './pages/NoSpendChallenge2026';
import GrocerySavingsGuide2026 from './pages/GrocerySavingsGuide2026';
import InvestOrRepayDebts2026 from './pages/InvestOrRepayDebts2026';
import HolidayOverspendingRecovery2026 from './pages/HolidayOverspendingRecovery2026';
import InvisiblePriceTag2026 from './pages/InvisiblePriceTag2026';
import HiddenCostDelayingInvestments2026 from './pages/HiddenCostDelayingInvestments2026';
import StartSip500PerMonth2026 from './pages/StartSip500PerMonth2026';
import SipVsFdGuide2026 from './pages/SipVsFdGuide2026';
import AssetAllocationGuide2026 from './pages/AssetAllocationGuide2026';
import PowerOfCompoundingGuide2026 from './pages/PowerOfCompoundingGuide2026';
import MutualFundsVsStocks2026 from './pages/MutualFundsVsStocks2026';
import SipGuide2026 from './pages/SipGuide2026';
import MutualFundFactsheetGuide2026 from './pages/MutualFundFactsheetGuide2026';
import TenRupeeWeeklyChallenge2026 from './pages/TenRupeeWeeklyChallenge2026';
import TopSipFunds2026 from './pages/TopSipFunds2026';
import SaveHomeLoanInterest2026 from './pages/SaveHomeLoanInterest2026';
import HomeLoanTenureGuide2026 from './pages/HomeLoanTenureGuide2026';
import TermInsuranceVsUlip2026 from './pages/TermInsuranceVsUlip2026';
import ClaimSettlementRatioGuide2026 from './pages/ClaimSettlementRatioGuide2026';
import TopHealthInsurance2026 from './pages/TopHealthInsurance2026';
import MSMEDAmendment2026 from './pages/MSMEDAmendment2026';
import { initializeAds } from './components/AdUnits';

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    
    // Initialize AdSense on page load
    setTimeout(() => {
      initializeAds();
    }, 100);
    
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Re-initialize ads when path changes
  useEffect(() => {
    setTimeout(() => {
      initializeAds();
    }, 200);
  }, [path]);

  // Check for blog post routes
  if (path === '/home-loan-tips') {
    return <HomeLoanTips />;
  }
  if (path === '/rbi-repo-rate-august-2026') {
    return <RBIRepoRate />;
  }
  if (path === '/sip-vs-fd') {
    return <SIPvsFD />;
  }
  if (path === '/upi-charges-bill') {
    return <UPIChargesBill />;
  }
  if (path === '/blog') {
    return <Blog />;
  }
  if (path === '/sebi-mf-pms-proposal') {
    return <MFOnlyPMS />;
  }
  if (path === '/goldman-sachs-gdp-upgrade') {
    return <GoldmanSachsGDP />;
  }
  if (path === '/budget-2026') {
    return <Budget2026 />;
  }
  if (path === '/moodys-forecast') {
    return <MoodysForecast />;
  }
  if (path === '/income-tax-rules-2026') {
    return <IncomeTaxRules2026 />;
  }
  if (path === '/health-insurance-guide') {
    return <HealthInsuranceGuide />;
  }
  if (path === '/state-gsec-auction') {
    return <StateGSecAuction />; // 2. Add route handler for the new auction page
  }
  if (path === '/terms') {
    return <Terms />;
  }
  if (path === '/privacy') {
    return <Privacy />;
  }
  if (path === '/contact') {
    return <Contact />;
  }
  if (path === '/sbi-clerk-recruitment-2026') {
  return <SBIClerk2026 />;
}
if (path === '/sbi-q1-results-2026') {
  return <SBIQ1Results2026 />;
}
if (path === '/hindalco-q1-results-2026') {
  return <HindalcoQ1Results2026 />;
}
if (path === '/model-bit-review-2026') {
  return <ModelBITReview2026 />;
}
if (path === '/urban-cooperative-banks-2026') {
  return <UrbanCooperativeBanks2026 />;
}
if (path === '/home-loan-guide-2026') {
  return <HomeLoanGuide2026 />;
}
if (path === '/car-loan-guide-2026') {
  return <CarLoanGuide2026 />;
}
if (path === '/personal-loan-tips-2026') {
  return <PersonalLoanTips2026 />;
}
if (path === '/low-cibil-personal-loan-2026') {
  return <LowCibilPersonalLoan2026 />;
}
if (path === '/gold-loan-guide-2026') {
  return <GoldLoanGuide2026 />;
}
if (path === '/bank-home-loan-comparison-2026') {
  return <BankHomeLoanComparison2026 />;
}
if (path === '/home-loan-balance-transfer-2026') {
  return <HomeLoanBalanceTransfer2026 />;
}
if (path === '/standing-deposit-facility-2026') {
  return <StandingDepositFacility2026 />;
}
if (path === '/nbfc-vs-bank-personal-loan-2026') {
  return <NbfcVsBankPersonalLoan2026 />;
}
if (path === '/sbi-research-credit-growth-2026') {
  return <SbiResearchCreditGrowth2026 />;
}
if (path === '/varma-bank-dominance-2026') {
  return <VarmaBankDominance2026 />;
}
if (path === '/choosing-savings-account-2026') {
  return <ChoosingSavingsAccount2026 />;
}
if (path === '/fixed-deposit-guide-2026') {
  return <FixedDepositGuide2026 />;
}
if (path === '/emergency-fund-guide-2026') {
  return <EmergencyFundGuide2026 />;
}
if (path === '/no-spend-challenge-2026') {
  return <NoSpendChallenge2026 />;
}
if (path === '/grocery-savings-guide-2026') {
  return <GrocerySavingsGuide2026 />;
}
if (path === '/invest-or-repay-debts-2026') {
  return <InvestOrRepayDebts2026 />;
}
if (path === '/holiday-overspending-recovery-2026') {
  return <HolidayOverspendingRecovery2026 />;
}
if (path === '/invisible-price-tag-2026') {
  return <InvisiblePriceTag2026 />;
}
if (path === '/hidden-cost-delaying-investments-2026') {
  return <HiddenCostDelayingInvestments2026 />;
}
if (path === '/start-sip-500-per-month-2026') {
  return <StartSip500PerMonth2026 />;
}
if (path === '/sip-vs-fd-guide-2026') {
  return <SipVsFdGuide2026 />;
}
if (path === '/asset-allocation-guide-2026') {
  return <AssetAllocationGuide2026 />;
}
if (path === '/power-of-compounding-2026') {
  return <PowerOfCompoundingGuide2026 />;
}
if (path === '/mutual-funds-vs-stocks-2026') {
  return <MutualFundsVsStocks2026 />;
}
if (path === '/sip-guide-2026') {
  return <SipGuide2026 />;
}
if (path === '/mutual-fund-factsheet-guide-2026') {
  return <MutualFundFactsheetGuide2026 />;
}
if (path === '/ten-rupee-weekly-challenge-2026') {
  return <TenRupeeWeeklyChallenge2026 />;
}
if (path === '/top-sip-funds-2026') {
  return <TopSipFunds2026 />;
}
if (path === '/save-home-loan-interest-2026') {
  return <SaveHomeLoanInterest2026 />;
}
if (path === '/home-loan-tenure-guide-2026') {
  return <HomeLoanTenureGuide2026 />;
}
if (path === '/term-insurance-vs-ulip-2026') {
  return <TermInsuranceVsUlip2026 />;
}
if (path === '/claim-settlement-ratio-guide-2026') {
  return <ClaimSettlementRatioGuide2026 />;
}
if (path === '/top-health-insurance-2026') {
  return <TopHealthInsurance2026 />;
}
if (path === '/msmed-amendment-bill-2026') {
  return <MSMEDAmendment2026 />;
}
  // Default: show calculator
  return <EMICalculator />;
}

export default App;