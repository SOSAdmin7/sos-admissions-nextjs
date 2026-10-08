import { blogPath } from "@/lib/blog-path";
import blogContent from "@/data/blog-content.json";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { BlogPostBody } from "./BlogPostBody";

// Keep every article available without a runtime WordPress dependency.
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Unknown article URLs return a real 404.
export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

function fetchPostContent(slug: string): string | null {
  return (blogContent as Record<string, string>)[slug] ?? null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: {
      absolute: post.title.includes("SOS Admissions")
        ? post.title
        : `${post.title} | SOS Admissions`,
    },
    description: post.excerpt,
    alternates: {
      canonical: `https://sosadmissions.com${blogPath(post.slug)}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://sosadmissions.com${blogPath(post.slug)}`,
      publishedTime: post.date,
      modifiedTime: post.revised ?? post.modified,
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = postIndex >= 0 ? blogPosts[postIndex] : null;

  if (!post) notFound();

  const content = await fetchPostContent(slug);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.revised ?? post.modified,
    image: post.image ? new URL(post.image, "https://sosadmissions.com").href : undefined,
    mainEntityOfPage: `https://sosadmissions.com${blogPath(post.slug)}`,
    author: { "@id": "https://sosadmissions.com/#organization" },
    publisher: { "@id": "https://sosadmissions.com/#organization" },
  };

  // Get prev/next posts
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost =
    postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  // Related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-deep to-navy text-white py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <span className="inline-block text-xs font-semibold text-gold-light bg-white/10 px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.revised ? `Updated ${formatDate(post.revised)}` : formatDate(post.date)}
            </div>
            <span>SOS Admissions</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="aspect-[2/1] rounded-xl overflow-hidden shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <article className="py-12 md:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article Body */}
            <div className="lg:col-span-2">
              {content ? (
                <BlogPostBody html={content} />
              ) : (
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="bg-[#FFF0EC] rounded-lg p-6 mt-8">
                    <p className="text-navy font-medium">
                      Want to learn more about this topic? Contact our
                      admissions experts for personalized guidance.
                    </p>
                    <Link
                      href="/contact-us"
                      className="inline-block mt-4 bg-[#C94D2B] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[#B94224] transition text-sm"
                    >
                      Schedule a Free Initial Consultation
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA */}
              <div className="bg-navy-deep rounded-lg p-6 text-white mb-8 sticky top-24">
                <h3 className="text-lg font-bold mb-3">Need Expert Help?</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Get personalized admissions guidance from our experienced
                  consultants.
                </p>
                <Link
                  href="/contact-us"
                  className="block text-center bg-[#C94D2B] text-white font-semibold py-2.5 rounded-lg hover:bg-[#B94224] transition text-sm"
                >
                  Free Initial Consultation
                </Link>
                <a
                  href="tel:310-951-4008"
                  className="block text-center text-sm text-gray-300 hover:text-white transition mt-3"
                >
                  Or call: 310-951-4008
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Prev/Next Navigation */}
      <div className="border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex justify-between gap-4">
          {prevPost ? (
            <Link
              href={blogPath(prevPost.slug)}
              className="flex min-w-0 max-w-[48%] items-center gap-2 text-sm text-gray-500 hover:text-[#B94224] transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">
                {prevPost.title}
              </span>
              <span className="sm:hidden">Previous</span>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              href={blogPath(nextPost.slug)}
              className="flex min-w-0 max-w-[48%] items-center gap-2 text-sm text-gray-500 hover:text-[#B94224] transition text-right"
            >
              <span className="hidden sm:inline">
                {nextPost.title}
              </span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#F8F9FA] py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={blogPath(rp.slug)}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={rp.image}
                      alt={rp.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-navy group-hover:text-[#B94224] transition leading-snug line-clamp-2">
                      {rp.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-2">
                      {formatDate(rp.date)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
