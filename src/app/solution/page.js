'use client';

import OurSolutions from "../../components/OurSolution";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../components/LanguageSwitcher";
import vi from "../i18n/solution.vi";
import en from "../i18n/solution.en";

export default function SolutionContent() {
  const { language } = useLanguage();
  const content = language === "vi" ? vi : en;

  return (
    <main className="bg-white">
      <section className="relative min-h-screen w-screen">
        <div className="absolute inset-0 z-0 h-screen w-screen bg-[url('/images/socialelite.png')] bg-cover bg-center" />

        <div className="relative z-10 mx-auto flex w-full flex-col items-start justify-between px-4 py-28 md:px-28">
          <div className="relative z-10 px-6 py-20 text-white">
            <div className="container mx-auto flex flex-col items-center text-center md:flex-row md:text-left">
              <div className="md:w-1/2">
                <h1 className="mb-4 text-3xl font-bold md:text-5xl">
                  {language === 'vi' ? (
                    <>
                      Đơn vị Branding thông qua Digital & Multimedia <span className="text-[var(--color-text-red-theme-500)]">Số 1</span> dành cho các thương hiệu tại Việt Nam
                    </>
                  ) : (
                    <>
                      <span className="text-[var(--color-text-red-theme-500)]">#1 </span>
                      Digital & Multimedia Branding Agency for brands in Viet Nam
                    </>
                  )}
                </h1>
                <Link
                  href="/contact"
                  className="inline-block mt-4 rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 text-white"
                >
                  {content.button}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto w-full max-w-screen px-4 md:py-20 mt-6 md:mt-8 lg:mt-16">
          <div className="container mx-auto text-center">
            <h2 className="mb-10 text-4xl font-bold md:text-7xl text-[var(--color-text-red-theme-500)] ml-4 md:ml-6">
              {content.networkTitle} <span className="text-black">ANN</span> network
            </h2>
            <div className="mx-auto flex w-full max-w-5xl flex-col justify-around space-y-8 md:flex-row md:space-y-0">
              {content.stats.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <h3 className="text-4xl font-bold text-[var(--color-text-red-theme-500)] md:text-5xl">
                    {item.number}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-400">{item.label1}</p>
                  <p className="text-lg md:text-xl text-gray-400">{item.label2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <OurSolutions />
    </main>
  );
}
