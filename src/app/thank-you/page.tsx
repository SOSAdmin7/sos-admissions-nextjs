import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Mail, Clock } from 'lucide-react';
import { generateThankYouMetadata } from '@/lib/metadata';
import { GTMScript } from '@/components/GTMScript';

export const metadata: Metadata = generateThankYouMetadata();

export default function ThankYouPage() {
  return (
    <>
      <GTMScript />

      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-2xl w-full">
          {/* Success Message */}
          <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12 text-center">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
            </div>

            {/* Main Message */}
            <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
              Thank You!
            </h1>

            <p className="text-xl text-slate-600 mb-8">
              We've received your message and appreciate your interest in SOS Admissions.
            </p>

            {/* Details */}
            <div className="bg-warm-gray rounded-lg p-6 mb-8 space-y-4">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="font-bold text-navy">Response Time</p>
                  <p className="text-slate-600">
                    We'll be in touch within 24 hours to discuss your admissions goals and how we can help.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="font-bold text-navy">Direct Contact</p>
                  <p className="text-slate-600">
                    If you need to reach us sooner, call us at{' '}
                    <a href="tel:310-951-4008" className="text-blue font-semibold hover:underline">
                      310-951-4008
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-navy mb-4">Next Steps</h2>
              <ol className="text-left space-y-3 max-w-md mx-auto">
                <li className="flex items-start gap-3">
                  <span className="bg-blue text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </span>
                  <span className="text-slate-600 pt-0.5">
                    Look for our email or call from our team soon
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2
                  </span>
                  <span className="text-slate-600 pt-0.5">
                    Schedule your initial consultation at a time that works for you
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </span>
                  <span className="text-slate-600 pt-0.5">
                    Begin your personalized admissions strategy
                  </span>
                </li>
              </ol>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-block bg-navy text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
              >
                Back to Home
              </Link>
              <Link
                href="/services"
                className="inline-block bg-warm-gray text-navy px-8 py-3 rounded-lg font-bold border-2 border-navy hover:bg-navy hover:text-white transition"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm mb-4">
              Questions or need immediate assistance?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm font-semibold">
              <a href="tel:310-951-4008" className="text-blue hover:underline">
                Call: 310-951-4008
              </a>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <a href="mailto:info@sosadmissions.com" className="text-blue hover:underline">
                Email: info@sosadmissions.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
