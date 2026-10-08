import { pageMetadata } from "@/lib/page-metadata";
import body from "@/data/privacy-policy-content.json";
export const metadata = pageMetadata({
  title: { absolute: "Privacy Policy and Terms | SOS Admissions" },
  description: "Read SOS Admissions' privacy policy to learn how we collect, use, and protect your personal information when you use our admissions consulting services.",
  alternates: { canonical: "https://sosadmissions.com/privacy-policy/" },
});
export default function Page() {
  return (
    <>
      <section className="bg-slate-50 py-10 px-4 text-center">
        <h1 className="text-4xl font-bold text-navy">
          Privacy Policy and Terms
        </h1>
      </section>
      <article
        className="prose prose-slate max-w-4xl px-4 py-8 mx-auto prose-headings:text-navy"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </>
  );
}
