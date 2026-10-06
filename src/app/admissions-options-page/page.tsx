import { Metadata } from "next";
import { PurchaseForm } from "../purchase/PurchaseForm";

export const metadata: Metadata = {
  title: {
    absolute: "Admissions Consulting Services & Options - SOS Admissions",
  },
  description:
    "Explore our admissions consulting services for college, graduate school, medical school, law school, MBA, and professional programs. Find the right package for you.",
  alternates: {
    canonical: "https://sosadmissions.com/admissions-options-page/",
  },
  openGraph: {
    title: "Admissions Consulting Services & Options - SOS Admissions",
    description:
      "Explore our admissions consulting services for college, graduate school, medical school, law school, MBA, and professional programs. Find the right package for you.",
    url: "https://sosadmissions.com/admissions-options-page/",
    type: "website",
  },
};

export default function AdmissionsOptionsPage() {
  return (
    <>
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#1B2B4B]">
            Start Your Admissions Journey
          </h1>
          <p className="text-lg text-slate-600">
            Start with the SOS Admissions Ordering Form to share your contact
            details and review the available purchase options.
          </p>
        </div>
      </section>

      <PurchaseForm />
    </>
  );
}
