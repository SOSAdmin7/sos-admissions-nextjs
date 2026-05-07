import { Metadata } from 'next';
import { InfoFormClient } from './InfoFormClient';

export const metadata: Metadata = {
  title: 'Request Information - SOS Admissions',
  description: 'Request more information about SOS Admissions consulting services.',
  robots: { index: false, follow: false },
};

export default function InfoFormPage() {
  return (
    <>
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#1B2B4B]">
            Request Information
          </h1>
          <p className="text-lg text-slate-600">
            Fill out the form below and one of our admissions experts will reach out to discuss how we can help.
          </p>
        </div>
      </section>

      <InfoFormClient />
    </>
  );
}
