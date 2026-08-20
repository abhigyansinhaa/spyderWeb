import type { Metadata } from "next";
import { Newsreader, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Abhigyan Sinha — AI & ML Engineer",
  description:
    "Portfolio of Abhigyan Sinha — AI Engineer building applied ML, explainable AI platforms, and high-performance data systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${newsreader.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0d0d0c] text-[#e8e4de] selection:bg-[#c2703e]/30 selection:text-[#fdfcfb]`}
      >
        {children}
      </body>
    </html>
  );
}
