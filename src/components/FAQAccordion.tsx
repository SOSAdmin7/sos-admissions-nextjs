import Link from "next/link";
import faqItems from "@/data/full-faqs.json";
export function FAQAccordion() {
  return (
    <section className="py-9 px-4">
      <div className="max-w-3xl mx-auto">
        {faqItems.map((f) => (
          <details key={f.question} className="py-5 border-b border-slate-200">
            <summary className="font-semibold text-navy cursor-pointer">
              {f.question}
            </summary>
            <p className="text-slate-600 leading-relaxed mt-3">{f.answer}</p>
            {f.link && (
              <Link
                href={f.link}
                className="inline-block mt-3 underline text-navy"
              >
                {f.linkLabel}
              </Link>
            )}
          </details>
        ))}
      </div>
    </section>
  );
}
