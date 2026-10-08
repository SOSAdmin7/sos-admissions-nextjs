"use client";

import { useState } from "react";
import { COLLEGE_PAYMENT_FORM, PROFESSIONAL_PAYMENT_FORM } from "@/data/forms";
import { EmbeddedForm } from "./EmbeddedForm";

export function PaymentForm() {
  const [program, setProgram] = useState("college");
  const [graduateOpened, setGraduateOpened] = useState(false);
  return (
    <section id="payment-form" className="scroll-mt-24 px-4 pt-4 pb-8">
      <div className="max-w-4xl mx-auto">
        <fieldset className="mb-4">
          <legend className="text-2xl font-bold text-navy mb-3">Choose Your Program</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["college", "College, Transfer, and SAT/ACT"],
              ["graduate", "Graduate and Professional Programs"],
            ].map(([value, label]) => (
              <label key={value} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 font-semibold text-navy ${program === value ? "border-[#C94D2B] bg-orange-50" : "border-slate-200 bg-white"}`}>
                <input type="radio" name="payment-program" value={value} checked={program === value} onChange={() => { setProgram(value); if (value === "graduate") setGraduateOpened(true); }} className="h-4 w-4 shrink-0 accent-[#C94D2B]" />
                {label}
              </label>
            ))}
          </div>
        </fieldset>
        <p className="text-slate-600 mb-5">
          Review the services and total before paying. Call 310-951-4008 first if
          you have a previous purchase to credit, need additional schools, or
          want help choosing the right service.
        </p>
        {/* Load each form when first shown, then keep it mounted to preserve entered details. */}
        <div hidden={program !== "college"} className="rounded-xl border border-slate-200 bg-white p-1 sm:p-4">
          <EmbeddedForm url={COLLEGE_PAYMENT_FORM} title="SOS Admissions College and Transfer Payment" />
        </div>
        {graduateOpened && <div hidden={program !== "graduate"} className="rounded-xl border border-slate-200 bg-white p-1 sm:p-4">
          <EmbeddedForm url={PROFESSIONAL_PAYMENT_FORM} title="SOS Admissions Graduate and Professional Payment" />
        </div>}
        <p className="mt-6 text-sm text-slate-600">
          For academic crisis consulting, private school admissions, or a service
          not listed in the form, call <a className="underline" href="tel:+13109514008">310-951-4008</a> to confirm your order.
        </p>
      </div>
    </section>
  );
}
