import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: { absolute: "Letter of Recommendation Writer - SOS Admissions" },
  description:
    "Our Admissions Consultants will help you get a great letter of recommendation or letter of reference for college or graduate school.",
  alternates: {
    canonical: "https://sosadmissions.com/letters-of-recommendation/",
  },
  openGraph: {
    title: "Letter of Recommendation Writer - SOS Admissions",
    description:
      "Our Admissions Consultants will help you get a great letter of recommendation or letter of reference for college or graduate school.",
    type: "website",
  },
};

export default function LettersOfRecommendationPage() {
  return <ServicePageTemplate slug="letters-of-recommendation" />;
}
