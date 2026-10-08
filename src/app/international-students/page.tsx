import { pageMetadata } from "@/lib/page-metadata";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = pageMetadata({
  title: {
    absolute:
      "Admissions Consulting for International Students - SOS Admissions",
  },
  description:
    "Admissions consulting for international students applying to U.S. colleges and graduate schools, including school selection, essays, and interview preparation.",
  alternates: {
    canonical: "https://sosadmissions.com/international-students/",
  },
  openGraph: {
    title: "Admissions Consulting for International Students - SOS Admissions",
    description:
      "Admissions consulting for international students applying to U.S. colleges and graduate schools, including school selection, essays, and interview preparation.",
    url: "https://sosadmissions.com/international-students/",
    type: "website",
  },
});

export default function InternationalStudentsPage() {
  return <ServicePageTemplate slug="international-students" />;
}
