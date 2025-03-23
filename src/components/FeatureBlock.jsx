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
      className="w-full max-w-xl"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-8xl font-extrabold text-gray-900 mb-2"
      >
        {number}
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-4xl font-semibold text-gray-800 mb-2"
      >
        {title}
      </motion.h3>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="w-12 h-0.5 bg-gray-300 mb-4"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg text-gray-600"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default FeatureBlock;
