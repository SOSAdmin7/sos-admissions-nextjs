import { EmbeddedForm } from "./EmbeddedForm";
import { CONTACT_FORM } from "@/data/forms";
export function ContactForm() {
  return (
    <section className="pt-4 pb-8 px-4">
      <div className="max-w-3xl mx-auto rounded-xl border border-slate-200 bg-slate-50 p-2 sm:p-5">
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
        <div className="mt-8 border-t border-slate-200 pt-6">
          <h3 className="text-xl font-bold text-navy mb-3">
            Office and Appointments
          </h3>
          <p className="text-slate-600">
            Office hours: 6:00 a.m. to 9:00 p.m. PT, seven days a week.
            Consulting appointments: 8:00 a.m. to 10:00 p.m. PT, seven days a
            week. All meetings are by appointment only.
          </p>
          <h3 className="text-xl font-bold text-navy mt-6 mb-3">
            Department Mailing Addresses
          </h3>
          <p className="text-slate-600 mb-3">
            10866 Wilshire Blvd., Los Angeles, CA 90024
          </p>
          <dl className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              ["College Admissions", "Suite 402"],
              ["MBA Admissions", "Suite 406"],
              ["Graduate Admissions", "Suite 412"],
              ["Medical School Admissions", "Suite 411"],
            ].map(([label, suite]) => (
              <div key={suite}>
                <dt className="font-semibold text-navy">{label}</dt>
                <dd className="text-slate-600">{suite}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
