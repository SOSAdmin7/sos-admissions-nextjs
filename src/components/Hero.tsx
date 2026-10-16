import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { LegacyYouTubeCard } from "./LegacyMedia";
import { DEFAULT_LEGACY_VIDEO } from "@/lib/legacyAssets";

const stats = [
  { label: "Serving Applicants Since", value: "1998" },
  { label: "Individual Guidance", value: "1:1" },
  { label: "Phone and Video", value: "Worldwide" },
  { label: "Initial Consultation", value: "Free" },
];

export function Hero() {
  return (
    <section className="sos-hero relative w-full overflow-hidden bg-white border-b border-slate-200 py-8 md:py-10">
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

        </div>

        <LegacyYouTubeCard video={DEFAULT_LEGACY_VIDEO} className="mx-auto mb-5" />

        {/* CTA Button */}
        <div className="flex justify-center mb-4">
          <Link
            href="/contact-us"
            className="px-5 sm:px-8 py-3.5 text-center bg-[#C94D2B] text-white font-semibold rounded-lg hover:bg-[#B94224] transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-[#E8613C]/25"
          >
            Schedule a Free Initial Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <p className="text-center text-sm text-navy mb-5">or call <a href="tel:+13109514008" className="underline">310-951-4008</a></p>
        <div className="text-center mb-7">
          <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            We help students get into top colleges, medical schools, law
            schools, MBA programs, medical residency programs, nursing and
            healthcare programs, and a wide range of graduate programs. Our team
            of former admissions officers has guided thousands of clients to
            acceptance at the nation&apos;s most competitive programs.
          </p>
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
