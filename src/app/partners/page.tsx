import Partners from "@/app/components/mediQm/partners/partners";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Partners | Mediqlogix",
  description: "Partners page ",
  alternates: {
    canonical: "https://mediqlogix.com/partners",
  },
  openGraph: {
    url: "https://mediqlogix.com/partners",
    title: "Partners | Mediqlogix",
    description: "Partners",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Partners page Thumbnail",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/partners",
  },
};

const PartnersPage = () => {
  const tabs = {
    heading: "Partners",
    tabs: [
      { id: 1, label: "Partners", href: "/partners" },
      { id: 2, label: "Contact", href: "/contact" },
    ],
  };
  return (
    <TabLayout {...tabs}>
      <Partners />
    </TabLayout>
  );
};

export default PartnersPage;
