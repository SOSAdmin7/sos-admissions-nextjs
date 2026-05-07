import { Metadata } from 'next';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { PaymentForm } from '@/components/PaymentForm';

export const metadata: Metadata = generatePageMetadata({
  title: 'Payment - SOS Admissions',
  description:
    'Secure payment processing for SOS Admissions consulting services. Choose your service package and complete payment.',
  path: '/payment',
});

export default function PaymentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-navy">
            Secure Payment
          </h1>
          <p className="text-xl text-slate-600">
            Choose your service and complete payment to get started with SOS Admissions.
          </p>
        </div>
      </section>

      <PaymentForm />
    </>
  );
}
