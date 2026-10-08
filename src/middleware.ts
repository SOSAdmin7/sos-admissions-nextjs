import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import blogAliases from "./data/blog-aliases.json";
import { blogPath } from "./lib/blog-path";

// Retained articles render at their original root URLs. Only consolidated
// legacy articles redirect; published service pages always take precedence.

// Pages that have their own file-system route and must NOT be hijacked.
// Generated from: find src/app -maxdepth 2 -name "page.tsx" | ...
const PAGE_PATHS = new Set([
  "about-us",
  "academic-crisis-consulting",
  "mba-recommender-questions",
  "speech-language-pathology-slp-admissions-consultant",
  "admissions-options-page",
  "blog",
  "bs-md-admissions-consulting",
  "client-testimonials",
  "college-admissions",
  "college-interviews",
  "college-transfers",
  "computer-science-admissions-consultant",
  "contact-us",
  "crna-admissions",
  "dental-school-application",
  "faq",
  "general-nursing",
  "get-started",
  "graduate-school-application",
  "graduate-school-interview",
  "info-form",
  "international-students",
  "law-school-application",
  "letters-of-recommendation",
  "mba",
  "mba-interview",
  "medical-residency",
  "medical-residency-interview",
  "medical-school-admissions-consulting",
  "medical-school-application",
  "medical-school-interview",
  "np-admissions",
  "nursing-school-admissions-consulting",
  "pa-school-admissions-consulting",
  "payment",
  "personal-statement",
  "phd-application-consulting",
  "privacy-policy",
  "private-school-admissions",
  "psychology-counseling-admissions",
  "purchase",
  "sat-act-preparation",
  "services",
  "thank-you",
  "thank-you-payment",
  "veterinary-school-admissions",
]);

// These public images also serve social cards and structured data. They must
// remain indexable when referenced by main-domain pages after launch.
const SOCIAL_IMAGE_PATHS = new Set([
  "/opengraph-image",
  "/about-us/opengraph-image",
  "/client-testimonials/opengraph-image",
  "/college-admissions/opengraph-image",
  "/contact-us/opengraph-image",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Strip leading/trailing slashes to get the bare segment
  const segment = pathname.replace(/^\/+/, "").replace(/\/+$/, "");

  // Only handle single-segment root-level paths (no nested paths)
  const response = NextResponse.next();
  const isPublicImage = SOCIAL_IMAGE_PATHS.has(pathname.replace(/\/$/, ""))
    || (pathname.startsWith("/images/") && /\.(avif|gif|ico|jpe?g|png|svg|webp)$/i.test(pathname));
  if (!isPublicImage && !["sosadmissions.com", "www.sosadmissions.com"].includes(request.nextUrl.hostname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  if (segment.includes("/")) return response;

  // Skip if this path belongs to an existing page
  if (PAGE_PATHS.has(segment)) return response;

  // Redirect consolidated articles to their corrected guide.
  const destination = (blogAliases as Record<string, string>)[segment];
  if (destination) {
    const url = request.nextUrl.clone();
    url.pathname = blogPath(destination);
    return NextResponse.redirect(url, 301);
  }
  return response;
}

export const config = {
  matcher: [
    // Run on all paths EXCEPT static assets, API routes, and Next.js internals
    "/((?!api|_next|_vercel|static|favicon\\.ico|robots\\.txt|sitemap).*)",
  ],
};
