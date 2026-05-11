import { Metadata } from 'next';
import { LegacyYouTubeCard } from '@/components/LegacyMedia';
import { DEFAULT_LEGACY_VIDEO } from '@/lib/legacyAssets';
import { generateFAQMetadata } from '@/lib/metadata';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = generateFAQMetadata();

const faqItems = [
  {
    question: 'What is admissions consulting and how does it work?',
    answer:
      'Admissions consulting is a service that helps students navigate the college and graduate school application process. Our consultants work with you one-on-one to develop a strategic approach to applications, craft compelling essays, prepare for interviews, and position yourself as a strong candidate. We do not write your essays for you, but rather guide you to develop and articulate your authentic voice and story.',
  },
  {
    question: 'How much does admissions consulting cost?',
    answer:
      'Our pricing varies depending on the service and scope of work. We offer various package options ranging from hourly consulting to comprehensive full-service packages that include essay editing, interview coaching, and ongoing support. We are transparent about pricing and provide detailed quotes after understanding your specific needs. Please contact us for a personalized quote.',
  },
  {
    question: 'What is your process?',
    answer:
      'Our process typically includes: (1) Initial consultation to understand your goals and background, (2) Strategic school selection and positioning, (3) Essay brainstorming and development, (4) Essay review and multiple rounds of feedback, (5) Interview preparation and practice, and (6) Ongoing support throughout the application cycle. The exact process is customized based on your specific service package.',
  },
  {
    question: 'Do you guarantee admissions to specific schools?',
    answer:
      'We do not guarantee admission to any specific school, as admissions decisions are ultimately made by the schools themselves and depend on many factors beyond our control. However, we do guarantee that we will provide expert guidance, personalized attention, and strategic positioning to maximize your chances of admission. Our track record speaks for itself with a 68% Ivy League acceptance rate and thousands of successful placements.',
  },
  {
    question: 'When should I start the admissions process?',
    answer:
      'For college admissions, we recommend starting in the summer before senior year (or earlier for those taking the SAT/ACT multiple times). For graduate programs, timelines vary: MBA applications typically begin a year or more before intended enrollment, medical school applications should start in the spring/summer before application cycle, and other graduate programs have varied timelines. The earlier you start, the more time we have to develop a strong application strategy.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'We offer comprehensive admissions consulting across 15+ program types, including: college admissions (freshman and transfer), master\'s degrees, PhD programs, MBA, medical school, law school, dental school, PA school, nursing programs, medical residency, personal statement writing, essay editing, interview coaching, letters of recommendation strategy, and standardized test prep guidance. We also specialize in serving international students and K-12 private school admissions.',
  },
  {
    question: 'How long does the admissions consulting process take?',
    answer:
      'The timeline depends on your program and when you start. For college admissions, a typical engagement runs from summer through the spring of senior year (8-10 months). For graduate programs, engagements typically last 3-6 months depending on application deadlines and how early you begin. We can accelerate the process if you\'re starting close to application deadlines, though earlier starts allow for more strategic planning.',
  },
  {
    question: 'Can you help with international student applications?',
    answer:
      'Yes, absolutely. We specialize in working with international students and understand the unique challenges they face, including TOEFL/IELTS requirements, financial aid limitations, visa considerations, and application platform differences. Our consultants have extensive experience helping international applicants to top US universities and have worked with students from over 50 countries.',
  },
  {
    question: 'Do you offer interview coaching?',
    answer:
      'Yes, interview coaching is one of our core services. We provide mock interviews, feedback on your interview approach, guidance on answering difficult questions, and coaching on how to tell your story authentically. Our interview coaches are experienced and provide realistic practice that mirrors actual interview formats and questions from admissions offices.',
  },
  {
    question: 'Can you help me choose which schools to apply to?',
    answer:
      'Yes, school selection is a critical part of our strategic approach. We help you identify schools that align with your academic profile, interests, and goals. We look at factors like acceptance rates, financial aid availability, program fit, campus culture, and your realistic chances of admission. We typically recommend a balanced list including reach schools, target schools, and safety schools.',
  },
  {
    question: 'How do you work with students remotely?',
    answer:
      'We are experienced in working with students remotely from anywhere in the world. We offer consultations via video call (Zoom, FaceTime), email, Google Chat, and Zoom. Many of our students work with us this way and find it convenient and just as effective as in-person meetings. We also have an office in Beverly Hills for students who prefer in-person consultations.',
  },
  {
    question: 'What if I\'m a first-generation college student?',
    answer:
      'We have extensive experience working with first-generation college students and understand the unique support they may need. We help demystify the admissions process, explain what admissions officers are looking for, and guide you through each step clearly. Many of our consultants were first-generation college students themselves and can relate to your experience. Being first-generation can actually be a strength in your application when positioned strategically.',
  },
  {
    question: 'How can I get started?',
    answer:
      'Getting started is easy! Simply fill out our contact form, call us at 310-951-4008, or email info@sosadmissions.com to schedule an initial consultation. During this conversation, we\'ll learn about your goals, answer any questions you have, and discuss how we can best support your admissions journey. There\'s no obligation. We just want to understand your needs.',
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-navy">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600">
            Find answers to common questions about our services and the admissions process.
          </p>
          <div className="mt-8">
            <LegacyYouTubeCard video={DEFAULT_LEGACY_VIDEO} className="mx-auto" />
          </div>
        </div>
      </section>

      <FAQAccordion />
    </>
  );
}
