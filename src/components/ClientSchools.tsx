import type { LegacyAssetImage } from "@/lib/legacyAssets";
import imageDimensions from "@/data/client-image-dimensions.json";

export function ClientSchools({ image, label }: { image: LegacyAssetImage; label: string }) {
  const size = (imageDimensions as Record<string, { width: number; height: number }>)[image.src];
  return (
    <section className="border-b border-slate-200 bg-white px-4 py-7" data-client-schools>
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-5 text-base sm:text-lg font-semibold text-navy [text-wrap:balance]">{label}</h2>
        <a href={image.src} target="_blank" rel="noopener noreferrer" className="inline-block max-w-full rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy" aria-label={`${label} View school logos at full size (opens in a new tab)`}>
          {/* Natural width prevents enlarging the original WordPress artwork. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image.src} alt={image.alt} width={size?.width} height={size?.height} className="mx-auto block h-auto w-auto max-w-full" loading="lazy" />
        </a>
      </div>
    </section>
  );
}
