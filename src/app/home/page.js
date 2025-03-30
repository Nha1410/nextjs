// src/app/home/page.js

import Image from "next/image";
import ClientsSection from "@/components/ClientsSection";
import SolutionsSection from "@/components/SolutionsSection";
import MySwiper from "@/components/MySwiper";
import NewsRecruitment from "@/components/NewsRecruitment";

export default function Home() {
  return (
    <main>
      <section className="relative -mt-16 h-screen w-full bg-[url('/images/home.png')] bg-cover bg-center">
        <div className="flex h-full w-full items-center justify-center px-4">
          <div className="max-w-3xl text-center text-white drop-shadow-md">
            <p className="mb-4 text-sm md:text-base">Market entry, simplified.</p>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
              Expansion consultant & Marketing agency.
              <br />
              All in one.
            </h1>
            <button className="group inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xl font-medium text-white shadow-md transition hover:bg-white hover:text-black">
              Contact Us
              <span className=" text-4xl transform transition-transform duration-300 group-hover:rotate-[45deg]">
                ↗
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#dfeaff] py-16">
        <div className="container mx-auto flex flex-col items-start px-4 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <p className="mb-2 text-sm font-semibold tracking-wide text-gray-500 uppercase">
              — WHO WE ARE
            </p>
            <h2 className="mb-4 text-2xl leading-snug font-bold text-slate-800 md:text-3xl lg:text-4xl">
              We help customers be more{" "}
              <span className="text-[var(--color-main-500)]">
                innovative, effective, successful
              </span>{" "}
              in Marketing &amp; Sales.
            </h2>
            <p className="mb-6 text-gray-600">
              Think Digital với định vị là một Innovative Digital Company tập trung vào các giải
              pháp mang tính đổi mới sáng tạo và hiệu quả cho các chiến dịch Marketing.
            </p>
            <p className="mb-6 text-gray-600">
              Với năng lực cốt lõi từ Strategy Planning, Media Booking đến Creative Production,
              Think Digital đang là đối tác uy tín và vững chắc cho Marketing, Branding,
              Communication cho hơn 100+ nhãn hiệu lớn trong và ngoài nước.
            </p>
            <button className="rounded bg-[var(--color-main-500)] px-6 py-3 text-white shadow-md transition hover:cursor-pointer hover:bg-[var(--color-main-400)]">
              See our profile
            </button>
          </div>

          <div className="mt-8 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end">
            <Image
              src="/images/home_solution.avif"
              alt="We help customers"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR SOLUTIONS */}
      <section className="overflow-hidden bg-[#dfeaff] py-16 text-[#03052e]">
        <div className="container mx-auto px-4">
          {/* Dùng cùng container + px-4 */}
          {/* --- PHẦN “OUR SOLUTIONS” TÁCH RIÊNG 2 CỘT --- */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-3 text-4xl leading-tight font-normal">
                <span className="text-[var(--color-main-500)]">_ </span>
                Our solutions
              </h2>
              <button className="rounded bg-[var(--color-main-500)] px-6 py-3 font-medium text-white transition hover:cursor-pointer hover:bg-[var(--color-main-400)]">
                Xem thêm
              </button>
            </div>
            <div className="flex justify-center md:justify-end">
              <div>
                <p className="mb-6 leading-relaxed text-gray-700 md:text-xl">
                  Người dùng muốn trải nghiệm đa dạng, nhận hàng cận xuất hiện đa kênh, Think
                  Digital chuyển mình đa dạng hoá.
                  <br />
                  Chúng tôi đưa ra các giải pháp cụ thể tập trung vào Marketing cho doanh nghiệp,
                  với các tập đoàn lớn để thúc đẩy mức tăng trưởng và hiệu quả hoạt động.
                </p>
              </div>
            </div>
          </div>

          {/* 1. Marketing & Communication */}
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="mb-4 text-3xl leading-tight font-semibold">
                1. Marketing &amp; Communication
              </h3>
              <p className="mb-5 text-xl leading-relaxed text-gray-700">
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
              <button className="rounded bg-[var(--color-main-500)] px-6 py-3 text-white shadow-md transition hover:cursor-pointer hover:bg-[var(--color-main-400)]">
                Xem thêm
              </button>
            </div>

            <div className="flex justify-center">
              <div className="max-w-2xl rounded-lg shadow-lg">
                <MySwiper />
              </div>
            </div>
          </div>

          {/* 2. Media Buying Platform */}
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 flex justify-center md:order-1">
              <div className="max-w-2xl rounded-lg shadow-lg">
                <MySwiper />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="mb-4 text-3xl leading-tight font-semibold">
                2. Media Buying Platform
              </h3>
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
              <button className="rounded bg-[var(--color-main-500)] px-6 py-3 text-white shadow-md transition hover:cursor-pointer hover:bg-[var(--color-main-400)]">
                Xem thêm
              </button>
            </div>
          </div>

          {/* 3. Training & Consultancy */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="mb-4 text-3xl leading-tight font-semibold">
                3. Training &amp; Consultancy
              </h3>
              <p className="mb-5 leading-relaxed text-gray-700">
                Đối tác đột phá toàn diện cho doanh nghiệp, tập trung vào mảng Digital.
              </p>
              <ul className="mb-5 list-disc space-y-2 pl-5 leading-relaxed text-gray-700">
                <li>Tư vấn doanh nghiệp</li>
                <li>Đào tạo doanh nghiệp</li>
                <li>More</li>
              </ul>
              <button className="rounded bg-[var(--color-main-500)] px-6 py-3 text-white shadow-md transition hover:cursor-pointer hover:bg-[var(--color-main-400)]">
                Xem thêm
              </button>
            </div>

            <div className="flex justify-center">
              <div className="max-w-2xl rounded-lg shadow-lg">
                <MySwiper />
              </div>
            </div>
          </div>
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

      <section className="bg-[var(--color-main-500)] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <div className="flex flex-col items-center justify-center px-5 text-center">
              <h3 className="mb-4 text-2xl leading-relaxed font-normal md:text-3xl">
                Discovering where to expand?
              </h3>
              <button className="rounded border border-white bg-transparent px-5 py-2 font-medium text-white transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-main-500)]">
                LET&lsquo;S GET TO WORK
              </button>
            </div>

            <div className="mx-auto hidden h-20 w-[2px] bg-white md:block"></div>

            <div className="flex flex-col items-center justify-center px-5 text-center">
              <h3 className="mb-4 text-2xl leading-relaxed font-normal md:text-3xl">
                Decided on a market?
              </h3>
              <button className="rounded border border-white bg-transparent px-5 py-2 font-medium text-white transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-main-500)]">
                LET&lsquo;S GET TO WORK
              </button>
            </div>

            <div className="mx-auto hidden h-20 w-[2px] bg-white md:block"></div>

            <div className="flex flex-col items-center justify-center px-5 text-center">
              <h3 className="mb-4 text-2xl leading-relaxed font-normal md:text-3xl">
                Know exactly what you need?
              </h3>
              <button className="rounded border border-white bg-transparent px-5 py-2 font-medium text-white transition hover:cursor-pointer hover:bg-white hover:text-[var(--color-main-500)]">
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
