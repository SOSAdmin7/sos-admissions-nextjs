import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Private School Admissions Consulting | SOS Admissions',
  description:
    'Expert guidance for independent and selective K-12 school admissions. Family narrative development and interview preparation.',
  openGraph: {
    title: 'Private School Admissions Consulting | SOS Admissions',
    description: 'Expert guidance for independent and selective K-12 school admissions.',
    type: 'website',
  },
};

export default function PrivateSchoolAdmissionsPage() {
  return <ServicePageTemplate slug="private-school-k12" />;
}
