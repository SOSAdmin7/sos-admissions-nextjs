import { Metadata } from "next";
import { services, getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/ServicePageTemplate";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Each service detail page duplicates a root-level page that mirrors the old
// site's URL structure. Canonicalize to the root-level URL so Google indexes
// the same URL set as sosadmissions.com.

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const canonicalPath = `/${service.sourceSlug}/`;

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: {
      canonical: `https://sosadmissions.com${canonicalPath}`,
    },
    openGraph: {
      title: service.title,
      description: service.shortDescription,
      type: "website",
    },
    keywords: [
      service.title.toLowerCase(),
      "admissions consulting",
      "application coaching",
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
