import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties | Supratik",
  description: "Explore our premium residential and commercial properties in prime locations.",
};

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 