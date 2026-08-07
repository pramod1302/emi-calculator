import React from 'react';

function Budget2026() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm">
          ← Back to Calculator
        </a>

        <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <header className="mb-8">
            <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
              <span className="text-blue-600 dark:text-blue-400 font-medium">Budget 2026</span>
              <span>|</span>
              <span>7 min read</span>
              <span>|</span>
              <span>August 7, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              Union Budget 2026-27: Key Highlights and Tax Changes Explained
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              New Income Tax Act effective April 1, 2026, capex push to ₹12.2 lakh crore, and major changes for taxpayers
            </p>
          </header>

          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-6 text-white mb-8">
            <p className="text-sm font-semibold opacity-80 mb-3">BUDGET 2026-27 AT A GLANCE</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Capex target increased to <span className="font-bold">₹12.2 lakh crore</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Fiscal deficit target: <span className="font-bold">4.3%</span> of GDP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>New Income Tax Act effective from <span className="font-bold">April 1, 2026</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Electronics manufacturing outlay: <span className="font-bold">₹40,000 crore</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>No change in income tax slabs</span>
              </li>
            </ul>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">New Income Tax Act 2025: What Changed?</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              The Union Budget 2026-27 introduced the <strong>New Income Tax Act, 2025</strong>, which came into effect from <strong>April 1, 2026</strong>. This is a significant overhaul of India's tax framework, aiming to simplify compliance and reduce litigation.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-3">
              However, the budget did not change personal income tax rates or slabs. The tax regime remains unchanged, with the option to choose between the old and new tax regimes.
            </p>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Income Tax Slabs for 2026-27</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5">
                <h3 className="font-bold text-blue-600 dark:text-blue-400">New Tax Regime</h3>
                <table className="w-full text-sm mt-2">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-600">
                      <th className="text-left py-1">Income Slab</th>
                      <th className="text-right py-1">Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="py-1">Up to ₹3 Lakh</td><td className="text-right">Nil</td></tr>
                    <tr><td className="py-1">₹3-7 Lakh</td><td className="text-right">5%</td></tr>
                    <tr><td className="py-1">₹7-10 Lakh</td><td className="text-right">10%</td></tr>
                    <tr><td className="py-1">₹10-12 Lakh</td><td className="text-right">15%</td></tr>
                    <tr><td className="py-1">₹12-15 Lakh</td><td className="text-right">20%</td></tr>
                    <tr><td className="py-1">Above ₹15 Lakh</td><td className="text-right">30%</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5">
                <h3 className="font-bold text-purple-600 dark:text-purple-400">Old Tax Regime</h3>
                <table className="w-full text-sm mt-2">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-600">
                      <th className="text-left py-1">Income Slab</th>
                      <th className="text-right py-1">Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="py-1">Up to ₹2.5 Lakh</td><td className="text-right">Nil</td></tr>
                    <tr><td className="py-1">₹2.5-5 Lakh</td><td className="text-right">5%</td></tr>
                    <tr><td className="py-1">₹5-10 Lakh</td><td className="text-right">20%</td></tr>
                    <tr><td className="py-1">Above ₹10 Lakh</td><td className="text-right">30%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                <span className="font-bold">📌 Note:</span> Taxpayers can choose between the old and new tax regimes. The new regime offers lower rates but no deductions, while the old regime allows deductions under Section 80C, 80D, etc.
              </p>
            </div>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Key Budget Announcements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-slate-800 dark:text-white">Infrastructure Push</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Capex increased to ₹12.2 lakh crore to boost infrastructure development and job creation.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-slate-800 dark:text-white">Electronics Manufacturing</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Outlay raised to ₹40,000 crore to promote domestic electronics manufacturing.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-slate-800 dark:text-white">Fiscal Deficit</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Fiscal deficit target set at 4.3% of GDP, maintaining fiscal consolidation path.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-slate-800 dark:text-white">FDI Reforms</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Streamlined Foreign Direct Investment (FDI) norms to attract global investors.</p>
              </div>
            </div>
          </section>

          <section className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <p className="font-bold text-slate-800 dark:text-white mb-2">Calculate Your Tax Savings</p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">Use our calculators to plan your taxes.</p>
            <a href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Use Our Free Calculator →
            </a>
          </section>

          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-400">Source: Union Budget 2026-27, Government of India</p>
          </div>
        </article>

        <div className="mt-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/rbi-repo-rate-august-2026" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Read</p>
              <p className="font-medium text-slate-800 dark:text-white mt-1">RBI MPC Keeps Policy Rate Unchanged at 5.25%</p>
            </a>
            <a href="/home-loan-tips" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Read</p>
              <p className="font-medium text-slate-800 dark:text-white mt-1">How to Save ₹5 Lakh on Home Loan Interest</p>
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-400">
          © 2026 <span className="text-blue-600 font-medium">Truyon</span>
        </div>
      </div>
    </div>
  );
}

export default Budget2026;