import React from 'react';
import { Helmet } from 'react-helmet';

function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <Helmet>
        <title>Contact Us - Truyon Finance</title>
        <meta name="description" content="Get in touch with Truyon Finance for questions, feedback, or support." />
        <link rel="canonical" href="https://finance.truyon.com/contact" />
      </Helmet>

      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
        <a href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-sm">
          ← Back to Calculator
        </a>

        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Contact Us</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Have questions, feedback, or suggestions? We'd love to hear from you.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">📧 Email Us</p>
          <a 
            href="mailto:support@truyon.com" 
            className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            support@truyon.com
          </a>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
            We typically respond within 24-48 hours.
          </p>
        </div>

        <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>You can also reach us on:</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Twitter</a>
            <span>|</span>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;