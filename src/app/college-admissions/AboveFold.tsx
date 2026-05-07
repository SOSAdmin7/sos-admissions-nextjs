'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

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
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="aspect-video">
              <YouTubeFacade videoId="1T9AzTtI0U8" title="College Admissions Consulting" />
            </div>
          </div>
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

/* ───────────────────────── YOUTUBE FACADE ───────────────────────── */
function YouTubeFacade({ videoId, title }: { videoId: string; title: string }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className="relative w-full h-full group cursor-pointer bg-black"
      aria-label={`Play video: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
        <svg className="w-16 h-16 md:w-20 md:h-20 text-white drop-shadow-lg" viewBox="0 0 68 48">
          <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/>
          <path d="M45 24L27 14v20" fill="white"/>
        </svg>
      </div>
    </button>
  );
}

export function VideoSection() {
  return (
    <section className="py-8 md:py-12 bg-[#F8F9FA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <div className="aspect-video">
            <YouTubeFacade videoId="1T9AzTtI0U8" title="College Admissions Consulting" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── TRUST BAR ───────────────────────── */
export function TrustBar() {
  return (
    <section className="bg-[#F8F9FA] py-6 md:py-8 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">
            As Featured In
          </span>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 sm:gap-x-10 md:gap-x-12">
            <svg className="h-7 text-red-600 transition-colors" viewBox="0 0 120 40" fill="currentColor">
              <text x="0" y="32" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="36" letterSpacing="-2">CNN</text>
            </svg>
            <svg className="h-6 text-[#003366] transition-colors" viewBox="0 0 160 28" fill="currentColor">
              <text x="0" y="23" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="22" letterSpacing="0.5">FOX NEWS</text>
            </svg>
            <svg className="h-5 text-gray-800 transition-colors" viewBox="0 0 280 30" fill="currentColor">
              <text x="0" y="24" fontFamily="Georgia, Times New Roman, serif" fontWeight="400" fontSize="18" fontStyle="italic" letterSpacing="0.5">The Wall Street Journal</text>
            </svg>
            <svg className="h-7 text-red-600 transition-colors" viewBox="0 0 140 40" fill="currentColor">
              <text x="2" y="33" fontFamily="Times New Roman, Georgia, serif" fontWeight="700" fontSize="36" letterSpacing="5">TIME</text>
            </svg>
            <svg className="h-6 text-blue-700 transition-colors" viewBox="0 0 160 30" fill="currentColor">
              <text x="0" y="24" fontFamily="Arial, Helvetica" fontWeight="700" fontSize="22" letterSpacing="1">NBC NEWS</text>
            </svg>
            <svg className="h-5 text-red-700 transition-colors" viewBox="0 0 180 24" fill="currentColor">
              <text x="0" y="19" fontFamily="Georgia, Times New Roman, serif" fontWeight="700" fontSize="17" letterSpacing="0.3">China Daily</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── UNIVERSITY LOGOS ───────────────────────── */
export function UniversityLogos() {
  const schools = [
    { name: 'Harvard', img: '/images/schools/harvard.png' },
    { name: 'Yale', img: '/images/schools/yale.png' },
    { name: 'Princeton', img: '/images/schools/princeton.png' },
    { name: 'Stanford', img: '/images/schools/stanford.png' },
    { name: 'Columbia', img: '/images/schools/columbia.png' },
    { name: 'MIT', img: '/images/schools/mit.png' },
    { name: 'Penn', img: '/images/schools/penn.png' },
    { name: 'Brown', img: '/images/schools/brown.png' },
    { name: 'Cornell', img: '/images/schools/cornell.png' },
    { name: 'Dartmouth', img: '/images/schools/dartmouth.png' },
    { name: 'Duke', img: '/images/schools/duke.png' },
    { name: 'Georgetown', img: '/images/schools/georgetown.png' },
    { name: 'UCLA', img: '/images/schools/ucla.png' },
    { name: 'USC', img: '/images/schools/usc.png' },
    { name: 'U. Chicago', img: '/images/schools/uchicago.png' },
    { name: 'Northwestern', img: '/images/schools/northwestern.png' },
  ];

  return (
    <section className="py-8 md:py-12 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold mb-10">
          Our Students Have Been Accepted To
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 md:gap-8 items-center justify-items-center">
          {schools.map((school) => (
            <div
              key={school.name}
              className="flex flex-col items-center gap-2 group"
              title={school.name}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 relative transition-all duration-300">
                <Image
                  src={school.img}
                  alt={`${school.name} logo`}
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] text-gray-500 transition-colors font-medium text-center leading-tight">
                {school.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
