"use client";

import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import SolutionsSection from "@/components/SolutionsSection";
import MySwiper from "@/components/MySwiper";
import NewsRecruitment from "@/components/NewsRecruitment";
import { useLanguage } from "@/components/LanguageSwitcher";
import vi from "../i18n/homePage.vi";
import en from "../i18n/homePage.en";

const SolutionBlock = ({
  title,
  description,
  items,
  reverse,
  secondItems = [],
  appendTitle = "",
  secondApppendTitle,
  thirdItems = [],
  content,
}) => (
  <div
    className={`mb-16 flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-12`}
  >
    <div className="flex justify-center overflow-hidden md:w-1/2">
      <div className="max-w-screen rounded-lg bg-white p-6">
        <MySwiper />
      </div>
    </div>
    <div className="text-white md:w-1/2">
      <h3 className="mb-4 text-3xl leading-tight font-semibold text-[var(--color-text-red-theme-500)]">
        {title}
      </h3>
      <p className="mb-5 text-justify leading-relaxed text-black md:text-base">{description}</p>
      <p className="font-semibold text-black md:text-base">{appendTitle}</p>

      {/* Grid cho các mục items và secondItems */}
      <div className="mt-2 mb-2 grid grid-cols-2 gap-10 md:grid-cols-2">
        <ul className="mb-5 list-disc space-y-2 pl-5">
          {items.map((item, index) => (
            <li key={index} className="text-black">
              {item}
            </li>
          ))}
        </ul>
        <ul className="mb-5 list-disc space-y-2 pl-5">
          {secondItems.map((item, idx) => (
            <li key={idx} className="text-black">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-justify font-semibold text-black md:text-base">{secondApppendTitle}</p>

      {/* Grid cho thirdItems */}
      <div className="mt-2 mb-2 grid grid-cols-2 gap-10 md:grid-cols-2">
        <ul className="mb-5 list-disc space-y-2 pl-5">
          {thirdItems[0]?.map((item, index) => (
            <li key={index} className="text-black">
              {item}
            </li>
          ))}
        </ul>
        <ul className="mb-5 list-disc space-y-2 pl-5">
          {thirdItems[1]?.map((item, idx) => (
            <li key={idx} className="text-black">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={"/solution"}
        className="rounded bg-[var(--color-text-red-theme-500)] px-6 py-3 text-white shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
      >
        {content?.solutions?.button}
      </Link>
    </div>
  </div>
);

const CustomSolutionBlock = ({
  title,
  description,
  items,
  secondTitle = "",
  thirdTitle = "",
  secondItems = [],
  content,
}) => (
  <div>
    <div className="mb-16 hidden flex-col items-center gap-12 md:flex md:flex-row">
      <div className="text-white md:ml-12">
        <h3 className="mb-4 text-justify text-3xl leading-tight font-semibold text-[var(--color-text-red-theme-500)]">
          {title}
        </h3>
        <p className="mb-5 leading-relaxed text-black md:text-base">{description}</p>
        <p className="font-semibold text-black md:text-base">{secondTitle}</p>
        <div className="mt-2 flex md:gap-18 lg:gap-24">
          <ul className="mb-5 list-disc space-y-2 pl-5">
            {items.map((item, index) => (
              <li key={index} className="text-black">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="font-semibold text-black md:text-base">{thirdTitle}</p>
        <div className="mt-2 mb-2 flex md:gap-18 lg:gap-24">
          <ul className="mb-5 list-disc space-y-2 pl-5">
            {secondItems.map((item, index) => (
              <li key={index} className="text-black">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={"/solution"}
          className="mt-2 rounded bg-[var(--color-text-red-theme-500)] px-6 py-3 text-white shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
        >
          {content?.solutions?.button}
        </Link>
      </div>
      <div className="flex justify-center md:ml-14">
        <div className="max-w-screen rounded-lg bg-white p-6">
          <MySwiper />
        </div>
      </div>
    </div>
    <div className="mb-16 flex flex-col items-center gap-12 md:hidden md:flex-row">
      <div className="flex justify-center md:ml-8">
        <div className="max-w-screen rounded-lg bg-white p-6">
          <MySwiper />
        </div>
      </div>
      <div className="text-white md:ml-18">
        <h3 className="mb-4 ml-8 text-justify text-3xl leading-tight font-semibold text-[var(--color-text-red-theme-500)]">
          {title}
        </h3>
        <p className="mb-5 leading-relaxed text-black md:text-base">{description}</p>
        <p className="font-semibold text-black md:text-base">{secondTitle}</p>
        <div className="mt-2 flex md:gap-18 lg:gap-24">
          <ul className="mb-5 list-disc space-y-2 pl-5">
            {items.map((item, index) => (
              <li key={index} className="text-black">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="font-semibold text-black md:text-base">{thirdTitle}</p>
        <div className="mt-2 flex md:gap-18 lg:gap-24">
          <ul className="mb-5 list-disc space-y-2 pl-5">
            {secondItems.map((item, index) => (
              <li key={index} className="text-black">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={"/solution"}
          className="mt-2 rounded bg-[var(--color-text-red-theme-500)] px-6 py-3 text-white shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
        >
          {content?.solutions?.button}
        </Link>
      </div>
    </div>
  </div>
);

export default function Home() {
  const { language } = useLanguage();
  const content = language === "vi" ? vi : en;

  return (
    <main>
      <section className="relative -mt-16 h-screen w-full bg-[url('/images/home.png')] bg-cover bg-center">
        <div className="flex h-full w-full items-center justify-center px-4">
          <div className="max-w-3xl text-center text-white drop-shadow-md">
            <h1 className="mb-6 leading-tight font-bold">
              <span className="text-[20px] text-[#fffffffff] md:text-[40px]">
                {content.hero.title1}
              </span>
              <br />
              <span className="text-[20px] md:text-[40px]">{content.hero.title2}</span>
            </h1>
            <p className="mb-6 text-justify text-sm">
              <span className="text-gray-300">{content.hero.description}</span>
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 text-xl font-medium text-white shadow-md transition hover:cursor-pointer hover:bg-white hover:text-red-600"
            >
              {content.hero.button}
            </Link>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-16">
        <div className="container mx-auto flex flex-col items-start px-4 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <p className="mb-2 text-xl font-semibold tracking-wide text-[var(--color-text-red-theme-500)] uppercase md:text-2xl">
              {content.whoWeAre.tag}
            </p>
            <h2 className="mb-4 text-[20px] leading-snug font-bold text-white md:text-[40px]">
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
              className="rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 font-medium text-white shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)] md:text-base"
            >
              {content.whoWeAre.button}
            </Link>
          </div>
          <div className="mt-8 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end">
            <Image
              src="/images/home_solution.avif"
              alt="Let your brand speak"
              width={500}
              height={500}
              className="rounded-lg shadow-xl"
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
          {content.solutions.blocks.map((block, index) =>
            block.type === "CustomSolutionBlock" ? (
              <CustomSolutionBlock key={index} {...block} content={content} />
            ) : (
              <SolutionBlock key={index} {...block} content={content} />
            )
          )}
        </div>
      </section>

      <section className="bg-[var(--color-text-red-theme-500)] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {content.discover.map((line, i) => (
              <div key={i} className="contents">
                <div className="flex flex-col items-center justify-center px-5 text-center">
                  <h3 className="mb-4 text-2xl leading-relaxed font-normal md:text-3xl">{line}</h3>
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
              className="rounded border border-white bg-transparent px-8 py-3 font-medium text-white transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
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
