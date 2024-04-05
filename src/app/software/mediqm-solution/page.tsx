import MediQmSolution from "@/app/components/software/mediQmSolution/mediQmSolution";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";
import { getSoftwareProductPage } from "../../../../sanity/lib/client";
import { refactorSoftware } from "@/utils/software";

export const metadata: Metadata = {
  title: "MediQm Solution | Mediqlogix",
  description:
    "The AI-enabled data extraction solution from the MediQM platform can improve your hospital quality management",
  alternates: {
    canonical: "https://mediqlogix.com/software/mediqm-solution",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    url: "https://mediqlogix.com/software/mediqm-solution",
    title: "Mediqm Solution | Mediqlogix",
    description:
      "The AI-enabled data extraction solution from the MediQM platform can improve your Healthcare Management",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Mediqm Solution",
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

export default async function MediqmSolutionPage() {
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
      <TabLayout {...tabs}>
        <MediQmSolution {...SoftwarePageData.mediqmSolution} />
      </TabLayout>
    </div>
  );
}
