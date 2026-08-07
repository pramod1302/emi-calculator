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

  // ===== SIP STATE =====
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [sipTenure, setSipTenure] = useState(10);
  const [sipResult, setSipResult] = useState(null);

  // ===== FD STATE =====
  const [fdAmount, setFdAmount] = useState(100000);
  const [fdRate, setFdRate] = useState(7.5);
  const [fdTenure, setFdTenure] = useState(5);
  const [fdResult, setFdResult] = useState(null);

  // ===== COMPARE STATE =====
  const [loan1, setLoan1] = useState({ amount: 500000, rate: 8.5, tenure: 20 });
  const [loan2, setLoan2] = useState({ amount: 500000, rate: 7.5, tenure: 20 });
  const [compareResult, setCompareResult] = useState(null);

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

  // ===== FORMAT CURRENCY =====
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  // ===== EMI CALCULATOR =====
  useEffect(() => {
    if (activeCalculator === 'emi' && loanAmount > 0 && interestRate > 0 && tenure > 0) {
      calculateEMI();
    }
  }, [loanAmount, interestRate, tenure, activeCalculator]);

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

        const newEntry = {
          id: Date.now(),
          amount: P,
          rate: interestRate,
          tenure: tenure,
          emi: emiValue.toFixed(2),
          date: new Date().toLocaleDateString(),
          type: 'emi'
        };
        const updatedHistory = [...history, newEntry];
        setHistory(updatedHistory);
        localStorage.setItem('emiHistory', JSON.stringify(updatedHistory));
      }
      setIsLoading(false);
    }, 300);
  };

  // ===== SIP CALCULATOR =====
  useEffect(() => {
    if (activeCalculator === 'sip' && monthlyInvestment > 0 && expectedReturn > 0 && sipTenure > 0) {
      calculateSIP();
    }
  }, [monthlyInvestment, expectedReturn, sipTenure, activeCalculator]);

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(expectedReturn) / 100 / 12;
    const n = parseFloat(sipTenure) * 12;

    if (P && r && n) {
      const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      const totalInvestment = P * n;
      const returns = futureValue - totalInvestment;
      setSipResult({
        futureValue: futureValue.toFixed(2),
        totalInvestment: totalInvestment.toFixed(2),
        returns: returns.toFixed(2)
      });
    }
  };

  // ===== FD CALCULATOR =====
  useEffect(() => {
    if (activeCalculator === 'fd' && fdAmount > 0 && fdRate > 0 && fdTenure > 0) {
      calculateFD();
    }
  }, [fdAmount, fdRate, fdTenure, activeCalculator]);

  const calculateFD = () => {
    const P = parseFloat(fdAmount);
    const r = parseFloat(fdRate) / 100;
    const n = parseFloat(fdTenure);

    if (P && r && n) {
      const maturityAmount = P * Math.pow(1 + r, n);
      const interest = maturityAmount - P;
      setFdResult({
        maturityAmount: maturityAmount.toFixed(2),
        totalInvestment: P.toFixed(2),
        interest: interest.toFixed(2)
      });
    }
  };

  // ===== COMPARE CALCULATOR =====
  useEffect(() => {
    if (activeCalculator === 'compare') {
      calculateCompare();
    }
  }, [loan1, loan2, activeCalculator]);

  const calculateCompare = () => {
    const calcEMI = (amount, rate, tenure) => {
      const P = parseFloat(amount);
      const r = parseFloat(rate) / 12 / 100;
      const n = parseFloat(tenure) * 12;
      if (P && r && n) {
        const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        return {
          emi: emiValue.toFixed(2),
          totalPayment: (emiValue * n).toFixed(2),
          totalInterest: (emiValue * n - P).toFixed(2)
        };
      }
      return null;
    };

    const result1 = calcEMI(loan1.amount, loan1.rate, loan1.tenure);
    const result2 = calcEMI(loan2.amount, loan2.rate, loan2.tenure);

    if (result1 && result2) {
      setCompareResult({ loan1: result1, loan2: result2 });
    }
  };

  // ===== SHARE =====
  const shareResult = () => {
    let text = '';
    if (activeCalculator === 'emi' && emi) {
      text = `🏦 EMI Result:\nLoan: ${formatCurrency(loanAmount)}\nRate: ${interestRate}%\nTenure: ${tenure} years\nMonthly EMI: ${formatCurrency(emi)}`;
    } else if (activeCalculator === 'sip' && sipResult) {
      text = `📈 SIP Result:\nMonthly: ${formatCurrency(monthlyInvestment)}\nReturn: ${expectedReturn}%\nTenure: ${sipTenure} years\nFuture Value: ${formatCurrency(sipResult.futureValue)}`;
    } else if (activeCalculator === 'fd' && fdResult) {
      text = `🏦 FD Result:\nAmount: ${formatCurrency(fdAmount)}\nRate: ${fdRate}%\nTenure: ${fdTenure} years\nMaturity: ${formatCurrency(fdResult.maturityAmount)}`;
    }
    text += '\n\nCalculate yours at: truyon.com';
    
    if (navigator.share) {
      navigator.share({ title: 'Finance Calculator', text });
    } else {
      navigator.clipboard.writeText(text);
      alert('📋 Copied to clipboard!');
    }
  };

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
    pdf.save('calculator-report.pdf');
  };

  // ===== CHART DATA =====
  const pieData = emi ? [
    { name: 'Principal', value: parseFloat(totalPayment) - parseFloat(totalInterest) },
    { name: 'Interest', value: parseFloat(totalInterest) }
  ] : [];

  const COLORS = ['#4f46e5', '#ec4899'];

  // ===== RENDER CALCULATOR INPUT =====
  const renderCalculatorInput = () => {
    switch (activeCalculator) {
      case 'emi':
        return (
          <div className="space-y-5">
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
            </div>
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
            </div>
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
            </div>
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
        );

      case 'sip':
        return (
          <div className="space-y-5">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium">Monthly Investment</label>
                <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                  {formatCurrency(monthlyInvestment)}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="100000"
                step="500"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium">Expected Return</label>
                <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                  {expectedReturn}%
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="0.5"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium">Tenure (Years)</label>
                <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                  {sipTenure} years
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={sipTenure}
                onChange={(e) => setSipTenure(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
          </div>
        );

      case 'fd':
        return (
          <div className="space-y-5">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium">Deposit Amount</label>
                <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                  {formatCurrency(fdAmount)}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="10000000"
                step="1000"
                value={fdAmount}
                onChange={(e) => setFdAmount(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium">Interest Rate</label>
                <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                  {fdRate}%
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="0.25"
                value={fdRate}
                onChange={(e) => setFdRate(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium">Tenure (Years)</label>
                <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                  {fdTenure} years
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={fdTenure}
                onChange={(e) => setFdTenure(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
          </div>
        );

      case 'compare':
        return (
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-indigo-600">Loan 1</h3>
                <input
                  type="number"
                  value={loan1.amount}
                  onChange={(e) => setLoan1({...loan1, amount: parseFloat(e.target.value) || 0})}
                  placeholder="Amount"
                  className={`w-full px-3 py-2 rounded-lg text-sm border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}
                />
                <input
                  type="number"
                  value={loan1.rate}
                  onChange={(e) => setLoan1({...loan1, rate: parseFloat(e.target.value) || 0})}
                  placeholder="Rate %"
                  className={`w-full px-3 py-2 rounded-lg text-sm border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}
                />
                <input
                  type="number"
                  value={loan1.tenure}
                  onChange={(e) => setLoan1({...loan1, tenure: parseFloat(e.target.value) || 0})}
                  placeholder="Tenure (years)"
                  className={`w-full px-3 py-2 rounded-lg text-sm border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-pink-600">Loan 2</h3>
                <input
                  type="number"
                  value={loan2.amount}
                  onChange={(e) => setLoan2({...loan2, amount: parseFloat(e.target.value) || 0})}
                  placeholder="Amount"
                  className={`w-full px-3 py-2 rounded-lg text-sm border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}
                />
                <input
                  type="number"
                  value={loan2.rate}
                  onChange={(e) => setLoan2({...loan2, rate: parseFloat(e.target.value) || 0})}
                  placeholder="Rate %"
                  className={`w-full px-3 py-2 rounded-lg text-sm border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}
                />
                <input
                  type="number"
                  value={loan2.tenure}
                  onChange={(e) => setLoan2({...loan2, tenure: parseFloat(e.target.value) || 0})}
                  placeholder="Tenure (years)"
                  className={`w-full px-3 py-2 rounded-lg text-sm border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // ===== RENDER RESULTS =====
  const renderResults = () => {
    switch (activeCalculator) {
      case 'emi':
        return emi ? (
          <>
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl p-4 sm:p-6 text-white">
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
              <div className="mt-4 h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={30} outerRadius={50} paddingAngle={2} dataKey="value">
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => formatCurrency(value)} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className={`rounded-2xl shadow-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex border-b dark:border-gray-700">
                <button onClick={() => setActiveTab('breakdown')} className={`flex-1 py-3 text-sm font-medium transition flex items-center justify-center gap-1 ${activeTab === 'breakdown' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500'}`}>
                  <FaChartPie /> Yearly
                </button>
                <button onClick={() => setActiveTab('history')} className={`flex-1 py-3 text-sm font-medium transition flex items-center justify-center gap-1 ${activeTab === 'history' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500'}`}>
                  <FaHistory /> History
                </button>
              </div>
              <div className="p-4 max-h-64 overflow-y-auto">
                {activeTab === 'breakdown' && (
                  <div>
                    <div className="grid grid-cols-5 text-xs font-semibold text-gray-500 dark:text-gray-400 border-b pb-2 mb-2">
                      <span>Year</span><span className="text-right">Principal</span><span className="text-right">Interest</span>
                      <span className="text-right">Total</span><span className="text-right">Balance</span>
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
                    {history.filter(h => h.type === 'emi').length === 0 ? (
                      <p className="text-center text-gray-400 text-sm py-4">No calculations saved yet</p>
                    ) : (
                      history.filter(h => h.type === 'emi').slice(-5).reverse().map((item) => (
                        <div key={item.id} className={`rounded-lg p-3 mb-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                          <div className="flex justify-between items-center flex-wrap gap-1">
                            <span className="text-sm font-medium">{formatCurrency(item.amount)} @ {item.rate}%</span>
                            <span className="text-sm font-bold text-indigo-600">EMI: {formatCurrency(item.emi)}</span>
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
        );

      case 'sip':
        return sipResult ? (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl shadow-xl p-4 sm:p-6 text-white">
              <p className="text-sm opacity-80 mb-1">Future Value</p>
              <p className="text-3xl sm:text-4xl font-bold">{formatCurrency(sipResult.futureValue)}</p>
              <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/20">
                <div>
                  <p className="text-xs opacity-70">Total Investment</p>
                  <p className="text-sm font-semibold">{formatCurrency(sipResult.totalInvestment)}</p>
                </div>
                <div>
                  <p className="text-xs opacity-70">Total Returns</p>
                  <p className="text-sm font-semibold">{formatCurrency(sipResult.returns)}</p>
                </div>
              </div>
            </div>
            <div className={`rounded-2xl shadow-xl p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <p className="text-sm text-center text-gray-500">Monthly SIP of {formatCurrency(monthlyInvestment)} for {sipTenure} years</p>
            </div>
          </div>
        ) : (
          <div className={`rounded-2xl shadow-xl p-6 text-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="text-6xl mb-4">📈</div>
            <h3 className="text-lg font-semibold">Enter SIP details</h3>
            <p className="text-sm text-gray-400">Adjust the sliders above to see your returns</p>
          </div>
        );

      case 'fd':
        return fdResult ? (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-4 sm:p-6 text-white">
              <p className="text-sm opacity-80 mb-1">Maturity Amount</p>
              <p className="text-3xl sm:text-4xl font-bold">{formatCurrency(fdResult.maturityAmount)}</p>
              <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/20">
                <div>
                  <p className="text-xs opacity-70">Deposit Amount</p>
                  <p className="text-sm font-semibold">{formatCurrency(fdResult.totalInvestment)}</p>
                </div>
                <div>
                  <p className="text-xs opacity-70">Total Interest</p>
                  <p className="text-sm font-semibold">{formatCurrency(fdResult.interest)}</p>
                </div>
              </div>
            </div>
            <div className={`rounded-2xl shadow-xl p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <p className="text-sm text-center text-gray-500">FD of {formatCurrency(fdAmount)} at {fdRate}% for {fdTenure} years</p>
            </div>
          </div>
        ) : (
          <div className={`rounded-2xl shadow-xl p-6 text-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="text-6xl mb-4">🏦</div>
            <h3 className="text-lg font-semibold">Enter FD details</h3>
            <p className="text-sm text-gray-400">Adjust the sliders above to see your maturity amount</p>
          </div>
        );

      case 'compare':
        return compareResult ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className={`rounded-2xl shadow-xl p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-sm font-semibold text-indigo-600 mb-2">Loan 1</h3>
                <p className="text-lg font-bold">EMI: {formatCurrency(compareResult.loan1.emi)}</p>
                <p className="text-xs text-gray-500">Total: {formatCurrency(compareResult.loan1.totalPayment)}</p>
                <p className="text-xs text-gray-500">Interest: {formatCurrency(compareResult.loan1.totalInterest)}</p>
              </div>
              <div className={`rounded-2xl shadow-xl p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-sm font-semibold text-pink-600 mb-2">Loan 2</h3>
                <p className="text-lg font-bold">EMI: {formatCurrency(compareResult.loan2.emi)}</p>
                <p className="text-xs text-gray-500">Total: {formatCurrency(compareResult.loan2.totalPayment)}</p>
                <p className="text-xs text-gray-500">Interest: {formatCurrency(compareResult.loan2.totalInterest)}</p>
              </div>
            </div>
            <div className={`rounded-2xl shadow-xl p-4 text-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <p className="text-sm font-semibold">
                Difference: {formatCurrency(Math.abs(compareResult.loan1.emi - compareResult.loan2.emi))} per month
              </p>
            </div>
          </div>
        ) : (
          <div className={`rounded-2xl shadow-xl p-6 text-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="text-6xl mb-4">⚖️</div>
            <h3 className="text-lg font-semibold">Enter both loan details</h3>
            <p className="text-sm text-gray-400">Fill in the fields above to compare</p>
          </div>
        );

      default:
        return null;
    }
  };

  // ===== SHARE & PRINT BUTTONS =====
  const renderActionButtons = () => {
    const hasResult = (activeCalculator === 'emi' && emi) || 
                      (activeCalculator === 'sip' && sipResult) || 
                      (activeCalculator === 'fd' && fdResult) ||
                      (activeCalculator === 'compare' && compareResult);
    
    if (!hasResult) return null;
    
    return (
      <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/20">
        <button onClick={shareResult} className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm font-medium transition flex items-center justify-center gap-1">
          <FaShare /> Share
        </button>
        <button onClick={() => window.print()} className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm font-medium transition flex items-center justify-center gap-1">
          <FaPrint /> Print
        </button>
        <button onClick={downloadPDF} className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm font-medium transition flex items-center justify-center gap-1">
          <FaDownload /> PDF
        </button>
      </div>
    );
  };

  // ===== MAIN RENDER =====
  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Smart Finance Tools
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Free calculators for your financial planning</p>
          </div>
          <div className="flex items-center gap-3">
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

        {/* CALCULATOR NAVIGATION */}
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

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
          
          {/* LEFT: CALCULATOR INPUT */}
          <div className="lg:col-span-3 space-y-4">
            <motion.div 
              key={activeCalculator}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-2xl shadow-xl p-4 sm:p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <h2 className="text-xl font-bold mb-1">{calculators.find(c => c.id === activeCalculator)?.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {calculators.find(c => c.id === activeCalculator)?.description}
              </p>
              {renderCalculatorInput()}
              {isLoading && (
                <div className="mt-4 flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                </div>
              )}
            </motion.div>
          </div>

          {/* RIGHT: RESULTS */}
          <div className="lg:col-span-2 space-y-4" id="report-content">
            {renderResults()}
            {renderActionButtons()}
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className={`mt-6 rounded-2xl shadow-xl p-4 sm:p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-xl font-bold mb-4">❓ Frequently Asked Questions</h2>
          <div className="space-y-3">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                What is EMI?
                <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 pl-4">
                EMI (Equated Monthly Installment) is the fixed amount you pay every month to repay a loan.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                What is SIP?
                <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 pl-4">
                SIP (Systematic Investment Plan) allows you to invest a fixed amount regularly in mutual funds.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                What is Fixed Deposit?
                <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 pl-4">
                Fixed Deposit is a financial instrument where you deposit money for a fixed period at a fixed interest rate.
              </p>
            </details>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-6 text-center text-xs text-gray-400">
          Made with ❤️ | truyon.com | Free Financial Tools
        </div>
      </div>
    </div>
  );
}

export default EMICalculator;