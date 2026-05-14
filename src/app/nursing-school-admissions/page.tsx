import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Nursing School Admissions Consulting',
  description:
    'Guidance for BSN, MSN, NP, CRNA, and DNP program applications.',
  openGraph: {
    title: 'Nursing School Admissions Consulting',
    description: 'Guidance for BSN, MSN, NP, CRNA, and DNP program applications.',
    type: 'website',
  },
};

export default function NursingSchoolAdmissionsPage() {
  return <ServicePageTemplate slug="nursing-programs" />;
}
