import MeetTeam from "@/app/components/meetTeam/meetTeam";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import React from "react";

const OurTeamPage = () => {
  const tabs = {
    heading: "Our Team",
    tabs: [
      { id: 1, label: "Company Profile", href: "/about/company-profile" },
      { id: 2, label: "Vision and Mission", href: "/about/vision-mission" },
      // { id: 3, label: "Our Team", href: "/about/our-team" },
      {
        id: 3,
        label: "Corporate Governance",
        href: "/about/corporate-governance",
      },
    ],
  };
  return (
    <div>
      <TabLayout {...tabs}>
        <MeetTeam />
      </TabLayout>
    </div>
  );
};

export default OurTeamPage;
