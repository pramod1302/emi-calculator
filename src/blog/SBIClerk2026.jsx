import React from 'react';
import { Helmet } from 'react-helmet';
import { TopBannerAd, BottomBannerAd } from '../components/AdUnits';

function SBIClerk2026() {
  const navigateBack = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/blog');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <Helmet>
        <title>SBI Clerk Recruitment 2026: 1,538 Backlog Vacancies Announced</title>
        <meta name="description" content="SBI has announced 1,538 backlog vacancies for Junior Associates. Check eligibility, application dates, and how to apply for SBI Clerk 2026." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <a href="/blog" onClick={navigateBack} className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm">
          ← Back to Blog
        </a>

        <TopBannerAd />

        <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white leading-tight">
              SBI Clerk Recruitment 2026: 1,538 Backlog Vacancies Announced
            </h1>
            <p className="text-slate-500 mt-2">August 8, 2026 | Government Jobs</p>
          </header>

          <img 
            src="https://images.moneycontrol.com/static-mcnews/2019/10/State-bank-of-India.jpg?impolicy=website&width=1600&height=900" 
            alt="State Bank of India" 
            className="w-full rounded-xl mb-8 shadow-sm"
          />

          <section className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
            <p>
              The State Bank of India (SBI) has officially released the notification for a Special Recruitment Drive to fill <strong>1,538 backlog vacancies</strong> for the post of Junior Associate (Customer Support & Sales). This drive is exclusively for SC, ST, and OBC candidates.
            </p>
            
            <h3 className="text-xl font-bold text-slate-800 dark:text-white pt-4">Key Details</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Total Vacancies:</strong> 1,538 (Backlog)</li>
              <li><strong>Online Application Start:</strong> August 7, 2026</li>
              <li><strong>Last Date to Apply:</strong> August 27, 2026</li>
              <li><strong>Age Limit:</strong> 20 to 28 years (with category-based relaxation)</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800 dark:text-white pt-4">How to Apply</h3>
            <p>Candidates can apply by visiting the official SBI careers portal at <a href="https://www.sbi.co.in/careers" className="text-blue-600 dark:text-blue-400 hover:underline">www.sbi.co.in/careers</a>. Ensure you have your scanned photograph, signature, and necessary documents ready before filling out the form.</p>
          </section>
        </article>

        <BottomBannerAd />
      </div>
    </div>
  );
}

export default SBIClerk2026;