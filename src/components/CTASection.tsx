import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light to-blue opacity-95" />
      <div className={`absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width=%22100%22%20height=%22100%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id=%22grid%22%20width=%22100%22%20height=%22100%22%20patternUnits=%22userSpaceOnUse%22%3E%3Cpath%20d=%22M%20100%200%20L%200%200%200%20100%22%20fill=%22none%22%20stroke=%22white%22%20stroke-width=%220.5%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20fill=%22url(%2523grid)%22/%3E%3C/svg%3E')]`} />

      {/* Static gradient orbs (no JS animation) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-light/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-[fadeInUp_0.6s_ease-out_both]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Take the Next Step?
          </h2>

          <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-2xl mx-auto">
            Schedule a free consultation with one of our experienced advisors. We'll learn about your goals and create a personalized roadmap to success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
            <Link href="/contact-us" className="px-10 py-4 bg-gold text-charcoal font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl hover:-translate-y-1">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:310-951-4008"
              className="px-10 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-navy transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Call 310-951-4008
            </a>
          </div>

          {/* Trust indicator */}
          <p className="text-slate-300 mt-8 text-sm animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            No pressure, no obligation. Just expert guidance.
          </p>
        </div>
      </div>
    </section>
  );
}
