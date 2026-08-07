import React, { useState, useEffect } from 'react';

function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [yearlyBreakdown, setYearlyBreakdown] = useState([]);
  const [activeTab, setActiveTab] = useState('breakdown');
  const [history, setHistory] = useState([]);

  // Load history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('emiHistory');
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  // Auto-calculate
  useEffect(() => {
    if (loanAmount > 0 && interestRate > 0 && tenure > 0) {
      calculateEMI();
    }
  }, [loanAmount, interestRate, tenure]);

  const calculateEMI = () => {
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

      // Generate yearly breakdown
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

      // Save to history
      const newEntry = {
        id: Date.now(),
        amount: P,
        rate: interestRate,
        tenure: tenure,
        emi: emiValue.toFixed(2),
        date: new Date().toLocaleDateString()
      };
      const updatedHistory = [...history, newEntry];
      setHistory(updatedHistory);
      localStorage.setItem('emiHistory', JSON.stringify(updatedHistory));
    }
  };

  const shareResult = () => {
    const text = `🏦 My EMI Calculation:\nLoan: ₹${Number(loanAmount).toLocaleString()}\nRate: ${interestRate}%\nTenure: ${tenure} years\nMonthly EMI: ₹${Number(emi).toLocaleString()}\n\nCalculate yours at: truyon.com`;
    if (navigator.share) {
      navigator.share({ title: 'EMI Calculator', text: text });
    } else {
      navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-4 px-4 md:py-8 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Ad Space - Top */}
        <div className="bg-gray-100 rounded-xl p-3 mb-4 text-center text-gray-400 text-sm border-2 border-dashed border-gray-300">
          📢 Google Ad Space
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
          {/* Left Column - Calculator (3/5 on desktop) */}
          <div className="lg:col-span-3 space-y-4">
            {/* Calculator Card */}
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EMI Calculator
                </h1>
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  Free
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-6">
                Calculate your monthly loan payments instantly
              </p>

              <div className="space-y-5">
                {/* Loan Amount */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-sm font-medium text-gray-700">Loan Amount</label>
                    <span className="text-sm font-bold text-blue-600">
                      ₹{Number(loanAmount).toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="10000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseFloat(e.target.value) || 0)}
                    className="w-full mt-2 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-sm font-medium text-gray-700">Interest Rate</label>
                    <span className="text-sm font-bold text-blue-600">
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
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                    className="w-full mt-2 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>

                {/* Tenure */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-sm font-medium text-gray-700">Tenure (Years)</label>
                    <span className="text-sm font-bold text-blue-600">
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
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(parseFloat(e.target.value) || 0)}
                    className="w-full mt-2 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* Ad Space - Middle */}
            <div className="bg-gray-100 rounded-xl p-3 text-center text-gray-400 text-sm border-2 border-dashed border-gray-300">
              📢 Google Ad Space
            </div>
          </div>

          {/* Right Column - Results (2/5 on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            {emi ? (
              <>
                {/* Results Card */}
                <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-2xl shadow-xl p-4 md:p-6 text-white">
                  <p className="text-sm opacity-90 mb-1">Monthly EMI</p>
                  <p className="text-3xl md:text-4xl font-bold">
                    ₹{Number(emi).toLocaleString()}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/20">
                    <div>
                      <p className="text-xs opacity-80">Total Payment</p>
                      <p className="text-sm font-semibold">₹{Number(totalPayment).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs opacity-80">Total Interest</p>
                      <p className="text-sm font-semibold">₹{Number(totalInterest).toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs opacity-80 mb-1">Interest vs Principal</p>
                    <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-300 rounded-full transition-all"
                        style={{ width: `${(parseFloat(totalInterest) / parseFloat(totalPayment)) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs mt-1 opacity-80">
                      <span>Principal: {((parseFloat(totalPayment) - parseFloat(totalInterest)) / parseFloat(totalPayment) * 100).toFixed(0)}%</span>
                      <span>Interest: {(parseFloat(totalInterest) / parseFloat(totalPayment) * 100).toFixed(0)}%</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4 pt-4 border-t border-white/20">
                    <button 
                      onClick={shareResult}
                      className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm font-medium transition"
                    >
                      📤 Share
                    </button>
                    <button 
                      onClick={() => window.print()}
                      className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm font-medium transition"
                    >
                      🖨️ Print
                    </button>
                  </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="flex border-b border-gray-200">
                    <button
                      onClick={() => setActiveTab('breakdown')}
                      className={`flex-1 py-3 text-sm font-medium transition ${
                        activeTab === 'breakdown' 
                          ? 'border-b-2 border-blue-600 text-blue-600' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      📊 Yearly
                    </button>
                    <button
                      onClick={() => setActiveTab('history')}
                      className={`flex-1 py-3 text-sm font-medium transition ${
                        activeTab === 'history' 
                          ? 'border-b-2 border-blue-600 text-blue-600' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      📜 History
                    </button>
                  </div>

                  <div className="p-4 max-h-64 overflow-y-auto">
                    {activeTab === 'breakdown' && (
                      <div>
                        <div className="grid grid-cols-5 text-xs font-semibold text-gray-500 border-b pb-2 mb-2">
                          <span>Year</span>
                          <span className="text-right">Principal</span>
                          <span className="text-right">Interest</span>
                          <span className="text-right">Total</span>
                          <span className="text-right">Balance</span>
                        </div>
                        {yearlyBreakdown.map((row) => (
                          <div key={row.year} className="grid grid-cols-5 text-xs py-1.5 border-b border-gray-50 hover:bg-gray-50">
                            <span className="font-medium">{row.year}</span>
                            <span className="text-right text-gray-600">₹{Number(row.principal).toLocaleString()}</span>
                            <span className="text-right text-gray-600">₹{Number(row.interest).toLocaleString()}</span>
                            <span className="text-right text-gray-600">₹{Number(row.total).toLocaleString()}</span>
                            <span className="text-right text-gray-600">₹{Number(row.balance).toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'history' && (
                      <div>
                        {history.length === 0 ? (
                          <p className="text-center text-gray-400 text-sm py-4">No calculations saved yet</p>
                        ) : (
                          history.slice(-5).reverse().map((item) => (
                            <div key={item.id} className="bg-gray-50 rounded-lg p-3 mb-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">
                                  ₹{Number(item.amount).toLocaleString()} @ {item.rate}%
                                </span>
                                <span className="text-sm font-bold text-blue-600">
                                  EMI: ₹{Number(item.emi).toLocaleString()}
                                </span>
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
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-gray-700">Enter loan details</h3>
                <p className="text-sm text-gray-400">Adjust the sliders and see results instantly</p>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-6 bg-white rounded-2xl shadow-xl p-4 md:p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">❓ Frequently Asked Questions</h2>
          <div className="space-y-3">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600 transition">
                What is EMI?
                <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-2 text-sm text-gray-600 pl-4">
                EMI (Equated Monthly Installment) is the fixed amount you pay every month to repay a loan. It includes both principal and interest components.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600 transition">
                How is EMI calculated?
                <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-2 text-sm text-gray-600 pl-4">
                EMI is calculated using: EMI = P × r × (1+r)^n / ((1+r)^n - 1), where P is principal, r is monthly interest rate, and n is total installments.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600 transition">
                Can I prepay my loan?
                <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-2 text-sm text-gray-600 pl-4">
                Yes! Most banks allow prepayment with minimal charges. Use our calculator to see how much you can save by making extra payments.
              </p>
            </details>
          </div>
        </div>

        {/* Ad Space - Bottom */}
        <div className="mt-4 bg-gray-100 rounded-xl p-3 text-center text-gray-400 text-sm border-2 border-dashed border-gray-300">
          📢 Google Ad Space
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-gray-400">
          Made with ❤️ | truyon.com
        </div>
      </div>
    </div>
  );
}

export default EMICalculator;