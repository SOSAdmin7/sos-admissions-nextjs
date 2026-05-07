import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Medical School Interview Preparation | SOS Admissions',
  description:
    'Specialized interview coaching for medical school admissions. MMI and traditional interview preparation with expert feedback.',
  openGraph: {
    title: 'Medical School Interview Preparation | SOS Admissions',
    description:
      'Specialized interview coaching for medical school admissions.',
    type: 'website',
  },
};

export default function MedicalSchoolInterviewPage() {
  return <ServicePageTemplate slug="interview-coaching" />;
}
