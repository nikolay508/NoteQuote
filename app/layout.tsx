import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Whispers & Words - Capture your thoughts. Share your soul.",
  description: "A platform for sharing thoughts, quotes, and notes. Capture your thoughts. Share your soul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex justify-between items-center p-6 border-b border-border-light">
          <div className="text-accent-green text-xl font-bold">
            Whispers & Words
          </div>
          <nav className="flex gap-6">
            <Link href="/" className="text-accent-green hover:text-foreground transition-colors">Home</Link>
            <Link href="/browse" className="text-accent-green hover:text-foreground transition-colors">Browse Notes</Link>
            <Link href="/submit" className="text-accent-green hover:text-foreground transition-colors">Submit Quote</Link>
            <Link href="/about" className="text-accent-green hover:text-foreground transition-colors">About</Link>
            <Link href="/auth" className="text-accent-green hover:text-foreground transition-colors">Login / Signup</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
