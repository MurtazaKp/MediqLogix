import HospitalSafety from "@/app/components/service/hospitalSafety/hospitalSafety";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Hospital Safety | Mediqlogix",
  description: "Hospital Safety page ",
  alternates: {
    canonical: "https://mediqlogix.com/service/hospital-safety",
  },
  openGraph: {
    url: "https://mediqlogix.com/service/hospital-safety",
    title: "Hospital Safety | Mediqlogix",
    description: "Hospital Safety",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Hospital Safety page Thumbnail",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/service/hospital-safety",
  },
};

const HospitalSafetyPage = () => {
  const tabs = {
    heading: "Hospital Safety Consulting",
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
      <HospitalSafety />
    </TabLayout>
  );
};

export default HospitalSafetyPage;
