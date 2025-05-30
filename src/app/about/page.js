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
      <div className="w-full">
        <Image
          src="/images/about/about_header.png"
          alt="About Us Header"
          width={1920}
          height={800}
          layout="responsive"
          className="w-full"
          priority
        />
      </div>

      <div className="flex w-full flex-col items-center bg-[var(--color-text-red-theme-500)] px-4 py-12 text-center md:px-0">
        <h1
          className="text-2xl font-bold text-white uppercase md:text-4xl lg:text-5xl"
          style={{
            fontFamily: '"Oswald", sans-serif',
            fontWeight: 700,
            letterSpacing: "0.5px",
          }}
        >
          {content.section3.header}
        </h1>
        <p
          className="mt-4 max-w-3xl text-base text-white md:text-lg lg:text-xl"
          style={{
            fontFamily: '"Oswald", sans-serif',
            fontWeight: 400,
          }}
        >
          {content.section3.subHeader}
        </p>
      </div>

      <div className="h-[1px] w-full bg-white/20"></div>

      <div className="container mx-auto px-6 py-16 md:px-12 lg:px-24">
        <div className="text-left">
          <p className="mb-3 text-xl font-semibold tracking-wide text-[var(--color-text-red-theme-500)] uppercase md:text-2xl">
            {content.section3.tag}
          </p>
          <h2
            className="text-2xl font-semibold text-[var(--color-text-red-theme-500)] md:text-3xl"
            style={{
              fontFamily: '"Oswald", sans-serif',
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            {content.section3.title}
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-10 md:flex-row">
          <div className="relative flex flex-1 flex-row overflow-hidden rounded-lg bg-[var(--color-text-red-theme-500)] px-4 pt-4 pb-20 text-white md:px-6 md:pt-6 md:pb-6">
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold md:text-3xl">
                {content.section3.mission.title.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </h2>
              {content.section3.mission.paragraphs.map((p, idx) => (
                <p className="text-justify text-base leading-relaxed md:pr-40 md:text-lg" key={idx}>
                  {p}
                </p>
              ))}
            </div>

            <div className="flex-shrink-0">
              <Image
                src="/images/about/phone.png"
                alt="Phone in Hand"
                width={400}
                height={400}
                className="absolute right-0 bottom-0 h-[350px] w-[350px] md:h-[450px] md:w-[450px] lg:h-[600px] lg:w-[600px] xl:-bottom-14"
                style={{ zIndex: 10 }}
              />
            </div>
          </div>

          <div
            ref={valueRef.ref}
            className="grid flex-1 grid-cols-1 gap-6 tracking-normal lg:grid-cols-2"
          >
            {content.section3.values.map((val, idx) => (
              <div
                key={idx}
                className={`rounded-lg bg-[var(--color-text-red-theme-200)] p-6 transition-all duration-700 ease-out ${valueRef.isInView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <p className="mb-2 text-sm font-semibold text-black">{val.number}</p>
                <h4 className="mb-2 text-lg font-bold whitespace-pre-wrap text-black md:text-xl">
                  {val.title}
                </h4>
                <p className="text-sm leading-relaxed break-words whitespace-pre-wrap text-black md:text-base">
                  {val.desc.trim().replace(/\s+/g, " ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
