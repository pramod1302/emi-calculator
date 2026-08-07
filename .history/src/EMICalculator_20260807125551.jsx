import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import { 
  FaLandmark, FaPiggyBank, FaBuilding, FaExchangeAlt, FaSun, FaMoon, 
  FaShareAlt, FaFilePdf, FaInfoCircle, FaCheckCircle, FaLightbulb, FaShieldAlt
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
  { label: '🎓 Personal', amount: 300000, rate: 12.0, tenure: 3 },
];

const SIP_GOALS = [
  { label: '💰 ₹1 Crore in 15Y', target: 10000000, rate: 12, tenure: 15 },
  { label: '🏡 ₹50 Lakh in 10Y', target: 5000000, rate: 12, tenure: 10 },
  { label: '🎓 ₹25 Lakh in 7Y', target: 2500000, rate: 11, tenure: 7 },
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
      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 px-4 py-3 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
              T
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight">
                Truyon <span className="text-blue-600 dark:text-blue-400">Finance</span>
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Smart Financial Intelligence Platform</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium border bg-transparent border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.keys(CURRENCY_SYMBOLS).map((c) => (
                <option key={c} value={c} className="text-slate-900">{c} ({CURRENCY_SYMBOLS[c]})</option>
              ))}
            </select>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              aria-label="Toggle Theme"
            >
              {darkMode ? <FaSun className="text-amber-400" /> : <FaMoon />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* TAB NAVIGATION (Mobile Scrollable) */}
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
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB CONTENTS */}
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
// 1. EMI CALCULATOR SUB-VIEW
// ==========================================
function EMICalculatorView({ formatCurrency, symbol, darkMode }) {
  const [amount, setAmount] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  // Synchronous performance math via useMemo
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
        year: `Yr ${yr}`,
        principal: Math.round(yrPrincipal),
        interest: Math.round(yrInterest),
        balance: Math.max(0, Math.round(balance)),
      });
    }

    return { emi, totalPayment, totalInterest, breakdown };
  }, [amount, rate, tenure]);

  const recommendedIncome = useMemo(() => metrics.emi * 2, [metrics.emi]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* INPUT CONTROLS */}
      <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-6">
        <div>
          <h2 className="text-lg font-bold">Loan Parameters</h2>
          <p className="text-xs text-slate-500">Adjust the options to customize your repayment forecast</p>
        </div>

        {/* PRESET CHIPS */}
        <div className="flex flex-wrap gap-2">
          {LOAN_PRESETS.map((p) => (
            <button
              key={p.label}
              onClick={() => { setAmount(p.amount); setRate(p.rate); setTenure(p.tenure); }}
              className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition font-medium"
            >
              {p.label}
            </button>
          ))}
        </div>

        <SliderInput
          label="Loan Amount"
          symbol={symbol}
          value={amount}
          min={100000}
          max={20000000}
          step={50000}
          onChange={setAmount}
          formatted={formatCurrency(amount)}
        />

        <SliderInput
          label="Interest Rate (% p.a.)"
          value={rate}
          min={5}
          max={20}
          step={0.1}
          onChange={setRate}
          formatted={`${rate}%`}
        />

        <SliderInput
          label="Tenure (Years)"
          value={tenure}
          min={1}
          max={30}
          step={1}
          onChange={setTenure}
          formatted={`${tenure} Years`}
        />

        {/* AFFORDABILITY INSIGHT */}
        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 flex items-start gap-3">
          <FaLightbulb className="text-blue-600 dark:text-blue-400 text-lg mt-0.5 shrink-0" />
          <div className="text-xs text-blue-900 dark:text-blue-200">
            <span className="font-semibold">Affordability Rule:</span> To comfortably pay this EMI, your recommended minimum household net monthly income should be approximately <span className="font-bold underline">{formatCurrency(recommendedIncome)}</span>.
          </div>
        </div>
      </div>

      {/* RESULTS DASHBOARD */}
      <div className="lg:col-span-5 space-y-6">
        {/* STICKY RESULTS CARD */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-6 shadow-xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Estimated Monthly EMI</span>
          <div className="text-3xl sm:text-4xl font-extrabold">{formatCurrency(metrics.emi)}</div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
            <div>
              <p className="text-xs opacity-75">Total Principal</p>
              <p className="text-sm font-bold">{formatCurrency(amount)}</p>
            </div>
            <div>
              <p className="text-xs opacity-75">Total Interest Payable</p>
              <p className="text-sm font-bold text-amber-300">{formatCurrency(metrics.totalInterest)}</p>
            </div>
          </div>
        </div>

        {/* DISTRIBUTION & VISUALIZATION */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4">
          <h3 className="text-sm font-bold">Repayment Amortization Timeline</h3>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={metrics.breakdown}>
                <XAxis dataKey="year" stroke="#94a3b8" fontSize={10} />
                <YAxis stroke="#94a3b8" fontSize={10} tickFormatter={(v) => `${v / 1000}k`} />
                <Tooltip formatter={(value) => formatCurrency(value)} />
                <Area type="monotone" dataKey="principal" stackId="1" stroke="#2563eb" fill="#3b82f6" name="Principal" />
                <Area type="monotone" dataKey="interest" stackId="1" stroke="#f59e0b" fill="#fbbf24" name="Interest" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. SIP CALCULATOR SUB-VIEW
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
    let currentInvested = 0;
    for (let yr = 1; yr <= tenure; yr++) {
      const months = yr * 12;
      const fvYear = P * ((Math.pow(1 + i, months) - 1) / i) * (1 + i);
      currentInvested = P * months;
      growthData.push({
        year: `Yr ${yr}`,
        Invested: Math.round(currentInvested),
        Wealth: Math.round(fvYear),
      });
    }

    return { futureValue, invested, wealthGained, growthData };
  }, [monthly, rate, tenure]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-6">
        <div>
          <h2 className="text-lg font-bold">SIP Wealth Accumulator</h2>
          <p className="text-xs text-slate-500">Calculate compounding returns on monthly disciplined investments</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {SIP_GOALS.map((g) => (
            <button
              key={g.label}
              onClick={() => { setRate(g.rate); setTenure(g.tenure); }}
              className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition font-medium"
            >
              {g.label}
            </button>
          ))}
        </div>

        <SliderInput
          label="Monthly Investment"
          symbol={symbol}
          value={monthly}
          min={500}
          max={200000}
          step={500}
          onChange={setMonthly}
          formatted={formatCurrency(monthly)}
        />

        <SliderInput
          label="Expected Annual Return (%)"
          value={rate}
          min={1}
          max={25}
          step={0.5}
          onChange={setRate}
          formatted={`${rate}%`}
        />

        <SliderInput
          label="Investment Horizon (Years)"
          value={tenure}
          min={1}
          max={30}
          step={1}
          onChange={setTenure}
          formatted={`${tenure} Years`}
        />
      </div>

      <div className="lg:col-span-5 space-y-6">
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-6 shadow-xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Expected Future Corpus</span>
          <div className="text-3xl sm:text-4xl font-extrabold">{formatCurrency(metrics.futureValue)}</div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
            <div>
              <p className="text-xs opacity-75">Invested Amount</p>
              <p className="text-sm font-bold">{formatCurrency(metrics.invested)}</p>
            </div>
            <div>
              <p className="text-xs opacity-75">Est. Wealth Gain</p>
              <p className="text-sm font-bold text-emerald-200">{formatCurrency(metrics.wealthGained)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4">
          <h3 className="text-sm font-bold">Wealth Creation Trajectory</h3>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={metrics.growthData}>
                <XAxis dataKey="year" stroke="#94a3b8" fontSize={10} />
                <YAxis stroke="#94a3b8" fontSize={10} tickFormatter={(v) => `${v / 1000}k`} />
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
// 3. FIXED DEPOSIT SUB-VIEW
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
      <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-6">
        <div>
          <h2 className="text-lg font-bold">Fixed Deposit Yield</h2>
          <p className="text-xs text-slate-500">Secure guaranteed returns with compounding tenure plans</p>
        </div>

        <SliderInput
          label="Deposit Amount"
          symbol={symbol}
          value={deposit}
          min={10000}
          max={5000000}
          step={10000}
          onChange={setDeposit}
          formatted={formatCurrency(deposit)}
        />

        <SliderInput
          label="Interest Rate (% p.a.)"
          value={rate}
          min={3}
          max={15}
          step={0.25}
          onChange={setRate}
          formatted={`${rate}%`}
        />

        <SliderInput
          label="Tenure (Years)"
          value={tenure}
          min={1}
          max={20}
          step={1}
          onChange={setTenure}
          formatted={`${tenure} Years`}
        />
      </div>

      <div className="lg:col-span-5 space-y-6">
        <div className="bg-gradient-to-br from-amber-600 to-orange-700 text-white rounded-2xl p-6 shadow-xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Guaranteed Maturity Amount</span>
          <div className="text-3xl sm:text-4xl font-extrabold">{formatCurrency(metrics.maturity)}</div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
            <div>
              <p className="text-xs opacity-75">Principal Amount</p>
              <p className="text-sm font-bold">{formatCurrency(deposit)}</p>
            </div>
            <div>
              <p className="text-xs opacity-75">Total Interest Gained</p>
              <p className="text-sm font-bold text-amber-200">{formatCurrency(metrics.interest)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold mb-1">Return Ratio</h3>
            <p className="text-xs text-slate-500">Interest comprises <span className="font-bold text-amber-500">{((metrics.interest / metrics.maturity) * 100).toFixed(1)}%</span> of total maturity value.</p>
          </div>
          <div className="h-24 w-24">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" innerRadius={22} outerRadius={38} paddingAngle={3}>
                  <Cell fill="#94a3b8" />
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
// 4. LOAN COMPARISON SUB-VIEW
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
  const winner = res1.total < res2.total ? 'Option A' : 'Option B';

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LOAN A */}
        <div className="bg-white dark:bg-slate-900 border-2 border-blue-500/30 rounded-2xl p-5 space-y-4">
          <h3 className="font-bold text-blue-600 dark:text-blue-400">Loan Option A</h3>
          <div className="space-y-3">
            <NumberInput label="Amount" value={loan1.amount} onChange={(v) => setLoan1({ ...loan1, amount: v })} />
            <NumberInput label="Interest Rate (%)" value={loan1.rate} onChange={(v) => setLoan1({ ...loan1, rate: v })} />
            <NumberInput label="Tenure (Years)" value={loan1.tenure} onChange={(v) => setLoan1({ ...loan1, tenure: v })} />
          </div>
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-1 text-sm">
            <div className="flex justify-between"><span>Monthly EMI:</span><span className="font-bold">{formatCurrency(res1.emi)}</span></div>
            <div className="flex justify-between text-xs text-slate-500"><span>Total Interest:</span><span>{formatCurrency(res1.interest)}</span></div>
          </div>
        </div>

        {/* LOAN B */}
        <div className="bg-white dark:bg-slate-900 border-2 border-purple-500/30 rounded-2xl p-5 space-y-4">
          <h3 className="font-bold text-purple-600 dark:text-purple-400">Loan Option B</h3>
          <div className="space-y-3">
            <NumberInput label="Amount" value={loan2.amount} onChange={(v) => setLoan2({ ...loan2, amount: v })} />
            <NumberInput label="Interest Rate (%)" value={loan2.rate} onChange={(v) => setLoan2({ ...loan2, rate: v })} />
            <NumberInput label="Tenure (Years)" value={loan2.tenure} onChange={(v) => setLoan2({ ...loan2, tenure: v })} />
          </div>
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-1 text-sm">
            <div className="flex justify-between"><span>Monthly EMI:</span><span className="font-bold">{formatCurrency(res2.emi)}</span></div>
            <div className="flex justify-between text-xs text-slate-500"><span>Total Interest:</span><span>{formatCurrency(res2.interest)}</span></div>
          </div>
        </div>
      </div>

      {/* COMPARISON VERDICT */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-2xl text-emerald-200 shrink-0" />
          <div>
            <h4 className="font-bold">{winner} is more cost-effective!</h4>
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
// REUSABLE INPUT COMPONENTS
// ==========================================
function SliderInput({ label, value, min, max, step, onChange, formatted }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm">
        <label className="font-medium text-slate-600 dark:text-slate-300">{label}</label>
        <span className="font-bold text-blue-600 dark:text-blue-400">{formatted}</span>
      </div>
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

function NumberInput({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-500 mb-1">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}