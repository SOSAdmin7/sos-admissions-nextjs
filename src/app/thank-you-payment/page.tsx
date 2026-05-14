import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Mail, Phone, AlertCircle } from 'lucide-react';
import { generateThankYouPaymentMetadata } from '@/lib/metadata';
import { ThankYouPaymentConversion } from './ConversionScript';

export const metadata: Metadata = generateThankYouPaymentMetadata();

export default function ThankYouPaymentPage() {
  return (
    <>
      <ThankYouPaymentConversion />

      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white py-20">
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
              Payment Received!
            </h1>

            <p className="text-xl text-slate-600 mb-8">
              Thank you for your payment. We're excited to get started on your admissions journey.
            </p>

            {/* Payment Confirmation */}
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-8">
              <p className="text-sm text-slate-600 mb-2">Payment Status</p>
              <p className="text-2xl font-bold text-green-600 mb-4">Confirmed</p>
              <p className="text-sm text-slate-600">
                You should receive a confirmation email shortly with payment details and next steps.
              </p>
            </div>

            {/* Next Steps */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-navy mb-6">What Happens Next</h2>
              <div className="space-y-4 max-w-md mx-auto">
                <div className="text-left bg-warm-gray rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      1
                    </span>
                    <div className="pt-0.5">
                      <p className="font-semibold text-navy">Confirmation Email</p>
                      <p className="text-sm text-slate-600">
                        Look for a confirmation email with your receipt and account details.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-left bg-warm-gray rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      2
                    </span>
                    <div className="pt-0.5">
                      <p className="font-semibold text-navy">Initial Consultation</p>
                      <p className="text-sm text-slate-600">
                        Our team will contact you within 24 hours to schedule your first consultation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-left bg-warm-gray rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      3
                    </span>
                    <div className="pt-0.5">
                      <p className="font-semibold text-navy">Get Started</p>
                      <p className="text-sm text-slate-600">
                        Begin developing your personalized admissions strategy with your assigned consultant.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="bg-slate-50 rounded-lg p-6 mb-8 space-y-4">
              <h3 className="font-bold text-navy">Questions About Your Payment?</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <Phone className="w-5 h-5 text-blue" />
                  <a href="tel:310-951-4008" className="text-blue font-semibold hover:underline">
                    310-951-4008
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <Mail className="w-5 h-5 text-blue" />
                  <a href="mailto:info@sosadmissions.com" className="text-blue font-semibold hover:underline">
                    info@sosadmissions.com
                  </a>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="font-semibold text-navy mb-1">Next Steps</p>
                  <p className="text-sm text-slate-600">
                    Check your email (including spam folder) for our confirmation and next steps. We'll reach out within 24 hours to begin your journey.
                  </p>
                </div>
              </div>
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
                View Services
              </Link>
            </div>
          </div>

          {/* Additional Support */}
          <div className="mt-12 bg-navy rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Welcome to SOS Admissions!</h2>
            <p className="text-cream mb-6">
              You're now part of our community of successful students. We're committed to helping you achieve your admissions goals.
            </p>
            <p className="text-sm text-cream opacity-75">
              Thank you for choosing SOS Admissions. We look forward to working with you!
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
