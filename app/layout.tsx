import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eng. Mahmoud Farag | Cash Cow System Strategy Call",
  description:
    "Prepare for your Cash Cow System discovery call with Eng. Mahmoud Farag.",
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
