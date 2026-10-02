import Link from "next/link";
export const metadata = {
  title: { absolute: "Payment Information | SOS Admissions" },
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <section className="py-12 px-4 bg-slate-50">
      <div className="max-w-2xl mx-auto rounded-xl bg-white border border-slate-200 p-6 text-center">
        <h1 className="text-3xl font-bold text-navy mb-4">
          Payment Information
        </h1>
        <p className="text-slate-600">
          This page does not verify a payment. Please check the confirmation or
          receipt from the payment form. If you need help confirming an order,
          call 310-951-4008 before paying again.
        </p>
        <Link
          href="/payment/"
          className="inline-block mt-6 text-blue-800 underline"
        >
          Return to Order Forms
        </Link>
      </div>
    </section>
  );
}
