import { Metadata } from "next";
import { PaymentForm } from "@/components/PaymentForm";

export const metadata: Metadata = {
  title: { absolute: "Payments - SOS Admissions" },
  alternates: {
    canonical: "https://sosadmissions.com/payment/",
  },
  openGraph: {
    title: "Payments - SOS Admissions",
    url: "https://sosadmissions.com/payment/",
    type: "website",
  },
};

export default function PaymentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-navy">
            Secure Payment
          </h1>
          <p className="text-xl text-slate-600">
            Choose your service and complete payment to get started with SOS
            Admissions.
          </p>
        </div>
      </section>

      <PaymentForm />
    </>
  );
}
