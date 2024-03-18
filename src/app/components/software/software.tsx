"use client";
import React, { useState } from "react";
import Blog from "../blog/blog";
import SoftwareContent from "./softwareContent/softwareContent";
import CloudMediQm from "./cloudMediQm/cloudMediQm";
import MediQmMobility from "./mediQmMobility/mediQmMobility";
import MediQmPlatform from "./mediQmPlatform/mediQmPlatform";
import MediQmSolution from "./mediQmSolution/mediQmSolution";
import LatestWork from "../latestWork/latestWork";

const SoftwareProducts = () => {
  const [activeLink, setActiveLink] = useState("Software Products");

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };

  const tabs = [
    { id: 1, label: "Cloud MediQM" },
    { id: 2, label: "MediQM Mobility" },
    { id: 3, label: "MediQM Platform" },
    { id: 4, label: "MediQM Solution" },
  ];

  return (
    <div className="py-12 bg-secondary-gray min-h-[100vh]">
      <div className=" mx-auto sm:px-6 xl:px-32 px-8 ">
        <div className="w-full pb-1 overflow-x-auto">
          <nav className="flex flex-col lg:flex-row justify-between items-stretch sm:items-center gap-4 py-1">
            <p className="text-tertiary-heading text-primary-blue font-bold">
              {activeLink}
            </p>
            <div className="flex flex-col items-stretch sm:flex-row justify-end  gap-3 lg:w-9/12">
              {tabs.map((link) => (
                <div className="relative w-full lg:w-auto flex" key={link.id}>
                  <button
                    className={`py-2 px-2 w-full lg:w-auto  z-10  rounded-full border border-black ${
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
                    <div className="w-3 absolute -top-1 left-5 z-[100000] h-3 rounded-full bg-primary-green"></div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
        <div className="flex gap-6">
          <div className="lg:w-9/12">
            <div className=" pt-6 mx-auto  ">
              {activeLink === "Software Products" && (
                <div>
                  <SoftwareContent />
                </div>
              )}
              {activeLink === "Cloud MediQM" && (
                <div>
                  <CloudMediQm />
                </div>
              )}
              {activeLink === "MediQM Mobility" && (
                <div>
                  <MediQmMobility />
                </div>
              )}
              {activeLink === "MediQM Platform" && (
                <div>
                  <MediQmPlatform />
                </div>
              )}
              {activeLink === "MediQM Solution" && (
                <div>
                  <MediQmSolution />
                </div>
              )}
            </div>
            <div>
              <Blog />
            </div>
          </div>
          <div className="hidden lg:block lg:w-3/12 p-2">
            <LatestWork />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareProducts;
