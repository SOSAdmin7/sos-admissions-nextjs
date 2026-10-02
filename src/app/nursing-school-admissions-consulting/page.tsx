import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: { absolute: "Nursing School Admissions Consulting - SOS Admissions" },
  description:
    "Expert nursing school admissions consulting. Get help with NursingCAS applications, personal statements, interviews, and school selection.",
  alternates: {
    canonical:
      "https://sosadmissions.com/nursing-school-admissions-consulting/",
  },
  openGraph: {
    title: "Nursing School Admissions Consulting - SOS Admissions",
    description:
      "Expert nursing school admissions consulting. Get help with NursingCAS applications, personal statements, interviews, and school selection.",
    url: "https://sosadmissions.com/nursing-school-admissions-consulting/",
    type: "website",
  },
};

export default function NursingSchoolAdmissionsPage() {
  return <ServicePageTemplate slug="nursing-programs" />;
}
