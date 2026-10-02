import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: {
    absolute:
      "Graduate School Admissions Consulting | PhD & Masters - SOS Admissions",
  },
  description:
    "Expert graduate school admissions consulting for PhD, masters, and doctoral programs across all fields. Personal statements, interviews, and application strategy.",
  alternates: {
    canonical: "https://sosadmissions.com/graduate-school-application/",
  },
  openGraph: {
    title:
      "Graduate School Admissions Consulting | PhD & Masters - SOS Admissions",
    description:
      "Expert graduate school admissions consulting for PhD, masters, and doctoral programs across all fields. Personal statements, interviews, and application strategy.",
    url: "https://sosadmissions.com/graduate-school-application/",
    type: "website",
  },
};

export default function GraduateSchoolApplicationPage() {
  return <ServicePageTemplate slug="masters-degree" />;
}
