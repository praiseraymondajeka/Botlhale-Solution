import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoneyLot — Intelligent Financial Infrastructure | Banking, Payments & Lending",
  description:
    "MoneyLot is a subsidiary of Mainstreet Microfinance Bank. Everything your money needs in one account: everyday business banking, payment gateways, agency banking, debit cards, and lending for Nigerian businesses.",
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
