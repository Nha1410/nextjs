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
            </div>

          {/* CỘT PHẢI: Địa chỉ, liên hệ */}
          <div className="ml-10 flex h-full flex-col justify-between">
            {/* Khối trên: Địa chỉ */}
            <div>
              <h3 className="mb-2 text-xl tracking-wide text-gray-500 uppercase">SOCIAL</h3>
              {/* (Tuỳ ý) Chèn icon mạng xã hội nếu cần */}
            <div className="mt-4 flex space-x-4">
              <img src="/images/icons/facebook.avif" alt="Facebook" className="h-10 w-10" />
              <img src="/images/icons/linkedin.avif" alt="LinkedIn" className="h-10 w-10" />
              <img src="/images/icons/instagram.avif" alt="Instagram" className="h-10 w-10" />
            </div>
            </div>

            {/* Khối giữa: Phone, Email */}

            

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
