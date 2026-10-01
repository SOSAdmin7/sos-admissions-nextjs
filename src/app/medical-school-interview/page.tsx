import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: { absolute: 'Medical School Interview Coaching | MMI & Traditional - SOS Admissions' },
  description:
    'Expert medical school interview coaching for MMI and traditional interviews. Mock interviews, question prep, and strategies to ace your med school interview.',
  alternates: {
    canonical: 'https://sosadmissions.com/medical-school-interview/',
  },
  openGraph: {
    title: 'Medical School Interview Coaching | MMI & Traditional - SOS Admissions',
    description:
      'Expert medical school interview coaching for MMI and traditional interviews. Mock interviews, question prep, and strategies to ace your med school interview.',
    url: 'https://sosadmissions.com/medical-school-interview/',
    type: 'website',
  },
};

export default function MedicalSchoolInterviewPage() {
  return <ServicePageTemplate slug="interview-coaching" legacyVariant="medical-school-interview" />;
}
