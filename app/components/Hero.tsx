import ContactButton from "./ContactButton";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="hero w-screen  xl:h-screen">
      <Header />
      <div className="max-w-8xl w-full mx-auto inline-block justify-center  p-3 pt-0 lg:flex lg:flex-wrap items-center lg:pt-4">
        <div className="lg:w-3/6 pb-12 xl:pb-0 h-full flex flex-col justify-center items-center">
          <h2 className="primary-color text-left max-w-xl text-5xl  lg:text-7xl font-bold leading-none text-black inline-block">
            Carré Style
          </h2>

          <p className="pt-4 max-w-2xl text-2xl lg:text-3xl font-semibold text-[#404040]">
            Le style de toutes vos envies
          </p>
          <ContactButton className="pt-8 hidden xl:inline-block" />
        </div>
        <img
          src="/images/beton-hero2.jpg"
          width={"600px"}
          className="w-full xl:w-3/6"
          alt="Hero"
        />
      </div>
      <div className="flex z-10 justify-center py-12  items-center h-max w-screen">
        <ContactButton className="xl:hidden" />
      </div>
    </section>
  );
}
