import { generateOGImage, size, contentType } from '@/lib/og-image';

export { size, contentType };
export const runtime = 'edge';

export default function Image() {
  return generateOGImage(
    'Expert Admissions Consulting',
    '27+ years helping students get into top universities'
  );
}
