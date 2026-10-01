import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: { absolute: 'Medical School Admissions Consultant | MD & DO Programs - SOS Admissions' },
  description:
    'Expert medical school admissions consultant for AMCAS, AACOMAS, DO, BS/MD, and Caribbean programs. 95.3% acceptance rate. Personalized strategies for aspiring doctors.',
  alternates: {
    canonical: 'https://sosadmissions.com/medical-school-admissions-consulting/',
  },
  openGraph: {
    title: 'Medical School Admissions Consultant | MD & DO Programs - SOS Admissions',
    description:
      'Expert medical school admissions consultant for AMCAS, AACOMAS, DO, BS/MD, and Caribbean programs. 95.3% acceptance rate. Personalized strategies for aspiring doctors.',
    url: 'https://sosadmissions.com/medical-school-admissions-consulting/',
    type: 'website',
  },
};

export default function MedicalSchoolAdmissionsConsultingPage() {
  return <ServicePageTemplate slug="medical-school-consulting" />;
}
