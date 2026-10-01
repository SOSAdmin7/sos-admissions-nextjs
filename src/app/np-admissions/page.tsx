import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: { absolute: 'Nurse Practitioner Admissions Consulting Services' },
  description:
    'Expert nurse practitioner admissions consulting. Get help with NP school applications, CASPA, personal statements, clinical hours, and interviews for FNP, AGACNP programs.',
  alternates: {
    canonical: 'https://sosadmissions.com/np-admissions/',
  },
  openGraph: {
    title: 'Nurse Practitioner Admissions Consulting Services',
    description:
      'Expert nurse practitioner admissions consulting. Get help with NP school applications, CASPA, personal statements, clinical hours, and interviews for FNP, AGACNP programs.',
    url: 'https://sosadmissions.com/np-admissions/',
    type: 'website',
  },
};

export default function NursePractitionerAdmissionsPage() {
  return <ServicePageTemplate slug="nurse-practitioner-admissions" />;
}
