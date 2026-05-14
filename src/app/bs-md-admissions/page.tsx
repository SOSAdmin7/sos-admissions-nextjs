import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'BS/MD Program Admissions Consulting',
  description:
    'Focused advising for high school students applying to accelerated and direct medical programs.',
  openGraph: {
    title: 'BS/MD Program Admissions Consulting',
    description: 'Focused advising for high school students applying to accelerated and direct medical programs.',
    type: 'website',
  },
};

export default function BSMDAdmissionsPage() {
  return <ServicePageTemplate slug="bs-md-programs" />;
}
