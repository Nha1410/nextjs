"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import Image from "next/image";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export default function LanguageSwitcher({ children }) {
  const [language, setLanguage] = useState("vi");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) setLanguage(savedLang);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function LanguageSelector({ className = "" }) {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { code: "en", label: "English", flag: "/images/flag-en.png" },
    { code: "vi", label: "Tiếng Việt", flag: "/images/flag-vn.png" },
  ];

  const selected = options.find((opt) => opt.code === language);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex w-full min-w-[120px] items-center justify-between rounded-md bg-white px-2 py-1.5 text-sm font-medium text-black shadow-sm hover:bg-gray-50 focus:outline-none"
      >
        <Image
          src={selected.flag}
          alt={selected.label}
          width={18}
          height={18}
          className="mr-1 inline-block rounded-sm"
        />
        <span className="truncate text-left whitespace-nowrap">{selected.label}</span>
        <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.65a.75.75 0 01-1.1 0l-4.25-4.65a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="ring-opacity-5 absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black focus:outline-none">
          <div className="py-1">
            {options.map((opt) => (
              <button
                key={opt.code}
                onClick={() => {
                  changeLanguage(opt.code);
                  setIsOpen(false);
                }}
                className="flex w-full items-center px-4 py-2 text-left text-sm text-black hover:bg-gray-100"
              >
                <Image
                  src={opt.flag}
                  alt={opt.label}
                  width={20}
                  height={20}
                  className="mr-2 rounded-sm"
                />
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
