export default function Solution() {
  return (
    <main>
      <section className="relative min-h-screen w-screen">
        <div className="absolute inset-0 z-0 h-screen w-screen bg-[url('/images/socialelite.png')] bg-cover bg-center" />

        {/* Nội dung */}
        <div className="relative z-10 mx-auto flex w-full flex-col items-start justify-between px-4 py-28 md:px-28">
          <div className="relative z-10 px-6 py-20 text-white">
            <div className="container mx-auto flex flex-col items-center text-center md:flex-row md:text-left">
              <div className="md:w-1/2">
                <h1 className="mb-4 text-3xl font-bold md:text-5xl">
                  <span className="text-[var(--color-main-500)]">#1 </span>
                  influencer platform and celeb network in vietnam
                </h1>
                <button className="mt-4 rounded-full bg-[var(--color-main-500)] px-6 py-3 text-white">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Phần số liệu */}
        <div className="relative z-20 mx-auto w-full max-w-screen px-4 md:py-20">
          <div className="container mx-auto text-center">
            <h2 className="mb-10 text-4xl font-bold md:text-7xl">
              our <span className="text-[var(--color-main-500)]">elite™</span> network
            </h2>
            <div className="mx-auto flex w-full max-w-5xl flex-col justify-around space-y-8 md:flex-row md:space-y-0">
              {[
                { number: "100+", label1: "EXCLUSIVE", label2: "TALENTS" },
                { number: "1000+", label1: "ESTEEMED", label2: "BRANDS" },
                { number: "1000+", label1: "REPUTED", label2: "CAMPAIGNS" },
                { number: "50K+", label1: "KOL NETWORK", label2: "PLATFORM" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <h3 className="text-4xl font-bold text-[var(--color-main-500)] md:text-5xl">
                    {item.number}
                  </h3>
                  <p className="text-lg md:text-xl">{item.label1}</p>
                  <p className="text-lg md:text-xl">{item.label2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
