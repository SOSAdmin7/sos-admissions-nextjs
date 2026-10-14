import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative py-10 md:py-14 lg:py-16 overflow-hidden bg-white border-t border-slate-200">
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-[fadeInUp_0.6s_ease-out_both]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            Ready to Take the Next Step?
          </h2>

          <p className="text-lg md:text-xl text-slate-700 mb-12 max-w-2xl mx-auto">
            Schedule a free initial consultation with one of our experienced
            advisors. We'll learn about your goals and create a personalized
            roadmap to success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
            <Link
              href="/contact-us"
              className="px-10 py-4 bg-gold text-charcoal font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Schedule a Free Initial Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:310-951-4008"
              className="px-10 py-4 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Call 310-951-4008
            </a>
          </div>

          {/* Trust indicator */}
          <p className="text-navy mt-8 text-sm animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            No pressure, no obligation. Just expert guidance.
          </p>
        </div>
      </div>
    </section>
  );
}
