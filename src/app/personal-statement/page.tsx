import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Personal Statement Writing & Editing',
  description:
    'Professional essay coaching and editing for all types of statements. Brainstorming, narrative development, and polishing.',
  openGraph: {
    title: 'Personal Statement Writing & Editing',
    description: 'Professional essay coaching and editing for all types of statements.',
    type: 'website',
  },
};

export default function PersonalStatementPage() {
  return <ServicePageTemplate slug="personal-statement-writing" />;
}
