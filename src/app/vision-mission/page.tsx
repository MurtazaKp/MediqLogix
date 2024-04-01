import VisionMission from "@/app/components/about/visionMission/visionMission";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Vision Mission | Mediqlogix",
  description: "Explore MediQlogix's Vision Mission: Driving innovation in healthcare since 2004. Discover our commitment to revolutionize hospital quality management for superior patient care.",
  alternates: {
    canonical: '/vision-mission',
    languages: {
      'en-US': '/en-US'
    },
  },
  openGraph: {
    url: "https://mediqlogix.com/vision-mission",
    title: "Vision Mission | Mediqlogix",
    description: "Explore MediQlogix's Vision Mission: Driving innovation in healthcare since 2004. Discover our commitment to revolutionize hospital quality management for superior patient care.",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Vision Mission page Thumbnail",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/vision-mission",
  },
};

const VisionMisionPage = () => {
  const tabs = {
    heading: "Vision Mission",
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
        <VisionMission />
      </TabLayout>
    </div>
  );
};

export default VisionMisionPage;
