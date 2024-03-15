"use client";
import React, { useState } from "react";
import AboutContent from "../aboutContent/aboutContent";
import VisionMission from "../visionMission/visionMission";
import CorporateGovernance from "../corporateGovernance/corporateGovernance";
import CompanyProfile from "../companyProfile/companyProfile";
import MeetTeam from "../meetTeam/meetTeam";

const AboutUs = () => {
  const [activeLink, setActiveLink] = useState("About");

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };

  const tabs = [
    { id: 1, label: "Company Profile" },
    { id: 2, label: "Vision and Mission" },
    { id: 3, label: "Our Team" },
    { id: 4, label: "Corporate Governance" },
  ];

  return (
    <div className="py-12 bg-secondary-gray min-h-[100vh]">
      <div className=" mx-auto sm:px-6 lg:px-32 px-8 ">
        <div className="w-full pb-1 overflow-x-auto">
          <nav className="flex flex-col lg:flex-row justify-between items-stretch sm:items-center gap-4">
            <p className="text-tertiary-heading text-primary-blue font-bold">
              {activeLink}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              {tabs.map((link) => (
                <button
                  key={link.id}
                  className={`py-3 px-6 sm:px-3 lg:px-6 rounded-full border border-black ${
                    activeLink === link.label ? "bg-black text-white " : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.label);
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
        <div className=" pt-6 mx-auto  ">
          {activeLink === "About" && (
            <div>
              <AboutContent />
            </div>
          )}
          {activeLink === "Company Profile" && (
            <div>
              <CompanyProfile />
            </div>
          )}
          {activeLink === "Vision and Mission" && (
            <div>
              <VisionMission />
            </div>
          )}
          {activeLink === "Our Team" && (
            <div>
              <MeetTeam />
            </div>
          )}
          {activeLink === "Corporate Governance" && (
            <div>
              <CorporateGovernance />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
