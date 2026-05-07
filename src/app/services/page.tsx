import { Metadata } from 'next';
import { services, getServicesByCategories } from '@/data/services';
import Link from 'next/link';
import {
  GraduationCap,
  ArrowRight,
  BookOpen,
  Microscope,
  Briefcase,
  Stethoscope,
  Smile,
  Gavel,
  Hospital,
  Heart,
  Users,
  PenTool,
  Mic2,
  Award,
  Calculator,
  Globe,
  Building2,
  ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | SOS Admissions',
  description:
    'Explore our comprehensive range of admission consulting services for undergraduate, graduate, healthcare, and professional programs.',
  openGraph: {
    title: 'Our Services | SOS Admissions',
    description:
      'Explore our comprehensive range of admission consulting services for undergraduate, graduate, healthcare, and professional programs.',
    type: 'website',
  },
};

const iconMap: { [key: string]: React.ReactNode } = {
  GraduationCap: <GraduationCap className="w-8 h-8" />,
  ArrowRight: <ArrowRight className="w-8 h-8" />,
  BookOpen: <BookOpen className="w-8 h-8" />,
  Microscope: <Microscope className="w-8 h-8" />,
  Briefcase: <Briefcase className="w-8 h-8" />,
  Stethoscope: <Stethoscope className="w-8 h-8" />,
  Smile: <Smile className="w-8 h-8" />,
  Gavel: <Gavel className="w-8 h-8" />,
  Hospital: <Hospital className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  PenTool: <PenTool className="w-8 h-8" />,
  Mic2: <Mic2 className="w-8 h-8" />,
  Award: <Award className="w-8 h-8" />,
  Calculator: <Calculator className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
};

const categoryLabels: { [key: string]: string } = {
  undergraduate: 'Undergraduate Programs',
  graduate: 'Graduate Programs',
  healthcare: 'Healthcare Programs',
  professional: 'Professional Programs',
  support: 'Support Services',
};

const categoryDescriptions: { [key: string]: string } = {
  undergraduate:
    'Guidance for high school students and current university students pursuing undergraduate admissions or transfers.',
  graduate:
    'Expert support for Master\'s programs, PhD programs, and other advanced degree applications.',
  healthcare:
    'Specialized consulting for medical, dental, nursing, PA, and other healthcare professional programs.',
  professional:
    'Strategic positioning for MBA, law school, and other professional degree programs.',
  support: 'Targeted support services including essay writing, interview coaching, and test prep.',
};

export default function ServicesPage() {
  const servicesByCategory = getServicesByCategories();

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-blue py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            Comprehensive consulting programs designed to help you succeed at every stage of your
            admissions journey.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-navy font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Started Today
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(servicesByCategory).map(([categoryKey, categoryServices]) => (
            <div key={categoryKey} className="mb-20 last:mb-0">
              {/* Category Header */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
                  {categoryLabels[categoryKey]}
                </h2>
                <p className="text-lg text-slate max-w-3xl">
                  {categoryDescriptions[categoryKey]}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg border border-warm-gray transition-all hover:-translate-y-1"
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-center w-16 h-16 bg-blue rounded-lg text-white mb-6 group-hover:bg-navy-light transition-colors">
                      {iconMap[service.icon]}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-navy-light transition-colors line-clamp-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate mb-6 line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Metadata if available */}
                    {service.metadata && (
                      <div className="mb-6 pb-6 border-b border-warm-gray space-y-2 text-sm text-slate">
                        <p>
                          <span className="font-semibold">Duration:</span> {service.metadata.avgDuration}
                        </p>
                        <p>
                          <span className="font-semibold">Competition:</span>{' '}
                          <span className="capitalize">{service.metadata.competitionLevel}</span>
                        </p>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex items-center text-navy-light font-semibold group-hover:gap-3 gap-2 transition-all">
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary Stats */}
      <section className="bg-gradient-to-r from-navy-light to-blue py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gold mb-2">
                {services.length}+
              </p>
              <p className="text-blue-100 font-semibold">Service Offerings</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gold mb-2">15+</p>
              <p className="text-blue-100 font-semibold">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gold mb-2">500+</p>
              <p className="text-blue-100 font-semibold">Students Helped</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gold mb-2">95%</p>
              <p className="text-blue-100 font-semibold">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate mb-8 max-w-2xl mx-auto">
            Let's explore which service is right for your goals and begin your journey to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-yellow-500 text-navy font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Schedule a Free Consultation
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
