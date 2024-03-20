import Image from "next/image";
import Header from "./components/header/header";
import HeroSection from "./components/heroSection/heroSection";
import ProductGrid from "./components/productGrid/productGrid";
import Footer from "./components/footer/footer";
import Paragrapgh from "./components/paragrapgh/paragrapgh";
import News from "./components/news/news";
import Features from "./components/features/feature";
import PartnerSlider from "./components/partnerSlider/partnerSlider";
import CaseStudy from "./components/caseStudy/caseStudy";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Paragrapgh />
      <ProductGrid />
      <Features />
      <CaseStudy />
      <PartnerSlider />
      {/* <News /> */}
    </div>
  );
}
