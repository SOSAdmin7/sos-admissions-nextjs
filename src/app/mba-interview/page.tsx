import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: {
    absolute: "MBA Interview Coaching | Business School Prep - SOS Admissions",
  },
  description:
    "Expert MBA interview coaching for top business schools. Mock interviews, case prep, and proven strategies for HBS, Stanford GSB, Wharton, and more.",
  alternates: {
    canonical: "https://sosadmissions.com/mba-interview/",
  },
  openGraph: {
    title: "MBA Interview Coaching | Business School Prep - SOS Admissions",
    description:
      "Expert MBA interview coaching for top business schools. Mock interviews, case prep, and proven strategies for HBS, Stanford GSB, Wharton, and more.",
    url: "https://sosadmissions.com/mba-interview/",
    type: "website",
  },
};

export default function MBAInterviewPage() {
  return (
    <ServicePageTemplate
      slug="interview-coaching"
      legacyVariant="mba-interview"
    />
  );
}
