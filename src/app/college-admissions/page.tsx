import { pageMetadata } from "@/lib/page-metadata";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
export const metadata: Metadata = pageMetadata({
  title: {
    absolute: "College Admissions Consulting & Counseling - SOS Admissions",
  },
  description:
    "Expert college admissions consulting for Common App, UC applications, essays, and interviews. Get into your dream school.",
  alternates: {
    canonical: "https://sosadmissions.com/college-admissions/",
  },
  openGraph: {
    title: "College Admissions Consulting & Counseling - SOS Admissions",
    description:
      "Expert college admissions consulting for Common App, UC applications, essays, and interviews. Get into your dream school.",
    url: "https://sosadmissions.com/college-admissions/",
    type: "website",
  },
});
export default function Page() {
  return <ServicePageTemplate slug="college-admissions-freshman" />;
}
