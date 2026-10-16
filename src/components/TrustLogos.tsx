export function TrustBar({ label = "Our Experts Have Been Featured In" }: { label?: string }) {
  return (
    <section className="bg-white py-6 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="mb-4 text-xs sm:text-sm uppercase tracking-[0.12em] text-slate-600 font-semibold">{label}</h2>
        {/* Preserve the original media artwork and its natural proportions. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/legacy/sos-featured-in.webp" alt="CNN, The Huffington Post, NBC News, The New Indian Express, Asahi Shimbun, TIME, Los Angeles Times, China Daily, and CBS News" width={800} height={94} className="mx-auto h-auto w-auto max-w-full" loading="lazy" />
      </div>
    </section>
  );
}
