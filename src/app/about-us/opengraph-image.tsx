import { generateOGImage, size, contentType } from "@/lib/og-image";

export { size, contentType };
export const runtime = "edge";

export default function Image() {
  return generateOGImage(
    "About SOS Admissions",
    "Decades of experience guiding students into top universities",
  );
}
