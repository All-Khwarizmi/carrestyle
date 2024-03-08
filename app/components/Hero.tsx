import Header from "./Header";

export default function Hero() {
  return (
    <section className="hero w-screen lg:h-screen">
      <Header />
      <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4">
        <div className="lg:w-3/6 flex flex-col items-center">
          <h2 className="primary-color max-w-xl lg:text-[4.2em] text-5xl font-bold leading-none text-black inline-block">
            Carré Style
          </h2>

          <p className="mt-6 max-w-2xl text-2xl font-semibold text-[#404040]">
            Le style de toutes vos envies
          </p>
        </div>
        <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
          <img src="/images/beton-hero2.jpg" alt="Hero" />
        </div>
        <div className="my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
          <img src="/images/beton-hero2.jpg" alt="image" />
        </div>
      </div>
    </section>
  );
}
