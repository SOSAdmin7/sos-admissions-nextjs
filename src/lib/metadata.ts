import { Metadata } from 'next';

export interface MetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
  ogType?:
    | 'website'
    | 'article'
    | 'profile'
    | 'business.business';
  robots?: string;
  author?: string;
  twitterHandle?: string;
  structuredData?: any;
}

// Default site configuration
const SITE_CONFIG = {
  name: 'SOS Admissions',
  domain: 'sosadmissions.com',
  protocol: 'https',
  defaultDescription:
    'Premium college and graduate school admissions consulting. Expert guidance for 27+ years helping students gain admission to top universities.',
  defaultKeywords: [
    'college admissions',
    'graduate school',
    'MBA',
    'medical school',
    'law school',
    'admissions consulting',
    'personal statement',
    'interview coaching',
  ],
  defaultAuthor: 'SOS Admissions',
  twitterHandle: '@SOSAdmissions',
  logo: 'https://sosadmissions.com/logo.png',
  favicon: '/favicon.ico',
};

/**
 * Generate a full URL for the site
 */
export function generateUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.protocol}://${SITE_CONFIG.domain}${cleanPath}`;
}

/**
 * Generate canonical URL
 */
export function generateCanonical(path: string = ''): string {
  return generateUrl(path);
}

/**
 * Generate Open Graph (OG) tags
 */
export function generateOpenGraphTags(
  options: MetadataOptions & { title: string }
): Record<string, any> {
  return {
    title: options.title,
    description: options.description || SITE_CONFIG.defaultDescription,
    url: generateUrl(options.path),
    type: options.ogType || 'website',
    images: options.ogImage
      ? [
          {
            url: options.ogImage.startsWith('http')
              ? options.ogImage
              : generateUrl(options.ogImage),
            width: 1200,
            height: 630,
            alt: options.ogImageAlt || options.title,
            type: 'image/png',
          },
        ]
      : [],
    siteName: SITE_CONFIG.name,
  };
}

/**
 * Generate Twitter Card tags
 */
export function generateTwitterTags(
  options: MetadataOptions & { title: string }
): Record<string, any> {
  return {
    card: 'summary_large_image',
    title: options.title,
    description: options.description || SITE_CONFIG.defaultDescription,
    image: options.ogImage
      ? options.ogImage.startsWith('http')
        ? options.ogImage
        : generateUrl(options.ogImage)
      : undefined,
    creator: options.twitterHandle || SITE_CONFIG.twitterHandle,
  };
}

/**
 * Generate structured data (JSON-LD)
 */
export function generateStructuredData(
  type: 'Organization' | 'LocalBusiness' | 'WebPage' | 'BreadcrumbList' | 'Article' | 'FAQPage',
  options: MetadataOptions & { title: string }
): any {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  switch (type) {
    case 'Organization':
      return {
        ...baseData,
        name: SITE_CONFIG.name,
        url: generateUrl(),
        logo: SITE_CONFIG.logo,
        description: SITE_CONFIG.defaultDescription,
        sameAs: [
          'https://www.linkedin.com/company/sos-admissions',
          'https://www.facebook.com/sosadmissions',
          'https://twitter.com/SOSAdmissions',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          telephone: '+1-310-951-4008', // Replace with actual number
          email: 'info@sosadmissions.com',
        },
      };

    case 'LocalBusiness':
      return {
        ...baseData,
        name: SITE_CONFIG.name,
        url: generateUrl(),
        logo: SITE_CONFIG.logo,
        description: SITE_CONFIG.defaultDescription,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Beverly Hills, CA', // Customize with actual address
          addressLocality: 'Beverly Hills',
          addressRegion: 'CA',
          postalCode: '90210',
          addressCountry: 'US',
        },
        telephone: '+1-310-951-4008', // Replace with actual number
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          telephone: '+1-310-951-4008',
          email: 'info@sosadmissions.com',
        },
        foundingDate: '1998',
        areaServed: 'US',
      };

    case 'WebPage':
      return {
        ...baseData,
        name: options.title,
        description: options.description || SITE_CONFIG.defaultDescription,
        url: generateUrl(options.path),
        image: options.ogImage ? generateUrl(options.ogImage) : undefined,
        publisher: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          logo: SITE_CONFIG.logo,
        },
        isAccessibleForFree: true,
      };

    case 'Article':
      return {
        ...baseData,
        headline: options.title,
        description: options.description,
        url: generateUrl(options.path),
        image: options.ogImage ? generateUrl(options.ogImage) : undefined,
        datePublished: new Date().toISOString(),
        author: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          logo: SITE_CONFIG.logo,
        },
      };

    case 'FAQPage':
      return {
        ...baseData,
        mainEntity: options.structuredData || [],
      };

    case 'BreadcrumbList':
      return {
        ...baseData,
        itemListElement: options.structuredData || [],
      };

    default:
      return baseData;
  }
}

/**
 * Generate a breadcrumb structured data
 */
export function generateBreadcrumbs(
  items: Array<{ name: string; url?: string }>
): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? generateUrl(item.url) : undefined,
    })),
  };
}

/**
 * Main metadata generator for Next.js
 */
export function generateMetadata(
  options: MetadataOptions & { title: string }
): Metadata {
  const {
    title,
    description = SITE_CONFIG.defaultDescription,
    path = '/',
    keywords = SITE_CONFIG.defaultKeywords,
    ogImage,
    ogImageAlt,
    robots = 'index, follow',
    author = SITE_CONFIG.defaultAuthor,
    twitterHandle = SITE_CONFIG.twitterHandle,
    structuredData,
  } = options;

  const canonical = generateCanonical(path);
  const ogTags = generateOpenGraphTags({
    title,
    description,
    path,
    ogImage,
    ogImageAlt,
  });

  const twitterTags = generateTwitterTags({
    title,
    description,
    ogImage,
    twitterHandle,
  });

  return {
    title,
    description,
    keywords,
    robots,
    authors: [{ name: author }],
    creator: author,
    alternates: {
      canonical,
    },
    openGraph: ogTags,
    twitter: twitterTags,
    metadataBase: new URL(generateUrl()),
  };
}

/**
 * Home page metadata
 */
export function generateHomeMetadata(): Metadata {
  return generateMetadata({
    title: 'Premium College & Graduate School Admissions Consulting',
    description:
      'Expert admissions guidance for 27+ years. Get into your dream university. Medical school, law school, MBA, and more. 68% Ivy League placement rate.',
    path: '/',
    keywords: [
      'college admissions',
      'medical school',
      'MBA',
      'law school',
      'graduate admissions',
      'admissions consultant',
    ],
      });
}

/**
 * Services page metadata
 */
export function generateServicesMetadata(): Metadata {
  return generateMetadata({
    title: 'Comprehensive Admissions Services',
    description:
      'Full-service admissions consulting for college, graduate school, medical school, law school, MBA, and more. Expert guidance across 15+ programs.',
    path: '/services',
    keywords: [
      'admissions services',
      'college consulting',
      'medical school consulting',
      'law school consulting',
      'MBA consulting',
    ],
      });
}

/**
 * Service detail page metadata
 */
export function generateServiceMetadata(
  serviceTitle: string,
  serviceDescription: string,
  serviceSlug: string
): Metadata {
  return generateMetadata({
    title: serviceTitle,
    description: serviceDescription,
    path: `/services/${serviceSlug}`,
    keywords: [serviceTitle.toLowerCase(), 'admissions', 'consulting'],
      });
}

/**
 * About page metadata
 */
export function generateAboutMetadata(): Metadata {
  return generateMetadata({
    title: 'About SOS Admissions',
    description:
      'Learn about SOS Admissions. 27+ years of experience guiding 2,500+ students into top universities. Expert team of 50+ admissions specialists.',
    path: '/about',
    keywords: [
      'about us',
      'admissions consulting',
      'experienced consultants',
    ],
      });
}

/**
 * Testimonials page metadata
 */
export function generateTestimonialsMetadata(): Metadata {
  return generateMetadata({
    title: 'Student Success Stories & Testimonials',
    description:
      'Read inspiring stories from students who achieved their dreams with SOS Admissions. 98% client satisfaction rate.',
    path: '/testimonials',
    keywords: ['testimonials', 'success stories', 'student reviews'],
      });
}

/**
 * Blog page metadata
 */
export function generateBlogMetadata(): Metadata {
  return generateMetadata({
    title: 'Admissions Insights & Tips Blog',
    description:
      'Expert tips, guides, and insights on college admissions, essays, interviews, and more from SOS Admissions.',
    path: '/blog',
    keywords: ['admissions blog', 'admissions tips', 'college essays'],
      });
}

/**
 * Blog post metadata
 */
export function generateBlogPostMetadata(
  postTitle: string,
  postDescription: string,
  postSlug: string,
  postImage?: string
): Metadata {
  return generateMetadata({
    title: postTitle,
    description: postDescription,
    path: `/blog/${postSlug}`,
    keywords: ['admissions', 'tips', 'guide'],
    ogImage: postImage,
    ogImageAlt: postTitle,
    ogType: 'article',
  });
}

/**
 * Contact page metadata
 */
export function generateContactMetadata(): Metadata {
  return generateMetadata({
    title: 'Contact Us',
    description:
      'Get in touch with SOS Admissions. Schedule a consultation with our expert admissions consultants today.',
    path: '/contact-us',
    keywords: ['contact', 'schedule consultation', 'get in touch'],
      });
}

/**
 * FAQ page metadata
 */
export function generateFAQMetadata(): Metadata {
  return generateMetadata({
    title: 'Frequently Asked Questions',
    description:
      'Find answers to common questions about college admissions, our services, and how we can help you.',
    path: '/faq',
    keywords: ['FAQ', 'frequently asked questions', 'admissions help'],
      });
}

/**
 * Thank you page metadata (for leads)
 */
export function generateThankYouMetadata(): Metadata {
  return generateMetadata({
    title: 'Thank You',
    description:
      'Thank you for your interest in SOS Admissions. We look forward to working with you.',
    path: '/thank-you',
    robots: 'noindex, nofollow', // Don't index thank you pages
    ogType: 'website',
  });
}

/**
 * Thank you page metadata (for payment)
 */
export function generateThankYouPaymentMetadata(): Metadata {
  return generateMetadata({
    title: 'Payment Received',
    description:
      'Thank you for your payment. We look forward to getting started with you.',
    path: '/thank-you-payment',
    robots: 'noindex, nofollow', // Don't index thank you pages
    ogType: 'website',
  });
}

/**
 * Generate Organization structured data for site
 */
export function getOrganizationStructuredData(): any {
  return generateStructuredData('Organization', {
    title: SITE_CONFIG.name,
  });
}

/**
 * Generate LocalBusiness structured data
 */
export function getLocalBusinessStructuredData(): any {
  return generateStructuredData('LocalBusiness', {
    title: SITE_CONFIG.name,
  });
}

/**
 * Generate FAQ structured data
 */
export function generateFAQStructuredData(
  faqs: Array<{ question: string; answer: string }>
): any {
  return generateStructuredData('FAQPage', {
    title: 'FAQ',
    structuredData: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  });
}

/**
 * Export configuration for use throughout the app
 */
export const siteConfig = SITE_CONFIG;
