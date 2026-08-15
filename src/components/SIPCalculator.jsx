// /Users/pramod/Desktop/adsense-projects/emi-calculator/src/components/SIPCalculator.jsx
import React, { useState, useMemo } from 'react';
import { TopBannerAd, BottomBannerAd, SidebarAd, InFeedAd } from './AdUnits';
import { ResponsiveContainer, PieChart, Pie, Cell, ComposedChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const SIP_GOALS = [
  { label: '1 Crore in 15Y', monthly: 20000, rate: 12, tenure: 15 },
  { label: '50 Lakh in 10Y', monthly: 22000, rate: 12, tenure: 10 },
  { label: '25 Lakh in 7Y', monthly: 20000, rate: 11, tenure: 7 },
];

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
            className="w-24 text-right bg-transparent text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 focus:outline-none"
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
        className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
      />
    </div>
  );
}

export default function SIPCalculator({ formatCurrency, symbol, darkMode }) {
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
        year: `Yr ${yr}`,
        Invested: Math.round(P * months),
        Wealth: Math.round(fvYear),
      });
    }

    return { futureValue, invested, wealthGained, growthData };
  }, [monthly, rate, tenure]);

  const profitPercent = metrics.invested > 0 ? ((metrics.wealthGained / metrics.invested) * 100).toFixed(0) : 0;

  const pieData = [
    { name: 'Your Investment', value: metrics.invested },
    { name: 'Returns Gained', value: metrics.wealthGained },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="hidden lg:block lg:col-span-1">
        <SidebarAd />
      </div>

      <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-6 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-slate-800 dark:text-white">SIP Parameters</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Plan your monthly savings</p>
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
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-4 shadow-xl">
            <p className="text-xs opacity-80">Future Value</p>
            <p className="text-xl font-bold">{formatCurrency(metrics.futureValue)}</p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
            <p className="text-xs text-slate-500 dark:text-slate-400">Your Investment</p>
            <p className="text-lg font-bold text-slate-800 dark:text-white">{formatCurrency(metrics.invested)}</p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
            <p className="text-xs text-slate-500 dark:text-slate-400">Total Returns</p>
            <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{formatCurrency(metrics.wealthGained)}</p>
            <p className="text-xs text-emerald-500">+{profitPercent}% growth</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-3">Your Investment vs Returns</h3>
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
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    labelLine={{ stroke: darkMode ? '#475569' : '#94a3b8', strokeWidth: 1 }}
                  >
                    <Cell fill="#3b82f6" />
                    <Cell fill="#10b981" />
                  </Pie>
                  <Tooltip formatter={(val) => formatCurrency(val)} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span className="text-sm text-slate-700 dark:text-slate-300">Your Investment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                <span className="text-sm text-slate-700 dark:text-slate-300">Returns Gained</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-3">Wealth Growth Over Time</h3>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={metrics.growthData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#334155' : '#e2e8f0'} />
                <XAxis dataKey="year" stroke={darkMode ? '#64748b' : '#94a3b8'} fontSize={11} />
                <YAxis 
                  stroke={darkMode ? '#64748b' : '#94a3b8'} 
                  fontSize={11}
                  tickFormatter={(v) => `${v / 1000}k`}
                />
                <Tooltip content={<CustomTooltip formatter={formatCurrency} />} />
                <Area type="monotone" dataKey="Invested" fill="#3b82f6" stroke="#2563eb" fillOpacity={0.3} />
                <Area type="monotone" dataKey="Wealth" fill="#10b981" stroke="#059669" fillOpacity={0.3} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        <InFeedAd />
      </div>
    </div>
  );
}