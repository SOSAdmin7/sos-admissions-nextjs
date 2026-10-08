import { blogPosts } from "@/data/blog-posts";
import { blogPath } from "@/lib/blog-path";

// Reuse the corrected article and metadata at its original WordPress URL.
export { default, generateMetadata } from "../blog/[slug]/page";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts
    .filter((post) => blogPath(post.slug) === `/${post.slug}/`)
    .map((post) => ({ slug: post.slug }));
}
