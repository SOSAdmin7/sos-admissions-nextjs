import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { BlogPostBody } from './BlogPostBody';

// Pre-render the 30 most recent posts at build time
export function generateStaticParams() {
  return blogPosts.slice(0, 30).map((post) => ({
    slug: post.slug,
  }));
}

// Allow other slugs to be rendered on-demand and cached
export const dynamicParams = true;
export const revalidate = 86400; // revalidate every 24 hours

type Props = {
  params: Promise<{ slug: string }>;
};

async function fetchPostContent(slug: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://sosadmissions.com/wp-json/wp/v2/posts?slug=${slug}&_fields=content`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (!data[0]?.content?.rendered) return null;
    return fixWordPressLazyImages(data[0].content.rendered);
  } catch {
    return null;
  }
}

/** WordPress/Sucuri lazy-loading replaces img src with a 1x1 GIF placeholder
 *  and stores the real URL in data-orig-src. Swap them back. */
function fixWordPressLazyImages(html: string): string {
  return html.replace(
    /<img([^>]*)src="data:image\/gif;base64,[^"]*"([^>]*)data-orig-src="([^"]*)"([^>]*)>/g,
    '<img$1src="$3"$2$4>'
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
  };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = postIndex >= 0 ? blogPosts[postIndex] : null;

  if (!post) notFound();

  const content = await fetchPostContent(slug);

  // Get prev/next posts
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  // Related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0D1B2A] to-[#1B2B4B] text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <span className="inline-block text-xs font-semibold text-[#E8613C] bg-[#E8613C]/10 px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
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
      <article className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article Body */}
            <div className="lg:col-span-2">
              {content ? (
                <BlogPostBody html={content} />
              ) : (
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-600 leading-relaxed">{post.excerpt}</p>
                  <div className="bg-[#FFF0EC] rounded-lg p-6 mt-8">
                    <p className="text-[#1B2B4B] font-medium">
                      Want to learn more about this topic? Contact our admissions experts for personalized guidance.
                    </p>
                    <Link
                      href="/contact-us"
                      className="inline-block mt-4 bg-[#E8613C] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[#D4522E] transition text-sm"
                    >
                      Schedule a Free Consultation
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA */}
              <div className="bg-[#0D1B2A] rounded-lg p-6 text-white mb-8 sticky top-24">
                <h3 className="text-lg font-bold mb-3">Need Expert Help?</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Get personalized admissions guidance from our experienced consultants.
                </p>
                <Link
                  href="/contact-us"
                  className="block text-center bg-[#E8613C] text-white font-semibold py-2.5 rounded-lg hover:bg-[#D4522E] transition text-sm"
                >
                  Free Consultation
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
              href={`/blog/${prevPost.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#E8613C] transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{prevPost.title.substring(0, 50)}...</span>
              <span className="sm:hidden">Previous</span>
            </Link>
          ) : <div />}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#E8613C] transition text-right"
            >
              <span className="hidden sm:inline">{nextPost.title.substring(0, 50)}...</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#F8F9FA] py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1B2B4B] mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
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
                    <h3 className="text-sm font-bold text-[#1B2B4B] group-hover:text-[#E8613C] transition leading-snug line-clamp-2">
                      {rp.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2">{formatDate(rp.date)}</p>
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
