// /Users/pramod/Desktop/adsense-projects/emi-calculator/src/components/EMICalculator.jsx
import React, { useState, useMemo } from 'react';
import { FaLightbulb, FaTable, FaChartBar } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, CartesianGrid, Line } from 'recharts';
import { TopBannerAd, BottomBannerAd, SidebarAd, InFeedAd } from './AdUnits';

const LOAN_PRESETS = [
  { label: 'Home Loan', amount: 5000000, rate: 8.5, tenure: 20, icon: '🏠' },
  { label: 'Car Loan', amount: 900000, rate: 9.2, tenure: 5, icon: '🚗' },
  { label: 'Personal Loan', amount: 300000, rate: 12.0, tenure: 3, icon: '💳' },
];

const PIE_COLORS = ['#2563eb', '#f59e0b'];

const CustomTooltip = ({ active, payload, label, formatter }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg p-3 text-xs">
        <p className="font-bold text-slate-800 dark:text-white mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }} className="flex justify-between gap-4">
            <span>{entry.name}:</span>
            <span className="font-bold">{formatter ? formatter(entry.value) : entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function HybridInput({ label, symbol, value, min, max, step, onChange, formatted }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm gap-2">
        <label className="font-medium text-slate-700 dark:text-slate-300">{label}</label>
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

export default function EMICalculator({ formatCurrency, symbol, darkMode }) {
  const [amount, setAmount] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [viewMode, setViewMode] = useState('chart');

  const metrics = useMemo(() => {
    const P = parseFloat(amount) || 0;
    const r = (parseFloat(rate) || 0) / 12 / 100;
    const n = (parseFloat(tenure) || 0) * 12;

    if (!P || !r || !n) return { emi: 0, totalPayment: 0, totalInterest: 0, breakdown: [], maxPayment: 0 };

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    let balance = P;
    const breakdown = [];
    let maxPayment = 0;
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
      const total = yrPrincipal + yrInterest;
      if (total > maxPayment) maxPayment = total;
      breakdown.push({
        year: yr,
        label: `Yr ${yr}`,
        principal: Math.round(yrPrincipal),
        interest: Math.round(yrInterest),
        total: Math.round(total),
        balance: Math.max(0, Math.round(balance)),
      });
    }

    return { emi, totalPayment, totalInterest, breakdown, maxPayment };
  }, [amount, rate, tenure]);

  const recommendedIncome = useMemo(() => metrics.emi * 2, [metrics.emi]);

  const chartData = metrics.breakdown.map(item => ({
    year: item.label,
    'Principal Paid': item.principal,
    'Interest Paid': item.interest,
    'Remaining Balance': item.balance,
  }));

  const pieData = [
    { name: 'Principal', value: amount },
    { name: 'Total Interest', value: metrics.totalInterest },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="hidden lg:block lg:col-span-1">
        <SidebarAd />
      </div>

      <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-6 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-slate-800 dark:text-white">Loan Parameters</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Adjust sliders or type exact numbers</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {LOAN_PRESETS.map((p) => (
            <button
              key={p.label}
              onClick={() => { setAmount(p.amount); setRate(p.rate); setTenure(p.tenure); }}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:border-blue-300 transition font-medium"
            >
              <span>{p.icon}</span>
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

        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 flex items-start gap-3">
          <FaLightbulb className="text-blue-600 dark:text-blue-400 text-lg mt-0.5 shrink-0" />
          <div className="text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
            <span className="font-semibold">Affordability Tip:</span> For an EMI of <span className="font-bold">{formatCurrency(metrics.emi)}</span>, your monthly income should be at least <span className="font-bold underline">{formatCurrency(recommendedIncome)}</span>.
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 space-y-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-4 shadow-xl">
            <p className="text-xs opacity-80">Monthly EMI</p>
            <p className="text-xl font-bold">{formatCurrency(metrics.emi)}</p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
            <p className="text-xs text-slate-500 dark:text-slate-400">Total Payment</p>
            <p className="text-lg font-bold text-slate-800 dark:text-white">{formatCurrency(metrics.totalPayment)}</p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
            <p className="text-xs text-slate-500 dark:text-slate-400">Total Interest</p>
            <p className="text-lg font-bold text-amber-600 dark:text-amber-400">{formatCurrency(metrics.totalInterest)}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-3">Principal vs Interest Breakdown</h3>
          <div className="flex items-center gap-6">
            <div className="h-40 w-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={65}
                    paddingAngle={3}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={{ stroke: darkMode ? '#475569' : '#94a3b8', strokeWidth: 1 }}
                  >
                    <Cell fill={PIE_COLORS[0]} />
                    <Cell fill={PIE_COLORS[1]} />
                  </Pie>
                  <Tooltip formatter={(val) => formatCurrency(val)} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                <span className="text-sm text-slate-700 dark:text-slate-300">Principal: {((amount / (amount + metrics.totalInterest)) * 100).toFixed(0)}%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                <span className="text-sm text-slate-700 dark:text-slate-300">Interest: {((metrics.totalInterest / (amount + metrics.totalInterest)) * 100).toFixed(0)}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold text-slate-800 dark:text-white">Payment Breakdown Over Time</h3>
            <div className="flex gap-1">
              <button
                onClick={() => setViewMode('chart')}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-medium transition ${
                  viewMode === 'chart' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <FaChartBar /> Chart
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-medium transition ${
                  viewMode === 'table' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <FaTable /> Table
              </button>
            </div>
          </div>

          {viewMode === 'chart' ? (
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#334155' : '#e2e8f0'} />
                  <XAxis dataKey="year" stroke={darkMode ? '#64748b' : '#94a3b8'} fontSize={11} />
                  <YAxis 
                    stroke={darkMode ? '#64748b' : '#94a3b8'} 
                    fontSize={11}
                    tickFormatter={(v) => `${v / 1000}k`}
                  />
                  <Tooltip content={<CustomTooltip formatter={formatCurrency} />} />
                  <Bar dataKey="Principal Paid" stackId="a" fill="#3b82f6" />
                  <Bar dataKey="Interest Paid" stackId="a" fill="#f59e0b" />
                  <Line type="monotone" dataKey="Remaining Balance" stroke="#10b981" strokeWidth={2} dot={false} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="max-h-64 overflow-y-auto rounded-xl border border-slate-200 dark:border-slate-800">
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
                      <td className="py-2 px-3 font-medium">{row.year}</td>
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

        <InFeedAd />
      </div>
    </div>
  );
}