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
    <section className="relative min-h-[85vh] w-full overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] via-[#1B2B4B] to-[#2A4066]" />
      {/* Subtle grid overlay via CSS */}
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between">
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-12">
            <span className="inline-block text-[#E8613C] text-sm font-semibold uppercase tracking-[0.15em] mb-6">
              College and Graduate School Admissions Consulting
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Expert Admissions Consulting Since 1998
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl leading-relaxed">
              We help students get into top colleges, graduate schools, medical schools, law schools, and MBA programs. Our team of former admissions officers has guided thousands of clients to acceptance at the nation&apos;s most competitive programs.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link
              href="/contact-us"
              className="px-8 py-4 bg-[#E8613C] text-white font-semibold rounded-lg hover:bg-[#D4522E] transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-[#E8613C]/25"
            >
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+13109514008"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Call (310) 951-4008
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-12 border-t border-white/20">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <div className="text-3xl md:text-4xl font-bold text-[#E8613C] mb-2">
                {stat.value}
              </div>
              <p className="text-sm md:text-base text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
