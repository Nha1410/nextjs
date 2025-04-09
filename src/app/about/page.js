"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import useInView from "../hooks/useInView";
import StatCount from "../../components/StatCount";

export default function About() {
  const topRef = useInView();
  const bottomRef = useInView();
  const valueRef = useInView();

  const fullHeadline = "Right message - at the right moment";
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!topRef.isInView) return;

    if (charIndex <= fullHeadline.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullHeadline.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 70);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, topRef.isInView]);

  return (
    <section className="relative w-full bg-white bg-cover bg-center">
      <div className="container mx-auto px-6 py-16 md:px-24 lg:px-24">
        <div className="text-left">
          <p className="mb-4 text-sm font-light tracking-wide text-black uppercase">_ WHO WE ARE</p>
          <h2
            className="text-3xl font-light text-black md:text-5xl lg:text-6xl"
          >
            About us
          </h2>
        </div>

        <div ref={topRef.ref} className="mt-8 flex flex-col items-center gap-10 md:flex-row">
          <div
            className={`order-1 flex flex-1 justify-center transition-all duration-1000 ease-out ${topRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <Image
              src="/about1.png"
              alt="Main Team Image"
              width={500}
              height={500}
              className="w-full max-w-xs rounded-xl md:max-w-sm lg:max-w-md"
            />
          </div>

          <div
            className={`order-2 flex-1 space-y-6 text-left transition-all duration-1000 ease-out ${topRef.isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <h3
              className="mb-6 leading-tight font-bold text-[var(--color-text-red-theme-500)]"
              style={{ width: "max-content" }}
            >
              <p className="text-[20px] text-[#fffffffff] md:text-[40px]">Mark your brand name</p>
              <br />
              <span className="hidden text-[20px] md:block md:text-[40px]">
                By right message - at right moment
              </span>
              <p className="text-[20px] md:hidden md:text-[40px]">By right message</p>
              <p className="text-[20px] md:hidden md:text-[40px]">- at right moment</p>
            </h3>
            <p className="text-justify text-base leading-relaxed text-black md:text-lg">
              Một chiến dịch truyền thông tích hợp hiệu quả với những điểm chạm đúng cảm xúc, đúng
              tâm lý của người tiêu dùng chính là những yếu tố tạo nên thành công cho hình ảnh của
              một thương hiệu. Đó chính là sứ mệnh của ANN là đồng hành và giúp thương hiệu của bạn:
              đánh dấu tên tuổi - thành công trong lòng khách hàng.
            </p>
          </div>
        </div>

        <div ref={bottomRef.ref} className="mt-16 flex flex-col items-center gap-10 md:flex-row">
          <div
            className={`order-1 flex-1 space-y-6 px-0 text-left transition-all duration-1000 ease-out ${bottomRef.isInView ? "opacity-100" : "opacity-0"}`}
          >
            <h3
              className={`text-[20px] leading-snug font-bold text-[var(--color-text-red-theme-500)] transition-all duration-700 md:text-[40px] ${bottomRef.isInView ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
            >
              Build brand with trust.
              <br />
              <span className="text-[var(--color-text-red-theme-500)]">Execute with heart.</span>
            </h3>
            <p
              className={`text-justify text-base leading-relaxed text-black transition-all delay-300 duration-700 md:text-lg ${bottomRef.isInView ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
            >
              ANN làm việc với một nguyên tắc rõ ràng: mọi quyết định đều phải mang lại giá trị thực
              cho thương hiệu. Không chạy theo công thức, không lặp lại lối mòn, mỗi giải pháp đều
              được tinh chỉnh dựa trên sự thấu hiểu sâu sắc về khách hàng, hành vi số và bản sắc
              riêng của từng khách hàng. Luôn cập nhật, luôn đặt câu hỏi, luôn tiến về phía trước,
              đó là DNA cốt lõi của ANN Multimedia.
            </p>
          </div>

          <div
            className={`order-2 flex flex-1 justify-center transition-all duration-1000 ease-out ${bottomRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
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

      <div className="h-[1px] w-full bg-white/20"></div>

      <div className="container mx-auto px-6 py-16 md:px-12 lg:px-24">
        <div className="text-left">
          <p className="mb-3 text-sm font-light tracking-wide text-black uppercase">
            _ Our Mission
          </p>
          <h2 className="text-2xl font-light text-black md:text-3xl">
            Sứ mệnh và các giá trị cốt lõi tại ANN
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-10 md:flex-row">
          <div className="flex-1 space-y-4 rounded-lg bg-[var(--color-text-red-theme-500)] p-6 text-justify text-white md:p-8">
            <h2 className="text-2xl leading-snug font-bold md:text-3xl">
              {/* Make brands matter —<br /> */}
              Build brand with trust.
              <br />
              Execute with heart.
              {/* <span className="text-white">in the right way, at the right time.</span> */}
            </h2>
            <p className="md:text-base">
              Sứ mệnh là giúp thương hiệu tìm thấy tiếng nói riêng, chọn đúng thời điểm để cất lời
              và dùng giải pháp truyền thông số & đa nền tảng như công cụ kể chuyện, một cách sống
              động, có chiến lược và đúng vibe.
            </p>
            <p className="md:text-base">
              Hiểu đúng điều khách hàng đang nghĩ và đang cần, dùng đúng nền tảng, sáng tạo đúng
              chất riêng, đó là cách ANN giúp bạn trở nên thật hơn, đáng nhớ hơn và có ảnh hưởng lâu
              dài hơn.
            </p>
          </div>

          <div
            ref={valueRef.ref}
            className="grid flex-1 grid-cols-1 gap-6 text-justify lg:grid-cols-2"
          >
            {[
              {
                number: "01",
                title: "Think Clear",
                desc: "Làm việc gì cũng bắt đầu từ một câu hỏi rõ ràng. Làm vì nó đúng với mục tiêu thương hiệu và xứng đáng để ghi dấu.",
              },
              {
                number: "02",
                title: "Design Smart",
                desc: "Từ chiến lược đến đến trải nghiệm, mọi thứ đều phải có mục tiêu rõ ràng, phải đúng và phải tạo cảm xúc thật.",
              },
              {
                number: "03",
                title: "Stay Agile",
                desc: "Luôn học, luôn lắng nghe, luôn cập nhật để không chỉ theo kịp mà còn đón đầu những thứ mới.",
              },
              {
                number: "04",
                title: "Always Strive",
                desc: "Mỗi dự án là một phần tinh thần của team, được làm bằng sự hiểu, bằng sự thích và bằng sự tự hào khi nhìn lại.",
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className={`rounded-lg bg-[var(--color-text-red-theme-200)] p-6 transition-all duration-700 ease-out ${valueRef.isInView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <p className="mb-2 text-sm font-semibold text-black">{val.number}</p>
                <h4 className="text-lg leading-snug font-bold text-black md:text-xl">
                  {val.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-black md:text-base">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "/images/star.png",
              label: "Media Partners",
            },
            {
              icon: "/images/experience.png",
              label: "Years Experience",
            },
            {
              icon: "/images/campaign.png",
              label: "Success Campaigns",
            },
            {
              icon: "/images/ourteam.png",
              label: "Brands Collaborated",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-2 text-center text-black md:items-start md:text-left"
            >
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-xl border-1 border-gray-200 bg-gray-100 shadow-md">
                <Image src={stat.icon} alt={stat.label} width={48} height={48} />
              </div>
              <div className="text-base font-medium">{stat.label}</div>
              <div className="text-3xl font-extrabold text-[var(--color-text-red-theme-400)]">
                {idx === 0 && <StatCount end={50} suffix="+" />}
                {idx === 1 && <StatCount end={20} suffix="+" />}
                {idx === 2 && <StatCount end={30} suffix="+" />}
                {idx === 3 && <StatCount end={100} suffix="+" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
