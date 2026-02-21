

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppBot from "@/components/WhatsAppBot";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Ashele Caleb Olusegun | Frontend Engineer",
  description: "Portfolio of Ashele Caleb Olusegun, a Frontend Engineer specializing in Next.js and React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          geistSans.variable,
          "antialiased",
          "bg-background-light dark:bg-background-dark",
          "text-slate-900 dark:text-slate-100",
          "selection:bg-primary selection:text-white",
        ].join(" ")}
      >
        <Navbar />
        <PageLoader />
        {children}
        <Footer />
        <WhatsAppBot />
        <Analytics />
      </body>
    </html>
  );
}
