import type { Metadata } from "next";
import "./globals.css";
import { archivo } from "./fonts";
import Navbar from "@/components/navigation/Navbar";

export const metadata: Metadata = {
  title: "Supratik",
  description: "Real Estate Development Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
