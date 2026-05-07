import { MessageSquare, Lightbulb, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'We learn about your goals, background, and aspirations to understand your unique story.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Custom Strategy',
    description: 'We develop a personalized admissions plan tailored to your strengths and target schools.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Application Support',
    description: 'Essays, interviews, recommendations: we guide every step of your application journey.',
    icon: FileText,
  },
  {
    number: '04',
    title: 'Acceptance',
    description: 'Celebrate your admission to your dream school. Your success is our greatest reward.',
    icon: CheckCircle,
  },
];

export function ProcessSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-cream via-white to-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 animate-[fadeInUp_0.6s_ease-out_both]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            A clear, proven process to guide you toward your dream school
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            const delay = 0.2 + index * 0.15;

            return (
              <div key={index}>
                <div
                  className="relative h-full animate-[fadeInUp_0.6s_ease-out_both]"
                  style={{ animationDelay: `${delay}s` }}
                >
                  {/* Card */}
                  <div className="relative h-full p-6 md:p-8 bg-white rounded-xl border border-warm-gray shadow-md hover:shadow-lg transition-all duration-300 hover:border-gold">
                    {/* Number Badge + Icon side by side */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gold text-white font-bold text-lg rounded-full flex-shrink-0 relative z-10">
                        {step.number}
                      </div>
                      <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center text-navy flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Line (desktop) */}
                  {!isLast && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 w-4 h-0.5 bg-gradient-to-r from-gold to-gold/30 transform translate-x-full" />
                  )}

                  {/* Connector Arrow (desktop) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 text-gold">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>

                {/* Vertical connector line (mobile/tablet) */}
                {!isLast && (
                  <div className="lg:hidden flex justify-center py-4">
                    <div className="text-gold">
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-16 md:mt-20 animate-[fadeInUp_0.6s_ease-out_0.8s_both]">
          <Link href="/contact-us" className="px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-all duration-300 inline-flex items-center gap-2 group shadow-lg hover:shadow-xl hover:-translate-y-1">
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
