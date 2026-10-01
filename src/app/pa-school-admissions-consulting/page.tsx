import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: { absolute: 'PA School Admissions Consulting Services | SOS Admissions' },
  description:
    'Expert PA school admissions consulting. Get help with CASPA applications, personal statements, interviews, and patient care hours for physician assistant programs.',
  alternates: {
    canonical: 'https://sosadmissions.com/pa-school-admissions-consulting/',
  },
  openGraph: {
    title: 'PA School Admissions Consulting Services | SOS Admissions',
    description:
      'Expert PA school admissions consulting. Get help with CASPA applications, personal statements, interviews, and patient care hours for physician assistant programs.',
    url: 'https://sosadmissions.com/pa-school-admissions-consulting/',
    type: 'website',
  },
};

export default function PASchoolAdmissionsPage() {
  return <ServicePageTemplate slug="pa-school-admissions" />;
}
