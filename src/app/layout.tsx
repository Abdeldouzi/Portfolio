import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
  title: "Abdel-Karim Douzi | Portfolio full stack",
  description:
    "Portfolio d'Abdel-Karim Douzi, développeur full stack. Projets web, compétences techniques, expérience et contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        <main className="app-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
