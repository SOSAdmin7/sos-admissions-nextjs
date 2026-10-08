import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateOGImage(title: string, subtitle?: string) {
  return new ImageResponse(
    <div
      style={{
        background:
          "linear-gradient(135deg, #19374A 0%, #2F536E 50%, #3D657F 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 80px",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "40px",
        }}
      >
        <span
          style={{
            fontSize: "42px",
            fontWeight: 800,
            color: "#E8C97A",
            letterSpacing: "-0.02em",
          }}
        >
          SOS
        </span>
        <span style={{ fontSize: "42px", fontWeight: 500, color: "#FFFFFF" }}>
          Admissions
        </span>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: title.length > 40 ? "48px" : "56px",
          fontWeight: 800,
          color: "#FFFFFF",
          textAlign: "center",
          lineHeight: 1.2,
          maxWidth: "900px",
          marginBottom: subtitle ? "24px" : "0",
        }}
      >
        {title}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <div
          style={{
            fontSize: "24px",
            color: "#E2E8F0",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </div>
      )}

      {/* Accent line */}
      <div
        style={{
          width: "80px",
          height: "4px",
          background: "#E8613C",
          borderRadius: "2px",
          marginTop: "40px",
        }}
      />

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          fontSize: "18px",
          color: "#E2E8F0",
        }}
      >
        sosadmissions.com
      </div>
    </div>,
    { ...size },
  );
}
