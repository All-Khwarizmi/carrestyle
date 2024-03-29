import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { BenefitsObjectionsData } from "./components/Painpoints";

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsObjectionsData />
      <Contact />
      <Footer />
    </>
  );
}
