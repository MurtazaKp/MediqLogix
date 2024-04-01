import HospitalQuality from "@/app/components/service/hospitalQuality/hospitalQuality";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Hospital Quality Services | Mediqlogix",
  description: "Optimize healthcare delivery with comprehensive quality metrics. Harness integrated IT systems for enhanced patient care.",
  alternates: {
    canonical: "https://mediqlogix.com/services/hospital-quality",
    languages: {
      'en-US': '/en-US'
    },
  },
  openGraph: {
    url: "https://mediqlogix.com/services/hospital-quality",
    title: "Hospital Quality Services | Mediqlogix",
    description: "Optimize healthcare delivery with comprehensive quality metrics. Harness integrated IT systems for enhanced patient care.",
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
    site: "https://mediqlogix.com/services/hospital-quality",
  },
};

const HospitalQualityPage = () => {
  const tabs = {
    heading: "Hospital Quality Consulting",
    tabs: [
      {
        id: 1,
        label: "Hospital Quality Consulting",
        href: "/services/hospital-quality",
      },
      {
        id: 2,
        label: "Quality Management Education & Training",
        href: "/services/quality-management",
      },
      {
        id: 3,
        label: "Hospital Safety Consulting",
        href: "/services/hospital-safety",
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
