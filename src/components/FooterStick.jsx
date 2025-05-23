// components/Footer.jsx
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

export default function Footer() {
  return (
    <div className="relative" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="max-h-screen w-full overflow-y-auto">
        <footer className="flex flex-col justify-evenly bg-black py-12 text-white">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-2 px-4 md:grid-cols-2 md:px-1">
            {/* Left Side: Contact CTA */}
            <div className="max-w-xl space-y-8 text-left md:text-start">
              <div>
                <h2
                  className={`text-3xl leading-tight font-bold tracking-wide md:text-4xl ${oswald.className}`}
                >
                  LET’S START TOGETHER
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
              >
                Let’s talk ↗
              </Link>
            </div>

            {/* Right Side: Info + Social */}
            <div className="grid grid-cols-1 gap-8 pt-6 sm:grid-cols-4 md:pt-0">
              {/* Contact Info: 3/4 on sm+ */}
              <div className="space-y-4 sm:col-span-3">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-6 w-6 text-white" />
                  <div>
                    <p className="text-base font-semibold text-[var(--color-text-red-theme-500)]">
                      Address
                    </p>
                    <p className="text-base leading-relaxed text-white">
                      Feliza Villa Khang Điền, <br />
                      Số 2 Đường 28B, Phước Long, Thủ Đức, TP. HCM
                    </p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-white" />
                  <div>
                    <p className="text-base font-semibold text-[var(--color-text-red-theme-500)]">
                      Phone
                    </p>
                    <p className="text-base leading-relaxed text-white">
                      <a href="tel:0976305499" className="hover:underline">
                        097 6305499
                      </a>
                    </p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-white" />
                  <div>
                    <p className="text-base font-semibold text-[var(--color-text-red-theme-500)]">
                      Email
                    </p>
                    <p className="text-base leading-relaxed text-white">
                      <a href="mailto:hello.annmultimedia@gmail.com" className="hover:underline">
                        hello.annmultimedia@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links: 1/4 on sm+ */}
              <div className="flex flex-col items-start gap-2 sm:col-span-1">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                  Facebook
                </a>
                {/* LinkedIn */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                  LinkedIn
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mx-auto mt-4 w-full max-w-6xl px-4 text-center text-sm text-gray-400 md:px-0 md:text-left">
            <hr className="my-4 border-t border-gray-700" />© 2025 ANN Multimedia
          </div>
        </footer>
      </div>
    </div>
  );
}
