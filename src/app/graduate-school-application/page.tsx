import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Graduate School Application Consulting',
  description:
    'Specialized guidance for Master\'s program applications. Statement of purpose, GRE/GMAT prep, and program selection strategy.',
  openGraph: {
    title: 'Graduate School Application Consulting',
    description:
      'Specialized guidance for Master\'s program applications across all disciplines.',
    type: 'website',
  },
};

export default function GraduateSchoolApplicationPage() {
  return <ServicePageTemplate slug="masters-degree" />;
}
