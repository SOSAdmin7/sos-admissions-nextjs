import { Metadata } from 'next';
import Link from 'next/link';
import { Shield } from 'lucide-react';
import { LegacyImageGallery, LegacyYouTubeCard } from '@/components/LegacyMedia';
import { DEFAULT_LEGACY_VIDEO, LEGACY_IMAGES } from '@/lib/legacyAssets';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read our privacy policy to understand how SOS Admissions protects your personal information.',
  robots: 'index, follow',
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: 'Information We Collect',
      content: `We collect information that you provide directly to us, including:

      • Personal information (name, email, phone number, mailing address)
      • Educational information (schools, test scores, GPAs, intended majors)
      • Communication preferences and interests
      • Payment information (processed securely through our payment processor)
      • Information about your admissions goals and background

      We also automatically collect certain information when you use our website, including IP addresses, browser type, pages visited, and the time and date of visits.`,
    },
    {
      title: 'How We Use Your Information',
      content: `We use the information we collect for the following purposes:

      • To provide our admissions consulting services
      • To respond to your inquiries and requests
      • To send you updates about your application process
      • To improve our services and website
      • To comply with legal obligations
      • To prevent fraud and protect against security threats
      • To send you marketing communications (if you opt in)

      We do not sell your personal information to third parties.`,
    },
    {
      title: 'Data Sharing',
      content: `We only share your information with:

      • Service providers who assist us in operating our business (payment processors, email providers)
      • Legal authorities when required by law
      • Your designated schools if you request we submit materials on your behalf

      All service providers are bound by confidentiality agreements and are only permitted to use your information for the purposes we specify.`,
    },
    {
      title: 'Cookies and Tracking',
      content: `Our website uses cookies and similar tracking technologies to enhance your experience. These help us:

      • Remember your preferences
      • Track website usage for analytics
      • Provide personalized content
      • Monitor site security

      You can control cookie settings through your browser. Please note that disabling cookies may affect website functionality.`,
    },
    {
      title: 'Data Security',
      content: `We implement appropriate technical and organizational measures to protect your personal information, including:

      • SSL/TLS encryption for data in transit
      • Secure data storage and regular backups
      • Access controls and authentication requirements
      • Regular security audits and updates
      • Employee training on data protection

      While we strive to protect your information, no system is completely secure. Please notify us immediately if you suspect unauthorized access to your account.`,
    },
    {
      title: 'Retention of Information',
      content: `We retain your information for as long as necessary to provide our services and comply with legal obligations. Specifically:

      • Client records are maintained during the engagement and for seven years after completion
      • Contact form submissions are retained for two years
      • Website analytics data is retained for 26 months
      • You can request deletion of your information at any time, subject to legal requirements`,
    },
    {
      title: 'Your Rights',
      content: `Depending on your location, you may have the following rights:

      • Right to access your personal information
      • Right to correct inaccurate information
      • Right to delete your information
      • Right to opt out of marketing communications
      • Right to data portability

      To exercise these rights, please contact us using the information below.`,
    },
    {
      title: 'Third-Party Links',
      content: `Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites you visit.`,
    },
    {
      title: 'Children\'s Privacy',
      content: `Our services are designed for individuals 13 years of age and older. We do not knowingly collect information from children under 13. If we become aware that we have collected information from a child under 13, we will promptly delete such information.`,
    },
    {
      title: 'California Privacy Rights',
      content: `If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what information is collected, the right to delete information, and the right to opt out of the sale of information. We do not sell personal information.`,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-navy">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-600">
            How SOS Admissions protects your personal information
          </p>
          <div className="mt-8">
            <LegacyYouTubeCard video={DEFAULT_LEGACY_VIDEO} className="mx-auto" />
          </div>
        </div>
      </section>

      <LegacyImageGallery
        title="Legacy Privacy Page Asset"
        images={[LEGACY_IMAGES.privacyPromo]}
      />

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <div className="bg-warm-gray rounded-lg p-6 mb-12 flex items-start gap-3">
            <Shield className="w-6 h-6 text-blue flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-navy mb-1">Last Updated</p>
              <p className="text-slate-600">
                This privacy policy was last updated on January 2024. We may update this policy from time to time. Your continued use of our services constitutes acceptance of any changes.
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-6">Quick Navigation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#section-${index}`}
                  className="text-blue hover:underline font-semibold"
                >
                  {index + 1}. {section.title}
                </a>
              ))}
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} id={`section-${index}`} className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-navy mb-4">{section.title}</h2>
                <p className="text-slate-700 whitespace-pre-line leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 border-t-2 border-slate-200 pt-12">
            <h2 className="text-2xl font-bold text-navy mb-6">Contact Us About Privacy</h2>
            <p className="text-slate-600 mb-6">
              If you have questions about this privacy policy or how we handle your personal information, please contact us:
            </p>
            <div className="bg-warm-gray rounded-lg p-8 space-y-4">
              <div>
                <p className="font-semibold text-navy mb-2">Email</p>
                <a
                  href="mailto:info@sosadmissions.com"
                  className="text-blue hover:underline font-semibold"
                >
                  info@sosadmissions.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-navy mb-2">Phone</p>
                <a
                  href="tel:310-951-4008"
                  className="text-blue hover:underline font-semibold"
                >
                  310-951-4008
                </a>
              </div>
              <div>
                <p className="font-semibold text-navy mb-2">Mailing Address</p>
                <p className="text-slate-600">
                  SOS Admissions<br />
                  Beverly Hills, CA<br />
                  United States
                </p>
              </div>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
            <p className="text-slate-700 mb-4">
              By using our website and services, you acknowledge that you have read and understood this Privacy Policy.
            </p>
            <div className="flex gap-4">
              <Link
                href="/"
                className="text-blue font-semibold hover:underline"
              >
                Back to Home
              </Link>
              <Link
                href="/contact-us"
                className="text-blue font-semibold hover:underline"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
