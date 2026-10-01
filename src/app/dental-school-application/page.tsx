import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: { absolute: 'Dental School Admissions Consulting Services | SOS Admissions' },
  description:
    'Expert dental school admissions consulting. Get help with ADEA AADSAS applications, DAT prep, personal statements, and interviews for DDS and DMD programs.',
  alternates: {
    canonical: 'https://sosadmissions.com/dental-school-application/',
  },
  openGraph: {
    title: 'Dental School Admissions Consulting Services | SOS Admissions',
    description:
      'Expert dental school admissions consulting. Get help with ADEA AADSAS applications, DAT prep, personal statements, and interviews for DDS and DMD programs.',
    url: 'https://sosadmissions.com/dental-school-application/',
    type: 'website',
  },
};

export default function DentalSchoolAdmissionsPage() {
  return <ServicePageTemplate slug="dental-school" />;
}
