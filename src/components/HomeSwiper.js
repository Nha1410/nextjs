"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

export default function HomeSwiper() {
  return (
    <div className="absolute inset-0 z-0 h-screen w-full">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="pointer-events-auto h-screen w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-screen w-full">
            <Image
              src="/images/home/2.png"
              alt="Slide 1"
              fill
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-screen w-full">
            <Image
              src="/images/home/3.png"
              alt="Slide 2"
              fill
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-screen w-full">
            <Image
              src="/images/home/4.png"
              alt="Slide 3"
              fill
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="relative h-screen w-full">
            <Image
              src="/images/home/4.png"
              alt="Slide 5"
              fill
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen w-full">
            <Image
              src="/images/home/opt 6.png"
              alt="Slide 6"
              fill
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen w-full">
            <Image
              src="/images/home/opt 7.png"
              alt="Slide 7"
              fill
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide> */}
      </Swiper>
      <div className="swiper-button-prev !-mt-16 !text-white" />
      <div className="swiper-button-next !-mt-16 !text-white" />
    </div>
  );
}
