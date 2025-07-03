"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageSwitcher";
import vi from "../app/i18n/clients.vi";
import en from "../app/i18n/clients.en";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Oswald } from "next/font/google";
import { motion } from "framer-motion";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function ClientsSection() {
    const { language } = useLanguage();
    const content = language === "vi" ? vi : en;

    return (
        <section className="w-full bg-white p-2 py-8 sm:p-2">
            <div className="container mx-auto px-4">
                <div className="mb-10">
                    {/* <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/introduce/background our partner (1).png"
              alt="Our Partner"
              width={1620}
              height={300}
              // layout="responsive"
              className="w-full h-[100px] md:h-[350px] hidden sm:block"
              // priority
            />
          </motion.div> */}
                </div>

                <h2
                    className={`${oswald.className} mb-8 text-center text-xl font-bold text-[var(--color-text-red-theme-500)] uppercase md:text-3xl`}
                >
                    {content.title}
                </h2>

                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    loop={true}
                    speed={8000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Autoplay]}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 40,
                        },
                    }}
                    className="!pb-10"
                >
                    {logos.map((logo, index) => (
                        <SwiperSlide key={index}>
                            <LogoCell
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src="/images/introduce/background our partner (1).png"
                        alt="Our Partner"
                        width={1620}
                        height={300}
                        // layout="responsive"
                        className="block h-[200px] w-full md:h-[350px]"
                        // priority
                    />
                </motion.div>

                {/* <Image
          src="/images/introduce/background our partner (1).png"
          alt="Our Partner"
          width={1620}
          height={300}
          // layout="responsive"
          className="w-full h-[200px] md:h-[430px] block sm:hidden mb-10"
          // priority
        /> */}
            </div>
        </section>
    );
}

function LogoCell({ src, alt }) {
    return (
        <div className="relative h-26 w-auto overflow-hidden rounded-xl bg-white transition-all duration-300 ease-in-out">
            <Image
                src={src}
                alt={alt}
                fill
                className={`object-contain transition-all duration-1000 ease-out ${
                    alt === "Zalo" ? "p-6" : alt === "Momo" ? "p-3" : ""
                }`}
            />
        </div>
    );
}

const logos = [
    { src: "/images/introduce/1.png", alt: "Facebook", width: 100, height: 100 },
    { src: "/images/introduce/2.png", alt: "Instagram", width: 100, height: 100 },
    { src: "/images/youtube.png", alt: "YouTube", width: 100, height: 100 },
    { src: "/images/introduce/5.png", alt: "TikTok", width: 100, height: 100 },
    { src: "/images/introduce/zalo.png", alt: "Zalo", width: 100, height: 100 },
    { src: "/images/introduce/google.png", alt: "Google", width: 100, height: 100 },
    { src: "/images/introduce/viber.png", alt: "Viber", width: 100, height: 100 },
    // { src: "/images/X.png", alt: "Twitter / X", width: 100, height: 100 },
    // { src: "/images/introduce/kenh14_logo_upscaled.png", alt: "Kenh14", width: 100, height: 100 },
    // { src: "/images/vnexpress.png", alt: "VNExpress", width: 100, height: 100 },
    // { src: "/images/vtc.png", alt: "VTC", width: 100, height: 100 },
    // { src: "/images/zing.png", alt: "Zing", width: 100, height: 100 },
    { src: "/images/introduce/6.png", alt: "Grab", width: 100, height: 100 },
    { src: "/images/introduce/momo.png", alt: "Momo", width: 100, height: 100 },
    // { src: "/images/acer.png", alt: "Acer" },
    // { src: "/images/xanhsm.png", alt: "Xanh SM", width: 100, height: 100 },
    // { src: "/images/techcombank.png", alt: "Techcombank", width: 100, height: 100 },
    // { src: "/images/ocb.png", alt: "OCB", width: 100, height: 100 },
    // { src: "/images/vietinbank.png", alt: "Vietinbank", width: 100, height: 100 },
];
