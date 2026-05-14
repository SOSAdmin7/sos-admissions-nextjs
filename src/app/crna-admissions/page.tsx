import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'CRNA Admissions Consulting',
  description:
    'Admissions support for nurse anesthesia applicants applying to competitive CRNA and DNP-CRNA programs.',
  openGraph: {
    title: 'CRNA Admissions Consulting',
    description: 'Admissions support for nurse anesthesia applicants applying to competitive CRNA and DNP-CRNA programs.',
    type: 'website',
  },
};

export default function CRNAAdmissionsPage() {
  return <ServicePageTemplate slug="crna-admissions" />;
}
