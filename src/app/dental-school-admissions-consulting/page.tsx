import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Dental School Admissions Consulting | SOS Admissions',
  description:
    'Expert guidance for students pursuing DDS/DMD programs. DAT preparation, dental experience coordination, and interview coaching.',
  openGraph: {
    title: 'Dental School Admissions Consulting | SOS Admissions',
    description: 'Expert guidance for students pursuing DDS/DMD programs.',
    type: 'website',
  },
};

export default function DentalSchoolAdmissionsPage() {
  return <ServicePageTemplate slug="dental-school" />;
}
