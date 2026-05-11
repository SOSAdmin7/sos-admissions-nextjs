'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Years of Experience', value: '27+' },
  { label: 'Ivy League Acceptances', value: '1,000+' },
  { label: 'Client Acceptance Rate', value: '98%' },
  { label: 'Team Members', value: '70+' },
];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-10 pb-10 md:pt-16 md:pb-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] via-[#1B2B4B] to-[#2A4066]" />
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-block text-[#E8613C] text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] mb-3 md:mb-4">
            College and Graduate School Admissions Consulting
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-5">
            Expert Admissions Consulting Since 1998
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
            We help students get into top colleges, graduate schools, medical schools, law schools, and MBA programs. Our team of former admissions officers has guided thousands of clients to acceptance at the nation&apos;s most competitive programs.
          </p>
        </div>

        {/* Video */}
        <div className="max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="aspect-video">
              <YouTubeFacade videoId="Jqe-SDu1yoU" title="SOS Admissions – College and Graduate School Admissions Consulting" />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-10 md:mb-14">
          <Link
            href="/contact-us"
            className="px-8 py-3.5 bg-[#E8613C] text-white font-semibold rounded-lg hover:bg-[#D4522E] transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-[#E8613C]/25"
          >
            Start Your Application Strategy
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 md:gap-8 pt-8 md:pt-10 border-t border-white/20">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col min-w-0 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#E8613C] mb-1 whitespace-nowrap">
                {stat.value}
              </div>
              <p className="text-sm md:text-base text-slate-300 leading-snug">{stat.label}</p>
            </div>
          ))}
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
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
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
