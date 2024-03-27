import Contact from "@/app/components/mediQm/contact/contact";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact | Mediqlogix",
  description: "Contact page ",
  alternates: {
    canonical: "https://mediqlogix.com/contact",
  },
  openGraph: {
    url: "https://mediqlogix.com/contact",
    title: "Contact | Mediqlogix",
    description: "Contact",
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
  },
};

const ContactPage = () => {
  const tabs = {
    heading: "Contact",
    tabs: [
      { id: 1, label: "Partners", href: "/partners" },
      { id: 2, label: "Contact", href: "/contact" },
    ],
  };

  return (
    <TabLayout {...tabs}>
      <Contact />
    </TabLayout>
  );
};

export default ContactPage;
