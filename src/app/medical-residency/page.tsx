import { pageMetadata } from "@/lib/page-metadata";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = pageMetadata({
  title: {
    absolute: "Medical Residency Application Consulting - SOS Admissions",
  },
  description:
    "Expert medical residency consulting for ERAS applications, personal statements, and the Match. Full-service support from application to match day. We help with fellowship applications as well.",
  alternates: {
    canonical: "https://sosadmissions.com/medical-residency/",
  },
  openGraph: {
    title: "Medical Residency Application Consulting - SOS Admissions",
    description:
      "Expert medical residency consulting for ERAS applications, personal statements, and the Match. Full-service support from application to match day. We help with fellowship applications as well.",
    url: "https://sosadmissions.com/medical-residency/",
    type: "website",
  },
});

export default function MedicalResidencyPage() {
  return <ServicePageTemplate slug="medical-residency" />;
}
