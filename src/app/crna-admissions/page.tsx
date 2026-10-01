import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: { absolute: 'CRNA School Admissions Consulting Services | SOS Admissions' },
  description:
    'Expert CRNA school admissions consulting. Get help with NursingCAS applications, personal statements, interviews, and shadowing hours for nurse anesthetist programs.',
  alternates: {
    canonical: 'https://sosadmissions.com/crna-admissions/',
  },
  openGraph: {
    title: 'CRNA School Admissions Consulting Services | SOS Admissions',
    description:
      'Expert CRNA school admissions consulting. Get help with NursingCAS applications, personal statements, interviews, and shadowing hours for nurse anesthetist programs.',
    url: 'https://sosadmissions.com/crna-admissions/',
    type: 'website',
  },
};

export default function CRNAAdmissionsPage() {
  return <ServicePageTemplate slug="crna-admissions" />;
}
