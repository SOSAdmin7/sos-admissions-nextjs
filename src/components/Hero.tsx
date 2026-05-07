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
    <section className="relative min-h-[68vh] w-full overflow-hidden pt-16 pb-12 md:min-h-[85vh] md:pt-24 md:pb-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] via-[#1B2B4B] to-[#2A4066]" />
      {/* Subtle grid overlay via CSS */}
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between">
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-10 md:mb-12 text-center">
            <span className="inline-block text-[#E8613C] text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] mb-3 md:mb-4">
              College and Graduate School Admissions Consulting
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 md:mb-4">
              Expert Admissions Consulting Since 1998
            </h1>
            <a
              href="tel:+13109514008"
              className="inline-flex items-center justify-center text-base sm:text-lg font-semibold text-white hover:text-[#E8613C] transition-colors"
            >
              (310) 951-4008
            </a>
            <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
              We help students get into top colleges, graduate schools, medical schools, law schools, and MBA programs. Our team of former admissions officers has guided thousands of clients to acceptance at the nation&apos;s most competitive programs.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12 md:mb-16 justify-center">
            <Link
              href="/contact-us"
              className="px-6 py-3.5 bg-[#E8613C] text-white font-semibold rounded-lg hover:bg-[#D4522E] transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-[#E8613C]/25"
            >
              Start Your Application Strategy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+13109514008"
              className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Call (310) 951-4008
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-8 pt-8 md:pt-10 border-t border-white/20">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col min-w-0 text-center xl:text-left">
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
