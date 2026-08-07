import EMICalculator from './EMICalculator';
import HomeLoanTips from './pages/HomeLoanTips';
import SIPvsFD from './pages/SIPvsFD';

function App() {
  const path = window.location.pathname;
  
  // Check for blog post routes
  if (path === '/home-loan-tips') {
    return <HomeLoanTips />;
  }
  
  if (path === '/sip-vs-fd') {
    return <SIPvsFD />;
  }

  // Default: show calculator
  return <EMICalculator />;
}

export default App;