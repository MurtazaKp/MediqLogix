import Image from "next/image";
import Header from "./components/header/header";
import HeroSection from "./components/heroSection/heroSection";
import ProductGrid from "./components/productGrid/productGrid";
import Footer from "./components/footer/footer";
import Paragrapgh from "./components/paragrapgh/paragrapgh";
import News from "./components/news/news";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Paragrapgh />
      <ProductGrid />
      <News />
      <Footer />
    </div>
  );
}
