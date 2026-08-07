import React from 'react';

function UPIChargesBill() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Back to Home */}
        <a href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm">
          ← Back to Calculator
        </a>

        {/* Blog Post Container */}
        <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
              <span className="text-blue-600 dark:text-blue-400 font-medium">Finance News</span>
              <span>|</span>
              <span>5 min read</span>
              <span>|</span>
              <span>August 6, 2026</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              Lok Sabha Passes Bill to Authorise Banks to Levy Charges on UPI Transactions
            </h1>
            
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              The Taxation and other Laws (Amendment) Bill amends the Payment and Settlement Systems Act, 2007, 
              paving the way for Merchant Discount Rate (MDR) on UPI payments.
            </p>
          </header>

          {/* Featured Image */}
          <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl p-8 mb-6 text-white text-center">
            <p className="text-sm opacity-80">📸 Lok Sabha Session</p>
            <p className="text-sm mt-2 opacity-60">Lok Sabha Speaker Om Birla conducts proceedings during the Monsoon Session in New Delhi on August 6, 2026.</p>
            <p className="text-xs mt-2 opacity-40">Photo Credit: Sansad TV/ANI</p>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              In a significant move that could reshape India's digital payments landscape, the Lok Sabha on Thursday 
              passed the Taxation and other Laws (Amendment) Bill, 2026. The bill authorises the government to permit 
              banks and payment service providers to levy charges on Unified Payments Interface (UPI) transactions 
              and other notified electronic payment modes.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-3">
              The bill was passed without debate due to persistent sloganeering by the Opposition over various issues, 
              including allegations of theft of donation at the Ram temple in Ayodhya.
            </p>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* What is Changing */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              What is Changing?
            </h2>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              The amendment removes the existing legal provision that prevents banks and payment service providers 
              from charging Merchant Discount Rate (MDR) on notified electronic payment modes.
            </p>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 my-4">
              <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Changes:</h3>
              <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>Amends Section 10A of the Payment and Settlement Systems Act, 2007</li>
                <li>Replaces reference to specific electronic modes with broader government notification powers</li>
                <li>Banks and system providers can now impose charges on UPI transactions</li>
                <li>Part of comprehensive taxation legislation introduced on August 4, 2026</li>
              </ul>
            </div>
          </section>

          {/* Current vs Proposed */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Current Situation vs Proposed Change
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 text-lg">Currently</h3>
                <ul className="list-disc pl-5 text-sm text-slate-700 dark:text-slate-300 mt-2 space-y-1">
                  <li>UPI transactions are free for consumers</li>
                  <li>No Merchant Discount Rate (MDR) on UPI</li>
                  <li>Banks cannot charge for UPI payments</li>
                  <li>Section 10A prohibits any charges</li>
                </ul>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 text-lg">Proposed</h3>
                <ul className="list-disc pl-5 text-sm text-slate-700 dark:text-slate-300 mt-2 space-y-1">
                  <li>Small charges may be levied on UPI</li>
                  <li>MDR can be imposed on merchants</li>
                  <li>Sustainable revenue model for banks</li>
                  <li>Government to notify specific charges</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* Key Stakeholders */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Impact on Stakeholders
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 text-center">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Consumers</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Small charges on digital payments</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Impact: Low to Medium</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 text-center">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Small Businesses</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">MDR charges on UPI receipts</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Impact: Medium</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 text-center">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Banks & PSPs</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">New revenue stream</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Impact: Positive</p>
              </div>
            </div>
          </section>

          {/* What is MDR */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              What is Merchant Discount Rate (MDR)?
            </h2>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Merchant Discount Rate (MDR) is a fee that merchants pay to banks and payment service providers 
              for processing digital payments. Currently, UPI transactions are exempt from MDR, making them 
              free for both consumers and merchants.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg mt-3">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <span className="font-bold">Note:</span> Real-time payments through RTGS and NEFT already have service charges. 
                UPI has been the exception, driving its massive adoption.
              </p>
            </div>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* Government's Perspective */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Government's Approach
            </h2>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              The government's approach aims to:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-bold">✅</span> Levy small charges on digital payment services for consumers and small businesses
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-bold">✅</span> Ensure a sustainable revenue model for banks, Payment Service Providers (PSPs), and payment infrastructure firms
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                <span className="font-bold">RBI Governor's View:</span> Sanjay Malhotra on Wednesday said it is 
                "premature" to talk about MDR on digital payments. He emphasised that investment in public 
                infrastructure like payments is necessary, and "someone will have to pay for it."
              </p>
            </div>
          </section>

          {/* Other Provisions */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Other Key Provisions in the Bill
            </h2>

            <ul className="list-disc pl-5 text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <li>Replaces the June 5 ordinance that provided I-T exemption to income from interest income and capital gains made by FPIs from investments in G-Secs</li>
              <li>Extends till 2040-41 the income tax exemption for foreign companies that engage contract manufacturers in India for producing electronics goods</li>
              <li>Proposes I-T exemption for 15 years to foreign companies that store components in customs warehouses for supply to contract manufacturers</li>
              <li>Removes approval and notification requirements for foreign cloud companies using Indian data centres</li>
              <li>Allows Indian data centres to be run on a leased basis rather than only under direct ownership</li>
            </ul>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-700" />

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              What This Means for You
            </h2>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white">
              <p className="text-sm opacity-80 mb-2">Key Takeaway</p>
              <p className="text-xl font-bold">
                UPI may not remain free forever.
              </p>
              <p className="text-sm opacity-80 mt-2">
                While the exact charges are yet to be notified, consumers and businesses should prepare 
                for potential small fees on UPI transactions in the future.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <p className="font-bold text-slate-800 dark:text-white mb-2">
              Calculate Your Financial Impact
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
              Use our free calculators to understand how financial changes affect you.
            </p>
            <a 
              href="/" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Use Our Free Calculators
            </a>
          </section>

          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-400">
              Source: The Hindu, PTI. Information as of August 6, 2026. This is a summary of news reported 
              by PTI and published by The Hindu. For official information, please refer to government notifications 
              and official gazette.
            </p>
          </div>

        </article>

        {/* Related Posts */}
        <div className="mt-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/home-loan-tips" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Read</p>
              <p className="font-medium text-slate-800 dark:text-white mt-1">How to Save ₹5 Lakh on Home Loan Interest</p>
            </a>
            <a href="/sip-vs-fd" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-md transition">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Read</p>
              <p className="font-medium text-slate-800 dark:text-white mt-1">SIP vs FD: Which Investment is Better for You?</p>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-slate-400">
          © 2026 <span className="text-blue-600 font-medium">Truyon</span>
        </div>
      </div>
    </div>
  );
}

export default UPIChargesBill;