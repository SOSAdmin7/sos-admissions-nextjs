import { PRELIMINARY_INFORMATION_FORM } from "@/data/forms";
import { EmbeddedForm } from "@/components/EmbeddedForm";

export function InfoFormClient() {
  return (
    <section className="px-4 py-8">
      <div className="max-w-3xl mx-auto rounded-xl border border-slate-200 bg-white p-3 sm:p-6">
        <EmbeddedForm url={PRELIMINARY_INFORMATION_FORM} title="SOS Admissions Preliminary Information Form" hideHeader initialHeight={2400} />
      </div>
    </section>
  );
}
