"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function ClientsSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-6 pb-6 md:grid-cols-2">
          {/* Cột trái */}
          <div className="flex flex-col">
            <p className="mb-6 text-lg font-medium tracking-wide text-gray-400 uppercase sm:text-xl">
              We work with top notch clients
            </p>
            <div>
              <svg
                preserveAspectRatio="none"
                data-bbox="19.588 20.146 159.561 159.541"
                viewBox="19.588 20.146 159.561 159.541"
                height="60"
                width="60"
                xmlns="http://www.w3.org/2000/svg"
                data-type="shape"
                role="presentation"
                aria-hidden="true"
                className="fill-current text-gray-400"
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

          {/* Cột phải (text căn giữa trên mobile) */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold sm:text-2xl">
              Partners who understand your business
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          <LogoCell src="/images/facebook.png" alt="Facebook" />
          <LogoCell src="/images/instagram.png" alt="Instagram" />
          <LogoCell src="/images/youtube.png" alt="YouTube" />
          <LogoCell src="/images/tiktok.png" alt="TikTok" />
          <LogoCell src="/images/X.png" alt="Twitter / X" />
          {/* News Sites */}
          <LogoCell src="/images/kenh14.png" alt="Kenh14" />
          <LogoCell src="/images/vnexpress.png" alt="VNExpress" />
          <LogoCell src="/images/vtc.png" alt="VTC" />
          <LogoCell src="/images/zing.png" alt="Zing" />
          {/* Apps */}
          <LogoCell src="/images/grab.png" alt="Grab" />
          <LogoCell src="/images/acer.png" alt="Xanh SM" />
          <LogoCell src="/images/xanhsm.png" alt="Bee Taskee" />
          {/* Others */}
          <LogoCell src="/images/techcombank.png" alt="Techcombank" />
          <LogoCell src="/images/ocb.png" alt="OCB" />
          <LogoCell src="/images/vietinbank.png" alt="Vietinbank" />
        </div>
      </div>
    </section>
  );
}

function LogoCell({ src, alt }) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className="flex aspect-square items-center justify-center rounded-xl border border-gray-200 bg-white p-3 transition-all duration-300 ease-in-out"
    >
      <Image
        src={src}
        alt={alt}
        width={120}
        height={48}
        className={`object-contain transition-all duration-1000 ease-out ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      />
    </div>
  );
}
