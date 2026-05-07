export interface NavLink {
  label: string;
  href: string;
  icon?: string;
  description?: string;
}

export interface NavSubcategory {
  title: string;
  links: NavLink[];
}

export interface NavMenu {
  label: string;
  href?: string;
  icon?: string;
  subcategories?: NavSubcategory[];
  links?: NavLink[];
}

export interface NavConfig {
  mainMenu: NavMenu[];
  ctaButton: {
    label: string;
    href: string;
    variant: 'primary' | 'secondary';
  };
  secondaryNav?: NavLink[];
  footer?: {
    sections: Array<{
      title: string;
      links: NavLink[];
    }>;
  };
}

export const navigationConfig: NavConfig = {
  mainMenu: [
    {
      label: 'Home',
      href: '/',
      icon: 'Home',
    },
    {
      label: 'Services',
      href: '/services',
      icon: 'Briefcase',
      subcategories: [
        {
          title: 'Undergraduate',
          links: [
            {
              label: 'College Admissions (Freshman)',
              href: '/services/college-admissions-freshman',
              icon: 'GraduationCap',
              description: 'Expert guidance for high school students pursuing top universities',
            },
            {
              label: 'College Admissions (Transfer)',
              href: '/services/college-admissions-transfer',
              icon: 'ArrowRight',
              description: 'Strategic support for community college and transfer students',
            },
            {
              label: 'International Students',
              href: '/services/international-students',
              icon: 'Globe',
              description: 'Specialized support for international student applications',
            },
            {
              label: 'Private School / K-12',
              href: '/services/private-school-k12',
              icon: 'Building2',
              description: 'Expert guidance for selective independent school admissions',
            },
          ],
        },
        {
          title: 'Graduate School',
          links: [
            {
              label: 'Master\'s Programs',
              href: '/services/masters-degree',
              icon: 'BookOpen',
              description: 'Guidance for Master\'s program applications across all disciplines',
            },
            {
              label: 'PhD Programs',
              href: '/services/phd-programs',
              icon: 'Microscope',
              description: 'Expert positioning for doctoral research programs',
            },
          ],
        },
        {
          title: 'Professional Schools',
          links: [
            {
              label: 'MBA Programs',
              href: '/services/mba-programs',
              icon: 'Briefcase',
              description: 'Strategic positioning for top-tier MBA programs',
            },
            {
              label: 'Law School',
              href: '/services/law-school',
              icon: 'Gavel',
              description: 'Expert guidance for law school admissions and scholarship success',
            },
          ],
        },
        {
          title: 'Healthcare Professional',
          links: [
            {
              label: 'Medical School',
              href: '/services/medical-school',
              icon: 'Stethoscope',
              description: 'Comprehensive guidance for MD/DO admissions',
            },
            {
              label: 'Medical Residency',
              href: '/services/medical-residency',
              icon: 'Hospital',
              description: 'Specialized guidance for matching into residency programs',
            },
            {
              label: 'Dental School',
              href: '/services/dental-school',
              icon: 'Smile',
              description: 'Expert guidance for DDS/DMD programs',
            },
            {
              label: 'PA School',
              href: '/services/pa-school',
              icon: 'Users',
              description: 'Comprehensive guidance for PA program applications',
            },
            {
              label: 'Nursing Programs (NP, CRNA)',
              href: '/services/nursing-programs',
              icon: 'Heart',
              description: 'Guidance for RN-to-BSN, MSN, NP, and CRNA programs',
            },
          ],
        },
        {
          title: 'Specialized Support',
          links: [
            {
              label: 'Personal Statement Writing',
              href: '/services/personal-statement-writing',
              icon: 'PenTool',
              description: 'Professional essay coaching and editing',
            },
            {
              label: 'Interview Coaching',
              href: '/services/interview-coaching',
              icon: 'Mic2',
              description: 'One-on-one interview preparation with multiple practice sessions',
            },
            {
              label: 'Letters of Recommendation',
              href: '/services/letters-of-recommendation',
              icon: 'Award',
              description: 'Strategic guidance for recommendation letters',
            },
            {
              label: 'SAT/ACT Prep',
              href: '/services/standardized-test-prep',
              icon: 'Calculator',
              description: 'Comprehensive standardized test preparation',
            },
          ],
        },
      ],
    },
    {
      label: 'About',
      href: '/about-us',
      icon: 'Info',
    },
    {
      label: 'Testimonials',
      href: '/client-testimonials',
      icon: 'MessageSquare',
    },
    {
      label: 'Blog',
      href: '/blog',
      icon: 'FileText',
    },
    {
      label: 'Contact',
      href: '/contact-us',
      icon: 'Mail',
    },
  ],
  ctaButton: {
    label: 'Schedule Consultation',
    href: '/contact-us',
    variant: 'primary',
  },
  secondaryNav: [
    {
      label: 'Privacy Policy',
      href: '/privacy-policy',
    },
    {
      label: 'Terms of Service',
      href: '/terms',
    },
    {
      label: 'FAQ',
      href: '/faq',
    },
  ],
  footer: {
    sections: [
      {
        title: 'Services',
        links: [
          {
            label: 'College Admissions',
            href: '/services/college-admissions-freshman',
          },
          {
            label: 'Graduate School',
            href: '/services/masters-degree',
          },
          {
            label: 'MBA',
            href: '/services/mba-programs',
          },
          {
            label: 'Medical School',
            href: '/services/medical-school',
          },
          {
            label: 'Law School',
            href: '/services/law-school',
          },
        ],
      },
      {
        title: 'More Services',
        links: [
          {
            label: 'Dental School',
            href: '/services/dental-school',
          },
          {
            label: 'PA School',
            href: '/services/pa-school',
          },
          {
            label: 'Nursing Programs',
            href: '/services/nursing-programs',
          },
          {
            label: 'Personal Statement Writing',
            href: '/services/personal-statement-writing',
          },
          {
            label: 'Interview Coaching',
            href: '/services/interview-coaching',
          },
        ],
      },
      {
        title: 'Company',
        links: [
          {
            label: 'About Us',
            href: '/about-us',
          },
          {
            label: 'Testimonials',
            href: '/client-testimonials',
          },
          {
            label: 'Blog',
            href: '/blog',
          },
          {
            label: 'Contact',
            href: '/contact-us',
          },
          {
            label: 'FAQ',
            href: '/faq',
          },
        ],
      },
      {
        title: 'Legal',
        links: [
          {
            label: 'Privacy Policy',
            href: '/privacy-policy',
          },
          {
            label: 'Terms of Service',
            href: '/terms',
          },
          {
            label: 'Cookie Policy',
            href: '/cookies',
          },
        ],
      },
    ],
  },
};

// Helper function to get all service links from navigation
export function getAllServiceLinks(): NavLink[] {
  const serviceMenu = navigationConfig.mainMenu.find((m) => m.label === 'Services');
  if (!serviceMenu || !serviceMenu.subcategories) return [];

  return serviceMenu.subcategories.reduce((acc: NavLink[], category) => {
    return [...acc, ...category.links];
  }, []);
}

// Helper function to get service links by category
export function getServiceLinksByCategory(categoryTitle: string): NavLink[] {
  const serviceMenu = navigationConfig.mainMenu.find((m) => m.label === 'Services');
  if (!serviceMenu || !serviceMenu.subcategories) return [];

  const category = serviceMenu.subcategories.find((c) => c.title === categoryTitle);
  return category?.links || [];
}

// Helper function to get footer links by section
export function getFooterLinksBySection(sectionTitle: string): NavLink[] {
  if (!navigationConfig.footer) return [];
  const section = navigationConfig.footer.sections.find((s) => s.title === sectionTitle);
  return section?.links || [];
}

// Helper function to get all footer links
export function getAllFooterLinks(): NavLink[] {
  if (!navigationConfig.footer) return [];
  return navigationConfig.footer.sections.reduce((acc: NavLink[], section) => {
    return [...acc, ...section.links];
  }, []);
}

// Helper function to check if a path is in the footer
export function isLinkInFooter(href: string): boolean {
  const allFooterLinks = getAllFooterLinks();
  return allFooterLinks.some((link) => link.href === href);
}
