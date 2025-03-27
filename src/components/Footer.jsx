import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-white py-16 text-black">
      <div className="container mx-auto px-4">
        {/* Grid 3 cột trên desktop, 1 cột trên mobile */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* CỘT TRÁI: Logo + tagline */}
          <div className="flex flex-col items-start justify-start">
            {/* Logo */}
            <Image
              src="/images/logo_minto.avif"
              alt="MintaMarkets Logo"
              width={150}
              height={50}
              className="object-contain"
            />
            {/* Tagline */}
            <p className="mt-4 text-gray-600">Bold Steps Forward.</p>
          </div>

          {/* CỘT GIỮA: Form liên hệ */}
          <div className="flex flex-col px-15 md:col-span-2">
            <h3 className="mb-2 tracking-wide text-gray-500 uppercase">CONTACT US</h3>
            <h2 className="mb-6 text-2xl font-semibold text-[#03052e] md:text-3xl">
              Reach out with any questions or inquiries
            </h2>

            <form className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* First Name */}
              <div className="flex flex-col">
                <label htmlFor="firstName" className="mb-2 text-base font-thin text-[#03052e]">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                  placeholder="First Name"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label htmlFor="lastName" className="mb-2 text-base font-thin text-[#03052e]">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                  placeholder="Last Name"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-base font-thin text-[#03052e]">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                  placeholder="Email"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-2 text-base font-thin text-[#03052e]">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                  placeholder="Phone"
                />
              </div>

              {/* Message (full width) */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="blockbaseext-smthinfont-medium text-[#03052e]">
                  Leave us a message...
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                  placeholder="Type your message here"
                />
              </div>

              {/* Submit button (full width) */}
              <div className="mt-2 flex justify-start md:col-span-2">
                <button
                  type="submit"
                  className="max-w-[350px] rounded bg-[var(--color-main-500)] px-20 py-6 font-medium text-white shadow hover:bg-[var(--color-main-400)] hover:cursor-pointer focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* CỘT PHẢI: Địa chỉ, liên hệ */}
          <div className="ml-10 flex h-full flex-col justify-between">
            {/* Khối trên: Địa chỉ */}
            <div>
              <h3 className="mb-2 text-xl tracking-wide text-gray-500 uppercase">ADDRESS</h3>
              <p className="text-sm leading-relaxed text-[#03052e]">
                5 Nguyen Gia Thieu St., Vo Thi Sau ward, Dist. 3, Ho Chi Minh City, Vietnam
              </p>
              <div className="mt-4">
                <p className="mb-4 text-sm leading-relaxed text-gray-500">
                  <span className="text-xl font-medium uppercase">PHONE</span>
                  <br />
                  +84 908 886 815
                </p>
                <p className="text-sm leading-relaxed text-gray-500">
                  <span className="text-xl font-medium uppercase">EMAIL</span>
                  <br />
                  info@minta.inc.jp
                </p>
              </div>
            </div>

            {/* Khối giữa: Phone, Email */}

            {/* (Tuỳ ý) Chèn icon mạng xã hội nếu cần */}
            <div className="mt-4 flex space-x-4">
              <img src="/images/icons/facebook.avif" alt="Facebook" className="h-10 w-10" />
              <img src="/images/icons/linkedin.avif" alt="LinkedIn" className="h-10 w-10" />
              <img src="/images/icons/instagram.avif" alt="Instagram" className="h-10 w-10" />
            </div>

            {/* Khối dưới: Bản quyền */}
            <div className="mt-8">
              <p className="text-xs text-gray-400">
                © 2024 by Minto Inc.
                <br />
                Powered and secured by ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
