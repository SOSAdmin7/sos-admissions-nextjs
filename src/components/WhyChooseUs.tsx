import { CheckCircle, Award, Users, Target } from 'lucide-react';

const differentiators = [
  {
    icon: CheckCircle,
    title: '27+ Years of Experience',
    description:
      'Established in 1998, we are one of the longest-running independent admissions consulting firms in the country.',
  },
  {
    icon: Users,
    title: 'Former Admissions Committee Members',
    description:
      'Our consultants have served on admissions committees at UCLA and UChicago, giving us insider knowledge of what universities seek.',
  },
  {
    icon: Award,
    title: 'Top 30 University Graduates',
    description:
      'Every member of our team graduated from a top-30 university, ensuring deep understanding of selective admissions.',
  },
  {
    icon: Target,
    title: 'Personalized One-on-One Approach',
    description:
      'We reject cookie-cutter advice. Each student receives a tailored strategy based on their unique strengths and goals.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-[fadeInUp_0.6s_ease-out_both]">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B2B4B] mb-4">
            Why Families Trust SOS Admissions
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We combine decades of experience with genuine care for each student&apos;s success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex gap-5 p-6 md:p-8 bg-[#F8F9FA] rounded-xl border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-[fadeInUp_0.5s_ease-out_both]"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#FFF0EC] text-[#E8613C]">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B2B4B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
