import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'College Transfer Admissions Consulting',
  description:
    'Strategic guidance for community college and current university students transferring up. Transfer narrative development and GPA optimization.',
  openGraph: {
    title: 'College Transfer Admissions Consulting',
    description:
      'Strategic guidance for community college and current university students transferring up.',
    type: 'website',
  },
};

export default function CollegeTransfersPage() {
  return <ServicePageTemplate slug="college-admissions-transfer" />;
}
