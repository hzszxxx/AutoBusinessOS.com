import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/SEO/StructuredData";
import { WebVitals } from "@/components/Performance/WebVitals";
import GoogleAnalytics from "@/components/Analytics/GoogleAnalytics";
import { AutoAds } from "@/components/Ads/GoogleAdSense";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoBusinessOS - Enterprise Automation Platform",
  description: "Revolutionary automated business operating system that enables 100% automation of enterprise workflows, improving efficiency by 80% and reducing costs by 60%. Comprehensive automation solutions for marketing, sales, customer service, finance, and HR.",
  keywords: "enterprise automation, business process automation, marketing automation, sales automation, AutoBusinessOS",
  authors: [{ name: "AutoBusinessOS Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Auto Ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6923393739488910"
          crossOrigin="anonymous"
        />
        <StructuredData type="organization" />
        <StructuredData type="website" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <GoogleAnalytics />
        <AutoAds />
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
