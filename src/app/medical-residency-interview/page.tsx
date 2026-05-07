import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Medical Residency Interview Preparation | SOS Admissions',
  description:
    'Specialized interview coaching for medical residency programs. Program selection strategy and interview practice sessions.',
  openGraph: {
    title: 'Medical Residency Interview Preparation | SOS Admissions',
    description:
      'Specialized interview coaching for medical residency programs.',
    type: 'website',
  },
};

export default function MedicalResidencyInterviewPage() {
  return <ServicePageTemplate slug="interview-coaching" />;
}
