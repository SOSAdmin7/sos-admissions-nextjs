import { pageMetadata } from "@/lib/page-metadata";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Medical Residency and Fellowship Interview Coaching - SOS Admissions" },
  description:
    "Residency and fellowship interview coaching from experienced admissions consultants. Prepare for specialty-specific questions and discuss your goals.",
  alternates: {
    canonical: "https://sosadmissions.com/medical-residency-interview/",
  },
  openGraph: {
    title: "Medical Residency and Fellowship Interview Coaching - SOS Admissions",
    description:
      "Residency and fellowship interview coaching from experienced admissions consultants. Prepare for specialty-specific questions and discuss your goals.",
    url: "https://sosadmissions.com/medical-residency-interview/",
    type: "website",
  },
});

export default function MedicalResidencyInterviewPage() {
  return (
    <ServicePageTemplate
      slug="interview-coaching"
      legacyVariant="medical-residency-interview"
    />
  );
}
