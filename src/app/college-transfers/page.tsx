import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: {
    absolute: "College Transfer Admissions Consulting - SOS Admissions",
  },
  description:
    "Expert college transfer admissions consulting for students transferring to Ivy League and top schools. We handle Common App, essays, and transfer strategy.",
  alternates: {
    canonical: "https://sosadmissions.com/college-transfers/",
  },
  openGraph: {
    title: "College Transfer Admissions Consulting - SOS Admissions",
    description:
      "Expert college transfer admissions consulting for students transferring to Ivy League and top schools. We handle Common App, essays, and transfer strategy.",
    url: "https://sosadmissions.com/college-transfers/",
    type: "website",
  },
};

export default function CollegeTransfersPage() {
  return <ServicePageTemplate slug="college-admissions-transfer" />;
}
