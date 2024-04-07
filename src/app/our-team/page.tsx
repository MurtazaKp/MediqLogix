import MeetTeam from "@/app/components/meetTeam/meetTeam";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import { Metadata } from "next";
import React from "react";
import { getTeamPage } from "../../../sanity/lib/client";
import { refactorOurTeam } from "@/utils/ourTeam";

export const metadata: Metadata = {
  title: "Our Team | Mediqlogix",
  description: "Meet the MediQlogix Team: Discover the expertise behind our mission to enhance hospital quality management.",
  alternates: {
    canonical: '/our-team',
    languages: {
      'en-US': '/en-US'
    },
  },
  openGraph: {
    url: "https://mediqlogix.com/our-team",
    title: "Our Team | Mediqlogix",
    description: "Meet the MediQlogix Team: Discover the expertise behind our mission to enhance hospital quality management.",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Our Team",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/our-team",
  },
};

export default async function OurTeamPage() {
  let teamPageData = await getTeamPage(
    process.env.NEXT_PUBLIC_SANITY_TOKEN
  );

  teamPageData=refactorOurTeam(teamPageData)

  console.log(teamPageData);
  



  
  const tabs = {
    heading: "Our Team",
    tabs: [
      { id: 1, label: "Company Profile", href: "/company-profile" },
      { id: 2, label: "Vision and Mission", href: "/vision-mission" },
      { id: 3, label: "Our Team", href: "/our-team" },
      {
        id: 3,
        label: "Corporate Governance",
        href: "/corporate-governance",
      },
    ],
  };
  return (
    <div>
      <TabLayout {...tabs}>
        <MeetTeam {...teamPageData} />
      </TabLayout>
    </div>
  );
};


