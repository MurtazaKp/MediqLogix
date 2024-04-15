import React from "react";
import Services from "../components/service/service";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import TabLayout from "../components/tabLayout/tabLayout";
import ServiceContent from "../components/service/serviceContent/serviceContent";
import { Metadata } from "next";
import { getServicesPage } from "../../../sanity/lib/client";

export const metadata: Metadata = {
  title: "Services | Mediqlogix",
  description:
    "Mediqlogix provides a large no of services for hospital quality management",
  alternates: {
    canonical: "https://mediqlogix.com/services",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    url: "https://mediqlogix.com/services",
    title: "Service | Mediqlogix",
    description:
      "Mediqlogix provides a large no of services for hospital quality management",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Services",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/services",
  },
};

export default async function Service() {
  let serviceData = await getServicesPage(process.env.NEXT_PUBLIC_SANITY_TOKEN);

  const tabs = {
    heading: "Services",
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
        <ServiceContent {...serviceData.services} />
      </TabLayout>
    </div>
  );
}
