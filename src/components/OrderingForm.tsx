import { ORDERING_FORM } from "@/data/forms";

export function OrderingForm() {
  return (
    <section className="px-4 py-8">
      <div className="max-w-3xl mx-auto rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-navy mb-4">Start Your Order</h2>
        <p className="text-slate-600 leading-relaxed">
          Begin with your name and contact details in the SOS Admissions Ordering
          Form, then follow its steps to review the available purchase options.
          Please call before ordering if you need help selecting a service or
          applying credit from a previous purchase.
        </p>
        <a href={ORDERING_FORM} className="inline-flex mt-6 rounded-full bg-[#C94D2B] text-white font-semibold px-6 py-3 hover:bg-[#B94224]">
          Open the SOS Admissions Ordering Form
        </a>
        <p className="text-sm text-slate-600 mt-5">
          The form opens on our Wufoo page. For assistance, call{" "}
          <a className="underline" href="tel:+13109514008">310-951-4008</a>.
        </p>
      </div>
    </section>
  );
}
