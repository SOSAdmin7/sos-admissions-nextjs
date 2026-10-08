import { pageMetadata } from "@/lib/page-metadata";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "PhD Application Consulting - SOS Admissions" },
  description:
    "PhD application consulting, including program selection, personal statements, supplemental essays, resumes and CVs, recommendation materials, and interview preparation.",
  alternates: {
    canonical: "https://sosadmissions.com/phd-application-consulting/",
  },
  openGraph: {
    title: "PhD Application Consulting - SOS Admissions",
    description:
      "PhD application consulting, including program selection, personal statements, supplemental essays, resumes and CVs, recommendation materials, and interview preparation.",
    url: "https://sosadmissions.com/phd-application-consulting/",
    type: "website",
  },
});

export default function PhDApplicationPage() {
  return <ServicePageTemplate slug="phd-programs" />;
}
