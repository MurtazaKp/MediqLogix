import VisionMission from "@/app/components/about/visionMission/visionMission";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import React from "react";

const VisionMisionPage = () => {
  const tabs = {
    heading: "Vision and Mission",
    tabs: [
      { id: 1, label: "Company Profile", href: "/about/companyProfile" },
      { id: 2, label: "Vision and Mission", href: "/about/visionMission" },
      { id: 3, label: "Our Team", href: "/about/ourTeam" },
      { id: 4, label: "Corporate Governance", href: "/corporateGovernance" },
    ],
  };
  return (
    <div>
      <TabLayout {...tabs}>
        <VisionMission />
      </TabLayout>
    </div>
  );
};

export default VisionMisionPage;
