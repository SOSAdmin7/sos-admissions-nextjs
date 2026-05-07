'use client';

import { useState, useMemo } from 'react';
import { Calendar, Search } from 'lucide-react';
import Link from 'next/link';
import { blogPosts, type BlogPost } from '@/data/blog-posts';

const POSTS_PER_PAGE = 12;

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Get unique categories sorted by count
const categories = Array.from(
  blogPosts.reduce((map, p) => {
    map.set(p.category, (map.get(p.category) || 0) + 1);
    return map;
  }, new Map<string, number>())
)
  .sort((a, b) => b[1] - a[1])
  .map(([cat]) => cat);

export function BlogContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;
    if (selectedCategory !== 'All') {
      posts = posts.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
      );
    }
    return posts;
  }, [searchQuery, selectedCategory]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(POSTS_PER_PAGE);
                }}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#E8613C] transition text-[#1B2B4B]"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setVisibleCount(POSTS_PER_PAGE);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === 'All'
                    ? 'bg-[#E8613C] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All ({blogPosts.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(POSTS_PER_PAGE);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === cat
                      ? 'bg-[#E8613C] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results count */}
            <p className="text-sm text-gray-500 mb-6">
              Showing {visiblePosts.length} of {filteredPosts.length} articles
            </p>

            {/* Posts Grid */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No articles found matching your search.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {visiblePosts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>

                {hasMore && (
                  <div className="text-center mt-10">
                    <button
                      onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
                      className="px-8 py-3 bg-[#1B2B4B] text-white font-semibold rounded-lg hover:bg-[#0D1B2A] transition"
                    >
                      Load More Articles
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Popular Posts */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-[#1B2B4B] mb-4 pb-2 border-b-2 border-[#E8613C]">
                Recent Articles
              </h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 5).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <h4 className="text-sm font-medium text-[#1B2B4B] group-hover:text-[#E8613C] transition leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">{formatDate(post.date)}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-[#1B2B4B] mb-4 pb-2 border-b-2 border-[#E8613C]">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((cat) => {
                  const count = blogPosts.filter((p) => p.category === cat).length;
                  return (
                    <li key={cat}>
                      <button
                        onClick={() => {
                          setSelectedCategory(cat);
                          setVisibleCount(POSTS_PER_PAGE);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="flex justify-between w-full text-sm text-gray-600 hover:text-[#E8613C] transition py-1"
                      >
                        <span>{cat}</span>
                        <span className="text-gray-400">({count})</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-[#0D1B2A] rounded-lg p-6 text-white">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="inline-block text-xs font-semibold text-[#E8613C] bg-[#FFF0EC] px-2.5 py-1 rounded-full mb-3">
          {post.category}
        </span>
        <h3 className="text-lg font-bold text-[#1B2B4B] group-hover:text-[#E8613C] transition leading-snug mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-3">{post.excerpt}</p>
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <Calendar className="w-3.5 h-3.5" />
          {formatDate(post.date)}
        </div>
      </div>
    </Link>
  );
}
