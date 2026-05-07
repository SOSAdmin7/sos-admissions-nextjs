import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Interview Coaching & Preparation',
  description:
    'One-on-one and group interview preparation with multiple practice sessions. Mock interviews with expert feedback.',
  openGraph: {
    title: 'Interview Coaching & Preparation',
    description:
      'One-on-one and group interview preparation with multiple practice sessions.',
    type: 'website',
  },
};

export default function CollegeInterviewsPage() {
  return <ServicePageTemplate slug="interview-coaching" />;
}
