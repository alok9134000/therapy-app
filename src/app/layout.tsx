// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "./providers";
import dynamic from "next/dynamic";

const Toaster = dynamic(() => import("@/components/ui/toaster").then(mod => mod.Toaster), {
  ssr: true,
});
const Sonner = dynamic(() => import("@/components/ui/sonner").then(mod => mod.Toaster), {
  ssr: true,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Little Hearts Healing Hub | Therapy and Wellness Services",
  description:
    "Little Hearts Healing Hub offers compassionate therapy, mental health counseling, and wellness services tailored to your healing journey.",
  keywords:
    "therapy, mental health, counseling, wellness, mindfulness, self-care, healing, online therapy, psychologist, psychiatrist",
  metadataBase: new URL("https://littleheartshealinghub.com"),
  openGraph: {
    title: "Little Hearts Healing Hub",
    description:
      "Therapy and wellness services tailored to support your emotional and mental well-being.",
    url: "https://littleheartshealinghub.com",
    siteName: "Little Hearts Healing Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Hearts Healing Hub",
    description:
      "Discover compassionate therapy and mental wellness support for a brighter future.",
    site: "@LittleHearts",
    creator: "@LittleHearts",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: "index, follow",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Toaster />
          <Sonner />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
