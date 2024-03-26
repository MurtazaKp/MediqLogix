import Contact from "@/app/components/mediQm/contact/contact";
import TabLayout from "@/app/components/tabLayout/tabLayout";
import React from "react";

const ContactPage = () => {
  const tabs = {
    heading: "Contact",
    tabs: [
      { id: 1, label: "Contact", href: "/mediQM/partners" },
      { id: 2, label: "Contact", href: "/mediQM/contact" },
    ],
  };
  return (
    <TabLayout {...tabs}>
      <Contact />
    </TabLayout>
  );
};

export default ContactPage;
