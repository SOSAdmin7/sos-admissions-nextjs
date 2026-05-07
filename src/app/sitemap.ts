import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sosadmissions.com";

  // Core pages
  const corePages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/about-us`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/client-testimonials`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/payment`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  // Service pages (old URLs preserved for SEO)
  const servicePages = [
    "college-admissions",
    "graduate-school-application",
    "mba",
    "medical-school-application",
    "medical-residency",
    "law-school-application",
    "private-school-admissions",
    "dental-school-admissions-consulting",
    "personal-statement",
    "college-interviews",
    "international-students",
    "college-transfers",
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...corePages, ...servicePages];
}
