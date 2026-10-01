import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, ChevronRight, ClipboardList, Layers, HelpCircle, Info } from 'lucide-react';
import { TrustBar } from '@/components/TrustLogos';
import { SCHOOLS, COMPETENCY_GRID, COUNTS, RETRIEVED } from '@/data/mbaRecommenderQuestions';

const TITLE =
  'MBA Letter of Recommendation Questions: What Top Programs Ask Your Recommenders | SOS Admissions';
const DESC =
  'What Harvard, Stanford, Wharton, Booth, Kellogg, Columbia, Haas, Tuck, Yale, Stern, Fuqua, and Darden each publish about their recommendation requirements, with word limits, letters required, and what they do not publish. Free initial consultation: 310-951-4008.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: 'https://sosadmissions.com/mba-recommender-questions/' },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: 'https://sosadmissions.com/mba-recommender-questions/',
    type: 'article',
  },
};

const HELP = [
  'Choose recommenders strategically, weighing who has genuinely observed your work closely enough to answer these questions from firsthand knowledge.',
  'Where the school permits it, organize an accurate factual record of dates, projects, scope, measurable outcomes, and working context. Rules differ: Yale instructs applicants not to send recommenders essays or other written materials, and Yale applicants follow that stricter rule.',
  'Understand what each school on your list asks and what it limits, including the schools that publish nothing, so you can brief your recommenders early rather than days before a deadline.',
  'Prepare your own account of the feedback you have received and how you responded, so that if a recommender asks what you recall, your memory is organized and accurate.',
  'Sequence and time requests across the schools on your list, so that one recommender is not answering a dozen different forms from cold.',
];

function slug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function capsFor(s: (typeof SCHOOLS)[number]) {
  const caps = s.questions.map((q) => q.limit).filter(Boolean) as string[];
  if (caps.length) return caps.join(' / ');
  if (s.short === 'Columbia') return '1,000 words recommended, whole recommendation';
  if (s.short === 'Wharton') return 'None published. Uses the Common Letter form.';
  return 'None published';
}

function lettersShort(s: (typeof SCHOOLS)[number]) {
  if (s.letters.startsWith('One')) return 'One';
  if (s.letters.startsWith('Two')) return 'Two';
  return 'One required, one optional';
}

export default function MbaRecommenderQuestionsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What questions are MBA recommenders asked?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Two questions recur across most top programs: a comparison question asking how the applicant compares to other well-qualified individuals in similar roles, and a question asking the recommender to describe the most important piece of constructive feedback they have given. Each is published directly by ${COUNTS.compare} of the twelve schools reviewed here, and incorporated by Wharton through its adoption of the GMAC Common Letter of Recommendation. Yale publishes neither prompt.`,
        },
      },
      {
        '@type': 'Question',
        name: 'How long should an MBA recommendation be?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Limits vary sharply and most schools do not publish them. Tuck, Stanford, and Haas publish 500 words for each main question. Harvard publishes 300 words and 250 words. Kellogg publishes 300, 300, and 250. Columbia states a recommended 1,000 words covering the whole recommendation. Booth, Stern, Fuqua, Darden, Wharton, and Yale do not publish limits at all.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many letters of recommendation do MBA programs require?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Of the twelve programs reviewed here, ${COUNTS.one_letter} require one letter (Wharton, Booth, Columbia, Fuqua, and Darden) and ${COUNTS.two_letters} require two (Harvard, Stanford, Kellogg, Haas, Tuck, and Yale). NYU Stern requires one EQ Endorsement and allows a second as optional.`,
        },
      },
    ],
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
            MBA Admissions Consulting
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            What Top MBA Programs Ask Your Recommenders
          </h1>
          <p className="mt-4 max-w-3xl text-base text-slate-200 sm:text-lg">
            What each of twelve leading business schools publishes about its recommendation
            requirements, and what it does not. Compiled from the schools&apos; own admissions
            pages, retrieved {RETRIEVED}.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {SCHOOLS.map((s) => (
              <a
                key={s.short}
                href={`#${slug(s.name)}`}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-200"
              >
                {s.short}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact-us/"
              className="inline-flex items-center justify-center rounded-md bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Schedule a Free Initial Consultation
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
            <a
              href="tel:3109514008"
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="mr-2 h-4 w-4" />
              310-951-4008
            </a>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Opening */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              The one part of your application you do not write
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-700">
              <p>
                Every other element of your candidacy is yours to shape. You draft the essays,
                build the resume, choose the schools, and rehearse the interview. If something is
                not working, you can rewrite it.
              </p>
              <p>
                Your recommendations work differently. They are written by someone else and
                submitted by that person through the school&apos;s own system. A busy executive who
                genuinely admires you can still produce a general letter if they lack the time or
                the factual detail the form asks for, not because the regard is missing, but
                because the questions are harder than they look and the recommendation is due
                through an online submission system on a Tuesday night.
              </p>
              <p>
                SOS Admissions has advised applicants to leading programs since 1998. On
                recommendations we help you choose the right recommenders and understand each
                school&apos;s rules. Where the school permits it, we help you organize accurate
                factual context so you can make well-timed requests.{' '}
                <strong>
                  We do not write the letter, and we do not tell your recommender what to say.
                </strong>
              </p>
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Across these twelve programs
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="shrink-0 font-bold text-sky-700">{COUNTS.compare} of 12</span>
                <span>publish the comparison question. Wharton adopts it by reference. Yale publishes nothing.</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 font-bold text-sky-700">{COUNTS.feedback} of 12</span>
                <span>publish the constructive feedback question.</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 font-bold text-sky-700">{COUNTS.context} of 12</span>
                <span>publish the short working-relationship question.</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 font-bold text-sky-700">6 of 12</span>
                <span>publish no word limits at all.</span>
              </li>
            </ul>
            <p className="mt-4 border-t border-slate-200 pt-3 text-xs text-slate-600">
              No live, applicant-specific recommender form at these schools is publicly viewable.
              Your recommender reaches the operative form through a link sent to them by name.
            </p>
          </aside>
        </div>
      </section>

      {/* Two questions */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Two recurring questions to prepare for
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 text-sky-700">
                <ClipboardList className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wide">
                  Published directly by {COUNTS.compare} of twelve
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-slate-900">The comparison question</h3>
              <p className="mt-2 border-l-2 border-sky-200 pl-3 text-[15px] italic text-slate-700">
                How does the performance of the applicant compare to that of other well-qualified
                individuals in similar roles? Please provide specific examples.
              </p>
              <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate-700">
                <p>
                  This question is not asking whether you are good. It asks your recommender to
                  name a comparison group and place you within it, with evidence. A useful way to
                  prepare is to make sure your recommender can identify a meaningful peer group and
                  point to concrete supporting detail.
                </p>
                <p>
                  One of the finest people I have worked with states a feeling. Among the roughly
                  forty analysts I have supervised in eleven years, I would place her in the top
                  two, and here is the project that shows why states a position and then supports
                  it.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 text-sky-700">
                <HelpCircle className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wide">
                  Published directly by {COUNTS.feedback} of twelve
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-slate-900">
                The constructive feedback question
              </h3>
              <p className="mt-2 border-l-2 border-sky-200 pl-3 text-[15px] italic text-slate-700">
                Describe the most important piece of constructive feedback you have given the
                applicant. Please detail the circumstances and the applicant&apos;s response.
              </p>
              <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate-700">
                <p>
                  Every candidate has development areas, and the question asks your recommender to
                  name one. We recommend choosing recommenders who can discuss a genuine
                  development area, your response to it, and what changed afterward.
                </p>
                <p>
                  The prompt explicitly asks for the feedback, the circumstances, and your
                  response. An answer that only names a weakness does not address the circumstances
                  and response the question asks for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">At a glance</h2>
        <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-slate-700">
          Letters required, and the word limits each school publishes. Where a school publishes no
          limit, that is stated rather than filled in from elsewhere.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-3 py-2 text-xs font-bold uppercase tracking-wide">School</th>
                <th className="px-3 py-2 text-xs font-bold uppercase tracking-wide">Letters</th>
                <th className="px-3 py-2 text-xs font-bold uppercase tracking-wide">
                  Published word limits
                </th>
              </tr>
            </thead>
            <tbody>
              {SCHOOLS.map((s, i) => (
                <tr key={s.short} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="border-b border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900">
                    <a href={`#${slug(s.name)}`} className="hover:text-sky-700">
                      {s.short}
                    </a>
                  </td>
                  <td className="border-b border-slate-200 px-3 py-2 text-sm text-slate-700">
                    {lettersShort(s)}
                  </td>
                  <td className="border-b border-slate-200 px-3 py-2 text-sm text-slate-700">
                    {capsFor(s)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs italic text-slate-600">
          Booth, Stern, Fuqua, Darden, Wharton, and Yale do not publish whether their fields carry
          word or character limits. Any limit displayed in the live form controls.
        </p>
      </section>

      {/* School by school */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">School by school</h2>
          <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-slate-700">
            Each entry reflects what that school publishes on its own admissions pages. Programs
            revise their forms between cycles, so confirm the current requirements for the year in
            which you apply.
          </p>

          <div className="mt-8 space-y-6">
            {SCHOOLS.map((s) => (
              <div
                key={s.short}
                id={slug(s.name)}
                className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-5 sm:p-6"
              >
                <h3 className="text-lg font-bold text-slate-900">{s.name}</h3>

                <dl className="mt-3 space-y-2 text-[14px] leading-relaxed text-slate-700">
                  <div>
                    <dt className="inline font-bold text-slate-900">Letters required. </dt>
                    <dd className="inline">{s.letters}</dd>
                  </div>
                  <div>
                    <dt className="inline font-bold text-slate-900">
                      Common Letter of Recommendation.{' '}
                    </dt>
                    <dd className="inline">{s.lor}</dd>
                  </div>
                </dl>

                {s.questions.length > 0 && (
                  <>
                    <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                      Published questions
                    </p>
                    <ul className="mt-2 space-y-2.5">
                      {s.questions.map((q, i) => (
                        <li key={i} className="flex gap-2.5">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                          <div>
                            <p className="text-[15px] leading-relaxed text-slate-800">{q.text}</p>
                            {q.limit && (
                              <p className="mt-0.5 text-xs italic text-slate-500">{q.limit}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {s.grid && (
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-700">
                    <span className="font-bold text-slate-900">Competency grid. </span>
                    {s.grid}
                  </p>
                )}

                {s.notes.map((n, i) => (
                  <p key={i} className="mt-2 text-[14px] leading-relaxed text-slate-700">
                    <span className="font-bold text-slate-900">Note. </span>
                    {n}
                  </p>
                ))}

                {s.gaps.map((g, i) => (
                  <p
                    key={i}
                    className="mt-2 rounded border-l-2 border-amber-400 bg-amber-50 px-3 py-2 text-[14px] leading-relaxed text-amber-900"
                  >
                    <span className="font-bold">Not published. </span>
                    {g}
                  </p>
                ))}

                <p className="mt-3 border-t border-slate-100 pt-2 text-[11px] italic text-slate-500">
                  Source: {s.source} ({s.url}). Cycle: {s.cycle}. Retrieved {RETRIEVED}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What this means + service */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              What this means for your application
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-700">
              <p>
                Read the questions again with one thing in mind: most of them are difficult to
                answer well from memory. They ask for a comparison with similarly situated peers,
                specific supporting examples, and a specific instance of feedback together with the
                circumstances and your response. A recommender working from a resume and a deadline
                may struggle to supply more than generalities, because a resume supports little
                else.
              </p>
              <p>
                This is recoverable, and it is recoverable early. Our advice is to prepare whatever
                factual context your schools permit, well before deadlines, while leaving every
                example, rating, and conclusion to the recommender.
              </p>
            </div>

            <h3 className="mt-7 text-lg font-bold text-slate-900">Where we come in</h3>
            <ul className="mt-4 space-y-2.5">
              {HELP.map((h) => (
                <li key={h} className="flex gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                  <span className="text-[15px] leading-relaxed text-slate-700">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5">
              <h4 className="text-sm font-bold text-slate-900">Where the line sits</h4>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-700">
                <strong>What we do:</strong> help you choose the right recommenders and, where the
                school permits it, organize accurate factual context, while preparing you to
                understand the questions each school actually asks.
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-700">
                <strong>What we do not do:</strong> draft recommendation language for a recommender
                to adopt, select ratings on their behalf, or script their answers. Several
                programs, Tuck and Yale among them, explicitly prohibit applicant involvement in
                drafting or submission. Those rules govern the work, and we follow them.
              </p>
            </div>
          </div>

          <aside className="h-fit rounded-lg border border-slate-200 bg-slate-900 p-6 text-white">
            <h3 className="text-xl font-bold">Speak with a consultant</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Talk through your MBA candidacy, your recommenders, and your school list.
            </p>
            <a
              href="tel:3109514008"
              className="mt-5 flex items-center justify-center rounded-md bg-sky-500 px-4 py-3 text-base font-bold text-white transition hover:bg-sky-400"
            >
              <Phone className="mr-2 h-5 w-5" />
              310-951-4008
            </a>
            <Link
              href="/contact-us/"
              className="mt-3 flex items-center justify-center rounded-md border border-white/25 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Schedule a Free Initial Consultation
            </Link>
            <Link
              href="/mba/"
              className="mt-3 flex items-center justify-center text-sm font-medium text-sky-300 underline-offset-2 hover:underline"
            >
              See all MBA admissions services
            </Link>
            <p className="mt-5 border-t border-white/15 pt-4 text-xs text-slate-300">
              Serving applicants since 1998. Featured on CNN, Fox News, and in the Wall Street
              Journal, with consultants cited in outlets such as U.S. News &amp; World Report.
            </p>
          </aside>
        </div>
      </section>

      {/* Appendix: competency grid */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
          <div className="flex items-center gap-2 text-sky-700">
            <Layers className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-wide">Reference appendix</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            The twelve-competency leadership grid
          </h2>
          <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-slate-700">
            The Common Letter of Recommendation includes a leadership assessment grid: twelve
            competencies in five categories, each scored on a five-level behavioral scale, with
            each level assuming the behaviors of the level beneath it. On every competency the
            recommender may also select &quot;No basis for judgment&quot;.
          </p>

          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2 text-slate-900">
              <Info className="h-4 w-4 text-sky-600" />
              <span className="text-sm font-bold">How much of this you actually face</span>
            </div>
            <ul className="mt-3 space-y-1.5 text-[14px] leading-relaxed text-slate-700">
              <li>Haas publishes the complete grid, including the full behavioral text for every level. The wording below is the Haas version.</li>
              <li>Stanford names all twelve competencies but does not publish the level text or the category grouping.</li>
              <li>Harvard, Booth, and Darden confirm a grid exists but do not publish its contents.</li>
              <li>Tuck states that it does not use the grid at all.</li>
              <li>Fuqua, Kellogg, and Columbia publish no grid.</li>
              <li>Wharton refers to a recommender assessment but does not publish its contents. Stern&apos;s full-time page describes an assessment only in general terms. Yale does not publish whether it uses a grid at all.</li>
            </ul>
          </div>

          <p className="mt-4 max-w-4xl text-[15px] leading-relaxed text-slate-700">
            The text below is Haas&apos;s published version. Do not assume another school uses the
            same wording or scale unless that school publishes it. These are behavioral
            descriptions, not adjectives. Higher levels generally reflect broader, more proactive,
            or more sustained behavior, though the distinction varies by competency.
          </p>

          <div className="mt-8 space-y-8">
            {COMPETENCY_GRID.map((cat) => (
              <div key={cat.category}>
                <h3 className="border-b border-slate-200 pb-2 text-xs font-bold uppercase tracking-[0.15em] text-sky-700">
                  {cat.category}
                </h3>
                <div className="mt-4 grid gap-5 md:grid-cols-2">
                  {cat.competencies.map((c) => (
                    <div key={c.name} className="rounded-lg border border-slate-200 bg-white p-4">
                      <h4 className="text-[15px] font-bold text-slate-900">{c.name}</h4>
                      <p className="mt-1 text-xs italic text-slate-600">{c.definition}</p>
                      <ol className="mt-3 space-y-2">
                        {c.levels.map((lv, i) => (
                          <li key={i} className="flex gap-2 text-[13px] leading-snug text-slate-700">
                            <span className="mt-px shrink-0 font-bold text-sky-700">{i + 1}.</span>
                            <span>{lv}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs italic text-slate-600">
            School requirements compiled from official admissions pages, retrieved {RETRIEVED}.
            Programs revise their forms between cycles. Confirm current requirements with each
            school before briefing your recommenders.
          </p>
        </div>
      </section>
    </main>
  );
}
