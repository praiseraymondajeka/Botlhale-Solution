import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afro Metrics | Brand Protection & Risk Mitigation",
  description:
    "Brand protection and intelligence consultancy safeguarding intellectual property and market integrity across West Africa.",
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
