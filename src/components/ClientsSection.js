"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageSwitcher";
import vi from "../app/i18n/clients.vi";
import en from "../app/i18n/clients.en";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ClientsSection() {
  const { language } = useLanguage();
  const content = language === "vi" ? vi : en;

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-[var(--color-text-red-theme-500)]">
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
              <LogoCell src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
            </SwiperSlide>
          ))}
        </Swiper>
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
        className="object-contain transition-all duration-1000 ease-out"
      />
    </div>
  );
}

const logos = [
  { src: "/images/introduce/1.png", alt: "Facebook", width: 100, height: 100 },
  { src: "/images/introduce/2.png", alt: "Instagram", width: 100, height: 100 },
  { src: "/images/youtube.png", alt: "YouTube", width: 100, height: 100 },
  { src: "/images/introduce/5.png", alt: "TikTok", width: 100, height: 100 },
  // { src: "/images/X.png", alt: "Twitter / X", width: 100, height: 100 },
  { src: "/images/introduce/kenh14_logo_upscaled.png", alt: "Kenh14", width: 100, height: 100 },
  { src: "/images/vnexpress.png", alt: "VNExpress", width: 100, height: 100 },
  { src: "/images/vtc.png", alt: "VTC", width: 100, height: 100 },
  // { src: "/images/zing.png", alt: "Zing", width: 100, height: 100 },
  { src: "/images/introduce/6.png", alt: "Grab", width: 100, height: 100 },
  // { src: "/images/acer.png", alt: "Acer" },
  { src: "/images/xanhsm.png", alt: "Xanh SM", width: 100, height: 100 },
  { src: "/images/techcombank.png", alt: "Techcombank", width: 100, height: 100 },
  { src: "/images/ocb.png", alt: "OCB", width: 100, height: 100 },
  { src: "/images/vietinbank.png", alt: "Vietinbank", width: 100, height: 100 },
];
