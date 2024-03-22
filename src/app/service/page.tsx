import React from "react";
import Services from "../components/service/service";
import { LogoJsonLd, NextSeo } from "next-seo";

const Service = () => {
  return (
    <>
      <NextSeo
        title="Home | MediQlogix"
        description="Service Page"
        canonical="https://mediqlogix.com/service"
        openGraph={{
          url: "https://mediqlogix.com/service",
          title: "Service | MediQlogix",
          description: "Service",
          images: [
            {
              url: "/images/seoImage.png",
              width: 800,
              height: 600,
              alt: "Mediqlogix Service Thumbnail",
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
      <LogoJsonLd logo="images/logo.png" url="https://mediqlogix.com/service" />
      <div>
        <Services />
      </div>
    </>
  );
};

export default Service;
