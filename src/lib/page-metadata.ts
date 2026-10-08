import type { Metadata } from "next";
import { defaultSocialImage } from "@/lib/social-images";

// Keep sharing previews aligned with the page instead of inheriting the
// homepage's title, description, or URL from the root layout.
export function pageMetadata(metadata: Metadata): Metadata {
  const title = typeof metadata.title === "string"
    ? `${metadata.title} | SOS Admissions`
    : metadata.title && "absolute" in metadata.title
      ? metadata.title.absolute
      : undefined;
  const description = metadata.description ?? "";
  const canonical = metadata.alternates?.canonical;
  const images = metadata.openGraph?.images ?? defaultSocialImage(
    typeof canonical === "string" ? canonical : undefined,
  );
  return {
    ...metadata,
    openGraph: {
      type: "website",
      siteName: "SOS Admissions",
      title,
      description,
      ...(typeof canonical === "string" ? { url: canonical } : {}),
      ...metadata.openGraph,
      images,
    },
    twitter: {
      card: "summary_large_image",
      site: "@SOSAdmissions",
      title,
      description,
      ...metadata.twitter,
      images: metadata.twitter?.images ?? images,
    },
  };
}
