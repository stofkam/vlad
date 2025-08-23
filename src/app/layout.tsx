
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/ui/layout/header";
import HeroProvider from "@/components/HeroProvider";
import { siteConfig } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeroProvider>
          <Header />
          <main className={` flex flex-col w-full items-center justify-start `} style={{ height: `calc(100vh - ${layoutConfig.headerHeight} - ${layoutConfig.footerHeight})` }}>
            {children}
          </main>
          <footer className={` flex  items-center justify-center `} style={{ height: `${layoutConfig.footerHeight}` }}>
            <p >{siteConfig.description}</p>
          </footer>
        </HeroProvider>
      </body>
    </html>
  );
}
