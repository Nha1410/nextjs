"use client"
// components/ContactButtons.jsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center gap-3 z-50">
      {/* Phone Button */}
      <a
        href="tel:0901234567"
        className={`transition-transform duration-700 ease-out transform ${
          showButtons ? 'translate-y-0 opacity-100 animate-pulse-scale' : 'translate-y-10 opacity-0'
        }`}
      >
        <Image
          src="/images/phone-icon.png"
          alt="Call"
          width={48}
          height={48}
          className="w-12 h-12 sm:w-14 sm:h-14 hover:scale-110 transition-transform"
        />
      </a>

      {/* Zalo Button */}
      <a
        href="https://zalo.me/0901234567"
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-transform duration-700 ease-out transform ${
          showButtons ? 'translate-y-0 opacity-100 animate-pulse-scale' : 'translate-y-10 opacity-0'
        }`}
      >
        <Image
          src="/images/zalo-icon.png"
          alt="Zalo"
          width={48}
          height={48}
          className="w-12 h-12 sm:w-14 sm:h-14 hover:scale-110 transition-transform"
        />
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-md flex flex-col items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-gray-700"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
          <span className="text-xs font-semibold text-gray-700 leading-none mt-0.5">TOP</span>
        </button>
      )}
    </div>
  );
};

export default ContactButtons;