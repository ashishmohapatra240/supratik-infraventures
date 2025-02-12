import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media | Supratik",
  description: "Stay updated with the latest news, interviews, and updates from Supratik Inffaventure.",
};

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 