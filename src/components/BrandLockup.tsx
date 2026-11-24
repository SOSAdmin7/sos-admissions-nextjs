export function BrandLockup() {
  return (
    <span className="inline-flex flex-col gap-0.5 text-neutral-900">
      <span className="flex items-center gap-1.5 text-lg font-bold leading-tight sm:text-2xl">
        {/* Show the emblem from the original artwork beside scalable lettering. */}
        <span
          aria-hidden="true"
          className="aspect-[90/85] h-[1.25em] shrink-0 bg-[url('/images/legacy/sosheader.webp')] bg-size-[auto_100%] bg-left bg-no-repeat"
        />
        SOS Admissions
      </span>
      <span className="text-sm font-bold leading-tight text-navy sm:text-lg">
        Get Into Your Dream School
      </span>
    </span>
  );
}
