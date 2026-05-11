import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Zap, Target, CheckCircle2 } from 'lucide-react';
import { LegacyImageGallery, LegacyYouTubeCard } from '@/components/LegacyMedia';
import { DEFAULT_LEGACY_VIDEO, LEGACY_IMAGES } from '@/lib/legacyAssets';
import { generateAboutMetadata } from '@/lib/metadata';

// Export metadata for SEO
export const metadata: Metadata = generateAboutMetadata();

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'David Buntt, MD, MBA',
      title: 'Manager of Admissions Consultants for Health Professionals',
      image: '/images/team/david-buntt.webp',
      bio: 'Dr. Buntt served on the Hebrew University admissions committee during medical school, completed his medical studies at Hadassah Medical Center, and later earned his MBA from UCLA. He also led admissions at the Southern California College of Osteopathic Medicine and has helped hundreds of healthcare applicants since 2011.',
    },
    {
      name: 'Matt Hatway',
      title: 'Manager of College Admissions Services',
      image: '/images/team/matt-hatway.png',
      bio: 'Matt earned his BA from USC and his MBA from UCLA Anderson School of Management. He previously worked as an HR director at a Bay Area nonprofit, where he recruited and interviewed candidates from top universities, and he now brings that hiring perspective to college admissions strategy.',
    },
    {
      name: 'Joseph Ingam, MBA, CFA',
      title: 'Manager of Admissions Consultants',
      image: '/images/team/joseph-ingam.webp',
      bio: 'Joseph has more than fourteen years of success helping applicants earn admission to top colleges, graduate schools, business schools, law schools, medical schools, and residency programs. His background includes admissions and career counseling roles at Chicago Booth, UCLA Anderson, and Saint Louis University School of Medicine, along with extensive interview coaching and resume work.',
    },
    {
      name: 'Pattie Kim',
      title: 'Lead Application Essay Writer',
      image: '/images/team/pattie-kim.webp',
      bio: 'Since 2009, Pattie has helped applicants develop stronger essays for selective college and graduate programs. Before joining SOS Admissions, she worked as a copywriter in Los Angeles and also served in the Claremont McKenna College admissions office.',
    },
    {
      name: 'Peter Glasser',
      title: 'Senior Manager of MBA Admissions Consultants',
      image: '/images/team/peter-glasser.png',
      bio: 'Peter specializes in MBA and business school admissions consulting. He previously served as an alumni interviewer for Harvard admissions and later worked as an executive recruiter, giving him a strong perspective on both academic selection and professional positioning.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Integrity',
      description:
        'Honest, transparent guidance. We never make promises we cannot keep and always put your interests first.',
    },
    {
      icon: Users,
      title: 'Personalized Attention',
      description:
        'Every student is unique. We tailor our approach to your individual goals, strengths, and aspirations.',
    },
    {
      icon: Zap,
      title: 'Transparency',
      description:
        'Open communication every step of the way. You always know what to expect and how we can help.',
    },
    {
      icon: Award,
      title: 'Results',
      description:
        'Our track record speaks for itself: 68% Ivy League placement rate and consistent admission to top programs.',
    },
  ];

  const stats = [
    { number: '27+', label: 'Years of Experience', highlight: true },
    { number: '2,500+', label: 'Successful Students', highlight: false },
    { number: '98%', label: 'Client Satisfaction', highlight: false },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-navy">
            About SOS Admissions
          </h1>
          <p className="text-lg text-slate-600">
            Transforming admissions anxiety into acceptance celebrations for over 27 years.
          </p>
          <div className="mt-8">
            <LegacyYouTubeCard video={DEFAULT_LEGACY_VIDEO} className="mx-auto" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-18 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">Our Story</h2>
          <div className="space-y-5 text-base md:text-lg text-slate-600">
            <p>
              Founded in 1998, SOS Admissions is one of the longest-running and most trusted
              admissions consulting firms in the country. What started as a passion to help
              students navigate one of life's most important decisions has grown into a
              comprehensive service supporting thousands of applicants across all levels of
              education.
            </p>
            <p>
              For nearly three decades, we've built deep relationships with admissions offices
              at the nation's leading universities. Our team draws on insider knowledge from our
              time serving as admissions committee members at top institutions like UCLA and
              the University of Chicago.
            </p>
            <p>
              We understand that each student's journey is unique. Whether you're applying to
              college as a freshman, transferring schools, or pursuing an advanced degree in
              medicine, law, or business, we've been there before and we know the path forward.
            </p>
          </div>
        </div>
      </section>

      <LegacyImageGallery
        title="Legacy About Page Assets"
        images={[LEGACY_IMAGES.cnnAppearance, LEGACY_IMAGES.resumeService]}
      />

      {/* Mission Section */}
      <section className="py-12 md:py-18 px-4 sm:px-6 lg:px-8 bg-warm-gray">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
            <h2 className="text-3xl font-bold mb-6 text-navy">Our Mission</h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed border-l-4 border-gold pl-6">
              To provide personalized, expert guidance that transforms admissions anxiety into
              acceptance celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-18 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-navy">Our Expert Team</h2>
          <div className="bg-gradient-to-br from-navy-light to-blue rounded-lg p-8 sm:p-12 text-white">
            <div className="space-y-4 mb-8">
              <p className="text-base md:text-lg">
                Our consultants are former admissions committee members from UCLA and the
                University of Chicago with deep institutional knowledge and years of practical
                experience.
              </p>
              <p className="text-base md:text-lg">
                Every member of our team graduated from top-30 universities and brings their own
                personal experience with selective admissions to the table. We don't just teach
                the process. We've lived it.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white border-opacity-30">
              <div>
                <div className="text-3xl font-bold text-gold mb-2">50+</div>
                <div className="text-sm opacity-90">Expert Consultants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-2">15+</div>
                <div className="text-sm opacity-90">Program Specialties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-2">100%</div>
                <div className="text-sm opacity-90">Top-30 University Alumni</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-18 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <article key={member.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-2xl bg-white border border-slate-200 flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#E8613C]">
                      {member.title}
                    </p>
                    <p className="mt-3 text-base text-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-18 px-4 sm:px-6 lg:px-8 bg-warm-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center text-navy">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <Icon className="w-8 h-8 text-gold mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                      <p className="text-slate-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-18 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center ${stat.highlight ? 'md:col-span-1 md:transform md:-translate-y-4' : ''}`}
              >
                <div className="text-5xl font-bold text-gold mb-3">{stat.number}</div>
                <p className="text-lg text-cream">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Highlights */}
      <section className="py-12 md:py-18 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-navy">Why Choose SOS Admissions?</h2>
          <div className="space-y-4">
            {[
              'Former admissions committee members with insider knowledge',
              'All consultants graduated from top-30 universities',
              '27+ years of proven track record and success',
              '98% client satisfaction rate',
              '68% Ivy League placement rate',
              'Personalized, one-on-one attention for every student',
              'Comprehensive services across 15+ program types',
              'Transparent pricing with no hidden fees',
              'Available via video, phone, email, and in-person in Beverly Hills',
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-gold mr-4 flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-navy to-navy-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-cream mb-8">
            Let's transform your admissions journey together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-block bg-gold text-navy px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
