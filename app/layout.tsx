import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sahil - Software Engineer",
    template: "%s | Sahil",
  },
  description:
    "Backend engineering, distributed systems, authorization, and reliability: with an emphasis on what happens after software ships.",
  keywords: [
    "Backend Engineer",
    "Distributed Systems",
    "Production Reliability",
    "Go",
    "TypeScript",
    "Node.js",
    "Microservices",
    "Software Engineer Bengaluru",
  ],
  authors: [{ name: "Sahil", url: "https://github.com/Lunaticfrost" }],
  openGraph: {
    title: "Sahil - Software Engineer",
    description:
      "Backend engineering, distributed systems, authorization, and reliability: with an emphasis on what happens after software ships.",
    type: "website",
    locale: "en_US",
    siteName: "Sahil Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil - Software Engineer",
    description:
      "Backend engineering, distributed systems, authorization, and reliability: with an emphasis on what happens after software ships.",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'><rect width='32' height='32' rx='8' fill='%23060608'/><rect x='0.5' y='0.5' width='31' height='31' rx='7.5' fill='none' stroke='%2328282e'/><path d='M9 11L14 16L9 21' stroke='%23c7ff63' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/><line x1='17' y1='21' x2='23' y2='21' stroke='%23c7ff63' stroke-width='2.2' stroke-linecap='round'/></svg>",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}