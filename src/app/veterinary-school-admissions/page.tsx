import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Veterinary School Admissions Consulting',
  description:
    'Application strategy for DVM applicants who need help positioning animal, veterinary, and academic experience.',
  openGraph: {
    title: 'Veterinary School Admissions Consulting',
    description: 'Application strategy for DVM applicants who need help positioning animal, veterinary, and academic experience.',
    type: 'website',
  },
};

export default function VeterinarySchoolAdmissionsPage() {
  return <ServicePageTemplate slug="veterinary-school-admissions" />;
}
