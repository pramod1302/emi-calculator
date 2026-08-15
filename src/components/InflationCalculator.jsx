import React, { useState } from 'react';
import { FaChartLine, FaArrowDown } from 'react-icons/fa';
import { TopBannerAd, BottomBannerAd, SidebarAd, InFeedAd } from './AdUnits';

export default function InflationCalculator() {
  const [amount, setAmount] = useState(50000);
  const [rate, setRate] = useState(6);
  const [years, setYears] = useState(10);

  // Calculate future value (eroded purchasing power)
  const futureValue = amount / Math.pow(1 + rate / 100, years);
  const lost = amount - futureValue;
  const needed = amount * Math.pow(1 + rate / 100, years);
  const percentageLost = ((lost / amount) * 100).toFixed(1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* SIDEBAR AD (DESKTOP) */}
      <div className="hidden lg:block lg:col-span-1">
        <SidebarAd />
      </div>

      {/* MAIN CONTENT - 11 columns on large screens */}
      <div className="lg:col-span-11">
        
        {/* TOP BANNER AD (INSIDE CONTENT) */}
        <div className="mb-6">
          <TopBannerAd />
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-xl text-red-600 dark:text-red-400">
              <FaChartLine className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">📉 Inflation Impact Calculator</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">See how inflation erodes your money's value</p>
            </div>
          </div>

          {/* Input Section */}
          <div className="space-y-4">
            {/* Amount Input */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Current Amount (₹)</label>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">₹{amount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="5000000"
                step="1000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-0.5">
                <span>₹1,000</span>
                <span>₹50,00,000</span>
              </div>
            </div>

            {/* Inflation Rate Input */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Inflation Rate (%)</label>
                <span className="text-sm font-bold text-amber-600 dark:text-amber-400">{rate}%</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="0.5"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-0.5">
                <span>1%</span>
                <span>15%</span>
              </div>
            </div>

            {/* Time Period Input */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Time Period (Years)</label>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{years} years</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-0.5">
                <span>1 year</span>
                <span>30 years</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="bg-red-50 dark:bg-red-950/30 rounded-xl p-4 border border-red-200 dark:border-red-900/50">
              <p className="text-xs text-red-600 dark:text-red-400">Future Value</p>
              <p className="text-xl font-bold text-red-700 dark:text-red-300">₹{Math.round(futureValue).toLocaleString()}</p>
              <p className="text-[10px] text-red-500 mt-1">Your money's worth in {years} years</p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 rounded-xl p-4 border border-amber-200 dark:border-amber-900/50">
              <p className="text-xs text-amber-600 dark:text-amber-400">Purchasing Power Lost</p>
              <p className="text-xl font-bold text-amber-700 dark:text-amber-300">₹{Math.round(lost).toLocaleString()}</p>
              <p className="text-[10px] text-amber-500 mt-1">{percentageLost}% of your money</p>
            </div>
          </div>

          {/* Need To Maintain Purchasing Power */}
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900/50">
            <div className="flex items-start gap-2">
              <FaArrowDown className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  To maintain <strong>₹{amount.toLocaleString()}</strong> purchasing power in <strong>{years} years</strong>,
                  you need <strong className="text-lg">₹{Math.round(needed).toLocaleString()}</strong>
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                  That's <strong>₹{Math.round(needed - amount).toLocaleString()}</strong> more than today!
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-2">
              <span className="text-slate-500 dark:text-slate-400">Today</span>
              <p className="font-bold text-slate-800 dark:text-white">₹{amount.toLocaleString()}</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-2">
              <span className="text-slate-500 dark:text-slate-400">In {years}Y</span>
              <p className="font-bold text-red-600 dark:text-red-400">₹{Math.round(futureValue).toLocaleString()}</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-2">
              <span className="text-slate-500 dark:text-slate-400">Lost</span>
              <p className="font-bold text-amber-600 dark:text-amber-400">{percentageLost}%</p>
            </div>
          </div>

          {/* CTA to SIP Planner */}
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
              💡 Beat inflation with our <a href="/#sip" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">SIP Planner</a>
            </p>
          </div>

          {/* IN-FEED AD */}
          <InFeedAd />
        </div>

        {/* BOTTOM BANNER AD */}
        <div className="mt-6">
          <BottomBannerAd />
        </div>
      </div>
    </div>
  );
}