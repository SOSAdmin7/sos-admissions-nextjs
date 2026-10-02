import { testimonials } from "@/data/testimonials";
export function TestimonialContent() {
  return (
    <section className="py-9 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="p-5 rounded-xl bg-slate-50 border border-slate-200"
          >
            <blockquote className="whitespace-pre-line text-slate-700 leading-relaxed">
              {t.content}
            </blockquote>
            <figcaption className="font-semibold text-navy mt-4">
              {t.clientName}, {t.clientTitle}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
