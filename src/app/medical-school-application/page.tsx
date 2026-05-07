import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Medical School Application Consulting | SOS Admissions',
  description:
    'Comprehensive guidance for pre-med students pursuing MD/DO admissions. MCAT strategy, personal statement, and interview preparation.',
  openGraph: {
    title: 'Medical School Application Consulting | SOS Admissions',
    description:
      'Comprehensive guidance for pre-med students pursuing MD/DO admissions.',
    type: 'website',
  },
};

export default function MedicalSchoolApplicationPage() {
  return <ServicePageTemplate slug="medical-school" />;
}
