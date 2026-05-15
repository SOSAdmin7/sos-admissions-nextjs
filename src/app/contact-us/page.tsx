import { Metadata } from 'next';
import { generateContactMetadata } from '@/lib/metadata';
import { LegacyImageGallery, LegacyYouTubeCard } from '@/components/LegacyMedia';
import { DEFAULT_LEGACY_VIDEO, LEGACY_IMAGES } from '@/lib/legacyAssets';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = generateContactMetadata();

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-navy">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600">
            Ready to start your admissions journey? Let's talk.
          </p>
          <div className="mt-8">
            <LegacyYouTubeCard video={DEFAULT_LEGACY_VIDEO} className="mx-auto" />
          </div>
        </div>
      </section>

      <LegacyImageGallery
        title="Legacy Contact Page Asset"
        images={[LEGACY_IMAGES.contactImage]}
      />

      <ContactForm />
    </>
  );
}
