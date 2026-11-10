import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TrustBar } from "@/components/TrustLogos";
import { pageMetadata } from "@/lib/page-metadata";

const title = "MPH & DrPH Admissions Consulting | SOS Admissions";
const description = "Plan your public health application with help on MPH program selection, SOPHAS essays, resumes, recommendations and interviews, plus dedicated DrPH guidance.";
const url = "https://sosadmissions.com/public-health-admissions/";

export const metadata: Metadata = pageMetadata({
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "website" },
});

const services = [
  {
    title: "Application planning and program selection",
    text: "Build a program list around your public health interests, academic preparation and career plans. We help you compare concentrations, eligibility, format and fieldwork opportunities, then organize the requirements and deadlines for your chosen schools.",
  },
  {
    title: "Personal statements and supplemental essays",
    text: "Explain why you want to study public health and what you hope to do with that training. We help you select relevant experiences, develop clear answers and revise each essay for its actual prompt, while preserving your voice and following the school's rules on outside assistance.",
  },
  {
    title: "Resumes, CVs and experience descriptions",
    text: "Present your research, employment, service and academic work clearly. Show what you did, who your work served and what you learned, using accomplishments and responsibilities you can support. We help your resume and application entries complement one another without needless repetition.",
  },
  {
    title: "Recommendation planning",
    text: "Identify recommenders who know your work and can discuss your readiness for graduate study. We help you organize useful background materials and track each program's requirements. Recommenders remain responsible for their evaluations and submissions.",
  },
  {
    title: "SOPHAS and school-specific requirements",
    text: "For programs that use SOPHAS, we help you organize the written application components alongside each school's additional instructions. A shared application system does not make every school's prompts, eligibility rules or deadlines the same.",
  },
  {
    title: "Interview preparation",
    text: "If your program invites you to interview, practice explaining your preparation, public health interests and reasons for applying. Coaching and mock interviews help you give specific answers and discuss your experiences with confidence.",
  },
];

const questions = [
  {
    question: "Do all public health programs use SOPHAS?",
    answer: "Check each program's application instructions. Many public health programs use SOPHAS, while some require a different process or additional school-specific steps. We help you organize the requirements for the programs you select.",
  },
  {
    question: "Do I need professional experience before applying?",
    answer: "Requirements depend on the degree and program. MPH pathways can have different entry requirements, and DrPH programs commonly expect substantial professional experience and a relevant graduate degree. Confirm which types of experience count for each target program.",
  },
  {
    question: "Can I use one statement for every school?",
    answer: "Some experiences may be relevant across applications, but each statement should answer the specific prompt and explain why that program fits your goals. Word limits and required topics can differ, even within SOPHAS.",
  },
  {
    question: "Can I get help with only part of my application?",
    answer: "Yes. Tell us whether you need help with program selection, essays, a resume or CV, recommendations, interviews, or a broader application plan. Your consultation will help identify the services that fit your needs.",
  },
];

function ConsultationLink() {
  return <Link href="/contact-us/" className="inline-flex rounded-full bg-[#C94D2B] px-6 py-3 font-semibold text-white hover:bg-[#B94224] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy">Schedule a Free Initial Consultation</Link>;
}

export default function PublicHealthAdmissionsPage() {
  const schema = { "@context": "https://schema.org", "@type": "Service", name: "MPH and DrPH Admissions Consulting", description, url, provider: { "@id": "https://sosadmissions.com/#organization" } };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="sos-hero border-b border-slate-200 bg-white px-4 py-9 text-center text-navy md:py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-3xl font-bold leading-tight [text-wrap:balance] sm:text-5xl">MPH Admissions Consulting</h1>
          <p className="mx-auto mb-5 max-w-3xl text-lg leading-relaxed text-slate-700">Connect your experience to the public health work you want to pursue. SOS Admissions helps you choose MPH programs and prepare essays, resumes and other application materials that explain your preparation and goals.</p>
          <ConsultationLink />
          <p className="mt-4 text-base text-slate-600">Also supporting experienced professionals applying to Doctor of Public Health (DrPH) programs.</p>
        </div>
      </section>
      <TrustBar />
      <section className="px-4 py-9">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-3xl font-bold text-navy">Build an application around your public health goals</h2>
          <p className="mb-6 max-w-4xl leading-relaxed text-slate-700">An interest in improving health is a starting point. Your application should also explain the questions, communities or systems you want to work with, the preparation you bring and the training you need next. Whether your experience comes from research, clinical work, community service, policy or another field, we help you make those connections specific.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => <section key={service.title} className="sos-card rounded-xl border border-slate-200 bg-white p-5"><h3 className="mb-3 text-xl font-bold text-navy">{service.title}</h3><p className="leading-relaxed text-slate-700">{service.text}</p></section>)}
          </div>
        </div>
      </section>
      <section id="drph" className="border-y border-slate-200 bg-slate-50 px-4 py-9">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-3xl font-bold text-navy">Applying to Doctor of Public Health programs</h2>
          <div className="max-w-4xl space-y-4 leading-relaxed text-slate-700">
            <p>DrPH programs emphasize advanced public health practice and leadership. Your application needs to explain how your professional experience has prepared you for that work, which challenges you want to address and why doctoral training fits this stage of your career.</p>
            <p>We help you check each program's degree and experience requirements, select evidence of your leadership and analytical work, and prepare statements and a CV that reflect your actual responsibilities. DrPH prompts deserve their own answers, rather than a lightly revised MPH statement.</p>
          </div>
        </div>
      </section>
      <section className="px-4 py-9">
        <div className="mx-auto grid max-w-5xl items-center gap-7 md:grid-cols-2">
          <Image src="/images/legacy/sosresumeservice.webp" alt="The SOS Admissions consulting team" width={785} height={492} className="h-auto w-full rounded-xl" unoptimized />
          <div><h2 className="mb-4 text-3xl font-bold text-navy">Start with your plans and experience</h2><p className="mb-4 leading-relaxed text-slate-700">Bring your resume or CV, target programs and any application prompts you already have. Tell us your intended concentration, preferred study format and deadlines. We can discuss the parts of the application where you would like support and the next steps for working together.</p><Link href="/about-us/" className="font-semibold text-navy underline underline-offset-4">Meet our admissions consultants</Link></div>
        </div>
      </section>
      <section className="px-4 pb-9">
        <div className="mx-auto max-w-4xl"><h2 className="mb-4 text-3xl font-bold text-navy">Public health application questions</h2>{questions.map((item) => <details key={item.question} className="border-b border-slate-200 py-4"><summary className="cursor-pointer font-semibold text-navy">{item.question}</summary><p className="pt-3 leading-relaxed text-slate-700">{item.answer}</p></details>)}
          <p className="mt-5 text-sm leading-relaxed text-slate-600">For official requirements, consult your target programs and the <a href="https://aspph.org/student-journey/sophas/" className="underline underline-offset-4">SOPHAS application resources</a>. Check accreditation through <a href="https://ceph.org/about/org-info/who-we-accredit/accredited/" className="underline underline-offset-4">CEPH's directory</a>. Admission decisions remain with the schools; consulting does not guarantee admission.</p>
        </div>
      </section>
      <section className="border-t border-slate-200 bg-white px-4 py-9 text-center"><h2 className="mb-5 text-2xl font-bold text-navy sm:text-3xl">Discuss your MPH or DrPH application</h2><ConsultationLink /></section>
    </>
  );
}
