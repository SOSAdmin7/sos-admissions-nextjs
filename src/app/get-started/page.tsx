import { Metadata } from "next";
import { OrderForm } from "./OrderForm";

// New-design-only page (not on the old site) — keep out of the index so the
// indexable URL set mirrors sosadmissions.com exactly
export const metadata: Metadata = {
  title: { absolute: "Get Started - SOS Admissions Order Forms" },
  description:
    "Select your admissions consulting package. A la carte services and complete packages available for college, graduate, medical, law, MBA, and more.",
  robots: { index: false, follow: true },
};

export default function GetStartedPage() {
  return (
    <>
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D1B2A] to-[#1B2B4B]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#E8613C] text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Get Started
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            SOS Admissions Order Forms
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Choose the order form for your program. Call us before ordering if
            you need help selecting a service.
          </p>
        </div>
      </section>

      <OrderForm />
    </>
  );
}
