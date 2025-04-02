// components/Footer.jsx
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <div
      className="relative min-h-[650px]" // giữ clipPath và padding tổng
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 left-0 max-h-screen w-full overflow-y-auto">
        <footer className="flex flex-col justify-between bg-black py-12 text-white">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-6 px-4 md:grid-cols-2 md:px-0">
            {/* Left Side: Contact + CTA */}
            <div className="max-w-xl space-y-8 text-left">
              <div>
                <h4 className="mb-1 text-sm text-gray-300">Contact</h4>
                <h2 className="text-4xl leading-tight font-semibold md:text-5xl">
                  Let’s start
                  <br />
                  creating together
                </h2>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
              >
                Let’s talk ↗
              </Link>

              <hr className="my-4 border-t border-gray-700" />

              {/* Contact Info */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-400">Address</p>
                    <p className="text-sm leading-relaxed text-white">
                      5 Nguyen Gia Thieu St., Vo Thi Sau ward, Dist. 3, Ho Chi Minh City, Vietnam
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-400">Phone</p>
                    <p className="text-sm leading-relaxed text-white">
                      <a href="tel:+84908886815" className="hover:underline">
                        +84 908 886 815
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-400">Email</p>
                    <p className="text-sm leading-relaxed text-white">
                      <a href="mailto:info@minta.inc.jp" className="hover:underline">
                        info@minta.inc.jp
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Navigation + Social */}
            <div className="grid grid-cols-1 gap-8 pt-6 sm:grid-cols-2 md:pt-0">
              {/* Navigation */}
              <div className="flex flex-col gap-2">
                {[
                  { label: "Home", path: "home" },
                  { label: "About Us", path: "about" },
                  { label: "Why Choose Us", path: "why" },
                  { label: "Our Solutions", path: "solution" },
                  { label: "Our Portfolio", path: "portfolio" },
                ].map(({ label, path }) => (
                  <Link key={path} href={`/${path}`} className="text-sm hover:underline">
                    {label}
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-2">
                {[
                  { name: "Facebook", href: "https://facebook.com" },
                  { name: "Linkedin", href: "https://linkedin.com" },
                  { name: "Instagram", href: "https://instagram.com" },
                ].map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {name} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mx-auto mt-10 w-full max-w-6xl px-4 text-left text-sm text-gray-400 md:px-0">
            <hr className="my-4 border-t border-gray-700" />
            2023 Pearl Framer template crafted with love by Dawid Pietrasiak
          </div>
        </footer>
      </div>
    </div>
  );
}
