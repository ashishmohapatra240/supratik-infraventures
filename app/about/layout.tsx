import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Supratik",
  description: "Learn about Supratik Inffaventure and our commitment to excellence in real estate development.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 