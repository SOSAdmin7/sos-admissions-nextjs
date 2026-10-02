import sourcePages from "@/data/wordpress-services.json";
import Link from "next/link";
export interface SourcePage {
  sourceUrl: string;
  sourceId: number;
  modified: string;
  sourceHash: string;
  intro: string;
  features: string[];
  pricingTables: { title: string; rows: string[][] }[];
  terms: string[];
}
export const sourceData = sourcePages as Record<string, SourcePage>;
export function SourcePricing({ slug }: { slug: string }) {
  const page = sourceData[slug];
  if (!page?.pricingTables.length)
    return (
      <section id="pricing" className="py-10 px-4 bg-slate-50 text-center">
        <h2 className="text-3xl font-bold text-navy mb-3">
          Discuss Your Services
        </h2>
        <p className="max-w-2xl mx-auto">
          Call{" "}
          <a className="underline" href="tel:+13109514008">
            310-951-4008
          </a>{" "}
          to confirm the scope and price for your needs before ordering.
        </p>
      </section>
    );
  return (
    <section id="pricing" className="py-10 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-6 text-center">
          Services and Pricing
        </h2>
        {page.pricingTables.map((table, i) => (
          <div
            key={i}
            className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white"
          >
            {table.title !== "Services and Pricing" && (
              <h3 className="font-bold text-xl text-navy px-5 py-4 bg-slate-100">
                {table.title}
              </h3>
            )}
            <table className="w-full text-left table-fixed">
              <colgroup>
                <col className="w-[62%]" />
                <col className="w-[38%]" />
              </colgroup>
              <caption className="sr-only">{table.title}</caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, j) =>
                  row.length === 1 ? (
                    <tr key={j}>
                      <td
                        colSpan={2}
                        className="px-4 py-4 text-sm leading-relaxed bg-blue-50 text-navy"
                      >
                        {row[0]}
                      </td>
                    </tr>
                  ) : (
                    <tr key={j} className="border-t border-slate-100">
                      <th
                        scope="row"
                        className="w-[62%] px-4 py-4 font-medium text-sm sm:text-base text-navy align-top break-words"
                      >
                        {row[0]}
                      </th>
                      <td className="px-4 py-4 text-sm sm:text-base font-semibold text-navy align-top break-words">
                        {row.slice(1).join(" ")}
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        ))}
        {page.terms.map((term, i) => (
          <p key={i} className="text-sm text-slate-600 my-3 leading-relaxed">
            {term}
          </p>
        ))}
        <div className="mt-6 text-center">
          <Link
            href={
              [
                "academic-crisis-consulting",
                "general-nursing",
                "sat-act-preparation",
              ].includes(slug)
                ? "/contact-us/"
                : "/get-started/"
            }
            className="inline-flex rounded-full bg-[#C94D2B] text-white font-semibold px-6 py-3"
          >
            {[
              "academic-crisis-consulting",
              "general-nursing",
              "sat-act-preparation",
            ].includes(slug)
              ? "Schedule a Free Initial Consultation"
              : "SOS Admissions Order Form"}
          </Link>
          <p className="text-sm text-slate-600 mt-3">
            For prior-payment credits or help choosing a service, call
            310-951-4008 before ordering.
          </p>
        </div>
      </div>
    </section>
  );
}
