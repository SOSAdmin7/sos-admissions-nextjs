import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sosadmissions.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  compress: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Force www and HTTPS (matching old .htaccess behavior)
  async redirects() {
    return [
      // Old WordPress backup/duplicate pages → homepage
      { source: "/:path*-old", destination: "/", permanent: true },
      { source: "/:path(.*)-backup-:date(.*)", destination: "/", permanent: true },

      // Old WooCommerce pages
      { source: "/basket", destination: "/payment", permanent: true },
      { source: "/checkout", destination: "/payment", permanent: true },
      { source: "/my-account", destination: "/", permanent: true },
      // /purchase is now a live page (email purchase funnel) - redirect removed

      // Chinese pages (preserve paths)
      { source: "/china", destination: "/international-students", permanent: true },
      { source: "/chinese-faq", destination: "/faq", permanent: true },
      { source: "/chinese-contact", destination: "/contact-us", permanent: true },
      { source: "/contactchinese", destination: "/contact-us", permanent: true },
      { source: "/chinese-thankyou", destination: "/thank-you", permanent: true },

      // Package/form pages → payment
      { source: "/package-form", destination: "/payment", permanent: true },
      { source: "/package-doctoral", destination: "/payment", permanent: true },
      { source: "/regular-package", destination: "/payment", permanent: true },
      { source: "/residency-package-first", destination: "/payment", permanent: true },
      { source: "/additional-school", destination: "/payment", permanent: true },
      { source: "/additional-school-v2", destination: "/payment", permanent: true },
      { source: "/add-program", destination: "/payment", permanent: true },
      { source: "/add-school", destination: "/payment", permanent: true },
      // /admissions-options-page is now a live page (public purchase funnel) - redirect removed
      { source: "/admissions-options-page-2", destination: "/admissions-options-page", permanent: true },

      // /info-form is now a live page (email info funnel) - redirect removed
      { source: "/preliminary-information-form2", destination: "/contact-us", permanent: true },

      // Service page aliases
      { source: "/application-consulting", destination: "/services", permanent: true },
      { source: "/sos-admissions", destination: "/about-us", permanent: true },
      { source: "/us-news-world-report-article", destination: "/about-us", permanent: true },

      // Personal statement sub-pages → main personal statement page
      { source: "/college-personal-statement", destination: "/personal-statement", permanent: true },
      { source: "/graduate-school-personal-statement", destination: "/personal-statement", permanent: true },
      { source: "/law-school-personal-statement", destination: "/personal-statement", permanent: true },
      { source: "/medical-school-personal-statement", destination: "/personal-statement", permanent: true },
      { source: "/dental-school-personal-statement", destination: "/personal-statement", permanent: true },
      { source: "/nursing-personal-statement", destination: "/personal-statement", permanent: true },
      { source: "/phd-personal-statement", destination: "/personal-statement", permanent: true },
      { source: "/residency-personal-statement", destination: "/personal-statement", permanent: true },
      { source: "/mba-personal-statement", destination: "/personal-statement", permanent: true },
      { source: "/physician-assistant-school-personal-statement", destination: "/personal-statement", permanent: true },

      // Service sub-pages → main service pages
      { source: "/medical-school-admissions-consulting", destination: "/medical-school-application", permanent: true },
      { source: "/nursing-school-admissions-consulting", destination: "/services", permanent: true },
      // /general-nursing, /nurse-practitioner-admissions, /crna-admissions now route to /services/[slug]
      { source: "/np-admissions", destination: "/services/nurse-practitioner-admissions", permanent: true },
      { source: "/optometry-school-admissions-consulting", destination: "/services", permanent: true },
      { source: "/physician-assistant-school-admissions-consulting", destination: "/services/pa-school-admissions", permanent: true },
      { source: "/pa-school-admissions-consulting", destination: "/services/pa-school-admissions", permanent: true },
      { source: "/psychology-school-admissions-consulting", destination: "/services/psychology-counseling-admissions", permanent: true },
      // /psychology-counseling-admissions now routes to /services/[slug]
      { source: "/veterinary-school-admissions-consulting", destination: "/services/veterinary-school-admissions", permanent: true },
      // /veterinary-school-admissions now routes to /services/[slug]
      { source: "/speech-language-pathology-slp-admissions-consultant", destination: "/services", permanent: true },
      { source: "/computer-science-admissions-consultant", destination: "/services/computer-science-admissions", permanent: true },
      { source: "/bs-md-admissions-consulting", destination: "/services/bs-md-programs", permanent: true },
      { source: "/phd-application-consulting", destination: "/graduate-school-application", permanent: true },
      { source: "/high-school-application", destination: "/private-school-admissions", permanent: true },
      { source: "/dental-school-application", destination: "/dental-school-admissions-consulting", permanent: true },

      // Interview sub-pages (already have dedicated pages, but add aliases)
      { source: "/medical-residency-interview", destination: "/college-interviews", permanent: true },

      // Sample essays & reference letters → services
      { source: "/sos-admissions-sample-application-essays", destination: "/personal-statement", permanent: true },
      { source: "/reference-letter-samples", destination: "/services", permanent: true },
      { source: "/letters-of-recommendation", destination: "/services", permanent: true },
      { source: "/law-sample", destination: "/personal-statement", permanent: true },
      { source: "/medical-school-sample", destination: "/personal-statement", permanent: true },

      // SAT/ACT prep
      { source: "/sat-act-preparation", destination: "/services", permanent: true },

      // Test page
      { source: "/test", destination: "/", permanent: true },

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
