import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: { absolute: 'Medical Residency Application Consulting - SOS Admissions' },
  description:
    'Expert medical residency consulting for ERAS applications, personal statements, and the Match. 98.4% match rate. Full-service support from application to match day.',
  alternates: {
    canonical: 'https://sosadmissions.com/medical-residency/',
  },
  openGraph: {
    title: 'Medical Residency Application Consulting - SOS Admissions',
    description:
      'Expert medical residency consulting for ERAS applications, personal statements, and the Match. 98.4% match rate. Full-service support from application to match day.',
    url: 'https://sosadmissions.com/medical-residency/',
    type: 'website',
  },
};

export default function MedicalResidencyPage() {
  return <ServicePageTemplate slug="medical-residency" />;
}
