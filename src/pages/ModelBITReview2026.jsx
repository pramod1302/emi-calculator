import React from 'react';
import { Helmet } from 'react-helmet';
import { TopBannerAd, InFeedAd, BottomBannerAd } from '../components/AdUnits';

function ModelBITReview2026() {
  const navigateBack = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/blog');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <Helmet>
        <title>Revamp of Model Bilateral Investment Treaty in Works, to be Presented to Cabinet: Secy - Truyon Finance</title>
        <meta name="description" content="Finance Ministry is reviewing the Model Bilateral Investment Treaty (BIT) to make it more investor-friendly, addressing international arbitration and outward Indian investments." />
        <link rel="canonical" href="https://finance.truyon.com/model-bit-review-2026" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <a 
          href="/blog" 
          onClick={navigateBack} 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm cursor-pointer"
        >
          ← Back to Blog
        </a>

        <TopBannerAd />

        <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <header className="mb-8">
            <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
              <span className="text-blue-600 dark:text-blue-400 font-medium">Economy & Policy</span>
              <span>|</span>
              <span>5 min read</span>
              <span>|</span>
              <span>August 7, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              Revamp of Model Bilateral Investment Treaty in Works, to be Presented to Cabinet Soon: Secy
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-lg">
              The Finance Ministry is updating India's 2015 Model BIT to balance international arbitration safeguards, investor protection, and expanding outward direct investments.
            </p>
          </header>

          <img 
            src="https://th-i.thgim.com/public/incoming/5vuq46/article71319125.ece/alternates/LANDSCAPE_1200/B3_RVM_6359.jpg" 
            alt="Anuradha Thakur, Secy Dept of Economic Affairs" 
            className="w-full rounded-xl mb-8 shadow-sm object-cover h-80"
          />

          <section className="mb-8 text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
            <p>
              The Finance Ministry is actively reviewing its Model Bilateral Investment Treaty (BIT) to make it more investor-friendly and will approach the Union Cabinet for approval soon, Economic Affairs Secretary <strong>Anuradha Thakur</strong> announced on Friday (August 7, 2026).
            </p>
            <p>
              Speaking at an event organized by economic think tank NCAER, Ms. Thakur noted that consultations are ongoing. <em>“The BIT is under review, and we are looking at many other clauses based on our experience in negotiations and global practices... it is a work in progress,”</em> she said.
            </p>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 my-6 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-800 dark:text-white mb-3">Key Takeaways on the Model BIT Review</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Objective:</strong> Modernizing the existing 2015 framework to improve investor confidence and address past negotiation hurdles.</li>
                <li>• <strong>Arbitration Protection:</strong> Factoring in investor-state dispute settlement (ISDS) where foreign investors can take a sovereign government to international arbitration.</li>
                <li>• <strong>Outward Investment (ODI):</strong> Designing balanced clauses to protect expanding Indian corporations operating overseas.</li>
                <li>• <strong>Next Steps:</strong> Final draft set to be placed before the Union Cabinet shortly.</li>
              </ul>
            </div>

            <InFeedAd />

            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-6 mb-4">Balancing Inflows and Outward Expansion</h3>
            <p>
              Explaining the significance of the treaty, Ms. Thakur emphasized that investment negotiations differ fundamentally from trade agreements. While trade treaties rely on state-to-state dispute mechanisms with diplomatic flexibility, investment protection agreements allow direct corporate litigation against sovereign entities.
            </p>
            <p>
              With Indian companies expanding aggressively overseas, safeguarding domestic entities in foreign jurisdictions has emerged as an essential dimension of modern trade policy. 
            </p>
            <p>
              Addressing concerns regarding capital flows and law enforcement oversight, the Secretary clarified that gross FDI reached record highs while net FDI trends reflected normal market dynamics, dismissing fears of capital flight due to agency procedures.
            </p>
          </section>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <p className="font-bold text-slate-800 dark:text-white mb-2">Explore More Policy Updates</p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">Check out other regulatory shifts and economic insights on our blog.</p>
            <a 
              href="/blog" 
              onClick={navigateBack}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Back to All Articles →
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-400">Source: The Hindu (PTI)</p>
          </div>
        </article>

        <BottomBannerAd />

        <div className="mt-6 text-center text-xs text-slate-400">
          © 2026 <span className="text-blue-600 font-medium">Truyon</span>
        </div>
      </div>
    </div>
  );
}

export default ModelBITReview2026;