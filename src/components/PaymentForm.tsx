import { COLLEGE_PAYMENT_FORM, PROFESSIONAL_PAYMENT_FORM } from "@/data/forms";
export function PaymentForm() {
  return (
    <section className="px-4 py-9">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-navy mb-4">
          Choose the Appropriate Order Form
        </h2>
        <p className="text-slate-600 mb-6">
          Review the services and total in the order form before paying. Call
          310-951-4008 first if you have a previous purchase to credit, need
          additional schools, or want help choosing the right service.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          <a
            href={COLLEGE_PAYMENT_FORM}
            className="block rounded-xl border border-slate-200 p-6 hover:border-[#E8613C] focus-visible:outline-2"
          >
            <h3 className="font-bold text-xl text-navy">
              College, Transfer, and SAT/ACT
            </h3>
            <p className="mt-3 text-slate-600">
              College and transfer essay services, complete applications, and
              test preparation.
            </p>
            <span className="inline-block mt-5 rounded-full bg-[#C94D2B] text-white px-5 py-3 font-semibold">
              Open College and Transfer Order Form
            </span>
          </a>
          <a
            href={PROFESSIONAL_PAYMENT_FORM}
            className="block rounded-xl border border-slate-200 p-6 hover:border-[#E8613C] focus-visible:outline-2"
          >
            <h3 className="font-bold text-xl text-navy">
              Graduate and Professional Programs
            </h3>
            <p className="mt-3 text-slate-600">
              Graduate school, MBA, law, medical school, healthcare, and
              residency services.
            </p>
            <span className="inline-block mt-5 rounded-full bg-[#C94D2B] text-white px-5 py-3 font-semibold">
              Open Graduate and Professional Order Form
            </span>
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-600">
          For academic crisis consulting, private school admissions, or a
          service not listed in the form, call{" "}
          <a className="underline" href="tel:+13109514008">
            310-951-4008
          </a>{" "}
          to confirm your order.
        </p>
      </div>
    </section>
  );
}
