import MediQmPlatform from "@/app/components/software/mediQmPlatform/mediQmPlatform";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mediqm Platform | Mediqlogix",
  description: "Mediqm Platform page ",
  alternates: {
    canonical: "https://mediqlogix.com/software/mediqm-platform",
  },
  openGraph: {
    url: "https://mediqlogix.com/software/mediqm-platform",
    title: "Mediqm Platform | Mediqlogix",
    description: "Mediqm Platform",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Mediqm Platform page Thumbnail",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/software/mediqm-platform",
  },
};

const MediQmPlatformPage = () => {
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
    <TabLayout {...tabs}>
      <MediQmPlatform />
    </TabLayout>
  );
};

export default MediQmPlatformPage;
