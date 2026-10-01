import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: { absolute: 'Nursing School Admissions Consulting Services | SOS Admissions' },
  description:
    'Expert nursing school admissions consulting. Get help with NursingCAS applications, personal statements, interviews, and application strategy for ASN, BSN, MSN, and Nurse Practitioner programs.',
  alternates: {
    canonical: 'https://sosadmissions.com/general-nursing/',
  },
  openGraph: {
    title: 'Nursing School Admissions Consulting Services | SOS Admissions',
    description:
      'Expert nursing school admissions consulting. Get help with NursingCAS applications, personal statements, interviews, and application strategy for ASN, BSN, MSN, and Nurse Practitioner programs.',
    url: 'https://sosadmissions.com/general-nursing/',
    type: 'website',
  },
};

export default function GeneralNursingPage() {
  return <ServicePageTemplate slug="general-nursing" />;
}
