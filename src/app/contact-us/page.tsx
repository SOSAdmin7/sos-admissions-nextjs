import { pageMetadata } from "@/lib/page-metadata";
import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = pageMetadata({
  title: {
    absolute: "Contact SOS Admissions | College & Graduate School Consulting",
  },
  description:
    "Contact SOS Admissions for expert help with college, medical school, law school, MBA, and graduate school applications. Call 310-951-4008 or request a consultation.",
  alternates: {
    canonical: "https://sosadmissions.com/contact-us/",
  },
  openGraph: {
    title: "Contact SOS Admissions | College & Graduate School Consulting",
    description:
      "Contact SOS Admissions for expert help with college, medical school, law school, MBA, and graduate school applications. Call 310-951-4008 or request a consultation.",
    url: "https://sosadmissions.com/contact-us/",
    type: "website",
  },
});

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-7 pb-3 sm:pt-9 sm:pb-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-navy">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Schedule a Free Initial Consultation with our expert admissions
            consultants.
          </p>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
