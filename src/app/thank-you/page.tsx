import Link from "next/link";
export const metadata = {
  title: { absolute: "Thank You | SOS Admissions" },
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <section className="py-12 px-4 bg-slate-50">
      <div className="max-w-2xl mx-auto rounded-xl bg-white border border-slate-200 p-6 text-center">
        <h1 className="text-3xl font-bold text-navy mb-4">
          Thank You for Contacting SOS Admissions
        </h1>
        <p className="text-slate-600">
          If you have just submitted your information, our team will review your
          request and contact you. Please keep the confirmation from the form.
          If you are unsure whether it went through or need assistance, call{" "}
          <a href="tel:+13109514008" className="underline">310-951-4008</a>.
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
