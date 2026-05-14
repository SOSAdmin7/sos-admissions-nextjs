import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'General Nursing Admissions Consulting',
  description:
    'Application help for BSN, ABSN, direct-entry MSN, and other general nursing pathways.',
  openGraph: {
    title: 'General Nursing Admissions Consulting',
    description: 'Application help for BSN, ABSN, direct-entry MSN, and other general nursing pathways.',
    type: 'website',
  },
};

export default function GeneralNursingPage() {
  return <ServicePageTemplate slug="general-nursing" />;
}
