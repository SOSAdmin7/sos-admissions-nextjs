import { Metadata } from 'next';
import { generateBlogMetadata } from '@/lib/metadata';
import { BlogContent } from '@/components/BlogContent';

export const metadata: Metadata = generateBlogMetadata();

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-[#1B2B4B]">
            Admissions Insights & Tips
          </h1>
          <p className="text-xl text-slate-600">
            Expert guidance and actionable tips to help you succeed in the admissions process.
          </p>
        </div>
      </section>

      <BlogContent />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0D1B2A] to-[#1B2B4B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Looking for Personalized Guidance?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Our expert consultants can provide tailored advice for your specific situation.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-[#E8613C] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#D4522E] transition"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
