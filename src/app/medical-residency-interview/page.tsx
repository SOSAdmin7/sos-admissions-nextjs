import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: { absolute: "Medical Residency Interview Coaching - SOS Admissions" },
  description:
    "Expert residency interview coaching from experienced admissions consultants. Prepare for ERAS interviews, rank lists, and specialty-specific questions.",
  alternates: {
    canonical: "https://sosadmissions.com/medical-residency-interview/",
  },
  openGraph: {
    title: "Medical Residency Interview Coaching - SOS Admissions",
    description:
      "Expert residency interview coaching from experienced admissions consultants. Prepare for ERAS interviews, rank lists, and specialty-specific questions.",
    url: "https://sosadmissions.com/medical-residency-interview/",
    type: "website",
  },
};

export default function MedicalResidencyInterviewPage() {
  return (
    <ServicePageTemplate
      slug="interview-coaching"
      legacyVariant="medical-residency-interview"
    />
  );
}
