'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const programOptions = [
  'College Admissions',
  'College Transfers',
  'Graduate School',
  'MBA',
  'Medical School',
  'Medical Residency',
  'Law School',
  'Dental School',
  'PA School',
  'Nursing',
  'Personal Statement',
  'Interview Coaching',
  'Other',
];

export function PurchaseForm({ source }: { source: 'email' | 'direct' }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Push enhanced conversions data to dataLayer
    const dl = (window as any).dataLayer || [];
    dl.push({
      event: 'form_submit',
      form_type: source === 'email' ? 'purchase' : 'direct_purchase',
      enhanced_conversions: {
        email: data.email,
        phone_number: data.phone,
        first_name: data.firstName,
        last_name: data.lastName,
      },
    });

    try {
      // Send lead notification email
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          service: data.program,
          message: `[${source === 'email' ? 'Email Purchase' : 'Direct Purchase'} Funnel] ${data.message || 'No additional message'}`,
        }),
      });
    } catch {
      // Continue to payment even if notification fails
    }

    // Redirect to payment with source tracking
    window.location.href = `/payment?source=${source}`;
    setIsLoading(false);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#1B2B4B] mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#E8613C] transition"
                placeholder="First name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1B2B4B] mb-2">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#E8613C] transition"
                placeholder="Last name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1B2B4B] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#E8613C] transition"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1B2B4B] mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#E8613C] transition"
              placeholder="(310) 555-0000"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1B2B4B] mb-2">
              Program Interest *
            </label>
            <select
              name="program"
              required
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#E8613C] transition"
            >
              <option value="">Select a program...</option>
              {programOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1B2B4B] mb-2">
              Additional Information
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#E8613C] transition resize-none"
              placeholder="Tell us about your admissions goals..."
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#E8613C] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#D4522E] transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Processing...' : 'Continue to Payment'}
            {!isLoading && <ArrowRight className="w-5 h-5" />}
          </button>

          <p className="text-sm text-slate-500 text-center">
            You will be directed to our secure payment page to select your service package.
          </p>
        </form>
      </div>
    </section>
  );
}
