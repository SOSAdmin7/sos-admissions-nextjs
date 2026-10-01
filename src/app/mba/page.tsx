import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: { absolute: 'MBA Application Consulting Service - SOS Admissions' },
  description:
    'Expert MBA admissions consulting for top business schools. Full-service help with essays, interviews, school selection, and GMAT prep for HBS, Stanford, Wharton.',
  alternates: {
    canonical: 'https://sosadmissions.com/mba/',
  },
  openGraph: {
    title: 'MBA Application Consulting Service - SOS Admissions',
    description:
      'Expert MBA admissions consulting for top business schools. Full-service help with essays, interviews, school selection, and GMAT prep for HBS, Stanford, Wharton.',
    url: 'https://sosadmissions.com/mba/',
    type: 'website',
  },
};

export default function MBAPage() {
  return <ServicePageTemplate slug="mba-programs" />;
}
