import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahil — Software Engineer",
  description:
    "Backend systems, reliability, and the messy space between software that has been built and software that actually works.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}