"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Serving Applicants Since", value: "1998" },
  { label: "Individual Guidance", value: "1:1" },
  { label: "Phone and Video", value: "Worldwide" },
  { label: "Initial Consultation", value: "Free" },
];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white border-b border-slate-200 py-8 md:py-10">
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-5 md:mb-6">
          <span className="inline-block text-navy text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] mb-3 md:mb-4">
            College and Graduate School Admissions Consulting
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight mb-4 [text-wrap:balance]">
            Expert Admissions Consulting Since 1998
          </h1>
          <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            We help students get into top colleges, medical schools, law
            schools, MBA programs, medical residency programs, nursing and
            healthcare programs, and a wide range of graduate programs. Our team
            of former admissions officers has guided thousands of clients to
            acceptance at the nation&apos;s most competitive programs.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-6 md:mb-8">
          <Link
            href="/contact-us"
            className="px-5 sm:px-8 py-3.5 text-center bg-[#C94D2B] text-white font-semibold rounded-lg hover:bg-[#B94224] transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-[#E8613C]/25"
          >
            Schedule a Free Initial Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Video */}
        <div className="max-w-3xl mx-auto mb-6 md:mb-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <div className="w-full">
              <YouTubeFacade
                videoId="Jqe-SDu1yoU"
                title="SOS Admissions, College and Graduate School Admissions Consulting"
              />
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 md:gap-8 pt-6 md:pt-8 border-t border-slate-200">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col min-w-0 text-center">
              <div className="text-3xl md:text-4xl font-bold text-navy mb-1 whitespace-nowrap">
                {stat.value}
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-snug">
                {stat.label}
              </p>
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
        src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&playsinline=1`}
        title={title}
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="block aspect-video w-full min-h-[200px]"
      />
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className="relative block aspect-video w-full group cursor-pointer bg-black"
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
        <svg
          className="w-16 h-16 md:w-20 md:h-20 text-white drop-shadow-lg"
          viewBox="0 0 68 48"
        >
          <path
            d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
            fill="red"
          />
          <path d="M45 24L27 14v20" fill="white" />
        </svg>
      </div>
    </button>
  );
}
