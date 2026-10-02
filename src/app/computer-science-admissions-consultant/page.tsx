import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: {
    absolute: "Computer Science Admissions Consulting - SOS Admissions",
  },
  description:
    "Expert computer science admissions consulting for CS MS and PhD programs in computing, systems, theory, HCI, security, and all CS specializations at MIT, Stanford, Carnegie Mellon, and top universities.",
  alternates: {
    canonical:
      "https://sosadmissions.com/computer-science-admissions-consultant/",
  },
  openGraph: {
    title: "Computer Science Admissions Consulting - SOS Admissions",
    description:
      "Expert computer science admissions consulting for CS MS and PhD programs in computing, systems, theory, HCI, security, and all CS specializations at MIT, Stanford, Carnegie Mellon, and top universities.",
    url: "https://sosadmissions.com/computer-science-admissions-consultant/",
    type: "website",
  },
};

export default function ComputerScienceAdmissionsPage() {
  return <ServicePageTemplate slug="computer-science-admissions" />;
}
