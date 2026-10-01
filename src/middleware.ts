import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { blogPosts } from './data/blog-posts';

/*  Blog posts on the old WordPress site live at root-level URLs
    (e.g. /college-interview/) but the new site serves them under /blog/.
    This middleware 301-redirects old root-level blog URLs to /blog/[slug]
    so inbound links and search-engine rankings are preserved.

    Execution order: next.config.ts redirects → middleware → file-system routing.
    Paths already handled by next.config.ts redirects never reach here.          */

const blogSlugs = new Set(blogPosts.map((p) => p.slug));

// Pages that have their own file-system route and must NOT be hijacked.
// Generated from: find src/app -maxdepth 2 -name "page.tsx" | ...
const PAGE_PATHS = new Set([
  'about-us',
  'admissions-options-page',
  'blog',
  'bs-md-admissions-consulting',
  'client-testimonials',
  'college-admissions',
  'college-interviews',
  'college-transfers',
  'computer-science-admissions-consultant',
  'contact-us',
  'crna-admissions',
  'dental-school-application',
  'faq',
  'general-nursing',
  'get-started',
  'graduate-school-application',
  'graduate-school-interview',
  'info-form',
  'international-students',
  'law-school-application',
  'letters-of-recommendation',
  'mba',
  'mba-interview',
  'medical-residency',
  'medical-residency-interview',
  'medical-school-admissions-consulting',
  'medical-school-application',
  'medical-school-interview',
  'np-admissions',
  'nursing-school-admissions-consulting',
  'pa-school-admissions-consulting',
  'payment',
  'personal-statement',
  'phd-application-consulting',
  'privacy-policy',
  'private-school-admissions',
  'psychology-counseling-admissions',
  'purchase',
  'sat-act-preparation',
  'services',
  'thank-you',
  'thank-you-payment',
  'veterinary-school-admissions',
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Strip leading/trailing slashes to get the bare segment
  const segment = pathname.replace(/^\/+/, '').replace(/\/+$/, '');

  // Only handle single-segment root-level paths (no nested paths)
  if (segment.includes('/')) return;

  // Skip if this path belongs to an existing page
  if (PAGE_PATHS.has(segment)) return;

  // Redirect old root-level blog URLs → /blog/[slug]
  if (blogSlugs.has(segment)) {
    const url = request.nextUrl.clone();
    url.pathname = `/blog/${segment}`;
    return NextResponse.redirect(url, 301);
  }
}

export const config = {
  matcher: [
    // Run on all paths EXCEPT static assets, API routes, and Next.js internals
    '/((?!api|_next|_vercel|static|favicon\\.ico|robots\\.txt|sitemap).*)',
  ],
};
