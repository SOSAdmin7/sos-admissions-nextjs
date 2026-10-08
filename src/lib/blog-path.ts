// WordPress published pages take precedence over posts with the same slug.
// Those four retained articles therefore keep their distinct /blog/ address.
const pageCollisions = new Set([
  "medical-residency",
  "medical-school-personal-statement",
  "law-school-personal-statement",
  "dental-school-personal-statement",
]);

export function blogPath(slug: string) {
  return pageCollisions.has(slug) ? `/blog/${slug}/` : `/${slug}/`;
}
