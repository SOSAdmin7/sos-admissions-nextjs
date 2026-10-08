import { pageMetadata } from "@/lib/page-metadata";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = pageMetadata({
  title: {
    absolute:
      "College Interview Coaching | Alumni & Ivy League Prep - SOS Admissions",
  },
  description:
    "Expert college interview coaching for alumni interviews, on-campus interviews, and Ivy League admissions. Practice mock interviews and ace your college interview.",
  alternates: {
    canonical: "https://sosadmissions.com/college-interviews/",
  },
  openGraph: {
    title:
      "College Interview Coaching | Alumni & Ivy League Prep - SOS Admissions",
    description:
      "Expert college interview coaching for alumni interviews, on-campus interviews, and Ivy League admissions. Practice mock interviews and ace your college interview.",
    url: "https://sosadmissions.com/college-interviews/",
    type: "website",
  },
});

export default function CollegeInterviewsPage() {
  return (
    <ServicePageTemplate
      slug="interview-coaching"
      legacyVariant="college-interviews"
    />
  );
}
