import Image from "next/image";
import Header from "./components/header/header";
import HeroSection from "./components/heroSection/heroSection";
import ProductGrid from "./components/productGrid/productGrid";
import Blog from "./components/blog/blog";
import Footer from "./components/footer/footer";
import Paragrapgh from "./components/paragrapgh/paragrapgh";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Paragrapgh />
      <ProductGrid />
      <Blog />
      <Footer />
    </div>
  );
}
