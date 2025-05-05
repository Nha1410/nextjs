export default function OurSolutions({ content }) {
  const { solutions } = content;

  return (
    <section className="w-screen justify-center py-16 md:py-24">
      <div className="mx-auto">
        <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          {content.title1}{" "}
          <span className="text-[var(--color-text-red-theme-500)]">{content.title2}</span>
        </h2>

        {solutions.map((solution, index) => (
          <div
            key={index}
            className="mb-20 rounded-3xl bg-gradient-to-br from-[#FAA6FF] to-[#E90000] py-16"
          >
            <h2 className="outline-text mb-12 tracking-wide uppercase">{solution.title}</h2>

            <div className="mt-12 flex flex-wrap justify-center gap-6 px-4">
              {solution.items.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex h-[140px] w-[140px] cursor-pointer flex-col items-center justify-center space-y-3 rounded-3xl bg-white/80 text-center shadow-lg backdrop-blur-md transition duration-300 hover:bg-white"
                >
                  <img src={item.icon} alt={item.label} className="h-8 w-8" />
                  <span className="font-semibold text-gray-800">{item.label}</span>

                  {/* Tooltip description */}
                  <div className="absolute bottom-[-80px] left-1/2 z-10 w-[200px] -translate-x-1/2 scale-95 rounded-lg bg-white p-3 text-sm text-gray-600 opacity-0 shadow-lg transition-all duration-300 ease-in-out group-hover:translate-y-2 group-hover:opacity-100">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
