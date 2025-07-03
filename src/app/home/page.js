"use client";

import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
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

export default function Home() {
    const { language } = useLanguage();
    const whoWeAreRef = useRef(null);
    const slideContainerRef = useRef(null);

    const scrollToWhoWeAre = () => {
        const element = whoWeAreRef.current;
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        } else {
            // Fallback: scroll to a reasonable position
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }
    };

    const scrollToNextSlide = () => {
        if (slideContainerRef.current) {
            slideContainerRef.current.scrollToNext();
        }
    };

    const content = language === "vi" ? vi : en;

    return (
        <main className="h-full w-full overflow-auto bg-black lg:overflow-hidden">
            {/* mobile version */}
            <div className="mobile-wrapper block sm:hidden">
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
                            <h1
                                className={`mb-6 leading-tight font-bold tracking-wide ${oswald.className}`}
                            >
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
                                className="group z-20 inline-flex items-center gap-2 rounded-full bg-[var(--color-text-red-theme-500)] px-8 py-3 text-xl font-medium text-white italic shadow-md transition hover:cursor-pointer hover:bg-white hover:text-red-600"
                                onClick={scrollToWhoWeAre}
                                variants={fadeUp}
                            >
                                {content.hero.button}
                            </motion.button>
                        </motion.div>
                    </div>
                </section>

                <section ref={whoWeAreRef} className="relative w-full">
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
                            <div className="p-2 rounded-sm bg-white">
                                <h2
                                    className={`text-2xl font-extrabold text-[var(--color-text-red-theme-500)] uppercase ${oswald.className}`}
                                >
                                    {content.whoWeAre.title}
                                </h2>
                                <p className="mt-2 text-base leading-relaxed text-[var(--color-text-red-theme-500)]">
                                    {content.whoWeAre.paragraphs[0]}
                                </p>
                                <Link
                                    className="mt-4 mb-2 inline-block rounded-full bg-[var(--color-text-red-theme-500)] px-5 py-2 text-base font-medium text-white italic transition hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
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
                                <h2
                                    className={`text-2xl font-extrabold uppercase ${oswald.className}`}
                                >
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
                    <div className="relative hidden w-full md:block">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-auto w-full object-cover"
                        >
                            <source src="/videos/OUR SOLUTION.mp4" type="video/mp4" />{" "}
                        </video>
                    </div>

                    {/* Video background - MOBILE only */}
                    <div className="relative block w-full md:hidden">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-auto w-full object-cover"
                        >
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
                        <h1
                            className={`mb-6 leading-tight font-bold tracking-wide ${oswald.className}`}
                        >
                            <motion.span
                                className="text-2xl text-[#ffffff] md:text-4xl"
                                variants={fadeUp}
                            >
                                OUR SOLUTIONS
                            </motion.span>
                        </h1>
                    </motion.div>
                </section>

                <ClientsSection />
                <NewsRecruitment />
                <Footer />
            </div>

            {/* PC version */}
            <SlideContainer ref={slideContainerRef}>
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
                            <h1
                                className={`mb-6 leading-tight font-bold tracking-wide ${oswald.className}`}
                            >
                                <motion.span
                                    className="text-[26px] text-white md:text-[50px]"
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
                                onClick={scrollToNextSlide}
                                className="group z-20 inline-flex items-center gap-2 rounded-full bg-[var(--color-text-red-theme-500)] px-8 py-3 text-xl font-medium text-white italic shadow-md transition hover:cursor-pointer hover:bg-white hover:text-red-600"
                                variants={fadeUp}
                            >
                                {content.hero.button}
                            </motion.button>
                        </motion.div>
                    </div>
                </section>

                {/* Slide 2: Who We Are + Why Choose Us */}
                <section className="relative h-screen w-full -translate-y-10 overflow-hidden lg:-translate-y-7">
                    {/* Horizontal divider: chỉ hiện ở desktop */}

                    {/* Desktop layout */}
                    <div className="relative z-10 hidden h-full w-full lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_1fr]">
                        {/* TOP LEFT */}
                        <div className="bg-opacity-90 flex h-full flex-col justify-between bg-white p-6">
                            <div className="translate-y-8">
                                <h2
                                    className={`mb-2 text-4xl font-extrabold text-[var(--color-text-red-theme-500)] uppercase ${oswald.className}`}
                                >
                                    {content.whoWeAre.title}
                                </h2>
                                <p className="text-lg leading-relaxed text-[var(--color-text-red-theme-500)]">
                                    {content.whoWeAre.paragraphs[0]}
                                </p>
                            </div>

                            <div className="flex justify-end">
                                <Link
                                    href="/about"
                                    className="rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 text-lg font-medium text-white italic transition hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
                                >
                                    {content.whoWeAre.button}
                                </Link>
                            </div>
                        </div>

                        {/* TOP RIGHT */}
                        <div className="relative h-full">
                            <Image
                                src="/images/home/res1.png"
                                alt="Top Right Visual"
                                fill
                                className="object-cover object-right"
                                priority
                            />
                        </div>

                        {/* BOTTOM LEFT */}
                        <div className="relative h-full">
                            <Image
                                src="/images/home/res2.png"
                                alt="Bottom Left Visual"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* BOTTOM RIGHT */}
                        <div className="bg-opacity-90 flex h-full flex-col justify-between bg-[var(--color-text-red-theme-500)] p-6 text-white">
                            <div>
                                <h2
                                    className={`mb-2 text-4xl font-extrabold uppercase ${oswald.className}`}
                                >
                                    {content.solutions.blocks[0].title}
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    {content.solutions.blocks[0].description}
                                </p>
                            </div>
                            <div className="mt-4 mb-12 flex justify-end">
                                <Link
                                    href="/why"
                                    className="rounded-full bg-white px-6 py-3 text-lg font-medium text-[var(--color-text-red-theme-500)] italic transition hover:bg-[var(--color-text-red-theme-500)] hover:text-white"
                                >
                                    {content.whoWeAre.button}
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile layout */}
                    <div className="flex h-full flex-col gap-10 px-4 py-8 lg:hidden">
                        {/* WHO WE ARE */}
                        <div className="flex flex-col gap-4">
                            <Image
                                src="/images/home/res1.png"
                                alt="Who we are"
                                width={800}
                                height={600}
                                className="w-full rounded-md object-cover"
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
                                    href="/about"
                                    className="mt-4 inline-block rounded-full bg-[var(--color-text-red-theme-500)] px-5 py-2 text-base font-medium text-white italic transition hover:bg-white hover:text-[var(--color-text-red-theme-500)]"
                                >
                                    {content.whoWeAre.button}
                                </Link>
                            </div>
                        </div>

                        {/* WHY CHOOSE US */}
                        <div className="flex flex-col gap-4">
                            <Image
                                src="/images/home/res2.png"
                                alt="Why choose us"
                                width={800}
                                height={600}
                                className="w-full rounded-md object-cover"
                            />
                            <div className="rounded-md bg-[var(--color-text-red-theme-500)] p-4 text-white">
                                <h2
                                    className={`text-2xl font-extrabold uppercase ${oswald.className}`}
                                >
                                    {content.solutions.blocks[0].title}
                                </h2>
                                <p className="mt-2 text-base leading-relaxed">
                                    {content.solutions.blocks[0].description}
                                </p>
                                <Link
                                    href="/why"
                                    className="mt-4 inline-block rounded-full bg-white px-5 py-2 text-base font-medium text-[var(--color-text-red-theme-500)] italic transition hover:bg-[var(--color-text-red-theme-500)] hover:text-white"
                                >
                                    {content.whoWeAre.button}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Slide 3: Video Section */}
                <section className="relative h-screen w-full overflow-hidden">
                    <div className="md:mt-[-20px]">
                        <Link
                            className="absolute bottom-44 left-1/2 z-20 hidden -translate-x-1/2 rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 font-medium text-white italic shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)] md:block md:text-base"
                            href="/solution"
                        >
                            {content.video.button}
                        </Link>
                    </div>

                    {/* Video Background */}
                    <div className="relative h-full w-full">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full -translate-y-12 object-contain"
                        >
                            <source src="/videos/OUR SOLUTION.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Overlay Title */}
                    <motion.div
                        className="absolute top-4 left-1/2 z-20 hidden -translate-x-1/2 text-center md:top-18 md:block"
                        initial="hidden"
                        animate="visible"
                        variants={slideFromRight}
                    >
                        <h1
                            className={`mb-6 leading-tight font-bold tracking-wide ${oswald.className}`}
                        >
                            <motion.span
                                className="text-2xl text-white md:text-4xl"
                                variants={fadeUp}
                            >
                                OUR SOLUTIONS
                            </motion.span>
                        </h1>
                    </motion.div>
                </section>

                {/* Slide 4: Clients Section */}
                <section className="h-full w-full bg-white">
                    <ClientsSection />
                </section>
            </SlideContainer>
        </main>
    );
}
