import Image from "next/image";

export default function OurSolutions({ content }) {
  const { solutions } = content;

  return (
    <section className="w-screen justify-center py-16 md:py-24">
      <div className="container mx-auto lg:w-4/5">
        <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          {content.title} <span className="text-[var(--color-text-red-theme-500)]">solutions</span>
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`flex flex-col items-center md:items-start ${
                index === 1 ? "md:flex-col-reverse" : ""
              } p-4 sm:p-6`}
            >
              <div className="relative flex w-full items-center justify-center bg-transparent">
                <Image
                  src={solution.img}
                  alt={solution.title}
                  width={400}
                  height={400}
                  className="h-auto object-contain"
                />
              </div>

              <div className="mt-4 w-full text-center md:text-left">
                <h3 className="text-xl font-semibold text-[var(--color-text-red-theme-500)] md:text-2xl lg:text-3xl">
                  {solution.title}
                </h3>
                <p className="mt-6 text-base text-gray-700">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
