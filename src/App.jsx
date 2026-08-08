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
  // Default: show calculator
  return <EMICalculator />;
}

export default App;