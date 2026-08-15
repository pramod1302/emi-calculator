// /Users/pramod/Desktop/adsense-projects/emi-calculator/src/components/FDCalculator.jsx
import React, { useState, useMemo } from 'react';
import { TopBannerAd, BottomBannerAd, SidebarAd, InFeedAd } from './AdUnits';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

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
            className="w-24 text-right bg-transparent text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 focus:outline-none"
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
        className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
      />
    </div>
  );
}

export default function FDCalculator({ formatCurrency, symbol, darkMode }) {
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
    { name: 'Total Interest', value: metrics.interest },
  ];

  const interestPercent = metrics.maturity > 0 ? ((metrics.interest / metrics.maturity) * 100).toFixed(0) : 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="hidden lg:block lg:col-span-1">
        <SidebarAd />
      </div>

      <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-6 shadow-sm">
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

        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50">
          <p className="text-xs text-amber-800 dark:text-amber-300">
            <span className="font-bold">Note:</span> FD returns are guaranteed. Your principal of {' '}
            <span className="font-bold">{formatCurrency(deposit)}</span> is fully protected.
          </p>
        </div>
      </div>

      <div className="lg:col-span-6 space-y-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-amber-600 to-orange-700 text-white rounded-2xl p-4 shadow-xl">
            <p className="text-xs opacity-80">Maturity Value</p>
            <p className="text-xl font-bold">{formatCurrency(metrics.maturity)}</p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
            <p className="text-xs text-slate-500 dark:text-slate-400">Principal</p>
            <p className="text-lg font-bold text-slate-800 dark:text-white">{formatCurrency(deposit)}</p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
            <p className="text-xs text-slate-500 dark:text-slate-400">Interest Earned</p>
            <p className="text-lg font-bold text-amber-600 dark:text-amber-400">{formatCurrency(metrics.interest)}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-3">Your Returns Breakdown</h3>
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
                    <Cell fill="#f59e0b" />
                  </Pie>
                  <Tooltip formatter={(val) => formatCurrency(val)} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span className="text-sm text-slate-700 dark:text-slate-300">Principal: {((deposit / (deposit + metrics.interest)) * 100).toFixed(0)}%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                <span className="text-sm text-slate-700 dark:text-slate-300">Interest: {interestPercent}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-2">How Your Money Grows</h3>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                <span>Principal</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">{formatCurrency(deposit)}</span>
              </div>
              <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full mt-1 overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(deposit / metrics.maturity) * 100}%` }}></div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                <span>Interest</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">{formatCurrency(metrics.interest)}</span>
              </div>
              <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full mt-1 overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: `${(metrics.interest / metrics.maturity) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <InFeedAd />
      </div>
    </div>
  );
}