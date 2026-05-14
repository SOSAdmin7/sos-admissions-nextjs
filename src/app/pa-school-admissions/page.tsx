import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'PA School Admissions Consulting',
  description:
    'Application strategy for physician assistant applicants using CASPA and school-specific supplemental materials.',
  openGraph: {
    title: 'PA School Admissions Consulting',
    description: 'Application strategy for physician assistant applicants using CASPA and school-specific supplemental materials.',
    type: 'website',
  },
};

export default function PASchoolAdmissionsPage() {
  return <ServicePageTemplate slug="pa-school-admissions" />;
}
