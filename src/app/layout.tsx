import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ishrealm - Gaming & Content Creation Hub",
  description: "Welcome to Ishrealm! Follow Ishmael across all platforms for gaming content, streams, Roblox development, and more. Join the adventure!",
  keywords: "Ishrealm, Ishmael, gaming, streaming, Twitch, YouTube, TikTok, Roblox, Fortnite, Mugiwara Frost",
  openGraph: {
    title: "Ishrealm - Gaming & Content Creation Hub",
    description: "Welcome to Ishrealm! Follow Ishmael across all platforms for gaming content, streams, Roblox development, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
