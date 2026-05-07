export interface PricingItem {
  service: string;
  price: string;
  note?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  category: 'undergraduate' | 'graduate' | 'healthcare' | 'professional' | 'support';
  shortDescription: string;
  longDescription: string;
  icon: string;
  heroStatement: string;
  features: string[];
  pricing?: {
    tiers?: PricingTier[];
    alaCarte?: PricingItem[];
    footnote?: string;
  };
  fieldsServed?: string[];
  metadata?: {
    difficulty: 'beginner' | 'intermediate' | 'advanced' | 'high' | 'very-high';
    avgDuration: string;
    competitionLevel: 'moderate' | 'high' | 'very-high';
  };
}

export const services: Service[] = [
  // Undergraduate Services
  {
    id: 'college-admissions-freshman',
    title: 'College Admissions Consulting',
    slug: 'college-admissions-freshman',
    category: 'undergraduate',
    shortDescription: 'Expert guidance for high school students and transfer students applying to top colleges and universities in the United States and Canada.',
    longDescription: 'Our college admissions consultants have helped thousands of clients get into top colleges and universities in the United States and Canada. We have achieved great success with both freshman applicants and transfer students. We help with school selection, Common App essays, UC essays, activity descriptions, interview preparation, letters of recommendation, and more.',
    icon: 'GraduationCap',
    heroStatement: 'Expert College Admissions Consulting',
    features: [
      'School selection and strategy',
      'Common App and Coalition App essays',
      'School-specific supplemental essays',
      'University of California (UC) essays',
      'Activity descriptions (Common App, UC, Coalition)',
      'Academic resume or CV / college bragg sheet',
      'Interview preparation and coaching',
      'Letters of recommendation',
      'Waitlist appeals and letters of continued interest',
      'Application timeline and strategy',
    ],
    pricing: {
      tiers: [
        {
          name: 'Application Planning',
          price: '$465',
          description: 'Introductory service with expert advice on essays, letters of rec, school selection, resume/CV, and more. Includes two sessions of 45 minutes each with the client and several hours of independent research by our staff.',
          features: [
            'Profile, goals, and strategy assessment',
            'Two 45-minute consultations',
            'Grades, test scores, and candidacy review',
            'Credited toward any package',
          ],
        },
        {
          name: 'Comprehensive Package',
          price: '$5,175',
          description: 'Everything you need for one school, plus $775 for each additional school. Unlimited hours.',
          features: [
            'Everything in Application Planning',
            'Personal statement and all supplements',
            'Activity descriptions',
            'School selection',
            'Interview preparation',
            'Unlimited letters of recommendation',
            'Final application review',
            'Decision and waitlist support',
          ],
          popular: true,
        },
        {
          name: '5-School Package',
          price: '$7,500',
          description: 'Best value for students applying to multiple schools. Unlimited hours.',
          features: [
            'Everything in Comprehensive Package',
            '5 schools included',
            'Additional schools at $775 each',
            'Consistent narrative across all applications',
            'Strategic school list (safety, mid-range, and reach)',
            'Priority scheduling',
          ],
        },
      ],
      alaCarte: [
        { service: 'Application Planning and Evaluation', price: '$465' },
        { service: 'Common App Essay / Coalition App Essay', price: '$985' },
        { service: 'School-Specific Essays (1 school)', price: '$985' },
        { service: 'UC Essays / Long Essay (under 1,500 words)', price: '$1,485' },
        { service: 'Academic Resume or CV / College Bragg Sheet', price: '$975' },
        { service: 'Activity Descriptions (Common App, UC, or Coalition)', price: '$1,175' },
        { service: 'School Selection Service', price: '$1,375' },
        { service: 'Interview Coaching', price: '$1,275' },
        { service: 'Letter of Recommendation', price: '$885/letter' },
        { service: 'Waitlist Appeal Letter or Letter of Continued Interest', price: '$985' },
      ],
      footnote: '50% discount on essay services for each additional school after the first. All a la carte payments credit toward a package.',
    },
  },
  {
    id: 'college-admissions-transfer',
    title: 'College Transfer Admissions Consulting',
    slug: 'college-admissions-transfer',
    category: 'undergraduate',
    shortDescription: 'Expert help for community college and university students transferring to top four-year institutions.',
    longDescription: 'SOS Admissions provides college transfer consulting services for students transferring from community colleges and four-year universities. We help with transfer applications, Common App, UC applications, personal statements, school selection, interview prep, and letters of recommendation. Our consultants have helped thousands of transfer students get into top schools including UCLA, USC, UC Berkeley, and Ivy League institutions.',
    icon: 'ArrowRight',
    heroStatement: 'College Transfer Admissions Consulting',
    features: [
      'Transfer application strategy and timeline',
      'Common App and UC transfer applications',
      'Transfer personal statements and essays',
      'School selection for transfer students',
      'Interview preparation for transfer candidates',
      'Letters of recommendation',
      'Activity descriptions',
      'Academic resume or CV',
      'Waitlist appeals and letters of continued interest',
      'Test prep suggestions (SAT/ACT if needed)',
    ],
    pricing: {
      tiers: [
        {
          name: 'Application Planning',
          price: '$465',
          description: 'Introductory service with expert advice on essays, letters of rec, school selection, resume/CV, and more. Includes two 45-minute sessions and several hours of independent research.',
          features: ['Profile and strategy assessment', 'Two 45-minute consultations', 'Candidacy review', 'Credited toward any package'],
        },
        {
          name: 'Comprehensive Package',
          price: '$5,175',
          description: 'Everything you need for one school, plus $775 for each additional school. Unlimited hours.',
          features: ['Everything in Application Planning', 'Personal statement and all supplements', 'Activity descriptions', 'School selection', 'Interview preparation', 'Unlimited letters of recommendation', 'Final application review', 'Decision and waitlist support'],
          popular: true,
        },
      ],
      alaCarte: [
        { service: 'Application Planning and Evaluation', price: '$465' },
        { service: 'Common App Essay / Coalition App Essay', price: '$985' },
        { service: 'School-Specific Essays (1 school)', price: '$985' },
        { service: 'UC Essays / Long Essay (under 1,500 words)', price: '$1,485' },
        { service: 'Academic Resume or CV', price: '$975' },
        { service: 'Activity Descriptions', price: '$1,175' },
        { service: 'School Selection Service', price: '$1,375' },
        { service: 'Interview Coaching', price: '$1,275' },
        { service: 'Letter of Recommendation', price: '$885/letter' },
        { service: 'Waitlist Appeal Letter', price: '$985' },
      ],
      footnote: '50% discount on essay services for each additional school after the first. All a la carte payments credit toward a package.',
    },
  },

  // Graduate School Services
  {
    id: 'masters-degree',
    title: 'Graduate School Admissions Consulting',
    slug: 'masters-degree',
    category: 'graduate',
    shortDescription: 'Expert guidance for Masters, PhD, and other graduate program applications across all disciplines.',
    longDescription: 'Our graduate school admissions consultants have assisted applicants in a wide range of fields including engineering, education, public health, social work, public policy, international relations, computer science, psychology, communications, journalism, fine arts, architecture, and many more. We help with both Masters and PhD applications, and our services include personal statements, statements of purpose, school selection, interview prep, resume/CV writing, and letters of recommendation.',
    icon: 'BookOpen',
    heroStatement: 'Graduate School Admissions Consulting',
    features: [
      'Statement of purpose and personal statement writing',
      'School/program selection and strategy',
      'Academic resume or CV',
      'Letters of recommendation',
      'Interview coaching',
      'Research proposal development (PhD)',
      'GRE/GMAT preparation guidance',
      'Application timeline and strategy',
      'Activity descriptions',
      'Waitlist appeals',
    ],
    fieldsServed: [
      'Engineering', 'Education', 'Public Health', 'Social Work', 'Public Policy',
      'International Relations', 'Computer Science', 'Psychology', 'Communications',
      'Journalism', 'Fine Arts (MFA)', 'Architecture', 'Data Science', 'Environmental Science',
    ],
    pricing: {
      tiers: [
        {
          name: 'Application Planning',
          price: '$465',
          description: 'Introductory service with expert advice on essays, letters of rec, school selection, resume/CV, and more. Includes two 45-minute sessions and several hours of independent research.',
          features: ['Profile and strategy assessment', 'Two 45-minute consultations', 'Candidacy review', 'Credited toward any package'],
        },
        {
          name: 'Masters Comprehensive Package',
          price: '$5,175',
          description: 'Everything you need for one school, plus $775 for each additional school. Unlimited hours.',
          features: ['Everything in Application Planning', 'Statement of purpose / personal statement', 'School selection', 'Interview preparation', 'Unlimited letters of recommendation', 'Resume/CV writing', 'Final application review'],
          popular: true,
        },
        {
          name: 'Doctorate Comprehensive Package',
          price: '$5,675',
          description: 'For PhD, PsyD, EdD, and other doctoral programs. One school, plus $775 for each additional school. Unlimited hours.',
          features: ['Everything in Masters package', 'Research proposal development', 'Faculty mentor identification', 'Advanced interview preparation'],
        },
      ],
      alaCarte: [
        { service: 'Application Planning and Evaluation', price: '$465' },
        { service: 'Personal Statement / Statement of Purpose', price: '$985' },
        { service: 'Long Essay (under 1,500 words)', price: '$1,485' },
        { service: 'Academic Resume or CV', price: '$975' },
        { service: 'School/Program Selection Service', price: '$1,375' },
        { service: 'Interview Coaching', price: '$1,275' },
        { service: 'Letter of Recommendation', price: '$885/letter' },
        { service: 'Waitlist Appeal Letter', price: '$985' },
      ],
      footnote: '50% discount on essay services for each additional school. All a la carte payments credit toward a package.',
    },
  },
  {
    id: 'phd-programs',
    title: 'PhD Program Admissions Consulting',
    slug: 'phd-programs',
    category: 'graduate',
    shortDescription: 'Expert guidance for doctoral program applications including PhD, PsyD, and EdD programs.',
    longDescription: 'Our doctoral admissions consultants help you apply to PhD, PsyD, EdD, and other research-focused programs. We assist with statements of purpose, research proposals, faculty identification, school selection, interview preparation, and letters of recommendation. Doctorate packages start at $5,675 for the first school plus $775 for each additional school.',
    icon: 'Microscope',
    heroStatement: 'PhD Program Admissions Consulting',
    features: [
      'Statement of purpose and research statement',
      'Faculty mentor identification strategy',
      'Research proposal development',
      'School/program selection and strategy',
      'Academic resume or CV',
      'Letters of recommendation',
      'Interview coaching',
      'Writing sample review',
      'Application timeline and strategy',
      'Waitlist appeals',
    ],
    pricing: {
      tiers: [
        {
          name: 'Application Planning',
          price: '$465',
          description: 'Introductory service. Two 45-minute sessions and several hours of independent research.',
          features: ['Profile and strategy assessment', 'Two 45-minute consultations', 'Candidacy review', 'Credited toward any package'],
        },
        {
          name: 'Doctorate Comprehensive Package',
          price: '$5,675',
          description: 'Everything you need for one school, plus $775 for each additional school. Unlimited hours.',
          features: ['Everything in Application Planning', 'Statement of purpose', 'Research proposal', 'School selection', 'Interview preparation', 'Unlimited letters of recommendation', 'Resume/CV writing', 'Final application review'],
          popular: true,
        },
      ],
      alaCarte: [
        { service: 'Application Planning and Evaluation', price: '$465' },
        { service: 'Statement of Purpose', price: '$985' },
        { service: 'Long Statement (under 1,500 words)', price: '$1,485' },
        { service: 'Academic Resume or CV', price: '$975' },
        { service: 'School/Program Selection', price: '$1,375' },
        { service: 'Interview Coaching', price: '$1,275' },
        { service: 'Letter of Recommendation', price: '$885/letter' },
        { service: 'Waitlist Appeal Letter', price: '$985' },
      ],
      footnote: 'All a la carte payments credit toward a package.',
    },
  },

  // Professional School Services
  {
    id: 'mba-programs',
    title: 'MBA Admissions Consulting',
    slug: 'mba-programs',
    category: 'professional',
    shortDescription: 'Expert guidance for MBA applications to top business schools.',
    longDescription: 'Our MBA admissions consultants help you put together a strong application for top business school programs. We assist with essays, resume/CV writing, school selection, interview preparation, and letters of recommendation. Our consultants include former admissions officers from UCLA Anderson, Chicago Booth, and other top business schools.',
    icon: 'Briefcase',
    heroStatement: 'MBA Admissions Consulting',
    features: [
      'MBA application essays',
      'School selection and strategy',
      'Academic resume or CV',
      'Letters of recommendation',
      'Interview preparation',
      'GMAT/GRE preparation guidance',
      'Application timeline and strategy',
      'Career narrative development',
      'Waitlist appeals',
    ],
    pricing: {
      tiers: [
        {
          name: 'Application Planning',
          price: '$465',
          description: 'Introductory service. Two 45-minute sessions and several hours of independent research.',
          features: ['Profile and strategy assessment', 'Two 45-minute consultations', 'Candidacy review', 'Credited toward any package'],
        },
        {
          name: 'Comprehensive Package',
          price: '$5,175',
          description: 'Everything you need for one school, plus $775 for each additional school. Unlimited hours.',
          features: ['Everything in Application Planning', 'All application essays', 'School selection', 'Interview preparation', 'Unlimited letters of recommendation', 'Resume/CV writing', 'Final application review'],
          popular: true,
        },
        {
          name: '5-School Package',
          price: '$7,500',
          description: 'Best value for applying to multiple schools. Unlimited hours.',
          features: ['Everything in Comprehensive Package', '5 schools included', 'Additional schools at $775 each', 'Consistent narrative across applications'],
        },
      ],
      alaCarte: [
        { service: 'Application Planning and Evaluation', price: '$465' },
        { service: 'MBA Essay (under 900 words)', price: '$985' },
        { service: 'Long Essay (under 1,500 words)', price: '$1,485' },
        { service: 'Academic Resume or CV', price: '$975' },
        { service: 'School Selection Service', price: '$1,375' },
        { service: 'Interview Coaching', price: '$1,275' },
        { service: 'Letter of Recommendation', price: '$885/letter' },
        { service: 'Waitlist Appeal Letter', price: '$985' },
      ],
      footnote: '50% discount on essay services for each additional school. All a la carte payments credit toward a package.',
    },
  },
  {
    id: 'medical-school',
    title: 'Medical School Admissions Consulting',
    slug: 'medical-school',
    category: 'healthcare',
    shortDescription: 'Expert guidance for MD and DO program applications including AMCAS, AACOMAS, and TMDSAS.',
    longDescription: 'Our medical school admissions consultants help pre-med students apply to MD and DO programs. We assist with personal statements, secondary essays, AMCAS/AACOMAS/TMDSAS applications, school selection, interview prep (both traditional and MMI), activity descriptions, and letters of recommendation. We also help with reapplication strategy for students who were not accepted in previous cycles.',
    icon: 'Stethoscope',
    heroStatement: 'Medical School Admissions Consulting',
    features: [
      'AMCAS, AACOMAS, and TMDSAS applications',
      'Medical school personal statement',
      'Secondary application essays (all schools)',
      'School selection and strategy',
      'Interview preparation (traditional and MMI)',
      'Activity descriptions and work/experiences entries',
      'Letters of recommendation',
      'Academic resume or CV',
      'Clinical experience and research positioning',
      'Reapplication strategy and consulting',
    ],
    pricing: {
      tiers: [
        {
          name: 'Application Planning',
          price: '$465',
          description: 'Introductory service. Two 45-minute sessions and several hours of independent research.',
          features: ['Profile and strategy assessment', 'Two 45-minute consultations', 'Candidacy review', 'Credited toward any package'],
        },
        {
          name: 'Comprehensive Package',
          price: '$5,675',
          description: 'Everything you need for one school, plus $775 for each additional school. Unlimited hours.',
          features: ['Everything in Application Planning', 'Personal statement', 'All secondary essays', 'School selection', 'Interview preparation (traditional and MMI)', 'Unlimited letters of recommendation', 'Resume/CV writing', 'Activity descriptions'],
          popular: true,
        },
        {
          name: '5-School Package',
          price: '$8,000',
          description: 'For students applying to multiple medical schools. Unlimited hours.',
          features: ['Everything in Comprehensive Package', '5 schools included', 'Additional schools at $775 each'],
        },
      ],
      alaCarte: [
        { service: 'Application Planning and Evaluation', price: '$465' },
        { service: 'Medical School Personal Statement', price: '$885' },
        { service: 'Activities Section', price: '$785' },
        { service: 'Secondary Essays (1 school)', price: '$985' },
        { service: 'Academic Resume or CV', price: '$975' },
        { service: 'School Selection Service', price: '$1,375' },
        { service: 'Interview Coaching (Traditional)', price: '$1,275' },
        { service: 'Interview Coaching (MMI)', price: '$1,675' },
        { service: 'Letter of Recommendation', price: '$885/letter' },
        { service: 'Waitlist Appeal Letter', price: '$985' },
      ],
      footnote: 'All a la carte payments credit toward a package.',
    },
  },
  {
    id: 'dental-school',
    title: 'Dental School Admissions Consulting',
    slug: 'dental-school',
    category: 'healthcare',
    shortDescription: 'Expert guidance for DDS and DMD program applications including AADSAS.',
    longDescription: 'Our dental school admissions consultants help pre-dental students apply to DDS and DMD programs. We assist with AADSAS applications, personal statements, school selection, interview preparation (including MMI), and letters of recommendation.',
    icon: 'Smile',
    heroStatement: 'Dental School Admissions Consulting',
    features: [
      'AADSAS application assistance',
      'Dental school personal statement',
      'Supplemental application essays',
      'School selection and strategy',
      'Interview preparation (traditional, panel, and MMI)',
      'Letters of recommendation',
      'Academic resume or CV',
      'Clinical experience positioning',
      'Application timeline and strategy',
      'Waitlist appeals',
    ],
    pricing: {
      tiers: [
        {
          name: 'Application Planning',
          price: '$465',
          description: 'Introductory service. Two 45-minute sessions and several hours of independent research.',
          features: ['Profile and strategy assessment', 'Two 45-minute consultations', 'Candidacy review', 'Credited toward any package'],
        },
        {
          name: 'Comprehensive Package',
          price: '$5,675',
          description: 'Everything you need for one school, plus $775 for each additional school. Unlimited hours.',
          features: ['Everything in Application Planning', 'Personal statement', 'All supplemental essays', 'School selection', 'Interview preparation (including MMI)', 'Unlimited letters of recommendation', 'Resume/CV writing'],
          popular: true,
        },
      ],
      alaCarte: [
        { service: 'Application Planning and Evaluation', price: '$465' },
        { service: 'Personal Statement', price: '$985' },
        { service: 'Supplemental Essays (1 school)', price: '$985' },
        { service: 'Academic Resume or CV', price: '$975' },
        { service: 'School Selection Service', price: '$1,375' },
        { service: 'Interview Coaching (Traditional)', price: '$1,275' },
        { service: 'Interview Coaching (MMI)', price: '$1,675' },
        { service: 'Letter of Recommendation', price: '$885/letter' },
        { service: 'Waitlist Appeal Letter', price: '$985' },
      ],
      footnote: 'All a la carte payments credit toward a package.',
    },
  },
  {
    id: 'law-school',
    title: 'Law School Admissions Consulting',
    slug: 'law-school',
    category: 'professional',
    shortDescription: 'Expert guidance for law school applications including LSAC, personal statements, and interview prep.',
    longDescription: 'Our law school admissions consultants help you apply to top law schools. We assist with LSAC applications, personal statements, diversity statements, "why X school" essays, school selection, interview prep, resume/CV writing, and letters of recommendation.',
    icon: 'Gavel',
    heroStatement: 'Law School Admissions Consulting',
    features: [
      'LSAC application assistance',
      'Law school personal statement',
      'Diversity statements and optional essays',
      'School selection and strategy',
      'Interview preparation',
      'Letters of recommendation',
      'Academic resume or CV',
      'Character and fitness addendum writing',
      'Waitlist appeals',
      'LSAT prep referral (Premier LSAT Prep partner)',
    ],
    pricing: {
      tiers: [
        {
          name: 'Application Planning',
          price: '$465',
          description: 'Introductory service. Two 45-minute sessions and several hours of independent research.',
          features: ['Profile and strategy assessment', 'Two 45-minute consultations', 'Candidacy review', 'Credited toward any package'],
        },
        {
          name: 'Comprehensive Package',
          price: '$5,175',
          description: 'Everything you need for one school, plus $775 for each additional school. Unlimited hours.',
          features: ['Everything in Application Planning', 'Personal statement', 'All supplemental essays', 'School selection', 'Interview preparation', 'Unlimited letters of recommendation', 'Resume/CV writing', 'Character and fitness statements'],
          popular: true,
        },
      ],
      alaCarte: [
        { service: 'Application Planning and Evaluation', price: '$465' },
        { service: 'Personal Statement', price: '$985' },
        { service: 'Diversity Statement / Optional Essay', price: '$985' },
        { service: 'Academic Resume or CV', price: '$975' },
        { service: 'School Selection Service', price: '$1,375' },
        { service: 'Interview Coaching', price: '$1,275' },
        { service: 'Letter of Recommendation', price: '$885/letter' },
        { service: 'Character and Fitness Statement', price: '$985' },
        { service: 'Waitlist Appeal Letter', price: '$985' },
      ],
      footnote: 'All a la carte payments credit toward a package.',
    },
  },

  // Healthcare Advanced Services
  {
    id: 'medical-residency',
    title: 'Medical Residency Admissions Consulting',
    slug: 'medical-residency',
    category: 'healthcare',
    shortDescription: 'Expert help with residency and fellowship applications, personal statements, and interview preparation.',
    longDescription: 'Our medical residency admissions consultants help medical students and graduates apply to residency and fellowship programs. We assist with ERAS applications, personal statements, program selection, interview preparation, letters of recommendation, and CV writing. We support both US medical graduates and international medical graduates (IMGs).',
    icon: 'Hospital',
    heroStatement: 'Medical Residency and Fellowship Admissions Consulting',
    features: [
      'ERAS application assistance',
      'Residency personal statement',
      'Program selection and strategy',
      'Interview preparation',
      'Letters of recommendation',
      'Curriculum vitae (CV) writing',
      'MSPE/Dean\'s letter review',
      'Supplemental application materials',
      'Fellowship application support',
      'Reapplication and SOAP/scramble guidance',
    ],
    pricing: {
      tiers: [
        {
          name: 'Application Planning',
          price: '$465',
          description: 'Introductory service. Two 45-minute sessions and several hours of independent research.',
          features: ['Profile and strategy assessment', 'Two 45-minute consultations', 'Candidacy review', 'Credited toward any package'],
        },
        {
          name: 'Complete Residency Package',
          price: '$5,675',
          description: 'Everything you need for your residency applications. If applying to more than one specialty (e.g. Internal Medicine and Pediatrics), there is an additional $1,785 fee per additional specialty. Unlimited hours.',
          features: ['Everything in Application Planning', 'Personal statement', 'Program selection', 'Interview preparation', 'Unlimited letters of recommendation', 'CV writing', 'Activity descriptions', 'SOAP/scramble guidance if needed'],
          popular: true,
        },
      ],
      alaCarte: [
        { service: 'Application Planning and Evaluation', price: '$465' },
        { service: 'Residency Personal Statement', price: '$985' },
        { service: 'Program Selection Service', price: '$1,575' },
        { service: 'Interview Coaching', price: '$1,275' },
        { service: 'Curriculum Vitae (CV)', price: '$975' },
        { service: 'Letter of Recommendation', price: '$885/letter' },
        { service: 'Scramble/SOAP Guidance', price: '$465' },
      ],
      footnote: 'Additional specialty fee of $1,785 if applying to more than one type of residency program.',
    },
  },
  {
    id: 'nursing-programs',
    title: 'Nursing School Admissions Consulting',
    slug: 'nursing-programs',
    category: 'healthcare',
    shortDescription: 'Guidance for BSN, MSN, NP, CRNA, and DNP program applications.',
    longDescription: 'Our nursing admissions consultants provide one-on-one guidance for BSN, MSN, Accelerated BSN, Direct-Entry MSN, NP, CRNA, DNP, and other nursing program applications. We help with personal statements, school selection, interview preparation, clinical experience positioning, and letters of recommendation.',
    icon: 'Heart',
    heroStatement: 'Nursing School Admissions Consulting',
    features: [
      'Personal statement writing',
      'School/program selection and strategy',
      'NursingCAS application assistance',
      'Interview preparation (traditional and MMI)',
      'Letters of recommendation',
      'Academic resume or CV',
      'Clinical experience positioning',
      'Application timeline and strategy',
    ],
    pricing: {
      tiers: [
        {
          name: 'Application Planning',
          price: '$465',
          description: 'Introductory service. Two 45-minute sessions and several hours of independent research.',
          features: ['Profile and strategy assessment', 'Two 45-minute consultations', 'Candidacy review', 'Credited toward any package'],
        },
        {
          name: 'Comprehensive Package',
          price: '$5,175',
          description: 'Everything you need for one school, plus $775 for each additional school. Unlimited hours.',
          features: ['Everything in Application Planning', 'Personal statement', 'School selection', 'Interview preparation', 'Unlimited letters of recommendation', 'Resume/CV writing'],
          popular: true,
        },
      ],
      alaCarte: [
        { service: 'Application Planning and Evaluation', price: '$465' },
        { service: 'Personal Statement', price: '$985' },
        { service: 'Academic Resume or CV', price: '$975' },
        { service: 'School Selection Service', price: '$1,375' },
        { service: 'Interview Coaching', price: '$1,275' },
        { service: 'Interview Coaching (MMI)', price: '$1,675' },
        { service: 'Letter of Recommendation', price: '$885/letter' },
      ],
      footnote: 'All a la carte payments credit toward a package.',
    },
  },
  {
    id: 'pa-school',
    title: 'PA School Admissions Consulting',
    slug: 'pa-school',
    category: 'healthcare',
    shortDescription: 'Expert guidance for Physician Assistant program applications including CASPA.',
    longDescription: 'Our PA school admissions consultants provide one-on-one guidance for every stage of the PA school application process. We help with CASPA applications, personal statements, school selection, interview preparation (traditional and MMI), and letters of recommendation.',
    icon: 'Users',
    heroStatement: 'PA School Admissions Consulting',
    features: [
      'CASPA application assistance',
      'PA school personal statement',
      'School selection and strategy',
      'Interview preparation (traditional and MMI)',
      'Letters of recommendation',
      'Healthcare experience positioning',
      'Academic resume or CV',
      'Application timeline and strategy',
    ],
    pricing: {
      tiers: [
        {
          name: 'Application Planning',
          price: '$465',
          description: 'Introductory service. Two 45-minute sessions and several hours of independent research.',
          features: ['Profile and strategy assessment', 'Two 45-minute consultations', 'Candidacy review', 'Credited toward any package'],
        },
        {
          name: 'Comprehensive Package',
          price: '$5,175',
          description: 'Everything you need for one school, plus $775 for each additional school. Unlimited hours.',
          features: ['Everything in Application Planning', 'Personal statement', 'School selection', 'Interview preparation', 'Unlimited letters of recommendation', 'Resume/CV writing'],
          popular: true,
        },
      ],
      alaCarte: [
        { service: 'Application Planning and Evaluation', price: '$465' },
        { service: 'Personal Statement', price: '$985' },
        { service: 'Academic Resume or CV', price: '$975' },
        { service: 'School Selection Service', price: '$1,375' },
        { service: 'Interview Coaching', price: '$1,275' },
        { service: 'Interview Coaching (MMI)', price: '$1,675' },
        { service: 'Letter of Recommendation', price: '$885/letter' },
      ],
      footnote: 'All a la carte payments credit toward a package.',
    },
  },

  // Support Services
  {
    id: 'personal-statement-writing',
    title: 'Personal Statement Writing Services',
    slug: 'personal-statement-writing',
    category: 'support',
    shortDescription: 'Professional essay writing and editing for college, graduate, medical, law, MBA, and other program applications.',
    longDescription: 'Unlike other companies that just give generic advice, we actually help write your entire application essay or personal statement from scratch, or edit your existing documents line by line. We are not just personal statement writers. We are experts in the application process who know what the admissions committees are looking for. We write essays that are 100% customized for you and your academic and professional background. There is no limit on the number of edits.',
    icon: 'PenTool',
    heroStatement: 'Expert Personal Statement and Essay Writing',
    features: [
      'Personal statements written from scratch or edited line by line',
      'Common App essays and supplemental essays',
      'UC application essays',
      'Graduate school statements of purpose',
      'Medical school personal statements',
      'Law school personal statements',
      'MBA application essays',
      'Residency personal statements',
      'No limit on the number of edits',
      'Rush service available at no extra charge',
    ],
    pricing: {
      alaCarte: [
        { service: 'Personal Statement / Essay (under 900 words)', price: '$985' },
        { service: 'Long Personal Statement (under 1,500 words)', price: '$1,485' },
        { service: 'Short Essay (under 300 words)', price: '$785' },
        { service: 'Medical School Personal Statement', price: '$885' },
        { service: 'Additional School (same essay, modified)', price: '50% of original price' },
        { service: 'Waitlist Appeal Letter', price: '$985' },
      ],
      footnote: 'Editing an existing essay is the same price as writing one from scratch. All payments credit toward a package if you upgrade later.',
    },
  },
  {
    id: 'interview-coaching',
    title: 'Admissions Interview Coaching',
    slug: 'interview-coaching',
    category: 'support',
    shortDescription: 'One-on-one interview coaching with a 2-hour coaching session and 1-hour follow-up mock interview.',
    longDescription: 'We have extensive experience helping clients with admissions interviews for college, graduate school, medical school, law school, MBA programs, and residency programs. The process includes sending us your complete application, resume, and transcript. We send you a list of the most common interview questions. Then we conduct a 2-hour coaching session where we show you how to summarize your qualifications effectively, show your passion for your work, and present your accomplishments. We follow up with a 1-hour mock interview to make sure you are prepared.',
    icon: 'Mic2',
    heroStatement: 'Admissions Interview Preparation and Coaching',
    features: [
      '2-hour interview coaching session',
      '1-hour follow-up mock interview',
      'Traditional interview preparation',
      'MMI (Multiple Mini Interview) preparation',
      'Application and resume review before coaching',
      'Common interview questions and strategies',
      'College, grad school, medical, law, MBA, and residency interviews',
      'Sessions via Zoom, FaceTime, or in person',
    ],
    pricing: {
      alaCarte: [
        { service: 'Interview Coaching (College, Grad, Law, MBA)', price: '$1,275' },
        { service: 'Interview Coaching (Medical School, Traditional)', price: '$1,275' },
        { service: 'Interview Coaching (Medical School, MMI)', price: '$1,675' },
        { service: 'Interview Coaching (Residency)', price: '$1,275' },
      ],
      footnote: 'Interview coaching includes a 2-hour coaching session and a 1-hour follow-up mock interview. Included at no extra cost in all packages.',
    },
  },
  {
    id: 'letters-of-recommendation',
    title: 'Letters of Recommendation Services',
    slug: 'letters-of-recommendation',
    category: 'support',
    shortDescription: 'We write letters of recommendation for your recommenders. Teachers generally write their own, but supervisors, coaches, and community leaders are grateful for our help.',
    longDescription: 'Letters of recommendation are critical for your application, but the truth is most references do not have the time or writing skills to write a great letter. We write the letter of recommendation for the recommender. All the recommender has to do is sign off on and submit the letter we write. Teachers generally want to write their own letters. However, supervisors, coaches, and leaders of community service groups are generally grateful for our help. This service meets all academic and professional honesty standards since the recommender signs off on the letter.',
    icon: 'Award',
    heroStatement: 'Letters of Recommendation Services',
    features: [
      'Full letter of recommendation drafting',
      'Bullet points for teachers/professors to incorporate',
      'Recommender selection strategy',
      'Coaching recommenders on what to include',
      'Harvard Business School format for residency letters',
      'Unlimited letters included in all packages',
      'Meets all academic and professional honesty standards',
    ],
    pricing: {
      alaCarte: [
        { service: 'Letter of Recommendation (full draft)', price: '$885' },
        { service: 'Bullet Points for Recommender', price: '$885' },
      ],
      footnote: 'Unlimited letters of recommendation included in all packages at no extra cost.',
    },
  },
  {
    id: 'standardized-test-prep',
    title: 'SAT and ACT Test Preparation',
    slug: 'standardized-test-prep',
    category: 'support',
    shortDescription: 'One-on-one personalized SAT and ACT tutoring with experienced instructors who scored in the top 2 percentile.',
    longDescription: 'Our experienced SAT and ACT teachers help you prepare for the test with one-on-one, personalized tutoring. We recognize that each student has different goals and different styles of learning. We customize our lesson plans and curriculum specifically for each student. All of our tutors have at least five years of teaching experience and have themselves scored in the top two percentile on the test.',
    icon: 'Calculator',
    heroStatement: 'SAT and ACT Test Preparation',
    features: [
      'One-on-one personalized tutoring',
      'Customized lesson plans for each student',
      'All tutors scored in the top 2 percentile',
      'At least 5 years teaching experience per tutor',
      'Diagnostic testing and skill assessment',
      'Practice tests and detailed reviews',
      'Time management and test strategies',
      'Available hourly or as a 30-hour package',
    ],
    pricing: {
      alaCarte: [
        { service: 'Hourly Tutoring', price: '$125/hour' },
        { service: '30-Hour Complete Test Prep Package', price: '$3,050' },
      ],
      footnote: 'We recommend the 30-hour package as our experience shows this is the amount of time needed to cover all important topics on the test.',
    },
  },

  // Special Focus Services
  {
    id: 'international-students',
    title: 'International Student Admissions Consulting',
    slug: 'international-students',
    category: 'undergraduate',
    shortDescription: 'Expert help for international students applying to colleges and universities in the United States and Canada.',
    longDescription: 'We have served students from over 80 countries. Our consultants understand the unique challenges international applicants face, from demonstrating English proficiency to navigating application differences. We offer communication via WhatsApp, Zoom, FaceTime, and Google Chat for international families across all time zones.',
    icon: 'Globe',
    heroStatement: 'Admissions Consulting for International Students',
    features: [
      'Application strategy for international applicants',
      'English proficiency guidance (TOEFL/IELTS)',
      'Personal statement and essay writing',
      'School selection for international students',
      'Interview preparation',
      'Letters of recommendation',
      'Financial aid strategy for international students',
      'Communication via WhatsApp, Zoom, FaceTime, Google Chat',
    ],
    pricing: {
      tiers: [
        {
          name: 'Application Planning',
          price: '$465',
          description: 'Introductory service. Two 45-minute sessions and several hours of independent research.',
          features: ['Profile and strategy assessment', 'Two 45-minute consultations', 'Candidacy review', 'Credited toward any package'],
        },
        {
          name: 'Comprehensive Package',
          price: '$5,175',
          description: 'Everything you need for one school, plus $775 for each additional school. Unlimited hours.',
          features: ['Everything in Application Planning', 'Personal statement and all supplements', 'School selection', 'Interview preparation', 'Unlimited letters of recommendation', 'Resume/CV writing'],
          popular: true,
        },
      ],
      alaCarte: [
        { service: 'Application Planning and Evaluation', price: '$465' },
        { service: 'Personal Statement / Essay', price: '$985' },
        { service: 'School Selection Service', price: '$1,375' },
        { service: 'Interview Coaching', price: '$1,275' },
        { service: 'Letter of Recommendation', price: '$885/letter' },
      ],
      footnote: 'All a la carte payments credit toward a package. Contact us via FaceTime, Google Chat, Zoom, or Skype from anywhere in the world.',
    },
  },
  {
    id: 'private-school-k12',
    title: 'Private School Admissions Consulting',
    slug: 'private-school-k12',
    category: 'undergraduate',
    shortDescription: 'Expert guidance for K-12 private, independent, and boarding school applications.',
    longDescription: 'Our private school admissions consultants help families apply to private, independent, and selective K-12 schools. We assist with application essays, parent statements, interview preparation, school selection, and letters of recommendation.',
    icon: 'Building2',
    heroStatement: 'Private School Admissions Consulting',
    features: [
      'School selection and strategy',
      'Application essay writing for students',
      'Parent statement and supplemental materials',
      'Interview preparation for students',
      'Parent interview guidance',
      'Letters of recommendation',
      'Assessment prep guidance (SSAT, ISEE)',
      'Application timeline and strategy',
    ],
    pricing: {
      tiers: [
        {
          name: 'Application Planning',
          price: '$465',
          description: 'Introductory service. Two 45-minute sessions and several hours of independent research.',
          features: ['Profile and strategy assessment', 'Two 45-minute consultations', 'School research', 'Credited toward any package'],
        },
        {
          name: 'Complete Application Package',
          price: '$5,675',
          description: 'Everything you need for one school, plus $875 for each additional school. Unlimited hours.',
          features: ['Everything in Application Planning', 'Student essays', 'Parent statements', 'School selection', 'Student and parent interview preparation', 'Letters of recommendation'],
          popular: true,
        },
      ],
      alaCarte: [
        { service: 'Application Planning and Evaluation', price: '$465' },
        { service: 'Application Essay', price: '$985' },
        { service: 'Long Essay (under 1,500 words)', price: '$1,485' },
        { service: 'Interview Coaching', price: '$1,275' },
        { service: 'Letter of Recommendation', price: '$885/letter' },
      ],
      footnote: 'All a la carte payments credit toward a package.',
    },
  },
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

// Helper function to get services by category
export function getServicesByCategory(category: Service['category']): Service[] {
  return services.filter((service) => service.category === category);
}

// Helper function to get all service categories with their services
export function getServicesByCategories() {
  return {
    undergraduate: getServicesByCategory('undergraduate'),
    graduate: getServicesByCategory('graduate'),
    healthcare: getServicesByCategory('healthcare'),
    professional: getServicesByCategory('professional'),
    support: getServicesByCategory('support'),
  };
}
