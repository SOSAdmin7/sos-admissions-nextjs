import type { NextConfig } from "next";
import blogAliases from "./src/data/blog-aliases.json";
import mediaRedirects from "./src/data/wordpress-media-redirects.json";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sosadmissions.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  compress: true,
  // Match old WordPress URL format exactly (https://sosadmissions.com/mba/)
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // Force www and HTTPS (matching old .htaccess behavior)
  async redirects() {
    return [
      ...mediaRedirects,
      ...Object.entries(blogAliases).map(([oldSlug, newSlug]) => ({ source: `/blog/${oldSlug}`, destination: `/blog/${newSlug}/`, permanent: true })),
      // Old WordPress backup/duplicate pages → homepage
      { source: "/:path*-old", destination: "/", permanent: true },
      {
        source: "/:path(.*)-backup-:date(.*)",
        destination: "/",
        permanent: true,
      },

      // Old WooCommerce pages
      { source: "/basket", destination: "/payment", permanent: true },
      { source: "/checkout", destination: "/payment", permanent: true },
      { source: "/my-account", destination: "/", permanent: true },
      // /purchase is now a live page (email purchase funnel) - redirect removed

      // Chinese pages (preserve paths)
      {
        source: "/chinese-contact",
        destination: "/contactchinese",
        permanent: true,
      },

      // Package/form pages → payment
      { source: "/package-form", destination: "/payment", permanent: true },
      { source: "/package-doctoral", destination: "/payment", permanent: true },
      { source: "/regular-package", destination: "/payment", permanent: true },
      {
        source: "/residency-package-first",
        destination: "/payment",
        permanent: true,
      },
      {
        source: "/additional-school",
        destination: "/payment",
        permanent: true,
      },
      {
        source: "/additional-school-v2",
        destination: "/payment",
        permanent: true,
      },
      { source: "/add-program", destination: "/payment", permanent: true },
      { source: "/add-school", destination: "/payment", permanent: true },
      // /admissions-options-page is now a live page (public purchase funnel) - redirect removed
      {
        source: "/admissions-options-page-2",
        destination: "/admissions-options-page",
        permanent: true,
      },

      // /info-form is now a live page (email info funnel) - redirect removed
      {
        source: "/preliminary-information-form2",
        destination: "/contact-us",
        permanent: true,
      },

      // Service page aliases
      {
        source: "/application-consulting",
        destination: "/services",
        permanent: true,
      },
      { source: "/sos-admissions", destination: "/about-us", permanent: true },
      {
        source: "/us-news-world-report-article",
        destination: "/about-us",
        permanent: true,
      },

      // Personal statement sub-pages → main personal statement page
      {
        source: "/college-personal-statement",
        destination: "/personal-statement",
        permanent: true,
      },
      {
        source: "/graduate-school-personal-statement",
        destination: "/personal-statement",
        permanent: true,
      },
      {
        source: "/law-school-personal-statement",
        destination: "/personal-statement",
        permanent: true,
      },
      {
        source: "/medical-school-personal-statement",
        destination: "/personal-statement",
        permanent: true,
      },
      {
        source: "/dental-school-personal-statement",
        destination: "/personal-statement",
        permanent: true,
      },
      {
        source: "/nursing-personal-statement",
        destination: "/personal-statement",
        permanent: true,
      },
      {
        source: "/phd-personal-statement",
        destination: "/personal-statement",
        permanent: true,
      },
      {
        source: "/residency-personal-statement",
        destination: "/personal-statement",
        permanent: true,
      },
      {
        source: "/mba-personal-statement",
        destination: "/personal-statement",
        permanent: true,
      },
      {
        source: "/physician-assistant-school-personal-statement",
        destination: "/personal-statement",
        permanent: true,
      },

      // Old WordPress alias pages → canonical pages (old-site URLs are canonical)
      {
        source: "/nurse-practitioner-admissions",
        destination: "/np-admissions",
        permanent: true,
      },
      {
        source: "/optometry-school-admissions-consulting",
        destination: "/graduate-school-application",
        permanent: true,
      },
      {
        source: "/physician-assistant-school-admissions-consulting",
        destination: "/pa-school-admissions-consulting",
        permanent: true,
      },
      {
        source: "/psychology-school-admissions-consulting",
        destination: "/psychology-counseling-admissions",
        permanent: true,
      },
      {
        source: "/veterinary-school-admissions-consulting",
        destination: "/veterinary-school-admissions",
        permanent: true,
      },
      {
        source: "/high-school-application",
        destination: "/private-school-admissions",
        permanent: true,
      },
      {
        source: "/interview-coaching-guide",
        destination: "/college-interviews",
        permanent: true,
      },

      // New-style paths (pre-rename) → old-site canonical paths
      {
        source: "/computer-science-admissions",
        destination: "/computer-science-admissions-consultant",
        permanent: true,
      },
      {
        source: "/bs-md-admissions",
        destination: "/bs-md-admissions-consulting",
        permanent: true,
      },
      {
        source: "/dental-school-admissions-consulting",
        destination: "/dental-school-application",
        permanent: true,
      },
      {
        source: "/phd-application",
        destination: "/phd-application-consulting",
        permanent: true,
      },
      {
        source: "/pa-school-admissions",
        destination: "/pa-school-admissions-consulting",
        permanent: true,
      },
      {
        source: "/nursing-school-admissions",
        destination: "/nursing-school-admissions-consulting",
        permanent: true,
      },

      // Sample essays & reference letters
      {
        source: "/sos-admissions-sample-application-essays",
        destination: "/personal-statement",
        permanent: true,
      },
      {
        source: "/reference-letter-samples",
        destination: "/letters-of-recommendation",
        permanent: true,
      },
      {
        source: "/law-sample",
        destination: "/personal-statement",
        permanent: true,
      },
      {
        source: "/medical-school-sample",
        destination: "/personal-statement",
        permanent: true,
      },

      // WordPress artifacts & test pages
      { source: "/9138-2", destination: "/", permanent: true },
      { source: "/test", destination: "/", permanent: true },

      // Old nav/category pages linked from blog post bodies (WP content)
      {
        source: "/interview-prep",
        destination: "/college-interviews",
        permanent: true,
      },
      {
        source: "/medicine-healthcare",
        destination: "/medical-school-application",
        permanent: true,
      },
      { source: "/contact", destination: "/contact-us", permanent: true },
      {
        source: "/college-admissions-essay-help",
        destination: "/personal-statement",
        permanent: true,
      },
      {
        source: "/graduate-school-admissions",
        destination: "/graduate-school-application",
        permanent: true,
      },
      {
        source: "/medical-school-application-services",
        destination: "/medical-school-application",
        permanent: true,
      },
      {
        source: "/medical-school-interview-preparation",
        destination: "/medical-school-interview",
        permanent: true,
      },
      {
        source: "/medical-school-interview-prep",
        destination: "/medical-school-interview",
        permanent: true,
      },
      {
        source: "/how-to-get-into-medical-school",
        destination: "/medical-school-application",
        permanent: true,
      },
      {
        source: "/medical-school",
        destination: "/medical-school-application",
        permanent: true,
      },
      {
        source: "/personal-statement-services",
        destination: "/personal-statement",
        permanent: true,
      },
      {
        source: "/medical-school-personal-statement-help",
        destination: "/personal-statement",
        permanent: true,
      },
      {
        source: "/application-writing-services",
        destination: "/personal-statement",
        permanent: true,
      },
      {
        source: "/interview-preparation",
        destination: "/college-interviews",
        permanent: true,
      },
      {
        source: "/admissions-interview-preparation",
        destination: "/college-interviews",
        permanent: true,
      },
      {
        source: "/letters-of-recommendation-services",
        destination: "/letters-of-recommendation",
        permanent: true,
      },
      {
        source: "/recommendation-letters",
        destination: "/letters-of-recommendation",
        permanent: true,
      },
      {
        source: "/law-school-admissions",
        destination: "/law-school-application",
        permanent: true,
      },
      {
        source: "/free-consultation",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/college-application",
        destination: "/college-admissions",
        permanent: true,
      },

      // Old WordPress taxonomy URLs (from the old sitemap)
      { source: "/category/:slug*", destination: "/blog", permanent: true },
      { source: "/tag/:slug*", destination: "/blog", permanent: true },
      { source: "/element_category/:slug*", destination: "/", permanent: true },

      // Blog detail pages are now live at /blog/[slug]
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
