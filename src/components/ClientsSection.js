"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { useLanguage } from "@/components/LanguageSwitcher";
import vi from "../app/i18n/clients.vi";
import en from "../app/i18n/clients.en";

export default function ClientsSection() {
  const { language } = useLanguage();
  const content = language === "vi" ? vi : en;

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">{content.title}</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          <LogoCell src="/images/facebook.png" alt="Facebook" />
          <LogoCell src="/images/instagram.png" alt="Instagram" />
          <LogoCell src="/images/youtube.png" alt="YouTube" />
          <LogoCell src="/images/tiktok.png" alt="TikTok" />
          <LogoCell src="/images/X.png" alt="Twitter / X" />
          <LogoCell src="/images/kenh14.png" alt="Kenh14" />
          <LogoCell src="/images/vnexpress.png" alt="VNExpress" />
          <LogoCell src="/images/vtc.png" alt="VTC" />
          <LogoCell src="/images/zing.png" alt="Zing" />
          <LogoCell src="/images/grab.png" alt="Grab" />
          <LogoCell src="/images/acer.png" alt="Xanh SM" />
          <LogoCell src="/images/xanhsm.png" alt="Bee Taskee" />
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
      className="flex aspect-square items-center justify-center rounded-xl border border-gray-300 bg-white p-3 transition-all duration-300 ease-in-out"
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
