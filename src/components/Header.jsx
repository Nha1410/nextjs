"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
      <header
        className="sticky top-0 z-50 bg-black shadow-md"
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              MintoMarkets
            </Link>
          </div>

          <nav className="hidden space-x-6 md:flex">
            <Link href="/about" className="text-white transition hover:text-gray-200">
              About Us
            </Link>
            <Link href="/why" className="text-white transition hover:text-gray-200">
              Why Choose Us
            </Link>
            <Link href="/solution" className="text-white transition hover:text-gray-200">
              Our solutions
            </Link>
            <a href="/portfolio" className="text-white transition hover:text-gray-200">
              Our Portfolio
            </a>
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
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dimmed Background */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Slide-in Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full sm:w-3/4 max-w-xs transform transition-transform duration-300 bg-[#111]/90 text-white shadow-lg ${
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
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Why Choose Us", href: "/why" },
              { label: "Our solutions", href: "/solution" },
              { label: "Our Portfolio", href: "/portfolio" },
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
          </nav>
        </div>
      </div>
    </>
  );
}
