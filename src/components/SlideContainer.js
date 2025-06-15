"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SlideContainer = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef(null);
  const slides = Array.isArray(children) ? children : [children];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastScrollTime = Date.now();
    let scrollTimeout;
    let touchStartY = 0;
    let touchEndY = 0;

    const handleWheel = (e) => {
      e.preventDefault();
      
      const now = Date.now();
      if (now - lastScrollTime < 400) return;
      
      if (isScrolling) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      
      if ((direction > 0 && currentSlide < slides.length - 1) || 
          (direction < 0 && currentSlide > 0)) {
        setIsScrolling(true);
        setCurrentSlide(prev => prev + direction);
        
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

        setTimeout(() => {
          setIsScrolling(false);
        }, 600);
      }

      lastScrollTime = now;
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      touchEndY = e.changedTouches[0].clientY;
      const touchDiff = touchStartY - touchEndY;

      if (Math.abs(touchDiff) < 50) return; // Minimum swipe distance
      if (isScrolling) return;

      const direction = touchDiff > 0 ? 1 : -1;
      
      if ((direction > 0 && currentSlide < slides.length - 1) || 
          (direction < 0 && currentSlide > 0)) {
        setIsScrolling(true);
        setCurrentSlide(prev => prev + direction);
        
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

        setTimeout(() => {
          setIsScrolling(false);
        }, 600);
      }
    };

    const handleKeyDown = (e) => {
      if (isScrolling) return;

      if (e.key === "PageDown" || e.key === "ArrowDown") {
        e.preventDefault();
        if (currentSlide < slides.length - 1) {
          setIsScrolling(true);
          setCurrentSlide(prev => prev + 1);
          setTimeout(() => setIsScrolling(false), 600);
        }
      } else if (e.key === "PageUp" || e.key === "ArrowUp") {
        e.preventDefault();
        if (currentSlide > 0) {
          setIsScrolling(true);
          setCurrentSlide(prev => prev - 1);
          setTimeout(() => setIsScrolling(false), 600);
        }
      }
    };

    // Add event listeners
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(scrollTimeout);
    };
  }, [currentSlide, isScrolling, slides.length]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="h-full w-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots - visible on mobile */}
      {/* <div className="fixed right-4 top-1/2 z-50 -translate-y-1/2 md:right-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isScrolling) {
                setIsScrolling(true);
                setCurrentSlide(index);
                setTimeout(() => setIsScrolling(false), 600);
              }
            }}
            className={`mb-3 block h-2 w-2 rounded-full transition-all md:mb-4 md:h-3 md:w-3 ${
              currentSlide === index
                ? "h-3 w-3 bg-[var(--color-text-red-theme-500)] md:h-4 md:w-4"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div> */}

      {/* Scroll indicator - hidden on mobile */}
      <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 animate-bounce hidden md:flex">
        <div className="flex flex-col items-center text-white">
          <span className="mb-2 text-sm">Scroll to navigate</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SlideContainer; 