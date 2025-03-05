import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Supratik",
  description: "Get in touch with Supratik Infraventures for any queries about our properties and services.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 