"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

const navLinks = [
  { href: "/about", label: "about" },
  { href: "/property", label: "property" },
  { href: "/media", label: "media" },
  { href: "/career", label: "career" },
  { href: "/blog", label: "blog" },
  { href: "/contacts", label: "contacts" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Supratik Logo"
              width={150}
              height={50}
              className="h-24 w-auto py-4"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 capitalize transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary" href="/enquiry">
              enquiry
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-0.5 bg-black transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-black my-1.5 transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-black transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 capitalize text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary" href="/enquiry" className="w-full mt-4">
              enquiry
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
