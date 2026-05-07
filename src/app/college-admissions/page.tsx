import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HeroSection, TrustBar, UniversityLogos } from './AboveFold';

const BelowFoldContent = dynamic(() => import('./CollegeAdmissionsContent'), {
  loading: () => <div className="min-h-screen" />,
});

export const metadata: Metadata = {
  title: 'College Admissions Consulting | Expert Help Since 1998',
  description:
    'Get into your dream college with guidance from former admissions officers. 27+ years, 98% acceptance rate to top colleges. Transparent pricing from $5,175. Free consultation.',
  keywords: [
    'college admissions consulting',
    'college application help',
    'college admissions counselor',
    'college essay help',
    'common app essay editing',
    'college interview prep',
    'private college counselor',
    'admissions consulting Los Angeles',
  ],
  openGraph: {
    title: 'College Admissions Consulting',
    description:
      '27+ years helping students get into top colleges. Former admissions officers. 98% acceptance rate. Transparent pricing. Free consultation.',
    type: 'website',
    url: 'https://sosadmissions.com/college-admissions',
  },
  alternates: {
    canonical: 'https://sosadmissions.com/college-admissions',
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
      name: 'What does the free consultation include?',
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
    highPrice: '10600',
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
