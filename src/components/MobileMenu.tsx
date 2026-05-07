'use client';

import { useState, useEffect } from 'react';
import { X, ChevronDown, Phone } from 'lucide-react';
import Link from 'next/link';

const mobileNavItems = [
  { label: 'Home', href: '/' },
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

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible && !isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        className={`fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold text-[#E8613C] tracking-tight">SOS</span>
              <span className="text-xl font-medium text-[#1B2B4B]">Admissions</span>
            </div>
            <span className="text-[10px] text-[#6C757D] tracking-wide mt-[-1px]">Get Into Your Dream School</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-[#495057]"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <div className="px-6 py-6 space-y-1">
          {mobileNavItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                  className="w-full flex items-center justify-between py-3 text-base font-medium text-[#1B2B4B] hover:text-[#E8613C] transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 text-gray-400 ${
                      expanded === item.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-200 ease-out overflow-hidden"
                  style={{ gridTemplateRows: expanded === item.label ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="ml-4 border-l-2 border-[#E8613C]/30 pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block py-2 text-sm text-[#495057] hover:text-[#E8613C] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                onClick={onClose}
                className="block py-3 text-base font-medium text-[#1B2B4B] hover:text-[#E8613C] transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <div className="border-t border-gray-100 px-6 py-6 space-y-4">
          <a
            href="tel:+13109514008"
            className="flex items-center justify-center gap-2 py-3 text-[#1B2B4B] font-semibold"
          >
            <Phone size={16} />
            (310) 951-4008
          </a>
          <Link
            href="/get-started"
            onClick={onClose}
            className="block w-full text-center px-6 py-3 bg-[#E8613C] text-white font-semibold rounded-full hover:bg-[#D4522E] transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
