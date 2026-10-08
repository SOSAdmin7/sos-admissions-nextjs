import { EmbeddedForm } from "./EmbeddedForm";
import { ORDERING_FORM } from "@/data/forms";

export function OrderingForm() {
  return (
    <section className="px-4 pt-4 pb-8">
      <div className="max-w-3xl mx-auto rounded-xl border border-slate-200 bg-slate-50 p-2 sm:p-5">
        <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3">Start Your Order</h2>
        <p className="text-slate-600 leading-relaxed">
          Begin with your name and contact details in the SOS Admissions Ordering
          Form, then follow its steps to review the available purchase options.
          Please call before ordering if you need help selecting a service or
          applying credit from a previous purchase.
        </p>
        <div className="mt-4 rounded-lg bg-white sm:p-2">
          <EmbeddedForm url={ORDERING_FORM} title="SOS Admissions Ordering Form" hideHeader />
        </div>
        <p className="text-sm text-slate-600 mt-5">
          For assistance, call{" "}
          <a className="underline" href="tel:+13109514008">310-951-4008</a>.
        </p>
      </div>
    </section>
  );
}
