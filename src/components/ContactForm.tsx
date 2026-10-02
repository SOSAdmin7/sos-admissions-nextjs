import { CONTACT_FORM } from "@/data/forms";
export function ContactForm() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-3xl mx-auto rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-navy mb-4">
          Schedule a Free Initial Consultation
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Tell us about your admissions goals using our contact form. The
          initial phone consultation is 15 minutes. Consulting appointments are
          available by phone, video, or in person by appointment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href={CONTACT_FORM}
            className="inline-flex justify-center rounded-full bg-[#C94D2B] text-white font-semibold px-6 py-3 hover:bg-[#B94224]"
          >
            Open the Contact Form
          </a>
          <a
            href="tel:+13109514008"
            className="inline-flex justify-center rounded-full border border-navy text-navy font-semibold px-6 py-3"
          >
            Call 310-951-4008
          </a>
        </div>
        <p className="text-sm text-slate-600 mt-5">
          The contact form opens on our secure Wufoo form page. Submit your
          details there to request a consultation.
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
