import Contact from "@/app/components/mediQm/contact/contact";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";
import { getMediqmPage } from "../../../sanity/lib/client";
import { refactorMediqm } from "@/utils/mediqm";

export const metadata: Metadata = {
  title: "Contact | Mediqlogix",
  description: "Feel free to contact Mediqlogix for any questions and concerns",
  alternates: {
    canonical: "https://mediqlogix.com/contact",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    url: "https://mediqlogix.com/contact",
    title: "Contact | Mediqlogix",
    description:
      "Feel free to contact Mediqlogix for any questions and concerns",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Contact page Thumbnail",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/contact",
    description:
      "Feel free to contact Mediqlogix for any questions and concerns",
  },
};

export default async function ContactPage() {
  let MediQmPageData = await getMediqmPage(
    process.env.NEXT_PUBLIC_SANITY_TOKEN
  );
  MediQmPageData = refactorMediqm(MediQmPageData);
  const tabs = {
    heading: "Contact",
    tabs: [
      { id: 1, label: "Partners", href: "/partners" },
      { id: 2, label: "Contact", href: "/contact" },
      { id: 2, label: "Careers", href: "/careers" },
    ],
  };

  return (
    <TabLayout {...tabs}>
      <Contact {...MediQmPageData.contact} />
    </TabLayout>
  );
}
