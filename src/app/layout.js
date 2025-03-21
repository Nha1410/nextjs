import Link from "next/link";
import { Poppins } from "next/font/google";
import "./globals.css";
// app/layout.js

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "MintoMarkets Landing",
  description: "Landing page demo with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans text-gray-800">
        {/* HEADER */}
        <header className="absolute top-0 left-0 z-50 w-full border-b border-white/50 bg-[#000000]/20">
          {/* Thanh menu chính */}
          <div className="container mx-auto flex h-30 items-center justify-between px-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">
                MintoMarkets
              </Link>
            </div>

            {/* Menu (ẩn trên mobile, hiển thị trên md) */}
            <nav className="hidden space-x-6 md:flex">
              <a href="#" className="text-white transition hover:text-gray-200">
                Home
              </a>
              <a href="#" className="text-white transition hover:text-gray-200">
                Market
              </a>
              <a href="#" className="text-white transition hover:text-gray-200">
                Service
              </a>
              <a href="#" className="text-white transition hover:text-gray-200">
                Project
              </a>
              <a href="#" className="text-white transition hover:text-gray-200">
                Report & Insight
              </a>
              <a href="#" className="text-white transition hover:text-gray-200">
                About Us
              </a>
              <a href="#" className="text-white transition hover:text-gray-200">
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
                  className="w-36 rounded-full bg-white/10 px-3 py-2 pl-9 text-white placeholder-gray-300 transition focus:bg-white/20 focus:outline-none"
                />
                {/* Icon search */}
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

              {/* Hamburger menu (hiển thị trên mobile) - tùy chọn */}
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

        {/* NỘI DUNG CHÍNH */}
        {children}

        {/* FOOTER (nếu có) */}
      </body>
    </html>
  );
}
