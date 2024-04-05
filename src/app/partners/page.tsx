import Partners from "@/app/components/mediQm/partners/partners";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";
import { getMediqmPage } from "../../../sanity/lib/client";
import { refactorMediqm } from "@/utils/mediqm";

export const metadata: Metadata = {
  title: "Partners | Mediqlogix",
  description:
    "Discover our valued partners: Collaborating to advance healthcare with innovative solutions and unparalleled expertise",
  alternates: {
    canonical: "https://mediqlogix.com/partners",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    url: "https://mediqlogix.com/partners",
    title: "Partners | Mediqlogix",
    description:
      "Discover our valued partners: Collaborating to advance healthcare with innovative solutions and unparalleled expertise",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Partners",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/partners",
    description:
      "Discover our valued partners: Collaborating to advance healthcare with innovative solutions and unparalleled expertise",
  },
};

export default async function PartnersPage() {
  let MediQmPageData = await getMediqmPage(
    process.env.NEXT_PUBLIC_SANITY_TOKEN
  );
  MediQmPageData = refactorMediqm(MediQmPageData);
  const tabs = {
    heading: "Partners",
    tabs: [
      { id: 1, label: "Partners", href: "/partners" },
      { id: 2, label: "Contact", href: "/contact" },
      { id: 2, label: "Careers", href: "/careers" },
    ],
  };
  return (
    <TabLayout {...tabs}>
      <Partners data={MediQmPageData.partners} />
    </TabLayout>
  );
}
