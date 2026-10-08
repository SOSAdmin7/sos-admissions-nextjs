import type { MetadataRoute } from "next";

// Public sitemap pages, including the privacy policy, must remain crawlable.
// The preview is kept out of search by the middleware's X-Robots-Tag header.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://sosadmissions.com/sitemap.xml",
  };
}
