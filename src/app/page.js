import Image from "next/image";
import ClientsSection from "@/components/ClientsSection";

export default function HomePage() {
  return (
    <main>
      <section className="relative h-screen w-full bg-[url('/images/home.png')] bg-cover bg-center pt-24">
        {/* Cha chứa 2 khối (Text và Form), chiếm toàn bộ chiều cao */}
        <div className="mx-auto flex h-full w-full flex-col items-start justify-between py-8 pl-8">
          {/* Khối trên: Text (nằm góc trên trái) */}
          <div className="max-w-xl text-white drop-shadow-md">
            <p className="my-4 text-sm">Market entry, simplified.</p>
            <h1 className="mb-4 text-5xl leading-tight font-bold">
              Expansion consultant & Marketing agency.
              <br className="hidden sm:block" />
              All in one.
            </h1>
          </div>

          {/* Khối dưới: Form (nằm góc dưới phải) */}
          <div className="flex h-1/2 w-2/3 flex-col justify-between self-end rounded bg-teal-500 p-6 shadow-lg">
            <h2 className="mb-6 text-xl font-medium text-white">
              SET AN INTRODUCTION MEETING TODAY
            </h2>

            {/* Form chia 2 cột trên màn hình >= md */}
            <form className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-sm font-light text-white">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <div className="border-b border-white">
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent px-2 py-2 text-white placeholder-white/70 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="flex flex-col">
                <label htmlFor="company" className="mb-1 text-sm font-light text-white">
                  Company <span className="text-red-400">*</span>
                </label>
                <div className="border-b border-white">
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-transparent px-2 py-2 text-white placeholder-white/70 focus:outline-none"
                    placeholder="Your company"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-sm font-light text-white">
                  Email <span className="text-red-400">*</span>
                </label>
                <div className="border-b border-white">
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent px-2 py-2 text-white placeholder-white/70 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-1 text-sm font-light text-white">
                  Phone <span className="text-red-400">*</span>
                </label>
                <div className="border-b border-white">
                  <input
                    type="text"
                    id="phone"
                    className="w-full bg-transparent px-2 py-2 text-white placeholder-white/70 focus:outline-none"
                    placeholder="Your phone"
                  />
                </div>
              </div>

              {/* Nút Submit (full width 2 cột, canh phải) */}
              <div className="mt-4 flex justify-end md:col-span-2">
                {/* Bạn có thể đổi style để thành dạng outline hoặc solid */}
                <button
                  type="submit"
                  className="rounded border border-white px-6 py-2 text-white transition hover:bg-white hover:text-teal-500"
                >
                  Submit
                </button>
              </div>
            </form>
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

              <p className="my-4 text-lg font-medium">
                Which country are you looking forward to expanding to?
              </p>

              {/* Nhóm nút quốc gia */}
              <div className="flex flex-wrap gap-3">
                {["Vietnam", "Thailand", "Japan", "China"].map((country) => (
                  <button
                    key={country}
                    className="rounded border border-white px-5 py-2 transition hover:bg-white hover:text-black"
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
          <h2 className="mb-10 text-lg font-semibold tracking-wide text-gray-500 uppercase">
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

      <section className="bg-teal-400 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <div className="flex flex-col items-center justify-center px-5 text-center">
              <h3 className="mb-4 text-2xl leading-relaxed font-normal md:text-3xl">
                Discovering where to expand?
              </h3>
              <button className="rounded border border-white bg-transparent px-5 py-2 font-medium text-white transition hover:bg-white hover:text-teal-400">
                LET'S GET TO WORK
              </button>
            </div>

            <div className="mx-auto hidden h-20 w-[2px] bg-white md:block"></div>

            <div className="flex flex-col items-center justify-center px-5 text-center">
              <h3 className="mb-4 text-2xl leading-relaxed font-normal md:text-3xl">
                Decided on a market?
              </h3>
              <button className="rounded border border-white bg-transparent px-5 py-2 font-medium text-white transition hover:bg-white hover:text-teal-400">
                LET'S GET TO WORK
              </button>
            </div>

            <div className="mx-auto hidden h-20 w-[2px] bg-white md:block"></div>

            <div className="flex flex-col items-center justify-center px-5 text-center">
              <h3 className="mb-4 text-2xl leading-relaxed font-normal md:text-3xl">
                Know exactly what you need?
              </h3>
              <button className="rounded border border-white bg-transparent px-5 py-2 font-medium text-white transition hover:bg-white hover:text-teal-400">
                LET'S GET TO WORK
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#03052e] py-20 text-white">
        {/* Phần trên: Arrow + text */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* Cột trái */}
            <div className="flex flex-col">
              <p className="mb-10 text-xl font-medium tracking-wide text-gray-400 uppercase">
                We work with top notch clients
              </p>
              <div>
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
                  className="fill-current text-white"
                >
                  <g>
                    <path
                      d="M170.281 20.146v144.371L25.892 20.16l-6.27 6.268 144.421 144.393H19.588v8.866h159.561V20.146h-8.868z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </div>
            </div>

            {/* Cột phải (text lệch phải) */}
            <div className="text-right">
              <h3 className="text-xl font-semibold md:text-2xl">
                Partners who understand your business
              </h3>
            </div>
          </div>
        </div>

        {/* Grid các ô vuông logo */}
        <div className="mt-10 grid w-full grid-cols-5">
          {/* Ô 1 */}
          <div className="flex aspect-square items-center justify-center border border-white">
            <Image
              src="/images/krungsri.png"
              alt="Krungsri"
              width={200} // Hoặc 100, tuỳ ý
              height={100}
              className="object-contain"
            />
          </div>

          {/* Ô 2 */}
          <div className="flex aspect-square items-center justify-center border border-white">
            <Image
              src="/images/nSys.png"
              alt="nSys"
              width={100}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Ô 3 */}
          <div className="flex aspect-square items-center justify-center border border-white">
            <Image
              src="/images/tiktok_shop.png"
              alt="TikTok Shop"
              width={100}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Ô 4 */}
          <div className="flex aspect-square items-center justify-center border border-white">
            <Image
              src="/images/viettel.png"
              alt="Viettel"
              width={200} // Hoặc 100, tuỳ ý
              height={80}
              className="object-contain"
            />
          </div>

          {/* Ô 5 */}
          <div className="flex aspect-square items-center justify-center border border-white">
            <Image
              src="/images/tiktok.png"
              alt="TikTok"
              width={200} // Hoặc 100, tuỳ ý
              height={80}
              className="object-contain"
            />
          </div>
          <div className="flex aspect-square items-center justify-center border border-white">
            <Image
              src="/images/krungsri.png"
              alt="Krungsri"
              width={200} // Hoặc 100, tuỳ ý
              height={100}
              className="object-contain"
            />
          </div>

          {/* Ô 2 */}
          <div className="flex aspect-square items-center justify-center border border-white">
            <Image
              src="/images/nSys.png"
              alt="nSys"
              width={100}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Ô 3 */}
          <div className="flex aspect-square items-center justify-center border border-white">
            <Image
              src="/images/tiktok_shop.png"
              alt="TikTok Shop"
              width={100}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Ô 4 */}
          <div className="flex aspect-square items-center justify-center border border-white">
            <Image
              src="/images/viettel.png"
              alt="Viettel"
              width={200} // Hoặc 100, tuỳ ý
              height={80}
              className="object-contain"
            />
          </div>

          {/* Ô 5 */}
          <div className="flex aspect-square items-center justify-center border border-white">
            <Image
              src="/images/tiktok.png"
              alt="TikTok"
              width={200} // Hoặc 100, tuỳ ý
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <ClientsSection />
      {/*
        <section className="overflow-hidden bg-[#dfeaff] py-16">
          <div className="z-10 container mx-auto flex flex-col items-start px-4 md:flex-row md:items-center">
            <div className="md:w-1/2">
              <p className="mb-2 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                — WHO WE ARE
              </p>

              <h2 className="mb-4 text-2xl leading-snug font-bold text-slate-800 md:text-3xl lg:text-4xl">
                We help customers be more{" "}
                <span className="text-blue-600">innovative, effective, successful</span> in Marketing
                & Sales.
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

              <button className="rounded bg-blue-600 px-6 py-3 text-white shadow-md transition hover:bg-blue-700">
                See our profile
              </button>
            </div>

            <div className="mt-8 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end">
              <Image
                src="/images/who_we_are.png"
                alt="We help customers"
                width={500}
                height={500}
                className="h-auto w-auto"
              />
            </div>
          </div>
        </section>
      */}
    </main>
  );
}
