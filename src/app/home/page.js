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
import SlideContainer from "@/components/SlideContainer";
import Footer from "@/components/FooterStick";

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
    const element = whoWeAreRef.current;
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const content = language === "vi" ? vi : en;

  return (
    <main className="h-full w-full overflow-auto lg:overflow-hidden">
      <div className="mobile-wrapper sm:hidden block">
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
              <Link
                className="group z-20 inline-flex items-center gap-2 rounded-full bg-[var(--color-text-red-theme-500)] px-8 py-3 text-xl font-medium text-white italic shadow-md transition hover:cursor-pointer hover:bg-white hover:text-red-600"
                href="/contact"
                variants={fadeUp}
              >
                {content.hero.button}
              </Link>
            </motion.div>
          </div>
        </section>

        <section ref={whoWeAreRef} className="relative w-full">
          {/* PC Layout (>=1024px): giữ nguyên như hiện tại */}
          <div className="relative hidden w-full lg:block">
            <Image
              src="/images/home/who_we_are-why-choose-us.png"
              alt="Who we are and why choose us"
              width={4600}
              height={1800}
              className="h-full w-full object-cover"
              priority
            />

            {/* WHO WE ARE - Top Left */}
            <div className="absolute top-0 left-0 flex h-[50%] w-1/2 flex-col justify-between bg-white p-6">
              <div>
                <h2
                  className={`mb-2 text-4xl font-extrabold text-[var(--color-text-red-theme-500)] uppercase ${oswald.className}`}
                >
                  {content.whoWeAre.title}
                </h2>
                <p className="text-lg leading-relaxed text-[var(--color-text-red-theme-500)]">
                  {content.whoWeAre.paragraphs[0]}
                </p>
              </div>
              <div className="mt-3 self-end">
                <Link
                  className="rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 text-lg font-medium text-white italic transition hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
                  href="/about"
                >
                  {content.whoWeAre.button}
                </Link>
              </div>
            </div>

            {/* WHY CHOOSE US - Bottom Right */}
            <div className="absolute right-0 bottom-0 flex h-[50%] w-1/2 flex-col justify-between p-6 text-white">
              <div>
                <h2
                  className={`mb-2 text-4xl font-extrabold text-white uppercase ${oswald.className}`}
                >
                  {content.solutions.blocks[0].title}
                </h2>
                <p className="text-lg leading-relaxed">{content.solutions.blocks[0].description}</p>
              </div>
              <div className="mt-3 self-end">
                <Link
                  className="rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 text-lg font-medium text-white italic transition hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
                  href="/why"
                >
                  {content.whoWeAre.button}
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Layout (<1024px): chia theo cột dọc + ảnh riêng */}
          <div className="flex flex-col gap-10 px-4 py-8 lg:hidden">
            {/* WHO WE ARE block */}
            <div className="flex flex-col gap-4">
              <Image
                src="/images/home/res1.png"
                alt="Who we are"
                width={800}
                height={600}
                className="w-full rounded-md"
              />
              <div>
                <h2
                  className={`text-2xl font-extrabold text-[var(--color-text-red-theme-500)] uppercase ${oswald.className}`}
                >
                  {content.whoWeAre.title}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-[var(--color-text-red-theme-500)]">
                  {content.whoWeAre.paragraphs[0]}
                </p>
                <Link
                  className="mt-4 inline-block rounded-full bg-[var(--color-text-red-theme-500)] px-5 py-2 text-base font-medium text-white italic transition hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
                  href="/about"
                >
                  {content.whoWeAre.button}
                </Link>
              </div>
            </div>

            {/* WHY CHOOSE US block */}
            <div className="flex flex-col gap-4">
              <Image
                src="/images/home/res2.png"
                alt="Why choose us"
                width={800}
                height={600}
                className="w-full rounded-md"
              />
              <div className="rounded-md bg-[var(--color-text-red-theme-500)] p-4 text-white">
                <h2 className={`text-2xl font-extrabold uppercase ${oswald.className}`}>
                  {content.solutions.blocks[0].title}
                </h2>
                <p className="mt-2 text-base leading-relaxed">
                  {content.solutions.blocks[0].description}
                </p>
                <Link
                  className="mt-4 inline-block rounded-full bg-white px-5 py-2 text-base font-medium text-[var(--color-text-red-theme-500)] italic transition hover:bg-[var(--color-text-red-theme-500)] hover:text-white"
                  href="/why"
                >
                  {content.whoWeAre.button}
                </Link>
              </div>
            </div>
          </div>
        </section>

      {/* Section video */}
      <section className="relative mt-0 w-full overflow-hidden p-0">
        <Link
          className="absolute bottom-5 left-1/2 z-20 mt-4 -translate-x-1/2 rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 font-medium text-white italic shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)] md:text-base"
          href="/solution"
        >
          {content.video.button}
        </Link>

        {/* Video Background */}
        {/* Video background - DESKTOP only */}
        <div className="relative hidden w-full md:block">
          <video autoPlay loop muted playsInline className="h-auto w-full object-cover">
            <source src="/videos/OUR SOLUTION.mp4" type="video/mp4" />{" "}
          </video>
        </div>

        {/* Video background - MOBILE only */}
        <div className="relative block w-full md:hidden">
          <video autoPlay loop muted playsInline className="h-auto w-full object-cover">
            <source src="/videos/mobile_our solution.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Overlay Title */}
        <motion.div
          className="absolute top-10 left-1/2 z-20 -translate-x-1/2 text-center md:top-12"
          initial="hidden"
          animate="visible"
          variants={slideFromRight}
        >
          <h1 className={`mb-6 leading-tight font-bold tracking-wide ${oswald.className}`}>
            <motion.span className="text-2xl text-[#ffffff] md:text-4xl" variants={fadeUp}>
              OUR SOLUTIONS
            </motion.span>
          </h1>
        </motion.div>
      </section>

        <ClientsSection />
        <NewsRecruitment />
        <Footer />
      </div>

      <SlideContainer>
  {/* Slide 1: Hero Section */}
  <section className="relative h-screen w-full overflow-hidden">
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
          <motion.span className="text-[26px] text-white md:text-[50px]" variants={fadeUp}>
            {content.hero.title1}
          </motion.span>
          <br />
        </h1>
        <motion.div className="mb-6 text-center text-xl font-semibold text-white" variants={fadeUp}>
          <p>{content.hero.description}</p>
          <p>{content.hero.description2}</p>
        </motion.div>
        <Link
          href="/contact"
          className="group z-20 inline-flex items-center gap-2 rounded-full bg-[var(--color-text-red-theme-500)] px-8 py-3 text-xl font-medium text-white italic shadow-md transition hover:cursor-pointer hover:bg-white hover:text-red-600"
        >
          {content.hero.button}
        </Link>
      </motion.div>
    </div>
  </section>

  {/* Slide 2: Who We Are + Why Choose Us */}
  <section className="relative h-screen w-full">
    <div className="relative hidden h-full w-full lg:block">
      <Image
        src="/images/home/who_we_are-why-choose-us.png"
        alt="Who we are and why choose us"
        width={4600}
        height={1400}
        className="h-full w-full object-cover"
        priority
      />
      {/* WHO WE ARE - Top Left */}
      <div className="absolute top-0 left-0 flex h-[40%] w-1/2 flex-col justify-between bg-white p-6">
        <div>
          <h2 className={`mb-2 text-4xl font-extrabold text-[var(--color-text-red-theme-500)] uppercase ${oswald.className}`}>
            {content.whoWeAre.title}
          </h2>
          <p className="text-lg leading-relaxed text-[var(--color-text-red-theme-500)]">
            {content.whoWeAre.paragraphs[0]}
          </p>
        </div>
        <div className="mt-3 self-end">
          <Link
            className="rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 text-lg font-medium text-white italic transition hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
            href="/about"
          >
            {content.whoWeAre.button}
          </Link>
        </div>
      </div>

      {/* WHY CHOOSE US - Bottom Right */}
      <div className="absolute right-0 bottom-0 flex h-[50%] w-1/2 flex-col justify-between p-6 text-white">
        <div>
          <h2 className={`mb-2 text-4xl font-extrabold text-white uppercase ${oswald.className}`}>
            {content.solutions.blocks[0].title}
          </h2>
          <p className="text-lg leading-relaxed">{content.solutions.blocks[0].description}</p>
        </div>
        <div className="mt-3 self-end">
          <Link
            className="rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 text-lg font-medium text-white italic transition hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
            href="/why"
          >
            {content.whoWeAre.button}
          </Link>
        </div>
      </div>
    </div>

    {/* Mobile Layout */}
    <div className="flex h-full flex-col gap-10 px-4 py-8 lg:hidden">
      {/* WHO WE ARE block */}
      <div className="flex flex-col gap-4">
        <Image
          src="/images/home/res1.png"
          alt="Who we are"
          width={800}
          height={600}
          className="w-full rounded-md"
        />
        <div>
          <h2 className={`text-2xl font-extrabold text-[var(--color-text-red-theme-500)] uppercase ${oswald.className}`}>
            {content.whoWeAre.title}
          </h2>
          <p className="mt-2 text-base leading-relaxed text-[var(--color-text-red-theme-500)]">
            {content.whoWeAre.paragraphs[0]}
          </p>
          <Link
            className="mt-4 inline-block rounded-full bg-[var(--color-text-red-theme-500)] px-5 py-2 text-base font-medium text-white italic transition hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
            href="/about"
          >
            {content.whoWeAre.button}
          </Link>
        </div>
      </div>

      {/* WHY CHOOSE US block */}
      <div className="flex flex-col gap-4">
        <Image
          src="/images/home/res2.png"
          alt="Why choose us"
          width={800}
          height={600}
          className="w-full rounded-md"
        />
        <div className="rounded-md bg-[var(--color-text-red-theme-500)] p-4 text-white">
          <h2 className={`text-2xl font-extrabold uppercase ${oswald.className}`}>
            {content.solutions.blocks[0].title}
          </h2>
          <p className="mt-2 text-base leading-relaxed">
            {content.solutions.blocks[0].description}
          </p>
          <Link
            className="mt-4 inline-block rounded-full bg-white px-5 py-2 text-base font-medium text-[var(--color-text-red-theme-500)] italic transition hover:bg-[var(--color-text-red-theme-500)] hover:text-white"
            href="/why"
          >
            {content.whoWeAre.button}
          </Link>
        </div>
      </div>
    </div>
  </section>

  {/* Slide 3: Video Section */}
  <section className="relative h-screen w-full overflow-hidden">
    <Link
      className="absolute bottom-5 left-1/2 z-20 mt-4 hidden -translate-x-1/2 rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 font-medium text-white italic shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)] md:block md:text-base"
      href="/solution"
    >
      {content.video.button}
    </Link>

    {/* Video Background */}
    <div className="relative h-full w-full">
      <video autoPlay loop muted playsInline className="h-full w-full object-cover">
        <source src="/videos/OUR SOLUTION.mp4" type="video/mp4" />
      </video>
    </div>

    {/* Overlay Title */}
    <motion.div
      className="absolute top-4 left-1/2 z-20 hidden -translate-x-1/2 text-center md:top-12 md:block"
      initial="hidden"
      animate="visible"
      variants={slideFromRight}
    >
      <h1 className={`mb-6 leading-tight font-bold tracking-wide ${oswald.className}`}>
        <motion.span className="text-2xl text-white md:text-4xl" variants={fadeUp}>
          OUR SOLUTIONS
        </motion.span>
      </h1>
    </motion.div>
  </section>

  {/* Slide 4: Clients Section */}
  <section className="h-screen w-full bg-white">
    <ClientsSection />
  </section>

  {/* Optional Slide 5: News & Recruitment (uncomment if needed) */}
  {/*
  <section className="h-screen w-full">
    <NewsRecruitment />
  </section>
  */}
</SlideContainer>

    </main>
  );
}
