import CompanyProfile from "@/app/components/about/companyProfile/companyProfile";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";

import React from "react";
export const metadata: Metadata = {
  title: "Company Profile | Mediqlogix",
  description: "Company Profile page ",
  alternates: {
    canonical: "https://mediqlogix.com/company-profile",
  },
  openGraph: {
    url: "https://mediqlogix.com/company-profile",
    title: "Company Profile | Mediqlogix",
    description: "Company Profile",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Company Profile Page Thumbnail",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/company-profile",
  },
};

const CompanyProfilePage = () => {
  const tabs = {
    heading: "Comapany Profile",
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
        <CompanyProfile />
      </TabLayout>
    </div>
  );
};

export default CompanyProfilePage;
