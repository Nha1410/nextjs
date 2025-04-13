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
          <p className="mb-4 text-sm font-light tracking-wide text-black uppercase">
            {content.section1.tag}
          </p>
          <h2 className="text-3xl font-light text-black md:text-5xl lg:text-6xl">
            {content.section1.title}
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
            className={`order-2 flex-1 space-y-6 text-left transition-all duration-1000 ease-out ${topRef.isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <h3
              className="mb-6 leading-tight font-bold text-[var(--color-text-red-theme-500)]"
              style={{ width: "max-content" }}
            >
              {content.section1.headline.map((line, idx) => (
                <p key={idx} className="text-[20px] md:text-[40px]">
                  {line}
                </p>
              ))}
            </h3>
            <p className="text-justify text-base leading-relaxed text-black md:text-lg">
              {content.section1.description}
            </p>
          </div>
        </div>

        <div ref={bottomRef.ref} className="mt-16 flex flex-col items-center gap-10 md:flex-row">
          <div
            className={`order-1 flex-1 space-y-6 px-0 text-left transition-all duration-1000 ease-out ${bottomRef.isInView ? "opacity-100" : "opacity-0"}`}
          >
            <h3
              className={`text-[20px] leading-snug font-bold text-[var(--color-text-red-theme-500)] transition-all duration-700 md:text-[40px] ${bottomRef.isInView ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
            >
              {content.section2.headline.map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </h3>
            <p
              className={`text-justify text-base leading-relaxed text-black transition-all delay-300 duration-700 md:text-lg ${bottomRef.isInView ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
            >
              {content.section2.description}
            </p>
          </div>

          <div
            className={`order-2 flex flex-1 justify-center transition-all duration-1000 ease-out ${bottomRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <Image
              src="/about2.png"
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
          <p className="mb-3 text-sm font-light tracking-wide text-black uppercase">
            {content.section3.tag}
          </p>
          <h2 className="text-2xl font-light text-black md:text-3xl">{content.section3.title}</h2>
        </div>

        <div className="mt-10 flex flex-col gap-10 md:flex-row">
          <div className="flex-1 space-y-4 rounded-lg bg-[var(--color-text-red-theme-500)] p-6 text-justify text-white md:p-8">
            <h2 className="text-2xl leading-snug font-bold md:text-3xl">
              {content.section3.mission.title.map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </h2>
            {content.section3.mission.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
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

      <div className="container mx-auto px-6 py-16 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {content.stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-2 text-center text-black md:items-start md:text-left"
            >
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-xl border-1 border-gray-200 bg-gray-100 shadow-md">
                <Image src={stat.icon} alt={stat.label} width={48} height={48} />
              </div>
              <div className="text-base font-medium">{stat.label}</div>
              <div className="text-3xl font-extrabold text-[var(--color-text-red-theme-500)]">
                <StatCount end={stat.count} suffix="+" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
