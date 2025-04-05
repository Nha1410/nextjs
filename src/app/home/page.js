// src/app/home/page.js

import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import SolutionsSection from "@/components/SolutionsSection";
import MySwiper from "@/components/MySwiper";
import NewsRecruitment from "@/components/NewsRecruitment";

const SolutionBlock = ({
  title,
  description,
  items,
  reverse,
  secondItems = [],
  appendTitle = "",
  secondApppendTitle,
  thirdItems = [],
}) => (
  <div
    className={`mb-16 flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-12`}
  >
    <div className="flex justify-center overflow-hidden md:w-1/2">
      <div className="max-w-screen rounded-lg bg-[var(--color-bg-main)] p-6 shadow-lg">
        <MySwiper />
      </div>
    </div>
    <div className="text-white md:w-1/2">
      <h3 className="mb-4 text-3xl leading-tight font-semibold text-[var(--color-text-red-theme-500)]">
        {title}
      </h3>
      <p className="mb-5 text-justify text-lg leading-relaxed md:text-xl">{description}</p>
      <p className="text-lg md:text-xl">{appendTitle}</p>

      {/* Grid cho các mục items và secondItems */}
      <div className="mt-2 grid grid-cols-2 gap-10 md:grid-cols-2">
        <ul className="mb-5 list-disc space-y-2 pl-5">
          {items.map((item, index) => (
            <li key={index} className="text-gray-300">
              {item}
            </li>
          ))}
        </ul>
        <ul className="mb-5 list-disc space-y-2 pl-5">
          {secondItems.map((item, idx) => (
            <li key={idx} className="text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-justify text-lg md:text-xl">{secondApppendTitle}</p>

      {/* Grid cho thirdItems */}
      <div className="mt-2 grid grid-cols-2 gap-10 md:grid-cols-2">
        <ul className="mb-5 list-disc space-y-2 pl-5">
          {thirdItems[0]?.map((item, index) => (
            <li key={index} className="text-gray-300">
              {item}
            </li>
          ))}
        </ul>
        <ul className="mb-5 list-disc space-y-2 pl-5">
          {thirdItems[1]?.map((item, idx) => (
            <li key={idx} className="text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <button className="rounded bg-[var(--color-text-red-theme-500)] px-6 py-3 text-white shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]">
        Xem thêm
      </button>
    </div>
  </div>
);

const CustomSolutionBlock = ({
  title,
  description,
  items,
  reverse,
  secondTitle = "",
  thirdTitle = "",
  secondItems = [],
}) => (
  <div>
  <div
    className={`mb-16 hidden md:flex flex-col md:flex-row items-center gap-12`}
  >
    <div className="text-white md:ml-18">
      <h3 className="mb-4 text-justify text-3xl leading-tight font-semibold text-[var(--color-text-red-theme-500)] ml-8">
        {title}
      </h3>
      <p className="mb-5 text-lg leading-relaxed md:text-xl">{description}</p>
      <p className="text-lg md:text-xl">{secondTitle}</p>
      <div className="mt-2 flex md:gap-18 lg:gap-24">
        <ul className="mb-5 list-disc space-y-2 pl-5">
          {items.map((item, index) => (
            <li key={index} className="text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-lg md:text-xl">{thirdTitle}</p>
      <div className="mt-2 flex md:gap-18 lg:gap-24">
        <ul className="mb-5 list-disc space-y-2 pl-5">
          {secondItems.map((item, index) => (
            <li key={index} className="text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button className="rounded bg-[var(--color-text-red-theme-500)] px-6 py-3 text-white shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]">
        Xem thêm
      </button>
    </div>
    <div className="flex justify-center md:ml-8">
      <div className="max-w-screen rounded-lg bg-[var(--color-bg-main)] p-6 shadow-lg">
        <MySwiper />
      </div>
    </div>
  </div>

  <div
    className={`mb-16 flex md:hidden flex-col md:flex-row items-center gap-12`}
  >
    <div className="flex justify-center md:ml-8">
      <div className="max-w-screen rounded-lg bg-[var(--color-bg-main)] p-6 shadow-lg">
        <MySwiper />
      </div>
    </div>
    <div className="text-white md:ml-18">
      <h3 className="mb-4 text-justify text-3xl leading-tight font-semibold text-[var(--color-text-red-theme-500)] ml-8">
        {title}
      </h3>
      <p className="mb-5 text-lg leading-relaxed md:text-xl">{description}</p>
      <p className="text-lg md:text-xl">{secondTitle}</p>
      <div className="mt-2 flex md:gap-18 lg:gap-24">
        <ul className="mb-5 list-disc space-y-2 pl-5">
          {items.map((item, index) => (
            <li key={index} className="text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-lg md:text-xl">{thirdTitle}</p>
      <div className="mt-2 flex md:gap-18 lg:gap-24">
        <ul className="mb-5 list-disc space-y-2 pl-5">
          {secondItems.map((item, index) => (
            <li key={index} className="text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button className="rounded bg-[var(--color-text-red-theme-500)] px-6 py-3 text-white shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]">
        Xem thêm
      </button>
    </div>
  </div>
  </div>
);

export default function Home() {
  return (
    <main>
      <section className="relative -mt-16 h-screen w-full bg-[url('/images/home.png')] bg-cover bg-center">
        <div className="flex h-full w-full items-center justify-center px-4">
          <div className="max-w-3xl text-center text-white drop-shadow-md">
            <h1 className="mb-6 leading-tight font-bold">
              <span className="text-[20px] text-[#fffffffff] md:text-[40px]">
                Mark your brand name
              </span>
              <br />
              <span className="text-[20px] md:text-[40px]">By right message - at right moment</span>
            </h1>
            <p className="mb-6 text-justify md:text-lg">
              <span className="font-semibold text-gray-300">
                Một chiến dịch truyền thông tích hợp hiệu quả với những điểm chạm đúng cảm xúc, đúng
                tâm lý của người tiêu dùng chính là những yếu tố tạo nên thành công cho hình ảnh của
                một thương hiệu. Đó chính là sứ mệnh của ANN là đồng hành và giúp thương hiệu của
                bạn: đánh dấu tên tuổi - thành công trong lòng khách hàng.
              </span>
            </p>
            <Link href="/contact">
              <button className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 text-xl font-medium text-white shadow-md transition hover:cursor-pointer hover:bg-white hover:text-red-600">
                Contact Us
                <span className="transform text-4xl transition-transform duration-300 group-hover:rotate-[45deg]">
                  ↗
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-[var(--color-bg-main)] py-16">
        <div className="container mx-auto flex flex-col items-start px-4 md:flex-row md:items-center">
          {/* Left Content */}
          <div className="md:w-1/2">
            <p className="mb-2 text-xl font-semibold tracking-wide text-[var(--color-text-red-theme-500)] uppercase md:text-2xl">
              — WHO WE ARE
            </p>
            <h2 className="mb-4 text-[20px] md:text-[40px] leading-snug font-bold text-white">
              <span className="text-[var(--color-text-red-theme-500)]">
                We make your brand speak in feelings!!
              </span>
            </h2>
            <p className="mb-6 text-lg text-gray-300 text-justify">
              Bằng tư duy chiến lược độc đáo, hình ảnh mang dấu ấn và nội dung giàu chiều sâu, ANN tạo nên những khoảnh khắc chạm đắt giá, nơi thương hiệu được nhìn bằng ánh mắt ấn tượng, được tin bằng cảm xúc thật và được gắn bó bằng sự kết nối tự nhiên.
            </p>
            <p className="mb-6 text-lg text-gray-300 text-justify">
              Với thế mạnh chuyên sâu trong Social Advertisement, Branding Solution và Creative Planning & Deployment, ANN trao cho thương hiệu một ngôn ngữ riêng, một cảm xúc riêng, và một chỗ đứng đáng nhớ trong tim khách hàng.
            </p>
            <button className="rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 text-lg font-medium text-white shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]">
              Discover More
            </button>
          </div>

          {/* Right Image */}
          <div className="mt-8 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end">
            <Image
              src="/images/home_solution.avif"
              alt="Let your brand speak"
              width={500}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* SECTION 2: OUR SOLUTIONS */}
      <section className="bg-[var(--color-bg-main)] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xl leading-tight font-semibold text-[var(--color-text-red-theme-500)] uppercase md:text-2xl">
                - WHAT WE DO
              </p>
            </div>
            <div className="flex flex-col justify-center md:justify-end">
              <p className="mb-4 text-justify leading-relaxed text-gray-300 md:text-xl">
                Thương hiệu cần nổi bật? Phải khác biệt – đủ sáng tạo – và lan xa.
                <br />
              </p>
              <p className="mb-6 text-justify leading-relaxed text-gray-300 md:text-xl">
                ANN Multimedia thiết kế các giải pháp truyền thông số & đa nền tảng giúp thương hiệu
                nổi bật một cách có chiến lược, được nhận diện rõ ràng, truyền tải đúng tinh thần và
                ghi dấu ấn bền vững trong tâm trí người tiêu dùng.
              </p>
            </div>
          </div>

          <SolutionBlock
            title="Social Advertisement"
            description="Linh hoạt triển khai quảng cáo trên nhiều nền tảng với đa dạng định dạng sáng tạo"
            items={[
              "Banner Standard",
              "Video Ad",
              "Native Ad",
              "Action Ad",
              "Animated 3D Cubes Interactive ",
              "Dancing 3D",
            ]}
            secondItems={[
              "Glitch",
              "Carousel",
              "Card Swipe",
              "Countdown ",
              "Scratch to Reveal",
              "Shake & Brake",
            ]}
            thirdItems={[
              ["Facebook", "Instagram", "Linked In"],
              ["Twitter", "Tiktok", "Zalo"],
            ]}
            appendTitle="Advertisement Formats:"
            secondApppendTitle="Advertisement Placement:"
          />

          <CustomSolutionBlock
            title="Branding Solution"
            description="Giải pháp thương hiệu đồng bộ, tối ưu cả online và offline"
            items={[
              "Social Media Ads",
              "Sites: E-news, Kenh14,...",
              "Apps: Grab, Be, Xanh SM, Bee Taskee,..",
            ]}
            reverse={true}
            secondTitle="Online:"
            thirdTitle="Offline:"
            secondItems={["Out - of - home: Bill - board, LCD, Car Branding,..."]}
          />

          <SolutionBlock
            title="Creative Planning & Deployment"
            description="Lên ý tưởng, thống nhất chiến lược, triển khai chi tiết – đảm bảo sáng tạo đi đôi với hiệu quả"
            items={["Proposal Development", "Alignment with Client", "Deployment Detailed Plan"]}
          />
        </div>
      </section>

      <section className="bg-white py-20 text-[#03052e]">
        <div className="container mx-auto px-4">
          {/* Tiêu đề ABOUT US riêng, ở trên cùng */}
          <h2 className="mb-10 text-xl font-semibold tracking-wide text-gray-500 uppercase">
            ABOUT US
          </h2>

          {/* Bố cục 2 cột: mũi tên (trái), đoạn text (phải) */}
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            {/* Cột trái: Mũi tên */}
            <div className="flex">
              <svg
                preserveAspectRatio="none"
                data-bbox="19.588 20.146 159.561 159.541"
                viewBox="19.588 20.146 159.561 159.541"
                height="75"
                width="75"
                xmlns="http://www.w3.org/2000/svg"
                data-type="shape"
                role="presentation"
                aria-hidden="true"
                aria-label=""
              >
                <g>
                  <path d="M170.281 20.146v144.371L25.892 20.16l-6.27 6.268 144.421 144.393H19.588v8.866h159.561V20.146h-8.868z"></path>
                </g>
              </svg>
            </div>

            {/* Cột phải: Text */}
            <div>
              <h2 className="text-2xl leading-snug font-medium md:text-3xl">
                At Minto, we simplify market learning processes to increase your expansion velocity.
              </h2>
            </div>
          </div>

          {/* Phần video bên dưới */}
          <div className="mt-20 flex justify-center">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/NeyKby7XGOw"
                title="My YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-text-red-theme-500)] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <div className="flex flex-col items-center justify-center px-5 text-center">
              <h3 className="mb-4 text-2xl leading-relaxed font-normal md:text-3xl">
                Discovering where to expand?
              </h3>
              <button className="rounded border border-white bg-transparent px-5 py-2 font-medium text-white transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]">
                LET&lsquo;S GET TO WORK
              </button>
            </div>

            <div className="mx-auto hidden h-20 w-[2px] bg-white md:block"></div>

            <div className="flex flex-col items-center justify-center px-5 text-center">
              <h3 className="mb-4 text-2xl leading-relaxed font-normal md:text-3xl">
                Decided on a market?
              </h3>
              <button className="rounded border border-white bg-transparent px-5 py-2 font-medium text-white transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]">
                LET&lsquo;S GET TO WORK
              </button>
            </div>

            <div className="mx-auto hidden h-20 w-[2px] bg-white md:block"></div>

            <div className="flex flex-col items-center justify-center px-5 text-center">
              <h3 className="mb-4 text-2xl leading-relaxed font-normal md:text-3xl">
                Know exactly what you need?
              </h3>
              <button className="rounded border border-white bg-transparent px-5 py-2 font-medium text-white transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]">
                LET&lsquo;S GET TO WORK
              </button>
            </div>
          </div>
        </div>
      </section>
      <ClientsSection />
      <NewsRecruitment />
    </main>
  );
}
