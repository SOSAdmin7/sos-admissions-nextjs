import { pageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
export const metadata = pageMetadata({
  title: { absolute: "Order Next Steps | SOS Admissions" },
  robots: { index: false, follow: false },
});
export default function Page() {
  return (
    <section className="py-12 px-4 bg-slate-50">
      <div className="max-w-2xl mx-auto rounded-xl bg-white border border-slate-200 p-6 text-center">
        <h1 className="text-3xl font-bold text-navy mb-4">
          Your Next Steps with SOS Admissions
        </h1>
        <p className="text-slate-600">
          If you have just completed your order, please keep the confirmation
          and payment receipt from the order form. Our team will contact you
          about your services. For help confirming your order or arranging the
          next step, call{" "}
          <a href="tel:+13109514008" className="underline">310-951-4008</a>.
        </p>
        <h2 className="text-2xl font-bold text-navy mt-7 mb-3">Your Free Interview Guide</h2>
        <p className="text-slate-600">
          The Definitive Guide to Ace Your Interview and Get the Job by Vijay Ingam, CFA.
        </p>
        <a href="/documents/interview-guide.pdf" className="inline-block mt-4 text-navy underline">
          Download Interview Guide (PDF)
        </a>
        <Link
          href="/payment/"
          className="inline-block mt-6 text-navy underline"
        >
          Return to Order Forms
        </Link>
      </div>
    </section>
  );
}
