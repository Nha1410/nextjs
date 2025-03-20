// import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
// app/layout.js

export const metadata = {
  title: "MintoMarkets Landing",
  description: "Landing page demo with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-800">
        {/* HEADER */}
        <header className="absolute top-0 left-0 w-full z-50 bg-[#000000]/20 border-b border-white/50">
          {/* Thanh menu chính */}
          <div className="container mx-auto px-4 flex items-center justify-between h-30">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-white text-2xl font-bold">
                MintoMarkets
              </Link>
            </div>

            {/* Menu (ẩn trên mobile, hiển thị trên md) */}
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-white hover:text-gray-200 transition">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition">
                Market
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition">
                Service
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition">
                Project
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition">
                Report & Insight
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition">
                About Us
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition">
                More
              </a>
            </nav>

            {/* Thanh tìm kiếm + nút Contact */}
            <div className="flex items-center space-x-4">
              {/* Search box (tùy chọn) */}
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-white/10 text-white placeholder-gray-300 px-3 py-2 rounded-full pl-9 focus:outline-none focus:bg-white/20 transition w-36"
                />
                {/* Icon search */}
                <svg
                  className="w-4 h-4 absolute top-3 left-3 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>

              {/* Hamburger menu (hiển thị trên mobile) - tùy chọn */}
              <button className="md:hidden text-white hover:text-gray-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* NỘI DUNG CHÍNH */}
        {children}

        {/* FOOTER (nếu có) */}
      </body>
    </html>
  );
}
