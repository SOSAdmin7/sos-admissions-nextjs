import { pageMetadata } from "@/lib/page-metadata";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "SAT Prep / ACT Prep - SOS Admissions" },
  description:
    "SAT tutors and ACT tutors provide expert test preparation for high school students and college applicants.",
  alternates: {
    canonical: "https://sosadmissions.com/sat-act-preparation/",
  },
  openGraph: {
    title: "SAT Prep / ACT Prep - SOS Admissions",
    description:
      "SAT tutors and ACT tutors provide expert test preparation for high school students and college applicants.",
    type: "website",
  },
});

export default function SatActPreparationPage() {
  return <ServicePageTemplate slug="standardized-test-prep" />;
}
