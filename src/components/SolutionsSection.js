"use client";

import Image from "next/image";
import MySwiper from "@/components/MySwiper";

export default function SolutionsSection() {
  return (
    <section className="overflow-hidden bg-[#dfeaff] py-16 text-[#03052e]">
      <div className="container mx-auto max-w-screen-xl items-start px-6 md:px-8">
        {/* --- PHẦN “OUR SOLUTIONS” TÁCH RIÊNG 2 CỘT --- */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Cột trái: Tiêu đề, mô tả, nút */}
          <div>
            <h2 className="mb-3 text-4xl leading-tight font-bold">Our solutions</h2>
            <button className="rounded bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
              Xem thêm
            </button>
          </div>

          {/* Cột phải: Ảnh minh hoạ (tuỳ ý) */}
          <div className="flex justify-center md:justify-end">
            <div>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Người dùng muốn trải nghiệm đa dạng, nhận hàng cận xuất hiện đa kênh, Think Digital
                chuyển mình đa dạng hoá. <br />
                Chúng tôi đưa ra các giải pháp cụ thể tập trung vào Marketing cho doanh nghiệp, với
                các tập đoàn lớn để thúc đẩy mức tăng trưởng và hiệu quả hoạt động.
              </p>
            </div>
          </div>
        </div>

        {/* --- 1. Marketing & Communication --- */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Cột trái: Text + bullet */}
          <div>
            <h3 className="mb-4 text-2xl leading-tight font-semibold">
              1. Marketing &amp; Communication
            </h3>
            <p className="mb-5 leading-relaxed text-gray-700">
              Đối tác đột phá toàn diện cho doanh nghiệp, tập trung vào mảng Digital.
            </p>
            <ul className="mb-5 list-disc space-y-2 pl-5 leading-relaxed text-gray-700">
              <li>
                <strong>Thiết kế, sản xuất</strong> các nội dung số trên Digital
              </li>
              <li>
                <strong>Paid Media Booking</strong> trên đa kênh Digital
              </li>
              <li>
                <strong>Đội ngũ</strong> Marketing in-house, từ tư vấn đến triển khai
              </li>
            </ul>
            <button className="rounded border border-blue-600 px-5 py-2 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white">
              Xem thêm
            </button>
          </div>

          {/* Cột phải: Swiper */}
          <div className="flex justify-center">
            <div className="max-w-sm rounded-lg bg-white p-3 shadow-lg">
              <MySwiper />
            </div>
          </div>
        </div>

        {/* --- 2. Media Buying Platform --- */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Cột trái: Swiper (đảo thứ tự trên desktop) */}
          <div className="order-2 flex justify-center md:order-1">
            <div className="max-w-sm rounded-lg bg-white p-3 shadow-lg">
              <MySwiper />
            </div>
          </div>

          {/* Cột phải: Text + bullet */}
          <div className="order-1 md:order-2">
            <h3 className="mb-4 text-2xl leading-tight font-semibold">2. Media Buying Platform</h3>
            <p className="mb-5 leading-relaxed text-gray-700">
              Dễ dàng khám phá &amp; đặt mua hàng ngàn các quảng cáo đa dạng từ các kênh targeting
              qua cổng, influencers, website hàng đầu Việt Nam.
            </p>
            <ul className="mb-5 list-disc space-y-2 pl-5 leading-relaxed text-gray-700">
              <li>Media Discover</li>
              <li>Media Buying</li>
              <li>Marketplace</li>
              <li>Media Alliance</li>
              <li>Manage Campaign</li>
            </ul>
            <button className="rounded border border-blue-600 px-5 py-2 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white">
              Xem thêm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
