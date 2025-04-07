"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const isSolution = pathname === "/solution";

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black shadow-md">
        <div className="container mx-auto flex h-22 items-center justify-between px-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <Image
                src="/images/logo/logo-ann_mode-dark@3x.png"
                alt="Logo"
                width={150}
                height={0}
                className="mr-2"
              />
            </Link>
          </div>

          <nav className="hidden space-x-6 md:flex">
            <Link href="/" className="text-white transition hover:text-gray-200">
              Home
            </Link>
            <Link href="/about" className="text-white transition hover:text-gray-200">
              About Us
            </Link>
            <Link href="/why" className="text-white transition hover:text-gray-200">
              Why Choose Us
            </Link>
            <Link href="/solution" className="text-white transition hover:text-gray-200">
              Our solutions
            </Link>
            <Link href="/portfolio" className="text-white transition hover:text-gray-200">
              Our Portfolio
            </Link>
            <Link href="/contact" className="text-white transition hover:text-gray-200">
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-36 rounded-full bg-white/10 px-3 py-2 pl-9 text-white placeholder-gray-300 transition focus:bg-white/20 focus:outline-none"
              />
              <svg
                className="absolute top-3 left-3 h-4 w-4 text-gray-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            {/* Hamburger Menu */}
            <button
              className="text-white hover:text-gray-200 md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay and Menu always mounted */}
      <div
        className={`fixed inset-0 z-60 transition-opacity duration-300 ${
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Dimmed Background */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-xs transform bg-[#111]/90 text-white shadow-lg transition-transform duration-300 sm:w-3/4 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col space-y-6 px-6 py-4">
            {/* Các navigation link */}
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Why Choose Us", href: "/why" },
              { label: "Our solutions", href: "/solution" },
              { label: "Our Portfolio", href: "/portfolio" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Nút Contact Us ngay sau các nav item */}
            {/* <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 inline-block w-fit rounded-md bg-[var(--color-text-red-theme-500)] px-6 py-2 font-medium text-white transition hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
            >
              Contact Us ↗
            </Link> */}
          </nav>
        </div>
      </div>
    </>
  );
}
