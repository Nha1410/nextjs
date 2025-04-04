// src/app/home/page.js

import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import SolutionsSection from "@/components/SolutionsSection";
import MySwiper from "@/components/MySwiper";
import NewsRecruitment from "@/components/NewsRecruitment";

const SolutionBlock = ({ title, description, items, reverse }) => (
  <div
    className={`mb-16 flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-12`}
  >
    <div className="flex justify-center">
      <div className="max-w-2xl rounded-lg bg-[var(--color-bg-main)] p-6 shadow-lg">
        <MySwiper />
      </div>
    </div>
    <div className="text-white">
      <h3 className="mb-4 text-3xl leading-tight font-semibold text-[var(--color-text-red-theme-500)]">
        {title}
      </h3>
      <p className="mb-5 text-xl leading-relaxed">{description}</p>
      <ul className="mb-5 list-disc space-y-2 pl-5">
        {items.map((item, index) => (
          <li key={index} className="text-gray-300">
            {item}
          </li>
        ))}
      </ul>
      <button className="rounded bg-[var(--color-text-red-theme-500)] px-6 py-3 text-white shadow-md transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]">
        Xem thêm
      </button>
    </div>
  </div>
);

export default function Home() {
  return (
    <main>
      <section className="relative -mt-16 h-screen w-full bg-[url('/images/home.png')] bg-cover bg-center">
        <div className="flex h-full w-full items-center justify-center px-4">
          <div className="max-w-3xl text-center text-white drop-shadow-md">
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
              ANN Multimedia -{" "}
              <span className="text-[var(--color-text-red-theme-500)]">Asking for the name.</span>
              <br />
              <span className="text-[var(--color-text-red-theme-500)]">Your brand</span> be noticed.
            </h1>
            <p className="mb-6 text-lg text-gray-300 md:text-xl">
              ANN không chạy theo sự chú ý - ANN thiết kế nó. Một cú chạm{" "}
              <span className="font-semibold text-[var(--color-text-red-theme-500)]">
                đúng cảm xúc
              </span>
              , một hình ảnh
              <span className="font-semibold text-[var(--color-text-red-theme-500)]">
                đúng tâm lý
              </span>
              , và một chiến dịch khiến thương hiệu không chỉ được nhắc đến mà còn ghi dấu ấn sâu
              đậm.
              <br />
              <span className="font-bold tracking-wide text-[var(--color-text-red-theme-500)] uppercase">
                Be the name. Be noticed.
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
            <p className="mb-2 text-sm font-semibold tracking-wide text-[var(--color-text-red-theme-500)] uppercase">
              — Let your brand speak in feelings!!
            </p>
            <h2 className="mb-4 text-3xl leading-snug font-bold text-white md:text-4xl lg:text-5xl">
              ANN Multimedia -{" "}
              <span className="text-[var(--color-text-red-theme-500)]">
                Không chỉ nhìn, mà còn cảm.
              </span>
            </h2>
            <p className="mb-6 text-lg text-gray-300">
              ANN không chỉ giúp thương hiệu <strong>trông đẹp</strong> – mà còn giúp khách hàng{" "}
              <strong>cảm nhận được</strong>. Chiến lược độc đáo, hình ảnh ấn tượng, nội dung sâu
              sắc - tất cả tạo nên <strong>khoảnh khắc chạm</strong>, nơi khách hàng{" "}
              <strong>không chỉ thấy</strong>, mà còn muốn <strong>tin tưởng</strong> và{" "}
              <strong>thuộc về thương hiệu của bạn</strong>.
            </p>
            <p className="mb-6 text-lg text-gray-300">
              Với sức mạnh đa nền tảng – từ{" "}
              <strong>visual, motion, production đến chiến lược</strong> – ANN tạo nên một{" "}
              <strong>ngôn ngữ riêng</strong> cho thương hiệu, một <strong>cảm xúc riêng</strong>,
              và một <strong>chỗ đứng đáng nhớ</strong>
              trong lòng khách hàng.
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
              <h2 className="mb-3 text-4xl leading-tight font-normal text-[var(--color-text-red-theme-500)]">
                _ Our solutions
              </h2>
              <button className="rounded bg-[var(--color-text-red-theme-500)] px-6 py-3 font-medium text-white transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]">
                Xem thêm
              </button>
            </div>
            <div className="flex justify-center md:justify-end">
              <p className="mb-6 leading-relaxed text-gray-300 md:text-xl">
                ANN Multimedia tạo nên các giải pháp digital & multimedia giúp thương hiệu không bị
                lẫn - mà được nhận diện rõ ràng, truyền tải đúng vibe, và để lại ấn tượng lâu dài.
              </p>
            </div>
          </div>

          <SolutionBlock
            title="Marketing & Communication"
            description="Đối tác đột phá toàn diện cho doanh nghiệp, tập trung vào mảng Digital."
            items={[
              "Thiết kế, sản xuất các nội dung số trên Digital",
              "Paid Media Booking trên đa kênh Digital",
              "Đội ngũ Marketing in-house, từ tư vấn đến triển khai",
            ]}
          />

          <SolutionBlock
            title="Media Buying Platform"
            description="Dễ dàng khám phá & đặt mua hàng ngàn các quảng cáo đa dạng từ các kênh targeting qua cổng, influencers, website hàng đầu Việt Nam."
            items={[
              "Media Discover",
              "Media Buying",
              "Marketplace",
              "Media Alliance",
              "Manage Campaign",
            ]}
            reverse={true}
          />

          <SolutionBlock
            title="Training & Consultancy"
            description="Đối tác đột phá toàn diện cho doanh nghiệp, tập trung vào mảng Digital."
            items={["Tư vấn doanh nghiệp", "Đào tạo doanh nghiệp", "More"]}
          />

          <SolutionBlock
            title="Social Advertisement"
            description="Định dạng quảng cáo sáng tạo, hiệu quả trên đa nền tảng mạng xã hội."
            items={["Banner Standard", "Video Ad", "Native Ad", "Action Ad"]}
            reverse={true}
          />

          <SolutionBlock
            title="Branding Solution"
            description="Tạo dựng thương hiệu mạnh với chiến lược toàn diện từ online đến offline."
            items={[
              "Social Media Ads",
              "Kenh 14",
              "Grab, Be, Xanh SM",
              "Billboard, LCD",
              "Car Branding",
            ]}
          />
        </div>
      </section>

      <section className="bg-(--color-bg-main) py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* Cột trái: Tiêu đề, mô tả, câu hỏi */}
            <div>
              <h2 className="my-6 text-4xl font-medium md:text-4xl">
                We champion the bold to achieve the extraordinary.
              </h2>

              {/* Phần mô tả thêm (nếu có) */}
              <p className="my-6 text-gray-200">
                Answer this question and put our thinking to work on your challenges.
              </p>

              <p className="my-4 text-xl font-medium">
                Which country are you looking forward to expanding to?
              </p>

              {/* Nhóm nút quốc gia */}
              <div className="flex flex-wrap gap-3">
                {["Vietnam", "Thailand", "Japan", "China"].map((country) => (
                  <button
                    key={country}
                    className="rounded border border-white px-5 py-2 transition hover:cursor-pointer hover:bg-white hover:text-black"
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>

            {/* Cột phải: Ảnh */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/body.avif"
                alt="Market scene"
                width={500} // Bạn có thể chỉnh
                height={300} // theo kích thước mong muốn
                className="rounded shadow-md"
              />
            </div>
          </div>
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
