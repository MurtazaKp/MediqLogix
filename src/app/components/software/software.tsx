"use client";
import React, { useEffect, useState } from "react";
import SoftwareContent from "./softwareContent/softwareContent";
import CloudMediQm from "./cloudMediQm/cloudMediQm";
import MediQmMobility from "./mediQmMobility/mediQmMobility";
import MediQmPlatform from "./mediQmPlatform/mediQmPlatform";
import MediQmSolution from "./mediQmSolution/mediQmSolution";

const SoftwareProducts = () => {
  // const paramURL = useSearchParams();

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
  // useEffect(() => {
  //   paramURL.get("active")
  //     ? setActiveLink(paramURL.get("active") || "")
  //     : setActiveLink("Software Products");
  // }, [paramURL]);
  console.log("Active", activeLink);
  return (
    <div className="py-12 pb-[30px] bg-secondary-gray xl:min-h-[calc(100vh-424px)]">
      <div className=" mx-auto sm:px-6 xl:px-32 px-8 ">
        <div className="w-full pb-1 overflow-x-auto">
          <nav className="flex flex-col lg:flex-row justify-between items-stretch sm:items-center gap-4 py-1">
            <p className="text-[22.5px]  leading-5 text-primary-blue font-bold">
              Software Products
            </p>
            <div className="flex flex-col items-stretch sm:flex-row justify-end  gap-3 lg:w-9/12">
              {tabs.map((link) => (
                <div className="relative w-full lg:w-auto flex" key={link.id}>
                  <button
                    className={`py-2 px-2 w-full HelveticaNeue-Regular lg:w-auto text-[14.5px]  z-10  rounded-full border border-black ${
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
                    <div className="w-3 absolute -top-1 left-1 z-[40] h-3 rounded-full bg-primary-green"></div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
        <div className="flex gap-6">
          <div className="">
            <div className=" pt-[30px] mx-auto  ">
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
            {/* <div>
              <Blog />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareProducts;
