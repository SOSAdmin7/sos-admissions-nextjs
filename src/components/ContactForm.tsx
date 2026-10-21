import { EmbeddedForm } from "./EmbeddedForm";
import { CONTACT_FORM } from "@/data/forms";
export function ContactForm() {
  return (
    <section className="pt-4 pb-8 px-4">
      <div className="max-w-3xl mx-auto rounded-xl border border-slate-200 bg-white p-2 sm:p-5">
        <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3">
          Schedule a Free Initial Consultation
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Tell us about your admissions goals using our contact form. The
          initial phone consultation is 15 minutes. Consulting appointments are
          available by phone, video, or in person by appointment.
        </p>
        <div className="mt-4 rounded-lg bg-white sm:p-2">
          <EmbeddedForm url={CONTACT_FORM} title="SOS Admissions Contact Form" hideHeader initialHeight={800} />
        </div>
        <p className="mt-4 text-slate-600">
          Prefer to speak with us? <a href="tel:+13109514008" className="underline">Call 310-951-4008</a>.
        </p>

      </div>
    </section>
  );
}
