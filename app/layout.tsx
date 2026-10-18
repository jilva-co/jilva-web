import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";

const monoFont = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/geist-mono/files/geist-mono-latin-400-normal.woff2",
      weight: "400",
    },
    {
      path: "../node_modules/@fontsource/geist-mono/files/geist-mono-latin-500-normal.woff2",
      weight: "500",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
  fallback: ["Consolas", "Courier New", "monospace"],
  adjustFontFallback: false,
});

const pixelFont = localFont({
  src: "../node_modules/@fontsource/silkscreen/files/silkscreen-latin-400-normal.woff2",
  variable: "--font-pixel",
  weight: "400",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Jilva — Beautiful terminal applications",
  description: site.description,
  applicationName: "Jilva",
  keywords: [
    "Jilva",
    "Rust",
    "terminal UI",
    "TUI",
    "open source",
    "terminal applications",
  ],
  openGraph: {
    title: "Jilva — Beautiful terminal applications",
    description: site.description,
    type: "website",
    locale: "en_US",
    siteName: "Jilva",
  },
  twitter: {
    card: "summary",
    title: "Jilva — Beautiful terminal applications",
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${monoFont.variable} ${pixelFont.variable}`}
      style={{ colorScheme: "only dark", backgroundColor: "#000000" }}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
