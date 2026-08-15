import React from 'react';
import { Helmet } from 'react-helmet';

function Terms() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <Helmet>
        <title>Terms & Conditions - Truyon Finance</title>
        <meta name="description" content="Terms and conditions for using Truyon Finance calculators and tools." />
        <link rel="canonical" href="https://finance.truyon.com/terms" />
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
        <a href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm">
          ← Back to Calculator
        </a>

        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Terms & Conditions</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p><strong>Last updated:</strong> August 8, 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By using Truyon Finance (finance.truyon.com), you agree to these Terms & Conditions. If you do not agree, please do not use our services.</p>

          <h2>2. Disclaimer of Financial Advice</h2>
          <p>All calculators and tools on this website are for <strong>informational and educational purposes only</strong>. They do not constitute financial, investment, or legal advice. Always consult a qualified professional before making financial decisions.</p>

          <h2>3. Accuracy of Information</h2>
          <p>While we strive for accuracy, we do not guarantee that all calculations, data, or information on this site are error-free. You use this information at your own risk.</p>

          <h2>4. User Responsibility</h2>
          <p>You are solely responsible for verifying any information before making financial decisions. Truyon Finance is not liable for any losses or damages arising from your use of our tools.</p>

          <h2>5. Third-Party Services</h2>
          <p>We use third-party services including Google AdSense and Google Analytics. These services may collect data as per their own privacy policies.</p>

          <h2>6. Intellectual Property</h2>
          <p>All content, code, and designs on this website are the property of Truyon Finance and may not be reproduced without permission.</p>

          <h2>7. Changes to Terms</h2>
          <p>We reserve the right to update these Terms at any time. Continued use of the site constitutes acceptance of the updated Terms.</p>

          <h2>8. Contact</h2>
          <p>For questions about these Terms, please contact us at: <a href="/contact" className="text-blue-600 dark:text-blue-400">Contact Us</a></p>
        </div>
      </div>
    </div>
  );
}

export default Terms;