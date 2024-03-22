"use client";
import React, { useState } from "react";
import LatestWork from "../latestWork/latestWork";
import MediQMContent from "./mediQMContent/mediQmContent";
import Partners from "./partners/partners";
import Contact from "./contact/contact";
import { useSearchParams } from "next/navigation";

const MediQM = () => {
  const paramURL = useSearchParams();

  const active = paramURL.get("tab");

  const [activeLink, setActiveLink] = useState(active || "Partners");

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };

  const tabs = [
    { id: 1, label: "Partners" },
    { id: 1, label: "Contact" },
  ];

  return (
    <div className="py-12 pb-[30px] bg-secondary-gray xl:min-h-[calc(100vh-424px)]">
      <div className=" mx-auto sm:px-6 xl:px-[139px] px-8 ">
        <div className="w-full pb-1 overflow-x-auto">
          <nav className="flex flex-col lg:flex-row justify-between items-stretch sm:items-center gap-4 py-1">
            <p className="text-tertiary-heading lg:w-4/12 xl:w-3/12 text-primary-blue font-bold">
              {activeLink}
            </p>
            <div className="flex flex-col items-stretch lg:justify-end sm:flex-row lg:w-8/12 gap-3">
              {tabs.map((link) => (
                <div
                  className="relative flex w-full lg:w-auto items-stretch"
                  key={link.id}
                >
                  <button
                    className={`py-1 px-4 w-full lg:w-[200px]   z-10   rounded-full border border-black ${
                      activeLink === link.label ? "bg-black text-white " : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.label);
                    }}
                  >
                    {link.label}
                  </button>
                  {activeLink === link.label && (
                    <div className="w-4 absolute top-0 -left-1 z-[40] h-4 rounded-full bg-primary-green"></div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
        <div className=" gap-6">
          <div className=" w-full  ">
            <div className=" pt-[30px] mx-auto  w-full ">
              {activeLink === "MediQM" && (
                <div>
                  <MediQMContent />
                </div>
              )}
              {activeLink === "Partners" && (
                <div>
                  <Partners />
                </div>
              )}
              {activeLink === "Contact" && (
                <div>
                  <Contact />
                </div>
              )}
            </div>
          </div>
          {/* <div className="hidden border-s-2 ps-7 border-gray-300 mt-6 lg:block lg:w-3/12 p-2 pt-0">
            <LatestWork />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MediQM;
