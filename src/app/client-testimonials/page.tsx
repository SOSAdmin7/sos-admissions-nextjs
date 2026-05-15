import { Metadata } from 'next';
import { Star } from 'lucide-react';
import { LegacyImageGallery, LegacyYouTubeCard } from '@/components/LegacyMedia';
import { DEFAULT_LEGACY_VIDEO, LEGACY_IMAGES } from '@/lib/legacyAssets';
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
          <div className="mt-8">
            <LegacyYouTubeCard video={DEFAULT_LEGACY_VIDEO} className="mx-auto" />
          </div>
        </div>
      </section>

      <LegacyImageGallery
        title="Legacy Testimonials Asset"
        images={[LEGACY_IMAGES.faqPromo]}
      />

      <TestimonialContent />
    </>
  );
}
