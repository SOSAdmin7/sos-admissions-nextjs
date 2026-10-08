// Image assets must resolve on the public Next.js host while the main domain
// still serves WordPress. Keep page canonicals on sosadmissions.com. This stable
// asset origin also remains valid after the main-domain cutover.
const SOCIAL_ASSET_ORIGIN = "https://sos-admissions-nextjs.vercel.app";

export function socialAssetUrl(path: string): string {
  return new URL(path, SOCIAL_ASSET_ORIGIN).href;
}

const pageCards: Record<string, string> = {
  "/about-us/": "About SOS Admissions",
  "/client-testimonials/": "Student Success Stories",
  "/college-admissions/": "College Admissions Consulting",
  "/contact-us/": "Contact SOS Admissions",
};

export function defaultSocialImage(canonical?: string) {
  const path = canonical ? new URL(canonical, SOCIAL_ASSET_ORIGIN).pathname : "/";
  const cardTitle = pageCards[path];
  return [{
    url: socialAssetUrl(`${cardTitle ? path : "/"}opengraph-image`),
    width: 1200,
    height: 630,
    alt: `${cardTitle ?? "Expert Admissions Consulting"} | SOS Admissions`,
  }];
}
