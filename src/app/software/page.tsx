import React from "react";
import About from "../about/page";
import SoftwareProducts from "../components/software/software";
import { NextSeo } from "next-seo";
import { LogoJsonLd } from "next-seo";

const Software = () => {
  return (
    <>
      <NextSeo
        title="Software | MediQlogix"
        description="Software Page"
        canonical="https://mediqlogix.com/software"
        openGraph={{
          url: "https://mediqlogix.com/software",
          title: "Software | MediQlogix",
          description: "Software",
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
      <LogoJsonLd
        logo="/images/logo.png"
        url="https://mediqlogix.com/software"
      />
      <div>
        <div className="">
          <SoftwareProducts />
        </div>
      </div>
    </>
  );
};

export default Software;
