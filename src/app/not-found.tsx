import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-[#E8613C] text-sm font-semibold uppercase tracking-[0.15em] mb-4">
          Page Not Found
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-[#1B2B4B] mb-6">404</h1>
        <p className="text-lg text-gray-500 mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#E8613C] hover:bg-[#D4522E] text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center border-2 border-[#1B2B4B] text-[#1B2B4B] hover:bg-[#1B2B4B] hover:text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
