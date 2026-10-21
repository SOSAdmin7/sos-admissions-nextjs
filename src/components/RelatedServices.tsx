import Link from "next/link";
import relatedServiceLinks from "@/data/related-service-links.json";

type ServiceLink = { label: string; href: string };

export function RelatedServices({ slug }: { slug: string }) {
  const links = (relatedServiceLinks as Record<string, ServiceLink[]>)[slug];
  if (!links?.length) return null;
  const isInterview = [
    "college-interviews", "graduate-school-interview", "mba-interview",
    "medical-school-interview", "medical-residency-interview",
  ].includes(slug);

  return (
    <section className="px-4 py-7" data-related-services={slug}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
          {isInterview ? "Interview Support for Other Programs" : "Explore Related Services"}
        </h2>
        {isInterview && (
          <p className="text-slate-700 mb-4">
            Applying to a different program? Explore our other interview services and guidance.
          </p>
        )}
        <ul className="flex flex-wrap justify-center gap-3">
          {links.map((link) => (
            <li key={link.href} className="w-full sm:w-[calc(50%_-_6px)] lg:w-[calc(33.333333%_-_8px)]">
              <Link href={link.href} className="flex h-full items-center rounded-xl border border-slate-200 px-4 py-3 text-navy font-semibold underline underline-offset-4 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
