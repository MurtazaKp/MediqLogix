import React from "react";
import Careers from "../components/career/career";
import TabLayout from "../components/tabLayout/tabLayout";
import { Metadata } from "next";
import { getMediqmPage } from "../../../sanity/lib/client";
import { refactorMediqm } from "@/utils/mediqm";

export const metadata: Metadata = {
  title: "Careers at Mediqlogix",
  description: "Join the experienced team to grow your career with Mediqlogix",
  alternates: {
    canonical: "https://mediqlogix.com/careers",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    url: "https://mediqlogix.com/careers",
    title: "Careers at Mediqlogix",
    description:
      "Join the experienced team to grow your career with Mediqlogix",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Careers",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/contact",
    description:
      "Join the experienced team to grow your career with Mediqlogix",
  },
};

export default async function CareersPage() {
  let MediQmPageData = await getMediqmPage(
    process.env.NEXT_PUBLIC_SANITY_TOKEN
  );
  MediQmPageData = refactorMediqm(MediQmPageData);
  console.log(MediQmPageData);

  const tabs = {
    heading: "Careers",
    tabs: [
      { id: 1, label: "Partners", href: "/partners" },
      { id: 2, label: "Contact", href: "/contact" },
      { id: 2, label: "Careers", href: "/careers" },
    ],
  };
  return (
    <TabLayout {...tabs}>
      <Careers {...MediQmPageData.career} />
    </TabLayout>
  );
}
