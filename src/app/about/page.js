"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import useInView from "../hooks/useInView";
import StatCount from "../../components/StatCount";
import { useLanguage } from "../../components/LanguageSwitcher";
import vi from "../i18n/about.vi";
import en from "../i18n/about.en";

export default function About() {
  const { language } = useLanguage();
  const content = language === "vi" ? vi : en;

  const topRef = useInView();
  const bottomRef = useInView();
  const valueRef = useInView();

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
          <p className="mb-4 text-sm font-semibold tracking-wide text-[var(--color-text-red-theme-500)] uppercase">
            {content.section1.tag}
          </p>
          <h2 className="text-3xl font-semibold text-[var(--color-text-red-theme-500)] md:text-5xl lg:text-6xl">
            {content.section1.title}
          </h2>
        </div>

        <div ref={topRef.ref} className="mt-8 flex flex-col items-center gap-10 md:flex-row">
          <div
            className={`order-1 flex flex-1 justify-center transition-all duration-1000 ease-out ${topRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <Image
              src="/images/about/Au1.png"
              alt="Main Team Image"
              width={600}
              height={600}
              className="w-full max-w-xs rounded-xl md:max-w-sm lg:max-w-md"
            />
          </div>

          <div
            className={`order-2 flex-1 space-y-6 text-left transition-all duration-1000 ease-out ${topRef.isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <h3
              className="mb-6 leading-tight font-bold text-[var(--color-text-red-theme-500)]"
              style={{ width: "max-content" }}
            >
              {content.section1.headline.map((line, idx) => (
                <p key={idx} className="text-[20px] md:text-[44px]">
                  {line}
                </p>
              ))}
            </h3>
            <p className="text-justify text-base leading-relaxed text-black md:text-xl">
              {content.section1.description}
            </p>
          </div>
        </div>

        <div ref={bottomRef.ref} className="mt-16 flex flex-col items-center gap-10 md:flex-row">
          <div
            className={`order-1 flex-1 space-y-6 px-0 text-left transition-all duration-1000 ease-out ${bottomRef.isInView ? "opacity-100" : "opacity-0"}`}
          >
            <h3
              className={`text-[20px] leading-snug font-bold text-[var(--color-text-red-theme-500)] transition-all duration-700 md:text-[44px] ${bottomRef.isInView ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
            >
              {content.section2.headline.map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </h3>
            <p
              className={`text-justify text-base leading-relaxed text-black transition-all delay-300 duration-700 md:text-xl ${bottomRef.isInView ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
            >
              {content.section2.description}
            </p>
          </div>

          <div
            className={`order-2 flex flex-1 justify-center transition-all duration-1000 ease-out ${bottomRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <Image
              src="/images/about/Au2.png"
              alt="Thinkers"
              width={500}
              height={500}
              className="w-full max-w-xs rounded-xl md:max-w-sm lg:max-w-md"
            />
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-white/20"></div>

      <div className="container mx-auto px-6 py-16 md:px-12 lg:px-24">
        <div className="text-left">
          <p className="mb-3 text-sm font-semibold tracking-wide text-[var(--color-text-red-theme-500)] uppercase">
            {content.section3.tag}
          </p>
          <h2 className="text-2xl font-semibold text-[var(--color-text-red-theme-500)] md:text-3xl">
            {content.section3.title}
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-10 md:flex-row">
          <div className="relative flex-1 overflow-hidden rounded-lg bg-[var(--color-text-red-theme-500)] px-6 pt-8 pb-32 text-white md:px-8 md:pt-8 md:pb-8">
            <div className="space-y-4">
              <h2 className="text-xl font-bold md:text-2xl">
                {content.section3.mission.title.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </h2>
              {content.section3.mission.paragraphs.map((p, idx) => (
                <p className="md:text-base" key={idx}>
                  {p}
                </p>
              ))}
            </div>

            {/* ONE image used for all screen sizes */}
            <Image
              src="/images/about/phone.png"
              alt="Phone in Hand"
              width={320}
              height={320}
              className="absolute right-0 bottom-0 w-[220px] md:w-[280px] lg:w-[400px]"
              style={{ zIndex: 10 }}
            />
          </div>

          <div
            ref={valueRef.ref}
            className="grid flex-1 grid-cols-1 gap-6 text-justify lg:grid-cols-2"
          >
            {content.section3.values.map((val, idx) => (
              <div
                key={idx}
                className={`rounded-lg bg-[var(--color-text-red-theme-200)] p-6 transition-all duration-700 ease-out ${valueRef.isInView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <p className="mb-2 text-sm font-semibold text-black">{val.number}</p>
                <h4 className="text-lg leading-snug font-bold text-black md:text-xl">
                  {val.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-black md:text-base">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
