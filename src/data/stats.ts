export interface Statistic {
  id: string;
  label: string;
  value: string;
  icon?: string;
  description?: string;
  category?: string;
}

export interface StatSection {
  title: string;
  description?: string;
  stats: Statistic[];
}

export const statistics: Statistic[] = [
  // Company Stats
  {
    id: 'stat-years-in-business',
    label: 'Years in Business',
    value: '27+',
    icon: 'Calendar',
    description: 'Serving students since 1998',
    category: 'company',
  },
  {
    id: 'stat-students-guided',
    label: 'Students Guided',
    value: '2,500+',
    icon: 'Users',
    description: 'Students successfully placed into their target schools',
    category: 'company',
  },
  {
    id: 'stat-consultants',
    label: 'Expert Consultants',
    value: '50+',
    icon: 'Briefcase',
    description: 'Admissions specialists with deep expertise',
    category: 'company',
  },

  // Admissions Stats
  {
    id: 'stat-ivy-league-acceptance',
    label: 'Ivy League Placement Rate',
    value: '68%',
    icon: 'Trophy',
    description: 'Of eligible students placed in Ivy League schools',
    category: 'admissions',
  },
  {
    id: 'stat-top-20-acceptance',
    label: 'Top 20 University Placement',
    value: '82%',
    icon: 'Award',
    description: 'Of college applicants admitted to top 20 universities',
    category: 'admissions',
  },
  {
    id: 'stat-med-school-success',
    label: 'Medical School Success Rate',
    value: '94%',
    icon: 'Stethoscope',
    description: 'Of medical school applicants successfully matched',
    category: 'admissions',
  },
  {
    id: 'stat-mba-top-programs',
    label: 'Top MBA Program Placement',
    value: '91%',
    icon: 'Briefcase',
    description: 'Of MBA applicants admitted to target schools',
    category: 'admissions',
  },
  {
    id: 'stat-law-school-success',
    label: 'Law School Acceptance Rate',
    value: '89%',
    icon: 'Gavel',
    description: 'Of law school applicants successfully placed',
    category: 'admissions',
  },
  {
    id: 'stat-scholarship-amount',
    label: 'Average Scholarship Awarded',
    value: '$142,000',
    icon: 'DollarSign',
    description: 'Per student across all programs',
    category: 'admissions',
  },

  // Service Coverage Stats
  {
    id: 'stat-service-areas',
    label: 'Service Areas',
    value: '15+',
    icon: 'MapPin',
    description: 'Different admissions programs and services',
    category: 'services',
  },
  {
    id: 'stat-schools-network',
    label: 'Top Schools Network',
    value: '500+',
    icon: 'Building2',
    description: 'Relationships with leading universities globally',
    category: 'services',
  },

  // Client Success Stats
  {
    id: 'stat-client-satisfaction',
    label: 'Client Satisfaction',
    value: '98%',
    icon: 'Smile',
    description: 'Of clients rate their experience excellent',
    category: 'success',
  },
  {
    id: 'stat-repeat-clients',
    label: 'Repeat/Referral Clients',
    value: '73%',
    icon: 'Repeat2',
    description: 'From repeat business and referrals',
    category: 'success',
  },
  {
    id: 'stat-avg-improvement',
    label: 'Average Application Strength Improvement',
    value: '+47%',
    icon: 'TrendingUp',
    description: 'In overall application competitiveness',
    category: 'success',
  },
];

// Organized statistics sections
export const statsSection: StatSection[] = [
  {
    title: 'Why Choose SOS Admissions',
    description: '27+ years of proven success transforming lives and opening doors',
    stats: [
      statistics[0], // Years in business
      statistics[1], // Students guided
      statistics[2], // Consultants
    ],
  },
  {
    title: 'Our Success Rates',
    description: 'Industry-leading placement rates across all programs',
    stats: [
      statistics[3], // Ivy League
      statistics[4], // Top 20
      statistics[5], // Med school
      statistics[6], // MBA
      statistics[7], // Law school
      statistics[8], // Scholarship
    ],
  },
  {
    title: 'Client Outcomes',
    description: 'Exceptional results from our comprehensive approach',
    stats: [
      statistics[9], // Client satisfaction
      statistics[10], // Repeat clients
      statistics[11], // Improvement
    ],
  },
];

// Helper function to get stats by category
export function getStatsByCategory(category: string): Statistic[] {
  return statistics.filter((stat) => stat.category === category);
}

// Helper function to get featured stats
export function getFeaturedStats(limit: number = 6): Statistic[] {
  return statistics.slice(0, limit);
}

// Helper function to get a specific stat by ID
export function getStatById(id: string): Statistic | undefined {
  return statistics.find((stat) => stat.id === id);
}

// Helper function to get all company stats
export function getCompanyStats(): Statistic[] {
  return getStatsByCategory('company');
}

// Helper function to get all admissions stats
export function getAdmissionStats(): Statistic[] {
  return getStatsByCategory('admissions');
}

// Helper function to get all success stats
export function getSuccessStats(): Statistic[] {
  return getStatsByCategory('success');
}

// Helper to get stats section by title
export function getStatsSectionByTitle(title: string): StatSection | undefined {
  return statsSection.find((section) => section.title === title);
}

// Helper to get all stats sections
export function getAllStatsSections(): StatSection[] {
  return statsSection;
}

// Helper to get stats count by category
export function getStatCountByCategory(category: string): number {
  return getStatsByCategory(category).length;
}

// Hero section stats (most impactful)
export const heroStats: Statistic[] = [
  statistics[0], // 27+ years
  statistics[1], // 2,500+ students
  statistics[9], // 98% satisfaction
];

// Testimonial section supporting stats
export const testimonialSupportingStats: Statistic[] = [
  statistics[3], // 68% Ivy
  statistics[4], // 82% Top 20
  statistics[5], // 94% Med school
];
