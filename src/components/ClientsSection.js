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
          spaceBetween={30}
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
              <LogoCell src={logo.src} alt={logo.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function LogoCell({ src, alt }) {
  return (
    <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-white transition-all duration-300 ease-in-out">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 120px"
        className="object-contain transition-all duration-1000 ease-out"
      />
    </div>
  );
}

const logos = [
  { src: "/images/facebook.png", alt: "Facebook" },
  { src: "/images/instagram.png", alt: "Instagram" },
  { src: "/images/youtube.png", alt: "YouTube" },
  { src: "/images/tiktok.png", alt: "TikTok" },
  { src: "/images/X.png", alt: "Twitter / X" },
  { src: "/images/kenh14.png", alt: "Kenh14" },
  { src: "/images/vnexpress.png", alt: "VNExpress" },
  { src: "/images/vtc.png", alt: "VTC" },
  { src: "/images/zing.png", alt: "Zing" },
  { src: "/images/grab.png", alt: "Grab" },
  { src: "/images/acer.png", alt: "Acer" },
  { src: "/images/xanhsm.png", alt: "Xanh SM" },
  { src: "/images/techcombank.png", alt: "Techcombank" },
  { src: "/images/ocb.png", alt: "OCB" },
  { src: "/images/vietinbank.png", alt: "Vietinbank" },
];
