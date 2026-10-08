import { pageMetadata } from "@/lib/page-metadata";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = pageMetadata({
  title: {
    absolute: "Psychology & Counseling Admissions Consulting - SOS Admissions",
  },
  description:
    "Expert psychology and counseling admissions consulting for clinical psychology PhD, PsyD, counseling psychology, MFT, and mental health counseling programs.",
  alternates: {
    canonical: "https://sosadmissions.com/psychology-counseling-admissions/",
  },
  openGraph: {
    title: "Psychology & Counseling Admissions Consulting - SOS Admissions",
    description:
      "Expert psychology and counseling admissions consulting for clinical psychology PhD, PsyD, counseling psychology, MFT, and mental health counseling programs.",
    url: "https://sosadmissions.com/psychology-counseling-admissions/",
    type: "website",
  },
});

export default function PsychologyCounselingAdmissionsPage() {
  return <ServicePageTemplate slug="psychology-counseling-admissions" />;
}
