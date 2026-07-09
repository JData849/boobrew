import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boo&Brew | Custom Cups, Mugs & Personalised Gifts",
  description: "Shop personalised tumblers, insulated cups, coffee mugs, key rings and made-to-order custom gifts.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
