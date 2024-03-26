import CompanyProfile from "@/app/components/about/companyProfile/companyProfile";
import TabLayout from "@/app/components/tabLayout/tabLayout";

import React from "react";

const CompanyProfilePage = () => {
  const tabs = {
    heading: "Comapny Profile",
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
        <CompanyProfile />
      </TabLayout>
    </div>
  );
};

export default CompanyProfilePage;
