import Image from "next/image";

export default function Solution() {
  return (
    <main>
      <section className="relative w-screen">
        <div className="absolute inset-0 z-0 h-screen w-screen bg-[url('/images/socialelite.png')] bg-cover bg-center" />
        {/* Nội dung */}
        <div className="relative z-10 mx-auto flex w-full flex-col items-start justify-between py-28 pl-28">
          {/* Text block */}
          <div className="relative z-10 px-6 py-20 text-white">
            <div className="container mx-auto ml-20 flex flex-col items-center md:flex-row">
              <div className="md:w-1/3">
                <h1 className="mb-4 text-5xl font-bold">
                  #1 influencer platform and celeb network in vietnam
                </h1>
                <button className="mt-4 rounded-full bg-green-500 px-6 py-3 text-white">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative left-20 z-10">
          <div className="container mx-auto text-center">
            <h2 className="mb-10 text-7xl font-bold">
              our
              <span className="text-7xl text-green-500">elite™</span>
              network
            </h2>
            <div className="mx-auto flex w-4/5 flex-col justify-around md:flex-row">
              <div className="mb-10 md:mb-0">
                <h3 className="text-5xl font-bold text-green-500">100+</h3>
                <p className="text-xl">EXCLUSIVE</p>
                <p className="text-xl">TALENTS</p>
              </div>
              <div className="mb-10 md:mb-0">
                <h3 className="text-5xl font-bold text-green-500">1000+</h3>
                <p className="text-xl">ESTEEMED</p>
                <p className="text-xl">BRANDS</p>
              </div>
              <div className="mb-10 md:mb-0">
                <h3 className="text-5xl font-bold text-green-500">1000+</h3>
                <p className="text-xl">REPUTED</p>
                <p className="text-xl">CAMPAIGNS</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-green-500">50K+</h3>
                <p className="text-xl">KOL NETWORK</p>
                <p className="text-xl">PLATFORM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen bg-white py-24">
        <div className="container mx-auto text-center">
          <h2 className="mb-12 text-7xl font-bold">
            our <span className="text-green-500">business</span>
          </h2>

          {/* Grid layout */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Service 1 */}
            <div className="flex flex-col items-center px-6">
              <Image src="/images/business_1.png" alt="service 1" width={240} height={240} />
              <h3 className="mb-4 text-2xl font-semibold text-green-500">KOC NETWORK</h3>
              <p className="text-gray-700">
                Largest KOC network with 50,000+ creators in various industries.
              </p>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col items-center px-6">
              <Image src="/images/business_2.png" alt="service 2" width={240} height={240} />
              <h3 className="mb-4 text-2xl font-semibold text-green-500">TIKTOK SHOP</h3>
              <p className="text-gray-700">
                Leading TikTok Shop partner delivering optimized e-commerce campaigns.
              </p>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col items-center px-6">
              <Image src="/images/business_3.png" alt="service 3" width={240} height={240} />
              <h3 className="mb-4 text-2xl font-semibold text-green-500">VIDEO PRODUCTION</h3>
              <p className="text-gray-700">
                Full-service video production team for brands and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
