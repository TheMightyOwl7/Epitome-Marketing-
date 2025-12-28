import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Epitome Marketing | Premium Digital Growth Partner",
  description: "Stop wasting ad spend. Start building revenue. Epitome Marketing delivers data-driven Google Ads, Paid Social, and Social Media Management for measurable growth.",
  keywords: ["digital marketing agency", "Google Ads management", "Facebook ads", "Instagram ads", "ROAS optimization", "paid social", "social media management"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${dmSans.variable} ${playfair.variable} antialiased font-body`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
