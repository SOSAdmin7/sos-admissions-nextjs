import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Scale, CheckCircle2, Phone, AlertTriangle, Lock } from 'lucide-react';
import { TrustBar } from '@/components/TrustLogos';

export const metadata: Metadata = {
  title: {
    absolute:
      'Academic Crisis Consulting | Dismissal, Misconduct & Disciplinary Help | SOS Admissions',
  },
  description:
    'Facing dismissal, an academic misconduct accusation, or a disciplinary hearing? SOS Admissions has guided students through academic crises since 1998. Protect your record and continue your education. Free initial consultation: 310-951-4008.',
  alternates: {
    canonical: 'https://sosadmissions.com/academic-crisis-consulting/',
  },
  openGraph: {
    title:
      'Academic Crisis Consulting | Dismissal, Misconduct & Disciplinary Help | SOS Admissions',
    description:
      'Facing dismissal, an academic misconduct accusation, or a disciplinary hearing? SOS Admissions has guided students through academic crises since 1998.',
    url: 'https://sosadmissions.com/academic-crisis-consulting/',
    type: 'website',
  },
};

const WHO_ITS_FOR = [
  'Students accused of academic dishonesty, plagiarism, or unauthorized AI use',
  'Students and residents facing dismissal for unprofessional conduct',
  'Students accused of cheating on standardized tests such as the LSAT or licensure examinations',
  'Students threatened with dismissal after interpersonal conflicts or accusations of threatening behavior',
  'Medical residents facing termination or non-renewal from their programs',
  'Applicants with a criminal record, licensure flag, or disciplinary history who must explain it to a school, a state bar, or a licensing board',
  'Students who have already been dismissed and need to transfer and finish their degree',
];

const RESULTS = [
  'A medical student was dismissed with cause for unprofessional conduct. We negotiated with the school, and the dean issued a letter confirming the student had voluntarily withdrawn, had never failed a class, and had never been accused of academic dishonesty or unprofessional conduct. The student transferred to another medical school without difficulty.',
  "When a university violated a client's educational privacy rights, we filed a complaint with the Liaison Committee on Medical Education. The school's accreditation was placed on probation for 19 months.",
  'A doctoral student dismissed over AI use transferred to another institution and completed her doctorate.',
  'A student dismissed from a major university after being accused of threatening a professor transferred to another institution and graduated without incident.',
  'A medical resident dismissed for unprofessional conduct transferred successfully to another residency program.',
  'An overworked nurse was falsely accused of hiring a proxy test-taker after she briefly fell asleep during a remote exam on a secure network. We helped her contest the accusation within the university’s own disciplinary procedures. She was exonerated, without attorneys, and completed her education without incident.',
  'A client with a misdemeanor conviction gained admission to three law schools with our character and fitness statement. After graduation, the same statement won state bar approval, and the bar waived the required hearing.',
  'A student accused of cheating on the LSAT gained admission to law school and later transferred to a stronger law school.',
  'A student whose undergraduate education was disrupted by a false accusation, of which he was fully acquitted, gained admission to law school with our guidance.',
  'Several nurses in recovery from drug dependency, each carrying license flags, gained admission to nurse practitioner and CRNA programs.',
];

interface Service {
  name: string;
  price: string;
  note?: string;
  description: string;
  featured?: boolean;
}

const SERVICES: Service[] = [
  {
    name: 'Crisis Evaluation & Strategy Session',
    price: '$1,575',
    note: 'Credited in full toward any package',
    featured: true,
    description:
      'The required first step for every crisis engagement. Within 24 hours of receiving your documents, a senior consultant reviews your dismissal letter, allegation notice, school policies, and timeline, then meets with you for a 90 minute strategy session. You leave with a written action plan: what to say, what not to say, which deadlines control your case, and which path (contest, negotiate, withdraw, or transfer) protects your future best.',
  },
  {
    name: 'Academic Crisis Strategy Package',
    price: 'Starting at $12,500',
    note: 'Priority Rush Service available for deadlines within 48 hours (50% surcharge), subject to consultant availability',
    featured: true,
    description:
      "Our comprehensive engagement for students facing dismissal or serious charges. One senior consultant manages your entire crisis from first response through final resolution: complete case analysis against your school's own written policies, response strategy for every meeting and hearing, all written responses and statements, disciplinary hearing preparation, negotiation for voluntary withdrawal on clean terms, transfer strategy and full application support if needed, and unlimited consultations seven days a week until your situation is resolved.",
  },
  {
    name: 'Written Response to Accusations',
    price: '$3,975',
    description:
      'A single document can decide a case. We craft your formal written response: your account of the situation, told completely, diplomatically, and persuasively, in language calibrated to how deans and conduct committees actually read. This is the crisis equivalent of the personal statement work we have refined over thousands of applications since 1998.',
  },
  {
    name: 'Disciplinary Hearing Preparation',
    price: '$3,475',
    description:
      'We are the foremost experts in admissions interview preparation, and a disciplinary hearing is the highest-stakes interview of your life. We prepare you to face deans, academic committees, and conduct boards: your opening statement, answers to the hardest questions, tone, composure, and the specific phrasing that de-escalates rather than inflames. Includes full mock hearings with detailed feedback.',
  },
  {
    name: 'Academic Appeal or Reconsideration Statement',
    price: '$3,975',
    description:
      "If a decision has already gone against you, we analyze the decision letter and your school's appeal standards, identify the grounds most likely to succeed, and write a complete, persuasive appeal.",
  },
  {
    name: 'Character & Fitness Statement Consulting',
    price: '$4,975',
    description:
      'For law school applicants, state bar candidates, and advanced practice nursing applicants who must disclose a conviction, a sanction, or a license flag. We write the statement once and write it right: our clients have used a single statement to win law school admission and, years later, state bar licensure, with the required hearing waived.',
  },
  {
    name: 'Disciplinary Explanation',
    price: '$2,485',
    description:
      'A concise, carefully worded explanation for a new school describing the circumstances under which you left your prior program.',
  },
  {
    name: 'Academic Performance Explanation',
    price: '$2,485',
    description:
      'A carefully worded explanation for a school or program addressing a period of poor academic performance, framed around what changed and why it will not recur.',
  },
];

const STEPS = [
  {
    title: 'Call for a free, confidential consultation',
    body: 'Call 310-951-4008. We will tell you honestly whether we can help.',
  },
  {
    title: 'Crisis Evaluation & Strategy Session',
    body: 'Within 24 hours we review everything and deliver your written action plan.',
  },
  {
    title: 'Engagement',
    body: 'You select the package or services your situation requires. Your Crisis Evaluation fee is credited in full.',
  },
  {
    title: 'Resolution',
    body: 'We work with you until the crisis is resolved and your education is back on track.',
  },
];

const FAQS = [
  {
    q: 'Are you attorneys?',
    a: "No. We are educational consultants. We help you resolve the situation within your school's own processes and continue your education. Most academic crises are resolved through strategy and negotiation, not litigation. If your situation genuinely requires an attorney, we will say so.",
  },
  {
    q: 'Is my information confidential?',
    a: 'Yes. Every conversation and every document is held in strict confidence.',
  },
  {
    q: 'Do you guarantee an outcome?',
    a: 'No consultant or attorney can ethically guarantee an outcome. We guarantee senior-level attention, a strategy grounded in nearly three decades of experience, and complete honesty about your options at every step.',
  },
  {
    q: 'My hearing is in a few days. Is it too late?',
    a: 'Call immediately. We take urgent engagements and have prepared clients on short timelines. The worst decision is to face the hearing unprepared.',
  },
  {
    q: 'Do you provide special education services?',
    a: 'No. We do not provide special education services of any kind.',
  },
  {
    q: 'I was dismissed from medical school. What do I do now?',
    a: 'Act before your response and appeal windows close. Do not send explanations or sign anything yet. Gather your dismissal letter, your school\u2019s written policies, and your timeline, and get senior guidance on whether to contest, negotiate, withdraw on clean terms, or transfer. Many dismissed students continue their education; the path depends on decisions made in the first days.',
  },
  {
    q: 'Can my school actually prove I used ChatGPT or AI?',
    a: 'AI-detection tools such as Turnitin and GPTZero produce probabilistic scores, not proof, and false positives are well documented. Schools still discipline students based on these reports, so the accusation must be answered carefully and on the record. How you respond, and what you concede, matters more than the detector output.',
  },
  {
    q: 'Should I just admit it to get it over with?',
    a: 'Not before you understand the consequences. An admission can follow you to transfer applications, licensure boards, ERAS, and state bars for years. Sometimes accepting responsibility on negotiated terms is the right strategy, but that decision should be made deliberately, with the endgame in view, never under pressure in a first meeting.',
  },
  {
    q: 'How do I appeal a residency termination or non-renewal?',
    a: 'Start with your program\u2019s and institution\u2019s written due-process procedures: grounds for appeal, deadlines, and who decides. Appeals succeed on procedure, documentation, and persuasive written argument, not on outrage. We analyze the decision against the program\u2019s own policies, identify the strongest grounds, and prepare the written appeal and your hearing performance.',
  },
  {
    q: 'Will this follow me to licensure, ERAS, or the bar?',
    a: 'It can. Dismissals, findings of misconduct, and even the wording of a dean\u2019s letter surface in ERAS applications, state bar character and fitness reviews, and licensing board questions. That is exactly why the terms and wording of any resolution matter as much as the outcome itself, and why we negotiate the record, not just the result.',
  },
];

export default function AcademicCrisisConsultingPage() {
  // FAQPage structured data — targets featured snippets for crisis searches
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0D1B2A] via-[#1B2B4B] to-[#2A4066] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#E8613C] rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#2A4066] rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-14 md:py-20">
          <span className="inline-block text-[#E8613C] text-sm font-semibold uppercase tracking-[0.15em] mb-6">
            Academic Crisis Consulting
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
            Protect your record. Navigate the crisis. Continue your education.
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 mb-4 max-w-3xl mx-auto leading-relaxed">
            A mistake, a misunderstanding, or a false accusation should not end your career. The
            decisions you make in the first days after receiving a dismissal letter or disciplinary
            notice will shape the rest of your education and your professional life.
          </p>
          <p className="text-sm text-blue-200/70 mb-8 max-w-2xl mx-auto">
            Strictly confidential. Transparent, published pricing. Available by phone 6:00 a.m. to
            9:00 p.m. PT, seven days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-[#E8613C] hover:bg-[#D4522E] text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg shadow-lg shadow-[#E8613C]/25"
            >
              Schedule a Free Initial Consultation
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+13109514008"
              className="inline-flex items-center gap-2 text-white hover:text-[#E8613C] transition-colors font-medium"
            >
              <Phone className="w-5 h-5" /> (310) 951-4008
            </a>
          </div>
          <p className="mt-5 text-blue-200/60 text-sm inline-flex items-center gap-2">
            <Lock className="w-4 h-4" /> Every conversation is strictly confidential.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Intro */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            Since 1998, SOS Admissions has quietly helped students in exactly this position: medical
            students, law students, doctoral candidates, undergraduates, nurses, and medical
            residents facing dismissal, disciplinary hearings, and career-threatening accusations. We
            know how universities actually make these decisions, because we have spent nearly three
            decades on the admissions side of the table.
          </p>
        </div>
      </section>

      {/* The first 48 hours */}
      <section className="py-14 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-3 text-center">
            The first 48 hours decide most cases
          </h2>
          <p className="text-gray-500 text-center max-w-3xl mx-auto mb-10">
            Appeal and response windows close fast, and missing a deadline can eliminate your options
            entirely. Before you reply to anyone at your school, do these four things.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: 'Do not respond yet', b: 'Do not answer the accusation, sign anything, or attend any meeting before you have a strategy. Well-intentioned explanations are the most common way students damage their own cases.' },
              { t: 'Do not admit or explain informally', b: 'Casual emails, hallway conversations, and apologetic messages become part of your record. Everything you say can be quoted in the hearing.' },
              { t: 'Calendar every deadline', b: 'Find the response, hearing, and appeal deadlines in your notice and your school\u2019s written policies. These dates control everything.' },
              { t: 'Get senior help immediately', b: 'Call (310) 951-4008 for a free, confidential initial consultation. Within 24 hours of engagement we review your documents and deliver a written action plan.' },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-[#F8F9FA] p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-[#E8613C] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <h3 className="font-bold text-[#1B2B4B]">{s.t}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-14 md:py-20 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4 text-center">
            Who this service is for
          </h2>
          <p className="text-gray-500 text-center max-w-3xl mx-auto mb-10">
            This applies at every level: high school, college, graduate school, medical school, law
            school, doctoral programs, nursing and advanced practice nursing programs, and medical
            residency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHO_ITS_FOR.map((item, i) => {
              const lone = i === WHO_ITS_FOR.length - 1 && WHO_ITS_FOR.length % 2 === 1;
              return (
                <div
                  key={i}
                  className={`flex gap-3 p-5 rounded-xl bg-white border border-gray-100 ${
                    lone ? 'md:col-span-2' : ''
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 text-[#E8613C] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1B2B4B] font-medium">{item}</span>
                </div>
              );
            })}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 flex items-start gap-3 rounded-xl border-2 border-amber-200 bg-amber-50 p-5">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900">
              Please note: SOS Admissions provides educational consulting services and does not
              provide legal representation or legal advice. We are not a law firm, and working with
              us does not create an attorney-client relationship. For matters requiring legal
              representation, we recommend consulting a licensed attorney. We do not provide special
              education services of any kind.
            </p>
          </div>
        </div>
      </section>

      {/* Why a consultant instead of a lawsuit */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-8 h-8 text-[#E8613C]" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B]">
              Why an educational consultant instead of a lawsuit
            </h2>
          </div>
          <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
            <p>
              The United States has an adversarial system of justice. Hiring an attorney to fight
              your school often escalates the situation instead of resolving it. Litigation against a
              university routinely takes one to five years, costs tens of thousands of dollars, and
              frequently ends with the student carrying an unofficial reputation as someone who sued
              a school, a reputation that follows every future application.
            </p>
            <p>
              Our goal is different. These are administrative proceedings, not courtrooms. We work to
              resolve the situation diplomatically, protect your record, and get you back on track as
              quickly as possible. In our experience, most academic crises are resolved through
              strategy, negotiation, and persuasive writing, not through the courtroom. When a matter
              genuinely requires an attorney, such as parallel criminal proceedings, we will tell you
              so directly.
            </p>
          </div>

          {/* Comparison */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl border-2 border-[#E8613C] bg-white p-6">
              <h3 className="text-lg font-bold text-[#1B2B4B] mb-4">Working within the school&apos;s process</h3>
              <ul className="space-y-3">
                {[
                  'Weeks, not years',
                  'Published, predictable pricing',
                  'Preserves the relationship with your school',
                  'Aims at a clean record and a path forward',
                  'Handled quietly and confidentially',
                ].map((t) => (
                  <li key={t} className="flex gap-2.5 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#E8613C] flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-[#F8F9FA] p-6">
              <h3 className="text-lg font-bold text-gray-500 mb-4">Suing the university</h3>
              <ul className="space-y-3">
                {[
                  'One to five years of litigation',
                  'Tens of thousands of dollars in fees',
                  'Escalates the conflict with your school',
                  'A public record that follows applications',
                  'Rarely returns you to the classroom sooner',
                ].map((t) => (
                  <li key={t} className="flex gap-2.5 text-gray-500">
                    <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-center font-bold">&middot;</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results — the centerpiece */}
      <section className="py-14 md:py-20 bg-[#1B2B4B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <ShieldCheck className="w-10 h-10 text-[#E8613C] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Results we have delivered</h2>
          </div>
          <p className="text-blue-100/70 text-center max-w-3xl mx-auto mb-10">
            Every case is different and no consultant can ethically promise a specific outcome. These
            are real client results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RESULTS.map((r, i) => {
              const lone = i === RESULTS.length - 1 && RESULTS.length % 2 === 1;
              return (
                <div
                  key={i}
                  className={`flex gap-4 rounded-2xl bg-white/[0.06] border border-white/10 p-6 ${
                    lone ? 'md:col-span-2' : ''
                  }`}
                >
                  <CheckCircle2 className="w-6 h-6 text-[#E8613C] flex-shrink-0 mt-0.5" />
                  <p className="text-blue-50/90 leading-relaxed">{r}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services / Pricing */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">
              Our Academic Crisis Services
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Transparent, published pricing. Every engagement begins with the Crisis Evaluation &
              Strategy Session, credited in full toward any package.
            </p>
          </div>
          <div className="space-y-5">
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className={`rounded-2xl border-2 p-6 md:p-8 ${
                  s.featured ? 'border-[#E8613C] bg-white shadow-lg shadow-[#E8613C]/5' : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-[#1B2B4B]">{s.name}</h3>
                  <div className="sm:text-right flex-shrink-0">
                    <div className="text-2xl font-bold text-[#1B2B4B] whitespace-nowrap">{s.price}</div>
                    {s.note && <div className="text-sm text-gray-400 mt-0.5">{s.note}</div>}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 md:py-20 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-12 text-center">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className="rounded-2xl bg-white border border-gray-100 p-6">
                <div className="w-11 h-11 rounded-full bg-[#E8613C] text-white font-bold flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-[#1B2B4B] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-10 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 bg-[#F8F9FA] p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 font-semibold text-[#1B2B4B]">
                  {f.q}
                  <ChevronRight className="w-5 h-5 text-[#E8613C] flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0D1B2A] via-[#1B2B4B] to-[#2A4066]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Speak with a consultant today
          </h2>
          <p className="text-lg text-blue-100/80 mb-8">
            Your education is worth protecting. Call for a free initial consultation, or use our
            contact form. Every inquiry is confidential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13109514008"
              className="inline-flex items-center justify-center gap-2 bg-[#E8613C] hover:bg-[#D4522E] text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg shadow-lg shadow-[#E8613C]/25"
            >
              <Phone className="w-5 h-5" /> (310) 951-4008
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 text-white hover:text-[#E8613C] transition-colors font-medium"
            >
              Contact our consultants
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="mt-8 text-sm text-blue-200/50">
            SOS Admissions has served students and families since 1998 and has been featured on CNN,
            Fox News, and in the Wall Street Journal.
          </p>
        </div>
      </section>

      {/* Sticky mobile call bar — phone is the primary conversion path in a crisis */}
      <div className="lg:hidden h-16" aria-hidden="true" />
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 border-t border-white/10 bg-[#1B2B4B]/95 backdrop-blur px-4 py-3">
        <div className="flex items-center gap-3">
          <a
            href="tel:+13109514008"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#E8613C] hover:bg-[#D4522E] text-white font-bold py-3 rounded-full transition-colors"
          >
            <Phone className="w-5 h-5" /> Call (310) 951-4008
          </a>
          <Link
            href="/contact-us"
            className="px-4 py-3 rounded-full border border-white/25 text-white text-sm font-semibold whitespace-nowrap"
          >
            Contact
          </Link>
        </div>
        <p className="text-center text-[11px] text-blue-200/60 mt-1.5">
          Free initial consultation &middot; strictly confidential
        </p>
      </div>
    </div>
  );
}
