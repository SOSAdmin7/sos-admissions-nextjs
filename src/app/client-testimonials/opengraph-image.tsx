import { generateOGImage, size, contentType } from '@/lib/og-image';

export { size, contentType };
export const runtime = 'edge';

export default function Image() {
  return generateOGImage(
    'Student Success Stories',
    'Hear from students who got into their dream schools'
  );
}
