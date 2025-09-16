import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoBusinessOS - 企业自动化解决方案平台",
  description: "革命性的自动化商业操作系统，让企业业务流程100%自动化运行，提升效率80%，降低成本60%。覆盖营销、销售、客服、财务、HR全方位自动化解决方案。",
  keywords: "企业自动化, 业务流程自动化, 营销自动化, 销售自动化, AutoBusinessOS",
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
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
