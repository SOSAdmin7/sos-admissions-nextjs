import { PRELIMINARY_INFORMATION_FORM } from "@/data/forms";

export function InfoFormClient() {
  return (
    <section className="px-4 py-8">
      <div className="max-w-3xl mx-auto rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
        <p className="text-slate-600 mb-5">
          Share your background and application goals in our Preliminary
          Information Form. It opens on our Wufoo page.
        </p>
        <a href={PRELIMINARY_INFORMATION_FORM} className="inline-flex rounded-full bg-[#C94D2B] text-white font-semibold px-6 py-3 hover:bg-[#B94224]">
          Open the Preliminary Information Form
        </a>
      </div>
    </section>
  );
}
