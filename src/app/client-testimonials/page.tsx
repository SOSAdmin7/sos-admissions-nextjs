import { Metadata } from 'next';
import { Star } from 'lucide-react';
import { TestimonialContent } from '@/components/TestimonialContent';

export const metadata: Metadata = {
  title: { absolute: 'Client Testimonials & Success Stories | SOS Admissions' },
  description:
    'Read testimonials from students who got into Harvard, Yale, Stanford, Johns Hopkins and top colleges, medical schools, law schools, and MBA programs with SOS Admissions.',
  alternates: {
    canonical: 'https://sosadmissions.com/client-testimonials/',
  },
  openGraph: {
    title: 'Client Testimonials & Success Stories | SOS Admissions',
    description:
      'Read testimonials from students who got into Harvard, Yale, Stanford, Johns Hopkins and top colleges, medical schools, law schools, and MBA programs with SOS Admissions.',
    url: 'https://sosadmissions.com/client-testimonials/',
    type: 'website',
  },
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-navy">
            Student Success Stories
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            Read inspiring stories from students who achieved their dreams with SOS Admissions.
          </p>
          <div className="flex items-center justify-center gap-2 text-lg font-semibold text-gold">
            <Star className="w-6 h-6 fill-gold" />
            <span>98% Client Satisfaction Rate</span>
          </div>
        </div>
      </section>

      <TestimonialContent />
    </>
  );
}
