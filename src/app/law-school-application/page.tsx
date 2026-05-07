import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Law School Application Consulting',
  description:
    'Strategic positioning for top law school admissions and scholarship success. LSAT strategy, personal statement, and application coaching.',
  openGraph: {
    title: 'Law School Application Consulting',
    description: 'Strategic positioning for top law school admissions and scholarship success.',
    type: 'website',
  },
};

export default function LawSchoolApplicationPage() {
  return <ServicePageTemplate slug="law-school" />;
}
