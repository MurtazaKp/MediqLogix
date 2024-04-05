import QualityManagement from "@/app/components/service/qualityManagement/qualityManagement";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";
import { getServicesPage } from "../../../../sanity/lib/client";

export const metadata: Metadata = {
  title: "Quality Management Services | Mediqlogix",
  description:
    "Empower hospitals with AI-driven solutions for compliance and financial benefits. Elevate quality management through data-driven insights.",
  alternates: {
    canonical: "https://mediqlogix.com/services/quality-management",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    url: "https://mediqlogix.com/services/quality-management",
    title: "Quality Management Services | Mediqlogix",
    description:
      "Empower hospitals with AI-driven solutions for compliance and financial benefits. Elevate quality management through data-driven insights.",
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
    site: "https://mediqlogix.com/services/quality-management",
  },
};

export default async function QualityManagementPage() {
  let ServicePageData = await getServicesPage(
    process.env.NEXT_PUBLIC_SANITY_TOKEN
  );

  const tabs = {
    heading: "Quality Management Education & Training",
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
    <TabLayout {...tabs}>
      <QualityManagement {...ServicePageData.qualityManagement} />
    </TabLayout>
  );
}
