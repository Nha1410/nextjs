"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { LanguageSelector } from "./LanguageSwitcher";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const isSolution = pathname === "/solution";
  const getNavItemClass = (href) => {
    const isActive = pathname === href;
    return `px-4 py-2 rounded transition hover:bg-gray-700 hover:text-white ${
      isActive ? "bg-[var(--color-text-red-theme-500)] text-white " : "text-white"
    }`;
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black shadow-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo/logo-ann_mode-dark@3x.png"
                alt="Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex md:flex-1 md:justify-center md:space-x-3">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Why Choose Us", href: "/why" },
              { label: "Our Solutions", href: "/solution" },
              // { label: "Our Portfolio", href: "/portfolio" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className={getNavItemClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right utilities */}
          <div className="flex items-center space-x-3">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-36 rounded-full bg-white/10 px-3 py-2 pl-9 text-white placeholder-gray-300 transition focus:bg-white/20 focus:outline-none"
              />
              <svg
                className="absolute top-2.5 left-3 h-4 w-4 text-gray-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            <div className="">
              <LanguageSelector />
            </div>

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

          <nav className="flex flex-col space-y-4 px-6 py-4">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Why Choose Us", href: "/why" },
              { label: "Our Solutions", href: "/solution" },
              // { label: "Our Portfolio", href: "/portfolio" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded px-4 py-2 text-lg transition hover:bg-gray-700 hover:text-white ${
                    isActive ? "bg-red-600 font-semibold text-white" : "text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
