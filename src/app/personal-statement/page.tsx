import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: { absolute: 'Personal Statement Writing & Editing Services - SOS Admissions' },
  description:
    'Expert personal statement writing for college, grad school, MBA, and law school applications. Professional editing to make your story stand out.',
  alternates: {
    canonical: 'https://sosadmissions.com/personal-statement/',
  },
  openGraph: {
    title: 'Personal Statement Writing & Editing Services - SOS Admissions',
    description:
      'Expert personal statement writing for college, grad school, MBA, and law school applications. Professional editing to make your story stand out.',
    url: 'https://sosadmissions.com/personal-statement/',
    type: 'website',
  },
};

export default function PersonalStatementPage() {
  return <ServicePageTemplate slug="personal-statement-writing" />;
}
