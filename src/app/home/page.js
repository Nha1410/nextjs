"use client";

import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import SolutionsSection from "@/components/SolutionsSection";
import MySwiper from "@/components/MySwiper";
import HomeSwiper from "@/components/HomeSwiper";
import NewsRecruitment from "@/components/NewsRecruitment";
import { useLanguage } from "@/components/LanguageSwitcher";
import { useRef } from "react";
import vi from "../i18n/homePage.vi";
import en from "../i18n/homePage.en";

const SolutionBlock = ({ title, description, image, reverse, content }) => (
  <div
    className={`mb-16 flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-12`}
  >
    <div className="flex justify-center overflow-hidden md:w-1/2">
      <div className="max-w-screen rounded-lg bg-white p-6">
        {image ? (
          <Image
            src={image}
            alt="Slide 1"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>
    </div>
    <div className="text-white md:w-1/2">
      <h3 className="mb-4 text-3xl leading-tight font-semibold text-[var(--color-text-red-theme-500)]">
        {title}
      </h3>
      <p className="mb-5 text-justify leading-relaxed text-black md:text-base">{description}</p>
      <Link
        href={"/solution"}
        className="rounded bg-[var(--color-text-red-theme-500)] px-6 py-3 text-white italic shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
      >
        {content?.solutions?.button}
      </Link>
    </div>
  </div>
);

export default function Home() {
  const { language } = useLanguage();
  const whoWeAreRef = useRef(null);
  const scrollToWhoWeAre = () => {
    whoWeAreRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const content = language === "vi" ? vi : en;

  return (
    <main>
      <section className="relative -mt-16 h-screen w-full overflow-hidden">
        {/* Swiper Background */}
        <div className="absolute inset-0 z-0">
          <HomeSwiper />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 mx-10 flex h-full items-center justify-center pt-20">
          <div className="max-w-4xl text-center text-white drop-shadow-md">
            <h1 className="mb-6 leading-tight font-bold">
              <span className="text-[26px] text-[#fffffffff] md:text-[50px]">
                {content.hero.title1}
              </span>
              <br />
            </h1>
            <div className="mb-6 text-center text-xl font-semibold text-white">
              <p>{content.hero.description}</p>
              <p>{content.hero.description2}</p>
            </div>
            <button
              onClick={scrollToWhoWeAre}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-text-red-theme-500)] px-8 py-3 text-xl font-medium text-white italic shadow-md transition hover:cursor-pointer hover:bg-white hover:text-red-600"
            >
              {content.hero.button}
            </button>
          </div>
        </div>
      </section>

      <section ref={whoWeAreRef} className="overflow-hidden bg-white py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start px-1 md:flex-row md:items-center">
          <div className="md:w-7/12">
            <p className="mb-10 text-xl font-semibold tracking-wide text-[var(--color-text-red-theme-500)] uppercase md:text-2xl">
              {content.whoWeAre.tag}
            </p>
            <h2 className="mb-4 text-[20px] leading-snug font-bold md:text-[28px]">
              <span className="text-[var(--color-text-red-theme-500)]">
                {content.whoWeAre.title}
              </span>
            </h2>
            {content.whoWeAre.paragraphs.map((p, i) => (
              <p key={i} className="mb-6 text-justify text-base text-black">
                {p}
              </p>
            ))}
            <Link
              href="/about"
              className="rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 font-medium text-white italic shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)] md:text-base"
            >
              {content.whoWeAre.button}
            </Link>
          </div>
          <div className="mt-8 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end">
            <Image
              src="/images/home/improve_v3.png"
              alt="Let your brand speak"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xl leading-tight font-semibold text-[var(--color-text-red-theme-500)] uppercase md:text-2xl">
                {content.solutions.sectionTitle}
              </p>
            </div>
            <div className="flex flex-col justify-center md:justify-end">
              <p className="mb-4 text-justify leading-relaxed text-black md:text-base">
                {content.solutions.intro1}
              </p>
              <p className="mb-6 text-justify leading-relaxed text-black md:text-base">
                {content.solutions.intro2}
              </p>
            </div>
          </div>
          {content.solutions.blocks.map((block, index) => (
            <SolutionBlock key={index} {...block} content={content} />
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-text-red-theme-500)] py-16 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {content.discover.map((line, i) => (
              <div key={i} className="contents">
                <div className="flex flex-col items-center justify-center px-5 text-center">
                  <h3 className="mb-4 text-xl leading-relaxed font-semibold md:text-2xl">{line}</h3>
                </div>
                {i < content.discover.length - 1 && (
                  <div className="mx-auto hidden h-20 w-[2px] bg-white md:block" />
                )}
                {i < content.discover.length - 1 && (
                  <div className="my-1 h-[2px] w-full bg-white md:hidden"></div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href={"/contact"}
              className="rounded border border-white bg-transparent px-8 py-3 text-lg font-medium text-white italic transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
            >
              {content.cta}
            </Link>
          </div>
        </div>
      </section>

      <ClientsSection />
      <NewsRecruitment />
    </main>
  );
}
