import { generateOGImage, size, contentType } from '@/lib/og-image';

export { size, contentType };
export const runtime = 'edge';

export default function Image() {
  return generateOGImage(
    'About SOS Admissions',
    '27+ years of experience guiding students into top universities'
  );
}
