import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer 
} from 'recharts';
import { 
  FaChartPie, FaHistory, FaShare, FaPrint, FaDownload, 
  FaSun, FaMoon, FaHome, FaWallet, FaUniversity, FaExchangeAlt,
  FaCalculator, FaBuilding, FaShieldAlt, FaChartLine,
  FaPiggyBank, FaLandmark, FaCoins, FaArrowRight
} from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function EMICalculator() {
  // ===== STATE =====
  const [darkMode, setDarkMode] = useState(false);
  const [activeCalculator, setActiveCalculator] = useState('emi');
  
  // EMI State
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

  // SIP State
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [sipTenure, setSipTenure] = useState(10);
  const [sipResult, setSipResult] = useState(null);

  // FD State
  const [fdAmount, setFdAmount] = useState(100000);
  const [fdRate, setFdRate] = useState(7.5);
  const [fdTenure, setFdTenure] = useState(5);
  const [fdResult, setFdResult] = useState(null);

  // Compare State
  const [loan1, setLoan1] = useState({ amount: 500000, rate: 8.5, tenure: 20 });
  const [loan2, setLoan2] = useState({ amount: 500000, rate: 7.5, tenure: 20 });
  const [compareResult, setCompareResult] = useState(null);

  // ===== CURRENCY =====
  const currencySymbols = {
    USD: '$', EUR: '€', GBP: '£', INR: '₹', JPY: '¥',
    AUD: 'A$', CAD: 'C$', SGD: 'S$', CHF: 'Fr', CNY: '¥'
  };
  const getSymbol = () => currencySymbols[currency] || '₹';

  // ===== CALCULATORS =====
  const calculators = [
    { id: 'emi', name: 'EMI Calculator', icon: <FaLandmark />, color: 'from-blue-600 to-blue-800', description: 'Plan your loan repayments' },
    { id: 'sip', name: 'SIP Calculator', icon: <FaPiggyBank />, color: 'from-emerald-600 to-emerald-800', description: 'Grow your wealth monthly' },
    { id: 'fd', name: 'FD Calculator', icon: <FaBuilding />, color: 'from-amber-600 to-amber-800', description: 'Fixed deposit returns' },
    { id: 'compare', name: 'Loan Compare', icon: <FaExchangeAlt />, color: 'from-purple-600 to-purple-800', description: 'Choose the best loan' },
  ];

  // ===== FORMAT =====
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  // ===== EMI CALCULATIONS =====
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
          let yearlyInterest = 0, yearlyPrincipal = 0;
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
          amount: P, rate: interestRate, tenure: tenure,
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

  // ===== SIP CALCULATIONS =====
  useEffect(() => {
    if (activeCalculator === 'sip' && monthlyInvestment > 0 && expectedReturn > 0 && sipTenure > 0) {
      const P = parseFloat(monthlyInvestment);
      const r = parseFloat(expectedReturn) / 100 / 12;
      const n = parseFloat(sipTenure) * 12;
      if (P && r && n) {
        const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
        const totalInvestment = P * n;
        setSipResult({
          futureValue: futureValue.toFixed(2),
          totalInvestment: totalInvestment.toFixed(2),
          returns: (futureValue - totalInvestment).toFixed(2)
        });
      }
    }
  }, [monthlyInvestment, expectedReturn, sipTenure, activeCalculator]);

  // ===== FD CALCULATIONS =====
  useEffect(() => {
    if (activeCalculator === 'fd' && fdAmount > 0 && fdRate > 0 && fdTenure > 0) {
      const P = parseFloat(fdAmount);
      const r = parseFloat(fdRate) / 100;
      const n = parseFloat(fdTenure);
      if (P && r && n) {
        const maturityAmount = P * Math.pow(1 + r, n);
        setFdResult({
          maturityAmount: maturityAmount.toFixed(2),
          totalInvestment: P.toFixed(2),
          interest: (maturityAmount - P).toFixed(2)
        });
      }
    }
  }, [fdAmount, fdRate, fdTenure, activeCalculator]);

  // ===== COMPARE CALCULATIONS =====
  useEffect(() => {
    if (activeCalculator === 'compare') {
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
      if (result1 && result2) setCompareResult({ loan1: result1, loan2: result2 });
    }
  }, [loan1, loan2, activeCalculator]);

  // ===== SHARE & PDF =====
  const shareResult = () => {
    let text = '🏦 Truyon Financial Tools\n';
    if (activeCalculator === 'emi' && emi) {
      text += `EMI: ${formatCurrency(loanAmount)} @ ${interestRate}% for ${tenure} years\nMonthly EMI: ${formatCurrency(emi)}`;
    } else if (activeCalculator === 'sip' && sipResult) {
      text += `SIP: ${formatCurrency(monthlyInvestment)}/month @ ${expectedReturn}% for ${sipTenure} years\nFuture Value: ${formatCurrency(sipResult.futureValue)}`;
    } else if (activeCalculator === 'fd' && fdResult) {
      text += `FD: ${formatCurrency(fdAmount)} @ ${fdRate}% for ${fdTenure} years\nMaturity: ${formatCurrency(fdResult.maturityAmount)}`;
    }
    text += '\n\nCalculate yours at: truyon.com';
    if (navigator.share) {
      navigator.share({ title: 'Truyon Finance', text });
    } else {
      navigator.clipboard.writeText(text);
      alert('📋 Copied to clipboard!');
    }
  };

  const downloadPDF = async () => {
    const element = document.getElementById('report-content');
    if (!element) return;
    const canvas = await html2canvas(element, { scale: 2, backgroundColor: darkMode ? '#0f172a' : '#ffffff' });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('truyon-calculator-report.pdf');
  };

  // ===== RENDER INPUTS =====
  const renderCalculatorInput = () => {
    switch (activeCalculator) {
      case 'emi':
        return (
          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Loan Amount</label>
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{formatCurrency(loanAmount)}</span>
              </div>
              <input type="range" min="10000" max="10000000" step="10000" value={loanAmount}
                onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                className="w-full h-2 bg-blue-200 dark:bg-blue-900 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              <div className="flex justify-between text-xs text-slate-400 mt-1"><span>10K</span><span>1Cr</span></div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Interest Rate</label>
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{interestRate}%</span>
              </div>
              <input type="range" min="1" max="25" step="0.1" value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full h-2 bg-blue-200 dark:bg-blue-900 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1%</span><span>25%</span></div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Tenure (Years)</label>
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{tenure} years</span>
              </div>
              <input type="range" min="1" max="40" step="1" value={tenure}
                onChange={(e) => setTenure(parseFloat(e.target.value))}
                className="w-full h-2 bg-blue-200 dark:bg-blue-900 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1 yr</span><span>40 yrs</span></div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[{ label: '10L', amount: 1000000, rate: 8.5, tenure: 20 },
                { label: '20L', amount: 2000000, rate: 8.5, tenure: 20 },
                { label: '50L', amount: 5000000, rate: 8.5, tenure: 20 }].map((p) => (
                <button key={p.label} onClick={() => { setLoanAmount(p.amount); setInterestRate(p.rate); setTenure(p.tenure); }}
                  className="py-2 rounded-lg text-sm font-medium transition bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600">
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        );

      case 'sip':
        return (
          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Monthly Investment</label>
                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{formatCurrency(monthlyInvestment)}</span>
              </div>
              <input type="range" min="500" max="100000" step="500" value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(parseFloat(e.target.value))}
                className="w-full h-2 bg-emerald-200 dark:bg-emerald-900 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Expected Return</label>
                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{expectedReturn}%</span>
              </div>
              <input type="range" min="1" max="30" step="0.5" value={expectedReturn}
                onChange={(e) => setExpectedReturn(parseFloat(e.target.value))}
                className="w-full h-2 bg-emerald-200 dark:bg-emerald-900 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Tenure (Years)</label>
                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{sipTenure} years</span>
              </div>
              <input type="range" min="1" max="30" step="1" value={sipTenure}
                onChange={(e) => setSipTenure(parseFloat(e.target.value))}
                className="w-full h-2 bg-emerald-200 dark:bg-emerald-900 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
            </div>
          </div>
        );

      case 'fd':
        return (
          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Deposit Amount</label>
                <span className="text-lg font-bold text-amber-600 dark:text-amber-400">{formatCurrency(fdAmount)}</span>
              </div>
              <input type="range" min="1000" max="10000000" step="1000" value={fdAmount}
                onChange={(e) => setFdAmount(parseFloat(e.target.value))}
                className="w-full h-2 bg-amber-200 dark:bg-amber-900 rounded-lg appearance-none cursor-pointer accent-amber-600" />
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Interest Rate</label>
                <span className="text-lg font-bold text-amber-600 dark:text-amber-400">{fdRate}%</span>
              </div>
              <input type="range" min="1" max="15" step="0.25" value={fdRate}
                onChange={(e) => setFdRate(parseFloat(e.target.value))}
                className="w-full h-2 bg-amber-200 dark:bg-amber-900 rounded-lg appearance-none cursor-pointer accent-amber-600" />
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Tenure (Years)</label>
                <span className="text-lg font-bold text-amber-600 dark:text-amber-400">{fdTenure} years</span>
              </div>
              <input type="range" min="1" max="20" step="1" value={fdTenure}
                onChange={(e) => setFdTenure(parseFloat(e.target.value))}
                className="w-full h-2 bg-amber-200 dark:bg-amber-900 rounded-lg appearance-none cursor-pointer accent-amber-600" />
            </div>
          </div>
        );

      case 'compare':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">🏦 Loan 1</h3>
                <input type="number" value={loan1.amount} onChange={(e) => setLoan1({...loan1, amount: parseFloat(e.target.value) || 0})}
                  placeholder="Amount" className="w-full mb-2 px-3 py-2 rounded-lg text-sm border dark:bg-slate-800 dark:border-slate-700" />
                <input type="number" value={loan1.rate} onChange={(e) => setLoan1({...loan1, rate: parseFloat(e.target.value) || 0})}
                  placeholder="Rate %" className="w-full mb-2 px-3 py-2 rounded-lg text-sm border dark:bg-slate-800 dark:border-slate-700" />
                <input type="number" value={loan1.tenure} onChange={(e) => setLoan1({...loan1, tenure: parseFloat(e.target.value) || 0})}
                  placeholder="Tenure" className="w-full px-3 py-2 rounded-lg text-sm border dark:bg-slate-800 dark:border-slate-700" />
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-xl">
                <h3 className="text-sm font-semibold text-pink-600 dark:text-pink-400 mb-3">🏦 Loan 2</h3>
                <input type="number" value={loan2.amount} onChange={(e) => setLoan2({...loan2, amount: parseFloat(e.target.value) || 0})}
                  placeholder="Amount" className="w-full mb-2 px-3 py-2 rounded-lg text-sm border dark:bg-slate-800 dark:border-slate-700" />
                <input type="number" value={loan2.rate} onChange={(e) => setLoan2({...loan2, rate: parseFloat(e.target.value) || 0})}
                  placeholder="Rate %" className="w-full mb-2 px-3 py-2 rounded-lg text-sm border dark:bg-slate-800 dark:border-slate-700" />
                <input type="number" value={loan2.tenure} onChange={(e) => setLoan2({...loan2, tenure: parseFloat(e.target.value) || 0})}
                  placeholder="Tenure" className="w-full px-3 py-2 rounded-lg text-sm border dark:bg-slate-800 dark:border-slate-700" />
              </div>
            </div>
          </div>
        );
      default: return null;
    }
  };

  // ===== RENDER RESULTS =====
  const renderResults = () => {
    const activeCalc = calculators.find(c => c.id === activeCalculator);
    
    switch (activeCalculator) {
      case 'emi':
        return emi ? (
          <div className="space-y-4">
            <div className={`bg-gradient-to-br ${activeCalc.color} rounded-2xl shadow-xl p-6 text-white`}>
              <p className="text-sm opacity-80 mb-1">Monthly EMI</p>
              <p className="text-3xl font-bold">{formatCurrency(emi)}</p>
              <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/20">
                <div><p className="text-xs opacity-70">Total Payment</p><p className="text-sm font-semibold">{formatCurrency(totalPayment)}</p></div>
                <div><p className="text-xs opacity-70">Total Interest</p><p className="text-sm font-semibold">{formatCurrency(totalInterest)}</p></div>
              </div>
              <div className="mt-4 h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={[{ name: 'Principal', value: parseFloat(totalPayment) - parseFloat(totalInterest) }, { name: 'Interest', value: parseFloat(totalInterest) }]}
                      cx="50%" cy="50%" innerRadius={30} outerRadius={50} paddingAngle={2} dataKey="value">
                      {[{ name: 'Principal', value: 1 }, { name: 'Interest', value: 1 }].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#ffffff', '#fcd34d'][index]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => formatCurrency(value)} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="flex border-b dark:border-slate-700">
                <button onClick={() => setActiveTab('breakdown')} className={`flex-1 py-3 text-sm font-medium transition ${activeTab === 'breakdown' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-500'}`}>
                  <FaChartPie className="inline mr-1" /> Yearly
                </button>
                <button onClick={() => setActiveTab('history')} className={`flex-1 py-3 text-sm font-medium transition ${activeTab === 'history' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-500'}`}>
                  <FaHistory className="inline mr-1" /> History
                </button>
              </div>
              <div className="p-4 max-h-64 overflow-y-auto">
                {activeTab === 'breakdown' ? (
                  <div>
                    <div className="grid grid-cols-5 text-xs font-semibold text-slate-500 dark:text-slate-400 border-b pb-2 mb-2">
                      <span>Year</span><span className="text-right">Principal</span><span className="text-right">Interest</span>
                      <span className="text-right">Total</span><span className="text-right">Balance</span>
                    </div>
                    {yearlyBreakdown.map((row) => (
                      <div key={row.year} className="grid grid-cols-5 text-xs py-1.5 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                        <span className="font-medium">{row.year}</span>
                        <span className="text-right">{formatCurrency(row.principal)}</span>
                        <span className="text-right">{formatCurrency(row.interest)}</span>
                        <span className="text-right">{formatCurrency(row.total)}</span>
                        <span className="text-right">{formatCurrency(row.balance)}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    {history.filter(h => h.type === 'emi').length === 0 ? (
                      <p className="text-center text-slate-400 text-sm py-4">No calculations saved</p>
                    ) : (
                      history.filter(h => h.type === 'emi').slice(-5).reverse().map((item) => (
                        <div key={item.id} className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3 mb-2">
                          <div className="flex justify-between"><span className="text-sm font-medium">{formatCurrency(item.amount)} @ {item.rate}%</span>
                            <span className="text-sm font-bold text-blue-600">EMI: {formatCurrency(item.emi)}</span></div>
                          <div className="flex justify-between text-xs text-slate-400 mt-1"><span>{item.tenure} years</span><span>{item.date}</span></div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 text-center">
            <div className="text-6xl mb-4">💰</div>
            <h3 className="text-lg font-semibold">Enter Loan Details</h3>
            <p className="text-sm text-slate-400">Adjust the sliders to see your EMI</p>
          </div>
        );

      case 'sip':
        return sipResult ? (
          <div className="space-y-4">
            <div className={`bg-gradient-to-br ${activeCalc.color} rounded-2xl shadow-xl p-6 text-white`}>
              <p className="text-sm opacity-80 mb-1">Future Value</p>
              <p className="text-3xl font-bold">{formatCurrency(sipResult.futureValue)}</p>
              <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/20">
                <div><p className="text-xs opacity-70">Total Investment</p><p className="text-sm font-semibold">{formatCurrency(sipResult.totalInvestment)}</p></div>
                <div><p className="text-xs opacity-70">Total Returns</p><p className="text-sm font-semibold">{formatCurrency(sipResult.returns)}</p></div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 text-center">
              <p className="text-sm text-slate-500">Monthly SIP of {formatCurrency(monthlyInvestment)} for {sipTenure} years</p>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 text-center">
            <div className="text-6xl mb-4">📈</div>
            <h3 className="text-lg font-semibold">Enter SIP Details</h3>
            <p className="text-sm text-slate-400">Adjust the sliders to see your returns</p>
          </div>
        );

      case 'fd':
        return fdResult ? (
          <div className="space-y-4">
            <div className={`bg-gradient-to-br ${activeCalc.color} rounded-2xl shadow-xl p-6 text-white`}>
              <p className="text-sm opacity-80 mb-1">Maturity Amount</p>
              <p className="text-3xl font-bold">{formatCurrency(fdResult.maturityAmount)}</p>
              <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/20">
                <div><p className="text-xs opacity-70">Deposit</p><p className="text-sm font-semibold">{formatCurrency(fdResult.totalInvestment)}</p></div>
                <div><p className="text-xs opacity-70">Interest</p><p className="text-sm font-semibold">{formatCurrency(fdResult.interest)}</p></div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 text-center">
              <p className="text-sm text-slate-500">FD of {formatCurrency(fdAmount)} at {fdRate}% for {fdTenure} years</p>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 text-center">
            <div className="text-6xl mb-4">🏦</div>
            <h3 className="text-lg font-semibold">Enter FD Details</h3>
            <p className="text-sm text-slate-400">Adjust the sliders to see your maturity</p>
          </div>
        );

      case 'compare':
        return compareResult ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl shadow-xl p-4">
                <h3 className="text-sm font-semibold text-blue-600 mb-2">Loan 1</h3>
                <p className="text-lg font-bold">EMI: {formatCurrency(compareResult.loan1.emi)}</p>
                <p className="text-xs text-slate-500">Total: {formatCurrency(compareResult.loan1.totalPayment)}</p>
                <p className="text-xs text-slate-500">Interest: {formatCurrency(compareResult.loan1.totalInterest)}</p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-2xl shadow-xl p-4">
                <h3 className="text-sm font-semibold text-pink-600 mb-2">Loan 2</h3>
                <p className="text-lg font-bold">EMI: {formatCurrency(compareResult.loan2.emi)}</p>
                <p className="text-xs text-slate-500">Total: {formatCurrency(compareResult.loan2.totalPayment)}</p>
                <p className="text-xs text-slate-500">Interest: {formatCurrency(compareResult.loan2.totalInterest)}</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 text-center">
              <p className="text-sm font-semibold">Difference: {formatCurrency(Math.abs(compareResult.loan1.emi - compareResult.loan2.emi))}/month</p>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 text-center">
            <div className="text-6xl mb-4">⚖️</div>
            <h3 className="text-lg font-semibold">Enter Both Loans</h3>
            <p className="text-sm text-slate-400">Fill in the fields to compare</p>
          </div>
        );
      default: return null;
    }
  };

  // ===== ACTION BUTTONS =====
  const renderActions = () => {
    const hasResult = (activeCalculator === 'emi' && emi) || (activeCalculator === 'sip' && sipResult) || 
                      (activeCalculator === 'fd' && fdResult) || (activeCalculator === 'compare' && compareResult);
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
  const activeCalc = calculators.find(c => c.id === activeCalculator);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        
        {/* HEADER with Logo */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
<img src="/T.png" alt="Truyon" className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl shadow-lg" />            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white">
                Truyon <span className="text-blue-600 dark:text-blue-400">Finance</span>
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">Smart Financial Planning Tools</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}
              className="px-3 py-2 rounded-lg text-sm border transition bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <option value="USD">USD ($)</option><option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option><option value="INR">INR (₹)</option>
              <option value="JPY">JPY (¥)</option><option value="AUD">AUD (A$)</option>
              <option value="CAD">CAD (C$)</option><option value="SGD">SGD (S$)</option>
            </select>
            <button onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition ${darkMode ? 'bg-slate-700 text-yellow-400' : 'bg-slate-200 text-slate-700'}`}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>

        {/* CALCULATOR NAVIGATION */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {calculators.map((calc) => (
            <motion.button
              key={calc.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCalculator(calc.id)}
              className={`p-4 rounded-xl text-center transition-all ${activeCalculator === calc.id 
                ? 'bg-gradient-to-br ' + calc.color + ' text-white shadow-lg shadow-blue-500/20' 
                : darkMode 
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 shadow-sm'
              }`}
            >
              <div className="text-2xl">{calc.icon}</div>
              <div className="text-xs sm:text-sm font-medium mt-1">{calc.name}</div>
            </motion.button>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* LEFT: INPUT */}
          <div className="lg:col-span-3 space-y-4">
            <motion.div 
              key={activeCalculator}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6"
            >
              <h2 className="text-xl font-bold mb-1">{activeCalc.name}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{activeCalc.description}</p>
              {renderCalculatorInput()}
              {isLoading && (
                <div className="mt-4 flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              )}
            </motion.div>
          </div>

          {/* RIGHT: RESULTS */}
          <div className="lg:col-span-2 space-y-4" id="report-content">
            {renderResults()}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center text-xs text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
              <FaShieldAlt className="inline mr-1" /> Secured & Private | Truyon Financial Tools
            </div>
            {renderActions()}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">❓ Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              { q: 'What is EMI?', a: 'EMI (Equated Monthly Installment) is the fixed amount you pay every month to repay a loan.' },
              { q: 'What is SIP?', a: 'SIP (Systematic Investment Plan) allows you to invest a fixed amount regularly in mutual funds.' },
              { q: 'What is Fixed Deposit?', a: 'Fixed Deposit is a financial instrument where you deposit money for a fixed period at a fixed interest rate.' },
            ].map((faq, i) => (
              <details key={i} className="group">
                <summary className="flex justify-between items-center cursor-pointer text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  {faq.q}
                  <span className="text-slate-400 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 pl-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500">
          © 2026 <span className="text-blue-600 dark:text-blue-400 font-medium">Truyon</span> — Made with ❤️ for your financial future
        </div>
      </div>
    </div>
  );
}

export default EMICalculator;