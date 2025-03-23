"use client"; // Cần cho Next.js 13 + hooks (Swiper)

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

export default function MySwiper() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="h-[350px] w-[600px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            <Image src="/images/agency.jpg" alt="Slide 1" fill className="object-contain" />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            <Image src="/images/agency_1.jpg" alt="Slide 2" fill className="object-contain" />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            <Image
              src="/images/agency-marketing.jpg"
              alt="Slide 3"
              fill
              className="object-contain"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
