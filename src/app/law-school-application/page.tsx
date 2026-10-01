import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: { absolute: 'Law School Application Consulting | LSAC & Personal Statements' },
  description:
    'Expert law school application consulting for LSAC, personal statements, and T14 admissions. 96% acceptance rate to top law schools nationwide.',
  alternates: {
    canonical: 'https://sosadmissions.com/law-school-application/',
  },
  openGraph: {
    title: 'Law School Application Consulting | LSAC & Personal Statements',
    description:
      'Expert law school application consulting for LSAC, personal statements, and T14 admissions. 96% acceptance rate to top law schools nationwide.',
    url: 'https://sosadmissions.com/law-school-application/',
    type: 'website',
  },
};

export default function LawSchoolApplicationPage() {
  return <ServicePageTemplate slug="law-school" />;
}
