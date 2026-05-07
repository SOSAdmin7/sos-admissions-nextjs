'use client';
import { useState, useMemo } from 'react';
import { Star, Filter } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export function TestimonialContent() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Get unique services
  const services = useMemo(() => {
    const unique = [...new Set(testimonials.map((t) => t.serviceName))];
    return unique.sort();
  }, []);

  // Filter testimonials
  const filteredTestimonials = useMemo(() => {
    if (!selectedService) return testimonials;
    return testimonials.filter((t) => t.serviceName === selectedService);
  }, [selectedService]);

  // Get featured testimonials for hero section
  const featuredTestimonials = testimonials.filter((t) => t.featured).slice(0, 3);

  return (
    <>
      {/* Featured Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-navy text-center">Featured Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-warm-gray to-cream rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="border-t-2 border-gold pt-4">
                  <p className="font-bold text-navy mb-1">{testimonial.clientName}</p>
                  <p className="text-sm text-slate-600 mb-2">{testimonial.clientTitle}</p>
                  {testimonial.location && (
                    <p className="text-xs text-slate-500">{testimonial.location}</p>
                  )}
                </div>

                {/* Service Badge */}
                <div className="mt-4">
                  <span className="inline-block rounded-full bg-[#EAF2FF] px-3 py-1 text-xs font-semibold text-[#1D4ED8]">
                    {testimonial.serviceName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-warm-gray border-b-2 border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-navy" />
            <h3 className="text-lg font-bold text-navy">Filter by Service</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedService(null)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedService === null
                  ? 'bg-navy text-white'
                  : 'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white'
              }`}
            >
              All Services
            </button>
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setSelectedService(service)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedService === service
                    ? 'bg-navy text-white'
                    : 'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white'
                }`}
              >
                {service}
              </button>
            ))}
          </div>
          <p className="text-slate-600 mt-4">
            Showing {filteredTestimonials.length} testimonial{filteredTestimonials.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="border-2 border-slate-200 rounded-lg p-8 hover:border-blue hover:shadow-lg transition-all"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Outcome */}
                {testimonial.outcome && (
                  <div className="bg-green-50 border-l-4 border-green-500 pl-4 py-3 mb-6">
                    <p className="text-sm font-semibold text-green-900 mb-1">Outcome:</p>
                    <p className="text-sm text-green-800">{testimonial.outcome}</p>
                  </div>
                )}

                {/* Admitted Schools */}
                {testimonial.schoolsAdmitted && testimonial.schoolsAdmitted.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-navy mb-2">Schools Admitted:</p>
                    <div className="flex flex-wrap gap-2">
                      {testimonial.schoolsAdmitted.map((school, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-[#EAF2FF] px-3 py-1 text-xs font-medium text-[#1D4ED8]"
                        >
                          {school}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Client Info */}
                <div className="border-t-2 border-slate-200 pt-4">
                  <p className="font-bold text-navy mb-1">{testimonial.clientName}</p>
                  <p className="text-sm text-slate-600 mb-2">{testimonial.clientTitle}</p>
                  {testimonial.location && (
                    <p className="text-xs text-slate-500 mb-3">{testimonial.location}</p>
                  )}
                  <span className="inline-block rounded-full bg-[#FFF4D8] px-3 py-1 text-xs font-semibold text-[#A16207]">
                    {testimonial.serviceName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">{testimonials.length}+</div>
              <p className="text-cream">Successful Students</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">98%</div>
              <p className="text-cream">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">68%</div>
              <p className="text-cream">Ivy League Acceptance</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">27+</div>
              <p className="text-cream">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-navy mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Join thousands of students who have achieved their admissions dreams with SOS Admissions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="inline-block bg-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
            >
              Start Your Journey
            </a>
            <a
              href="/services"
              className="inline-block bg-warm-gray text-navy px-8 py-3 rounded-lg font-bold border-2 border-navy hover:bg-navy hover:text-white transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
