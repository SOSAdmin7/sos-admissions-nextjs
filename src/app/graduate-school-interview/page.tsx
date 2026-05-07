import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Graduate School Interview Preparation',
  description:
    'Expert interview coaching for graduate school admissions. Mock interviews and feedback for Master\'s and PhD programs.',
  openGraph: {
    title: 'Graduate School Interview Preparation',
    description:
      'Expert interview coaching for graduate school admissions.',
    type: 'website',
  },
};

export default function GraduateSchoolInterviewPage() {
  return <ServicePageTemplate slug="interview-coaching" />;
}
