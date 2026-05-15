'use client';

import { useState, useEffect, useRef } from 'react';
import { getServiceBySlug, type PricingItem, type PricingTier } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { LegacyImageGallery, LegacyStripSection, LegacyYouTubeCard } from '@/components/LegacyMedia';
import { DEFAULT_LEGACY_VIDEO, getLegacyServiceAssets } from '@/lib/legacyAssets';
import {
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Phone,
  Mail,
  Shield,
  Award,
  Clock,
  Star,
} from 'lucide-react';

/* ───────────────────────── useInView hook ───────────────────────── */
function useInView(ref: React.RefObject<HTMLElement | null>, opts?: { once?: boolean; amount?: number }) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (opts?.once) observer.disconnect();
        } else if (!opts?.once) {
          setInView(false);
        }
      },
      { threshold: opts?.amount ?? 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, opts?.once, opts?.amount]);
  return inView;
}

/* ───────────────────────── ANIMATED COUNTER ───────────────────────── */
function AnimatedCounter({
  target,
  suffix = '',
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  );
}

/* ───────────────────────── STAT COUNTERS ───────────────────────── */
function StatCounters() {
  const stats = [
    { target: 27, suffix: '+', label: 'Years of Experience' },
    { target: 1000, suffix: '+', label: 'Ivy League Acceptances' },
    { target: 98, suffix: '%', label: 'Client Acceptance Rate' },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#1B2B4B] mb-2">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  decimals={0}
                />
              </div>
              <p className="text-gray-500 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── DIFFERENTIATORS ───────────────────────── */
function Differentiators() {
  const items = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Former Admissions Officers',
      description:
        'Our team includes former admissions committee members from top universities who know exactly what schools are looking for.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '27 Years of Experience',
      description:
        'Since 1998, we have guided students to acceptance at every top university in the country with a 98% acceptance rate.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Transparent Pricing',
      description:
        'We publish our pricing. No hidden fees, no surprise charges. You know exactly what you are paying before you start.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">
            Why Families Choose SOS Admissions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className="text-center animate-[fadeInUp_0.5s_ease-out_both]"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E8613C]/10 text-[#E8613C] mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1B2B4B] mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── TESTIMONIAL CAROUSEL ───────────────────────── */
function TestimonialCarousel() {
  const testimonials = [
    {
      quote: 'SOS Admissions helped my daughter get into her dream school. Their guidance was invaluable throughout the entire process.',
      author: 'Parent of Harvard Admit',
      stars: 5,
    },
    {
      quote: 'The team at SOS really understood what top schools were looking for. They helped me put together an application that truly stood out.',
      author: 'Stanford Admit',
      stars: 5,
    },
    {
      quote: 'Worth every penny. The personal attention and expertise we received was unmatched. Our son was accepted to 4 of his top 5 choices.',
      author: 'Parent of Columbia Admit',
      stars: 5,
    },
    {
      quote: 'I was struggling with my personal statement until SOS helped me find my story. The result was something I was truly proud of.',
      author: 'Yale Admit',
      stars: 5,
    },
    {
      quote: 'Professional, responsive, and genuinely caring. SOS Admissions went above and beyond for our family during a stressful time.',
      author: 'Parent of Princeton Admit',
      stars: 5,
    },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">
            What Our Clients Say
          </h2>
        </div>
        <div className="relative min-h-[200px]">
          <div key={current} className="text-center animate-[fadeInUp_0.4s_ease-out_both]">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-[#1B2B4B] font-medium leading-relaxed mb-6 italic">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>
            <p className="text-gray-500 font-semibold">
              - {testimonials[current].author}
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? 'bg-[#E8613C]' : 'bg-gray-300'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ACCORDION ───────────────────────── */
function FAQSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-[#1B2B4B] pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-gray-500 leading-relaxed animate-[fade-in_0.2s_ease-out_both]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FINAL CTA ───────────────────────── */
function FinalCTA({ title }: { title: string }) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0D1B2A] via-[#1B2B4B] to-[#2A4066]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Get Expert Help With Your {title} Application
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Book a free 15-minute consultation with our team. No pressure. No commitment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 bg-[#E8613C] hover:bg-[#D4522E] text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg"
          >
            Book Your Free Consultation
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200 text-sm mb-6">
          <a href="tel:+13109514008" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={16} />
            (310) 951-4008
          </a>
          <a href="mailto:info@sosadmissions.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={16} />
            info@sosadmissions.com
          </a>
        </div>
        <p className="text-blue-200/70 text-sm max-w-xl mx-auto">
          Contact us via FaceTime, Google Chat, Zoom, or WhatsApp from anywhere in the world, or come to our office in the Beverly Hills area of Los Angeles.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── PRICING SECTION ───────────────────────── */
function PricingSection({
  tiers,
  alaCarte,
  footnote,
}: {
  tiers?: PricingTier[];
  alaCarte?: PricingItem[];
  footnote?: string;
}) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">
            Pricing
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Every service is clearly listed so you can plan with confidence.
          </p>
        </div>

        {/* Tier Cards */}
        {tiers && tiers.length > 0 && (
          <div className={`grid grid-cols-1 gap-8 mb-12 ${tiers.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : tiers.length >= 3 ? 'md:grid-cols-3' : 'max-w-lg mx-auto'}`}>
            {tiers.map((tier, idx) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border-2 p-8 flex flex-col animate-[fadeInUp_0.4s_ease-out_both] ${
                  tier.popular
                    ? 'border-[#E8613C] bg-white shadow-xl shadow-[#E8613C]/10'
                    : 'border-gray-200 bg-white'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {tier.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E8613C] text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#1B2B4B] mb-2">{tier.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{tier.description}</p>
                <div className="text-3xl font-bold text-[#1B2B4B] mb-6">{tier.price}</div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-[#E8613C] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/get-started"
                  className={`inline-flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-full transition-colors text-center ${
                    tier.popular
                      ? 'bg-[#E8613C] hover:bg-[#D4522E] text-white'
                      : 'bg-[#1B2B4B] hover:bg-[#2A4066] text-white'
                  }`}
                >
                  Get Started
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* A La Carte Table */}
        {alaCarte && alaCarte.length > 0 && (
          <div className="max-w-3xl mx-auto">
            {tiers && tiers.length > 0 && (
              <h3 className="text-xl font-bold text-[#1B2B4B] mb-6 text-center">
                A La Carte Services
              </h3>
            )}
            <div className="bg-[#F8F9FA] rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-[#1B2B4B] uppercase tracking-wider">
                      Service
                    </th>
                    <th className="text-right py-4 px-6 text-sm font-semibold text-[#1B2B4B] uppercase tracking-wider">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {alaCarte.map((item, i) => (
                    <tr
                      key={i}
                      className={i < alaCarte.length - 1 ? 'border-b border-gray-100' : ''}
                    >
                      <td className="py-4 px-6">
                        <span className="text-[#1B2B4B] font-medium">{item.service}</span>
                        {item.note && (
                          <span className="block text-gray-400 text-sm mt-0.5">{item.note}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-right text-[#1B2B4B] font-semibold whitespace-nowrap">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footnote */}
        {footnote && (
          <p className="text-center text-gray-400 text-sm mt-8 max-w-2xl mx-auto">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}

/* ───────────────────────── FIELDS SERVED ───────────────────────── */
function FieldsServed({ fields }: { fields: string[] }) {
  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">
            Programs and Fields We Support
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {fields.map((field) => (
            <span
              key={field}
              className="inline-block bg-white border border-gray-200 text-[#1B2B4B] font-medium text-sm px-4 py-2 rounded-full hover:border-[#E8613C] hover:text-[#E8613C] transition-colors"
            >
              {field}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PROGRAM-SPECIFIC FAQS ───────────────────────── */
const programFAQs: { [key: string]: { q: string; a: string }[] } = {
  'college-admissions-transfer': [
    { q: 'When should I start planning my transfer application?', a: 'Ideally, you should begin planning during your first semester at your current school. This gives us time to help you choose the right courses, build relationships with professors, and develop a compelling narrative for why you want to transfer.' },
    { q: 'What GPA do I need to transfer to a top school?', a: 'Most selective schools look for a 3.7+ GPA, but it depends on the institution. Strong essays, recommendations, and extracurriculars can compensate for a slightly lower GPA. We help you present the strongest possible application.' },
    { q: 'Do I need to explain why I want to transfer?', a: 'Yes, the "Why Transfer?" essay is critical. Schools want to understand your motivation and ensure you have a clear, positive reason for transferring. We help you build a compelling narrative that avoids common pitfalls.' },
    { q: 'How is transfer admissions different from freshman admissions?', a: 'Transfer admissions focuses heavily on your college performance rather than high school. Schools want to see academic growth, maturity, and a clear reason for transferring. The essay and recommendations from college professors carry much more weight.' },
    { q: 'What does SOS Admissions\' transfer consulting include?', a: 'Our transfer package includes school selection strategy, essay development, activity list optimization, recommendation letter guidance, and application review. We guide you through every step from planning to submission.' },
    { q: 'How much does transfer admissions consulting cost?', a: 'Our transfer consulting starts at $5,175 for the first school, with additional schools at $775 each. We also offer individual services like essay editing and application planning. Visit our pricing page or call us for details.' },
  ],
  'international-students': [
    { q: 'Do you help with visa and immigration questions?', a: 'While we are not immigration attorneys, we guide international students through the application process including understanding F-1 visa requirements, SEVIS, and how admissions decisions affect your visa status. We can recommend immigration attorneys when needed.' },
    { q: 'Do I need to take the TOEFL or IELTS?', a: 'Most U.S. universities require English proficiency scores unless you have studied in an English-medium school for several years. We help you determine which test is best for your target schools and when to take it.' },
    { q: 'How do you help international students stand out?', a: 'We help you leverage your international background as a strength. Your unique perspective, cultural experiences, and global awareness are assets that American universities value. We help you articulate these effectively in your application.' },
    { q: 'Can you help with financial aid for international students?', a: 'Yes, we help identify schools that offer financial aid to international students and guide you through the CSS Profile and other financial aid applications. Some schools offer generous aid packages to international admits.' },
    { q: 'What countries do you work with?', a: 'We have helped students from over 80 countries across 6 continents. Our team understands the nuances of different educational systems and how to present international credentials to U.S. admissions committees.' },
  ],
  'private-school-k12': [
    { q: 'What age should we start preparing for private school admissions?', a: 'For competitive schools, we recommend starting at least 12-18 months before the application deadline. For boarding school applications, starting in 7th or 8th grade is ideal.' },
    { q: 'Do you help with boarding school applications?', a: 'Yes, we have extensive experience with boarding school admissions including schools like Andover, Exeter, Choate, Deerfield, and other selective institutions. We guide families through SSAT prep, interviews, and campus visits.' },
    { q: 'How important are parent interviews in private school admissions?', a: 'Very important. Schools want to understand your family values and commitment to education. We prepare both students and parents for interviews to ensure you present a cohesive, compelling picture.' },
    { q: 'What does private school consulting include?', a: 'Our services include school selection, application strategy, essay and writing sample coaching, interview preparation for both students and parents, and recommendation letter guidance.' },
  ],
  'masters-degree': [
    { q: 'How early should I start preparing for graduate school applications?', a: 'We recommend starting 9-12 months before deadlines. This allows time for GRE/GMAT preparation, securing strong recommendations, and writing compelling statements of purpose.' },
    { q: 'Do I need research experience to get into a top graduate program?', a: 'For research-oriented programs, yes. For professional master\'s programs, relevant work experience is often more valuable. We help you identify what your target programs prioritize and position your experience accordingly.' },
    { q: 'How do you help with the statement of purpose?', a: 'We guide you through developing a compelling narrative that connects your background, research interests, and career goals. Our advisors help you strike the right balance between academic depth and personal voice.' },
    { q: 'Can you help me choose which graduate programs to apply to?', a: 'Absolutely. School selection is one of our core services. We analyze your profile, career goals, and preferences to build a strategic list of reach, target, and safety programs.' },
    { q: 'What does graduate school consulting cost?', a: 'Our consulting starts at $5,175 for the first school, with additional schools at $775 each. We also offer individual services like essay editing starting at $985. Call us for a personalized quote.' },
  ],
  'mba-programs': [
    { q: 'What GMAT/GRE score do I need for a top MBA program?', a: 'Top 10 programs typically see median GMAT scores of 720-740. However, a strong score alone won\'t get you in. Schools evaluate your complete profile including work experience, leadership, and personal qualities.' },
    { q: 'How many years of work experience do I need?', a: 'Most top MBA programs prefer 3-7 years of professional experience. However, some programs accept candidates with less experience. We help you determine the right timing for your application.' },
    { q: 'Do you help with MBA scholarship applications?', a: 'Yes, we guide you through merit-based scholarship applications and help you write compelling scholarship essays. Many of our clients receive significant scholarship offers from their target programs.' },
    { q: 'What makes an MBA application stand out?', a: 'Beyond strong scores and experience, schools want authentic leadership stories, clear career goals, and genuine reasons for wanting an MBA. We help you identify and articulate what makes your story unique.' },
    { q: 'How much does MBA admissions consulting cost?', a: 'Our MBA consulting starts at $5,175 for the first school, with additional schools at $775 each. Given the ROI of a top MBA, our clients consider this a worthwhile investment.' },
  ],
  'medical-school': [
    { q: 'When should I start preparing for medical school applications?', a: 'Ideally, start planning in your sophomore year of college. This gives you time to complete prerequisites, gain clinical experience, study for the MCAT, and build meaningful extracurriculars.' },
    { q: 'What MCAT score do I need?', a: 'For competitive MD programs, aim for 515+. For DO programs, 505+ is competitive. However, your score is just one factor. Clinical experience, research, and personal qualities matter enormously.' },
    { q: 'Do you help with AMCAS, AACOMAS, and secondary applications?', a: 'Yes, we guide you through every step of the primary and secondary application process, including the AMCAS work and activities section, personal statement, and school-specific secondary essays.' },
    { q: 'How do you help with the medical school interview?', a: 'We provide interview preparation including traditional, MMI, and panel formats. Our mock interviews simulate real conditions so you feel confident and prepared on interview day.' },
    { q: 'Can you help career changers applying to medical school?', a: 'Absolutely. We have extensive experience helping non-traditional applicants, including career changers, post-bacc students, and those with gaps in their education. We help you present your unique path as a strength.' },
    { q: 'What does medical school consulting cost?', a: 'Our consulting starts at $5,175. Given that medical school applications often involve 15-25 schools, our per-school additional rate of $775 provides significant value.' },
  ],
  'dental-school': [
    { q: 'What DAT score do I need for dental school?', a: 'Competitive applicants typically score 20+ on the DAT. Top programs look for 22+. We help you develop a study plan and timeline that works with your schedule.' },
    { q: 'How important is dental shadowing?', a: 'Very important. Most programs require 100+ hours of shadowing. We help you find opportunities and ensure your experiences translate into compelling application content.' },
    { q: 'Do you help with AADSAS applications?', a: 'Yes, we provide guidance on the AADSAS application, including personal statement, dental experience descriptions, and school selection strategy.' },
    { q: 'What makes dental school admissions different?', a: 'Dental schools place heavy emphasis on manual dexterity, spatial reasoning, and genuine interest in dentistry. We help you demonstrate these qualities throughout your application.' },
  ],
  'medical-residency': [
    { q: 'When should I start preparing for residency match?', a: 'Begin preparing at least 12-18 months before Match Day. Early planning allows time to secure strong letters, write your personal statement, and build your program list strategically.' },
    { q: 'Do you help with ERAS applications?', a: 'Yes, we provide ERAS guidance including personal statement writing, CV optimization, program selection strategy, and preparation for interviews.' },
    { q: 'Can you help IMG/FMG applicants?', a: 'Absolutely. We have extensive experience helping international medical graduates navigate the unique challenges of matching into U.S. residency programs, including USMLE strategy and clinical experience planning.' },
    { q: 'How do you help with the rank order list?', a: 'We help you develop a strategic rank order list based on your interview experiences, program fit, and career goals. Our guidance helps ensure you make informed decisions during this critical step.' },
  ],
  'law-school': [
    { q: 'What LSAT score do I need for a T14 law school?', a: 'T14 schools typically look for scores of 170+, though some students are admitted with lower scores if they have exceptional softs. We help you develop a realistic school list based on your complete profile.' },
    { q: 'Does my undergraduate major matter for law school?', a: 'No specific major is required or preferred. Law schools value strong analytical thinking and writing skills from any discipline. What matters most is your GPA and LSAT score, followed by your personal statement and experience.' },
    { q: 'How do you help with law school personal statements?', a: 'We help you identify compelling themes from your experience and build a narrative that showcases your analytical abilities, character, and motivation for studying law. Each essay is adjusted to specific schools when required.' },
    { q: 'Can you help with scholarship negotiations?', a: 'Yes, we guide clients through scholarship negotiation strategies. Many law schools have room to increase initial offers, and we help you approach these conversations professionally.' },
    { q: 'What does law school consulting cost?', a: 'Our consulting starts at $5,175 for the first school, with additional schools at $775 each. We also offer standalone personal statement and application review services.' },
  ],
  'personal-statement-writing': [
    { q: 'How long does the personal statement process take?', a: 'Typically 2-4 weeks from initial brainstorming to final draft. We work through multiple rounds of revision to ensure your essay is polished and compelling.' },
    { q: 'Do you write the essay for me?', a: 'No. The essay must be authentically yours. We guide you through brainstorming, help you identify your strongest stories, provide detailed feedback on drafts, and coach you through revisions. The voice and content are always yours.' },
    { q: 'Can you help with supplemental essays too?', a: 'Yes, we help with all types of application essays including "Why This School" supplements, diversity statements, and additional information sections.' },
    { q: 'How much does personal statement help cost?', a: 'Personal statement editing starts at $985 for essays under 900 words and $1,485 for essays under 1,500 words. This includes multiple rounds of revision and detailed feedback.' },
  ],
  'interview-coaching': [
    { q: 'How many mock interview sessions do I need?', a: 'Most students benefit from 2-4 mock interview sessions. We start with a diagnostic session to assess your baseline, then work on specific areas for improvement in subsequent sessions.' },
    { q: 'Do you prepare for specific school interview formats?', a: 'Yes, we prepare you for traditional interviews, MMI (Multiple Mini Interview), group interviews, panel interviews, and alumni interviews. Each format requires a different approach.' },
    { q: 'What if my interview is virtual?', a: 'We provide specific coaching for virtual interviews, including technical setup, eye contact with the camera, and maintaining energy in a virtual format. Many of our mock sessions are conducted virtually.' },
    { q: 'How much does interview coaching cost?', a: 'Interview coaching is $1,275 for college, graduate, law, MBA, and residency interviews. Medical school MMI coaching is $1,675. Each session includes a 2-hour coaching session and a 1-hour follow-up mock interview.' },
  ],
};

const defaultFAQs = [
  { q: 'How do I get started with SOS Admissions?', a: 'Simply fill out our contact form or call us at (310) 951-4008 to schedule a free consultation. We\'ll discuss your goals, timeline, and how we can help. There\'s no obligation.' },
  { q: 'What makes SOS Admissions different from other consulting firms?', a: 'Our team includes former admissions committee members from selective universities, we\'ve been doing this for 27 years with thousands of clients, and we publish our pricing transparently. Every service is clearly priced on our website so you can plan with confidence.' },
  { q: 'Do you offer payment plans?', a: 'Yes, we offer flexible payment options. Contact us to discuss a plan that works for your family\'s budget.' },
  { q: 'Can you work with students remotely?', a: 'Absolutely. We work with students across the U.S. and in over 80 countries worldwide via video conferencing. Our remote services are just as effective as in-person consulting.' },
  { q: 'What is your success rate?', a: 'Our overall client acceptance rate is 98%. We\'ve helped over 1,000 students gain admission to Ivy League schools alone. Every student\'s situation is different, and we provide honest assessments of your chances from the start.' },
];

/* ───────────────────────── MAIN TEMPLATE ───────────────────────── */
interface ServicePageTemplateProps {
  slug: string;
  legacyVariant?: string;
}

export default function ServicePageTemplate({ slug, legacyVariant }: ServicePageTemplateProps) {
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const faqs = programFAQs[slug] || defaultFAQs;
  const legacyAssets = getLegacyServiceAssets(legacyVariant ?? slug);
  const heroVideos = [DEFAULT_LEGACY_VIDEO, ...(legacyAssets.extraVideos ?? [])].filter(
    (video, index, videos) => videos.findIndex((candidate) => candidate.id === video.id) === index
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0D1B2A] via-[#1B2B4B] to-[#2A4066] min-h-[70vh] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#E8613C] rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#2A4066] rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-14 md:py-20">
          <span className="inline-block text-[#E8613C] text-sm font-semibold uppercase tracking-[0.15em] mb-6 animate-[fadeInUp_0.5s_ease-out_both]">
            {service.title}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6 animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
            {service.heroStatement}
          </h1>

          <div className="mb-6 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.18s_both]">
            {heroVideos.map((video) => (
              <LegacyYouTubeCard key={video.id} video={video} className="mx-auto" />
            ))}
          </div>

          <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-3xl mx-auto animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            {service.longDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-[#E8613C] hover:bg-[#D4522E] text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg shadow-lg shadow-[#E8613C]/25"
            >
              Book Your Free Consultation
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="mt-6 text-blue-200/60 text-sm animate-[fadeInUp_0.6s_ease-out_0.5s_both]">
            or call{' '}
            <a href="tel:+13109514008" className="text-white hover:text-[#E8613C] transition-colors font-medium">
              (310) 951-4008
            </a>
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <LegacyStripSection
        featuredStrip={legacyAssets.featuredStrip}
        clientStrip={legacyAssets.clientStrip}
        clientLabel={legacyAssets.clientLabel}
      />

      {/* Stats */}
      <StatCounters />

      <LegacyImageGallery
        title={legacyAssets.galleryTitle}
        images={legacyAssets.gallery ?? []}
      />

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">
              What&apos;s Included
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Everything included in our {service.title.toLowerCase()} services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-3 p-5 rounded-xl bg-[#F8F9FA] border border-gray-100 animate-[fadeInUp_0.3s_ease-out_both]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CheckCircle2 className="w-5 h-5 text-[#E8613C] flex-shrink-0 mt-0.5" />
                <span className="text-[#1B2B4B] font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {service.pricing && (
        <PricingSection
          tiers={service.pricing.tiers}
          alaCarte={service.pricing.alaCarte}
          footnote={service.pricing.footnote}
        />
      )}

      {/* Fields Served */}
      {service.fieldsServed && service.fieldsServed.length > 0 && (
        <FieldsServed fields={service.fieldsServed} />
      )}

      {/* Differentiators */}
      <Differentiators />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <FinalCTA title={service.title} />
    </div>
  );
}
