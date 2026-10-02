import Link from "next/link";
import body from "@/data/academic-crisis-consulting-content.json";
import { SourcePricing } from "@/components/SourcePricing";
export const metadata = {
  title: { absolute: "Academic Crisis Consulting | SOS Admissions" },
  description:
    "Educational consulting for academic accusations, dismissals, hearings, appeals, and transfer planning.",
  alternates: {
    canonical: "https://sosadmissions.com/academic-crisis-consulting/",
  },
};
export default function Page() {
  return (
    <>
      <section className="bg-[#0D1B2A] text-white py-10 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold max-w-4xl mx-auto mb-5">
          Academic Crisis Consulting
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-6">
          Protect your record, navigate the crisis, and continue your education.
        </p>
        <Link
          href="/contact-us/"
          className="inline-block bg-[#C94D2B] px-6 py-3 rounded-full font-semibold"
        >
          Schedule a Free Initial Consultation
        </Link>
      </section>
      <article
        className="prose prose-slate max-w-4xl px-4 py-8 mx-auto prose-headings:text-navy"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <SourcePricing slug="academic-crisis-consulting" />
    </>
  );
}
