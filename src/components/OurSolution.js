import Image from "next/image";

export default function OurSolutions() {
  const solutions = [
    {
      img: "/images/business_1.png",
      title: "Social Advertisement",
      desc: [
        {
          label: "Advertisement Formats",
          value: "Banner Standard, Video Ad, Native Ad, Action Ad",
        },
        {
          label: "Animated 3D Cubes Interactive",
          value:
            "Dancing 3D, Glitch, Carousel, Card Swipe, Countdown, Scratch to Reveal, Shake & Brake",
        },
        { label: "Ads Placement", value: "Facebook, LinkedIn, Twitter, Tiktok, Zalo" },
      ],
    },
    {
      img: "/images/business_2.png",
      title: "Branding Solution",
      desc: [
        {
          label: "Online",
          value: "Social Media Ads, Sites, Kenh 14, E-news, Apps, Grab, Be, Xanh SM, Bee Taskee",
        },
        { label: "Offline", value: "Out-of-home, Bill-board, LCD, Car Branding" },
      ],
    },
    {
      img: "/images/business_3.png",
      title: "Creative Planning & Deployment",
      desc: [
        // { label: "Proposal Development", value: "Alignment with Client, Deployment Detailed Plan" },
        { label: "Proposal Development" },
        { label: "Alignment with Client" },
        { label: "Deployment Detailed Plan" },
      ],
    },
  ];

  return (
    <section className="w-screen justify-center py-16 md:py-24">
      <div className="container mx-auto w-4/5">
        <h2 className="mb-12 text-center text-5xl font-bold md:text-6xl">
          our <span className="text-[var(--color-main-500)]">solutions</span>
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
                <h3 className="text-xl font-semibold text-[var(--color-main-500)] md:text-4xl">
                  {solution.title}
                </h3>
                <ul className="mt-6 space-y-4 text-lg text-gray-700">
                  {solution.desc.map((item, i) => (
                    <li key={i} className="text-left">
                      <span className="font-semibold text-[var(--color-main-500)]">
                        {item.label} {item.value ? "" : ""}
                      </span>
                      {item.value && <span className="text-gray-800"> {item.value}</span>}
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
