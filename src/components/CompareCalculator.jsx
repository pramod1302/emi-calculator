// /Users/pramod/Desktop/adsense-projects/emi-calculator/src/components/CompareCalculator.jsx
import React, { useState, useMemo } from 'react';
import { TopBannerAd, BottomBannerAd, SidebarAd, InFeedAd } from './AdUnits';

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

export default function CompareCalculator({ formatCurrency, symbol }) {
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
        <div className="bg-white dark:bg-slate-900 border-2 border-blue-500/40 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold">A</div>
            <h3 className="font-bold text-blue-600 dark:text-blue-400">Loan Option A</h3>
          </div>
          <div className="space-y-3">
            <FreeInput label="Amount" value={loan1.amount} onChange={(v) => setLoan1({ ...loan1, amount: v })} />
            <FreeInput label="Interest Rate (%)" value={loan1.rate} onChange={(v) => setLoan1({ ...loan1, rate: v })} />
            <FreeInput label="Tenure (Years)" value={loan1.tenure} onChange={(v) => setLoan1({ ...loan1, tenure: v })} />
          </div>
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-1 text-sm">
            <div className="flex justify-between"><span className="text-slate-500 dark:text-slate-400">Monthly EMI:</span><span className="font-bold text-slate-800 dark:text-white">{formatCurrency(res1.emi)}</span></div>
            <div className="flex justify-between"><span className="text-slate-500 dark:text-slate-400">Total Payment:</span><span className="text-slate-800 dark:text-white">{formatCurrency(res1.total)}</span></div>
            <div className="flex justify-between"><span className="text-slate-500 dark:text-slate-400">Total Interest:</span><span className="text-amber-600 dark:text-amber-400">{formatCurrency(res1.interest)}</span></div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border-2 border-purple-500/40 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 dark:text-purple-400 text-sm font-bold">B</div>
            <h3 className="font-bold text-purple-600 dark:text-purple-400">Loan Option B</h3>
          </div>
          <div className="space-y-3">
            <FreeInput label="Amount" value={loan2.amount} onChange={(v) => setLoan2({ ...loan2, amount: v })} />
            <FreeInput label="Interest Rate (%)" value={loan2.rate} onChange={(v) => setLoan2({ ...loan2, rate: v })} />
            <FreeInput label="Tenure (Years)" value={loan2.tenure} onChange={(v) => setLoan2({ ...loan2, tenure: v })} />
          </div>
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-1 text-sm">
            <div className="flex justify-between"><span className="text-slate-500 dark:text-slate-400">Monthly EMI:</span><span className="font-bold text-slate-800 dark:text-white">{formatCurrency(res2.emi)}</span></div>
            <div className="flex justify-between"><span className="text-slate-500 dark:text-slate-400">Total Payment:</span><span className="text-slate-800 dark:text-white">{formatCurrency(res2.total)}</span></div>
            <div className="flex justify-between"><span className="text-slate-500 dark:text-slate-400">Total Interest:</span><span className="text-amber-600 dark:text-amber-400">{formatCurrency(res2.interest)}</span></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-center shadow-sm">
          <p className="text-xs text-slate-500 dark:text-slate-400">EMI Difference</p>
          <p className="text-lg font-bold text-slate-800 dark:text-white">{formatCurrency(emiDiff)}/month</p>
        </div>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-center shadow-sm">
          <p className="text-xs text-slate-500 dark:text-slate-400">Total Interest Difference</p>
          <p className="text-lg font-bold text-slate-800 dark:text-white">{formatCurrency(totalDiff)}</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-4 text-center shadow-xl">
          <p className="text-xs opacity-80">Best Choice</p>
          <p className="text-lg font-bold">{winner}</p>
          <p className="text-xs opacity-80">Saves you money</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-3">Total Payment Comparison</h3>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span>Option A</span>
              <span>{formatCurrency(res1.total)}</span>
            </div>
            <div className="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${(res1.total / Math.max(res1.total, res2.total)) * 100}%` }}></div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span>Option B</span>
              <span>{formatCurrency(res2.total)}</span>
            </div>
            <div className="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full transition-all" style={{ width: `${(res2.total / Math.max(res1.total, res2.total)) * 100}%` }}></div>
            </div>
          </div>
        </div>

        <InFeedAd />
      </div>
    </div>
  );
}