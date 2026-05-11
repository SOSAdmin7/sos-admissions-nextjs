'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { LegacyStripSection, LegacyYouTubeCard } from '@/components/LegacyMedia';
import { DEFAULT_LEGACY_VIDEO, LEGACY_IMAGES } from '@/lib/legacyAssets';

/* ───────────────────────── HERO ───────────────────────── */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0D1B2A] via-[#1B2B4B] to-[#2A4066] min-h-[70vh] md:min-h-[85vh] flex items-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#E8613C] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#2A4066] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-14 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 animate-[fadeInUp_0.7s_ease-out_0.1s_both]">
          Expert College Admissions Consulting
        </h1>

        <div className="mb-6 md:mb-8 animate-[fadeInUp_0.7s_ease-out_0.18s_both]">
          <LegacyYouTubeCard video={DEFAULT_LEGACY_VIDEO} className="mx-auto" />
        </div>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto animate-[fadeInUp_0.7s_ease-out_0.2s_both]">
          Our college admissions consultants have helped thousands of clients get into top colleges
          and universities in the United States and Canada. We have achieved great success with both
          freshman applicants and transfer students.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fadeInUp_0.7s_ease-out_0.3s_both]">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-[#E8613C] hover:bg-[#D4522E] text-white font-bold py-3.5 px-7 rounded-full text-base md:text-lg transition-colors shadow-lg shadow-[#E8613C]/25"
          >
            Schedule a Consultation
            <ChevronRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:+13109514008"
            className="text-slate-300 hover:text-white transition-colors text-sm md:text-base"
          >
            or call (310) 951-4008
          </a>
        </div>
      </div>
    </section>
  );
}

export function VideoSection() {
  return (
    <section className="py-8 md:py-12 bg-[#F8F9FA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <LegacyYouTubeCard video={DEFAULT_LEGACY_VIDEO} className="mx-auto" />
      </div>
    </section>
  );
}

/* ───────────────────────── TRUST BAR ───────────────────────── */
export function TrustBar() {
  return (
    <LegacyStripSection
      featuredStrip={LEGACY_IMAGES.featuredInNews}
      clientStrip={LEGACY_IMAGES.collegeClients}
    />
  );
}

/* ───────────────────────── UNIVERSITY LOGOS ───────────────────────── */
export function UniversityLogos() {
  return null;
}
