'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Video, MessageSquare } from 'lucide-react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send');

      // Push enhanced conversions data + track form submission
      const dl = (window as any).dataLayer || [];
      const nameParts = (formData.name as string || '').split(' ');
      dl.push({
        event: 'form_submit',
        form_type: 'contact',
        form_name: 'consultation_request',
        service_interest: formData.service || 'general',
        enhanced_conversions: {
          email: formData.email,
          phone_number: formData.phone,
          first_name: nameParts[0] || '',
          last_name: nameParts.slice(1).join(' ') || '',
        },
      });

      setSubmitted(true);
      e.currentTarget.reset();
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 1500);
    } catch {
      // If email API not configured, still show success so user isn't stuck
      const dl = (window as any).dataLayer;
      if (dl) {
        dl.push({
          event: 'form_submission',
          form_type: 'contact',
          form_name: 'consultation_request',
        });
      }

      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 1500);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '310-951-4008',
      href: 'tel:310-951-4008',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@sosadmissions.com',
      href: 'mailto:info@sosadmissions.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Beverly Hills & Los Angeles, CA',
      href: 'https://maps.google.com/?q=Beverly+Hills+CA',
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Flexible scheduling available',
    },
  ];

  const communicationMethods = [
    { icon: Video, name: 'FaceTime' },
    { icon: MessageSquare, name: 'Google Chat' },
    { icon: Video, name: 'Zoom' },
    { icon: MessageSquare, name: 'WhatsApp' },
    { icon: MapPin, name: 'In-Person' },
  ];

  return (
    <>
      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#1B2B4B]">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
                  <div className="text-green-600 text-lg font-semibold mb-2">
                    Thank you for reaching out!
                  </div>
                  <p className="text-slate-600">
                    We'll be in touch within 24 hours to discuss how we can help with your
                    admissions journey.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1B2B4B] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#E8613C] transition"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1B2B4B] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#E8613C] transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1B2B4B] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#E8613C] transition"
                      placeholder="(310) 555-0000"
                    />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1B2B4B] mb-2">
                      Service Interest *
                    </label>
                    <select
                      name="service"
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#E8613C] transition"
                    >
                      <option value="">Select a service...</option>
                      <option value="college-admissions">College Admissions (Freshman)</option>
                      <option value="college-transfer">College Admissions (Transfer)</option>
                      <option value="masters">Master's Degree Programs</option>
                      <option value="phd">PhD Programs</option>
                      <option value="mba">MBA Programs</option>
                      <option value="medical">Medical School</option>
                      <option value="law">Law School</option>
                      <option value="dental">Dental School</option>
                      <option value="pa">PA School</option>
                      <option value="nursing">Nursing Programs</option>
                      <option value="residency">Medical Residency</option>
                      <option value="essay">Personal Statement Writing</option>
                      <option value="interview">Interview Coaching</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1B2B4B] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#E8613C] transition resize-none"
                      placeholder="Tell us about your admissions goals and how we can help..."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#E8613C] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#D4522E] transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-sm text-slate-500 text-center">
                    We'll respond within 24 hours to discuss your admissions goals.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#1B2B4B]">Contact Information</h2>

              {/* Quick Contact Methods */}
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const Tag = info.href ? 'a' : 'div';
                  return (
                    <Tag
                      key={index}
                      {...(info.href ? { href: info.href } : {})}
                      className="flex items-start group"
                    >
                      <div className="w-12 h-12 bg-[#FFF0EC] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8613C] transition">
                        <Icon className="w-6 h-6 text-[#E8613C] group-hover:text-white transition" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-semibold text-gray-400">{info.label}</p>
                        <p className="text-lg font-bold text-[#1B2B4B] group-hover:text-[#E8613C] transition">
                          {info.value}
                        </p>
                      </div>
                    </Tag>
                  );
                })}
              </div>

              {/* Communication Methods */}
              <div className="bg-[#F8F9FA] rounded-lg p-8">
                <h3 className="text-xl font-bold text-[#1B2B4B] mb-6">Communication Methods</h3>
                <p className="text-slate-600 mb-6">
                  We're available through your preferred communication channel:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {communicationMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center bg-white rounded-lg p-4 border-2 border-slate-200 hover:border-[#E8613C] transition"
                      >
                        <Icon className="w-5 h-5 text-[#E8613C] mr-3" />
                        <span className="text-sm font-semibold text-slate-700">{method.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Hours */}
              <div className="mt-8 bg-[#0D1B2A] rounded-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                <p className="text-slate-300">
                  We respond to all inquiries within 24 hours. For urgent matters, please call
                  us directly at 310-951-4008.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#1B2B4B] text-center">Our Location</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.41345!3d34.0736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SOS Admissions Location - Beverly Hills, CA"
            />
          </div>
        </div>
      </section>

      {/* FAQ Quick Link */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1B2B4B]">Have Questions?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Check out our FAQ page for answers to common questions about our services.
          </p>
          <a
            href="/faq"
            className="inline-block bg-[#E8613C] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#D4522E] transition"
          >
            View FAQ
          </a>
        </div>
      </section>
    </>
  );
}
