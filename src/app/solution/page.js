import OurSolutions from "@/components/OurSolution";
import Image from "next/image";
import Link from "next/link";

export default function Solution() {
  return (
    <main className="bg-white">
      <section className="relative min-h-screen w-screen">
        <div className="absolute inset-0 z-0 h-screen w-screen bg-[url('/images/socialelite.png')] bg-cover bg-center" />

        {/* Nội dung */}
        <div className="relative z-10 mx-auto flex w-full flex-col items-start justify-between px-4 py-28 md:px-28">
          <div className="relative z-10 px-6 py-20 text-white">
            <div className="container mx-auto flex flex-col items-center text-center md:flex-row md:text-left">
              <div className="md:w-1/2">
                <h1 className="mb-4 text-3xl font-bold md:text-5xl">
                  <span className="text-[var(--color-text-red-theme-500)]">#1 </span>
                  influencer platform and celeb network in vietnam
                </h1>
                <Link
                  href="/contact"
                  className="inline-block mt-4 rounded-full bg-[var(--color-text-red-theme-500)] px-6 py-3 text-white"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Phần số liệu */}
        <div className="relative z-20 mx-auto w-full max-w-screen px-4 md:py-20 mt-6 md:mt-8 lg:mt-16">
          <div className="container mx-auto text-center">
            <h2 className="mb-10 text-4xl font-bold md:text-7xl text-[var(--color-text-red-theme-500)] ml-4 md:ml-6">
              our <span className="text-black">elite™</span> network
            </h2>
            <div className="mx-auto flex w-full max-w-5xl flex-col justify-around space-y-8 md:flex-row md:space-y-0">
              {[
                { number: "50+", label1: "MEDIA", label2: "PARTNERS" },
                { number: "20+", label1: "YEARS", label2: "EXPERIENCE" },
                { number: "30+", label1: "SUCCESS", label2: "CAMPAIGNS" },
                { number: "100+", label1: "BRANDS", label2: "COLLABORATED" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <h3 className="text-4xl font-bold text-[var(--color-text-red-theme-500)] md:text-5xl">
                    {item.number}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-400">{item.label1}</p>
                  <p className="text-lg md:text-xl text-gray-400">{item.label2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <OurSolutions />
      {/* <section className="w-screen justify-center py-16 md:py-24">
        <div className="container mx-auto w-4/5">
          <h2 className="mb-12 text-center text-5xl font-bold md:text-6xl">
            our <span className="text-[var(--color-main-500)]">business</span>
          </h2>

          <div className="grid grid-cols-1 items-start gap-2 md:grid-cols-3 md:gap-2">
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
              <div
                key={index}
                className={`flex flex-col items-center p-6 md:items-start ${
                  index === 1 ? "md:flex-col-reverse" : ""
                }`}
              >
                <div className="relative flex h-60 w-full justify-center bg-transparent">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "contain" }}
                    className=""
                  />
                </div>

                <div className="mt-6 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-[var(--color-main-500)] md:text-3xl">
                    {service.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-lg text-gray-700">
                    {service.desc.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}
