import MediQmSolution from "@/app/components/software/mediQmSolution/mediQmSolution";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "MediQm Solution | Mediqlogix",
  description: "Mediqm Solution page ",
  alternates: {
    canonical: "https://mediqlogix.com/software/mediqm-solution",
  },
  openGraph: {
    url: "https://mediqlogix.com/software/mediqm-solution",
    title: "Mediqm Solution | Mediqlogix",
    description: "Mediqm Platform",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Mediqm Solution page Thumbnail",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/software/mediqm-solution",
  },
};

const MediqmSolutionPage = () => {
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
        <MediQmSolution />
      </TabLayout>
    </div>
  );
};

export default MediqmSolutionPage;
