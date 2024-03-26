import MeetTeam from "@/app/components/meetTeam/meetTeam";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import React from "react";

const OurTeamPage = () => {
  const tabs = {
    heading: "Our Team",
    tabs: [
      { id: 1, label: "Company Profile", href: "/about/companyProfile" },
      { id: 2, label: "Vision and Mission", href: "/about/visionMission" },
      { id: 3, label: "Our Team", href: "/about/ourTeam" },
      {
        id: 4,
        label: "Corporate Governance",
        href: "/about/corporateGovernance",
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
