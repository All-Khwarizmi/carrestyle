import Header from "./Header";

export default function Hero() {
  return (
    <section className="hero w-screen lg:h-screen">
      <Header />
      <div className="max-w-8xl mx-auto inline-block justify-center  p-3 pt-0 lg:flex lg:flex-wrap items-center lg:pt-4">
        <div className="lg:w-3/6 flex flex-col items-center pb-12">
          <h2 className="primary-color max-w-xl text-5xl  lg:text-7xl font-bold leading-none text-black inline-block">
            Carré Style
          </h2>

          <p className="mt-6 max-w-2xl text-2xl lg:text-3xl font-semibold text-[#404040]">
            Le style de toutes vos envies
          </p>
        </div>
        <div className="  hidden w-full flex-col  lg:inline-block lg:w-3/6">
          <img src="/images/beton-hero2.jpg" width={"600px"} alt="Hero" />
        </div>
        <div className=" inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
          <img src="/images/beton-hero2.jpg" alt="image" />
        </div>
      </div>
    </section>
  );
}
