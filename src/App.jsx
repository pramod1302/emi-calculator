import { useEffect, useState } from 'react';
import EMICalculator from './EMICalculator';
import HomeLoanTips from './pages/HomeLoanTips';
import SIPvsFD from './pages/SIPvsFD';

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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