import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sosadmissions.com";

  // Core pages (same URL set as the old WordPress sitemap)
  const corePages = [
    { url: `${baseUrl}/`, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/services/`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/about-us/`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact-us/`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/client-testimonials/`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/faq/`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/blog/`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/admissions-options-page/`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/purchase/`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/payment/`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/info-form/`, changeFrequency: "monthly" as const, priority: 0.4 },
    { url: `${baseUrl}/privacy-policy/`, changeFrequency: "yearly" as const, priority: 0.3 },
  ].map((p) => ({ ...p, lastModified: new Date() }));

  // Service pages — old-site URLs preserved exactly
  const servicePages = [
    "college-admissions",
    "college-transfers",
    "graduate-school-application",
    "graduate-school-interview",
    "mba",
    "mba-interview",
    "law-school-application",
    "medical-school-application",
    "medical-school-admissions-consulting",
    "medical-school-interview",
    "medical-residency",
    "medical-residency-interview",
    "general-nursing",
    "np-admissions",
    "crna-admissions",
    "personal-statement",
    "private-school-admissions",
    "college-interviews",
    "computer-science-admissions-consultant",
    "psychology-counseling-admissions",
    "bs-md-admissions-consulting",
    "dental-school-application",
    "phd-application-consulting",
    "veterinary-school-admissions",
    "international-students",
    "pa-school-admissions-consulting",
    "nursing-school-admissions-consulting",
    "sat-act-preparation",
    "letters-of-recommendation",
    "academic-crisis-consulting",
  ].map((slug) => ({
    url: `${baseUrl}/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog posts — root-level on old site, under /blog/ on new site
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...corePages, ...servicePages, ...blogPages];
}
