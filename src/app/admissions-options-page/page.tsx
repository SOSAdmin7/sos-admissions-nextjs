import { Metadata } from 'next';
import { PurchaseForm } from '../purchase/PurchaseForm';

export const metadata: Metadata = {
  title: 'Admissions Consulting Packages - SOS Admissions',
  description:
    'View our admissions consulting packages and get started with SOS Admissions. Expert guidance for college, graduate school, medical school, and more.',
  alternates: {
    canonical: 'https://sosadmissions.com/admissions-options-page',
  },
};

export default function AdmissionsOptionsPage() {
  return (
    <>
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#1B2B4B]">
            Start Your Admissions Journey
          </h1>
          <p className="text-lg text-slate-600">
            Fill out the form below to get started. We will match you with the right consultant for your needs.
          </p>
        </div>
      </section>

      <PurchaseForm source="direct" />
    </>
  );
}
