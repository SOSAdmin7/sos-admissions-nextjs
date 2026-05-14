import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Psychology & Counseling Admissions Consulting',
  description:
    'Application support for counseling, clinical psychology, MFT, and related graduate programs.',
  openGraph: {
    title: 'Psychology & Counseling Admissions Consulting',
    description: 'Application support for counseling, clinical psychology, MFT, and related graduate programs.',
    type: 'website',
  },
};

export default function PsychologyCounselingAdmissionsPage() {
  return <ServicePageTemplate slug="psychology-counseling-admissions" />;
}
