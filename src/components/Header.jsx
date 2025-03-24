"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isSolution = pathname === "/solution";

  return (
    <header
      className={`absolute top-0 left-0 z-50 w-full border-b border-white/50 ${
        isHome || isSolution ? "bg-[#000000]/20" : "bg-[#000000]"
      }`}
    >
      <div className="container mx-auto flex h-30 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            MintoMarkets
          </Link>
        </div>

        <nav className="hidden space-x-6 md:flex">
          <Link href="/" className="text-white transition hover:text-gray-200">
            Home
          </Link>
          <Link href="/solution" className="text-white transition hover:text-gray-200">
            Our solutions
          </Link>
          <a href="#" className="text-white transition hover:text-gray-200">
            Service
          </a>
          <a href="#" className="text-white transition hover:text-gray-200">
            Project
          </a>
          <Link href="/about" className="text-white transition hover:text-gray-200">
            About Us
          </Link>
          <Link href="/why" className="text-white transition hover:text-gray-200">
            Why Choose Us
          </Link>
          <a href="#" className="text-white transition hover:text-gray-200">
            More
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
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          <button className="text-white hover:text-gray-200 md:hidden">
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
  );
}
