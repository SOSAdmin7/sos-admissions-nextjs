import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: {
    absolute:
      "BS/MD Admissions Consulting | Combined Programs | SOS Admissions",
  },
  description:
    "Expert BS/MD admissions consulting for combined 6, 7, and 8-year medical programs. Profile building, essays, and interview prep for Brown PLME, Rice/Baylor, and more. Call 310-951-4008.",
  alternates: {
    canonical: "https://sosadmissions.com/bs-md-admissions-consulting/",
  },
  openGraph: {
    title: "BS/MD Admissions Consulting | Combined Programs | SOS Admissions",
    description:
      "Expert BS/MD admissions consulting for combined 6, 7, and 8-year medical programs. Profile building, essays, and interview prep for Brown PLME, Rice/Baylor, and more. Call 310-951-4008.",
    url: "https://sosadmissions.com/bs-md-admissions-consulting/",
    type: "website",
  },
};

export default function BSMDAdmissionsPage() {
  return <ServicePageTemplate slug="bs-md-programs" />;
}
