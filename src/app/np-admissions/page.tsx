import { pageMetadata } from "@/lib/page-metadata";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Nurse Practitioner Admissions Consulting | NP School | SOS Admissions" },
  description:
    "Expert NP school admissions consulting for Nurse Practitioner programs. Personal statements, NursingCAS help, and interview prep for FNP, PMHNP, Acute Care NP, and more. Call 310-951-4008.",
  alternates: {
    canonical: "https://sosadmissions.com/np-admissions/",
  },
  openGraph: {
    title: "Nurse Practitioner Admissions Consulting | NP School | SOS Admissions",
    description:
      "Expert NP school admissions consulting for Nurse Practitioner programs. Personal statements, NursingCAS help, and interview prep for FNP, PMHNP, Acute Care NP, and more. Call 310-951-4008.",
    url: "https://sosadmissions.com/np-admissions/",
    type: "website",
  },
});

export default function NursePractitionerAdmissionsPage() {
  return <ServicePageTemplate slug="nurse-practitioner-admissions" />;
}
