import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/thank-you", "/thank-you-payment"],
    },
    sitemap: "https://sosadmissions.com/sitemap.xml",
  };
}
