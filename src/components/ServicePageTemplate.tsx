import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { faqItems } from "@/data/faqs";
import { LegacyYouTubeCard } from "./LegacyMedia";
import { TrustBar } from "./TrustLogos";
import { getLegacyServiceAssets } from "@/lib/legacyAssets";
import { SourcePricing, sourceData } from "./SourcePricing";
import { TestimonialsSection } from "./TestimonialsSection";
const interviewTitles: Record<string, string> = {
  "college-interviews": "College Interview Coaching",
  "graduate-school-interview": "Graduate School Interview Coaching",
  "mba-interview": "MBA Interview Coaching",
  "medical-school-interview": "Medical School Interview Coaching",
  "medical-residency-interview": "Medical Residency Interview Coaching",
};
export default function ServicePageTemplate({
  slug,
  legacyVariant,
}: {
  slug: string;
  legacyVariant?: string;
}) {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const sourceSlug =
    legacyVariant && sourceData[legacyVariant]
      ? legacyVariant
      : service.sourceSlug;
  const source = sourceData[sourceSlug];
  const title = interviewTitles[sourceSlug] || service.heroStatement;
  const videos =
    getLegacyServiceAssets(legacyVariant ?? slug).extraVideos ?? [];
  const features = source?.features.length ? source.features : service.features;
  return (
    <>
      <section className="bg-gradient-to-br from-[#0D1B2A] via-[#1B2B4B] to-[#2A4066] px-4 py-9 md:py-12 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5 [text-wrap:balance]">
            {title}
          </h1>
          <div className="space-y-4 mb-5">
            {videos.map((v) => (
              <LegacyYouTubeCard key={v.id} video={v} className="mx-auto" />
            ))}
          </div>
          <p className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6">
            {source?.intro || service.longDescription}
          </p>
          <Link
            href="/contact-us/"
            className="inline-flex rounded-full bg-[#C94D2B] px-6 py-3 font-semibold"
          >
            Schedule a Free Initial Consultation
          </Link>
          <p className="mt-4 text-sm">
            or call{" "}
            <a href="tel:+13109514008" className="underline">
              310-951-4008
            </a>
          </p>
        </div>
      </section>
      <TrustBar />
      <section className="py-9 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy text-center mb-6">
            How We Can Help
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {features.map((f, i) => (
              <li
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-navy"
              >
                {f}
              </li>
            ))}
          </ul>
          {sourceSlug === "law-school-application" && (
            <div className="mt-6 rounded-xl bg-slate-50 p-5">
              <h2 className="text-xl font-bold mb-3">Law School Transfers</h2>
              <p>
                We also help current law students transfer to a new law school.
                One client came to us devastated after being academically
                dismissed from a law school ranked near 100, unsure he would
                ever have the chance to become a lawyer. We helped him transfer
                successfully to a law school ranked near 50. By the end, he was
                wondering why he had not tried to transfer sooner.
              </p>
            </div>
          )}
          {sourceSlug === "mba" && (
            <p className="mt-5">
              <Link
                href="/mba-recommender-questions/"
                className="text-blue-800 underline"
              >
                See the MBA recommender question guide
              </Link>
            </p>
          )}
        </div>
      </section>
      <SourcePricing slug={sourceSlug} />
      <TestimonialsSection program={sourceSlug} />
      <section className="py-9 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl text-navy font-bold text-center mb-6">
            Frequently Asked Questions
          </h2>
          {faqItems.map((f) => (
            <details
              key={f.question}
              className="border-b border-slate-200 py-4"
            >
              <summary className="font-semibold cursor-pointer text-navy">
                {f.question}
              </summary>
              <p className="pt-3 text-slate-600 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="bg-[#0D1B2A] text-white text-center px-4 py-10">
        <h2 className="text-3xl font-bold mb-4">Plan Your Next Step</h2>
        <p className="mb-5">
          Discuss your goals with an admissions consultant.
        </p>
        <Link
          href="/contact-us/"
          className="inline-flex bg-[#E8613C] rounded-full px-6 py-3 font-semibold"
        >
          Schedule a Free Initial Consultation
        </Link>
      </section>
    </>
  );
}
