import HospitalSafety from "@/app/components/service/hospitalSafety/hospitalSafety";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";
import { getServicesPage } from "../../../../sanity/lib/client";

export const metadata: Metadata = {
  title: "Hospital Safety | Mediqlogix",
  description:
    "Enhance hospital safety with expert consulting services. Our tailored solutions prioritize compliance and risk management for optimal patient care.",
  alternates: {
    canonical: "https://mediqlogix.com/services/hospital-safety",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    url: "https://mediqlogix.com/services/hospital-safety",
    title: "Hospital Safety | Mediqlogix",
    description:
      "Enhance hospital safety with expert consulting services. Our tailored solutions prioritize compliance and risk management for optimal patient care.",
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
    site: "https://mediqlogix.com/services/hospital-safety",
    description:
      "Enhance hospital safety with expert consulting services. Our tailored solutions prioritize compliance and risk management for optimal patient care.",
  },
};

export default async function HospitalSafetyPage() {
  let ServicePageData = await getServicesPage(
    process.env.NEXT_PUBLIC_SANITY_TOKEN
  );

  const tabs = {
    heading: "Hospital Safety Consulting",
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
      <HospitalSafety {...ServicePageData.hospitalSafety} />
    </TabLayout>
  );
}
