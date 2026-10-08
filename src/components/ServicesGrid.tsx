import Link from "next/link";

const serviceLinks = [
  { label: "College Admissions", href: "/college-admissions" },
  { label: "College Transfers", href: "/college-transfers" },
  { label: "College Interviews", href: "/college-interviews" },
  { label: "Private School Admissions", href: "/private-school-admissions" },
  {
    label: "Graduate School Application",
    href: "/graduate-school-application",
  },
  { label: "Graduate School Interview", href: "/graduate-school-interview" },
  { label: "Law School Application", href: "/law-school-application" },
  { label: "MBA Admissions", href: "/mba" },
  { label: "MBA Interview", href: "/mba-interview" },
  { label: "Personal Statement", href: "/personal-statement" },
  {
    label: "Computer Science Admissions",
    href: "/computer-science-admissions-consultant",
  },
  {
    label: "Psychology & Counseling Admissions",
    href: "/psychology-counseling-admissions",
  },
  { label: "Medical School Application", href: "/medical-school-application" },
  {
    label: "Medical School Consulting",
    href: "/medical-school-admissions-consulting",
  },
  { label: "Medical School Interview", href: "/medical-school-interview" },
  { label: "Medical Residency", href: "/medical-residency" },
  {
    label: "Medical Residency Interview",
    href: "/medical-residency-interview",
  },
  { label: "Dental School Application", href: "/dental-school-application" },
  { label: "PA School Admissions", href: "/pa-school-admissions-consulting" },
  { label: "CRNA Admissions", href: "/crna-admissions" },
  { label: "Nurse Practitioner Admissions", href: "/np-admissions" },
  { label: "General Nursing", href: "/general-nursing" },
  {
    label: "Veterinary School Admissions",
    href: "/veterinary-school-admissions",
  },
  { label: "BS-MD Programs", href: "/bs-md-admissions-consulting" },
  { label: "Academic Crisis Consulting", href: "/academic-crisis-consulting/" },
  {
    label: "Speech-Language Pathology",
    href: "/speech-language-pathology-slp-admissions-consultant/",
  },
];

export function ServicesGrid() {
  return (
    <section className="relative py-10 md:py-14 lg:py-16 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 animate-[fadeInUp_0.6s_ease-out_both]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            Explore Our Admissions Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {serviceLinks.map((service, index) => (
            <Link
              key={service.label}
              href={service.href}
              className="animate-[fadeInUp_0.45s_ease-out_both]"
              style={{ animationDelay: `${0.08 + index * 0.03}s` }}
            >
              <span className="flex h-full min-h-[72px] items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-navy shadow-sm transition-all duration-300 hover:border-[#E8613C]/40 hover:bg-[#FFF7F3] hover:text-[#B94224]">
                {service.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
