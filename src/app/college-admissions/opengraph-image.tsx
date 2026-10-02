import { generateOGImage, size, contentType } from "@/lib/og-image";

export { size, contentType };
export const runtime = "edge";

export default function Image() {
  return generateOGImage(
    "College Admissions Consulting",
    "Personalized guidance for college applications and interviews.",
  );
}
