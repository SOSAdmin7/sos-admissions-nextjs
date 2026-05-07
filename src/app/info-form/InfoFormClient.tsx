'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const GOOGLE_ADS_ID = 'AW-824664390';
const CONVERSION_LABEL = 'CjAKCN-hn5IDFQPQAQAZ';

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

export function InfoFormClient() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Push enhanced conversions data BEFORE firing conversion
    const dl = (window as any).dataLayer || [];
    dl.push({
      event: 'form_submit',
      form_type: 'info_form',
      enhanced_conversions: {
        email: data.email,
        phone_number: data.phone,
        first_name: data.firstName,
        last_name: data.lastName,
      },
    });

    // Fire $2,000 conversion (email info funnel)
    const gtag = (window as any).gtag;
    if (gtag) {
      gtag('event', 'conversion', {
        send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
        value: 2000.0,
        currency: 'USD',
      });
    }

    dl.push({
      event: 'info_form_conversion',
      conversion_type: 'email_info',
      conversion_value: 2000,
      currency: 'USD',
    });

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          service: data.program,
          message: `[Email Info Form] How did you hear about us: ${data.referralSource || 'Not specified'}. ${data.message || ''}`,
        }),
      });
    } catch {
      // Show success even if email fails - conversion already fired
    }

    setSubmitted(true);
    setIsLoading(false);
  };

  if (submitted) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#1B2B4B] mb-4">Thank You!</h2>
            <p className="text-lg text-slate-600 mb-6">
              We have received your information and one of our admissions experts will be in touch within 24 hours.
            </p>
            <p className="text-slate-500 mb-8">
              If you need to reach us sooner, call{' '}
              <a href="tel:+13109514008" className="text-[#E8613C] font-semibold hover:underline">
                (310) 951-4008
              </a>
            </p>
            <Link
              href="/"
              className="inline-block bg-[#1B2B4B] text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

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
              How Did You Hear About Us?
            </label>
            <input
              type="text"
              name="referralSource"
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#E8613C] transition"
              placeholder="e.g. Google, referral, email"
            />
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
            className="w-full bg-[#E8613C] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#D4522E] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Submitting...' : 'Submit Request'}
          </button>

          <p className="text-sm text-slate-500 text-center">
            We will respond within 24 hours to discuss your admissions goals.
          </p>
        </form>
      </div>
    </section>
  );
}
