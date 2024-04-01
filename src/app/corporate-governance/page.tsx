import CorporateGovernance from "@/app/components/about/corporateGovernance/corporateGovernance";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Corporate Governance | Mediqlogix",
  description: "MediQlogix has embraced corporate governance principles.",
  alternates: {
    canonical: '/corporate-governance',
    languages: {
      'en-US': '/en-US'
    },
  },
  openGraph: {
    url: "https://mediqlogix.com/corporate-governance",
    title: "Corporate Governance | Mediqlogix",
    description: "MediQlogix has embraced corporate governance principles.",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Corporate Governance",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/corporate-governance",
  },
};

const CorporateGovernancPage = () => {
  const tabs = {
    heading: "Corporate Governance",
    tabs: [
      { id: 1, label: "Company Profile", href: "/company-profile" },
      { id: 2, label: "Vision and Mission", href: "/vision-mission" },
      { id: 3, label: "Our Team", href: "/our-team" },
      {
        id: 4,
        label: "Corporate Governance",
        href: "/corporate-governance",
      },
    ],
  };
  return (
    <div>
      <TabLayout {...tabs}>
        <CorporateGovernance />
      </TabLayout>
    </div>
  );
};

export default CorporateGovernancPage;
