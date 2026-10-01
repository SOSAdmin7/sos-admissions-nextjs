import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HeroSection, TrustBar, UniversityLogos } from './AboveFold';

const BelowFoldContent = dynamic(() => import('./CollegeAdmissionsContent'), {
  loading: () => <div className="min-h-screen" />,
});

export const metadata: Metadata = {
  title: { absolute: 'College Admissions Consulting & Counseling - SOS Admissions' },
  description:
    'Expert college admissions consulting for Common App, UC applications, essays, and interviews. 98% acceptance rate to top colleges. Get into your dream school.',
  alternates: {
    canonical: 'https://sosadmissions.com/college-admissions/',
  },
  openGraph: {
    title: 'College Admissions Consulting & Counseling - SOS Admissions',
    description:
      'Expert college admissions consulting for Common App, UC applications, essays, and interviews. 98% acceptance rate to top colleges. Get into your dream school.',
    url: 'https://sosadmissions.com/college-admissions/',
    type: 'website',
  },
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is SOS Admissions different from other college consultants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our team includes former admissions committee members from U. Chicago, UCLA Anderson, Claremont McKenna, and other selective institutions. We have been doing this for 27 years and have guided thousands of students. Our pricing is transparent and published. Every service is clearly priced on our website so families can plan with confidence.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should we start working with a consultant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ideal time to begin is the spring of junior year. That said, we work with students at every stage, including seniors after Early Decision results.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you guarantee admission to a specific school?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No ethical consultant can guarantee admission. We guarantee our process, our expertise, and our commitment. Our 98% client acceptance rate across 27 years speaks to our track record.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the free initial consultation include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 15 to 20 minute call where we learn about your academic profile, goals, and timeline. No obligation and no pressure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with international students?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We have served students from over 80 countries. We offer WhatsApp and Zoom communication for international families.',
      },
    },
  ],
};

const serviceStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'College Admissions Consulting',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'SOS Admissions',
    url: 'https://sosadmissions.com',
    foundingDate: '1998',
    telephone: '+1-310-951-4008',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Los Angeles',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
  },
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '465',
    highPrice: '13300',
    priceCurrency: 'USD',
  },
};

export default function CollegeAdmissionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      <HeroSection />
      <TrustBar />
      <UniversityLogos />
      <BelowFoldContent />
    </>
  );
}
