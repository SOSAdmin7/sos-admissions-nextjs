import { Metadata } from "next";
import { InfoFormClient } from "./InfoFormClient";

export const metadata: Metadata = {
  title: { absolute: "Preliminary Information Form - SOS Admissions" },
  description:
    "Complete our preliminary information form to get started with SOS Admissions consulting for college, medical school, law school, MBA, or graduate programs.",
  alternates: {
    canonical: "https://sosadmissions.com/info-form/",
  },
  openGraph: {
    title: "Preliminary Information Form - SOS Admissions",
    description:
      "Complete our preliminary information form to get started with SOS Admissions consulting for college, medical school, law school, MBA, or graduate programs.",
    url: "https://sosadmissions.com/info-form/",
    type: "website",
  },
};

export default function InfoFormPage() {
  return (
    <>
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#1B2B4B]">
            Preliminary Information Form
          </h1>
          <p className="text-lg text-slate-600">
            Complete the form below to share your background
            and admissions goals with our team.
          </p>
        </div>
      </section>

      <InfoFormClient />
    </>
  );
}
