import React from "react";
import About from "../about/page";
import SoftwareProducts from "../components/software/software";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import SoftwareContent from "../components/software/softwareContent/softwareContent";
import TabLayout from "../components/tabLayout/tabLayout";
import { Metadata } from "next";
import { getSoftwareProductPage } from "../../../sanity/lib/client";
import { refactorSoftware } from "@/utils/software";

export const metadata: Metadata = {
  title: "AI Driven Healthcare Management Software | Mediqlogix",
  description:
    "MediQlogix develops an AI-driven software platform designed for seamless integration with your IT systems",
  alternates: {
    canonical: "/software",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    url: "https://mediqlogix.com/software",
    title: "AI Driven Healthcare Management Software | Mediqlogix",
    description:
      "MediQlogix develops an AI-driven software platform designed for seamless integration with your IT systems",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Software page Thumbnail",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/software",
  },
};

export default async function Software() {
  let SoftwarePageData = await getSoftwareProductPage(
    process.env.NEXT_PUBLIC_SANITY_TOKEN
  );

  SoftwarePageData = refactorSoftware(SoftwarePageData);

  const tabs = {
    heading: "Software Products",
    tabs: [
      { id: 1, label: "Cloud MediQM", href: "/software/cloud-mediqm" },
      { id: 2, label: "MediQM Mobility", href: "/software/mediqm-mobility" },
      { id: 3, label: "MediQM Platform", href: "/software/mediqm-platform" },
      { id: 4, label: "MediQM Solution", href: "/software/mediqm-solution" },
    ],
  };
  return (
    <div>
      <div className="">
        <TabLayout {...tabs}>
          <SoftwareContent {...SoftwarePageData.software} />
        </TabLayout>
      </div>
    </div>
  );
}
