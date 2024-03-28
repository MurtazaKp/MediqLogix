import MeetTeam from "@/app/components/meetTeam/meetTeam";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Team | Mediqlogix",
  description: "Our Team ",
  alternates: {
    canonical: "https://mediqlogix.com/our-team",
  },
  openGraph: {
    url: "https://mediqlogix.com/our-team",
    title: "Our Team | Mediqlogix",
    description: "Our Team",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Our Team Page Thumbnail",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/our-team",
  },
};

const OurTeamPage = () => {
  const tabs = {
    heading: "About Us",
    tabs: [
      { id: 1, label: "Company Profile", href: "/company-profile" },
      { id: 2, label: "Vision and Mission", href: "/vision-mission" },
      { id: 3, label: "Our Team", href: "/our-team" },
      {
        id: 3,
        label: "Corporate Governance",
        href: "/corporate-governance",
      },
    ],
  };
  return (
    <div>
      <TabLayout {...tabs}>
        <MeetTeam />
      </TabLayout>
    </div>
  );
};

export default OurTeamPage;
