"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import useInView from "../hooks/useInView";
import { useLanguage } from "../../components/LanguageSwitcher";
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
          <p className="mb-4 text-sm font-light tracking-wide text-black uppercase">
            {content.tag}
          </p>
          <h2 className="text-3xl font-light text-black md:text-5xl lg:text-6xl">
            {content.title}
          </h2>
        </div>

        <div ref={topRef.ref} className="mt-8 flex flex-col items-center gap-10 md:flex-row">
          <div
            className={`order-1 flex flex-1 justify-center transition-all duration-1000 ease-out ${topRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <Image
              src="/about1.png"
              alt="Main Team Image"
              width={500}
              height={500}
              className="w-full max-w-xs rounded-xl md:max-w-sm lg:max-w-md"
            />
          </div>

          <div
            className={`order-2 w-full max-w-full flex-1 space-y-6 transition-all duration-1000 ease-out ${topRef.isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <h3 className="text-3xl font-extrabold text-[var(--color-text-red-theme-500)] sm:text-4xl md:text-6xl">
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

            <form className="w-full space-y-4 pb-20 text-[#03052e]">
              <div>
                <label className="text-sm font-semibold">{content.form.name}</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-4 py-2"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">{content.form.email}</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-4 py-2"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">{content.form.phone}</label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-4 py-2"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">{content.form.message}</label>
                <textarea
                  rows={4}
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-4 py-2"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">{content.form.budget}</label>
                <select
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-4 py-2"
                >
                  {content.form.budgetOptions.map((option, idx) => (
                    <option key={idx} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-[var(--color-text-red-theme-500)] px-6 py-3 font-semibold text-white transition hover:border-[var(--color-text-red-theme-500)] hover:bg-white hover:text-[var(--color-text-red-theme-500)] sm:w-auto"
              >
                {content.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
