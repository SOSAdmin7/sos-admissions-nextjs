import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: { absolute: 'PhD Application Consulting - SOS Admissions' },
  description:
    'Our Graduate School Admissions Consultants can help you gain admissions to top graduate programs including Masters and Doctoral (Ph.D.) programs in a wide range of fields.',
  alternates: {
    canonical: 'https://sosadmissions.com/phd-application-consulting/',
  },
  openGraph: {
    title: 'PhD Application Consulting - SOS Admissions',
    description:
      'Our Graduate School Admissions Consultants can help you gain admissions to top graduate programs including Masters and Doctoral (Ph.D.) programs in a wide range of fields.',
    url: 'https://sosadmissions.com/phd-application-consulting/',
    type: 'website',
  },
};

export default function PhDApplicationPage() {
  return <ServicePageTemplate slug="phd-programs" />;
}
