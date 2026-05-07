'use client';

import { useState } from 'react';
import { Check, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

/* ─── PRICING DATA ─── */

type PricingTier = {
  label: string;
  oneSchool: number;
  fiveSchool: number;
  tenSchool: number;
  additionalSchool: number;
};

const pricingTiers: Record<string, PricingTier> = {
  standard: {
    label: 'Standard',
    oneSchool: 5175,
    fiveSchool: 7500,
    tenSchool: 10600,
    additionalSchool: 775,
  },
  doctorate: {
    label: 'Doctorate / Medical / JD',
    oneSchool: 5675,
    fiveSchool: 8000,
    tenSchool: 11100,
    additionalSchool: 775,
  },
  residency: {
    label: 'Residency',
    oneSchool: 6450,
    fiveSchool: 0,
    tenSchool: 0,
    additionalSchool: 1885,
  },
  mbaPremium: {
    label: 'MBA Premium',
    oneSchool: 7775,
    fiveSchool: 10700,
    tenSchool: 14600,
    additionalSchool: 775,
  },
};

type Program = {
  id: string;
  name: string;
  tier: string;
  category: string;
};

const programs: Program[] = [
  { id: 'college', name: 'College Admissions (Freshman)', tier: 'standard', category: 'Undergraduate' },
  { id: 'transfer', name: 'College Admissions (Transfer)', tier: 'standard', category: 'Undergraduate' },
  { id: 'private-school', name: 'Private School / K-12', tier: 'standard', category: 'Undergraduate' },
  { id: 'international', name: 'International Students', tier: 'standard', category: 'Undergraduate' },
  { id: 'grad-masters', name: 'Graduate School (Master\'s)', tier: 'standard', category: 'Graduate' },
  { id: 'grad-phd', name: 'Graduate School (PhD / Doctorate)', tier: 'doctorate', category: 'Graduate' },
  { id: 'mba-standard', name: 'MBA (Standard)', tier: 'standard', category: 'Professional' },
  { id: 'mba-premium', name: 'MBA (Premium)', tier: 'mbaPremium', category: 'Professional' },
  { id: 'law-llm', name: 'Law School (LLM)', tier: 'standard', category: 'Professional' },
  { id: 'law-jd', name: 'Law School (JD)', tier: 'doctorate', category: 'Professional' },
  { id: 'medical', name: 'Medical School', tier: 'doctorate', category: 'Healthcare' },
  { id: 'dental', name: 'Dental School', tier: 'doctorate', category: 'Healthcare' },
  { id: 'residency', name: 'Medical Residency', tier: 'residency', category: 'Healthcare' },
  { id: 'bs-md', name: 'BS/MD Programs', tier: 'doctorate', category: 'Healthcare' },
  { id: 'pa', name: 'PA School', tier: 'standard', category: 'Healthcare' },
  { id: 'crna', name: 'CRNA', tier: 'standard', category: 'Healthcare' },
  { id: 'nursing', name: 'Nursing Programs (NP / General)', tier: 'standard', category: 'Healthcare' },
];

type ALaCarteItem = {
  id: string;
  name: string;
  price: number;
  note?: string;
};

const aLaCarteServices: ALaCarteItem[] = [
  { id: 'planning', name: 'Application Planning and Evaluation', price: 465 },
  { id: 'school-selection', name: 'School Selection Service', price: 1375 },
  { id: 'common-app-essay', name: 'Common App / Primary Essay', price: 985 },
  { id: 'school-essay', name: 'School-Specific Essays (per school)', price: 1485 },
  { id: 'uc-essays', name: 'UC Essays', price: 1485 },
  { id: 'personal-statement', name: 'Personal Statement (under 900 words)', price: 985 },
  { id: 'long-essay', name: 'Long Essay (900-1500 words)', price: 1485 },
  { id: 'resume', name: 'Resume / CV', price: 975 },
  { id: 'activities', name: 'Activity Descriptions', price: 1175 },
  { id: 'interview', name: 'Interview Coaching (Traditional/Panel)', price: 1275 },
  { id: 'mmi', name: 'MMI Interview Coaching', price: 1675 },
  { id: 'rec-letter', name: 'Letter of Recommendation Guidance', price: 885 },
  { id: 'waitlist', name: 'Waitlist Appeal Letter', price: 985 },
  { id: 'rush', name: 'Rush Fee', price: 500 },
];

/* ─── COMPONENT ─── */

export function OrderForm() {
  const [selectedProgram, setSelectedProgram] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [selectedALaCarte, setSelectedALaCarte] = useState<Set<string>>(new Set());
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const program = programs.find((p) => p.id === selectedProgram);
  const tier = program ? pricingTiers[program.tier] : null;
  const isResidency = program?.tier === 'residency';

  const toggleALaCarte = (id: string) => {
    setSelectedALaCarte((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const getPackagePrice = () => {
    if (!tier) return 0;
    if (selectedPackage === 'one') return tier.oneSchool;
    if (selectedPackage === 'five') return tier.fiveSchool;
    if (selectedPackage === 'ten') return tier.tenSchool;
    return 0;
  };

  const getALaCarteTotal = () => {
    return aLaCarteServices
      .filter((s) => selectedALaCarte.has(s.id))
      .reduce((sum, s) => sum + s.price, 0);
  };

  const total = getPackagePrice() + getALaCarteTotal();

  const handleSubmit = async () => {
    if (!selectedProgram) return;
    if (!selectedPackage && selectedALaCarte.size === 0) return;
    if (!contactInfo.name.trim() || !contactInfo.email.trim()) {
      setError('Please enter your name and email address.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Build a description of what they're buying
    const selectedItems: string[] = [];
    if (selectedPackage && tier) {
      const pkgLabels: Record<string, string> = {
        one: 'Complete Package (1 School)',
        five: 'Complete Package (5 Schools)',
        ten: 'Complete Package (10 Schools)',
      };
      selectedItems.push(pkgLabels[selectedPackage]);
    }
    aLaCarteServices
      .filter((s) => selectedALaCarte.has(s.id))
      .forEach((s) => selectedItems.push(s.name));

    const serviceName = `${program?.name} - ${selectedItems.join(', ')}`;

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceId: `order-${selectedProgram}-${Date.now()}`,
          serviceName,
          price: total,
          customerName: contactInfo.name,
          customerEmail: contactInfo.email,
          customerPhone: contactInfo.phone,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Track checkout initiation
      const dl = (window as any).dataLayer;
      if (dl) {
        dl.push({
          event: 'begin_checkout',
          form_type: 'order',
          program: program?.name,
          value: total,
          currency: 'USD',
        });
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch {
      setError('Unable to process payment. Please call us at 310-951-4008 to complete your order.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-[#1B2B4B] mb-4">Thank You!</h2>
          <p className="text-lg text-gray-500 mb-8">
            Your order request has been submitted. A consultant will contact you within 24 hours to finalize
            your package and arrange payment.
          </p>
          <p className="text-gray-500 mb-8">
            For immediate assistance, call us at{' '}
            <a href="tel:310-951-4008" className="text-[#E8613C] font-semibold">310-951-4008</a>
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#E8613C] hover:bg-[#D4522E] text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Step 1: Select Program */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 bg-[#E8613C] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <h2 className="text-2xl font-bold text-[#1B2B4B]">Select Your Program</h2>
            </div>
            <p className="text-gray-500 ml-11">What type of admissions support do you need?</p>
          </div>

          <div className="relative ml-11">
            <select
              value={selectedProgram}
              onChange={(e) => {
                setSelectedProgram(e.target.value);
                setSelectedPackage('');
              }}
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg text-[#1B2B4B] font-medium appearance-none bg-white focus:outline-none focus:border-[#E8613C] transition text-lg"
            >
              <option value="">Choose a program...</option>
              {['Undergraduate', 'Graduate', 'Professional', 'Healthcare'].map((cat) => (
                <optgroup key={cat} label={cat}>
                  {programs.filter((p) => p.category === cat).map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </optgroup>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Step 2: Select Package */}
      {program && tier && (
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA]">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-[#E8613C] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <h2 className="text-2xl font-bold text-[#1B2B4B]">Choose a Package</h2>
              </div>
              <p className="text-gray-500 ml-11">Complete packages include all services for your application cycle.</p>
            </div>

            <div className={`grid gap-4 ml-11 ${isResidency ? 'grid-cols-1 max-w-md' : 'grid-cols-1 md:grid-cols-3'}`}>
              {/* 1 School */}
              <button
                onClick={() => setSelectedPackage(selectedPackage === 'one' ? '' : 'one')}
                className={`text-left p-6 rounded-xl border-2 transition-all ${
                  selectedPackage === 'one'
                    ? 'border-[#E8613C] bg-[#FFF0EC]'
                    : 'border-gray-200 bg-white hover:border-[#E8613C]/40'
                }`}
              >
                <p className="text-sm text-gray-500 mb-1">{isResidency ? 'Complete Package' : '1 School'}</p>
                <p className="text-3xl font-bold text-[#1B2B4B]">${tier.oneSchool.toLocaleString()}</p>
                <p className="text-sm text-gray-400 mt-1">+${tier.additionalSchool.toLocaleString()}/additional {isResidency ? 'specialty' : 'school'}</p>
              </button>

              {!isResidency && (
                <>
                  {/* 5 Schools */}
                  <button
                    onClick={() => setSelectedPackage(selectedPackage === 'five' ? '' : 'five')}
                    className={`relative text-left p-6 rounded-xl border-2 transition-all ${
                      selectedPackage === 'five'
                        ? 'border-[#E8613C] bg-[#FFF0EC]'
                        : 'border-gray-200 bg-white hover:border-[#E8613C]/40'
                    }`}
                  >
                    <span className="absolute top-3 right-3 bg-[#E8613C] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">POPULAR</span>
                    <p className="text-sm text-gray-500 mb-1">5 Schools</p>
                    <p className="text-3xl font-bold text-[#1B2B4B]">${tier.fiveSchool.toLocaleString()}</p>
                    <p className="text-sm text-gray-400 mt-1">+${tier.additionalSchool.toLocaleString()}/additional school</p>
                  </button>

                  {/* 10 Schools */}
                  <button
                    onClick={() => setSelectedPackage(selectedPackage === 'ten' ? '' : 'ten')}
                    className={`text-left p-6 rounded-xl border-2 transition-all ${
                      selectedPackage === 'ten'
                        ? 'border-[#E8613C] bg-[#FFF0EC]'
                        : 'border-gray-200 bg-white hover:border-[#E8613C]/40'
                    }`}
                  >
                    <p className="text-sm text-gray-500 mb-1">10 Schools</p>
                    <p className="text-3xl font-bold text-[#1B2B4B]">${tier.tenSchool.toLocaleString()}</p>
                    <p className="text-sm text-gray-400 mt-1">+${tier.additionalSchool.toLocaleString()}/additional school</p>
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Step 3: A La Carte Add-Ons */}
      {program && (
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-[#E8613C] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <h2 className="text-2xl font-bold text-[#1B2B4B]">A La Carte Services</h2>
              </div>
              <p className="text-gray-500 ml-11">Add individual services, or skip this step if you selected a complete package.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-11">
              {aLaCarteServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => toggleALaCarte(service.id)}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 text-left transition-all ${
                    selectedALaCarte.has(service.id)
                      ? 'border-[#E8613C] bg-[#FFF0EC]'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedALaCarte.has(service.id) ? 'border-[#E8613C] bg-[#E8613C]' : 'border-gray-300'
                    }`}>
                      {selectedALaCarte.has(service.id) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="text-sm font-medium text-[#1B2B4B]">{service.name}</span>
                  </div>
                  <span className="text-sm font-bold text-[#1B2B4B] flex-shrink-0 ml-3">${service.price.toLocaleString()}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Step 4: Contact Information */}
      {program && (selectedPackage || selectedALaCarte.size > 0) && (
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA]">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-[#E8613C] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <h2 className="text-2xl font-bold text-[#1B2B4B]">Your Contact Information</h2>
              </div>
              <p className="text-gray-500 ml-11">So we can follow up on your order.</p>
            </div>

            <div className="ml-11 space-y-4 max-w-lg">
              <div>
                <label htmlFor="order-name" className="block text-sm font-medium text-[#1B2B4B] mb-1">Full Name *</label>
                <input
                  id="order-name"
                  type="text"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-[#1B2B4B] focus:outline-none focus:border-[#E8613C] transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="order-email" className="block text-sm font-medium text-[#1B2B4B] mb-1">Email Address *</label>
                <input
                  id="order-email"
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-[#1B2B4B] focus:outline-none focus:border-[#E8613C] transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="order-phone" className="block text-sm font-medium text-[#1B2B4B] mb-1">Phone Number</label>
                <input
                  id="order-phone"
                  type="tel"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  placeholder="(555) 555-5555"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-[#1B2B4B] focus:outline-none focus:border-[#E8613C] transition"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Order Summary */}
      {program && (selectedPackage || selectedALaCarte.size > 0) && (
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA] border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1B2B4B] mb-6">Order Summary</h3>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Program</span>
                  <span className="font-medium text-[#1B2B4B]">{program.name}</span>
                </div>

                {selectedPackage && tier && (
                  <div className="flex justify-between">
                    <span className="text-[#1B2B4B]">
                      {isResidency ? 'Complete Package' : `Complete Package (${selectedPackage === 'one' ? '1' : selectedPackage === 'five' ? '5' : '10'} ${selectedPackage === 'one' ? 'School' : 'Schools'})`}
                    </span>
                    <span className="font-bold text-[#1B2B4B]">${getPackagePrice().toLocaleString()}</span>
                  </div>
                )}

                {aLaCarteServices
                  .filter((s) => selectedALaCarte.has(s.id))
                  .map((s) => (
                    <div key={s.id} className="flex justify-between">
                      <span className="text-[#1B2B4B]">{s.name}</span>
                      <span className="font-bold text-[#1B2B4B]">${s.price.toLocaleString()}</span>
                    </div>
                  ))}
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold text-[#1B2B4B]">Total</span>
                <span className="text-3xl font-bold text-[#E8613C]">${total.toLocaleString()}</span>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm mb-6">
                  {error}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-[#E8613C] hover:bg-[#D4522E] text-white font-bold py-4 rounded-full text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>

              <p className="text-sm text-gray-400 text-center mt-4">
                You will be redirected to Stripe for secure payment processing.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Call CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0D1B2A]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-300 mb-4">
            Prefer to speak with someone? Call us for a free consultation.
          </p>
          <a
            href="tel:310-951-4008"
            className="inline-flex items-center gap-2 text-white font-bold text-xl hover:text-[#E8613C] transition-colors"
          >
            <Phone className="w-5 h-5" />
            310-951-4008
          </a>
        </div>
      </section>
    </>
  );
}
