import AboutUs from "@/app/components/about/about";
import React from "react";
import { LogoJsonLd, NextSeo } from "next-seo";

const About = () => {
  return (
    <>
      <NextSeo
        title="About Us | MediQlogix"
        description="About Us Page"
        canonical="https://mediqlogix.com/about"
        openGraph={{
          url: "https://mediqlogix.com/about",
          title: "About Us | MediQlogix",
          description: "About",
          images: [
            {
              url: "/images/logo.png",
              width: 800,
              height: 600,
              alt: "Mediqlogix Software Thumbnail",
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
      <LogoJsonLd logo="/images/logo.png" url="https://mediqlogix.com/about" />
      <div className="">
        <AboutUs />
      </div>
    </>
  );
};

export default About;
