export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  location?: string;
  serviceId: string;
  serviceName: string;
  content: string;
  outcome: string;
  schoolsAdmitted?: string[];
  image?: string;
  rating: number;
  featured: boolean;
  year?: number;
}

export const testimonials: Testimonial[] = [
  // College Admissions Freshman
  {
    id: 'test-001',
    clientName: 'Sarah Chen',
    clientTitle: 'Harvard University, Class of 2028',
    location: 'San Francisco, CA',
    serviceId: 'college-admissions-freshman',
    serviceName: 'College Admissions (Freshman)',
    content:
      'The team at SOS Admissions transformed how I approached my college applications. They didn\'t just help me write better essays. They helped me discover my authentic voice and articulate what truly matters to me. Their strategic guidance on school selection meant I applied to the right fit schools, not just names.',
    outcome: 'Admitted to Harvard, Yale, Stanford, MIT, and 8 other top universities',
    schoolsAdmitted: ['Harvard University', 'Yale University', 'Stanford University', 'MIT'],
    rating: 5,
    featured: true,
    year: 2024,
  },
  {
    id: 'test-002',
    clientName: 'Marcus Johnson',
    clientTitle: 'Princeton University, Class of 2028',
    location: 'Atlanta, GA',
    serviceId: 'college-admissions-freshman',
    serviceName: 'College Admissions (Freshman)',
    content:
      'As the first in my family to apply to selective colleges, I felt completely lost. SOS Admissions was there for every step, explaining the process clearly and building my confidence. Their interview coaching was invaluable. I felt prepared and authentic, not coached.',
    outcome: 'Admitted to Princeton, Penn, Northwestern, and 6 other target schools',
    schoolsAdmitted: ['Princeton University', 'University of Pennsylvania', 'Northwestern University'],
    rating: 5,
    featured: true,
    year: 2023,
  },
  {
    id: 'test-003',
    clientName: 'Jasmine Patel',
    clientTitle: 'Columbia University, Class of 2028',
    location: 'Los Angeles, CA',
    serviceId: 'college-admissions-freshman',
    serviceName: 'College Admissions (Freshman)',
    content:
      'I was a strong student with competitive scores, but I was worried I didn\'t stand out. SOS Admissions helped me understand that my unique perspective and experiences were my strength. Their personalized approach made all the difference.',
    outcome: 'Admitted to Columbia, Duke, Vanderbilt, and UC Berkeley with scholarships',
    schoolsAdmitted: ['Columbia University', 'Duke University', 'Vanderbilt University'],
    rating: 5,
    featured: false,
    year: 2024,
  },
  {
    id: 'test-004',
    clientName: 'David Rodriguez',
    clientTitle: 'Dartmouth College, Class of 2027',
    location: 'Beverly Hills, CA',
    serviceId: 'college-admissions-freshman',
    serviceName: 'College Admissions (Freshman)',
    content:
      'The essays I wrote with SOS Admissions told stories I hadn\'t even realized I wanted to share. The team\'s feedback was always constructive, never prescriptive. They helped me sound like myself, just the best version of myself.',
    outcome: 'Admitted to Dartmouth, Brown, Rice, and 9 other selective universities',
    schoolsAdmitted: ['Dartmouth College', 'Brown University', 'Rice University'],
    rating: 5,
    featured: true,
    year: 2024,
  },

  // College Admissions Transfer
  {
    id: 'test-005',
    clientName: 'Aisha Williams',
    clientTitle: 'Transfer to UC Berkeley from Santa Barbara City College',
    location: 'Santa Barbara, CA',
    serviceId: 'college-admissions-transfer',
    serviceName: 'College Admissions (Transfer)',
    content:
      'My initial college choice wasn\'t right for me, but SOS Admissions helped me reframe my transfer narrative positively. They showed me how to articulate my growth and goals without seeming like I was running away from my first school.',
    outcome: 'Transferred to UC Berkeley with full support for junior year',
    schoolsAdmitted: ['University of California, Berkeley'],
    rating: 5,
    featured: true,
    year: 2023,
  },
  {
    id: 'test-006',
    clientName: 'Kevin Zhang',
    clientTitle: 'Transfer to Northwestern from Cal State LA',
    location: 'Los Angeles, CA',
    serviceId: 'college-admissions-transfer',
    serviceName: 'College Admissions (Transfer)',
    content:
      'Transfer admissions felt like a completely different game. SOS Admissions understood the nuances and helped me build a transfer profile that was competitive while authentic. Great attention to timeline and deadlines.',
    outcome: 'Admitted to Northwestern, USC, and UC San Diego as a transfer student',
    schoolsAdmitted: ['Northwestern University', 'University of Southern California'],
    rating: 5,
    featured: false,
    year: 2023,
  },

  // Masters Degree
  {
    id: 'test-007',
    clientName: 'Elena Rossi',
    clientTitle: 'Stanford MS in Computer Science',
    location: 'San Jose, CA',
    serviceId: 'masters-degree',
    serviceName: 'Master\'s Degree Programs',
    content:
      'I was struggling to articulate my research interests coherently. The team at SOS Admissions helped me develop a clear narrative about where I\'ve been and where I want to go. My statement of purpose became the strongest part of my application.',
    outcome: 'Admitted to Stanford, MIT, Carnegie Mellon, and UC Berkeley MS programs',
    schoolsAdmitted: ['Stanford University', 'MIT', 'Carnegie Mellon University'],
    rating: 5,
    featured: true,
    year: 2024,
  },
  {
    id: 'test-008',
    clientName: 'Priya Menon',
    clientTitle: 'Harvard Kennedy School, Master in Public Administration',
    location: 'New York, NY',
    serviceId: 'masters-degree',
    serviceName: 'Master\'s Degree Programs',
    content:
      'Coming from a nontraditional background, I wasn\'t sure how to position my unique career path. SOS Admissions reframed my diverse experiences as assets. The team\'s guidance on program selection was incredibly helpful.',
    outcome: 'Admitted to Harvard Kennedy School, Princeton School of Public and International Affairs, and Yale Jackson',
    schoolsAdmitted: ['Harvard Kennedy School', 'Princeton', 'Yale'],
    rating: 5,
    featured: true,
    year: 2023,
  },

  // PhD Programs
  {
    id: 'test-009',
    clientName: 'Dr. James Park',
    clientTitle: 'PhD in Physics, MIT',
    location: 'Cambridge, MA',
    serviceId: 'phd-programs',
    serviceName: 'PhD Programs',
    content:
      'The PhD application process requires a different mindset. It\'s about research fit, not just credentials. SOS Admissions helped me identify potential advisors and craft a research statement that resonated. I felt genuinely excited about my application.',
    outcome: 'Admitted to MIT, Caltech, Stanford, and UC Berkeley PhD programs with full funding',
    schoolsAdmitted: ['MIT', 'Caltech', 'Stanford University'],
    rating: 5,
    featured: true,
    year: 2023,
  },
  {
    id: 'test-010',
    clientName: 'Lisa Thompson',
    clientTitle: 'PhD in Molecular Biology, Harvard',
    location: 'Boston, MA',
    serviceId: 'phd-programs',
    serviceName: 'PhD Programs',
    content:
      'I had concerns about my publication record relative to other applicants. The team helped me position my research contributions accurately and identify schools where my interests were truly valued. The result exceeded my expectations.',
    outcome: 'Admitted to Harvard, MIT, Stanford, and Stanford with full fellowship',
    schoolsAdmitted: ['Harvard University', 'MIT', 'Stanford University'],
    rating: 5,
    featured: false,
    year: 2024,
  },

  // MBA Programs
  {
    id: 'test-011',
    clientName: 'Michael Thompson',
    clientTitle: 'Stanford Graduate School of Business, MBA Class of 2026',
    location: 'San Francisco, CA',
    serviceId: 'mba-programs',
    serviceName: 'MBA Programs',
    content:
      'The GMAT was intimidating, but more importantly, I wasn\'t sure how to tell my career story compellingly. SOS Admissions helped me develop a clear narrative about my transition from consulting to entrepreneurship. Their interview coaching was phenomenal.',
    outcome: 'Admitted to Stanford GSB, Harvard Business School, and Wharton with scholarship',
    schoolsAdmitted: ['Stanford Graduate School of Business', 'Harvard Business School', 'Wharton'],
    rating: 5,
    featured: true,
    year: 2023,
  },
  {
    id: 'test-012',
    clientName: 'Victoria Chen',
    clientTitle: 'Harvard Business School, MBA Class of 2026',
    location: 'New York, NY',
    serviceId: 'mba-programs',
    serviceName: 'MBA Programs',
    content:
      'As an international applicant in tech, I worried about standing out. The team at SOS Admissions helped me quantify my impact and articulate my unique value proposition. They guided my GMAT preparation and essay strategy brilliantly.',
    outcome: 'Admitted to HBS, Stanford GSB, and Chicago Booth MBA programs',
    schoolsAdmitted: ['Harvard Business School', 'Stanford Graduate School of Business', 'Chicago Booth'],
    rating: 5,
    featured: true,
    year: 2024,
  },

  // Medical School
  {
    id: 'test-013',
    clientName: 'Dr. Anil Kapoor',
    clientTitle: 'Johns Hopkins School of Medicine, MD Class of 2028',
    location: 'Baltimore, MD',
    serviceId: 'medical-school',
    serviceName: 'Medical School',
    content:
      'Medical school applications are comprehensive and demanding. SOS Admissions coordinated everything: MCAT strategy, clinical experience positioning, secondary essays, interviews. They were my partners throughout the entire journey. I couldn\'t have done it without them.',
    outcome: 'Admitted to Johns Hopkins, Mayo Clinic, Stanford, and UCSF MD programs',
    schoolsAdmitted: ['Johns Hopkins', 'Mayo Clinic', 'Stanford', 'UCSF'],
    rating: 5,
    featured: true,
    year: 2023,
  },
  {
    id: 'test-014',
    clientName: 'Dr. Rachel Okonkwo',
    clientTitle: 'Harvard Medical School, MD Class of 2028',
    location: 'Atlanta, GA',
    serviceId: 'medical-school',
    serviceName: 'Medical School',
    content:
      'The MCAT was brutal, but the team at SOS Admissions provided strategic guidance that helped me approach my studies effectively. More importantly, they helped me communicate my passion for medicine authentically in my essays and interviews.',
    outcome: 'Admitted to Harvard Medical School, Yale School of Medicine, and 6 other top-tier schools',
    schoolsAdmitted: ['Harvard Medical School', 'Yale School of Medicine'],
    rating: 5,
    featured: true,
    year: 2024,
  },
  {
    id: 'test-015',
    clientName: 'Dr. Kenji Tanaka',
    clientTitle: 'Stanford School of Medicine, MD Class of 2027',
    location: 'San Jose, CA',
    serviceId: 'medical-school',
    serviceName: 'Medical School',
    content:
      'I had solid stats but worried I lacked meaningful clinical experience. SOS Admissions helped me position my research and volunteer work strategically and coached me through MMI interviews with precision.',
    outcome: 'Admitted to Stanford, UCSF, and Mayo Clinic School of Medicine',
    schoolsAdmitted: ['Stanford School of Medicine', 'UCSF', 'Mayo Clinic'],
    rating: 5,
    featured: false,
    year: 2023,
  },

  // Medical Residency
  {
    id: 'test-016',
    clientName: 'Dr. Sophia Martinez',
    clientTitle: 'Dermatology Residency, Massachusetts General Hospital',
    location: 'Boston, MA',
    serviceId: 'medical-residency',
    serviceName: 'Medical Residency',
    content:
      'Matching into dermatology is incredibly competitive. SOS Admissions helped me build a compelling research profile and coached me through interviews with specialty-specific insights. Their guidance on program selection was invaluable.',
    outcome: 'Matched into dermatology at Mass General (1st choice program)',
    schoolsAdmitted: ['Massachusetts General Hospital'],
    rating: 5,
    featured: true,
    year: 2023,
  },
  {
    id: 'test-017',
    clientName: 'Dr. Nicholas Patel',
    clientTitle: 'Emergency Medicine Residency, UCLA Medical Center',
    location: 'Los Angeles, CA',
    serviceId: 'medical-residency',
    serviceName: 'Medical Residency',
    content:
      'The Match is stressful and felt out of my control, but SOS Admissions provided strategic guidance on building my CV, crafting my personal statement, and preparing for interviews. I matched at my dream program.',
    outcome: 'Matched into Emergency Medicine at UCLA Medical Center',
    schoolsAdmitted: ['UCLA Medical Center'],
    rating: 5,
    featured: false,
    year: 2024,
  },

  // Law School
  {
    id: 'test-018',
    clientName: 'James Wu',
    clientTitle: 'Harvard Law School, Class of 2027',
    location: 'New York, NY',
    serviceId: 'law-school',
    serviceName: 'Law School',
    content:
      'The LSAT was a mountain to climb, but SOS Admissions provided strategic test prep guidance. More importantly, they helped me craft a personal statement that explained my background and motivations clearly. I was thrilled with my results.',
    outcome: 'Admitted to Harvard Law, Yale Law, Stanford Law, and Columbia Law with scholarships',
    schoolsAdmitted: ['Harvard Law School', 'Yale Law School', 'Stanford Law'],
    rating: 5,
    featured: true,
    year: 2023,
  },
  {
    id: 'test-019',
    clientName: 'Maria Garcia',
    clientTitle: 'Yale Law School, Class of 2027',
    location: 'Phoenix, AZ',
    serviceId: 'law-school',
    serviceName: 'Law School',
    content:
      'As a non-traditional applicant, I wasn\'t sure how to position my career change. SOS Admissions reframed my story positively and helped me articulate my genuine interest in law. Their scholarship negotiation guidance was also excellent.',
    outcome: 'Admitted to Yale Law, Cornell Law, and UCLA Law with merit scholarships',
    schoolsAdmitted: ['Yale Law School', 'Cornell Law School', 'UCLA Law School'],
    rating: 5,
    featured: true,
    year: 2024,
  },

  // Dental School
  {
    id: 'test-020',
    clientName: 'Dr. Amanda Foster',
    clientTitle: 'University of Pennsylvania School of Dental Medicine, DDS Class of 2028',
    location: 'Philadelphia, PA',
    serviceId: 'dental-school',
    serviceName: 'Dental School',
    content:
      'The DAT was challenging, but SOS Admissions gave me a strategic approach that worked. The interview coaching was particularly valuable. I felt prepared without being over-coached. Admitted to my first choice school!',
    outcome: 'Admitted to UPenn Dental, Harvard School of Dental Medicine, and UCSF School of Dentistry',
    schoolsAdmitted: ['University of Pennsylvania', 'Harvard School of Dental Medicine', 'UCSF'],
    rating: 5,
    featured: true,
    year: 2023,
  },
  {
    id: 'test-021',
    clientName: 'Dr. Christopher Lee',
    clientTitle: 'NYU Henry M. Goldman School of Dental Medicine, DDS Class of 2027',
    location: 'New York, NY',
    serviceId: 'dental-school',
    serviceName: 'Dental School',
    content:
      'I was worried about my GPA from earlier in undergrad, but the team at SOS Admissions helped me present the complete picture: my strong DAT score, clinical experience, and clear commitment to dentistry.',
    outcome: 'Admitted to NYU Dental, Boston University Dental, and Columbia Dental programs',
    schoolsAdmitted: ['NYU Henry M. Goldman', 'Boston University', 'Columbia Dental'],
    rating: 5,
    featured: false,
    year: 2024,
  },

  // PA School
  {
    id: 'test-022',
    clientName: 'Jennifer Kumar',
    clientTitle: 'Yale School of Medicine PA Program',
    location: 'New Haven, CT',
    serviceId: 'pa-school',
    serviceName: 'PA School',
    content:
      'I had healthcare experience but wasn\'t sure how to position it compelling. SOS Admissions helped me quantify my impact and tell a cohesive story about my journey to PA. The CASPA optimization was helpful too.',
    outcome: 'Admitted to Yale PA, Duke PA, and UPenn PA programs',
    schoolsAdmitted: ['Yale School of Medicine PA Program', 'Duke PA', 'UPenn PA'],
    rating: 5,
    featured: true,
    year: 2023,
  },
  {
    id: 'test-023',
    clientName: 'Robert Chen',
    clientTitle: 'Mayo Clinic School of Health Sciences PA Program',
    location: 'Rochester, MN',
    serviceId: 'pa-school',
    serviceName: 'PA School',
    content:
      'As someone changing careers into PA, I needed help articulating my motivation. The team\'s interview coaching covered all the tough questions and helped me feel confident and authentic in my responses.',
    outcome: 'Admitted to Mayo Clinic PA, University of Colorado PA, and Wake Forest PA programs',
    schoolsAdmitted: ['Mayo Clinic PA Program', 'University of Colorado PA', 'Wake Forest PA'],
    rating: 5,
    featured: false,
    year: 2024,
  },

  // Nursing Programs
  {
    id: 'test-024',
    clientName: 'Angela Martinez',
    clientTitle: 'Yale School of Nursing, Master\'s in Nursing (NP Track)',
    location: 'New Haven, CT',
    serviceId: 'nursing-programs',
    serviceName: 'Nursing Programs (NP, CRNA, General)',
    content:
      'I was a strong nurse with clinical experience but wasn\'t confident in my application writing. SOS Admissions helped me articulate my goals clearly and position myself as an excellent candidate for graduate nursing study.',
    outcome: 'Admitted to Yale School of Nursing, University of Penn nursing, and NYU nursing programs',
    schoolsAdmitted: ['Yale School of Nursing', 'University of Pennsylvania', 'NYU'],
    rating: 5,
    featured: true,
    year: 2023,
  },
  {
    id: 'test-025',
    clientName: 'Thomas O\'Brien',
    clientTitle: 'Duke University School of Nursing, CRNA Track',
    location: 'Durham, NC',
    serviceId: 'nursing-programs',
    serviceName: 'Nursing Programs (NP, CRNA, General)',
    content:
      'Applying for the CRNA program required demonstrating specific ICU experience. The team helped me showcase my accomplishments and interview preparation was excellent.',
    outcome: 'Admitted to Duke CRNA, Emory CRNA, and University of Michigan CRNA programs',
    schoolsAdmitted: ['Duke University', 'Emory University', 'University of Michigan'],
    rating: 5,
    featured: false,
    year: 2024,
  },

  // Personal Statement Writing
  {
    id: 'test-026',
    clientName: 'Michael Park',
    clientTitle: 'Medical School Applicant',
    location: 'Los Angeles, CA',
    serviceId: 'personal-statement-writing',
    serviceName: 'Personal Statement Writing',
    content:
      'My initial drafts were all over the place and didn\'t capture my voice. SOS Admissions helped me narrow my focus and craft a statement that was genuinely me. The editing process was collaborative and helpful.',
    outcome: 'Personal statement praised in multiple secondary essays and interview feedback',
    rating: 5,
    featured: true,
    year: 2024,
  },
  {
    id: 'test-027',
    clientName: 'Sophie Anderson',
    clientTitle: 'MBA Applicant',
    location: 'San Francisco, CA',
    serviceId: 'personal-statement-writing',
    serviceName: 'Personal Statement Writing',
    content:
      'I was worried my story wasn\'t unique enough. The team helped me find the uniqueness in my journey and articulate it authentically. Their quick turnaround on feedback was appreciated.',
    outcome: 'MBA essays accepted with positive feedback from interview stage',
    rating: 5,
    featured: false,
    year: 2023,
  },

  // Interview Coaching
  {
    id: 'test-028',
    clientName: 'David Ong',
    clientTitle: 'Medical School Interview Coaching',
    location: 'San Diego, CA',
    serviceId: 'interview-coaching',
    serviceName: 'Interview Coaching',
    content:
      'I\'m naturally quiet and worried interviews would hurt my candidacy. The coaches helped me practice extensively with realistic feedback. I went from nervous to confident. The mock interviews were exactly like the real thing.',
    outcome: 'Multiple acceptances including top-tier medical schools',
    rating: 5,
    featured: true,
    year: 2024,
  },
  {
    id: 'test-029',
    clientName: 'Brittany Smith',
    clientTitle: 'MBA Interview Coaching',
    location: 'New York, NY',
    serviceId: 'interview-coaching',
    serviceName: 'Interview Coaching',
    content:
      'The interview coaches gave me direct, actionable feedback. They helped me develop my stories better and practice my delivery. I felt genuinely prepared for my interviews.',
    outcome: 'Multiple MBA admissions',
    rating: 5,
    featured: false,
    year: 2023,
  },

  // Letters of Recommendation
  {
    id: 'test-030',
    clientName: 'Grace Li',
    clientTitle: 'Graduate School Applicant',
    location: 'Berkeley, CA',
    serviceId: 'letters-of-recommendation',
    serviceName: 'Letters of Recommendation Strategy',
    content:
      'I didn\'t know how to approach my professors about recommendations. SOS Admissions gave me a framework and templates that made the conversation much easier. The guidance on what information to provide was really helpful.',
    outcome: 'Strong recommendation letters from all professors',
    rating: 5,
    featured: true,
    year: 2023,
  },

  // SAT/ACT Prep
  {
    id: 'test-031',
    clientName: 'Ethan Wang',
    clientTitle: 'SAT Preparation',
    location: 'Los Angeles, CA',
    serviceId: 'standardized-test-prep',
    serviceName: 'SAT/ACT Prep',
    content:
      'My first SAT score was disappointing, but the team gave me a focused study plan. They identified my specific gaps and helped me address them systematically. My second attempt was significantly better.',
    outcome: '350+ point improvement from first to second sitting',
    rating: 5,
    featured: true,
    year: 2024,
  },
  {
    id: 'test-032',
    clientName: 'Isabella Gonzalez',
    clientTitle: 'ACT Preparation',
    location: 'Phoenix, AZ',
    serviceId: 'standardized-test-prep',
    serviceName: 'SAT/ACT Prep',
    content:
      'I wasn\'t sure if SAT or ACT was right for me. The diagnostic testing and expert guidance helped me choose ACT, which was a better fit. I achieved my target score.',
    outcome: 'ACT score of 35; admitted to top colleges',
    rating: 5,
    featured: false,
    year: 2023,
  },

  // International Students
  {
    id: 'test-033',
    clientName: 'Chen Wei',
    clientTitle: 'International Student - Admitted to MIT',
    location: 'Shanghai, China',
    serviceId: 'international-students',
    serviceName: 'International Students',
    content:
      'Applying from abroad with the TOEFL and navigating financial aid was complex. SOS Admissions guided me through every step clearly. They understood the unique challenges international students face and addressed them proactively.',
    outcome: 'Admitted to MIT, Stanford, and Carnegie Mellon as international student',
    schoolsAdmitted: ['MIT', 'Stanford', 'Carnegie Mellon'],
    rating: 5,
    featured: true,
    year: 2024,
  },
  {
    id: 'test-034',
    clientName: 'Amara Okafor',
    clientTitle: 'International Student - Admitted to Yale',
    location: 'Lagos, Nigeria',
    serviceId: 'international-students',
    serviceName: 'International Students',
    content:
      'Coming from a different education system, I wasn\'t sure how my transcripts would be viewed. The team helped me present my academic credentials clearly while highlighting my unique perspective as a Nigerian student.',
    outcome: 'Admitted to Yale, Columbia, and several excellent universities',
    schoolsAdmitted: ['Yale University', 'Columbia University'],
    rating: 5,
    featured: true,
    year: 2023,
  },

  // Private School K-12
  {
    id: 'test-035',
    clientName: 'Jessica and Tom Harrison',
    clientTitle: 'Parents - Child Admitted to Harvard-Westlake',
    location: 'Los Angeles, CA',
    serviceId: 'private-school-k12',
    serviceName: 'Private School / K-12 Admissions',
    content:
      'We were navigating private school admissions for the first time and felt overwhelmed. SOS Admissions made the process clear and manageable. They coached both our child and us for interviews. Our daughter felt confident and authentic throughout.',
    outcome: 'Admitted to Harvard-Westlake, Brentwood School, and Harvard School',
    schoolsAdmitted: ['Harvard-Westlake', 'Brentwood School', 'Harvard School'],
    rating: 5,
    featured: true,
    year: 2023,
  },
  {
    id: 'test-036',
    clientName: 'Michael Rodriguez',
    clientTitle: 'Parent - Child Admitted to Dalton',
    location: 'New York, NY',
    serviceId: 'private-school-k12',
    serviceName: 'Private School / K-12 Admissions',
    content:
      'The ISEE preparation and school selection strategy was invaluable. Our son felt prepared for both the test and interviews. The team understood the competitive landscape of NYC independent schools.',
    outcome: 'Admitted to Dalton School, Trinity School, and Collegiate School',
    schoolsAdmitted: ['Dalton School', 'Trinity School', 'Collegiate School'],
    rating: 5,
    featured: false,
    year: 2024,
  },
];

// Helper function to get testimonials by service
export function getTestimonialsByService(serviceId: string): Testimonial[] {
  return testimonials.filter((t) => t.serviceId === serviceId);
}

// Helper function to get featured testimonials
export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.featured);
}

// Helper function to get testimonials by rating
export function getTestimonialsByRating(rating: number): Testimonial[] {
  return testimonials.filter((t) => t.rating >= rating);
}

// Helper function to get random testimonials
export function getRandomTestimonials(count: number = 3): Testimonial[] {
  const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Helper function to get testimonials by year
export function getTestimonialsByYear(year: number): Testimonial[] {
  return testimonials.filter((t) => t.year === year);
}
