import React from "react";
import MediQM from "../components/mediQm/mediQM";
import { LogoJsonLd, NextSeo } from "next-seo";

const MediQm = () => {
  return (
    <>
      <NextSeo
        title="MediQm | MediQlogix"
        description="MediQm Page"
        canonical="https://mediqlogix.com/mediQM"
        openGraph={{
          url: "https://mediqlogix.com/mediQM",
          title: "MediQm | MediQlogix",
          description: "MediQM",
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
      <LogoJsonLd logo="/images/logo.png" url="https://mediqlogix.com/mediQM" />
      <div>
        <MediQM />
      </div>
    </>
  );
};

export default MediQm;
