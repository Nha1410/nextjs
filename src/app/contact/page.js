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
    <section className="relative w-full bg-white bg-cover bg-center">
      <div className="container mx-auto px-6 py-16 md:px-24 lg:px-24">
        <div className="text-left">
          <p className="mb-4 text-sm font-light tracking-wide text-black uppercase">Get in Touch</p>
          <h2 className="text-3xl font-light text-black md:text-5xl lg:text-6xl">
            Contact Information
          </h2>
        </div>

        <div ref={topRef.ref} className="mt-8 flex flex-col items-center gap-10 md:flex-row">
          {/* Hình ảnh bên trái */}
          <div
            className={`order-1 flex flex-1 justify-center transition-all duration-1000 ease-out ${topRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <Image
              src="/images/contact/Contact_Us.png"
              alt="Main Team Image"
              width={500}
              height={500}
              className="w-full max-w-xs rounded-xl md:mb-[90px] md:max-w-sm lg:max-w-md"
            />
          </div>

          {/* Thông tin bên phải */}
          <div
            className={`order-2 w-full max-w-full flex-1 transition-all duration-1000 ease-out ${topRef.isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <h3 className="mb-6 text-3xl font-extrabold text-[var(--color-text-red-theme-500)] sm:text-4xl md:text-6xl">
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
              <span className="animate-pulse">|</span>
            </h3>

            {/* Box chứa thông tin */}
            <div className="rounded-xl border border-gray-200 bg-[var(--color-bg-dark-900)] p-8 shadow-lg transition-all hover:scale-[1.02]">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
                {/* Contact Info */}
                <div className="space-y-6 sm:col-span-3">
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
      </div>
    </section>
  );
}
