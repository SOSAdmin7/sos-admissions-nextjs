'use client';

import { useState, useEffect } from 'react';
import { Menu, ChevronDown, Phone } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const MobileMenu = dynamic(() => import('./MobileMenu'), { ssr: false });

const navItems = [
  {
    label: 'Programs',
    children: [
      { label: 'College Admissions', href: '/college-admissions' },
      { label: 'College Transfers', href: '/college-transfers' },
      { label: 'Graduate School', href: '/graduate-school-application' },
      { label: 'MBA', href: '/mba' },
      { label: 'Medical School', href: '/medical-school-application' },
      { label: 'Medical Residency', href: '/medical-residency' },
      { label: 'Law School', href: '/law-school-application' },
      { label: 'Dental School', href: '/dental-school-admissions-consulting' },
      { label: 'Private School', href: '/private-school-admissions' },
    ],
  },
  {
    label: 'Services',
    children: [
      { label: 'Personal Statements', href: '/personal-statement' },
      { label: 'Interview Prep', href: '/college-interviews' },
      { label: 'International Students', href: '/international-students' },
      { label: 'All Services', href: '/services' },
    ],
  },
  { label: 'About Us', href: '/about-us' },
  { label: 'Reviews', href: '/client-testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact-us' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] lg:h-[76px]">
            {/* Logo + Tagline */}
            <Link href="/" className="flex-shrink-0 flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold text-[#E8613C] tracking-tight">SOS</span>
                <span className="text-2xl font-medium text-[#1B2B4B]">Admissions</span>
              </div>
              <span className="text-[11px] sm:text-xs text-[#6C757D] tracking-wide mt-[-2px]">Get Into Your Dream School</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-5">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="text-[#495057] hover:text-[#1B2B4B] transition-colors font-medium flex items-center gap-1 py-2 text-sm">
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute left-0 mt-0 w-60 bg-white shadow-xl rounded-lg py-3 border border-gray-100 animate-fade-in">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2.5 text-sm text-[#495057] hover:text-[#1B2B4B] hover:bg-[#F8F9FA] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="text-[#495057] hover:text-[#1B2B4B] transition-colors font-medium py-2 text-sm"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA + Phone */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+13109514008"
                className="flex items-center gap-1.5 text-sm text-[#1B2B4B] font-medium hover:text-[#E8613C] transition-colors"
              >
                <Phone size={14} />
                (310) 951-4008
              </a>
              <Link
                href="/get-started"
                className="px-6 py-2.5 bg-[#E8613C] text-white font-semibold rounded-full hover:bg-[#D4522E] transition-colors shadow-sm text-sm"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Phone + Menu */}
            <div className="lg:hidden flex items-center gap-1">
              <a
                href="tel:+13109514008"
                className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#1B2B4B] hover:text-[#E8613C] transition-colors px-2.5 py-1.5 rounded-full bg-[#F8F9FA] border border-gray-200"
              >
                <Phone size={12} />
                (310) 951-4008
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-[#495057] hover:text-[#1B2B4B] transition-colors"
                aria-label="Open menu"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
