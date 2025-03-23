// src/components/ClientsSection.js
"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView"; // Đường dẫn tuỳ bạn

export default function ClientsSection() {
  return (
    <section className="w-full bg-[#03052e] py-20 text-white">
      {/* PHẦN TRÊN: Arrow + text */}
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

      {/* PHẦN GRID CÁC Ô LOGO */}
      <div className="mt-10 grid w-full grid-cols-5">
        {/* Row 1 */}
        <LogoCell src="/images/krungsri.png" alt="Krungsri" />
        <LogoCell src="/images/nSys.png" alt="nSys" />
        <LogoCell src="/images/tiktok_shop.png" alt="TikTok Shop" />
        <LogoCell src="/images/viettel.png" alt="Viettel" />
        <LogoCell src="/images/tiktok.png" alt="TikTok" />

        {/* Row 2 */}
        <LogoCell src="/images/krungsri.png" alt="Krungsri" />
        <LogoCell src="/images/nSys.png" alt="nSys" />
        <LogoCell src="/images/tiktok_shop.png" alt="TikTok Shop" />
        <LogoCell src="/images/viettel.png" alt="Viettel" />
        <LogoCell src="/images/tiktok.png" alt="TikTok" />
      </div>
    </section>
  );
}

/**
 * Component 1 ô logo, có animation fade + slide lên khi vào viewport
 */
function LogoCell({ src, alt }) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className="flex aspect-square items-center justify-center border border-white">
      <Image
        src={src}
        alt={alt}
        width={200}
        height={80}
        className={`object-contain transition-all duration-2000 ease-out ${isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} `}
      />
    </div>
  );
}
