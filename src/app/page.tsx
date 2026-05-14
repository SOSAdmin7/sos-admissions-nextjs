import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import dynamic from "next/dynamic";

const WhyChooseUs = dynamic(
  () => import("@/components/WhyChooseUs").then((mod) => mod.WhyChooseUs),
  { ssr: true }
);

const ProcessSection = dynamic(
  () => import("@/components/ProcessSection").then((mod) => mod.ProcessSection),
  { ssr: true }
);

const TestimonialsSection = dynamic(
  () => import("@/components/TestimonialsSection").then((mod) => mod.TestimonialsSection),
  { ssr: true }
);

const CTASection = dynamic(
  () => import("@/components/CTASection").then((mod) => mod.CTASection),
  { ssr: true }
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
