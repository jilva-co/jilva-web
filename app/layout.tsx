import type { Metadata, Viewport } from "next";
import "@fontsource/geist-mono/400.css";
import "@fontsource/geist-mono/500.css";
import "@fontsource/silkscreen/400.css";
import "./globals.css";
import { site } from "@/lib/site";

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
  themeColor: "#0b0d0f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
