// components/FeatureBlock.jsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FeatureBlock = ({ number, title, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.3 // Trigger when 30% of block is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col space-y-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-6xl font-extrabold text-[var(--color-text-red-theme-500)]"
      >
        {number}
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl md:text-2xl font-bold text-black leading-snug border-b-2 border-[var(--color-main-200)] pb-1 w-fit"
      >
        {title}
      </motion.h3>

      

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-justify text-base md:text-lg text-gray-800 leading-relaxed tracking-wide whitespace-pre-line"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default FeatureBlock;
