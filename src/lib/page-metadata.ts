import type { Metadata } from "next";

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
  return {
    ...metadata,
    openGraph: {
      type: "website",
      siteName: "SOS Admissions",
      title,
      description,
      ...(typeof canonical === "string" ? { url: canonical } : {}),
      ...metadata.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      site: "@SOSAdmissions",
      title,
      description,
      ...metadata.twitter,
    },
  };
}
