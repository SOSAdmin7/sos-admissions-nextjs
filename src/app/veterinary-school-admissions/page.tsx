import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: { absolute: 'Veterinary School Admissions Consulting - SOS Admissions' },
  description:
    'Expert veterinary school admissions consulting for DVM programs. Get help with VMCAS applications, personal statements, veterinary experience descriptions, and interview prep.',
  alternates: {
    canonical: 'https://sosadmissions.com/veterinary-school-admissions/',
  },
  openGraph: {
    title: 'Veterinary School Admissions Consulting - SOS Admissions',
    description:
      'Expert veterinary school admissions consulting for DVM programs. Get help with VMCAS applications, personal statements, veterinary experience descriptions, and interview prep.',
    url: 'https://sosadmissions.com/veterinary-school-admissions/',
    type: 'website',
  },
};

export default function VeterinarySchoolAdmissionsPage() {
  return <ServicePageTemplate slug="veterinary-school-admissions" />;
}
