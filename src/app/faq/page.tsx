import { pageMetadata } from "@/lib/page-metadata";
import { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Frequently Asked Questions (FAQ) - SOS Admissions" },
  description:
    "Answers to common questions about the admissions services we provide for applicants to college, grad school, MBA & med school.",
  alternates: {
    canonical: "https://sosadmissions.com/faq/",
  },
  openGraph: {
    title: "Frequently Asked Questions (FAQ) - SOS Admissions",
    description:
      "Answers to common questions about the admissions services we provide for applicants to college, grad school, MBA & med school.",
    url: "https://sosadmissions.com/faq/",
    type: "website",
  },
});

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-navy">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600">
            Find answers to common questions about our services and the
            admissions process.
          </p>
        </div>
      </section>

      <FAQAccordion />
    </>
  );
}
