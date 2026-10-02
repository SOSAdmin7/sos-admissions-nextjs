import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: {
    absolute:
      "Private School Application Consulting Service - SOS Admissions Private School Application Consultants",
  },
  description:
    "Admissions help for private day schools and boarding schools. We help clients with all parts of their application to independent schools and private schools. This includes high school, middle school, elementary school, and primary school.",
  alternates: {
    canonical: "https://sosadmissions.com/private-school-admissions/",
  },
  openGraph: {
    title:
      "Private School Application Consulting Service - SOS Admissions Private School Application Consultants",
    description:
      "Admissions help for private day schools and boarding schools. We help clients with all parts of their application to independent schools and private schools. This includes high school, middle school, elementary school, and primary school.",
    url: "https://sosadmissions.com/private-school-admissions/",
    type: "website",
  },
};

export default function PrivateSchoolAdmissionsPage() {
  return <ServicePageTemplate slug="private-school-k12" />;
}
