import CorporateGovernance from "@/app/components/about/corporateGovernance/corporateGovernance";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import React from "react";

const CorporateGovernancPage = () => {
  const tabs = {
    heading: "Corporate Governance",
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
        <CorporateGovernance />
      </TabLayout>
    </div>
  );
};

export default CorporateGovernancPage;
