import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Majlis",
  description: "A collaborative space for Muslims to think, discuss, research and build together."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}