import Link from "next/link";
export const metadata = {
  title: { absolute: "Contact Information | SOS Admissions" },
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <section className="py-12 px-4 bg-slate-50">
      <div className="max-w-2xl mx-auto rounded-xl bg-white border border-slate-200 p-6 text-center">
        <h1 className="text-3xl font-bold text-navy mb-4">
          Your Consultation Request
        </h1>
        <p className="text-slate-600">
          After submitting the contact form, check the confirmation shown by the
          form. Visiting this page alone does not submit a request. If you need
          assistance, call 310-951-4008.
        </p>
        <Link
          href="/contact-us/"
          className="inline-block mt-6 text-blue-800 underline"
        >
          Schedule a Free Initial Consultation
        </Link>
      </div>
    </section>
  );
}
