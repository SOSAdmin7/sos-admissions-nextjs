import { Metadata } from 'next';
import { Star } from 'lucide-react';
import { generateTestimonialsMetadata } from '@/lib/metadata';
import { TestimonialContent } from '@/components/TestimonialContent';

export const metadata: Metadata = generateTestimonialsMetadata();

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
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
