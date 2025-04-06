import Image from "next/image";

export default function OurSolutions() {
  const solutions = [
    {
      img: "/images/business_1.png",
      title: "Social Advertisement",
      desc: [
        {
          label: "Advertisement Formats",
          value: [
            "Banner Standard",
            "Glitch",
            "Video Ad",
            "Carousel",
            "Native Ad",
            "Card Swipe",
            "Action Ad",
            "Countdown",
            "Animated 3D Cubes Interactive",
            "Scratch to Reveal",
            "Dancing 3D",
            "Shake & Brake",
          ],
        },
        {
          label: "Advertisement Placement",
          value: ["Facebook", "Instagram", "Linked In", "Twitter", "Tiktok", "Zalo"],
        },
      ],
    },
    {
      img: "/images/business_2.png",
      title: "Branding Solution",
      desc: [
        {
          label: "Online",
          value: [
            "Social Media Ads",
            "Sites: E-news, Kenh14,...",
            "Apps: Grab, Be, Xanh SM, Bee Taskee,...",
          ],
        },
        {
          label: "Offline",
          value: ["Out-of-home: Bill-board, LCD, Car Branding,..."],
        },
      ],
    },
    {
      img: "/images/business_3.png",
      title: "Creative Planning & Deployment",
      desc: [
        {
          value: ["Proposal Development", "Alignment with Client", "Deployment Detailed Plan"],
        },
      ],
    },
  ];

  return (
    <section className="w-screen justify-center py-16 md:py-24">
      <div className="container mx-auto lg:w-4/5">
        <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          our <span className="text-red-500">solutions</span>
        </h2>

        {/* Grid container */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`flex flex-col items-center md:items-start ${
                index === 1 ? "md:flex-col-reverse" : ""
              } p-4 sm:p-6`}
            >
              {/* Image */}
              <div className="relative flex w-full items-center justify-center bg-transparent">
                <Image
                  src={solution.img}
                  alt={solution.title}
                  width={400}
                  height={400}
                  className="h-auto object-contain"
                />
              </div>

              {/* Title & Description */}
              <div className="mt-4 w-full text-center md:text-left">
                <h3 className="text-xl font-semibold text-red-500 md:text-2xl lg:text-3xl">
                  {solution.title}
                </h3>
                <ul className="mt-6 space-y-4 text-base text-gray-700">
                  {solution.desc.map((item, i) => (
                    <li key={i} className="text-left">
                      {item.label && (
                        <span className="mb-1 block font-semibold text-red-500">{item.label}</span>
                      )}

                      {item.value && Array.isArray(item.value) && (
                        <ul
                          className={`ml-4 list-disc ${
                            index === 0 ? "grid grid-cols-2 gap-x-6 gap-y-1" : "space-y-1"
                          }`}
                        >
                          {item.value.map((subItem, idx) => (
                            <li key={idx} className="text-gray-800">
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
