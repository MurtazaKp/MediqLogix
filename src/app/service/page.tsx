import React from "react";
import Services from "../components/service/service";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import TabLayout from "../components/tabLayout/tabLayout";
import ServiceContent from "../components/service/serviceContent/serviceContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Mediqlogix",
  description: "Services page ",
  alternates: {
    canonical: "https://mediqlogix.com/service",
  },
  openGraph: {
    url: "https://mediqlogix.com/service",
    title: "Service | Mediqlogix",
    description: "Service",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Service page Thumbnail",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/service",
  },
};

const Service = () => {
  const tabs = {
    heading: "Services",
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
        <ServiceContent />
      </TabLayout>
    </div>
  );
};

export default Service;
