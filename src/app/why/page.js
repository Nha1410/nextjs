// components/FeatureBlock.jsx
"use client";
import Image from "next/image";
import FeatureBlock from "../../components/FeatureBlock";
import { motion } from "framer-motion";
import Rounded from "../../components/RoundedButton";

export default function Home() {
  const features = [
    {
      number: "01",
      title: "Mô hình",
      description:
        "Mô hình tích hợp từ retainer, sản xuất nội dung đến media planning giúp tối ưu chi phí, đảm bảo thông điệp xuyên suốt và triển khai nhanh chóng.",
    },
    {
      number: "02",
      title: "Con người",
      description:
        "Đội ngũ chuyên gia từ planner, producer đến media buyer đều có kinh nghiệm sâu, trực tiếp triển khai và am hiểu từng nền tảng số.",
    },
    {
      number: "03",
      title: "Thực chiến",
      description:
        "Chúng tôi đã đồng hành cùng nhiều thương hiệu đa ngành với quy trình triển khai rõ ràng, kiểm thử hiệu quả và báo cáo minh bạch.",
    },
    {
      number: "04",
      title: "Thấu hiểu",
      description:
        "Chiến dịch được cá nhân hoá theo vùng miền, độ tuổi và hành vi, đảm bảo đúng thông điệp – đúng người – đúng thời điểm.",
    },
  ];

  return (
    <>
      <section className="relative w-full bg-white bg-cover bg-center pt-24 pb-16">
        <div className="container mx-auto px-8 py-16 sm:px-12 md:px-20 lg:px-32 xl:px-48">
          {/* Section Title */}
          <div className="mt-10 flex w-full flex-col items-start gap-8 pb-24 md:flex-row">
            <div className="w-full max-w-xl md:w-1/2">
              <h1 className="text-left">
                <span className="block text-6xl font-bold text-gray-900">Why</span>
                <span className="block text-7xl font-bold text-[var(--color-main-500)]">
                  Choose Us
                </span>
              </h1>
            </div>
            <div className="w-full max-w-xl md:w-1/2">
              <p className="text-2xl text-gray-600">
                Chúng tôi đồng hành như một đối tác truyền thông hiểu rõ thị trường, triển khai thực
                chiến và luôn hướng đến hiệu quả rõ ràng thông qua 4 lợi thế sau:
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mt-12 flex justify-center">
            <Image src="/images/why-choose-us.png" alt="Main Image" width={900} height={600} />
          </div>

          {/* Feature Blocks */}
          <div className="mt-24 grid grid-cols-1 gap-x-32 gap-y-16 md:grid-cols-2">
            {features.map((feature) => (
              <FeatureBlock
                key={feature.number}
                number={feature.number}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Evolution Section with rounded corner background */}
      <section className="relative overflow-visible py-24">
        {/* Background with animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="absolute top-0 right-0 z-0 h-5/7 w-full rounded-tl-[100px] bg-[var(--color-main-500)] md:h-5/7 md:w-5/6 lg:h-9/13"
        ></motion.div>

        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center px-6 md:flex-row md:justify-between md:px-12">
          {/* Image Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-20 -mt-28 w-full md:-mt-36 md:w-1/2 lg:-mt-40"
          >
            <div className="flex justify-center pr-0 md:justify-end md:pr-16">
              <Image
                src="/images/why-choose-us-3.png"
                alt="Our Evolution"
                width={600}
                height={600}
                className="h-auto max-w-full object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right Content Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="z-30 flex w-full -translate-y-6 flex-col justify-center text-center text-white md:w-1/2 md:-translate-y-12 md:pl-16 md:text-left"
          >
            {/* Line: Our [>] */}
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <h2 className="text-5xl leading-tight font-extrabold md:text-6xl">Our</h2>
              <motion.div
                animate={{ x: [0, 20, 0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-400 md:h-12 md:w-12"
              >
                <div className="h-2 w-2 rotate-135 border-t-2 border-l-2 border-white"></div>
              </motion.div>
            </div>

            {/* Line: Evolution */}
            <div className="mt-2">
              <h2 className="text-5xl leading-tight font-extrabold md:text-6xl">Solution</h2>
            </div>

            {/* CTA */}
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-lg font-medium text-white md:text-xl"
              >
                <Rounded>
                  <p>
                    Read now <span className="text-2xl">→</span>
                  </p>
                </Rounded>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
