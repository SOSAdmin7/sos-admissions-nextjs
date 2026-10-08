import { pageMetadata } from "@/lib/page-metadata";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = pageMetadata({
  title: {
    absolute:
      "Medical School Admissions Consulting | AMCAS & Interviews - SOS Admissions",
  },
  description:
    "Expert medical school admissions consulting for AMCAS, AACOMAS, and interviews. Get into your dream MD or DO program.",
  alternates: {
    canonical: "https://sosadmissions.com/medical-school-application/",
  },
  openGraph: {
    title:
      "Medical School Admissions Consulting | AMCAS & Interviews - SOS Admissions",
    description:
      "Expert medical school admissions consulting for AMCAS, AACOMAS, and interviews. Get into your dream MD or DO program.",
    url: "https://sosadmissions.com/medical-school-application/",
    type: "website",
  },
});

export default function MedicalSchoolApplicationPage() {
  return <ServicePageTemplate slug="medical-school" />;
}
