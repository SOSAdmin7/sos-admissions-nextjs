import Image from "next/image";

// Address, suites, photo and map come from the WordPress Contact page.
// Its department addresses are explicitly mailing addresses, not walk-in locations.
export function OfficeLocation() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8 bg-white" aria-labelledby="office-location-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="office-location-heading" className="text-2xl sm:text-3xl font-bold text-navy mb-5">
          Office and Appointments
        </h2>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <Image
              src="/images/legacy/contactusimage.png"
              alt="SOS Admissions reception area"
              width={580}
              height={310}
              unoptimized
              className="w-full max-w-[580px] h-auto rounded-xl border border-slate-200"
            />
            <p className="mt-4 text-sm text-slate-700 leading-relaxed">
              Office hours: 6:00 a.m. to 9:00 p.m. PT, seven days a week.
              Consulting appointments: 8:00 a.m. to 10:00 p.m. PT, seven days a week.
            </p>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              All meetings are by appointment only. Call{" "}
              <a href="tel:+13109514008" className="underline">310-951-4008</a>{" "}
              to confirm your meeting location.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy mb-3">Department Mailing Addresses</h3>
            <p className="text-slate-700 mb-4">10866 Wilshire Blvd., Los Angeles, CA 90024</p>
            <dl className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                ["College Admissions", "Suite 402"],
                ["MBA Admissions", "Suite 406"],
                ["Graduate Admissions", "Suite 412"],
                ["Medical School Admissions", "Suite 411"],
              ].map(([label, suite]) => (
                <div key={suite} className="border-l-2 border-navy pl-3">
                  <dt className="font-semibold text-navy">{label}</dt>
                  <dd className="text-slate-700 mt-1">{suite}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <iframe
          title="Map of the SOS Admissions mailing address at 10866 Wilshire Boulevard"
          src="https://maps.google.com/maps?q=10866%20Wilshire%20Blvd,%20Los%20Angeles,%20CA%2090024&t=m&z=15&output=embed&iwloc=near"
          width="100%"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mt-5 w-full rounded-xl border border-slate-200"
        />
        <p className="mt-2 text-sm">
          <a href="https://www.google.com/maps/search/?api=1&query=10866%20Wilshire%20Blvd%2C%20Los%20Angeles%2C%20CA%2090024" target="_blank" rel="noopener noreferrer" className="text-navy underline">
            Open mailing address in Google Maps
          </a>
        </p>
      </div>
    </section>
  );
}
