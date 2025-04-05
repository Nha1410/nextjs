"use client"; // Cần cho Next.js 13 + hooks (Swiper)

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

export default function MySwiper() {
  return (
    <div className="flex w-full justify-center overflow-hidden">
      <div className="w-full max-w-2xl rounded-lg bg-[var(--color-bg-main)] p-6 shadow-lg">
        <div className="mx-auto w-full max-w-2xl">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1} // Mặc định là 1 slide
            spaceBetween={10} // Khoảng cách giữa các slide
            breakpoints={{
              640: {
                slidesPerView: 1, // Hiển thị 1 slide khi màn hình có chiều rộng >= 640px
              },
              768: {
                slidesPerView: 2, // Hiển thị 2 slide khi màn hình có chiều rộng >= 768px
              },
              1024: {
                slidesPerView: 3, // Hiển thị 3 slide khi màn hình có chiều rộng >= 1024px
              },
            }}
            className="h-auto w-full" // Tự động điều chỉnh chiều cao và chiều rộng cho Swiper
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/images/agency.jpg"
                  alt="Slide 1"
                  width={1200} // Maximum width of the image
                  height={800} // Maximum height of the image
                  className="h-full w-full object-cover" // Sử dụng object-cover để hình ảnh không bị méo
                />
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/images/agency_1.jpg"
                  alt="Slide 2"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover" // Sử dụng object-cover để hình ảnh không bị méo
                />
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="relative h-full w-full">
                <Image
                  src="/images/agency-marketing.jpg"
                  alt="Slide 3"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover" // Sử dụng object-cover để hình ảnh không bị méo
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
