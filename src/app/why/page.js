// components/FeatureBlock.jsx
"use client";

import Image from "next/image";
import FeatureBlock from "../../components/FeatureBlock";
import { motion } from "framer-motion";
import Rounded from "../../components/RoundedButton";
import Link from "next/link";
import { useLanguage } from "../../components/LanguageSwitcher";
import vi from "../i18n/whyChooseUs.vi";
import en from "../i18n/whyChooseUs.en";

export default function Home() {
  const { language } = useLanguage();
  const content = language === "vi" ? vi : en;

  return (
    <>
      <section className="relative w-full bg-white bg-cover bg-center pb-16">
        <div className="container mx-auto px-8 py-16 sm:px-12 md:px-20 lg:px-32 xl:px-48">
          {/* Section Title */}
          <div className="mt-10 flex w-full flex-col items-start gap-8 pb-24 md:flex-row">
            <div className="w-full max-w-xl md:w-1/2">
              <h1 className="text-left">
                <span className="block text-2xl font-bold text-gray-900 md:text-4xl">
                  {content.title1}
                </span>
                <span className="block text-3xl font-bold text-[var(--color-text-red-theme-500)] md:text-5xl">
                  {content.title2}
                </span>
              </h1>
            </div>
            <div className="w-full max-w-xl md:w-1/2">
              <p className="text-justify text-black md:text-xl">{content.description}</p>
            </div>
          </div>

          {/* Image */}
          <div className="mt-12 flex justify-center">
            <Image
              src="/images/why-choose-us/Why_choose_us.png"
              alt="Main Image"
              width={900}
              height={600}
            />
          </div>

          {/* Feature Blocks */}
          <div className="mt-24 grid grid-cols-1 gap-x-32 gap-y-16 md:grid-cols-2">
            {content.features.map((feature) => (
              <FeatureBlock
                key={feature.number}
                number={feature.number}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Evolution Section with rounded corner background */}
      <section className="relative overflow-x-hidden bg-white py-23">
        {/* Background with animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="absolute top-0 right-0 z-0 h-full w-full rounded-tl-[100px] bg-[var(--color-text-red-theme-500)] md:h-5/7 md:w-5/6 lg:h-9/13"
        ></motion.div>

        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center px-6 md:flex-row md:justify-between md:px-12">
          {/* Image Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-20 -mt-28 w-full md:-mt-36 md:w-1/2 lg:-mt-40"
          >
            <div className="flex justify-center pr-0 md:justify-end md:pr-16">
              <Image
                src="/images/why-choose-us-3.png"
                alt="Our Evolution"
                width={600}
                height={600}
                className="h-auto max-w-full object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right Content Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="z-30 flex w-full -translate-y-6 flex-col justify-center text-center text-white md:w-1/2 md:-translate-y-12 md:pl-16 md:text-left"
          >
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <h2 className="text-5xl leading-tight font-extrabold md:text-6xl">Our</h2>
              <Link href="/solution">
                <motion.div
                  animate={{ x: [0, 20, 0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-black hover:bg-[#4b4b4b] md:h-12 md:w-12"
                >
                  <div className="h-2 w-2 rotate-135 border-t-2 border-l-2 border-white" />
                </motion.div>
              </Link>
            </div>

            <div className="mt-2">
              <h2 className="text-5xl leading-tight font-extrabold md:text-6xl">Solution</h2>
            </div>

            <div className="mt-4">
              <Link
                href="/solution"
                className="inline-flex items-center gap-2 text-lg font-medium text-white md:text-xl"
              >
                <Rounded>
                  <p>
                    Read now <span className="text-2xl">→</span>
                  </p>
                </Rounded>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
