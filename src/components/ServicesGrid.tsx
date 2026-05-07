import Link from 'next/link';
import { ArrowRight, GraduationCap, BookOpen, Microscope, Briefcase, Stethoscope, Smile, Scale, Building2, Heart, Users, PenTool, Mic2, Award, Calculator, Globe } from 'lucide-react';
import { services, Service } from '@/data/services';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  ArrowRight,
  BookOpen,
  Microscope,
  Briefcase,
  Stethoscope,
  Smile,
  Gavel: Scale,
  Hospital: Building2,
  Heart,
  Users,
  PenTool,
  Mic2,
  Award,
  Calculator,
  Globe,
  Building2,
};

export function ServicesGrid() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 animate-[fadeInUp_0.6s_ease-out_both]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B2B4B] mb-4">
            Admissions Support for Every Stage
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            From kindergarten to medical residency, we guide you at every stage
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service: Service, i: number) => {
            const Icon = iconMap[service.icon] || GraduationCap;
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative h-full block animate-[fadeInUp_0.5s_ease-out_both]"
                style={{ animationDelay: `${0.1 + i * 0.05}s` }}
              >
                <div className="h-full p-6 md:p-8 bg-white rounded-xl border border-gray-100 hover:border-[#E8613C]/30 shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="w-14 h-14 bg-[#FFF0EC] rounded-lg flex items-center justify-center mb-6 text-[#E8613C] group-hover:bg-[#E8613C] group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[#1B2B4B] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-base text-gray-500 mb-6">
                    {service.shortDescription}
                  </p>

                  <span className="inline-flex items-center gap-2 text-[#E8613C] font-semibold group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
