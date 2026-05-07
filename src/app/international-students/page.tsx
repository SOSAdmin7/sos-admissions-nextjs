import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'International Student Admissions Consulting | SOS Admissions',
  description:
    'Specialized support for international student applications and visa navigation. Financial aid strategy and cultural fit coaching.',
  openGraph: {
    title: 'International Student Admissions Consulting | SOS Admissions',
    description: 'Specialized support for international student applications and visa navigation.',
    type: 'website',
  },
};

export default function InternationalStudentsPage() {
  return <ServicePageTemplate slug="international-students" />;
}
