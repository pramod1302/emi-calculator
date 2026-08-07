import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer 
} from 'recharts';
import { 
  FaChartPie, FaHistory, FaShare, FaPrint, FaDownload, 
  FaSun, FaMoon, FaHome, FaWallet, FaUniversity, FaExchangeAlt,
  FaCalculator
} from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function EMICalculator() {
  // ===== STATE =====
  const [darkMode, setDarkMode] = useState(false);
  const [activeCalculator, setActiveCalculator] = useState('emi');
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [yearlyBreakdown, setYearlyBreakdown] = useState([]);
  const [activeTab, setActiveTab] = useState('breakdown');
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currency, setCurrency] = useState('INR');

  // ===== CURRENCY SYMBOLS =====
  const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    INR: '₹',
    JPY: '¥',
    AUD: 'A$',
    CAD: 'C$',
    SGD: 'S$',
    CHF: 'Fr',
    CNY: '¥'
  };

  const getSymbol = () => currencySymbols[currency] || '₹';

  // ===== CALCULATOR TYPES =====
  const calculators = [
    { id: 'emi', name: 'EMI Calculator', icon: <FaHome />, description: 'Monthly loan payments' },
    { id: 'sip', name: 'SIP Calculator', icon: <FaWallet />, description: 'Mutual fund returns' },
    { id: 'fd', name: 'FD Calculator', icon: <FaUniversity />, description: 'Fixed deposit maturity' },
    { id: 'compare', name: 'Loan Compare', icon: <FaExchangeAlt />, description: 'Compare 2 loans' },
  ];

  // ===== LOAD HISTORY =====
  useEffect(() => {
    const saved = localStorage.getItem('emiHistory');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  // ===== AUTO-CALCULATE =====
  useEffect(() => {
    if (loanAmount > 0 && interestRate > 0 && tenure > 0) {
      calculateEMI();
    }
  }, [loanAmount, interestRate, tenure]);

  // ===== CALCULATE EMI =====
  const calculateEMI = () => {
    setIsLoading(true);
    setTimeout(() => {
      const P = parseFloat(loanAmount);
      const r = parseFloat(interestRate) / 12 / 100;
      const n = parseFloat(tenure) * 12;

      if (P && r && n) {
        const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPay = emiValue * n;
        const totalInt = totalPay - P;

        setEmi(emiValue.toFixed(2));
        setTotalPayment(totalPay.toFixed(2));
        setTotalInterest(totalInt.toFixed(2));

        // Generate yearly breakdown
        const breakdown = [];
        let remainingBalance = P;
        for (let year = 1; year <= parseFloat(tenure); year++) {
          let yearlyInterest = 0;
          let yearlyPrincipal = 0;
          for (let month = 1; month <= 12; month++) {
            const monthlyInterest = remainingBalance * r;
            const monthlyPrincipal = emiValue - monthlyInterest;
            yearlyInterest += monthlyInterest;
            yearlyPrincipal += monthlyPrincipal;
            remainingBalance -= monthlyPrincipal;
          }
          breakdown.push({
            year,
            principal: yearlyPrincipal.toFixed(2),
            interest: yearlyInterest.toFixed(2),
            total: (yearlyPrincipal + yearlyInterest).toFixed(2),
            balance: remainingBalance.toFixed(2)
          });
        }
        setYearlyBreakdown(breakdown);

        // Save history
        const newEntry = {
          id: Date.now(),
          amount: P,
          rate: interestRate,
          tenure: tenure,
          emi: emiValue.toFixed(2),
          date: new Date().toLocaleDateString(),
          type: activeCalculator
        };
        const updatedHistory = [...history, newEntry];
        setHistory(updatedHistory);
        localStorage.setItem('emiHistory', JSON.stringify(updatedHistory));
      }
      setIsLoading(false);
    }, 300);
  };

  // ===== FORMAT CURRENCY =====
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  // ===== SHARE =====
  const shareResult = () => {
    const text = `🏦 My ${calculators.find(c => c.id === activeCalculator)?.name} Result:\nLoan: ${formatCurrency(loanAmount)}\nRate: ${interestRate}%\nTenure: ${tenure} years\nMonthly EMI: ${formatCurrency(emi)}\n\nCalculate yours at: truyon.com`;
    if (navigator.share) {
      navigator.share({ title: 'EMI Calculator', text });
    } else {
      navigator.clipboard.writeText(text);
      alert('📋 Copied to clipboard!');
    }
  };

  // ===== DOWNLOAD PDF =====
  const downloadPDF = async () => {
    const element = document.getElementById('report-content');
    if (!element) return;
    
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: darkMode ? '#1a1a2e' : '#ffffff'
    });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('emi-calculator-report.pdf');
  };

  // ===== CHART DATA =====
  const pieData = emi ? [
    { name: 'Principal', value: parseFloat(totalPayment) - parseFloat(totalInterest) },
    { name: 'Interest', value: parseFloat(totalInterest) }
  ] : [];

  const COLORS = ['#4f46e5', '#ec4899'];

  // ===== RENDER =====
  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        
        {/* ===== HEADER ===== */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Smart Finance Tools
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Free calculators for your financial planning</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Currency Selector */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className={`px-3 py-2 rounded-lg text-sm border transition ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="INR">INR (₹)</option>
              <option value="JPY">JPY (¥)</option>
              <option value="AUD">AUD (A$)</option>
              <option value="CAD">CAD (C$)</option>
              <option value="SGD">SGD (S$)</option>
            </select>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>

        {/* ===== CALCULATOR NAVIGATION ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6">
          {calculators.map((calc) => (
            <motion.button
              key={calc.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCalculator(calc.id)}
              className={`p-3 rounded-xl text-center transition ${activeCalculator === calc.id 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
              }`}
            >
              <div className="text-xl sm:text-2xl">{calc.icon}</div>
              <div className="text-xs sm:text-sm font-medium mt-1">{calc.name}</div>
            </motion.button>
          ))}
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
          
          {/* ===== LEFT: CALCULATOR INPUT ===== */}
          <div className="lg:col-span-3 space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-2xl shadow-xl p-4 sm:p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <h2 className="text-xl font-bold mb-1">{calculators.find(c => c.id === activeCalculator)?.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {calculators.find(c => c.id === activeCalculator)?.description}
              </p>

              <div className="space-y-5">
                {/* Loan Amount */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-sm font-medium">Loan Amount</label>
                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                      {formatCurrency(loanAmount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="10000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs text-gray-400">10K</span>
                    <span className="text-xs text-gray-400 ml-auto">10M</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-sm font-medium">Interest Rate</label>
                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                      {interestRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs text-gray-400">1%</span>
                    <span className="text-xs text-gray-400 ml-auto">25%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-sm font-medium">Tenure (Years)</label>
                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                      {tenure} years
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    step="1"
                    value={tenure}
                    onChange={(e) => setTenure(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs text-gray-400">1 yr</span>
                    <span className="text-xs text-gray-400 ml-auto">40 yrs</span>
                  </div>
                </div>

                {/* Quick Presets */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: '10L', amount: 1000000, rate: 8.5, tenure: 20 },
                    { label: '20L', amount: 2000000, rate: 8.5, tenure: 20 },
                    { label: '50L', amount: 5000000, rate: 8.5, tenure: 20 },
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      onClick={() => {
                        setLoanAmount(preset.amount);
                        setInterestRate(preset.rate);
                        setTenure(preset.tenure);
                      }}
                      className={`py-2 rounded-lg text-sm font-medium transition ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {isLoading && (
                <div className="mt-4 flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                </div>
              )}
            </motion.div>
          </div>

          {/* ===== RIGHT: RESULTS ===== */}
          <div className="lg:col-span-2 space-y-4" id="report-content">
            {emi ? (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl p-4 sm:p-6 text-white"
                >
                  <p className="text-sm opacity-80 mb-1">Monthly EMI</p>
                  <p className="text-3xl sm:text-4xl font-bold">{formatCurrency(emi)}</p>

                  <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/20">
                    <div>
                      <p className="text-xs opacity-70">Total Payment</p>
                      <p className="text-sm font-semibold">{formatCurrency(totalPayment)}</p>
                    </div>
                    <div>
                      <p className="text-xs opacity-70">Total Interest</p>
                      <p className="text-sm font-semibold">{formatCurrency(totalInterest)}</p>
                    </div>
                  </div>

                  {/* Pie Chart */}
                  <div className="mt-4 h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={30}
                          outerRadius={50}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => formatCurrency(value)} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/20">
                    <button
                      onClick={shareResult}
                      className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm font-medium transition flex items-center justify-center gap-1"
                    >
                      <FaShare /> Share
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm font-medium transition flex items-center justify-center gap-1"
                    >
                      <FaPrint /> Print
                    </button>
                    <button
                      onClick={downloadPDF}
                      className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm font-medium transition flex items-center justify-center gap-1"
                    >
                      <FaDownload /> PDF
                    </button>
                  </div>
                </motion.div>

                {/* ===== TABS: Yearly Breakdown + History ===== */}
                <div className={`rounded-2xl shadow-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex border-b dark:border-gray-700">
                    <button
                      onClick={() => setActiveTab('breakdown')}
                      className={`flex-1 py-3 text-sm font-medium transition flex items-center justify-center gap-1 ${
                        activeTab === 'breakdown'
                          ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400'
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                      }`}
                    >
                      <FaChartPie /> Yearly
                    </button>
                    <button
                      onClick={() => setActiveTab('history')}
                      className={`flex-1 py-3 text-sm font-medium transition flex items-center justify-center gap-1 ${
                        activeTab === 'history'
                          ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400'
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                      }`}
                    >
                      <FaHistory /> History
                    </button>
                  </div>

                  <div className="p-4 max-h-64 overflow-y-auto">
                    {activeTab === 'breakdown' && (
                      <div>
                        <div className="grid grid-cols-5 text-xs font-semibold text-gray-500 dark:text-gray-400 border-b pb-2 mb-2">
                          <span>Year</span>
                          <span className="text-right">Principal</span>
                          <span className="text-right">Interest</span>
                          <span className="text-right">Total</span>
                          <span className="text-right">Balance</span>
                        </div>
                        {yearlyBreakdown.map((row) => (
                          <div key={row.year} className="grid grid-cols-5 text-xs py-1.5 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                            <span className="font-medium">{row.year}</span>
                            <span className="text-right">{formatCurrency(row.principal)}</span>
                            <span className="text-right">{formatCurrency(row.interest)}</span>
                            <span className="text-right">{formatCurrency(row.total)}</span>
                            <span className="text-right">{formatCurrency(row.balance)}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'history' && (
                      <div>
                        {history.length === 0 ? (
                          <p className="text-center text-gray-400 text-sm py-4">No calculations saved yet</p>
                        ) : (
                          history.slice(-5).reverse().map((item) => (
                            <div key={item.id} className={`rounded-lg p-3 mb-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                              <div className="flex justify-between items-center flex-wrap gap-1">
                                <span className="text-sm font-medium">
                                  {formatCurrency(item.amount)} @ {item.rate}%
                                </span>
                                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                                  EMI: {formatCurrency(item.emi)}
                                </span>
                              </div>
                              <div className="flex justify-between text-xs text-gray-400 mt-1">
                                <span>{item.tenure} years</span>
                                <span>{item.date}</span>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className={`rounded-2xl shadow-xl p-6 text-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-lg font-semibold">Enter loan details</h3>
                <p className="text-sm text-gray-400">Adjust the sliders above to see your EMI instantly</p>
              </div>
            )}
          </div>
        </div>

        {/* ===== FAQ SECTION ===== */}
        <div className={`mt-6 rounded-2xl shadow-xl p-4 sm:p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-xl font-bold mb-4">❓ Frequently Asked Questions</h2>
          <div className="space-y-3">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                What is EMI?
                <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 pl-4">
                EMI (Equated Monthly Installment) is the fixed amount you pay every month to repay a loan. It includes both principal and interest components.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                How is EMI calculated?
                <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 pl-4">
                EMI = P × r × (1+r)^n / ((1+r)^n - 1), where P is principal, r is monthly interest rate, and n is total installments.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Can I prepay my loan?
                <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 pl-4">
                Yes! Most banks allow prepayment with minimal charges. Use our calculator to see how much you can save.
              </p>
            </details>
          </div>
        </div>

        {/* ===== FOOTER ===== */}
        <div className="mt-6 text-center text-xs text-gray-400">
          Made with ❤️ | truyon.com | Free Financial Tools
        </div>
      </div>
    </div>
  );
}

export default EMICalculator;