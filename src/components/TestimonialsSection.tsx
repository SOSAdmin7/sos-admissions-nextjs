'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials, Testimonial } from '@/data/testimonials';

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  }, []);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(current + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-navy">
      <div className={`absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width=%22100%22%20height=%22100%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id=%22grid%22%20width=%22100%22%20height=%22100%22%20patternUnits=%22userSpaceOnUse%22%3E%3Cpath%20d=%22M%20100%200%20L%200%200%200%20100%22%20fill=%22none%22%20stroke=%22white%22%20stroke-width=%220.5%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20fill=%22url(%2523grid)%22/%3E%3C/svg%3E')]`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 animate-[fadeInUp_0.6s_ease-out_both]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Hear from families who have experienced the SOS Admissions difference
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-12">
          {/* Mobile: Show 1 testimonial */}
          <div className="md:hidden">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 transition-opacity duration-500">
              <TestimonialCard testimonial={testimonials[current]} />
            </div>
          </div>

          {/* Desktop: Show 3 testimonials */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 animate-[fadeInUp_0.6s_ease-out_both]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-4">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoplay(false);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === current
                    ? 'bg-gold w-3 h-3'
                    : 'bg-white/30 w-2 h-2 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-2 ml-4">
            <button
              onClick={handlePrev}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="h-full flex flex-col">
      <div className="text-gold text-5xl leading-none mb-4">&ldquo;</div>
      <p className="text-white text-lg mb-6 flex-grow leading-relaxed">
        {testimonial.content}
      </p>
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-gold text-gold" />
        ))}
      </div>
      <div className="border-t border-white/20 pt-6">
        <p className="text-white font-semibold mb-1">{testimonial.clientName}</p>
        <p className="text-sm text-slate-300 mb-2">{testimonial.serviceName}</p>
        <p className="text-sm text-gold font-medium">{testimonial.outcome}</p>
      </div>
    </div>
  );
}
