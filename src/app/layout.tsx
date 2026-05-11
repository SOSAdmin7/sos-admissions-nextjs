import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GTMScript, GTMNoScript } from "@/components/GTMProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "SOS Admissions | Expert College & Graduate School Admissions Consulting",
    template: "%s | SOS Admissions",
  },
  description:
    "Expert admissions consulting for college, graduate school, MBA, law school, medical school, and residency applications. 27+ years helping students get into top programs.",
  metadataBase: new URL("https://sosadmissions.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sosadmissions.com",
    siteName: "SOS Admissions",
    title: "SOS Admissions | Expert College & Graduate School Admissions Consulting",
    description:
      "Expert admissions consulting for college, graduate school, MBA, law school, medical school, and residency applications. 27+ years helping students get into top programs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOS Admissions | Expert College & Graduate School Admissions Consulting",
    description:
      "Expert admissions consulting for college, graduate school, MBA, law school, medical school, and residency applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sosadmissions.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <GTMNoScript />
        <GTMScript />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
