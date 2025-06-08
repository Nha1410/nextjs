import { useState } from "react";

export default function OurSolutions({ content }) {
  const { solutions } = content;
  const [activeItems, setActiveItems] = useState({}); // key: sectionIndex, value: array of itemIndex

  const handleItemClick = (sectionIndex, itemIndex) => {
    setActiveItems((prev) => {
      const sectionItems = prev[sectionIndex] || [];
      if (sectionItems.includes(itemIndex)) return prev;

      return {
        ...prev,
        [sectionIndex]: [...sectionItems, itemIndex],
      };
    });
  };

  return (
    <section className="w-full py-12 md:py-20">
      <div className="mx-auto">
        {solutions.map((solution, sectionIndex) => (
          <div key={sectionIndex} className="relative mb-40">
            <div className="relative overflow-visible bg-gradient-to-br from-[#FAA6FF] to-[#E90000] pt-10">
              <h2 className="outline-text mb-12 text-center tracking-wide uppercase">
                {solution.title}
              </h2>

              <div className="relative h-[60px]">
                <div className="absolute top-full left-1/2 w-screen -translate-x-1/2 -translate-y-1/2 px-4 sm:w-auto sm:px-4">
                  <div className="scrollbar-hide jutify-center flex flex-row items-center gap-4 overflow-x-auto pb-4 sm:gap-6">
                    {solution.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex h-[90px] min-w-[90px] cursor-pointer flex-col items-center justify-center space-y-2 rounded-3xl bg-white/80 p-2 text-center shadow-lg backdrop-blur-md transition duration-300 hover:bg-gradient-to-br hover:from-[#FAA6FF] hover:to-[#E90000] sm:h-[140px] sm:w-[140px] md:p-0"
                        onClick={() => handleItemClick(sectionIndex, itemIndex)}
                      >
                        <img src={item.icon} alt={item.label} className="h-7 w-7 sm:h-8 sm:w-8" />
                        <span className="text-sm font-semibold text-gray-800 sm:text-base">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {activeItems[sectionIndex]?.length > 0 && (
              <div className="mt-32 px-2 sm:px-4">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
                  {activeItems[sectionIndex].map((itemIndex) => {
                    const item = solution.items[itemIndex];
                    return (
                      <div
                        key={itemIndex}
                        className="rounded-xl bg-white/90 p-4 text-left text-gray-700 shadow-md sm:p-6"
                      >
                        <p className="mb-1 text-lg font-bold text-[var(--color-text-red-theme-500)] sm:text-xl">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium sm:text-base">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
