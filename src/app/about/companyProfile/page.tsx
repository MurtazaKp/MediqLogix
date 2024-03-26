import CompanyProfile from "@/app/components/about/companyProfile/companyProfile";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import React from "react";

const CompanyProfilePage = () => {
  const tabs = {
    heading: "Comapny Profile",
    tabs: [
      { id: 1, label: "Company Profile", href: "/about/companyProfile" },
      { id: 2, label: "Vision and Mission", href: "/about/visionMission" },
      { id: 3, label: "Our Team", href: "/about/ourTeam" },
      {
        id: 4,
        label: "Corporate Governance",
        href: "about/corporateGovernance",
      },
    ],
  };
  return (
    <div>
      <TabLayout {...tabs}>
        <CompanyProfile />
      </TabLayout>
    </div>
  );
};

export default CompanyProfilePage;
