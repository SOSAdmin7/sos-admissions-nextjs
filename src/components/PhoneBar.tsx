import { Phone } from 'lucide-react';

export function PhoneBar() {
  return (
    <div className="bg-[#0D1B2A] text-white py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-xs text-slate-400 hidden sm:inline">
          College &amp; Graduate School Admissions Consulting Since 1998
        </span>
        <a
          href="tel:+13109514008"
          className="flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#E8613C] transition-colors mx-auto sm:mx-0"
        >
          <Phone size={13} className="text-[#E8613C]" />
          Call: 310-951-4008
        </a>
      </div>
    </div>
  );
}
