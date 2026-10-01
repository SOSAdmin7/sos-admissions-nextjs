import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: { absolute: 'Admissions Consulting for International Students - SOS Admissions' },
  description:
    'We have helped thousands of international students to successfully gain admissions to top colleges and graduate schools including MBA and medical school in the USA.',
  alternates: {
    canonical: 'https://sosadmissions.com/international-students/',
  },
  openGraph: {
    title: 'Admissions Consulting for International Students - SOS Admissions',
    description:
      'We have helped thousands of international students to successfully gain admissions to top colleges and graduate schools including MBA and medical school in the USA.',
    url: 'https://sosadmissions.com/international-students/',
    type: 'website',
  },
};

export default function InternationalStudentsPage() {
  return <ServicePageTemplate slug="international-students" />;
}
