import React from "react";
import About from "../about/page";
import SoftwareProducts from "../components/software/software";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import SoftwareContent from "../components/software/softwareContent/softwareContent";
import TabLayout from "../components/tabLayout/tabLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software | Mediqlogix",
  description: "Software page ",
  alternates: {
    canonical: "https://mediqlogix.com/software",
  },
  openGraph: {
    url: "https://mediqlogix.com/software",
    title: "Software | Mediqlogix",
    description: "Mediqm Platform",
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

const Software = () => {
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
          <SoftwareContent />
        </TabLayout>
      </div>
    </div>
  );
};

export default Software;
