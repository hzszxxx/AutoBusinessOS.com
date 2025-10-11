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
  description: "Business automation platform that helps companies automate workflows across marketing, sales, customer service, and finance. Comprehensive automation solutions designed to reduce manual tasks and improve operational efficiency.",
  keywords: "enterprise automation, business process automation, marketing automation, sales automation, AutoBusinessOS",
  authors: [{ name: "AutoBusinessOS Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  verification: {
    google: "UXx7pX6vhXfeComf-2WGaNI8nhboxpTGVhJqQHbpzj0",
  },
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
