"use client";

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
        <div className="absolute inset-0 z-0 max-h-[600px] md:max-h-[800px] w-full md:w-screen bg-[url('/images/solution/Cover.png')] bg-cover bg-center animate-fadeIn" />

        <div className="relative z-10 mx-auto flex w-full flex-col items-start justify-between px-4 py-12 md:py-28 md:px-28">
          <div className="relative z-10 px-6 md:py-20 text-white">
            <div className="container mx-auto ml-[-35px] md:ml-[-20px] flex flex-col items-center text-center md:flex-row md:text-left">
              <div className="md:w-1/2 animate-slideInLeft">
                <h1 className="mb-4 text-2xl font-bold md:text-[30px]">
                  {language === "vi" ? (
                    <>
                      <div className="md:whitespace-nowrap animate-fadeInUp">
                        <span className="text-[var(--color-text-red-theme-500)] hover:scale-110 transition-transform duration-300">#1 </span>
                        Digital & Multimedia{" "}
                      </div>
                      <div className="md:whitespace-nowrap animate-fadeInUp delay-200">
                        dành cho các thương hiệu tại Việt Nam
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="text-[var(--color-text-red-theme-500)] hover:scale-110 transition-transform duration-300">#1 </span>
                      Digital & Multimedia Branding Agency for brands in Viet Nam
                    </>
                  )}
                </h1>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-text-red-theme-500)] px-8 py-3 text-xl font-medium text-white italic shadow-md transition-all duration-300 hover:cursor-pointer hover:bg-white hover:text-red-600 hover:scale-105 animate-fadeInUp delay-300"
                >
                  {content.button}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto mt-94 w-full max-w-screen px-4 md:mt-8 md:py-20 lg:mt-94">
          <div className="container mx-auto text-center">
            <h2 className="mb-6 ml-4 text-4xl font-bold text-black md:ml-6 md:text-7xl">
              {content.networkTitle}{" "}
              <span className="text-[var(--color-text-red-theme-500)]">ANN Multimedia</span> Network
            </h2>
            <div className="mx-auto mt-10 flex w-1/2 max-w-5xl flex-col justify-around space-y-8 md:w-full md:flex-row md:space-y-0">
              {content.stats.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <h3 className="text-4xl font-bold text-[var(--color-text-red-theme-500)] md:text-5xl">
                    {item.number}
                  </h3>
                  <p className="text-lg text-gray-400 md:text-xl">{item.label1}</p>
                  <p className="text-lg text-gray-400 md:text-xl">{item.label2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <OurSolutions content={content.solutionSection} language={language} />

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
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
