import { useState, useEffect } from 'react';
import { 
  FaLandmark, FaPiggyBank, FaBuilding, FaExchangeAlt, 
  FaChartLine, FaWallet, FaRupeeSign, FaArrowLeft,
  FaSun, FaMoon, FaNewspaper
} from 'react-icons/fa';
import { TopBannerAd, BottomBannerAd, SidebarAd, InFeedAd, initializeAds } from './components/AdUnits';

// Import all tool components
import EMICalculator from './components/EMICalculator';
import SIPCalculator from './components/SIPCalculator';
import FDCalculator from './components/FDCalculator';
import CompareCalculator from './components/CompareCalculator';
import InflationCalculator from './components/InflationCalculator';

// Import Blog
import Blog from './blog/Blog';

// ==========================================
// CURRENCY CONFIG
// ==========================================
const CURRENCY_SYMBOLS = {
  INR: '₹', USD: '$', EUR: '€', GBP: '£', JPY: '¥', AUD: 'A$', CAD: 'C$'
};

// ==========================================
// TOOL DEFINITIONS
// ==========================================
const TOOLS = [
  {
    id: 'emi',
    name: 'EMI Calculator',
    description: 'Calculate monthly loan payments with interest breakdown',
    icon: <FaLandmark className="text-3xl" />,
    color: 'from-blue-500 to-indigo-600',
    component: EMICalculator,
  },
  {
    id: 'sip',
    name: 'SIP Planner',
    description: 'Plan your monthly investments and see wealth growth',
    icon: <FaPiggyBank className="text-3xl" />,
    color: 'from-emerald-500 to-teal-600',
    component: SIPCalculator,
  },
  {
    id: 'fd',
    name: 'Fixed Deposit',
    description: 'Calculate guaranteed returns on your fixed deposits',
    icon: <FaBuilding className="text-3xl" />,
    color: 'from-amber-500 to-orange-600',
    component: FDCalculator,
  },
  {
    id: 'compare',
    name: 'Loan Comparison',
    description: 'Compare multiple loan options side by side',
    icon: <FaExchangeAlt className="text-3xl" />,
    color: 'from-purple-500 to-pink-600',
    component: CompareCalculator,
  },
  {
    id: 'inflation',
    name: 'Inflation Impact',
    description: 'See how inflation erodes your money\'s value over time',
    icon: <FaChartLine className="text-3xl" />,
    color: 'from-red-500 to-rose-600',
    component: InflationCalculator,
  },
];

// ==========================================
// MAIN APP
// ==========================================
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [currency, setCurrency] = useState('INR');
  const [isBlog, setIsBlog] = useState(false);

  const symbol = CURRENCY_SYMBOLS[currency] || '₹';

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).format(val || 0);
  };

  // ==========================================
  // URL SYNC: Read URL on page load
  // ==========================================
  useEffect(() => {
    const path = window.location.pathname;

    // Check if it's a blog route
    if (path === '/blog' || path.startsWith('/blog/')) {
      setIsBlog(true);
      setSelectedTool(null);
      return;
    }

    // Check if it's a tool route
    const tool = TOOLS.find(t => `/${t.id}` === path);
    if (tool) {
      setSelectedTool(tool.id);
      setIsBlog(false);
    }
  }, []);

  // ==========================================
  // URL SYNC: Handle browser back/forward
  // ==========================================
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;

      if (path === '/blog' || path.startsWith('/blog/')) {
        setIsBlog(true);
        setSelectedTool(null);
        return;
      }

      const tool = TOOLS.find(t => `/${t.id}` === path);
      if (tool) {
        setSelectedTool(tool.id);
        setIsBlog(false);
      } else {
        setSelectedTool(null);
        setIsBlog(false);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // ==========================================
  // NAVIGATION FUNCTIONS
  // ==========================================
  const selectTool = (toolId) => {
    setSelectedTool(toolId);
    setIsBlog(false);
    window.history.pushState({ tool: toolId }, '', `/${toolId}`);
  };

  const goToDashboard = () => {
    setSelectedTool(null);
    setIsBlog(false);
    window.history.pushState({}, '', '/');
  };

  const goToBlog = () => {
    setIsBlog(true);
    setSelectedTool(null);
    window.history.pushState({}, '', '/blog');
  };

  // Initialize ads on load
  useEffect(() => {
    setTimeout(() => {
      initializeAds();
    }, 100);
  }, []);

  // Re-initialize ads when view changes
  useEffect(() => {
    setTimeout(() => {
      initializeAds();
    }, 200);
  }, [selectedTool, isBlog]);

  const ToolComponent = selectedTool 
    ? TOOLS.find(t => t.id === selectedTool)?.component 
    : null;

  // ==========================================
  // RENDER BLOG
  // ==========================================
  if (isBlog) {
    return <Blog />;
  }

  // ==========================================
  // RENDER DASHBOARD / TOOLS
  // ==========================================
  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 px-4 py-3 sm:px-8 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/T.png" 
              alt="Truyon" 
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 items-center justify-center text-white font-bold text-xl shadow-md">
              T
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Truyon <span className="text-blue-600 dark:text-blue-400">Finance</span>
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                {selectedTool ? 'Smart Financial Planning Tools' : 'Choose a tool to get started'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {selectedTool && (
              <button
                onClick={goToDashboard}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition border border-slate-200 dark:border-slate-700"
              >
                <FaArrowLeft className="text-xs" />
                <span className="hidden sm:inline">Back</span>
              </button>
            )}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium border bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            >
              {Object.keys(CURRENCY_SYMBOLS).map((c) => (
                <option key={c} value={c}>{c} ({CURRENCY_SYMBOLS[c]})</option>
              ))}
            </select>
            <button
              onClick={goToBlog}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition border border-blue-200 dark:border-blue-800"
            >
              <FaNewspaper className="text-xs" />
              <span className="hidden sm:inline">Blog</span>
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition border border-slate-200 dark:border-slate-700"
              aria-label="Toggle Theme"
            >
              {darkMode ? <FaSun className="text-amber-400" /> : <FaMoon />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <TopBannerAd />

        {!selectedTool ? (
          // ==========================================
          // DASHBOARD VIEW - SHOW ALL TOOLS AS CARDS
          // ==========================================
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">💰 Financial Tools</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Select a tool to get started</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TOOLS.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => selectTool(tool.id)}
                  className="group text-left bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-600 transition-all hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">{tool.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{tool.description}</p>
                  <div className="mt-4 text-blue-600 dark:text-blue-400 font-medium text-sm flex items-center gap-1">
                    Try Now →
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8">
              <InFeedAd />
            </div>
          </>
        ) : (
          // ==========================================
          // TOOL VIEW - SHOW SELECTED TOOL
          // ==========================================
          <>
            {ToolComponent ? (
              <ToolComponent 
                formatCurrency={formatCurrency} 
                symbol={symbol} 
                darkMode={darkMode} 
              />
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-500 dark:text-slate-400">Tool coming soon...</p>
                <button
                  onClick={goToDashboard}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
                >
                  Back to Tools
                </button>
              </div>
            )}
          </>
        )}

        <BottomBannerAd />

        {/* FOOTER */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-700 text-center text-xs text-slate-400 space-y-2">
          <div className="flex justify-center gap-4 flex-wrap">
            <button onClick={goToBlog} className="text-blue-600 dark:text-blue-400 hover:underline">Blog</button>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <a href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">Terms</a>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy</a>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact</a>
          </div>
          <div>
            © 2026 <span className="text-blue-600 dark:text-blue-400 font-medium">Truyon</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;