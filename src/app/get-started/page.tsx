import { Metadata } from 'next';
import { generateMetadata as gen } from '@/lib/metadata';
import { OrderForm } from './OrderForm';

export const metadata: Metadata = gen({
  title: 'Get Started - Choose Your Package',
  description:
    'Select your admissions consulting package. A la carte services and complete packages available for college, graduate, medical, law, MBA, and more.',
  path: '/get-started',
});

export default function GetStartedPage() {
  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D1B2A] to-[#1B2B4B]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#E8613C] text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Get Started
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Choose Your Package
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Select your program type and package below. All packages include a free initial phone consultation.
          </p>
        </div>
      </section>

      <OrderForm />
    </>
  );
}
