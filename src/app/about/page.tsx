import AboutUs from "@/app/components/about/about";
import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import TabLayout from "../components/tabLayout/tabLayout";
import AboutContent from "../components/about/aboutContent/aboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Mediqlogix",
  description: "Aboutpage ",
  alternates: {
    canonical: "https://mediqlogix.com/about",
  },
  openGraph: {
    url: "https://mediqlogix.com/about",
    title: "About | Mediqlogix",
    description: "About",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix About page Thumbnail",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/about",
  },
};

const About = () => {
  const tabs = {
    heading: "About Us",
    tabs: [
      { id: 1, label: "Company Profile", href: "/company-profile" },
      { id: 2, label: "Vision and Mission", href: "/vision-mission" },
      { id: 3, label: "Our Team", href: "/about/our-team" },
      {
        id: 3,
        label: "Corporate Governance",
        href: "/corporate-governance",
      },
    ],
  };
  return (
    <div className="">
      <TabLayout {...tabs}>
        <AboutContent />
      </TabLayout>
    </div>
  );
};

export default About;
