"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import useInView from "../hooks/useInView";
import StatCount from "../../components/StatCount";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export default function About() {
  const topRef = useInView();
  const bottomRef = useInView();
  const valueRef = useInView();

  // 🔡 Typewriter (character by character)
  const fullHeadline = "Make Marketing Better for People";
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!topRef.isInView) return;

    if (charIndex <= fullHeadline.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullHeadline.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 70); // typing speed per character

      return () => clearTimeout(timeout);
    }
  }, [charIndex, topRef.isInView]);

  return (
    <section className="relative w-full bg-[var(--color-bg-main)] bg-cover bg-center pt-24">
      {/* Section Title */}
      <div className="container mx-auto px-6 py-16 md:px-12 lg:px-24">
        <div className="text-left">
          <p className="mb-4 text-sm font-light tracking-wide text-white uppercase">_ WHO WE ARE</p>
          <h2
            className={`text-3xl font-light text-white md:text-5xl lg:text-6xl ${inter.variable}`}
          >
            About us
          </h2>
        </div>

        {/* 🔼 Top Section */}
        <div ref={topRef.ref} className="mt-10 flex flex-col items-center gap-10 md:flex-row">
          {/* Image */}
          <div
            className={`order-1 flex flex-1 justify-center transition-all duration-1000 ease-out ${
              topRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <Image
              src="/about1.png"
              alt="Main Team Image"
              width={500}
              height={500}
              className="w-full max-w-xs rounded-xl md:max-w-sm lg:max-w-md"
            />
          </div>

          {/* Animated Headline + Description */}
          <div
            className={`order-2 flex-1 space-y-6 text-left transition-all duration-1000 ease-out ${
              topRef.isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-3xl leading-snug font-bold text-[var(--color-main-500)] md:text-6xl">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h3>
            <p className="text-justify text-sm text-white md:text-base">
              Our mission is to build an ecosystem of digital products & services to help customers
              be more innovative, effective, and successful in Marketing & Sales.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Image src="/images/think-digital.svg" alt="Think Digital" width={70} height={40} />
              <Image src="/images/media-lab.png" alt="Media Lab" width={100} height={30} />
              <Image src="/images/AImarketing.png" alt="AI Marketing" width={130} height={50} />
            </div>
          </div>
        </div>

        {/* 🔽 Bottom Section */}
        <div ref={bottomRef.ref} className="mt-16 flex flex-col items-center gap-10 md:flex-row">
          {/* Bottom Content with Top-to-Bottom Reveal */}
          <div
            className={`order-1 flex-1 space-y-6 px-0 text-left transition-all duration-1000 ease-out ${
              bottomRef.isInView ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Line 1: Title */}
            <h3
              className={`text-4xl leading-snug font-bold text-[var(--color-main-500)] transition-all duration-700 md:text-3xl ${
                bottomRef.isInView ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
              }`}
            >
              We’re Thinkers
            </h3>

            {/* Line 2: Paragraph 1 */}
            <p
              className={`text-justify text-sm text-white transition-all delay-300 duration-700 md:text-base ${
                bottomRef.isInView ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
              }`}
            >
              Phương châm làm việc của chúng tôi là làm{" "}
              <span className="font-bold text-[var(--color-main-500)]">điều đúng đắn</span>, đặt lợi
              ích của khách hàng lên hàng đầu, luôn cập nhật và ứng dụng các giải pháp mới nhất để
              đáp ứng nhu cầu của khách hàng.
            </p>

            {/* Line 3: Paragraph 2 */}
            <p
              className={`text-justify text-sm text-white transition-all delay-600 duration-700 md:text-base ${
                bottomRef.isInView ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
              }`}
            >
              Chúng tôi luôn{" "}
              <span className="font-bold text-[var(--color-main-500)]">
                đề cao tính đổi mới và hiệu quả trong công việc
              </span>
              , cùng với tinh thần cầu tiến và không ngừng học hỏi để nâng cao chất lượng sản phẩm
              và dịch vụ của chúng tôi.
            </p>
          </div>

          <div
            className={`order-2 flex flex-1 justify-center transition-all duration-1000 ease-out ${
              bottomRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <Image
              src="/about2.png"
              alt="Thinkers"
              width={500}
              height={500}
              className="w-full max-w-xs rounded-xl md:max-w-sm lg:max-w-md"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-white/20"></div>

      {/* Our Mission & Core Values */}
      <div className="container mx-auto px-6 py-16 md:px-12 lg:px-24">
        <div className="text-left">
          <p className="mb-3 text-sm font-light tracking-wide text-white uppercase">_ OUR VALUES</p>
          <h2 className="text-2xl font-light text-white md:text-3xl">
            Sứ mệnh và các giá trị cốt lõi tại Think Digital
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-10 md:flex-row">
          {/* Mission */}
          <div className="flex-1 space-y-4 rounded-lg bg-[#002D6A] p-6 text-justify text-white md:p-8">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <h2 className="text-2xl leading-snug font-bold">Make Marketing Better for People.</h2>
            <p>
              Với sứ mệnh “Make Marketing Better for People”, đội ngũ chuyên gia của Think Digital
              luôn nỗ lực để đưa đến cho khách hàng những sản phẩm và dịch vụ tốt nhất trong lĩnh
              vực Marketing và Sale.
            </p>
            <p>
              Để làm được điều này, công ty luôn đặt lợi ích của khách hàng lên hàng đầu, tìm kiếm
              và ứng dụng các giải pháp đổi mới và hiệu quả nhất để giúp khách hàng đạt được mục
              tiêu kinh doanh của mình.
            </p>
            <p>
              Mỗi thương hiệu trong hệ sinh thái của Think Digital sẽ là một mảnh ghép của sứ mệnh.
            </p>
          </div>

          {/* Core Values */}
          <div ref={valueRef.ref} className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              {
                number: "01",
                title: "Do the right thing.",
                desc: "Trong mọi hoàn cảnh, luôn làm điều đúng đắn và làm hết sức mình.",
              },
              {
                number: "02",
                title: "Bold & Innovative.",
                desc: "Làm việc chuyên nghiệp, luôn đổi mới và đề cao tính hiệu quả.",
              },
              {
                number: "03",
                title: "Respect.",
                desc: "Tôn trọng và biết quan tâm đến quyền lợi của tất cả các bên liên quan.",
              },
              {
                number: "04",
                title: "Truth worthy.",
                desc: "Hãy trở thành một đối tác mà người khác có thể tin cậy vào được.",
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className={`rounded-lg bg-[var(--color-main-200)] p-6 transition-all duration-700 ease-out ${
                  valueRef.isInView
                    ? `translate-y-0 opacity-100 delay-[${idx * 400}ms]`
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }} // Tailwind doesn't support dynamic delay classes
              >
                <p className="mb-2 text-sm font-semibold text-gray-500">{val.number}</p>
                <h4 className="mb-1 text-lg font-bold">{val.title}</h4>
                <p className="text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Performance */}
      <div className="container mx-auto px-6 py-16 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "/images/star.png",
              label: "Customer Satisfaction",
            },
            {
              icon: "/images/experience.png",
              label: "Experience",
            },
            {
              icon: "/images/campaign.png",
              label: "Success Campaign",
            },
            {
              icon: "/images/ourteam.png",
              label: "Our Team",
            },
          ].map((stat, idx) => (
            <div key={idx} className="space-y- flex flex-col items-start text-white">
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-xl bg-gray-100">
                <Image src={stat.icon} alt={stat.label} width={48} height={48} />
              </div>
              <p className="text-center text-base font-medium">{stat.label}</p>
              <p className="text-left text-3xl font-extrabold text-[var(--color-main-400)]">
                {idx === 0 && <StatCount end={90} suffix="%" />}
                {idx === 1 && <StatCount end={8} suffix=" years" />}
                {idx === 2 && <StatCount end={100} suffix="+" />}
                {idx === 3 && <StatCount end={30} prefix="+" suffix=" people" />}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
