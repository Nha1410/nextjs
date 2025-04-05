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
      <div className="container mx-auto w-4/5">
        <h2 className="mb-12 text-center text-5xl font-bold md:text-6xl">
          our <span className="text-red-500">solutions</span>
        </h2>

        {/* Grid container */}
        <div className="flex flex-col flex-wrap items-start gap-4 md:grid md:grid-cols-3 md:gap-2">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`flex w-full flex-row items-center gap-5 p-6 md:w-auto md:flex-col md:items-start ${
                index === 1 ? "md:flex-col-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative flex h-auto w-auto justify-center bg-transparent">
                <Image
                  src={solution.img}
                  alt={solution.title}
                  width={500}
                  height={500}
                  className="img-fluid"
                />
              </div>

              {/* Title & Description */}
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-xl font-semibold text-red-500 md:text-4xl">
                  {solution.title}
                </h3>
                <ul className="mt-6 space-y-4 text-base text-gray-700">
                  {solution.desc.map((item, i) => (
                    <li key={i} className="text-left">
                      {item.label && (
                        <span className="mb-1 block font-semibold text-red-500">
                          {item.label}
                        </span>
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
