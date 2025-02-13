import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Supratik",
  description: "Join our team at Supratik Inffaventure and be part of building tomorrow's communities.",
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 