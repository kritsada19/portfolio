/**
 * RootLayout — Layout หลักของทั้งเว็บไซต์
 *
 * - ตั้งค่า font (Geist Sans + Geist Mono)
 * - ครอบ ThemeProvider สำหรับ Dark/Light mode
 * - แสดง Navbar ที่ด้านบนทุกหน้า
 * - SEO metadata
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

/* --- ตั้งค่า font หลัก --- */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* --- SEO Metadata --- */
export const metadata: Metadata = {
  title: "Kritsada M. — Full-Stack Developer Portfolio",
  description:
    "Portfolio ของ Kritsada M. นักพัฒนาเว็บ Full-Stack ที่เชี่ยวชาญ React, Next.js, TypeScript และเทคโนโลยีสมัยใหม่",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* ThemeProvider ครอบทั้งหมดเพื่อจัดการ Dark/Light mode */}
        <ThemeProvider>
          {/* Navbar แบบ fixed ที่ด้านบน */}
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
