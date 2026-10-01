import { Metadata } from 'next';
import { PurchaseForm } from './PurchaseForm';

export const metadata: Metadata = {
  title: { absolute: 'Purchase Page - SOS Admissions' },
  alternates: {
    canonical: 'https://sosadmissions.com/purchase/',
  },
  openGraph: {
    title: 'Purchase Page - SOS Admissions',
    url: 'https://sosadmissions.com/purchase/',
    type: 'website',
  },
};

export default function PurchasePage() {
  return (
    <>
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#1B2B4B]">
            Get Started with SOS Admissions
          </h1>
          <p className="text-lg text-slate-600">
            Fill out the form below and we will contact you to discuss your admissions goals and next steps.
          </p>
        </div>
      </section>

      <PurchaseForm source="email" />
    </>
  );
}
