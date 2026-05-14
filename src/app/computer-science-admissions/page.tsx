import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Computer Science Admissions Consulting',
  description:
    'Strategic guidance for MS, MEng, and PhD applications in computer science, data science, and adjacent technical fields.',
  openGraph: {
    title: 'Computer Science Admissions Consulting',
    description: 'Strategic guidance for MS, MEng, and PhD applications in computer science, data science, and adjacent technical fields.',
    type: 'website',
  },
};

export default function ComputerScienceAdmissionsPage() {
  return <ServicePageTemplate slug="computer-science-admissions" />;
}
