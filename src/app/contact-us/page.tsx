import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
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
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-navy">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600">
            Schedule a Free Initial Consultation with our expert admissions
            consultants.
          </p>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
