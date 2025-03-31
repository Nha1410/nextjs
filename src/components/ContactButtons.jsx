"use client";
// components/ContactButtons.jsx
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ContactButtons = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-center gap-3">
      {/* Phone Button */}
      <a
        href="tel:0901234567"
        className={`transform transition-transform duration-700 ease-out ${
          showButtons ? "animate-pulse-scale translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <Image
          src="/images/phone-icon.png"
          alt="Call"
          width={48}
          height={48}
          className="h-12 w-12 transition-transform hover:scale-110 sm:h-14 sm:w-14"
        />
      </a>

      {/* Zalo Button */}
      <a
        href="https://zalo.me/0901234567"
        target="_blank"
        rel="noopener noreferrer"
        className={`transform transition-transform duration-700 ease-out ${
          showButtons ? "animate-pulse-scale translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <Image
          src="/images/zalo-icon.png"
          alt="Zalo"
          width={48}
          height={48}
          className="h-12 w-12 transition-transform hover:scale-110 sm:h-14 sm:w-14"
        />
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-gray-200 sm:h-10 sm:w-10 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-gray-700"
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ContactButtons;
