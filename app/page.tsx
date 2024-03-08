import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <>
      <Header />
      <Layout />
      <Footer />
    </>
  );
}
