/* ─────────────────────────────────────────────────────────────────
   TrustLogos — clean typographic logo treatments (no bitmap strips).
   TrustBar:    "As Featured In" news outlet wordmarks (SVG text)
   SchoolLogos: "Past Clients Have Successfully Gotten Into" school
                wordmarks, styled per school brand, varied per program
   ───────────────────────────────────────────────────────────────── */

export function TrustBar() {
  return (
    <section className="bg-[#F8F9FA] py-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5">
          <span className="text-xs uppercase tracking-[0.12em] sm:tracking-[0.2em] text-gray-400 font-semibold text-center [text-wrap:balance] px-4">
            As Featured In
          </span>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 sm:gap-x-10 md:gap-x-12">
            <svg
              className="h-7 text-red-600"
              viewBox="0 0 120 40"
              fill="currentColor"
            >
              <text
                x="0"
                y="32"
                fontFamily="Arial Black, Arial"
                fontWeight="900"
                fontSize="36"
                letterSpacing="-2"
              >
                CNN
              </text>
            </svg>
            <svg
              className="h-6 text-[#003366]"
              viewBox="0 0 160 28"
              fill="currentColor"
            >
              <text
                x="0"
                y="23"
                fontFamily="Arial Black, Arial"
                fontWeight="900"
                fontSize="22"
                letterSpacing="0.5"
              >
                FOX NEWS
              </text>
            </svg>
            <svg
              className="h-5 text-gray-800"
              viewBox="0 0 280 30"
              fill="currentColor"
            >
              <text
                x="0"
                y="24"
                fontFamily="Georgia, Times New Roman, serif"
                fontWeight="400"
                fontSize="18"
                fontStyle="italic"
                letterSpacing="0.5"
              >
                The Wall Street Journal
              </text>
            </svg>
            <svg
              className="h-7 text-red-600"
              viewBox="0 0 140 40"
              fill="currentColor"
            >
              <text
                x="2"
                y="33"
                fontFamily="Times New Roman, Georgia, serif"
                fontWeight="700"
                fontSize="36"
                letterSpacing="5"
              >
                TIME
              </text>
            </svg>
            <svg
              className="h-6 text-blue-700"
              viewBox="0 0 160 30"
              fill="currentColor"
            >
              <text
                x="0"
                y="24"
                fontFamily="Arial, Helvetica"
                fontWeight="700"
                fontSize="22"
                letterSpacing="1"
              >
                NBC NEWS
              </text>
            </svg>
            <svg
              className="h-5 text-red-700"
              viewBox="0 0 180 24"
              fill="currentColor"
            >
              <text
                x="0"
                y="19"
                fontFamily="Georgia, Times New Roman, serif"
                fontWeight="700"
                fontSize="17"
                letterSpacing="0.3"
              >
                China Daily
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── SCHOOL LOGOS ───────────────────────── */

interface SchoolMark {
  name: string;
  color: string;
  style: "serif" | "serifCaps" | "sans" | "sansItalic";
}

const FONT: Record<SchoolMark["style"], React.CSSProperties> = {
  serif: { fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 700 },
  serifCaps: {
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontSize: "0.9em",
  },
  sans: { fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 800 },
  sansItalic: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: 800,
    fontStyle: "italic",
  },
};

const SCHOOL_SETS: Record<string, SchoolMark[]> = {
  college: [
    { name: "Harvard", color: "#A51C30", style: "serifCaps" },
    { name: "Stanford", color: "#8C1515", style: "serif" },
    { name: "Yale", color: "#00356B", style: "serifCaps" },
    { name: "Princeton", color: "#E77500", style: "serif" },
    { name: "Columbia", color: "#1D4F91", style: "serifCaps" },
    { name: "MIT", color: "#A31F34", style: "sans" },
    { name: "Berkeley", color: "#003262", style: "serif" },
    { name: "UCLA", color: "#2774AE", style: "sansItalic" },
    { name: "USC", color: "#990000", style: "serif" },
    { name: "Caltech", color: "#FF6C0C", style: "sans" },
    { name: "Johns Hopkins", color: "#002D72", style: "serifCaps" },
    { name: "Cornell", color: "#B31B1B", style: "serif" },
  ],
  grad: [
    { name: "Harvard", color: "#A51C30", style: "serifCaps" },
    { name: "Stanford", color: "#8C1515", style: "serif" },
    { name: "MIT", color: "#A31F34", style: "sans" },
    { name: "Berkeley", color: "#003262", style: "serif" },
    { name: "Columbia", color: "#1D4F91", style: "serifCaps" },
    { name: "Princeton", color: "#E77500", style: "serif" },
    { name: "Caltech", color: "#FF6C0C", style: "sans" },
    { name: "Carnegie Mellon", color: "#C41230", style: "sans" },
    { name: "Johns Hopkins", color: "#002D72", style: "serifCaps" },
  ],
  mba: [
    { name: "Harvard Business School", color: "#A51C30", style: "serifCaps" },
    { name: "Stanford GSB", color: "#8C1515", style: "serif" },
    { name: "Wharton", color: "#011F5B", style: "serifCaps" },
    { name: "Kellogg", color: "#4E2A84", style: "serif" },
    { name: "Chicago Booth", color: "#800000", style: "sans" },
    { name: "Columbia Business School", color: "#1D4F91", style: "serifCaps" },
    { name: "NYU Stern", color: "#57068C", style: "sans" },
    { name: "UCLA Anderson", color: "#2774AE", style: "sansItalic" },
    { name: "Berkeley Haas", color: "#003262", style: "serif" },
  ],
  law: [
    { name: "Harvard Law", color: "#A51C30", style: "serifCaps" },
    { name: "Yale Law", color: "#00356B", style: "serifCaps" },
    { name: "Stanford Law", color: "#8C1515", style: "serif" },
    { name: "Columbia Law", color: "#1D4F91", style: "serifCaps" },
    { name: "NYU Law", color: "#57068C", style: "sans" },
    { name: "Georgetown Law", color: "#041E42", style: "serif" },
    { name: "UCLA Law", color: "#2774AE", style: "sansItalic" },
  ],
  medical: [
    { name: "Harvard Medical School", color: "#A51C30", style: "serifCaps" },
    { name: "Johns Hopkins", color: "#002D72", style: "serifCaps" },
    { name: "Stanford Medicine", color: "#8C1515", style: "serif" },
    { name: "UCSF", color: "#052049", style: "sans" },
    { name: "UCLA Geffen", color: "#2774AE", style: "sansItalic" },
    { name: "Mayo Clinic", color: "#0057B8", style: "sans" },
    { name: "UC San Diego", color: "#182B49", style: "serif" },
  ],
  dental: [
    { name: "Penn Dental Medicine", color: "#011F5B", style: "serifCaps" },
    { name: "UCLA Dentistry", color: "#2774AE", style: "sansItalic" },
    { name: "Columbia Dental Medicine", color: "#1D4F91", style: "serifCaps" },
    { name: "NYU Dentistry", color: "#57068C", style: "sans" },
    { name: "Case Western Reserve", color: "#0A304E", style: "serif" },
    { name: "Temple Kornberg", color: "#9E1B32", style: "serif" },
  ],
  nursing: [
    { name: "Johns Hopkins Nursing", color: "#002D72", style: "serifCaps" },
    { name: "Penn Nursing", color: "#011F5B", style: "serifCaps" },
    { name: "Duke Nursing", color: "#00539B", style: "serif" },
    { name: "Columbia Nursing", color: "#1D4F91", style: "serifCaps" },
    { name: "UCLA Nursing", color: "#2774AE", style: "sansItalic" },
    { name: "Emory Nursing", color: "#012169", style: "serif" },
  ],
  pa: [
    { name: "Yale School of Medicine", color: "#00356B", style: "serifCaps" },
    { name: "Duke", color: "#00539B", style: "serif" },
    { name: "Emory", color: "#012169", style: "serif" },
    { name: "George Washington", color: "#033C5A", style: "serifCaps" },
    { name: "Rutgers Health", color: "#CC0033", style: "sans" },
  ],
  vet: [
    { name: "UC Davis", color: "#022851", style: "serif" },
    { name: "Cornell", color: "#B31B1B", style: "serif" },
    { name: "Colorado State", color: "#1E4D2B", style: "sans" },
    { name: "Ohio State", color: "#BB0000", style: "sans" },
    { name: "Royal Veterinary College", color: "#4B0082", style: "serifCaps" },
  ],
};

export type SchoolLogosVariant = keyof typeof SCHOOL_SETS;

export function SchoolLogos({
  variant = "college",
}: {
  variant?: SchoolLogosVariant;
}) {
  const schools = SCHOOL_SETS[variant] ?? SCHOOL_SETS.college;
  return (
    <section className="bg-[#F8F9FA] py-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5">
          <span className="text-xs uppercase tracking-[0.12em] sm:tracking-[0.2em] text-gray-400 font-semibold text-center [text-wrap:balance] px-4">
            Past Clients Have Successfully Gotten Into
          </span>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 sm:gap-x-10">
            {schools.map((school) => (
              <span
                key={school.name}
                className="text-lg md:text-xl whitespace-nowrap"
                style={{ color: school.color, ...FONT[school.style] }}
              >
                {school.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
