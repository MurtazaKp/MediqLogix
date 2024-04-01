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
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://mediqlogix.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    },
  },
  title: "MediQlogix Solutions - Hospital Quality Consulting Services",
  description: "MediQlogix: Transforming healthcare with AI-driven SaaS for hospitals. Enhance operations and patient outcomes with our cloud solutions. Explore innovation now!",  
  openGraph: {
    url: "https://mediqlogix.com",
    title: "MediQlogix Solutions - Hospital Quality Consulting Services",
    description: "MediQlogix: Transforming healthcare with AI-driven SaaS for hospitals. Enhance operations and patient outcomes with our cloud solutions. Explore innovation now!",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "MediQlogix Thumbnail",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com",
  },
};

export default function Home() {
  //   <NextSeo
  //   title="About Us | MediQlogix"
  //   description="About Us Page"
  //   canonical="https://mediqlogix.com/about"
  //   openGraph={{
  //     url: "https://mediqlogix.com/about",
  //     title: "About Us | MediQlogix",
  //     description: "About",
  //     images: [
  //       {
  //         url: "/images/seoImage.png",
  //         width: 800,
  //         height: 600,
  //         alt: "Mediqlogix Software Thumbnail",
  //         type: "image/png",
  //       },
  //     ],
  //     siteName: "MediQlogix",
  //   }}
  //   twitter={{
  //     handle: "@handle",
  //     site: "@site",
  //     cardType: "summary_large_image",
  //   }}
  // />
  // <LogoJsonLd logo="/images/seoImage.png" url="https://mediqlogix.com/about" />

  return (
    <div>
      <HeroSection />
      <Paragrapgh />
      <ProductGrid />
      <Features />
    </div>
  );
}
