import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Nurse Practitioner Admissions Consulting',
  description:
    'Guidance for MSN and DNP applicants pursuing nurse practitioner pathways across specialties.',
  openGraph: {
    title: 'Nurse Practitioner Admissions Consulting',
    description: 'Guidance for MSN and DNP applicants pursuing nurse practitioner pathways across specialties.',
    type: 'website',
  },
};

export default function NursePractitionerAdmissionsPage() {
  return <ServicePageTemplate slug="nurse-practitioner-admissions" />;
}
