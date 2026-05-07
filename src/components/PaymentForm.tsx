'use client';
import { useState } from 'react';
import { Lock, Check } from 'lucide-react';

const services = [
  {
    id: 'app-planning',
    name: 'Application Planning Session',
    price: 465,
    description: 'Initial strategy session to map out your application plan',
    features: ['Application timeline', 'School list strategy', 'Personalized action plan'],
  },
  {
    id: 'interview-coaching',
    name: 'Interview Coaching',
    price: 1275,
    description: 'Mock interviews with former admissions officers',
    features: ['Multiple mock interviews', 'Detailed feedback', 'School-specific preparation'],
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive Package',
    price: 5175,
    description: 'Full-service support for your entire application cycle',
    popular: true,
    features: [
      'Unlimited consultations',
      'Essay brainstorming and editing',
      'Interview coaching',
      'School selection strategy',
      'Application review and submission support',
    ],
  },
  {
    id: 'five-school',
    name: '5-School Package',
    price: 7500,
    description: 'Complete support for up to 5 school applications',
    features: [
      'Everything in Comprehensive',
      'Up to 5 full applications',
      'Priority scheduling',
      'Extended support through decisions',
    ],
  },
];

export function PaymentForm() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const selected = services.find((s) => s.id === selectedService);

  const handleCheckout = async () => {
    if (!selected) return;
    setIsLoading(true);
    setError('');

    // Read funnel source from URL query param (set by /purchase or /admissions-options-page)
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('source') || 'direct';

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceId: selected.id,
          serviceName: selected.name,
          price: selected.price,
          source,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      window.location.href = data.url;
    } catch {
      setError('Something went wrong. Please try again or call us at 310-951-4008.');
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Payment Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service Selection */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8 text-navy">Select Service</h2>

              <div className="space-y-4 mb-12">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full text-left p-6 rounded-lg border-2 transition relative ${
                      selectedService === service.id
                        ? 'border-blue bg-blue bg-opacity-5'
                        : 'border-slate-200 hover:border-blue'
                    }`}
                  >
                    {service.popular && (
                      <span className="absolute top-4 right-4 bg-[#E8613C] text-white text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    )}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-navy mb-1">{service.name}</h3>
                        <p className="text-slate-600 text-sm">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gold">
                          ${service.price.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-green-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </button>
                ))}
              </div>

              {selectedService && (
                <div>
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm mb-6">
                      {error}
                    </div>
                  )}

                  {/* Security Badge */}
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                    <Lock className="w-5 h-5 text-green-600" />
                    <span>Secure payment processing powered by Stripe</span>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    disabled={isLoading}
                    className="w-full bg-blue text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Redirecting to Checkout...' : `Pay $${selected?.price.toLocaleString()}`}
                  </button>

                  <p className="text-sm text-slate-500 text-center mt-3">
                    You will be redirected to Stripe's secure checkout page.
                  </p>

                  {/* Terms */}
                  <p className="text-sm text-slate-600 text-center mt-4">
                    By completing this payment, you agree to our{' '}
                    <a href="/privacy-policy" className="text-blue hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-warm-gray rounded-lg p-8 sticky top-8">
                <h3 className="text-xl font-bold text-navy mb-6">Order Summary</h3>

                {selected ? (
                  <>
                    <div className="space-y-4 mb-6 pb-6 border-b-2 border-slate-200">
                      <div className="flex justify-between">
                        <span className="text-slate-600">{selected.name}</span>
                        <span className="font-bold text-navy">
                          ${selected.price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-end">
                        <span className="text-lg font-bold text-navy">Total</span>
                        <div>
                          <span className="text-3xl font-bold text-gold">
                            ${selected.price.toLocaleString()}
                          </span>
                          <span className="text-sm text-slate-600 ml-2">USD</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                        What's Included
                      </p>
                      <div className="space-y-2">
                        {selected.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-slate-600">Select a service to view summary</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-navy text-center">Payment FAQ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-navy mb-3">Is my payment secure?</h3>
              <p className="text-slate-600 text-sm">
                Yes. All payments are processed securely through Stripe, one of the most trusted payment
                processors in the world. Your card details never touch our servers.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-navy mb-3">What payment methods do you accept?</h3>
              <p className="text-slate-600 text-sm">
                We accept all major credit and debit cards including Visa, Mastercard, American Express,
                and Discover. Additional payment methods may be available upon request.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-navy mb-3">Can I get a refund?</h3>
              <p className="text-slate-600 text-sm">
                We offer a satisfaction guarantee. If you're not satisfied with our service, contact
                us to discuss your options.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-navy mb-3">Do you offer payment plans?</h3>
              <p className="text-slate-600 text-sm">
                Yes, payment plans may be available for our comprehensive packages. Please contact us to
                discuss financing options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Need Help?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Our team is ready to assist you with any questions about payment or services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:310-951-4008"
              className="inline-block bg-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
            >
              Call: 310-951-4008
            </a>
            <a
              href="mailto:info@sosadmissions.com"
              className="inline-block bg-warm-gray text-navy px-8 py-3 rounded-lg font-bold border-2 border-navy hover:bg-navy hover:text-white transition"
            >
              Email: info@sosadmissions.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
