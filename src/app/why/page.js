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
      <section className="relative w-full bg-white bg-cover bg-center">
        <div className="w-full">
          <Image
            src="/images/why-choose-us/why_choose_us.png"
            alt="About Us Header"
            width={1920}
            height={800}
            layout="responsive"
            className="w-full"
            priority
          />
        </div>

        <div className="flex w-full flex-col items-center bg-[var(--color-text-red-theme-500)] px-4 py-12 text-center md:px-0">
          <h1
            className="text-2xl font-bold text-white uppercase md:text-4xl lg:text-5xl"
            style={{
              fontFamily: '"Oswald", sans-serif',
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            {content.header}
          </h1>
          <p
            className="mt-4 max-w-3xl text-base text-white md:text-lg lg:text-xl"
            style={{
              fontFamily: '"Oswald", sans-serif',
              fontWeight: 400,
            }}
          >
            {content.subHeader}
          </p>
        </div>
      </section>

      <section className="relative w-full bg-white bg-cover bg-center pb-16">
        <div className="container mx-auto px-8 py-16 sm:px-12 md:px-20 lg:px-32 xl:px-48">
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
              <h2
                className="text-5xl leading-tight font-extrabold md:text-6xl"
                style={{
                  fontFamily: '"Oswald", sans-serif',
                  fontWeight: 400,
                }}
              >
                OUR
              </h2>
            </div>

            <div className="mt-2">
              <h2
                className="text-5xl leading-tight font-extrabold md:text-6xl"
                style={{
                  fontFamily: '"Oswald", sans-serif',
                  fontWeight: 400,
                }}
              >
                SOLUTIONS
              </h2>
            </div>

            <div className="mt-4">
              <Link
                href="/solution"
                className="inline-flex items-center gap-2 text-lg font-medium text-white md:text-xl"
              >
                <Rounded>
                  <p>Find More</p>
                </Rounded>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
