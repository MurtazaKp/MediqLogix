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
import { DefaultSeo, LogoJsonLd, NextSeo } from "next-seo";
import SEO from '../../next-seo.config';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Home | MediQlogix"
        description="Home Page"
        canonical="https://mediqlogix.com"
        openGraph={{
          url: "https://mediqlogix.com",
          title: "Home | MediQlogix",
          description: "Home",
          images: [
            {
              url: "/images/seoImage.png",
              width: 800,
              height: 600,
              alt: "Mediqlogix Home Thumbnail",
              type: "image/png",
            },
          ],
          siteName: "MediQlogix",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <LogoJsonLd logo="images/logo.png" url="https://mediqlogix.com" />
      <div>
      <DefaultSeo {...SEO} />
        <HeroSection />
        <Paragrapgh />
        <ProductGrid />
        <Features />
        <CaseStudy />
        <PartnerSlider />
        {/* <News /> */}
      </div>
    </>
  );
}
