import type { MetadataRoute } from "next";

// Mirrors the old site's robots.txt (plus /api/ which has no old-site equivalent)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/privacy-policy", "/api/"],
    },
    sitemap: "https://sosadmissions.com/sitemap.xml",
  };
}
