import HeroSection from "./components/heroSection/heroSection";
import ProductGrid from "./components/productGrid/productGrid";
import Paragrapgh from "./components/paragrapgh/paragrapgh";
import Features from "./components/features/feature";
import { Metadata } from "next";
import { getHomePage } from "../../sanity/lib/client";
import { refactorHome } from "@/utils/home";

export const metadata: Metadata = {
  metadataBase: new URL("https://mediqlogix.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "MediQlogix Solutions - Hospital Quality Consulting Services",
  description:
    "MediQlogix: Transforming healthcare with AI-driven SaaS for hospitals. Enhance operations and patient outcomes with our cloud solutions. Explore innovation now!",
  openGraph: {
    url: "https://mediqlogix.com",
    title: "MediQlogix Solutions - Hospital Quality Consulting Services",
    description:
      "MediQlogix: Transforming healthcare with AI-driven SaaS for hospitals. Enhance operations and patient outcomes with our cloud solutions. Explore innovation now!",
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

export default async function Home() {
  let homeData = await getHomePage(process.env.NEXT_PUBLIC_SANITY_TOKEN);

  homeData = refactorHome(homeData);

  return (
    <div>
      <HeroSection {...homeData.heroSection} />
      <Paragrapgh {...homeData.welcomeSection} />
      <ProductGrid data={homeData.productServicesGrid} />
      <Features {...homeData.benefitsSection} />
    </div>
  );
}

// export async function getStaticProps(ctx: any) {
//   const { preview = false, previewData = {} } = ctx;

//   const token = previewData.token;
//   const [page] = await Promise.all([getHomePage({ token })]);
// }
