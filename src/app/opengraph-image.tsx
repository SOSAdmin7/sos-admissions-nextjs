import { generateOGImage, size, contentType } from "@/lib/og-image";

export { size, contentType };
export const runtime = "edge";

export default function Image() {
  return generateOGImage(
    "Expert Admissions Consulting",
    "decades of experience helping students get into top universities",
  );
}
