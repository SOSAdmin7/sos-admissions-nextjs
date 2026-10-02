import Link from "next/link";
import { testimonials } from "@/data/testimonials";
export function TestimonialsSection({ program }: { program?: string }) {
  const matcher = !program
    ? /College/
    : /medical-residency/.test(program)
      ? /Resident/
      : /medical-school|bs-md/.test(program)
        ? /Medical/
        : /^mba/.test(program)
          ? /Business/
          : /pa-school/.test(program)
            ? /Physician/
            : /nursing|crna|np-admissions/.test(program)
              ? /Nursing/
              : /college|private-school|sat-act/.test(program)
                ? /College/
                : /graduate|phd|psychology/.test(program)
                  ? /Graduate|Doctoral/
                  : /a^/;
  const matches = testimonials.filter((t) => matcher.test(t.serviceName));
  const short = matches.filter((t) => t.content.length < 600);
  const selected = (short.length ? short : matches).slice(0, 3);
  if (!selected.length) return null;
  return (
    <section className="py-9 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-navy text-center mb-6">
          What Our Clients Say
        </h2>
        <div
          className={`grid gap-4 ${selected.length === 3 ? "md:grid-cols-3" : selected.length === 2 ? "md:grid-cols-2" : "max-w-3xl mx-auto"}`}
        >
          {selected.map((t) => (
            <figure
              key={t.id}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <blockquote className="text-slate-700 leading-relaxed">
                {t.content}
              </blockquote>
              <figcaption className="mt-4 text-sm text-navy font-semibold">
                {t.clientName}, {t.clientTitle}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="text-center mt-5">
          <Link
            href="/client-testimonials/"
            className="text-blue-800 underline"
          >
            Read More Client Testimonials
          </Link>
        </p>
      </div>
    </section>
  );
}
