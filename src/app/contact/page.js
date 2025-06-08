"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import useInView from "../hooks/useInView";
import { useLanguage } from "../../components/LanguageSwitcher";
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from "lucide-react";
import vi from "../i18n/contact.vi";
import en from "../i18n/contact.en";

export default function Contact() {
  const { language } = useLanguage();
  const content = language === "vi" ? vi : en;

  const topRef = useInView();
  const fullHeadline = content.headline;
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!topRef.isInView) return;
    if (charIndex <= fullHeadline.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullHeadline.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, topRef.isInView]);

  return (
    <section className="relative flex w-full flex-1 overflow-auto bg-white bg-cover bg-center md:overflow-hidden">
      <div
        ref={topRef.ref}
        className="flex w-full flex-col items-center justify-center md:flex-row"
      >
        {/* Hình ảnh bên trái */}
        <div
          className={`order-1 flex h-full flex-1 items-center justify-center transition-all duration-1000 ease-out ${topRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
        >
          <div className="h-full max-h-[100%] w-full max-w-[100%]">
            <img
              src="/images/contact/2.png"
              alt="Main Team Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Thông tin bên phải */}
        <div
          className={`order-2 w-full max-w-full flex-1 transition-all duration-1000 ease-out ${topRef.isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
        >
          <h3
            className="px-8 py-6 text-3xl font-extrabold text-[var(--color-text-red-theme-500)] sm:text-4xl md:text-6xl"
            style={{
              fontFamily: '"Oswald", sans-serif',
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            {displayedText.split("-").map((part, idx) => (
              <span key={idx}>
                {part}
                {idx < displayedText.split("-").length - 1 && (
                  <>
                    <span> -</span>
                    <br />
                  </>
                )}
              </span>
            ))}
          </h3>

          {/* Box chứa thông tin */}
          <div className="mx-8 my-8 rounded-xl border border-gray-200 bg-[var(--color-bg-dark-900)] p-8 shadow-lg transition-all">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
              {/* Contact Info */}
              <div className="space-y-6 sm:col-span-3">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-400">Email</p>
                    <p className="text-sm leading-relaxed text-black">
                      <a href="mailto:hello.annmultimedia@gmail.com" className="hover:underline">
                        hello.annmultimedia@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-400">Phone</p>
                    <p className="text-sm leading-relaxed text-black">
                      <a href="tel:0976305499" className="hover:underline">
                        097 6305499
                      </a>
                    </p>
                  </div>
                </div>
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-6 w-6 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-400">Address</p>
                    <p className="text-sm leading-relaxed text-black">
                      Feliza Villa Khang Điền, <br />
                      Số 2 Đường 28B, Phước Long, TP Thủ Đức, TP. HCM.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col items-start gap-4 sm:col-span-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 transition-all hover:scale-110 hover:text-blue-500"
                >
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                  Facebook
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 transition-all hover:scale-110 hover:text-blue-700"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 transition-all hover:scale-110 hover:text-pink-500"
                >
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
