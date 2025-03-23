// components/FeatureBlock.jsx
"use client";
import Image from "next/image";
import Preloader from "../../components/Preloader";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import FeatureBlock from "../../components/FeatureBlock";
import { motion } from "framer-motion";
import FramerMagnetic from "../../components/framer";
import Rounded from '../../components/RoundedButton';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  const features = [
    {
      number: "01",
      title: "Our Model",
      description:
        "NWA's service-breadth provides clients with end-to-end marketing solutions across Strategy, Creatives, Media and PR. A true One-Stop solution.",
    },
    {
      number: "02",
      title: "Our People",
      description:
        "The team has been trained by an International Communications group, to exacting international standards. Many have had long tenures with the agencies and very grounded in Vietnamese consumer behaviour.",
    },
    {
      number: "03",
      title: "International Quality Practices",
      description:
        "NWA prides itself with adhering to international standards in processes and delivering international quality work output accruing to its global agency heritage.",
    },
    {
      number: "04",
      title: "Deep Understanding Of Local Insights",
      description:
        "By understanding deeply nuanced insights of the market, NWA adds value to domestic international and local clients as an agency that deeply understands the Vietnamese consumer and how business is conducted here while the international-standards of outputs are guaranteed.",
    },
  ];

  return (
    <>
      <section className="relative w-full bg-white bg-cover bg-center pt-24 pb-16">
        <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>

        <div className="container mx-auto px-8 py-16 sm:px-12 md:px-20 lg:px-32 xl:px-48">
          {/* Section Title */}
          <div className="mt-10 flex w-full flex-col items-start gap-8 pb-24 md:flex-row">
            <div className="w-full max-w-xl md:w-1/2">
              <h1 className="text-left">
                <span className="block text-6xl font-bold text-gray-900">Why</span>
                <span className="block text-7xl font-bold text-blue-600">Choose Us</span>
              </h1>
            </div>
            <div className="w-full max-w-xl md:w-1/2">
              <p className="text-balance text-2xl text-gray-600">
                Networld Asia&apos;s digital communications group is at the epicenter where
                international standards meet local insights that power these 6 key competitive
                advantages:
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mt-12 flex justify-center">
            <Image src="/images/why-choose-us.png" alt="Main Image" width={900} height={600} />
          </div>

          {/* Feature Blocks */}
          <div className="mt-24 grid grid-cols-1 gap-x-32 gap-y-16 md:grid-cols-2">
            {features.map((feature) => (
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
      <section className="relative overflow-visible py-24">
        {/* Background with animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="absolute top-0 right-0 z-0 h-5/7 w-full rounded-tl-[100px] bg-blue-600 md:h-5/7 md:w-5/6 lg:h-5/7"
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
            {/* Line: Our [>] */}
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <h2 className="text-5xl leading-tight font-extrabold md:text-6xl">Our</h2>
              <motion.div
                animate={{ x: [0, 20, 0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-400 md:h-12 md:w-12"
              >
                <div className="h-2 w-2 rotate-135 border-t-2 border-l-2 border-white"></div>
              </motion.div>
            </div>

            {/* Line: Evolution */}
            <div className="mt-2">
              <h2 className="text-5xl leading-tight font-extrabold md:text-6xl">Solution</h2>
            </div>

            {/* CTA */}
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-lg font-medium text-white md:text-xl"
              >
                <Rounded >
                  Read now <span className="text-2xl">→</span>
                </Rounded>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
