"use client";

import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import SolutionsSection from "@/components/SolutionsSection";
import MySwiper from "@/components/MySwiper";
import { Oswald } from "next/font/google";
import HomeSwiper from "@/components/HomeSwiper";
import NewsRecruitment from "@/components/NewsRecruitment";
import { useLanguage } from "@/components/LanguageSwitcher";
import { useRef } from "react";
import vi from "../i18n/homePage.vi";
import en from "../i18n/homePage.en";
import { motion } from "framer-motion";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const SolutionBlock = ({ title, description, image, reverse, content, isList }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className="mb-16 grid grid-cols-1 items-center gap-8 md:grid-cols-2"
  >
    {/* Image block */}
    <motion.div
      className={`flex w-full justify-center ${reverse ? "md:order-2" : "md:order-1"}`}
      variants={fadeUp}
    >
      <div className="w-full overflow-hidden rounded-2xl">
        {image && (
          <Image
            src={image}
            alt="Slide"
            width={1400}
            height={1000}
            className="h-full w-full rounded-2xl object-cover shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110"
          />
        )}
      </div>
    </motion.div>

    {/* Text block */}
    <motion.div
      className={`w-full text-white ${reverse ? "md:order-1" : "md:order-2"}`}
      variants={fadeUp}
    >
      <h3 className="mb-4 text-3xl leading-tight font-semibold text-[var(--color-text-red-theme-500)]">
        {title}
      </h3>
      {isList ? (
        <ul className="mb-5 list-disc space-y-2 pl-5 leading-relaxed text-black md:text-base">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="mb-5 text-justify leading-relaxed text-black md:text-base">{description}</p>
      )}
      <Link
        href="/solution"
        className="rounded bg-[var(--color-text-red-theme-500)] px-6 py-3 text-white italic shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
      >
        {content?.solutions?.button}
      </Link>
    </motion.div>
  </motion.div>
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
      {/* Swiper section giữ nguyên */}
      <section className="relative h-[calc(100vh-5rem)] w-full overflow-hidden">
        <div className="absolute inset-0 z-2">
          <HomeSwiper />
        </div>

        <div className="relative z-10 mx-10 -mt-16 flex h-full items-center justify-center">
          <motion.div
            className="max-w-4xl text-center text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className={`mb-6 leading-tight font-bold tracking-wide ${oswald.className}`}>
              <motion.span
                className="text-[26px] text-[#fffffffff] md:text-[50px]"
                variants={fadeUp}
              >
                {content.hero.title1}
              </motion.span>
              <br />
            </h1>
            <motion.div
              className="mb-6 text-center text-xl font-semibold text-white"
              variants={fadeUp}
            >
              <p>{content.hero.description}</p>
              <p>{content.hero.description2}</p>
            </motion.div>
            <motion.button
              onClick={scrollToWhoWeAre}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-text-red-theme-500)] px-8 py-3 text-xl font-medium text-white italic shadow-md transition hover:cursor-pointer hover:bg-white hover:text-red-600"
              variants={fadeUp}
            >
              {content.hero.button}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Section who we are */}
      <section
        ref={whoWeAreRef}
        className="overflow-hidden bg-[#FFF8F8] bg-[url('/images/home/about-us-bg.png')] bg-cover bg-center bg-no-repeat py-16"
      >
        <motion.div
          className="md:items-left mx-auto flex w-full flex-col items-start px-2 md:grid md:grid-cols-2 md:px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideFromLeft}
        >
          <div className="items-start p-4 md:flex md:flex-col md:p-0 xl:items-center">
            <div className="mb-10 ml-[-420px] text-xl font-semibold tracking-wide text-[var(--color-text-red-theme-500)] md:text-5xl">
              {content.whoWeAre.tag}
            </div>
            <div className="ml-[-70px]">
              <h2 className="mb-4 text-[20px] leading-snug font-bold md:text-[28px]">
                <span className="text-[var(--color-text-red-theme-500)]">
                  {content.whoWeAre.title}
                </span>
              </h2>
            </div>
            {content.whoWeAre.paragraphs.map((p, i) => (
              <div className="ml-[-90px]" key={i}>
                <motion.p
                  className="mb-6 text-justify text-[18px] text-black md:max-w-[550px]"
                  custom={i}
                  variants={fadeUp}
                >
                  {p}
                </motion.p>
              </div>
            ))}
            <Link
              href="/about"
              className="mt-4 ml-[-90px] rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 font-medium text-white italic shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)] md:text-base"
            >
              {content.whoWeAre.button}
            </Link>
          </div>
          <motion.div
            className="mt-8 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end"
            variants={fadeUp}
          ></motion.div>
        </motion.div>
      </section>

      {/* Section why choose us */}
      <section
        ref={whoWeAreRef}
        className="overflow-hidden bg-[#FFF8F8] bg-[url('/images/home/why-choose-us.png')] bg-cover bg-center bg-no-repeat py-16"
      >
        <motion.div
          className="md:items-left mx-auto flex w-full flex-col items-start px-2 md:grid md:grid-cols-2 md:px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideFromLeft}
        >
          <motion.div
            className="mt-8 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end"
            variants={fadeUp}
          ></motion.div>
          <div className="items-start p-4 md:flex md:flex-col md:p-0 xl:items-center">
            <div className="mb-10 ml-[420px] text-xl font-semibold tracking-wide text-[var(--color-text-red-theme-500)] md:text-5xl">
              {content.whoWeAre.tag}
            </div>
            <div className="ml-[70px]">
              <h2 className="mb-4 text-[20px] leading-snug font-bold md:text-[28px]">
                <span className="text-[var(--color-text-red-theme-500)]">
                  {content.whoWeAre.title}
                </span>
              </h2>
            </div>
            {content.whoWeAre.paragraphs.map((p, i) => (
              <div className="ml-[50px]" key={i}>
                <motion.p
                  className="mb-6 text-justify text-[18px] text-black md:max-w-[550px]"
                  custom={i}
                  variants={fadeUp}
                >
                  {p}
                </motion.p>
              </div>
            ))}
            <Link
              href="/about"
              className="mt-4 ml-[90px] rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 font-medium text-white italic shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)] md:text-base"
            >
              {content.whoWeAre.button}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Section video */}
      <section className="relative mt-10 h-screen overflow-hidden p-10">
        <Link
          className="absolute bottom-14 left-1/2 z-20 mt-4 -translate-x-1/2 rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 font-medium text-white italic shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)] md:text-base"
          href="/solution"
        >
          {content.video.button}
        </Link>

        {/* Video Background */}
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover">
            <source src="/videos/our solution video.mp4" type="video/mp4" />
          </video>
          {/* Overlay để làm tối video và làm nổi bật nội dung */}
          {/* <div className="absolute inset-0 bg-black/50"></div> */}
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              {content.video?.title || "Discover Our Creative Process"}
            </h2>
            <p className="mb-8 max-w-2xl text-lg text-white/90">
              {content.video?.description || "Watch how we bring ideas to life through innovation and creativity"}
            </p>
            <button
              className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-lg font-medium text-white transition hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
              onClick={() => {}}
            >
              {content.video?.button || "Watch Video"}
            </button> */}
          </motion.div>
        </div>
      </section>

      {/* Section discover */}
      {/* <section className="bg-[var(--color-text-red-theme-500)] py-16 text-white">
        <motion.div
          className="container mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideFromLeft}
        >
          <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {content.discover.map((line, i) => (
              <div key={i} className="contents">
                <motion.div
                  className="flex flex-col items-center justify-center px-5 text-center"
                  custom={i}
                  variants={fadeUp}
                >
                  <h3 className="mb-4 text-xl leading-relaxed font-semibold md:text-2xl">{line}</h3>
                </motion.div>
                {i < content.discover.length - 1 && (
                  <>
                    <div className="mx-auto hidden h-20 w-[2px] bg-white md:block" />
                    <div className="my-1 h-[2px] w-full bg-white md:hidden"></div>
                  </>
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
        </motion.div>
      </section> */}

      <ClientsSection />
      <NewsRecruitment />
    </main>
  );
}
