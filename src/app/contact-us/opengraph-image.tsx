import { generateOGImage, size, contentType } from '@/lib/og-image';

export { size, contentType };
export const runtime = 'edge';

export default function Image() {
  return generateOGImage(
    'Contact SOS Admissions',
    'Schedule your free consultation today'
  );
}
