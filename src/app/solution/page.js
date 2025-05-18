"use client";

import OurSolutions from "../../components/OurSolution";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../components/LanguageSwitcher";
import vi from "../i18n/solution.vi";
import en from "../i18n/solution.en";
import StatCount from "../../components/StatCount";

export default function SolutionContent() {
  const { language } = useLanguage();
  const content = language === "vi" ? vi : en;

  return (
    <main className="bg-white">
      <section className="relative min-h-screen w-screen">
        <div className="animate-fadeIn absolute inset-0 z-0 max-h-[350px] w-full bg-[url('/images/solution/background.png')] bg-cover bg-center md:max-h-[450px] md:w-screen" />

        <div className="relative z-10 mx-auto flex w-full flex-col items-start justify-between px-4 py-12 md:px-28 md:py-28">
          <div className="relative z-10 px-6 text-white md:py-10">
            <div className="container mx-auto ml-[-35px] flex flex-col items-center text-center md:ml-[-20px] md:flex-row md:text-left">
              <div className="animate-slideInLeft md:w-1/2">
                <h1 className="mb-4 text-2xl font-bold md:text-[30px]">
                  {language === "vi" ? (
                    <>
                      <div className="animate-fadeInUp md:whitespace-nowrap">
                        <span className="text-[var(--color-text-red-theme-500)] transition-transform duration-300 hover:scale-110">
                          #1{" "}
                        </span>
                        Digital & Multimedia{" "}
                      </div>
                      <div className="animate-fadeInUp delay-200 md:whitespace-nowrap">
                        dành cho các thương hiệu tại Việt Nam
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="text-[var(--color-text-red-theme-500)] transition-transform duration-300 hover:scale-110">
                        #1{" "}
                      </span>
                      Digital & Multimedia Branding Agency for brands in Viet Nam
                    </>
                  )}
                </h1>
                <Link
                  href="/contact"
                  className="group animate-fadeInUp inline-flex items-center gap-2 rounded-full bg-[var(--color-text-red-theme-500)] px-8 py-3 text-xl font-medium text-white italic shadow-md transition-all delay-300 duration-300 hover:scale-105 hover:cursor-pointer hover:bg-white hover:text-red-600"
                >
                  {content.button}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto mt-30 w-full max-w-screen px-4 md:pt-20 lg:mt-[-10px]">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold text-black md:text-6xl">
              {content.networkTitle}{" "}
              <span className="text-[var(--color-text-red-theme-500)]">ANN Multimedia</span> Network
            </h2>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {content.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center space-y-4 text-center text-black"
                >
                  <div className="flex h-[70px] w-[70px] items-center justify-center rounded-xl border border-gray-200 bg-gray-100 shadow-md">
                    <Image src={stat.icon} alt={stat.label} width={48} height={48} />
                  </div>
                  <div className="text-base font-medium">{stat.label}</div>
                  <div className="text-3xl font-extrabold text-[var(--color-text-red-theme-500)]">
                    <StatCount end={stat.count} suffix="+" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <OurSolutions content={content.solutionSection} language={language} />

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </main>
  );
}
