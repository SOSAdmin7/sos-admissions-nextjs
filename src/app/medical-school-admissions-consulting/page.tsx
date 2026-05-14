import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Medical School Admissions Consulting',
  description:
    'High-touch strategic advising for applicants who need end-to-end medical school application planning.',
  openGraph: {
    title: 'Medical School Admissions Consulting',
    description: 'High-touch strategic advising for applicants who need end-to-end medical school application planning.',
    type: 'website',
  },
};

export default function MedicalSchoolAdmissionsConsultingPage() {
  return <ServicePageTemplate slug="medical-school-consulting" />;
}
