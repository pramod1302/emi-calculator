import React from 'react';
import { Helmet } from 'react-helmet';

function Privacy() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <Helmet>
        <title>Privacy Policy - Truyon Finance</title>
        <meta name="description" content="Privacy policy for Truyon Finance. Learn how we handle your data when you use our financial tools." />
        <link rel="canonical" href="https://finance.truyon.com/privacy" />
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
        <a href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm">
          ← Back to Calculator
        </a>

        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Privacy Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p><strong>Last updated:</strong> August 8, 2026</p>

          <h2>1. Information We Collect</h2>
          <p>We use <strong>Google AdSense</strong> to serve advertisements and <strong>Google Analytics</strong> to analyze traffic. These services may collect:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent</li>
            <li>Device information</li>
          </ul>
          <p>We do <strong>not</strong> collect or store any personal data like names, email addresses, or financial information.</p>

          <h2>2. Cookies</h2>
          <p>We use cookies to improve your experience and serve relevant ads. You can control cookie settings in your browser. Some cookies are essential for the site to function properly.</p>

          <h2>3. Data Security</h2>
          <p>All calculations are done client-side (in your browser). No data is sent to our servers. Your financial data stays on your device.</p>

          <h2>4. Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li><strong>Google AdSense</strong> – for advertising</li>
            <li><strong>Google Analytics</strong> – for traffic analysis</li>
            <li><strong>Vercel</strong> – for hosting</li>
          </ul>
          <p>These services have their own privacy policies. Please refer to them for more information.</p>

          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Opt-out of personalized ads (via Google Ad Settings)</li>
            <li>Disable cookies in your browser</li>
            <li>Use our tools without any tracking (use incognito mode)</li>
          </ul>

          <h2>6. Contact</h2>
          <p>For privacy concerns, please contact us at: <a href="/contact" className="text-blue-600 dark:text-blue-400">Contact Us</a></p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;