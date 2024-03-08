import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
