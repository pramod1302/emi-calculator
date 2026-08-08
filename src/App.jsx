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
  if (path === '/terms') {
    return <Terms />;
  }
  if (path === '/privacy') {
    return <Privacy />;
  }
  if (path === '/contact') {
    return <Contact />;
  }
  
  // Default: show calculator
  return <EMICalculator />;
}

export default App;