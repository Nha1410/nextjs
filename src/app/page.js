import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}

      <section
        className="
    relative
    w-full
    h-screen
    bg-[url('/images/home.png')]
    bg-cover
    bg-center

    pt-24  /* Tạo khoảng trống tránh header, nếu cần */
  "
      >
        {/* Cha chứa 2 khối (Text và Form), chiếm toàn bộ chiều cao */}
        <div className="flex flex-col h-full justify-between items-start w-full mx-auto py-8 pl-8">
          {/* Khối trên: Text (nằm góc trên trái) */}
          <div className="text-white drop-shadow-md max-w-xl">
            <p className="text-sm my-4">Market entry, simplified.</p>
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Expansion consultant & Marketing agency.
              <br className="hidden sm:block" />
              All in one.
            </h1>
          </div>

          {/* Khối dưới: Form (nằm góc dưới phải) */}
          <div
            className="
    bg-teal-500
    w-2/3
    h-1/2
    p-6
    rounded
    shadow-lg
    flex
    flex-col
    justify-between
    self-end
  "
          >
            <h2 className="text-xl font-medium mb-6 text-white">
              SET AN INTRODUCTION MEETING TODAY
            </h2>

            {/* Form chia 2 cột trên màn hình >= md */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {/* Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-sm font-light text-white mb-1"
                >
                  Your Name <span className="text-red-400">*</span>
                </label>
                <div className="border-b border-white">
                  <input
                    type="text"
                    id="name"
                    className="
            w-full
            bg-transparent
            text-white
            placeholder-white/70
            px-2
            py-2
            focus:outline-none
          "
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="flex flex-col">
                <label
                  htmlFor="company"
                  className="text-sm font-light text-white mb-1"
                >
                  Company <span className="text-red-400">*</span>
                </label>
                <div className="border-b border-white">
                  <input
                    type="text"
                    id="company"
                    className="
            w-full
            bg-transparent
            text-white
            placeholder-white/70
            px-2
            py-2
            focus:outline-none
          "
                    placeholder="Your company"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-light text-white mb-1"
                >
                  Email <span className="text-red-400">*</span>
                </label>
                <div className="border-b border-white">
                  <input
                    type="email"
                    id="email"
                    className="
            w-full
            bg-transparent
            text-white
            placeholder-white/70
            px-2
            py-2
            focus:outline-none
          "
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-sm font-light text-white mb-1"
                >
                  Phone <span className="text-red-400">*</span>
                </label>
                <div className="border-b border-white">
                  <input
                    type="text"
                    id="phone"
                    className="
            w-full
            bg-transparent
            text-white
            placeholder-white/70
            px-2
            py-2
            focus:outline-none
          "
                    placeholder="Your phone"
                  />
                </div>
              </div>

              {/* Nút Submit (full width 2 cột, canh phải) */}
              <div className="md:col-span-2 flex justify-end mt-4">
                {/* Bạn có thể đổi style để thành dạng outline hoặc solid */}
                <button
                  type="submit"
                  className="
          border
          border-white
          text-white
          px-6
          py-2
          rounded
          hover:bg-white
          hover:text-teal-500
          transition
        "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#19202c] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Cột trái: Tiêu đề, mô tả, câu hỏi */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We champion the bold to achieve the extraordinary.
              </h2>

              {/* Phần mô tả thêm (nếu có) */}
              <p className="text-gray-200 mb-6">
                Answer this question and put our thinking to work on your
                challenges.
              </p>

              <p className="mb-4 text-lg font-medium">
                Which country are you looking forward to expanding to?
              </p>

              {/* Nhóm nút quốc gia */}
              <div className="flex flex-wrap gap-3">
                {["Vietnam", "Thailand", "Japan", "China"].map((country) => (
                  <button
                    key={country}
                    className="
                      px-5
                      py-2
                      border
                      border-white
                      rounded
                      hover:bg-white
                      hover:text-black
                      transition
                    "
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
