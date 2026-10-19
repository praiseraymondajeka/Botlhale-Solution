import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Botlhale Solutions Nigeria | Brand Protection & Risk Mitigation",
  description:
    "Nigeria's brand protection and intelligence consultancy, safeguarding intellectual property and market integrity across West Africa.",
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
