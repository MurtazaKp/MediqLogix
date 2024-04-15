import HospitalQuality from "@/app/components/service/hospitalQuality/hospitalQuality";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";
import { getServicesPage } from "../../../../sanity/lib/client";

export const metadata: Metadata = {
  title: "Hospital Quality Services | Mediqlogix",
  description:
    "Optimize healthcare delivery with comprehensive quality metrics. Harness integrated IT systems for enhanced patient care.",
  alternates: {
    canonical: "https://mediqlogix.com/services/hospital-quality",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    url: "https://mediqlogix.com/services/hospital-quality",
    title: "Hospital Quality Services | Mediqlogix",
    description:
      "Optimize healthcare delivery with comprehensive quality metrics. Harness integrated IT systems for enhanced patient care.",
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

export default async function HospitalQualityPage() {
  let ServicePageData = await getServicesPage(
    process.env.NEXT_PUBLIC_SANITY_TOKEN
  );

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
        <HospitalQuality {...ServicePageData.hospitalQuality} />
      </TabLayout>
    </div>
  );
}
