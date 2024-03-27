import CloudMediQm from "@/app/components/software/cloudMediQm/cloudMediQm";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Cloud MediQM | Mediqlogix",
  description: "Cloud MediQM page ",
  alternates: {
    canonical: "https://mediqlogix.com/software/cloud-mediqm",
  },
  openGraph: {
    url: "https://mediqlogix.com/software/cloud-mediqm",
    title: "Cloud MediQM | Mediqlogix",
    description: "Cloud MediQM",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Cloud MediQM page Thumbnail",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/software/cloud-mediqm",
  },
};

const CloudMediQmPage = () => {
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
      <TabLayout {...tabs}>
        <CloudMediQm />
      </TabLayout>
    </div>
  );
};

export default CloudMediQmPage;
