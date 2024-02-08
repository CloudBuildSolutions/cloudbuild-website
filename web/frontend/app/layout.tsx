import type { Metadata } from "next";

import { interFont } from "../lib/fonts";
import { cn } from "../lib/utils";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Cloud Build Solutions | Redefining Solution Architecture for the Agile Enterprise",
  description: "Monthly cloud architecture subscriptions for every business. Get started for FREE. Pause or Cancel at anytime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={cn(interFont.className, "bg-gradient-to-r from-red-700 via-red-500 to-red-700")}>{children}</body>
    </html>
  );
}
