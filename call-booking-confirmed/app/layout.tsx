import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Strategy Call Is Confirmed | Cash Cow System",
  description:
    "Complete these preparation steps before your Cash Cow System strategy call.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
