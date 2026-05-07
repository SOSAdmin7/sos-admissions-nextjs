import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'MBA Admissions Consulting',
  description:
    'Strategic positioning for top-tier MBA programs. GMAT preparation, essay coaching, and interview preparation.',
  openGraph: {
    title: 'MBA Admissions Consulting',
    description: 'Strategic positioning for top-tier MBA programs including GMAT preparation.',
    type: 'website',
  },
};

export default function MBAPage() {
  return <ServicePageTemplate slug="mba-programs" />;
}
