import HospitalQuality from "@/app/components/service/hospitalQuality/hospitalQuality";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Hospital Quality | Mediqlogix",
  description: "Hospital Quality page ",
  alternates: {
    canonical: "https://mediqlogix.com/service/hospital-quality",
  },
  openGraph: {
    url: "https://mediqlogix.com/service/hospital-quality",
    title: "Hospital Quality | Mediqlogix",
    description: "Hospital Quality",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Hospital Quality page Thumbnail",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/service/hospital-quality",
  },
};

const HospitalQualityPage = () => {
  const tabs = {
    heading: "Hospital Quality",
    tabs: [
      {
        id: 1,
        label: "Hospital Quality Consulting",
        href: "/service/hospital-quality",
      },
      {
        id: 2,
        label: "Quality Management Education & Training",
        href: "/service/quality-management",
      },
      {
        id: 3,
        label: "Hospital Safety Consulting",
        href: "/service/hospital-safety",
      },
    ],
  };
  return (
    <div>
      <TabLayout {...tabs}>
        <HospitalQuality />
      </TabLayout>
    </div>
  );
};

export default HospitalQualityPage;
