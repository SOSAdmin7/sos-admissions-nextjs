'use client';

import { useState } from 'react';
import type { LegacyAssetImage, LegacyVideo } from '@/lib/legacyAssets';

function YouTubeFacade({ videoId, title, thumbnail = 'hqdefault' }: { videoId: string; title: string; thumbnail?: 'hqdefault' | 'maxresdefault' }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className="relative h-full w-full cursor-pointer bg-black"
      aria-label={`Play video: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/${thumbnail}.jpg`}
        alt={title}
        className="h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30">
        <svg className="h-16 w-16 text-white drop-shadow-lg md:h-20 md:w-20" viewBox="0 0 68 48">
          <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red" />
          <path d="M45 24L27 14v20" fill="white" />
        </svg>
      </div>
    </button>
  );
}

export function LegacyYouTubeCard({
  video,
  title,
  thumbnail,
  className = '',
}: {
  video: LegacyVideo;
  title?: string;
  thumbnail?: 'hqdefault' | 'maxresdefault';
  className?: string;
}) {
  return (
    <div className={`max-w-3xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl ${className}`.trim()}>
      <div className="aspect-video">
        <YouTubeFacade
          videoId={video.id}
          title={title ?? video.title}
          thumbnail={thumbnail}
        />
      </div>
    </div>
  );
}

export function LegacyStripSection({
  featuredStrip,
  clientStrip,
  featuredLabel = 'As Featured In',
  clientLabel = 'Past Clients Have Successfully Gotten Into',
}: {
  featuredStrip?: LegacyAssetImage;
  clientStrip?: LegacyAssetImage;
  featuredLabel?: string;
  clientLabel?: string;
}) {
  if (!featuredStrip && !clientStrip) {
    return null;
  }

  return (
    <section className="border-b border-gray-200 bg-[#F8F9FA] py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        {featuredStrip && (
          <div className="text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              {featuredLabel}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featuredStrip.src} alt={featuredStrip.alt} className="mx-auto h-auto w-full max-w-5xl" loading="lazy" />
          </div>
        )}
        {clientStrip && (
          <div className="text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              {clientLabel}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={clientStrip.src} alt={clientStrip.alt} className="mx-auto h-auto w-full max-w-5xl" loading="lazy" />
          </div>
        )}
      </div>
    </section>
  );
}

export function LegacyImageGallery({
  title,
  images,
}: {
  title?: string;
  images: LegacyAssetImage[];
}) {
  if (!images.length) {
    return null;
  }

  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-[#1B2B4B] md:text-3xl">{title}</h2>
          </div>
        )}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {images.map((image) => (
            <div
              key={image.src}
              className={`overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm ${image.fullWidth ? 'md:col-span-2' : ''}`.trim()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
