import restoredContent from "@/data/restored-page-content.json";

type DetailSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

export function PageDetails({ slug }: { slug: string }) {
  const sections = (restoredContent as Record<string, DetailSection[]>)[slug];
  if (!sections?.length) return null;

  return (
    <div className="px-4 py-6" data-page-details={slug}>
      <div className="max-w-4xl mx-auto space-y-7">
        {sections.map((section) => (
          <section key={section.title} className="border-t border-slate-200 pt-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              {section.title}
            </h2>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.items && (
                <ol className="list-decimal pl-6 space-y-2">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ol>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
