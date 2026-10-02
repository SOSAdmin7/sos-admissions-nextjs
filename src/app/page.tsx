import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustBar, SchoolLogos } from "@/components/TrustLogos";
import { ServicesGrid } from "@/components/ServicesGrid";
import dynamic from "next/dynamic";

// Title/description mirror the old site exactly (sosadmissions.com is the SEO master)
export const metadata: Metadata = {
  title: {
    absolute: "College And Graduate School Application Consulting Service",
  },
  description:
    "Expert admissions consulting for college, graduate school, MBA, law school, medical school, and residency applications. Decades of experience helping students get into top programs.",
  alternates: {
    canonical: "https://sosadmissions.com/",
  },
  openGraph: {
    title: "College And Graduate School Application Consulting Service",
    description:
      "Expert admissions consulting for college, graduate school, MBA, law school, medical school, and residency applications. Decades of experience helping students get into top programs.",
    url: "https://sosadmissions.com/",
    type: "website",
  },
};

const WhyChooseUs = dynamic(
  () => import("@/components/WhyChooseUs").then((mod) => mod.WhyChooseUs),
  { ssr: true },
);

const ProcessSection = dynamic(
  () => import("@/components/ProcessSection").then((mod) => mod.ProcessSection),
  { ssr: true },
);

const TestimonialsSection = dynamic(
  () =>
    import("@/components/TestimonialsSection").then(
      (mod) => mod.TestimonialsSection,
    ),
  { ssr: true },
);

const CTASection = dynamic(
  () => import("@/components/CTASection").then((mod) => mod.CTASection),
  { ssr: true },
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SchoolLogos variant="college" />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
