import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'PhD Program Admissions Consulting',
  description:
    'Expert guidance for doctoral program applications including PhD, PsyD, and EdD programs.',
  openGraph: {
    title: 'PhD Program Admissions Consulting',
    description: 'Expert guidance for doctoral program applications including PhD, PsyD, and EdD programs.',
    type: 'website',
  },
};

export default function PhDApplicationPage() {
  return <ServicePageTemplate slug="phd-programs" />;
}
