import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import { 
  FaLandmark, FaPiggyBank, FaBuilding, FaExchangeAlt, FaSun, FaMoon, 
  FaLightbulb, FaTable, FaChartArea, FaCheckCircle, FaShieldAlt
} from 'react-icons/fa';

// ==========================================
// CONSTANTS & PRESETS
// ==========================================
const CURRENCY_SYMBOLS = {
  INR: '₹', USD: '$', EUR: '€', GBP: '£', JPY: '¥', AUD: 'A$', CAD: 'C$'
};

const LOAN_PRESETS = [
  { label: '🏡 Home Loan', amount: 5000000, rate: 8.5, tenure: 20 },
  { label: '🚗 Car Loan', amount: 900000, rate: 9.2, tenure: 5 },
  { label: '🎓 Personal Loan', amount: 300000, rate: 12.0, tenure: 3 },
];

const SIP_GOALS = [
  { label: '💰 ₹1 Crore in 15Y', monthly: 20000, rate: 12, tenure: 15 },
  { label: '🏡 ₹50 Lakh in 10Y', monthly: 22000, rate: 12, tenure: 10 },
  { label: '🎓 ₹25 Lakh in 7Y', monthly: 20000, rate: 11, tenure: 7 },
];

export default function TruyonFinanceDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('emi'); // 'emi' | 'sip' | 'fd' | 'compare'
  const [currency, setCurrency] = useState('INR');

  const symbol = CURRENCY_SYMBOLS[currency] || '₹';

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).format(val || 0);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans pb-12 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* HEADER WITH LOGO */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 px-4 py-3 sm:px-8 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/T.png" 
              alt="Truyon" 
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 object-cover"
              onError={(e) => {
                // Fallback icon if /T.png is not found in public folder
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
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Smart Financial Planning Tools</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
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
        {/* CALCULATOR NAVIGATION */}
        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-none mb-6">
          {[
            { id: 'emi', label: 'EMI Calculator', icon: <FaLandmark /> },
            { id: 'sip', label: 'SIP Planner', icon: <FaPiggyBank /> },
            { id: 'fd', label: 'Fixed Deposit', icon: <FaBuilding /> },
            { id: 'compare', label: 'Compare Loans', icon: <FaExchangeAlt /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ACTIVE CALCULATOR VIEW */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'emi' && <EMICalculatorView formatCurrency={formatCurrency} symbol={symbol} darkMode={darkMode} />}
            {activeTab === 'sip' && <SIPCalculatorView formatCurrency={formatCurrency} symbol={symbol} darkMode={darkMode} />}
            {activeTab === 'fd' && <FDCalculatorView formatCurrency={formatCurrency} symbol={symbol} darkMode={darkMode} />}
            {activeTab === 'compare' && <CompareCalculatorView formatCurrency={formatCurrency} symbol={symbol} />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

// ==========================================
// 1. EMI CALCULATOR VIEW (WITH TIMELINE BREAKDOWN)
// ==========================================
function EMICalculatorView({ formatCurrency, symbol, darkMode }) {
  const [amount, setAmount] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [viewMode, setViewMode] = useState('chart'); // 'chart' | 'table'

  const metrics = useMemo(() => {
    const P = parseFloat(amount) || 0;
    const r = (parseFloat(rate) || 0) / 12 / 100;
    const n = (parseFloat(tenure) || 0) * 12;

    if (!P || !r || !n) return { emi: 0, totalPayment: 0, totalInterest: 0, breakdown: [] };

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    let balance = P;
    const breakdown = [];
    for (let yr = 1; yr <= tenure; yr++) {
      let yrInterest = 0;
      let yrPrincipal = 0;
      for (let m = 1; m <= 12; m++) {
        const mInterest = balance * r;
        const mPrincipal = emi - mInterest;
        yrInterest += mInterest;
        yrPrincipal += mPrincipal;
        balance -= mPrincipal;
      }
      breakdown.push({
        year: yr,
        label: `Year ${yr}`,
        principal: Math.round(yrPrincipal),
        interest: Math.round(yrInterest),
        total: Math.round(yrPrincipal + yrInterest),
        balance: Math.max(0, Math.round(balance)),
      });
    }

    return { emi, totalPayment, totalInterest, breakdown };
  }, [amount, rate, tenure]);

  const recommendedIncome = useMemo(() => metrics.emi * 2, [metrics.emi]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* LEFT: INPUTS WITH FREE TEXT FIELDS & SLIDERS */}
      <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-6 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-slate-800 dark:text-white">Loan Parameters</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Type exact numbers or drag sliders to adjust</p>
        </div>

        {/* QUICK PRESET CHIPS */}
        <div className="flex flex-wrap gap-2">
          {LOAN_PRESETS.map((p) => (
            <button
              key={p.label}
              onClick={() => { setAmount(p.amount); setRate(p.rate); setTenure(p.tenure); }}
              className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:border-blue-300 transition font-medium"
            >
              {p.label}
            </button>
          ))}
        </div>

        <HybridInput
          label="Loan Amount"
          symbol={symbol}
          value={amount}
          min={100000}
          max={20000000}
          step={50000}
          onChange={setAmount}
          formatted={formatCurrency(amount)}
        />

        <HybridInput
          label="Interest Rate (% p.a.)"
          value={rate}
          min={1}
          max={25}
          step={0.1}
          onChange={setRate}
          formatted={`${rate}%`}
        />

        <HybridInput
          label="Tenure (Years)"
          value={tenure}
          min={1}
          max={40}
          step={1}
          onChange={setTenure}
          formatted={`${tenure} Yrs`}
        />

        {/* AFFORDABILITY INSIGHT */}
        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 flex items-start gap-3">
          <FaLightbulb className="text-blue-600 dark:text-blue-400 text-lg mt-0.5 shrink-0" />
          <div className="text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
            <span className="font-semibold">Affordability Tip:</span> To comfortably pay an EMI of <span className="font-bold">{formatCurrency(metrics.emi)}</span>, your net household income should be at least <span className="font-bold underline">{formatCurrency(recommendedIncome)}/month</span>.
          </div>
        </div>
      </div>

      {/* RIGHT: RESULTS + AMORTIZATION BREAKDOWN */}
      <div className="lg:col-span-6 space-y-6">
        {/* SUMMARY HERO CARD */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-6 shadow-xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Monthly EMI Payment</span>
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">{formatCurrency(metrics.emi)}</div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
            <div>
              <p className="text-xs opacity-75">Principal Loan</p>
              <p className="text-sm font-bold">{formatCurrency(amount)}</p>
            </div>
            <div>
              <p className="text-xs opacity-75">Total Interest Payable</p>
              <p className="text-sm font-bold text-amber-300">{formatCurrency(metrics.totalInterest)}</p>
            </div>
          </div>
        </div>

        {/* TIMELINE OVER TIME (GRAPH VS YEARLY TABLE TOGGLE) */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-slate-800 dark:text-white">Payment Details Over Time</h3>
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('chart')}
                className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md font-medium transition ${
                  viewMode === 'chart' 
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <FaChartArea /> Chart
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md font-medium transition ${
                  viewMode === 'table' 
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <FaTable /> Yearly Table
              </button>
            </div>
          </div>

          {viewMode === 'chart' ? (
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={metrics.breakdown}>
                  <XAxis dataKey="label" stroke={darkMode ? '#64748b' : '#94a3b8'} fontSize={10} />
                  <YAxis stroke={darkMode ? '#64748b' : '#94a3b8'} fontSize={10} tickFormatter={(v) => `${v / 1000}k`} />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Area type="monotone" dataKey="principal" stackId="1" stroke="#2563eb" fill="#3b82f6" name="Principal Paid" />
                  <Area type="monotone" dataKey="interest" stackId="1" stroke="#f59e0b" fill="#fbbf24" name="Interest Paid" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="max-h-60 overflow-y-auto rounded-xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800/80 sticky top-0 text-slate-600 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="py-2 px-3">Year</th>
                    <th className="py-2 px-3 text-right">Principal</th>
                    <th className="py-2 px-3 text-right">Interest</th>
                    <th className="py-2 px-3 text-right">Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {metrics.breakdown.map((row) => (
                    <tr key={row.year} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                      <td className="py-2 px-3 font-medium">Yr {row.year}</td>
                      <td className="py-2 px-3 text-right">{formatCurrency(row.principal)}</td>
                      <td className="py-2 px-3 text-right text-amber-600 dark:text-amber-400">{formatCurrency(row.interest)}</td>
                      <td className="py-2 px-3 text-right font-medium">{formatCurrency(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. SIP CALCULATOR VIEW
// ==========================================
function SIPCalculatorView({ formatCurrency, symbol, darkMode }) {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [tenure, setTenure] = useState(15);

  const metrics = useMemo(() => {
    const P = parseFloat(monthly) || 0;
    const i = (parseFloat(rate) || 0) / 12 / 100;
    const n = (parseFloat(tenure) || 0) * 12;

    if (!P || !i || !n) return { futureValue: 0, invested: 0, wealthGained: 0, growthData: [] };

    const futureValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const invested = P * n;
    const wealthGained = futureValue - invested;

    const growthData = [];
    for (let yr = 1; yr <= tenure; yr++) {
      const months = yr * 12;
      const fvYear = P * ((Math.pow(1 + i, months) - 1) / i) * (1 + i);
      growthData.push({
        label: `Yr ${yr}`,
        Invested: Math.round(P * months),
        Wealth: Math.round(fvYear),
      });
    }

    return { futureValue, invested, wealthGained, growthData };
  }, [monthly, rate, tenure]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-6 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-slate-800 dark:text-white">SIP Investment Parameters</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Specify your monthly savings goals</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {SIP_GOALS.map((g) => (
            <button
              key={g.label}
              onClick={() => { setMonthly(g.monthly); setRate(g.rate); setTenure(g.tenure); }}
              className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 hover:border-emerald-300 transition font-medium"
            >
              {g.label}
            </button>
          ))}
        </div>

        <HybridInput
          label="Monthly Investment"
          symbol={symbol}
          value={monthly}
          min={500}
          max={500000}
          step={500}
          onChange={setMonthly}
          formatted={formatCurrency(monthly)}
        />

        <HybridInput
          label="Expected Annual Return (%)"
          value={rate}
          min={1}
          max={30}
          step={0.5}
          onChange={setRate}
          formatted={`${rate}%`}
        />

        <HybridInput
          label="Investment Horizon (Years)"
          value={tenure}
          min={1}
          max={40}
          step={1}
          onChange={setTenure}
          formatted={`${tenure} Yrs`}
        />
      </div>

      <div className="lg:col-span-6 space-y-6">
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-6 shadow-xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Expected Corpus Value</span>
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">{formatCurrency(metrics.futureValue)}</div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
            <div>
              <p className="text-xs opacity-75">Invested Outlay</p>
              <p className="text-sm font-bold">{formatCurrency(metrics.invested)}</p>
            </div>
            <div>
              <p className="text-xs opacity-75">Estimated Wealth Gain</p>
              <p className="text-sm font-bold text-emerald-200">{formatCurrency(metrics.wealthGained)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 dark:text-white">Compounding Growth Trajectory</h3>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={metrics.growthData}>
                <XAxis dataKey="label" stroke={darkMode ? '#64748b' : '#94a3b8'} fontSize={10} />
                <YAxis stroke={darkMode ? '#64748b' : '#94a3b8'} fontSize={10} tickFormatter={(v) => `${v / 1000}k`} />
                <Tooltip formatter={(val) => formatCurrency(val)} />
                <Area type="monotone" dataKey="Wealth" stroke="#10b981" fill="#34d399" fillOpacity={0.4} name="Total Wealth" />
                <Area type="monotone" dataKey="Invested" stroke="#64748b" fill="#94a3b8" fillOpacity={0.2} name="Total Outlay" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. FIXED DEPOSIT VIEW
// ==========================================
function FDCalculatorView({ formatCurrency, symbol, darkMode }) {
  const [deposit, setDeposit] = useState(200000);
  const [rate, setRate] = useState(7.0);
  const [tenure, setTenure] = useState(5);

  const metrics = useMemo(() => {
    const P = parseFloat(deposit) || 0;
    const r = (parseFloat(rate) || 0) / 100;
    const t = parseFloat(tenure) || 0;

    if (!P || !r || !t) return { maturity: 0, interest: 0 };

    const maturity = P * Math.pow(1 + r, t);
    const interest = maturity - P;

    return { maturity, interest };
  }, [deposit, rate, tenure]);

  const pieData = [
    { name: 'Principal', value: deposit },
    { name: 'Interest', value: metrics.interest },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-6 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-slate-800 dark:text-white">Fixed Deposit Parameters</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Calculate guaranteed lump-sum returns</p>
        </div>

        <HybridInput
          label="Deposit Amount"
          symbol={symbol}
          value={deposit}
          min={10000}
          max={10000000}
          step={10000}
          onChange={setDeposit}
          formatted={formatCurrency(deposit)}
        />

        <HybridInput
          label="Interest Rate (% p.a.)"
          value={rate}
          min={1}
          max={15}
          step={0.25}
          onChange={setRate}
          formatted={`${rate}%`}
        />

        <HybridInput
          label="Tenure (Years)"
          value={tenure}
          min={1}
          max={20}
          step={1}
          onChange={setTenure}
          formatted={`${tenure} Yrs`}
        />
      </div>

      <div className="lg:col-span-6 space-y-6">
        <div className="bg-gradient-to-br from-amber-600 to-orange-700 text-white rounded-2xl p-6 shadow-xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Guaranteed Maturity Value</span>
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">{formatCurrency(metrics.maturity)}</div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
            <div>
              <p className="text-xs opacity-75">Principal Invested</p>
              <p className="text-sm font-bold">{formatCurrency(deposit)}</p>
            </div>
            <div>
              <p className="text-xs opacity-75">Total Interest Earned</p>
              <p className="text-sm font-bold text-amber-200">{formatCurrency(metrics.interest)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex items-center justify-between shadow-sm">
          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-1">Return Ratio</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Interest makes up <span className="font-bold text-amber-500">{((metrics.interest / (metrics.maturity || 1)) * 100).toFixed(1)}%</span> of total maturity value.
            </p>
          </div>
          <div className="h-24 w-24">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" innerRadius={22} outerRadius={38} paddingAngle={3}>
                  <Cell fill={darkMode ? '#475569' : '#cbd5e1'} />
                  <Cell fill="#f59e0b" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. LOAN COMPARISON VIEW
// ==========================================
function CompareCalculatorView({ formatCurrency, symbol }) {
  const [loan1, setLoan1] = useState({ amount: 5000000, rate: 8.5, tenure: 20 });
  const [loan2, setLoan2] = useState({ amount: 5000000, rate: 8.0, tenure: 20 });

  const calcLoan = (amt, rt, tn) => {
    const P = parseFloat(amt) || 0;
    const r = (parseFloat(rt) || 0) / 12 / 100;
    const n = (parseFloat(tn) || 0) * 12;
    if (!P || !r || !n) return { emi: 0, total: 0, interest: 0 };
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return { emi, total: emi * n, interest: emi * n - P };
  };

  const res1 = useMemo(() => calcLoan(loan1.amount, loan1.rate, loan1.tenure), [loan1]);
  const res2 = useMemo(() => calcLoan(loan2.amount, loan2.rate, loan2.tenure), [loan2]);

  const emiDiff = Math.abs(res1.emi - res2.emi);
  const totalDiff = Math.abs(res1.total - res2.total);
  const winner = res1.total <= res2.total ? 'Option A' : 'Option B';

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LOAN A */}
        <div className="bg-white dark:bg-slate-900 border-2 border-blue-500/40 rounded-2xl p-5 space-y-4 shadow-sm">
          <h3 className="font-bold text-blue-600 dark:text-blue-400">Loan Option A</h3>
          <div className="space-y-3">
            <FreeInput label="Amount" value={loan1.amount} onChange={(v) => setLoan1({ ...loan1, amount: v })} />
            <FreeInput label="Interest Rate (%)" value={loan1.rate} onChange={(v) => setLoan1({ ...loan1, rate: v })} />
            <FreeInput label="Tenure (Years)" value={loan1.tenure} onChange={(v) => setLoan1({ ...loan1, tenure: v })} />
          </div>
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <div className="flex justify-between"><span>Monthly EMI:</span><span className="font-bold">{formatCurrency(res1.emi)}</span></div>
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400"><span>Total Interest:</span><span>{formatCurrency(res1.interest)}</span></div>
          </div>
        </div>

        {/* LOAN B */}
        <div className="bg-white dark:bg-slate-900 border-2 border-purple-500/40 rounded-2xl p-5 space-y-4 shadow-sm">
          <h3 className="font-bold text-purple-600 dark:text-purple-400">Loan Option B</h3>
          <div className="space-y-3">
            <FreeInput label="Amount" value={loan2.amount} onChange={(v) => setLoan2({ ...loan2, amount: v })} />
            <FreeInput label="Interest Rate (%)" value={loan2.rate} onChange={(v) => setLoan2({ ...loan2, rate: v })} />
            <FreeInput label="Tenure (Years)" value={loan2.tenure} onChange={(v) => setLoan2({ ...loan2, tenure: v })} />
          </div>
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <div className="flex justify-between"><span>Monthly EMI:</span><span className="font-bold">{formatCurrency(res2.emi)}</span></div>
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400"><span>Total Interest:</span><span>{formatCurrency(res2.interest)}</span></div>
          </div>
        </div>
      </div>

      {/* COMPARISON VERDICT */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-2xl text-emerald-200 shrink-0" />
          <div>
            <h4 className="font-bold">{winner} is the smarter choice!</h4>
            <p className="text-xs text-emerald-100">
              Saves you <span className="font-bold">{formatCurrency(emiDiff)}</span>/month and <span className="font-bold">{formatCurrency(totalDiff)}</span> in total interest payout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// REUSABLE HYBRID INPUT (FREE TEXT + RANGE SLIDER)
// ==========================================
function HybridInput({ label, symbol, value, min, max, step, onChange, formatted }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm gap-2">
        <label className="font-medium text-slate-700 dark:text-slate-300">{label}</label>
        
        {/* FREE NUMBER INPUT FIELD */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2 py-1">
          {symbol && <span className="text-xs text-slate-500">{symbol}</span>}
          <input
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
            className="w-24 text-right bg-transparent text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 focus:outline-none"
          />
        </div>
      </div>

      {/* RANGE SLIDER */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
    </div>
  );
}

function FreeInput({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}