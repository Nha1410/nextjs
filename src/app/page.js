
import Image from "next/image";

export default function HomePage() {

  

  return (
    <main>
      {/* Hero Section */}
      <section className="/* Tạo khoảng trống tránh header, nếu cần */ relative h-screen w-full bg-[url('/images/home.png')] bg-cover bg-center pt-24">
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
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                We champion the bold to achieve the extraordinary.
              </h2>

              {/* Phần mô tả thêm (nếu có) */}
              <p className="mb-6 text-gray-200">
                Answer this question and put our thinking to work on your challenges.
              </p>

              <p className="mb-4 text-lg font-medium">
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
    </main>
  );
}
