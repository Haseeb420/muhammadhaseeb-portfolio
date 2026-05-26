import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SeoKeywordSnippet } from "@/components/SeoKeywordSnippet";
import "./globals.css";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dev-muhammadhaseeb.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Muhammad Haseeb Malik | Portfolio";
const siteDescription =
  "Muhammad Haseeb Malik (Muhammad Haseeb) — Principal Software Engineer at WAMO LABS. Fullstack and AI integration: Python, FastAPI, Next.js, TypeScript, Ruby on Rails, Django, AWS, Docker, PostgreSQL. Lahore, Pakistan.";
const keywords =
  "Muhammad Haseeb Malik, Muhammad Haseeb, Haseeb Malik, Haseeb, Principal Software Engineer, Senior Software Engineer, WAMO LABS, Python, FastAPI, Next.js, TypeScript, Ruby on Rails, Django, AWS, Docker, PostgreSQL, AI, Lahore, Fullstack developer";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: siteTitle,
  description: siteDescription,
  keywords,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: baseUrl,
    siteName: "Muhammad Haseeb Malik | Portfolio",
    type: "profile",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <SeoKeywordSnippet />
        {children}
      </body>
    </html>
  );
}
