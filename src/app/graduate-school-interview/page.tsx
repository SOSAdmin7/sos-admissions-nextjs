import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: { absolute: 'Graduate School Interview Coaching | PhD & Masters - SOS Admissions' },
  description:
    'Expert graduate school interview coaching for PhD, masters, and doctoral programs. Mock interviews, question prep, and proven strategies to stand out.',
  alternates: {
    canonical: 'https://sosadmissions.com/graduate-school-interview/',
  },
  openGraph: {
    title: 'Graduate School Interview Coaching | PhD & Masters - SOS Admissions',
    description:
      'Expert graduate school interview coaching for PhD, masters, and doctoral programs. Mock interviews, question prep, and proven strategies to stand out.',
    url: 'https://sosadmissions.com/graduate-school-interview/',
    type: 'website',
  },
};

export default function GraduateSchoolInterviewPage() {
  return <ServicePageTemplate slug="interview-coaching" legacyVariant="graduate-school-interview" />;
}
