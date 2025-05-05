import { useState } from "react";

export default function OurSolutions({ content }) {
  const { solutions } = content;
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (sectionIndex, itemIndex) => {
    const key = `${sectionIndex}-${itemIndex}`;
    setActiveItem(activeItem === key ? null : key);
  };

  return (
    <section className="w-screen justify-center py-16 md:py-24">
      <div className="mx-auto">
        <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          {content.title1}{" "}
          <span className="text-[var(--color-text-red-theme-500)]">{content.title2}</span>
        </h2>

        {solutions.map((solution, sectionIndex) => (
          <div key={sectionIndex} className="relative mb-40">
            {/* Nền gradient */}
            <div className="relative overflow-visible bg-gradient-to-br from-[#FAA6FF] to-[#E90000] pt-10">
              <h2 className="outline-text mb-12 text-center tracking-wide uppercase">
                {solution.title}
              </h2>

              {/* Các items nổi nửa trên nửa dưới */}
              <div className="relative h-[60px]">
                <div className="absolute top-full left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-row justify-center gap-6 px-4">
                  {solution.items.map((item, itemIndex) => {
                    const itemKey = `${sectionIndex}-${itemIndex}`;
                    return (
                      <div
                        key={itemIndex}
                        className={`flex h-[140px] w-[140px] cursor-pointer flex-col items-center justify-center space-y-3 rounded-3xl bg-white/80 text-center shadow-lg backdrop-blur-md transition duration-300 hover:bg-gradient-to-br hover:from-[#FAA6FF] hover:to-[#E90000]`}
                        onClick={() => handleClick(sectionIndex, itemIndex)}
                      >
                        <img src={item.icon} alt={item.label} className="h-8 w-8" />
                        <span className="font-semibold text-gray-800">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mô tả nằm dưới gradient */}
            <div className="mt-32 px-4 text-center">
              {solution.items.map((item, itemIndex) => {
                const itemKey = `${sectionIndex}-${itemIndex}`;
                return (
                  activeItem === itemKey && (
                    <div
                      key={itemIndex}
                      className="mx-auto mt-4 max-w-xl rounded-xl bg-white/90 p-4 text-gray-700 shadow-md"
                    >
                      <p className="text-2xl font-bold text-[var(--color-text-red-theme-500)]">
                        {item.label}
                      </p>
                      <p className="text-base font-medium">{item.description}</p>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
