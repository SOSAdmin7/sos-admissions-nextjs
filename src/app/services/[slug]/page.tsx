import { Metadata } from 'next';
import { services, getServiceBySlug } from '@/data/services';
import { notFound } from 'next/navigation';
import ServicePageTemplate from '@/components/ServicePageTemplate';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Each service detail page duplicates a root-level page that mirrors the old
// site's URL structure. Canonicalize to the root-level URL so Google indexes
// the same URL set as sosadmissions.com.
const CANONICAL_PATHS: Record<string, string> = {
  'college-admissions-freshman': '/college-admissions/',
  'college-admissions-transfer': '/college-transfers/',
  'masters-degree': '/graduate-school-application/',
  'phd-programs': '/phd-application-consulting/',
  'mba-programs': '/mba/',
  'medical-school': '/medical-school-application/',
  'medical-school-consulting': '/medical-school-admissions-consulting/',
  'dental-school': '/dental-school-application/',
  'law-school': '/law-school-application/',
  'medical-residency': '/medical-residency/',
  'nursing-programs': '/general-nursing/',
  'general-nursing': '/general-nursing/',
  'nurse-practitioner-admissions': '/np-admissions/',
  'crna-admissions': '/crna-admissions/',
  'pa-school': '/pa-school-admissions-consulting/',
  'pa-school-admissions': '/pa-school-admissions-consulting/',
  'computer-science-admissions': '/computer-science-admissions-consultant/',
  'psychology-counseling-admissions': '/psychology-counseling-admissions/',
  'bs-md-programs': '/bs-md-admissions-consulting/',
  'veterinary-school-admissions': '/veterinary-school-admissions/',
  'personal-statement-writing': '/personal-statement/',
  'interview-coaching': '/college-interviews/',
  'letters-of-recommendation': '/letters-of-recommendation/',
  'standardized-test-prep': '/sat-act-preparation/',
  'international-students': '/international-students/',
  'private-school-k12': '/private-school-admissions/',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const canonicalPath = CANONICAL_PATHS[slug] ?? `/services/${slug}/`;

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: {
      canonical: `https://sosadmissions.com${canonicalPath}`,
    },
    openGraph: {
      title: service.title,
      description: service.shortDescription,
      type: 'website',
    },
    keywords: [
      service.title.toLowerCase(),
      'admissions consulting',
      'application coaching',
      ...service.features.slice(0, 3),
    ],
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate slug={slug} />;
}
