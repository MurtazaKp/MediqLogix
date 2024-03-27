import QualityManagement from "@/app/components/service/qualityManagement/qualityManagement";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Quality Management | Mediqlogix",
  description: "Quality Management page ",
  alternates: {
    canonical: "https://mediqlogix.com/service/quality-management",
  },
  openGraph: {
    url: "https://mediqlogix.com/service/quality-management",
    title: "Quality Management | Mediqlogix",
    description: "Quality Management",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Quality Management page Thumbnail",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/service/quality-management",
  },
};

const QualityManagementPage = () => {
  const tabs = {
    heading: "Quality Management Education & Training",
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
    <TabLayout {...tabs}>
      <QualityManagement />
    </TabLayout>
  );
};

export default QualityManagementPage;
