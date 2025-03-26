import Image from "next/image";

export default function Solution() {
  return (
    <main>
      <section className="relative w-screen">
        <div className="absolute inset-0 z-0 h-screen w-screen bg-[url('/images/socialelite.png')] bg-cover bg-center" />
        {/* Nội dung */}
        <div className="relative z-10 mx-auto flex w-full flex-col items-start justify-between px-4 py-28 md:px-28">
          {/* Text block */}
          <div className="relative z-10 px-6 py-20 text-white">
            <div className="container mx-auto ml-20 flex flex-col items-center text-center md:flex-row md:text-left">
              <div className="md:w-1/2">
                <h1 className="mb-4 text-3xl font-bold md:text-5xl">
                  #1 influencer platform and celeb network in vietnam
                </h1>
                <button className="mt-4 rounded-full bg-green-500 px-6 py-3 text-white">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Phần số liệu */}
        <div className="relative left-0 z-10 px-4 md:left-20 md:py-10">
          <div className="container mx-auto text-center">
            <h2 className="mb-10 text-4xl font-bold md:text-7xl">
              our <span className="text-green-500">elite™</span> network
            </h2>
            <div className="mx-auto flex w-full flex-col justify-around space-y-8 md:w-4/5 md:flex-row md:space-y-0">
              {[
                { number: "100+", label1: "EXCLUSIVE", label2: "TALENTS" },
                { number: "1000+", label1: "ESTEEMED", label2: "BRANDS" },
                { number: "1000+", label1: "REPUTED", label2: "CAMPAIGNS" },
                { number: "50K+", label1: "KOL NETWORK", label2: "PLATFORM" },
              ].map((item, index) => (
                <div key={index} className="mb-6 md:mb-0">
                  <h3 className="text-4xl font-bold text-green-500 md:text-5xl">{item.number}</h3>
                  <p className="text-lg md:text-xl">{item.label1}</p>
                  <p className="text-lg md:text-xl">{item.label2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="w-screen justify-center bg-white py-16 md:py-24">
        <div className="container mx-auto w-4/5">
          <h2 className="mb-12 text-center text-5xl font-bold md:text-6xl">
            our <span className="text-green-500">business</span>
          </h2>

          {/* Grid container */}
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-2">
            {[
              {
                img: "/images/business_1.png",
                title: "multi-channel network (MCN)",
                desc: [
                  "Creator incubation, training & promotion",
                  "Tiktok content & ecom affiliate strategy",
                  "Livestream operations",
                  "PR & crisis Management",
                ],
              },
              {
                img: "/images/business_2.png",
                title: "influencer marketing",
                desc: [
                  "Strategy & Planning",
                  "KOL Booking",
                  "Affiliate marketing",
                  "Communication Strategy",
                ],
              },
              {
                img: "/images/business_3.png",
                title: "production house",
                desc: [
                  "Expert short video production",
                  "Compelling tailored storytelling for impact",
                  "Fast turnaround time with efficient workflow",
                ],
              },
            ].map((service, index) => (
              <div key={index} className="relative flex flex-col items-start p-6">
                {/* Image */}
                <div className="flex w-full justify-center">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={280}
                    height={280}
                    className="rounded-lg shadow-lg"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-semibold text-green-500 md:text-3xl">
                  {service.title}
                </h3>

                {/* Description */}
                <ul className="mt-4 space-y-2 text-lg text-gray-700">
                  {service.desc.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
