import { pageMetadata } from "@/lib/page-metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";
export const metadata = pageMetadata({
  title: "Speech-Language Pathology Admissions Consulting",
  description: "Speech-language pathology admissions consulting, including application planning, personal statements, recommendation materials, resumes, and interview preparation.",
  alternates: {
    canonical:
      "https://sosadmissions.com/speech-language-pathology-slp-admissions-consultant/",
  },
});
export default function Page() {
  return <ServicePageTemplate slug="speech-language-pathology" />;
}
