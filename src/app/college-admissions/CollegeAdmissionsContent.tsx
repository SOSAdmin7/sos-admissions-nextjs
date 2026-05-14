'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  Shield,
  Target,
  Mic2,
  Star,
  ClipboardList,
  Search,
  PenTool,
  Package,
} from 'lucide-react';

/* ───────────────────────── SCROLL REVEAL HOOK ───────────────────────── */
function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

function ScrollReveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ───────────────────────── ANIMATED COUNTER ───────────────────────── */
function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsInView(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  );
}

function StatCounters() {
  const stats = [
    { target: 27, suffix: '+', label: 'Years of Experience' },
    { target: 1000, suffix: '+', label: 'Ivy League Acceptances' },
    { target: 98, suffix: '%', label: 'Client Acceptance Rate' },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B4B] mb-2">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
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

/* ───────────────────────── SERVICE CARDS ───────────────────────── */
function ServiceCards() {
  const services = [
    {
      icon: <ClipboardList className="w-7 h-7" />,
      title: 'Application Planning and Evaluation Service',
      price: '$465',
      desc: 'The most common starting point for new clients. Two 45-minute consultations plus independent review of essays, recommendations, school selection, resume/CV, and overall candidacy.',
      badge: 'Most clients start here',
    },
    {
      icon: <Search className="w-7 h-7" />,
      title: 'School Selection Service',
      price: '$1,375',
      desc: 'Professional guidance on the best safety, target, and reach schools for your profile and goals.',
    },
    {
      icon: <PenTool className="w-7 h-7" />,
      title: 'Common Application Essay / Coalition Application Essay',
      price: '$985',
      desc: 'The primary essay for college applications, written or revised with admissions strategy in mind.',
    },
    {
      icon: <PenTool className="w-7 h-7" />,
      title: 'Common Application School-Specific Essays for 1 School',
      price: '$1,485',
      desc: 'Also applies to school-specific essays for the Coalition Application.',
    },
    {
      icon: <PenTool className="w-7 h-7" />,
      title: 'University of California Essays / Long Essay',
      price: '$1,485',
      desc: 'For UC applications and long-form essays under 1,500 words.',
    },
    {
      icon: <Package className="w-7 h-7" />,
      title: 'Academic Resume or CV / College Bragg Sheet',
      price: '$975',
      desc: 'Admissions-focused resume writing and positioning for student achievements, activities, and leadership.',
    },
    {
      icon: <ClipboardList className="w-7 h-7" />,
      title: 'Common App, UC, or Coalition Activity Descriptions',
      price: '$1,175',
      desc: 'Concise, strategic writing for activity entries and short-form accomplishment descriptions.',
    },
    {
      icon: <Mic2 className="w-7 h-7" />,
      title: 'College Interview Coaching / Transfer Interview Coaching',
      price: '$1,275',
      desc: 'Two-hour coaching plus a mock interview to help you present yourself clearly and confidently.',
    },
    {
      icon: <Mail className="w-7 h-7" />,
      title: 'Letter of Recommendation',
      price: '$885',
      desc: 'Drafting support and recommender guidance for strong, relevant recommendation letters.',
    },
    {
      icon: <PenTool className="w-7 h-7" />,
      title: 'Waitlist Appeal Letter / Letter of Continued Interest',
      price: '$985',
      desc: 'Strategic waitlist writing support when you need to reinforce your fit and continued interest.',
    },
    {
      icon: <Package className="w-7 h-7" />,
      title: 'Complete College Application or Transfer Application Package',
      price: '$5,175 + $775/additional school',
      desc: 'Unlimited-hours support for one school, with each additional school added at the standard rate.',
      badge: 'Complete application package',
    },
    {
      icon: <Package className="w-7 h-7" />,
      title: 'Complete College Application Package for Five Schools',
      price: '$7,500 + $775/additional school',
      desc: 'Five-school complete application package with unlimited-hours support across the list.',
    },
    {
      icon: <Package className="w-7 h-7" />,
      title: 'Complete College Application Package for Ten Schools',
      price: '$10,600 + $775/additional school',
      desc: 'Ten-school complete application package for students building a broad and strategic list.',
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: 'Rush Fee (per incident)',
      price: '$500',
      desc: 'Call for details when timing is unusually compressed and rush handling is required.',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">What We Help You With</h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            SOS Admissions provides college admissions consulting services for freshman applicants and transfer students. Every priced college service from the original SOS college page is listed here, and any individual service can later be credited only toward a complete application package.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ScrollReveal
              key={service.title}
              delay={i * 100}
              className="relative bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              {service.badge && (
                <span className="absolute top-4 right-4 bg-[#E8613C] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.08em]">
                  {service.badge}
                </span>
              )}
              <div className="w-12 h-12 bg-[#FFF0EC] rounded-lg flex items-center justify-center text-[#E8613C] mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1B2B4B] mb-3">{service.title}</h3>
              <p className="text-lg font-semibold text-[#1B2B4B] mb-2">{service.price}</p>
              <p className="text-base text-gray-500 leading-relaxed">{service.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── DIFFERENTIATORS ───────────────────────── */
function Differentiators() {
  const pillars = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Former Admissions Officers',
      body: 'Our team includes former admissions committee members from U. Chicago, UCLA Anderson, Claremont McKenna, and more. We do not guess what schools want. We have been there.',
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: '27 Years of Experience',
      body: 'Founded in 1998, we have guided students through every type of admissions cycle. Over 70 team members dedicated to your success.',
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Freshman and Transfer Expertise',
      body: 'Whether you are applying as a high school senior or transferring from a community college or four-year university, our consultants have helped thousands of both freshman and transfer applicants get into top schools.',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">The SOS Difference</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="w-16 h-16 bg-[#1B2B4B] rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1B2B4B] mb-3">{pillar.title}</h3>
              <p className="text-gray-500 leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PROCESS TIMELINE ───────────────────────── */
function ProcessTimeline() {
  const steps = [
    {
      num: '01',
      title: 'Free Consultation',
      desc: 'We learn about your academic profile, goals, and timeline. You learn about our approach. No pressure, no commitment.',
      cta: true,
    },
    {
      num: '02',
      title: 'Application Planning & Evaluation',
      desc: 'A comprehensive assessment of your profile, grades, test scores, and overall candidacy. Two 45-minute consultations to map your strategy. ($465, and it can later be credited only toward a complete application package.)',
    },
    {
      num: '03',
      title: 'School Selection & Strategy',
      desc: 'We analyze your profile to build a balanced school list: reaches, targets, and safeties. Each school chosen for fit, not just prestige.',
    },
    {
      num: '04',
      title: 'Essay Development',
      desc: 'Brainstorm, outline, draft, revise. We guide your personal statement and every supplement through multiple rounds until each essay is exceptional.',
    },
    {
      num: '05',
      title: 'Application Assembly & Submit',
      desc: 'Activity descriptions, additional information sections, recommender strategy, and a final review of every component before you hit submit.',
    },
    {
      num: '06',
      title: 'Interview Prep & Decision Support',
      desc: 'Mock interviews tailored to each school. Plus waitlist strategies, LOCI letters, deferral responses, and help making your final enrollment decision.',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">Our Process</h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            A proven, step-by-step approach refined over 27 years and thousands of clients.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <ScrollReveal
                key={step.num}
                delay={i * 150}
                className="relative flex gap-6 md:gap-8"
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#1B2B4B] rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base z-10">
                  {step.num}
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <h3 className="text-lg md:text-xl font-bold text-[#1B2B4B] mb-2">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                  {step.cta && (
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center gap-1 text-[#E8613C] font-semibold mt-3 hover:gap-2 transition-all"
                    >
                      Book Yours Now <ChevronRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PRICING ───────────────────────── */
function PricingSection() {
  const tiers = [
    {
      name: 'Application Planning and Evaluation Service',
      price: '$465',
      desc: 'Introductory service with expert advice on essays, letters of rec, school selection, resume/CV, and more. Includes two sessions of 45 minutes each and several hours of independent research.',
      features: [
        'Profile, goals, and strategy assessment',
        'Two 45-minute consultations',
        'Grades, test scores, and candidacy review',
        'Can later be credited only toward a complete application package',
      ],
    },
    {
      name: 'Complete College Application or Transfer Application Package',
      price: '$5,175',
      desc: 'Everything you need for one school, plus $775 per additional school',
      highlighted: true,
      badge: 'Most Popular',
      features: [
        'Everything in Application Planning',
        'Personal statement & all supplements',
        'Activity descriptions',
        'School selection strategy',
        'Interview preparation',
        'Unlimited letters of recommendation',
        'Final application review',
        'Decision & waitlist support',
      ],
    },
    {
      name: 'Complete College Application Package for Five Schools',
      price: '$7,500',
      desc: 'Best value for students applying to multiple schools',
      features: [
        'Everything in the complete application package',
        '5 schools included',
        'Additional schools at $775 each',
        'Cross-application narrative consistency',
        'Expanded school list strategy',
        'Priority scheduling',
      ],
    },
    {
      name: 'Complete College Application Package for Ten Schools',
      price: '$10,600',
      desc: 'For applicants building a broad and strategic list',
      features: [
        'Everything in the complete application package',
        '10 schools included',
        'Additional schools at $775 each',
        'Broader reach, target, and safety coverage',
        'Priority scheduling across the larger application list',
      ],
    },
  ];

  const alaCarte = [
    { service: 'Application Planning and Evaluation', price: '$465' },
    { service: 'Common App Essay / Coalition App Essay', price: '$985' },
    { service: 'Common Application School-Specific Essays for 1 School', price: '$1,485' },
    { service: 'UC Essays / Long Essay (under 1,500 words)', price: '$1,485' },
    { service: 'Academic Resume or CV / College Bragg Sheet', price: '$975' },
    { service: 'Activity Descriptions (Common App, UC, or Coalition)', price: '$1,175' },
    { service: 'School Selection Service', price: '$1,375' },
    { service: 'Interview Coaching', price: '$1,275' },
    { service: 'Letter of Recommendation', price: '$885' },
    { service: 'Waitlist Appeal Letter or Letter of Continued Interest', price: '$985' },
    { service: 'Rush Fee (per incident)', price: '$500 (Call for Details)' },
  ];

  return (
    <section id="pricing" className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">
            Transparent Pricing
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            No hidden fees. No surprise invoices. Every service clearly priced so you can plan with
            confidence. Start with Application Planning and Evaluation and, if you upgrade later,
            that payment can be credited only toward a complete application package.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl p-8 border transition-shadow ${
                tier.highlighted
                  ? 'border-[#E8613C] shadow-lg scale-[1.02] bg-white'
                  : 'border-gray-200 bg-white hover:shadow-md'
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E8613C] text-white text-xs font-bold px-4 py-1 rounded-full">
                  {tier.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-[#1B2B4B] mb-2">{tier.name}</h3>
              <div className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-2">{tier.price}</div>
              <p className="text-gray-500 text-sm mb-6">{tier.desc}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2EAE6D] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/get-started"
                className={`block text-center py-3 px-6 rounded-full font-semibold transition-colors ${
                  tier.highlighted
                    ? 'bg-[#E8613C] text-white hover:bg-[#D4522E]'
                    : 'border-2 border-[#1B2B4B] text-[#1B2B4B] hover:bg-[#1B2B4B] hover:text-white'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* A la carte */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-[#1B2B4B] mb-6 text-center">
            Need something specific? A la carte options:
          </h3>
          <div className="bg-[#F8F9FA] rounded-xl p-6">
            {alaCarte.map((item, i) => (
              <div
                key={item.service}
                className={`flex justify-between items-center py-3 ${
                  i < alaCarte.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <span className="text-gray-700">{item.service}</span>
                <span className="font-semibold text-[#1B2B4B]">{item.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            50% discount on essay services for each additional school after the first. Payments for
            individual services can later be credited only toward a complete application package.
            Individual services cannot be credited toward other individual services.
          </p>
        </div>

        {/* Additional pricing context */}
        <div className="max-w-3xl mx-auto mt-12 space-y-4 text-gray-500 text-sm leading-relaxed">
          <p>
            We suggest our college or transfer admissions clients apply to at least seven schools (divided between safety, mid-range, and reach schools) to maximize their chances of gaining admission. Your admissions consultant will advise which schools fit into which category for you.
          </p>
          <p>
            Our experience shows that without a waitlist appeal letter or letter of continued interest, the applicant has a 12% chance of getting off a waitlist at a competitive school. With a good waitlist appeal letter and waitlist campaign, that moves up to 45%.
          </p>
        </div>

      </div>
    </section>
  );
}

/* ───────────────────────── TESTIMONIALS ───────────────────────── */
function TestimonialCarousel() {
  const testimonials = [
    {
      quote:
        'SOS Admissions transformed my application. Their essay guidance helped me find my authentic voice, and I got into my top choice.',
      name: 'Sarah M.',
      school: 'Columbia University',
      year: '2025',
    },
    {
      quote:
        'Working with former admissions officers made all the difference. They knew exactly what schools were looking for.',
      name: 'David L.',
      school: 'University of Pennsylvania',
      year: '2025',
    },
    {
      quote:
        'The team helped our daughter navigate the entire process with confidence. Every step was handled with expertise and genuine care.',
      name: 'Jennifer & Robert K.',
      school: 'Stanford University',
      year: '2024',
    },
    {
      quote:
        'After being deferred Early Decision, SOS helped me write a strong LOCI letter. I was admitted in the spring round.',
      name: 'Michael T.',
      school: 'Yale University',
      year: '2024',
    },
    {
      quote:
        'As an international student, the process felt overwhelming. SOS helped me present my background as a strength. Accepted to 4 of my 5 target schools.',
      name: 'Wei C.',
      school: 'MIT',
      year: '2025',
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
    <section className="py-12 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative min-h-[280px]">
          <div
            key={current}
            className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-100 text-center animate-fade-in"
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#F5A623] fill-[#F5A623]" />
              ))}
            </div>
            <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 italic">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>
            <div>
              <div className="w-12 h-12 bg-[#1B2B4B] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                {testimonials[current].name.charAt(0)}
              </div>
              <p className="font-semibold text-[#1B2B4B]">{testimonials[current].name}</p>
              <p className="text-gray-500 text-sm">
                {testimonials[current].school}, Class of {testimonials[current].year}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? 'bg-[#E8613C]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── TEAM SPOTLIGHT ───────────────────────── */
function TeamSpotlight() {
  const team = [
    {
      name: 'Joseph Ingam',
      title: 'Founder & Lead Consultant',
      credentials: 'U. Chicago (BA), UCLA Anderson (MBA)',
      highlight: 'Former admissions at Booth & Anderson. 27 years guiding students to top programs.',
      image: '/images/team/joseph-ingam.webp',
    },
    {
      name: 'Peter Glasser',
      title: 'Senior Consultant',
      credentials: 'Harvard (BA), UCLA Anderson (MBA)',
      highlight: 'Specializes in Ivy League and top-20 university admissions strategy.',
      image: '/images/team/peter-glasser.png',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">Meet Your Team</h2>
          <p className="text-base md:text-lg text-gray-500">
            Over 70 team members. Here are the consultants who lead our college admissions practice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-[#F8F9FA] rounded-xl p-8 text-center border border-gray-100"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1B2B4B]">{member.name}</h3>
              <p className="text-[#E8613C] font-medium text-sm mb-2">{member.title}</p>
              <p className="text-gray-500 text-sm mb-3">{member.credentials}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{member.highlight}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/about-us" className="text-[#E8613C] font-semibold hover:underline">
            Meet our full team &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ACCORDION ───────────────────────── */
function FAQAccordion() {
  const faqs = [
    {
      q: 'How is SOS Admissions different from other college consultants?',
      a: 'Our team includes former admissions committee members from U. Chicago, UCLA Anderson, Claremont McKenna, and other selective institutions. We have been doing this for 27 years and have guided thousands of clients. Our pricing is transparent and published on our website. Every service is clearly priced on our website so families can plan with confidence.',
    },
    {
      q: 'When should we start working with a consultant?',
      a: 'The ideal time to begin is the spring of junior year, which gives us a full admissions cycle to develop strategy, write essays, and prepare thoroughly. That said, we work with students at every stage. We regularly help seniors after Early Decision results.',
    },
    {
      q: 'Do you guarantee admission to a specific school?',
      a: 'No ethical consultant can guarantee admission to a specific institution. What we guarantee is our process, our expertise, and our commitment to presenting the strongest possible application. Our 98% client acceptance rate across 27 years speaks to the effectiveness of our approach.',
    },
    {
      q: 'What does the free consultation include?',
      a: 'The consultation is a 15 to 20 minute call where we learn about your academic profile, goals, and timeline. You learn about our approach and ask any questions. There is no obligation and no pressure.',
    },
    {
      q: 'Can you help with financial aid and scholarships?',
      a: 'Yes. Our school selection strategy takes financial aid considerations into account. We help position students for merit scholarships and guide families through the financial aid landscape as part of building a balanced school list.',
    },
    {
      q: 'Do you work with international students?',
      a: 'We have served students from over 80 countries. We understand the unique challenges international applicants face, from demonstrating English proficiency to navigating visa requirements. We offer WhatsApp and Zoom communication for international families.',
    },
    {
      q: 'What if I only need help with essays, not the full package?',
      a: 'We offer individual services for exactly this reason. Personal statement editing starts at $985. If you later decide to upgrade to a complete application package, the amount you have already paid can be credited toward that complete application package price. One individual service cannot be credited toward another individual service.',
    },
    {
      q: 'How many students do you take per admissions cycle?',
      a: 'We limit enrollment each cycle to maintain quality. With over 70 team members, we have significant capacity, but we do reach our limit. We encourage families to reach out early to ensure availability.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B4B] mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-[#1B2B4B] font-semibold pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className="grid transition-all duration-250 ease-out overflow-hidden"
                style={{ gridTemplateRows: openIndex === i ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FINAL CTA ───────────────────────── */
function FinalCTA() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#0D1B2A] to-[#1B2B4B]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get Expert Help With Your College Application
        </h2>
        <p className="text-base md:text-lg text-slate-300 mb-8 max-w-xl mx-auto">
          Talk with our team about school selection, essays, activity descriptions, interviews, or full application support.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-[#E8613C] hover:bg-[#D4522E] text-white font-bold py-3.5 px-8 rounded-full text-base md:text-lg transition-colors shadow-lg shadow-[#E8613C]/25 mb-5"
        >
          Schedule a Consultation
          <ChevronRight className="w-5 h-5" />
        </Link>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400 text-sm">
          <a href="tel:+13109514008" className="hover:text-white transition-colors flex items-center gap-2">
            <Phone className="w-4 h-4" /> (310) 951-4008
          </a>
          <a href="mailto:info@sosadmissions.com" className="hover:text-white transition-colors flex items-center gap-2">
            <Mail className="w-4 h-4" /> info@sosadmissions.com
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PAGE ASSEMBLY (below fold) ───────────────────────── */
export default function CollegeAdmissionsContent() {
  return (
    <div>
      <StatCounters />
      <ServiceCards />
      <Differentiators />
      <ProcessTimeline />
      <PricingSection />
      <TestimonialCarousel />
      <TeamSpotlight />
      <FAQAccordion />
      <FinalCTA />
    </div>
  );
}
