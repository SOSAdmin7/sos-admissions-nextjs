'use client';

import Link from 'next/link';
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

/* ───────────────────────── TRUST BAR ───────────────────────── */
export function TrustBar() {
  return (
    <section className="bg-[#F8F9FA] py-8 border-b border-gray-200">
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
  return null;
}
