import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Supratik",
  description: "Stay updated with the latest insights, news, and trends in real estate development.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 