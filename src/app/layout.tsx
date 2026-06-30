import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rashadul Islam | Professional Content Writer & Strategist",
  description: "Rashadul Islam is a professional content writer and strategist with over 4 years of experience specializing in SEO copywriting, SaaS & Tech content, and brand storytelling.",
  keywords: ["Rashadul Islam", "Content Writer", "Copywriter", "SEO Content Strategy", "SaaS Copywriter", "Freelance Writer"],
  authors: [{ name: "Rashadul Islam" }],
  openGraph: {
    title: "Rashadul Islam | Content Writer & Strategist",
    description: "High-impact, engaging content and data-driven SEO strategy to help your business grow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
