import { pageMetadata } from "@/lib/page-metadata";
import { Metadata } from "next";
import { PaymentForm } from "@/components/PaymentForm";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "SOS Admissions Payments - SOS Admissions" },
  description: "Review SOS Admissions services and pay securely using the college, transfer, graduate, or professional program payment form.",
  alternates: {
    canonical: "https://sosadmissions.com/payment/",
  },
  openGraph: {
    title: "SOS Admissions Payments - SOS Admissions",
    url: "https://sosadmissions.com/payment/",
    type: "website",
  },
});

export default function PaymentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-7 pb-3 sm:pt-9 sm:pb-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-navy">
            Secure Payment
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Choose your service and complete payment to get started with SOS
            Admissions.
          </p>
        </div>
      </section>

      <PaymentForm />
    </>
  );
}
