import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'MBA Interview Preparation',
  description:
    'Expert interview coaching for MBA programs. Mock interviews, storytelling techniques, and behavioral interview preparation.',
  openGraph: {
    title: 'MBA Interview Preparation',
    description:
      'Expert interview coaching for MBA programs.',
    type: 'website',
  },
};

export default function MBAInterviewPage() {
  return <ServicePageTemplate slug="interview-coaching" />;
}
