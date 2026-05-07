import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Medical Residency Matching Consulting',
  description:
    'Specialized guidance for matching into competitive residency programs. Specialty selection, research optimization, and interview preparation.',
  openGraph: {
    title: 'Medical Residency Matching Consulting',
    description: 'Specialized guidance for matching into competitive residency programs.',
    type: 'website',
  },
};

export default function MedicalResidencyPage() {
  return <ServicePageTemplate slug="medical-residency" />;
}
