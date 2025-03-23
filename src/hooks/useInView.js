// src/hooks/useInView.js
"use client";

import { useEffect, useRef, useState } from "react";

export function useInView(options) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1, ...options }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}
