import { generateOGImage, size, contentType } from '@/lib/og-image';

export { size, contentType };
export const runtime = 'edge';

export default function Image() {
  return generateOGImage(
    'College Admissions Consulting',
    '98% acceptance rate. Former admissions officers on your side.'
  );
}
