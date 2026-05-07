'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-2 border-slate-200 rounded-lg overflow-hidden hover:border-blue transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-warm-gray transition-colors"
                >
                  <h3 className="text-lg font-bold text-navy text-left">{item.question}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-blue flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-warm-gray border-t-2 border-slate-200">
                    <p className="text-slate-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-navy text-center">Still Have Questions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Browse Our Blog</h3>
              <p className="text-slate-600 mb-6">
                Check out our admissions insights and tips to learn more about the process.
              </p>
              <a href="/blog" className="text-blue font-semibold hover:underline">
                Visit Blog →
              </a>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Schedule a Consultation</h3>
              <p className="text-slate-600 mb-6">
                Book a free initial consultation with one of our expert consultants.
              </p>
              <a href="/contact-us" className="text-blue font-semibold hover:underline">
                Contact Us →
              </a>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Our Services</h3>
              <p className="text-slate-600 mb-6">
                Learn about all the services we offer to support your admissions journey.
              </p>
              <a href="/services" className="text-blue font-semibold hover:underline">
                View Services →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-navy to-navy-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-cream mb-8">
            Contact us today to discuss your admissions goals and learn how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="inline-block bg-gold text-navy px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
            >
              Get in Touch
            </a>
            <a
              href="tel:310-951-4008"
              className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
            >
              Call Us: 310-951-4008
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
